import { useState, useEffect } from 'react';

/**
 * Streak hesaplama ve takip
 * @param {Object} streakData - { current, longest, lastActiveDate }
 * @param {Function} onStreakUpdate - Streak güncellendiğinde callback
 * @returns {Object}
 */
export function useStreak(streakData, onStreakUpdate) {
    const [showMilestone, setShowMilestone] = useState(null);

    /**
     * Yeni gün tamamlandığında streak güncelle
     * @param {string} completionDate - ISO format (YYYY-MM-DD)
     */
    const updateStreak = (completionDate) => {
        const today = completionDate;
        const { current, longest, lastActiveDate } = streakData;

        // Aynı gün tekrar tamamlama - değişiklik yok
        if (lastActiveDate === today) {
            return;
        }

        // Dünü hesapla
        const yesterday = new Date(new Date(today).getTime() - 24 * 60 * 60 * 1000)
            .toISOString()
            .split('T')[0];

        let newCurrent;

        if (current === 0 || lastActiveDate === yesterday) {
            // İlk gün veya streak devam ediyor
            newCurrent = current + 1;
        } else {
            // Streak kırıldı
            newCurrent = 1;
        }

        const newLongest = Math.max(longest, newCurrent);

        const newStreak = {
            current: newCurrent,
            longest: newLongest,
            lastActiveDate: today
        };

        // Milestone kontrolü
        checkMilestone(newCurrent);

        // Parent'ı güncelle
        if (onStreakUpdate) {
            onStreakUpdate(newStreak);
        }
    };

    /**
     * Milestone kontrolü
     */
    const checkMilestone = (streak) => {
        const milestones = [
            { streak: 7, emoji: '🔥', msg: '7 günlük streak!' },
            { streak: 10, emoji: '⚡', msg: '10 gün! Unstoppable!' },
            { streak: 14, emoji: '💎', msg: '14 gün! Legend status!' },
            { streak: 21, emoji: '👑', msg: '21 gün! Alışkanlık kazandın!' },
            { streak: 30, emoji: '🚀', msg: '30 günlük streak! Beast mode!' },
            { streak: 50, emoji: '🏆', msg: '50 GÜN! Efsanesin!' },
            { streak: 100, emoji: '🌟', msg: '100 GÜN STREAK! IMMORTAL!' }
        ];

        const milestone = milestones.find(m => m.streak === streak);

        if (milestone) {
            setShowMilestone(milestone);

            // 5 saniye sonra kapat
            setTimeout(() => {
                setShowMilestone(null);
            }, 5000);
        }
    };

    /**
     * Streak tipi belirle (motivasyon için)
     */
    const getStreakLevel = () => {
        const { current } = streakData;

        if (current >= 50) return { level: 'legendary', color: 'gold', label: 'LEGENDARY' };
        if (current >= 21) return { level: 'master', color: 'purple', label: 'MASTER' };
        if (current >= 14) return { level: 'expert', color: 'blue', label: 'EXPERT' };
        if (current >= 7) return { level: 'advanced', color: 'green', label: 'ADVANCED' };
        if (current >= 3) return { level: 'building', color: 'yellow', label: 'BUILDING' };
        return { level: 'starting', color: 'gray', label: 'STARTING' };
    };

    return {
        updateStreak,
        showMilestone,
        streakLevel: getStreakLevel(),
        closeMilestone: () => setShowMilestone(null)
    };
}
