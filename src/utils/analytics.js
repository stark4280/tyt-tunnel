/**
 * Zayıf konuları analiz et
 * @param {Object} days - Tamamlanmış günlerin objesi
 * @returns {Array<[string, number]>} [tag, frekans] çiftlerinin dizisi (büyükten küçüğe)
 */
export const getWeakTopics = (days) => {
    const freq = {};

    Object.values(days).forEach(day => {
        if (day.weakTags && Array.isArray(day.weakTags)) {
            day.weakTags.forEach(tag => {
                freq[tag] = (freq[tag] || 0) + 1;
            });
        }
    });

    return Object.entries(freq).sort((a, b) => b[1] - a[1]);
};

/**
 * Haftalık istatistikleri hesapla
 * @param {Object} days - Tamamlanmış günler
 * @param {number} weekNumber - Hafta numarası (0-indexed)
 * @returns {Object|null} Haftalık analiz verisi
 */
export const getWeeklyStats = (days, weekNumber) => {
    const allDays = Object.values(days);
    const weekDays = allDays.filter((d, idx) =>
        Math.floor(idx / 7) === weekNumber && d.completed
    );

    if (weekDays.length === 0) return null;

    const avgNet = weekDays.reduce((sum, d) => sum + (d.stats?.net || 0), 0) / weekDays.length;
    const totalMinutes = weekDays.reduce((sum, d) => sum + (d.stats?.studyMinutes || 0), 0);
    const totalSolved = weekDays.reduce((sum, d) => sum + (d.stats?.solved || 0), 0);
    const totalCorrect = weekDays.reduce((sum, d) => sum + (d.stats?.correct || 0), 0);
    const totalWrong = weekDays.reduce((sum, d) => sum + (d.stats?.wrong || 0), 0);

    return {
        count: weekDays.length,
        avgNet: parseFloat(avgNet.toFixed(2)),
        totalHours: parseFloat((totalMinutes / 60).toFixed(1)),
        totalMinutes,
        totalSolved,
        totalCorrect,
        totalWrong,
        accuracy: totalSolved > 0 ? parseFloat(((totalCorrect / totalSolved) * 100).toFixed(1)) : 0,
        weakTags: getWeakTopics(
            Object.fromEntries(weekDays.map((d, i) => [i, d]))
        )
    };
};

/**
 * Günlük ortalama net hesapla (son N gün)
 * @param {Object} days - Tamamlanmış günler
 * @param {number} lastN - Son N gün (varsayılan: 7)
 * @returns {number}
 */
export const getAverageNet = (days, lastN = 7) => {
    const completedDays = Object.values(days).filter(d => d.completed);

    if (completedDays.length === 0) return 0;

    const recentDays = completedDays.slice(-lastN);
    const totalNet = recentDays.reduce((sum, d) => sum + (d.stats?.net || 0), 0);

    return parseFloat((totalNet / recentDays.length).toFixed(2));
};

/**
 * Trend analizi (son 7 gün vs önceki 7 gün)
 * @param {Object} days - Tamamlanmış günler
 * @returns {Object}
 */
export const getTrendAnalysis = (days) => {
    const completedDays = Object.values(days).filter(d => d.completed);

    if (completedDays.length < 7) {
        return { trend: 'insufficient_data', change: 0 };
    }

    const recent7 = completedDays.slice(-7);
    const previous7 = completedDays.slice(-14, -7);

    if (previous7.length === 0) {
        return { trend: 'insufficient_data', change: 0 };
    }

    const recentAvg = recent7.reduce((s, d) => s + (d.stats?.net || 0), 0) / recent7.length;
    const previousAvg = previous7.reduce((s, d) => s + (d.stats?.net || 0), 0) / previous7.length;

    const change = parseFloat((recentAvg - previousAvg).toFixed(2));
    const percentChange = previousAvg > 0 ? parseFloat(((change / previousAvg) * 100).toFixed(1)) : 0;

    let trend = 'stable';
    if (change > 2) trend = 'improving';
    else if (change < -2) trend = 'declining';

    return { trend, change, percentChange, recentAvg, previousAvg };
};

/**
 * Toplam çalışma süresi hesapla
 * @param {Object} days - Tamamlanmış günler
 * @returns {Object} { hours, minutes, days: workDayCount }
 */
export const getTotalStudyTime = (days) => {
    const completedDays = Object.values(days).filter(d => d.completed);
    const totalMinutes = completedDays.reduce((sum, d) => sum + (d.stats?.studyMinutes || 0), 0);

    return {
        minutes: totalMinutes,
        hours: parseFloat((totalMinutes / 60).toFixed(1)),
        days: completedDays.length
    };
};

/**
 * Konu bazlı performans analizi
 * @param {Object} days - Tamamlanmış günler
 * @returns {Object} { topicId: { avgNet, count, totalSolved } }
 */
export const getTopicPerformance = (days) => {
    const topicStats = {};

    Object.values(days).forEach(day => {
        if (day.completed && day.topics && day.stats) {
            day.topics.forEach(topicId => {
                if (!topicStats[topicId]) {
                    topicStats[topicId] = { totalNet: 0, count: 0, totalSolved: 0 };
                }

                topicStats[topicId].totalNet += day.stats.net || 0;
                topicStats[topicId].count += 1;
                topicStats[topicId].totalSolved += day.stats.solved || 0;
            });
        }
    });

    // Ortalamaları hesapla
    Object.keys(topicStats).forEach(topicId => {
        const stat = topicStats[topicId];
        stat.avgNet = parseFloat((stat.totalNet / stat.count).toFixed(2));
    });

    return topicStats;
};

/**
 * Milestone kontrolü (kutlama için)
 * @param {number} dayIdx - Güncel gün indexi
 * @param {number} streak - Mevcut streak
 * @returns {string|null} Milestone mesajı
 */
export const checkMilestone = (dayIdx, streak) => {
    const milestones = [
        { day: 7, msg: '🎉 İlk hafta tamamlandı!' },
        { day: 14, msg: '🔥 14 gün! Momentum kazanıyorsun!' },
        { day: 21, msg: '🚀 21 gün = Alışkanlık oluştu!' },
        { day: 30, msg: '👑 1 AY TAMAMLANDI!' },
        { day: 50, msg: '⚡ Yarı yola ulaştın!' },
        { day: 75, msg: '💪 75 gün! Kararlılık şampiyonu!' },
        { day: 90, msg: '🏆 90 GÜN! Efsanesin!' },
        { day: 100, msg: '🎯 100 GÜN! Final sprint!' },
        { day: 105, msg: '👑 TÜNEL TAMAMLANDI! Sınava hazırsın!' }
    ];

    const dayMilestone = milestones.find(m => m.day === dayIdx);

    if (dayMilestone) return dayMilestone.msg;

    // Streak milestones
    if (streak === 10) return '🔥 10 günlük streak! Unstoppable!';
    if (streak === 25) return '🔥 25 günlük streak! Legend!';
    if (streak === 50) return '🔥 50 günlük streak! BEAST MODE!';
    if (streak === 100) return '🔥 100 günlük streak! IMMORTAL!';

    return null;
};
