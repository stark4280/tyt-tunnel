import { useState, useEffect } from 'react';

/**
 * localStorage hook with error handling
 * Automatically syncs state with localStorage
 * 
 * @param {string} key - localStorage key
 * @param {any} initialValue - Default value if key doesn't exist
 * @returns {[value, setValue, error]} - State tuple with error
 */
export function useLocalStorage(key, initialValue) {
    const [error, setError] = useState(null);
    
    // İlk değeri localStorage'dan al
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : initialValue;
        } catch (error) {
            console.error(`[useLocalStorage] Read error for key "${key}":`, error);
            setError(error.message);
            return initialValue;
        }
    });

    // Her değişiklikte localStorage'a yaz
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setError(null);
        } catch (error) {
            console.error(`[useLocalStorage] Write error for key "${key}":`, error);
            setError(error.message);

            // QuotaExceededError kontrolü
            if (error.name === 'QuotaExceededError') {
                alert(
                    '⚠️ Depolama alanı doldu!\n\n' +
                    'Lütfen:\n' +
                    '1. Dashboard\'dan yedek alın\n' +
                    '2. Tarayıcı verilerini temizleyin\n' +
                    '3. Veya yedeği içe aktarın'
                );
            }
        }
    }, [key, value]);

    return [value, setValue, error];
}
