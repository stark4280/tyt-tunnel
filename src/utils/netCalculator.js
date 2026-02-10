/**
 * Net hesaplama: doğru - (yanlış / 4)
 * @param {number} correct - Doğru sayısı
 * @param {number} wrong - Yanlış sayısı
 * @returns {number} Net puan
 */
export const calculateNet = (correct, wrong) => {
    return correct - (wrong / 4);
};

/**
 * İstatistik validasyonu
 * Çözülen = Doğru + Yanlış + Boş olmalı
 * @param {number} solved - Toplam çözülen
 * @param {number} correct - Doğru
 * @param {number} wrong - Yanlış
 * @param {number} blank - Boş
 * @returns {boolean} Geçerli mi?
 */
export const validateStats = (solved, correct, wrong, blank) => {
    return solved === correct + wrong + blank;
};

/**
 * Performans kategorisi hesapla
 * @param {number} net - Net puan
 * @param {number} target - Hedef net
 * @returns {'excellent'|'good'|'fair'|'poor'}
 */
export const getPerformanceLevel = (net, target) => {
    const percentage = (net / target) * 100;

    if (percentage >= 90) return 'excellent';
    if (percentage >= 70) return 'good';
    if (percentage >= 50) return 'fair';
    return 'poor';
};

/**
 * Doğruluk oranı hesapla
 * @param {number} correct - Doğru
 * @param {number} solved - Çözülen
 * @returns {number} Yüzde (0-100)
 */
export const calculateAccuracy = (correct, solved) => {
    if (solved === 0) return 0;
    return (correct / solved) * 100;
};
