import { ref, set, get, onValue, off } from 'firebase/database';
import { database, auth, initAuth } from './config';

let userId = null;
let syncEnabled = false;

/**
 * Firebase senkronizasyonunu başlat
 */
export const initSync = async () => {
    try {
        const user = await initAuth();
        userId = user.uid;
        syncEnabled = true;
        console.log('[Firebase Sync] Initialized for user:', userId);
        return true;
    } catch (error) {
        console.error('[Firebase Sync] Init failed:', error);
        syncEnabled = false;
        return false;
    }
};

/**
 * Veriyi Firebase'e kaydet
 * @param {string} path - Veri yolu (örn: 'progress', 'optiks')
 * @param {any} data - Kaydedilecek veri
 */
export const syncToCloud = async (path, data) => {
    if (!syncEnabled || !userId) {
        console.warn('[Firebase Sync] Not enabled or no user');
        return false;
    }

    try {
        const dataRef = ref(database, `users/${userId}/${path}`);
        await set(dataRef, {
            data,
            updatedAt: new Date().toISOString()
        });
        console.log(`[Firebase Sync] Uploaded: ${path}`);
        return true;
    } catch (error) {
        console.error('[Firebase Sync] Upload failed:', error);
        return false;
    }
};

/**
 * Firebase'den veri çek
 * @param {string} path - Veri yolu
 * @returns {any} - Veri veya null
 */
export const syncFromCloud = async (path) => {
    if (!syncEnabled || !userId) {
        console.warn('[Firebase Sync] Not enabled or no user');
        return null;
    }

    try {
        const dataRef = ref(database, `users/${userId}/${path}`);
        const snapshot = await get(dataRef);
        
        if (snapshot.exists()) {
            const result = snapshot.val();
            console.log(`[Firebase Sync] Downloaded: ${path}`);
            return result.data;
        } else {
            console.log(`[Firebase Sync] No data found: ${path}`);
            return null;
        }
    } catch (error) {
        console.error('[Firebase Sync] Download failed:', error);
        return null;
    }
};

/**
 * Gerçek zamanlı dinleyici ekle
 * @param {string} path - Veri yolu
 * @param {Function} callback - Veri değiştiğinde çağrılacak fonksiyon
 */
export const listenToCloud = (path, callback) => {
    if (!syncEnabled || !userId) {
        console.warn('[Firebase Sync] Not enabled or no user');
        return null;
    }

    const dataRef = ref(database, `users/${userId}/${path}`);
    
    onValue(dataRef, (snapshot) => {
        if (snapshot.exists()) {
            const result = snapshot.val();
            console.log(`[Firebase Sync] Real-time update: ${path}`);
            callback(result.data);
        }
    });

    return dataRef;
};

/**
 * Dinleyiciyi kaldır
 * @param {string} path - Veri yolu
 */
export const stopListening = (path) => {
    if (!userId) return;
    const dataRef = ref(database, `users/${userId}/${path}`);
    off(dataRef);
    console.log(`[Firebase Sync] Stopped listening: ${path}`);
};

/**
 * Tüm verileri senkronize et (progress + optiks + ink)
 */
export const syncAllData = async () => {
    if (!syncEnabled) {
        console.warn('[Firebase Sync] Not enabled');
        return false;
    }

    try {
        // LocalStorage'dan tüm verileri al
        const progress = JSON.parse(localStorage.getItem('tyt_progress') || '{}');
        const settings = JSON.parse(localStorage.getItem('tyt_settings') || '{}');
        
        // IndexedDB'den optik verilerini al
        const { getAllOptiks } = await import('../utils/storage');
        const optiks = await getAllOptiks();

        // Firebase'e yükle
        await syncToCloud('progress', progress);
        await syncToCloud('settings', settings);
        await syncToCloud('optiks', optiks);

        console.log('[Firebase Sync] All data synced to cloud');
        return true;
    } catch (error) {
        console.error('[Firebase Sync] Full sync failed:', error);
        return false;
    }
};

/**
 * Buluttan tüm verileri indir ve yerel depolamaya kaydet
 */
export const downloadAllData = async () => {
    if (!syncEnabled) {
        console.warn('[Firebase Sync] Not enabled');
        return false;
    }

    try {
        // Firebase'den verileri çek
        const progress = await syncFromCloud('progress');
        const settings = await syncFromCloud('settings');
        const optiks = await syncFromCloud('optiks');

        // LocalStorage'a kaydet
        if (progress) {
            localStorage.setItem('tyt_progress', JSON.stringify(progress));
        }
        if (settings) {
            localStorage.setItem('tyt_settings', JSON.stringify(settings));
        }

        // Optikleri IndexedDB'ye kaydet
        if (optiks && Array.isArray(optiks)) {
            const { saveOptik } = await import('../utils/storage');
            for (const optik of optiks) {
                if (optik.day && optik.topicName && optik.answers) {
                    await saveOptik(optik.day, optik.topicName, optik.answers);
                }
            }
        }

        console.log('[Firebase Sync] All data downloaded from cloud');
        return true;
    } catch (error) {
        console.error('[Firebase Sync] Download failed:', error);
        return false;
    }
};

/**
 * Senkronizasyon durumunu kontrol et
 */
export const isSyncEnabled = () => syncEnabled;

/**
 * Kullanıcı ID'sini al
 */
export const getUserId = () => userId;
