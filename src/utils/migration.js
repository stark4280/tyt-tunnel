import { STORAGE_KEYS, DEFAULT_FILE_IDS } from '../data/constants';

/**
 * V13 verilerini V2 formatına migrate et
 * İlk çalışmada otomatik olarak çağrılır
 */
export const migrateFromV13 = () => {
    const newProgressKey = STORAGE_KEYS.PROGRESS;
    const newSettingsKey = STORAGE_KEYS.SETTINGS;
    const oldKey = STORAGE_KEYS.OLD_V13;

    // Zaten migrate edildiyse çık
    if (localStorage.getItem(newProgressKey)) {
        console.log('[Migration] V2 data already exists, skipping migration');
        return null;
    }

    // Eski veri yoksa çık
    const oldData = localStorage.getItem(oldKey);
    if (!oldData) {
        console.log('[Migration] No V13 data found, starting fresh');
        return null;
    }

    try {
        const old = JSON.parse(oldData);

        console.log('[Migration] Migrating V13 → V2...');

        // Yeni progress şeması
        const migratedProgress = {
            dayIdx: old.dayIdx || 0,
            startDate: null,
            days: {},
            mockExams: [],
            streak: { current: 0, longest: 0, lastActiveDate: null }
        };

        // Eski history dizisini yeni days objesine çevir
        if (Array.isArray(old.history)) {
            old.history.forEach((record, idx) => {
                migratedProgress.days[idx] = {
                    completed: true,
                    date: record.date || new Date().toISOString().split('T')[0],
                    topics: record.topics || ['MIGRATED'],
                    stats: {
                        solved: 0,
                        correct: 0,
                        wrong: 0,
                        blank: 0,
                        net: 0,
                        studyMinutes: 0
                    },
                    weakTags: [],
                    note: 'V1\'den migrate edildi',
                    videoId: record.videoId || null
                };
            });

            console.log(`[Migration] Migrated ${old.history.length} days from history`);
        }

        // Yeni settings şeması
        const migratedSettings = {
            pomodoroWork: 25,
            pomodoroBreak: 5,
            fileIds: DEFAULT_FILE_IDS
        };

        // Yeni formatta kaydet
        localStorage.setItem(newProgressKey, JSON.stringify(migratedProgress));
        localStorage.setItem(newSettingsKey, JSON.stringify(migratedSettings));

        // Eski veriyi yedek olarak tut (silme)
        localStorage.setItem('citadel_v13_backup', oldData);

        console.log('[Migration] ✅ V13 → V2 migration completed');
        console.log('[Migration] Old data backed up as "citadel_v13_backup"');

        // Kullanıcıya bilgi ver
        alert(
            '✅ Verileriniz V2 formatına yükseltildi!\n\n' +
            `${old.history?.length || 0} günlük ilerleme kaydedildi.\n` +
            'Eski verileriniz "citadel_v13_backup" olarak korundu.'
        );

        return migratedProgress;

    } catch (error) {
        console.error('[Migration] Migration failed:', error);
        alert(
            '❌ Veri migration hatası!\n\n' +
            'Lütfen tarayıcı konsolunu kontrol edin.\n' +
            'Eski verileriniz korundu, tekrar deneyin.'
        );
        return null;
    }
};

/**
 * Veri formatı validasyonu
 * @param {Object} progress - Progress objesi
 * @returns {boolean}
 */
export const validateProgressData = (progress) => {
    if (!progress || typeof progress !== 'object') return false;

    const requiredKeys = ['dayIdx', 'days', 'mockExams', 'streak'];
    const hasAllKeys = requiredKeys.every(key => key in progress);

    if (!hasAllKeys) return false;

    // Streak validation
    if (!progress.streak || typeof progress.streak !== 'object') return false;
    if (!('current' in progress.streak) || !('longest' in progress.streak)) return false;

    return true;
};

/**
 * Settings validasyonu
 * @param {Object} settings - Settings objesi
 * @returns {boolean}
 */
export const validateSettingsData = (settings) => {
    if (!settings || typeof settings !== 'object') return false;

    const requiredKeys = ['pomodoroWork', 'pomodoroBreak', 'fileIds'];
    return requiredKeys.every(key => key in settings);
};

/**
 * Bozuk veriyi onar (mümkünse)
 * @param {Object} progress - Progress objesi
 * @returns {Object} Onarılmış progress
 */
export const repairProgressData = (progress) => {
    const repaired = { ...progress };

    // dayIdx kontrolü
    if (typeof repaired.dayIdx !== 'number') {
        repaired.dayIdx = 0;
    }

    // days kontrolü
    if (!repaired.days || typeof repaired.days !== 'object') {
        repaired.days = {};
    }

    // mockExams kontrolü
    if (!Array.isArray(repaired.mockExams)) {
        repaired.mockExams = [];
    }

    // streak kontrolü
    if (!repaired.streak || typeof repaired.streak !== 'object') {
        repaired.streak = { current: 0, longest: 0, lastActiveDate: null };
    } else {
        if (typeof repaired.streak.current !== 'number') repaired.streak.current = 0;
        if (typeof repaired.streak.longest !== 'number') repaired.streak.longest = 0;
    }

    return repaired;
};
