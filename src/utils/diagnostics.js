/**
 * Sistem Diagnostics - Sorunları otomatik tespit et
 */

import { PROXY_URL, DEFAULT_FILE_IDS } from '../data/constants';
import { getCacheSize } from './storage';

/**
 * Tüm sistem kontrollerini çalıştır
 * @returns {Promise<Object>} Diagnostic raporu
 */
export const runDiagnostics = async () => {
    const results = {
        timestamp: new Date().toISOString(),
        browser: getBrowserInfo(),
        storage: await checkStorage(),
        proxy: await checkProxy(),
        pdfs: checkPDFConfig(),
        overall: 'unknown'
    };

    // Genel durum
    const hasErrors = Object.values(results).some(r => r.status === 'error');
    const hasWarnings = Object.values(results).some(r => r.status === 'warning');

    if (hasErrors) results.overall = 'error';
    else if (hasWarnings) results.overall = 'warning';
    else results.overall = 'ok';

    return results;
};

/**
 * Tarayıcı bilgisi
 */
const getBrowserInfo = () => {
    const ua = navigator.userAgent;
    let browser = 'Unknown';

    if (ua.includes('Chrome')) browser = 'Chrome';
    else if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Safari')) browser = 'Safari';
    else if (ua.includes('Edge')) browser = 'Edge';

    return {
        name: browser,
        userAgent: ua,
        platform: navigator.platform,
        language: navigator.language,
        online: navigator.onLine,
        cookiesEnabled: navigator.cookieEnabled
    };
};

/**
 * Storage kontrolü
 */
const checkStorage = async () => {
    const result = {
        status: 'ok',
        localStorage: { available: false, used: 0, quota: 0 },
        indexedDB: { available: false, size: 0 },
        issues: []
    };

    // localStorage kontrolü
    try {
        const testKey = '__storage_test__';
        localStorage.setItem(testKey, 'test');
        localStorage.removeItem(testKey);
        result.localStorage.available = true;

        // Kullanılan alan tahmini
        let used = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                used += localStorage[key].length + key.length;
            }
        }
        result.localStorage.used = used;
        result.localStorage.quota = 5 * 1024 * 1024; // ~5MB (tahmini)

        // Doluluk kontrolü
        if (used > result.localStorage.quota * 0.8) {
            result.status = 'warning';
            result.issues.push('localStorage %80 dolu');
        }

    } catch (error) {
        result.status = 'error';
        result.issues.push(`localStorage hatası: ${error.message}`);
    }

    // IndexedDB kontrolü
    try {
        const size = await getCacheSize();
        result.indexedDB.available = true;
        result.indexedDB.size = size;

        // 100MB üzeri uyarı
        if (size > 100 * 1024 * 1024) {
            result.status = 'warning';
            result.issues.push('IndexedDB cache 100MB üzerinde');
        }

    } catch (error) {
        result.status = 'error';
        result.issues.push(`IndexedDB hatası: ${error.message}`);
    }

    return result;
};

/**
 * Proxy kontrolü
 */
const checkProxy = async () => {
    const result = {
        status: 'unknown',
        url: PROXY_URL,
        reachable: false,
        responseTime: 0,
        issues: []
    };

    // URL format kontrolü
    if (!PROXY_URL || !PROXY_URL.startsWith('http')) {
        result.status = 'error';
        result.issues.push('PROXY_URL geçersiz veya tanımsız');
        return result;
    }

    // Ping testi (HEAD request)
    try {
        const startTime = Date.now();
        const response = await fetch(PROXY_URL, {
            method: 'HEAD',
            mode: 'no-cors' // CORS hatası almamak için
        });
        result.responseTime = Date.now() - startTime;
        result.reachable = true;
        result.status = 'ok';

        if (result.responseTime > 3000) {
            result.status = 'warning';
            result.issues.push('Proxy yanıt süresi yavaş (>3s)');
        }

    } catch (error) {
        result.status = 'error';
        result.reachable = false;
        result.issues.push(`Proxy erişilemez: ${error.message}`);
    }

    return result;
};

/**
 * PDF konfigürasyon kontrolü
 */
const checkPDFConfig = () => {
    const result = {
        status: 'ok',
        totalPDFs: 0,
        missingIDs: [],
        issues: []
    };

    const ids = Object.entries(DEFAULT_FILE_IDS);
    result.totalPDFs = ids.length;

    // Boş veya geçersiz ID kontrolü
    ids.forEach(([key, id]) => {
        if (!id || id.length < 10) {
            result.missingIDs.push(key);
        }
    });

    if (result.missingIDs.length > 0) {
        result.status = 'warning';
        result.issues.push(`${result.missingIDs.length} PDF ID eksik veya geçersiz`);
    }

    return result;
};

/**
 * Diagnostic raporunu konsola yazdır
 */
export const printDiagnostics = async () => {
    console.log('🔍 THE CITADEL V2 - System Diagnostics');
    console.log('=====================================\n');

    const report = await runDiagnostics();

    console.log('📊 Overall Status:', report.overall.toUpperCase());
    console.log('\n🌐 Browser:', report.browser.name, '|', report.browser.platform);
    console.log('   Online:', report.browser.online ? '✅' : '❌');
    console.log('   Cookies:', report.browser.cookiesEnabled ? '✅' : '❌');

    console.log('\n💾 Storage:');
    console.log('   localStorage:', report.storage.localStorage.available ? '✅' : '❌',
        `(${(report.storage.localStorage.used / 1024).toFixed(1)} KB used)`);
    console.log('   IndexedDB:', report.storage.indexedDB.available ? '✅' : '❌',
        `(${(report.storage.indexedDB.size / 1024 / 1024).toFixed(2)} MB cached)`);

    console.log('\n🌍 Proxy:');
    console.log('   URL:', report.proxy.url);
    console.log('   Reachable:', report.proxy.reachable ? '✅' : '❌');
    if (report.proxy.reachable) {
        console.log('   Response Time:', report.proxy.responseTime, 'ms');
    }

    console.log('\n📄 PDF Config:');
    console.log('   Total PDFs:', report.pdfs.totalPDFs);
    console.log('   Missing IDs:', report.pdfs.missingIDs.length);

    // Issues
    const allIssues = [
        ...report.storage.issues,
        ...report.proxy.issues,
        ...report.pdfs.issues
    ];

    if (allIssues.length > 0) {
        console.log('\n⚠️ Issues Found:');
        allIssues.forEach((issue, i) => {
            console.log(`   ${i + 1}. ${issue}`);
        });
    } else {
        console.log('\n✅ No issues found!');
    }

    console.log('\n=====================================');

    return report;
};

/**
 * Hızlı sağlık kontrolü (Dashboard için)
 */
export const quickHealthCheck = async () => {
    const health = {
        storage: false,
        proxy: false,
        overall: false
    };

    try {
        // localStorage test
        localStorage.setItem('__test__', '1');
        localStorage.removeItem('__test__');
        health.storage = true;
    } catch (e) {
        health.storage = false;
    }

    try {
        // Proxy ping
        const response = await fetch(PROXY_URL, {
            method: 'HEAD',
            mode: 'no-cors',
            cache: 'no-cache'
        });
        health.proxy = true;
    } catch (e) {
        health.proxy = false;
    }

    health.overall = health.storage && health.proxy;

    return health;
};
