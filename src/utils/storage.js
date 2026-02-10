// THE CITADEL V2.0 — IndexedDB Storage Utilities
// PDF cache + Ink data storage

const DB_NAME = 'citadel_store';
const DB_VERSION = 2;
const PDF_STORE = 'pdfs';
const INK_STORE = 'ink';
const OPTIK_STORE = 'optik';

/**
 * IndexedDB veritabanını aç/oluştur
 */
export const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            // PDF binary cache store
            if (!db.objectStoreNames.contains(PDF_STORE)) {
                db.createObjectStore(PDF_STORE);
            }

            // Ink drawings store
            if (!db.objectStoreNames.contains(INK_STORE)) {
                db.createObjectStore(INK_STORE);
            }

            // Optik answers store
            if (!db.objectStoreNames.contains(OPTIK_STORE)) {
                db.createObjectStore(OPTIK_STORE);
            }
        };

        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
};

// ═══════════════════════════════════════════════════════════
// PDF CACHE OPERATIONS
// ═══════════════════════════════════════════════════════════

/**
 * Cache'ten PDF'i getir
 * @param {string} fileId - Google Drive File ID
 * @returns {ArrayBuffer|null}
 */
export const getCachedPDF = async (fileId) => {
    try {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction(PDF_STORE, 'readonly');
            const request = tx.objectStore(PDF_STORE).get(fileId);
            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => resolve(null);
        });
    } catch (error) {
        console.error('[IndexedDB] getCachedPDF error:', error);
        return null;
    }
};

/**
 * PDF'i cache'e kaydet
 * @param {string} fileId - Google Drive File ID
 * @param {ArrayBuffer} arrayBuffer - PDF binary data
 */
export const cachePDF = async (fileId, arrayBuffer) => {
    try {
        const db = await openDB();
        const tx = db.transaction(PDF_STORE, 'readwrite');
        tx.objectStore(PDF_STORE).put(arrayBuffer, fileId);
    } catch (error) {
        console.error('[IndexedDB] cachePDF error:', error);
    }
};

/**
 * Proxy'den PDF çek ve cache'e kaydet
 * @param {string} fileId - Google Drive File ID
 * @param {string} fetchUrl - Tam fetch URL'i
 * @returns {ArrayBuffer}
 */
export const fetchAndCachePDF = async (fileId, fetchUrl) => {
    // 1. Önce cache kontrolü
    const cached = await getCachedPDF(fileId);
    if (cached) {
        console.log(`[PDF Cache HIT] ${fileId}`);
        return cached;
    }

    // 2. Cache'te yok, proxy'den çek
    console.log(`[PDF Cache MISS] ${fileId} — fetching from proxy...`);
    console.log(`[Fetch URL] ${fetchUrl}`);

    const response = await fetch(fetchUrl);

    if (!response.ok) {
        throw new Error(`PDF fetch failed (HTTP ${response.status})`);
    }

    const arrayBuffer = await response.arrayBuffer();

    // 3. Magic Bytes Kontrolü (%PDF)
    const header = new Uint8Array(arrayBuffer.slice(0, 4));
    const headerStr = String.fromCharCode(...header);

    if (headerStr !== '%PDF') {
        const textDecoder = new TextDecoder();
        const contentPreview = textDecoder.decode(arrayBuffer.slice(0, 200));
        console.error('[PDF Validation Fail] Content preview:', contentPreview);
        throw new Error('Invalid PDF structure (Received HTML or corrupt data)');
    }

    // 4. Cache'e kaydet
    const bufferForCache = arrayBuffer.slice(0);
    const bufferForUI = arrayBuffer.slice(0);

    cachePDF(fileId, bufferForCache).catch(err => console.error('Cache save failed:', err));

    console.log(`[PDF Cached] ${fileId} (${(arrayBuffer.byteLength / 1024 / 1024).toFixed(2)} MB)`);

    return bufferForUI;
};

/**
 * Bozuk PDF cache'ini temizle
 */
export const clearPDFCache = async (fileId) => {
    try {
        const db = await openDB();
        const tx = db.transaction(PDF_STORE, 'readwrite');
        tx.objectStore(PDF_STORE).delete(fileId);
        console.log(`[Cache Cleared] ${fileId}`);
    } catch (error) {
        console.error('[IndexedDB] clearPDFCache error:', error);
    }
};

// ═══════════════════════════════════════════════════════════
// INK STORAGE OPERATIONS
// ═══════════════════════════════════════════════════════════

/**
 * Ink çizimini kaydet
 * @param {string} pdfId - PDF ID (örn: MAT_345)
 * @param {number} pageNum - Sayfa numarası
 * @param {string|null} dataUrl - Canvas base64 data URL (null ise silinir)
 */
export const saveInk = async (pdfId, pageNum, dataUrl) => {
    try {
        const db = await openDB();
        const tx = db.transaction(INK_STORE, 'readwrite');
        const key = `${pdfId}_${pageNum}`;

        if (dataUrl) {
            tx.objectStore(INK_STORE).put(dataUrl, key);
        } else {
            // null ise silme işlemi
            tx.objectStore(INK_STORE).delete(key);
        }
    } catch (error) {
        console.error('[IndexedDB] saveInk error:', error);
    }
};

/**
 * Ink çizimini yükle
 * @param {string} pdfId - PDF ID
 * @param {number} pageNum - Sayfa numarası
 * @returns {string|null} - Base64 data URL veya null
 */
export const loadInk = async (pdfId, pageNum) => {
    try {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction(INK_STORE, 'readonly');
            const key = `${pdfId}_${pageNum}`;
            const request = tx.objectStore(INK_STORE).get(key);
            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => resolve(null);
        });
    } catch (error) {
        console.error('[IndexedDB] loadInk error:', error);
        return null;
    }
};

/**
 * Belirli bir PDF'in tüm ink sayfalarını listele
 * @param {string} pdfId - PDF ID
 * @returns {number[]} - Çizim yapılmış sayfa numaraları
 */
export const getAllInkForPDF = async (pdfId) => {
    try {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction(INK_STORE, 'readonly');
            const store = tx.objectStore(INK_STORE);
            const request = store.getAllKeys();

            request.onsuccess = () => {
                const keys = request.result.filter(k => k.startsWith(`${pdfId}_`));
                const pageNums = keys.map(k => parseInt(k.split('_')[1]));
                resolve(pageNums);
            };
            request.onerror = () => resolve([]);
        });
    } catch (error) {
        console.error('[IndexedDB] getAllInkForPDF error:', error);
        return [];
    }
};

// ═══════════════════════════════════════════════════════════
// CACHE MANAGEMENT
// ═══════════════════════════════════════════════════════════

/**
 * Toplam cache boyutunu hesapla (yaklaşık)
 */
export const getCacheSize = async () => {
    try {
        const db = await openDB();

        return new Promise((resolve) => {
            const tx = db.transaction([PDF_STORE, INK_STORE], 'readonly');

            let totalSize = 0;

            const pdfReq = tx.objectStore(PDF_STORE).getAll();
            pdfReq.onsuccess = () => {
                pdfReq.result.forEach(item => {
                    if (item && item.byteLength) {
                        totalSize += item.byteLength;
                    }
                });
            };

            const inkReq = tx.objectStore(INK_STORE).getAll();
            inkReq.onsuccess = () => {
                inkReq.result.forEach(item => {
                    if (item) {
                        // Base64 string length approximation
                        totalSize += item.length * 0.75; // Base64 overhead compensation
                    }
                });
            };

            tx.oncomplete = () => {
                resolve(totalSize);
            };
        });
    } catch (error) {
        console.error('[IndexedDB] getCacheSize error:', error);
        return 0;
    }
};

/**
 * Tüm cache'i temizle (acil durum)
 */
export const clearAllCache = async () => {
    try {
        const db = await openDB();
        const tx = db.transaction([PDF_STORE, INK_STORE], 'readwrite');
        tx.objectStore(PDF_STORE).clear();
        tx.objectStore(INK_STORE).clear();
        console.log('[IndexedDB] All cache cleared');
    } catch (error) {
        console.error('[IndexedDB] clearAllCache error:', error);
    }
};

// ═══════════════════════════════════════════════════════════
// OPTIK STORAGE OPERATIONS
// ═══════════════════════════════════════════════════════════

/**
 * Optik cevaplarını kaydet
 * @param {number} day - Gün numarası
 * @param {string} topicName - Konu adı
 * @param {Array} answers - Cevap dizisi [{id: 1, answer: 'A'}, ...]
 */
export const saveOptik = async (day, topicName, answers) => {
    try {
        const db = await openDB();
        const tx = db.transaction(OPTIK_STORE, 'readwrite');
        const key = `day${day}_${topicName}`;
        
        const data = {
            day,
            topicName,
            answers,
            savedAt: new Date().toISOString()
        };
        
        tx.objectStore(OPTIK_STORE).put(data, key);
        console.log(`[Optik Saved] Day ${day} - ${topicName}`);
    } catch (error) {
        console.error('[IndexedDB] saveOptik error:', error);
    }
};

/**
 * Optik cevaplarını yükle
 * @param {number} day - Gün numarası
 * @param {string} topicName - Konu adı
 * @returns {Array|null} - Cevap dizisi veya null
 */
export const loadOptik = async (day, topicName) => {
    try {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction(OPTIK_STORE, 'readonly');
            const key = `day${day}_${topicName}`;
            const request = tx.objectStore(OPTIK_STORE).get(key);
            
            request.onsuccess = () => {
                const result = request.result;
                if (result && result.answers) {
                    console.log(`[Optik Loaded] Day ${day} - ${topicName} (${result.answers.filter(a => a.answer).length} cevap)`);
                    resolve(result.answers);
                } else {
                    resolve(null);
                }
            };
            request.onerror = () => resolve(null);
        });
    } catch (error) {
        console.error('[IndexedDB] loadOptik error:', error);
        return null;
    }
};

/**
 * Tüm optik kayıtlarını listele
 * @returns {Array} - [{day, topicName, answeredCount, savedAt}, ...]
 */
export const getAllOptiks = async () => {
    try {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction(OPTIK_STORE, 'readonly');
            const store = tx.objectStore(OPTIK_STORE);
            const request = store.getAll();

            request.onsuccess = () => {
                const results = request.result.map(item => ({
                    day: item.day,
                    topicName: item.topicName,
                    answeredCount: item.answers.filter(a => a.answer).length,
                    totalQuestions: item.answers.length,
                    savedAt: item.savedAt
                }));
                resolve(results);
            };
            request.onerror = () => resolve([]);
        });
    } catch (error) {
        console.error('[IndexedDB] getAllOptiks error:', error);
        return [];
    }
};

/**
 * Belirli bir optik kaydını sil
 * @param {number} day - Gün numarası
 * @param {string} topicName - Konu adı
 */
export const deleteOptik = async (day, topicName) => {
    try {
        const db = await openDB();
        const tx = db.transaction(OPTIK_STORE, 'readwrite');
        const key = `day${day}_${topicName}`;
        tx.objectStore(OPTIK_STORE).delete(key);
        console.log(`[Optik Deleted] Day ${day} - ${topicName}`);
    } catch (error) {
        console.error('[IndexedDB] deleteOptik error:', error);
    }
};
