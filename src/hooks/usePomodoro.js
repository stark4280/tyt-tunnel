import { useState, useEffect, useCallback } from 'react';

/**
 * Timestamp-based Pomodoro timer
 * Tab backgrounded olsa bile doğru süreyi tutar
 * 
 * @param {number} workMin - Çalışma süresi (dakika)
 * @param {number} breakMin - Kısa mola süresi (dakika)
 * @returns {Object} Timer state ve kontroller
 */
export function usePomodoro(workMin = 25, breakMin = 5) {
    const [endTime, setEndTime] = useState(null);
    const [timeLeft, setTimeLeft] = useState(workMin * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState('work'); // 'work' | 'break'
    const [completedPomodoros, setCompletedPomodoros] = useState(0);
    const [totalWorkSeconds, setTotalWorkSeconds] = useState(0);

    /**
     * Timer başlat
     */
    const start = useCallback(() => {
        const now = Date.now();
        setEndTime(now + timeLeft * 1000);
        setIsRunning(true);
    }, [timeLeft]);

    /**
     * Timer duraklat
     */
    const pause = useCallback(() => {
        if (endTime) {
            const remaining = Math.max(0, Math.round((endTime - Date.now()) / 1000));
            setTimeLeft(remaining);
        }
        setEndTime(null);
        setIsRunning(false);
    }, [endTime]);

    /**
     * Timer sıfırla
     */
    const reset = useCallback(() => {
        setIsRunning(false);
        setEndTime(null);
        setMode('work');
        setTimeLeft(workMin * 60);
        setCompletedPomodoros(0);
        setTotalWorkSeconds(0);
    }, [workMin]);

    /**
     * Tick loop - 250ms'de bir kontrol
     */
    useEffect(() => {
        if (!isRunning || !endTime) return;

        const tick = () => {
            const now = Date.now();
            const remaining = Math.max(0, Math.round((endTime - now) / 1000));
            setTimeLeft(remaining);

            if (remaining <= 0) {
                // Süre doldu
                if (mode === 'work') {
                    // Çalışma sona erdi → Mola başlat
                    setCompletedPomodoros(c => c + 1);
                    setTotalWorkSeconds(t => t + workMin * 60);

                    // Her 4 pomodoro'da bir uzun mola
                    const nextBreakMin = (completedPomodoros + 1) % 4 === 0 ? 15 : breakMin;
                    setMode('break');

                    const newEnd = Date.now() + nextBreakMin * 60 * 1000;
                    setEndTime(newEnd);
                    setTimeLeft(nextBreakMin * 60);

                    // Bildirim + Ses
                    playNotificationSound();
                    showNotification('☕ Mola zamanı!', 'Biraz dinlen, kafanı topla.');

                } else {
                    // Mola sona erdi → Çalışmaya dön
                    setMode('work');

                    const newEnd = Date.now() + workMin * 60 * 1000;
                    setEndTime(newEnd);
                    setTimeLeft(workMin * 60);

                    // Bildirim + Ses
                    playNotificationSound();
                    showNotification('📚 Çalışma zamanı!', 'Yeniden odaklan!');
                }
            }
        };

        // 250ms'de bir tick (background throttle'dan etkilenmez)
        const interval = setInterval(tick, 250);

        return () => clearInterval(interval);
    }, [isRunning, endTime, mode, completedPomodoros, workMin, breakMin]);

    /**
     * Ses çal
     */
    const playNotificationSound = () => {
        try {
            const audio = new Audio('/ding.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('[Pomodoro] Audio play failed:', e));
        } catch (error) {
            console.warn('[Pomodoro] Audio error:', error);
        }
    };

    /**
     * Browser bildirimi göster
     */
    const showNotification = (title, body) => {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(title, {
                body,
                icon: '/icon-192.png',
                badge: '/icon-192.png',
                tag: 'pomodoro', // Aynı bildirim üzerine yaz
                requireInteraction: false
            });
        }
    };

    /**
     * Formatlanmış süre (MM:SS)
     */
    const formattedTime = `${Math.floor(timeLeft / 60).toString().padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`;

    return {
        timeLeft,
        isRunning,
        mode,
        completedPomodoros,
        totalWorkMinutes: Math.round(totalWorkSeconds / 60),
        start,
        pause,
        reset,
        formattedTime
    };
}

/**
 * Bildirim izni iste
 * Component mount'ta çağrılmalı
 */
export const requestNotificationPermission = () => {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            console.log('[Pomodoro] Notification permission:', permission);
        });
    }
};
