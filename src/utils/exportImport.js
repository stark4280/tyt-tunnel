/**
 * Progress verilerini JSON olarak dışa aktar
 * @param {Object} progress - Progress objesi
 * @param {Object} settings - Settings objesi  
 */
export const exportBackup = (progress, settings) => {
    const backup = {
        version: '2.0.0',
        exportDate: new Date().toISOString(),
        progress,
        settings
    };

    const dataStr = JSON.stringify(backup, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;

    const dateStr = new Date().toISOString().split('T')[0];
    link.download = `citadel_v2_backup_${dateStr}.json`;

    link.click();
    URL.revokeObjectURL(url);

    console.log('[Export] Backup exported successfully');
};

/**
 * JSON dosyasından veriyi içe aktar
 * @param {File} file - JSON dosyası
 * @returns {Promise<{progress, settings}>}
 */
export const importBackup = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const parsed = JSON.parse(event.target.result);

                // Versiyon kontrolü
                if (!parsed.version || parsed.version !== '2.0.0') {
                    reject(new Error('Yedek dosyası V2.0 formatında değil'));
                    return;
                }

                // Veri validasyonu
                if (!parsed.progress || !parsed.settings) {
                    reject(new Error('Eksik veri: progress veya settings bulunamadı'));
                    return;
                }

                // Temel şema kontrolü
                if (!parsed.progress.days || !parsed.progress.streak) {
                    reject(new Error('Geçersiz progress formatı'));
                    return;
                }

                console.log('[Import] Backup imported successfully');
                resolve({
                    progress: parsed.progress,
                    settings: parsed.settings
                });

            } catch (error) {
                reject(new Error(`JSON parse hatası: ${error.message}`));
            }
        };

        reader.onerror = () => {
            reject(new Error('Dosya okunamadı'));
        };

        reader.readAsText(file);
    });
};

/**
 * Acil durum yedeği oluştur (localStorage'dan direkt)
 */
export const createEmergencyBackup = () => {
    try {
        const progressData = localStorage.getItem('citadel_v2_progress');
        const settingsData = localStorage.getItem('citadel_v2_settings');

        if (!progressData) {
            alert('Yedeklenecek veri bulunamadı');
            return;
        }

        const backup = {
            version: '2.0.0',
            exportDate: new Date().toISOString(),
            progress: JSON.parse(progressData),
            settings: settingsData ? JSON.parse(settingsData) : null
        };

        const dataStr = JSON.stringify(backup, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `citadel_emergency_backup_${Date.now()}.json`;
        link.click();

        URL.revokeObjectURL(url);

        console.log('[Emergency Backup] Created successfully');

    } catch (error) {
        console.error('[Emergency Backup] Failed:', error);
        alert('Acil yedek oluşturulamadı! Konsolu kontrol edin.');
    }
};
