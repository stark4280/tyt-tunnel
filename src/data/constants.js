// THE CITADEL V2.0 — Sabitler

// ⚠️ Cloudflare Worker ZORUNLUDUR! (Detaylar: cloudflare_worker_guide.md)
// 1. Worker'ı kur
// 2. URL'i buraya yapıştır
export const PROXY_URL = 'https://lively-firefly-3d41.stark4280.workers.dev';

// Google Drive File ID'leri (19 PDF)
export const DEFAULT_FILE_IDS = {
    // Matematik
    MAT_345: '1Nuh2j1gVonFs-k6iHV2hlT-wTIetvH_V',
    MAT_PROB: '1bvQrIB6tFBIRPovOaIwbmnUXjq5K2Sax',
    MAT_BS: '10Lij-uDXZbCatfX3WWCIx5a6-tJ4UGw3',

    // Türkçe
    TURKCE_345: '1aHW_SZ6j3hpRjEbXyJfwmDnKEFdgIYNs',
    TURKCE_HIZ: '161bXwF7ZE_sJyCft0DamMzTZGlNM7oCj',
    PARAGRAF_LIMIT: '1YQJJdgyF41Sq_cFAjU8G5uRvdOxdQAuS',
    PARAGRAF_PARAF: '1z0yilGIdj7Q09rHZtjuCJVB8mHLYjt6c',

    // Geometri
    GEO_3D_VDD: '13SmSqdg4sPmauiHOMelfvlQzLatC_0xI',
    GEO_BS: '1wNL5RntoQOfOUhX_qPXHtzMdebspcx0J',

    // Fizik
    FIZIK_345: '1fsPOHuOJKaN_j-xvVCBgwZHr9cSlMmGo',
    FIZIK_AYDIN: '1wBWL0HHv115BrhZ_Mw52DJwhWKD2J13X',

    // Kimya
    KIMYA_345: '1xyEEgbsjCI2ESwjM6JrrmjyhZdhfaZAW',
    KIMYA_PALME: '1f8S3UISPFtZfDO4uQV7xKnoRxv9azKJM',

    // Biyoloji
    BIYO_345: '1hVYQXCZ4Un_-2laHeRptr2nz2qbn8O3l',
    BIYO_BIYOTIK: '1kF2Za3aldzaKKZXDrTakQy5b1HxPFxxo',

    // Sosyal Bilimler
    SOSYAL_345: '1IbMyaGMzAOKvJyXwOLdhZ5PVlWGQz-pP',
    COG_BS: '1C67fvqhnEIEyBM3GZ_iULGymjz8UMCSs',
    FEL_LIMIT_EL: '1yzStR0xOB3MaYGXxqcX9ilEk0jodMbSV',
    DIN_LIMIT_EL: '1rcp3h_EepUMrr-TtNhTtZejOPHKywHl3'
};

// Derse Özel Zayıf Nokta Etiketleri
export const WEAK_TAG_OPTIONS_BY_SUBJECT = {
    // Matematik
    matematik: [
        { id: 'formul_hatasi', label: 'Formül hatası' },
        { id: 'islem_hatasi', label: 'İşlem hatası' },
        { id: 'konu_eksikligi', label: 'Konu eksikliği' },
        { id: 'sozel_problem', label: 'Sözel problem anlama' },
        { id: 'grafik_tablo', label: 'Grafik/tablo yorumu' },
        { id: 'sure_yetmedi', label: 'Süre yetmedi' },
        { id: 'dikkatsizlik', label: 'Dikkatsizlik' },
    ],
    
    // Geometri
    geometri: [
        { id: 'sekil_cizimi', label: 'Şekil çizimi/yorumu' },
        { id: 'formul_hatasi', label: 'Formül hatası' },
        { id: 'acı_hesabi', label: 'Açı hesabı' },
        { id: 'alan_hacim', label: 'Alan/hacim hesabı' },
        { id: 'benzerlik_eslik', label: 'Benzerlik/eşlik' },
        { id: 'sure_yetmedi', label: 'Süre yetmedi' },
        { id: 'dikkatsizlik', label: 'Dikkatsizlik' },
    ],

    // Türkçe
    turkce: [
        { id: 'anlam_kavrami', label: 'Anlam/kavram bilgisi' },
        { id: 'cumle_analizi', label: 'Cümle analizi' },
        { id: 'sozcuk_anlami', label: 'Sözcük anlamı' },
        { id: 'paragraf_anlama', label: 'Paragraf anlama' },
        { id: 'ana_dusunce', label: 'Ana düşünce bulma' },
        { id: 'sure_yetmedi', label: 'Süre yetmedi' },
        { id: 'dikkatsizlik', label: 'Dikkatsizlik' },
    ],

    // Fizik
    fizik: [
        { id: 'formul_hatasi', label: 'Formül hatası' },
        { id: 'birim_donusum', label: 'Birim dönüşümü' },
        { id: 'grafik_yorumu', label: 'Grafik yorumu' },
        { id: 'konu_eksikligi', label: 'Konu eksikliği' },
        { id: 'islem_hatasi', label: 'İşlem hatası' },
        { id: 'sure_yetmedi', label: 'Süre yetmedi' },
        { id: 'dikkatsizlik', label: 'Dikkatsizlik' },
    ],

    // Kimya
    kimya: [
        { id: 'formul_hatasi', label: 'Formül hatası' },
        { id: 'mol_hesabi', label: 'Mol hesabı' },
        { id: 'denklem_denkles', label: 'Denklem denkleştirme' },
        { id: 'periyodik_cetvel', label: 'Periyodik cetvel' },
        { id: 'konu_eksikligi', label: 'Konu eksikliği' },
        { id: 'sure_yetmedi', label: 'Süre yetmedi' },
        { id: 'dikkatsizlik', label: 'Dikkatsizlik' },
    ],

    // Biyoloji
    biyoloji: [
        { id: 'ezber_eksikligi', label: 'Ezber eksikliği' },
        { id: 'sekil_yorumu', label: 'Şekil yorumu' },
        { id: 'sistem_bilgisi', label: 'Sistem bilgisi' },
        { id: 'hucre_bilgisi', label: 'Hücre bilgisi' },
        { id: 'konu_karistirma', label: 'Konu karıştırma' },
        { id: 'sure_yetmedi', label: 'Süre yetmedi' },
        { id: 'dikkatsizlik', label: 'Dikkatsizlik' },
    ],

    // Tarih
    tarih: [
        { id: 'tarih_karistirma', label: 'Tarih karıştırma' },
        { id: 'olay_sirasi', label: 'Olay sırası' },
        { id: 'kavram_bilgisi', label: 'Kavram bilgisi' },
        { id: 'harita_yorumu', label: 'Harita yorumu' },
        { id: 'ezber_eksikligi', label: 'Ezber eksikliği' },
        { id: 'sure_yetmedi', label: 'Süre yetmedi' },
        { id: 'dikkatsizlik', label: 'Dikkatsizlik' },
    ],

    // Coğrafya
    cografya: [
        { id: 'harita_yorumu', label: 'Harita yorumu' },
        { id: 'grafik_tablo', label: 'Grafik/tablo yorumu' },
        { id: 'konum_bilgisi', label: 'Konum bilgisi' },
        { id: 'iklim_bilgisi', label: 'İklim bilgisi' },
        { id: 'ezber_eksikligi', label: 'Ezber eksikliği' },
        { id: 'sure_yetmedi', label: 'Süre yetmedi' },
        { id: 'dikkatsizlik', label: 'Dikkatsizlik' },
    ],

    // Felsefe
    felsefe: [
        { id: 'kavram_bilgisi', label: 'Kavram bilgisi' },
        { id: 'dusunur_bilgisi', label: 'Düşünür bilgisi' },
        { id: 'metin_yorumu', label: 'Metin yorumu' },
        { id: 'mantik_hatasi', label: 'Mantık hatası' },
        { id: 'konu_eksikligi', label: 'Konu eksikliği' },
        { id: 'sure_yetmedi', label: 'Süre yetmedi' },
        { id: 'dikkatsizlik', label: 'Dikkatsizlik' },
    ],

    // Din Kültürü
    din: [
        { id: 'ayet_hadis', label: 'Ayet/hadis bilgisi' },
        { id: 'kavram_bilgisi', label: 'Kavram bilgisi' },
        { id: 'ibadet_bilgisi', label: 'İbadet bilgisi' },
        { id: 'ezber_eksikligi', label: 'Ezber eksikliği' },
        { id: 'konu_karistirma', label: 'Konu karıştırma' },
        { id: 'sure_yetmedi', label: 'Süre yetmedi' },
        { id: 'dikkatsizlik', label: 'Dikkatsizlik' },
    ],
};

// Genel etiketler (eski sistem - backward compatibility)
export const WEAK_TAG_OPTIONS = [
    { id: 'formul', label: 'Formül hatası' },
    { id: 'birim_donusum', label: 'Birim dönüşümü' },
    { id: 'grafik_tablo', label: 'Grafik/tablo yorumu' },
    { id: 'sozel_problem', label: 'Sözel problem anlama' },
    { id: 'sure_yetmedi', label: 'Süre yetmedi' },
    { id: 'dikkatsizlik', label: 'Dikkatsizlik' },
    { id: 'konu_eksik', label: 'Konu eksikliği' },
    { id: 'islem_hatasi', label: 'İşlem hatası' }
];

// Etiket eşleşmeleri (WeakTopicMap için)
export const TAG_LABELS = {
    formul: 'Formül hatası',
    birim_donusum: 'Birim dönüşümü',
    grafik_tablo: 'Grafik/tablo',
    sozel_problem: 'Sözel problem',
    sure_yetmedi: 'Süre yetmedi',
    dikkatsizlik: 'Dikkatsizlik',
    konu_eksik: 'Konu eksikliği',
    islem_hatasi: 'İşlem hatası'
};

// PWA ve App Sabitleri
export const APP_VERSION = '2.0.0';
export const STORAGE_KEYS = {
    PROGRESS: 'citadel_v2_progress',
    SETTINGS: 'citadel_v2_settings',
    OLD_V13: 'citadel_v13_pdfjs'
};
