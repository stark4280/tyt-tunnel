import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

// Firebase yapılandırması
const firebaseConfig = {
    apiKey: "AIzaSyDkclrBMUGgJlQwUJaIvbrANaKdoEIo3Wc",
    authDomain: "tyt-tunnel.firebaseapp.com",
    databaseURL: "https://tyt-tunnel-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tyt-tunnel",
    storageBucket: "tyt-tunnel.firebasestorage.app",
    messagingSenderId: "246968713119",
    appId: "1:246968713119:web:2efc71b64b5da0820e87aa"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Anonim giriş (kullanıcı hesabı gerekmez)
export const initAuth = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('[Firebase] User authenticated:', user.uid);
                resolve(user);
            } else {
                // Kullanıcı yoksa anonim giriş yap
                signInAnonymously(auth)
                    .then((result) => {
                        console.log('[Firebase] Anonymous sign-in successful:', result.user.uid);
                        resolve(result.user);
                    })
                    .catch((error) => {
                        console.error('[Firebase] Auth error:', error);
                        reject(error);
                    });
            }
        });
    });
};

export { database, auth };
export default app;
