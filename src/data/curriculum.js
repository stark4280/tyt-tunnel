// THE CITADEL — 105 Günlük TYT Müfredatı
// ÖSYM son 5 yıl soru dağılımına göre optimize edilmiştir
// ★ işareti: %100 çıkan veya belirleyici konular

export const CURRICULUM_105 = [
    // --- HAFTA 1 (Temel Atma) ---
    { day: 1, topics: ['TURKCE_345'], title: 'Sözcükte Anlam', targetQuestions: 60, isCritical: false },
    { day: 2, topics: ['MAT_345'], title: 'Temel Kavramlar', targetQuestions: 100, isCritical: true },
    { day: 3, topics: ['FIZIK_345'], title: 'Fizik Bilimine Giriş', targetQuestions: 40, isCritical: false },
    { day: 4, topics: ['TURKCE_345'], title: 'Cümlede Anlam', targetQuestions: 60, isCritical: false },
    { day: 5, topics: ['MAT_BS'], title: 'Sayı Basamakları', targetQuestions: 60, isCritical: false },
    { day: 6, topics: ['KIMYA_345'], title: 'Atom ve Periyodik Sistem', targetQuestions: 70, isCritical: true },
    { day: 7, topics: [], title: 'HAFTALIK ANALİZ + TELAFİ', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 2 (Hızlanma) ---
    { day: 8, topics: ['BIYO_345'], title: 'Canlıların Ortak Özellikleri', targetQuestions: 40, isCritical: false },
    { day: 9, topics: ['PARAGRAF_LIMIT'], title: 'Paragrafta Anlatım Teknikleri', targetQuestions: 80, isCritical: true },
    { day: 10, topics: ['MAT_345'], title: 'Bölme ve Bölünebilme', targetQuestions: 60, isCritical: false },
    { day: 11, topics: ['GEO_3D_VDD'], title: 'Doğruda ve Üçgende Açılar', targetQuestions: 80, isCritical: true },
    { day: 12, topics: ['FIZIK_AYDIN'], title: 'Madde ve Özellikleri', targetQuestions: 50, isCritical: true },
    { day: 13, topics: ['PARAGRAF_PARAF'], title: 'Paragrafta Ana Düşünce', targetQuestions: 100, isCritical: true },
    { day: 14, topics: [], title: 'HAFTALIK ANALİZ + DENEME 1', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 3 (Derinleşme) ---
    { day: 15, topics: ['MAT_345'], title: 'EBOB-EKOK', targetQuestions: 50, isCritical: false },
    { day: 16, topics: ['KIMYA_PALME'], title: 'Kimyasal Türler Arası Etkileşimler', targetQuestions: 80, isCritical: true },
    { day: 17, topics: ['BIYO_BIYOTIK'], title: 'Hücre ve Organeller', targetQuestions: 60, isCritical: true },
    { day: 18, topics: ['TURKCE_345'], title: 'Ses Bilgisi', targetQuestions: 50, isCritical: false },
    { day: 19, topics: ['MAT_BS'], title: 'Rasyonel ve Ondalık Sayılar', targetQuestions: 50, isCritical: true },
    { day: 20, topics: ['GEO_BS'], title: 'Dik Üçgen ve Özel Üçgenler', targetQuestions: 100, isCritical: true },
    { day: 21, topics: [], title: 'HAFTALIK ANALİZ + TEKRAR', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 4 (Problem Öncesi) ---
    { day: 22, topics: ['MAT_345'], title: 'Basit Eşitsizlikler', targetQuestions: 70, isCritical: true },
    { day: 23, topics: ['FIZIK_345'], title: 'Hareket ve Kuvvet', targetQuestions: 80, isCritical: true },
    { day: 24, topics: ['TURKCE_345'], title: 'Yazım Kuralları', targetQuestions: 80, isCritical: true },
    { day: 25, topics: ['MAT_BS'], title: 'Mutlak Değer', targetQuestions: 80, isCritical: true },
    { day: 26, topics: ['KIMYA_345'], title: 'Maddenin Halleri', targetQuestions: 50, isCritical: false },
    { day: 27, topics: ['GEO_3D_VDD'], title: 'İkizkenar ve Eşkenar Üçgen', targetQuestions: 80, isCritical: false },
    { day: 28, topics: [], title: 'HAFTALIK ANALİZ + DENEME 2', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 5 (Problemler Başlangıcı) ---
    { day: 29, topics: ['MAT_PROB'], title: 'Oran-Orantı', targetQuestions: 80, isCritical: true },
    { day: 30, topics: ['BIYO_345'], title: 'Canlıların Sınıflandırılması', targetQuestions: 60, isCritical: true },
    { day: 31, topics: ['TURKCE_HIZ'], title: 'Noktalama İşaretleri', targetQuestions: 80, isCritical: true },
    { day: 32, topics: ['MAT_345'], title: 'Üslü Sayılar', targetQuestions: 80, isCritical: true },
    { day: 33, topics: ['FIZIK_AYDIN'], title: 'İş, Güç, Enerji', targetQuestions: 80, isCritical: true },
    { day: 34, topics: ['GEO_BS'], title: 'Açıortay ve Kenarortay', targetQuestions: 60, isCritical: false },
    { day: 35, topics: [], title: 'HAFTALIK ANALİZ + TELAFİ', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 6 (Problemler Yoğun) ---
    { day: 36, topics: ['MAT_BS'], title: 'Köklü Sayılar', targetQuestions: 80, isCritical: true },
    { day: 37, topics: ['MAT_PROB'], title: 'Sayı ve Kesir Problemleri', targetQuestions: 120, isCritical: true },
    { day: 38, topics: ['KIMYA_PALME'], title: 'Doğa ve Kimya', targetQuestions: 30, isCritical: false },
    { day: 39, topics: ['TURKCE_345'], title: 'Sözcük Türleri (İsim, Sıfat, Zamir)', targetQuestions: 60, isCritical: false },
    { day: 40, topics: ['BIYO_BIYOTIK'], title: 'Hücre Bölünmeleri (Mitoz-Mayoz)', targetQuestions: 70, isCritical: true },
    { day: 41, topics: ['GEO_3D_VDD'], title: 'Üçgende Benzerlik', targetQuestions: 100, isCritical: true },
    { day: 42, topics: [], title: 'HAFTALIK ANALİZ + DENEME 3', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 7 (Problemler Devam) ---
    { day: 43, topics: ['MAT_PROB'], title: 'Yaş Problemleri', targetQuestions: 60, isCritical: false },
    { day: 44, topics: ['FIZIK_345'], title: 'Isı ve Sıcaklık', targetQuestions: 80, isCritical: true },
    { day: 45, topics: ['MAT_345'], title: 'Çarpanlara Ayırma', targetQuestions: 80, isCritical: false },
    { day: 46, topics: ['MAT_PROB'], title: 'Hız Problemleri', targetQuestions: 80, isCritical: true },
    { day: 47, topics: ['TURKCE_HIZ'], title: 'Sözcük Türleri (Zarf, Edat, Bağlaç)', targetQuestions: 60, isCritical: false },
    { day: 48, topics: ['GEO_BS'], title: 'Üçgende Alan', targetQuestions: 100, isCritical: true },
    { day: 49, topics: [], title: 'HAFTALIK ANALİZ + TEKRAR', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 8 (Sosyal Başlangıcı + Zor Problemler) ---
    { day: 50, topics: ['SOSYAL_345'], title: 'Tarih Bilimine Giriş + İlk Çağ', targetQuestions: 40, isCritical: false },
    { day: 51, topics: ['MAT_PROB'], title: 'Yüzde, Kar-Zarar Problemleri', targetQuestions: 100, isCritical: true },
    { day: 52, topics: ['KIMYA_345'], title: 'Kimyanın Temel Kanunları', targetQuestions: 50, isCritical: true },
    { day: 53, topics: ['BIYO_345'], title: 'Kalıtım', targetQuestions: 80, isCritical: true },
    { day: 54, topics: ['MAT_PROB'], title: 'Karışım Problemleri', targetQuestions: 50, isCritical: false },
    { day: 55, topics: ['GEO_3D_VDD'], title: 'Açı-Kenar Bağıntıları', targetQuestions: 40, isCritical: false },
    { day: 56, topics: [], title: 'HAFTALIK ANALİZ + DENEME 4', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 9 (Fizik/Kimya Zor Konular) ---
    { day: 57, topics: ['FIZIK_AYDIN'], title: 'Elektrostatik', targetQuestions: 70, isCritical: true },
    { day: 58, topics: ['MAT_PROB'], title: 'Grafik Problemleri', targetQuestions: 60, isCritical: true },
    { day: 59, topics: ['TURKCE_345'], title: 'Fiiller ve Fiilimsiler', targetQuestions: 60, isCritical: true },
    { day: 60, topics: ['KIMYA_PALME'], title: 'Mol Kavramı', targetQuestions: 80, isCritical: true },
    { day: 61, topics: ['COG_BS'], title: 'Doğa ve İnsan + Coğrafi Konum', targetQuestions: 40, isCritical: false },
    { day: 62, topics: ['GEO_BS'], title: 'Çokgenler', targetQuestions: 60, isCritical: false },
    { day: 63, topics: [], title: 'HAFTALIK ANALİZ + TELAFİ', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 10 (Fonksiyonlar ve Mantık) ---
    { day: 64, topics: ['MAT_345'], title: 'Mantık', targetQuestions: 40, isCritical: false },
    { day: 65, topics: ['MAT_345'], title: 'Kümeler', targetQuestions: 60, isCritical: true },
    { day: 66, topics: ['FIZIK_345'], title: 'Elektrik Akımı ve Devreler', targetQuestions: 90, isCritical: true },
    { day: 67, topics: ['MAT_BS'], title: 'Fonksiyonlar - 1', targetQuestions: 80, isCritical: true },
    { day: 68, topics: ['BIYO_BIYOTIK'], title: 'Ekosistem Ekolojisi', targetQuestions: 60, isCritical: true },
    { day: 69, topics: ['GEO_3D_VDD'], title: 'Dörtgenler ve Deltoid', targetQuestions: 60, isCritical: false },
    { day: 70, topics: [], title: 'HAFTALIK ANALİZ + DENEME 5', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 11 (Fonksiyonlar ve Optik) ---
    { day: 71, topics: ['MAT_BS'], title: 'Fonksiyonlar - 2', targetQuestions: 80, isCritical: true },
    { day: 72, topics: ['TURKCE_HIZ'], title: 'Cümlenin Ögeleri', targetQuestions: 60, isCritical: false },
    { day: 73, topics: ['FIZIK_AYDIN'], title: 'Optik - 1 (Aydınlanma, Gölge)', targetQuestions: 60, isCritical: true },
    { day: 74, topics: ['KIMYA_345'], title: 'Kimyasal Hesaplamalar', targetQuestions: 60, isCritical: true },
    { day: 75, topics: ['SOSYAL_345'], title: 'Türk İslam Tarihi', targetQuestions: 40, isCritical: false },
    { day: 76, topics: ['GEO_BS'], title: 'Paralelkenar ve Eşkenar Dörtgen', targetQuestions: 80, isCritical: false },
    { day: 77, topics: [], title: 'HAFTALIK ANALİZ + TEKRAR', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 12 (Optik ve PKOB) ---
    { day: 78, topics: ['FIZIK_345'], title: 'Optik - 2 (Aynalar, Mercekler)', targetQuestions: 90, isCritical: true },
    { day: 79, topics: ['MAT_BS'], title: 'Polinomlar', targetQuestions: 70, isCritical: false },
    { day: 80, topics: ['MAT_BS'], title: 'İkinci Dereceden Denklemler', targetQuestions: 60, isCritical: false },
    { day: 81, topics: ['TURKCE_345'], title: 'Anlatım Bozuklukları', targetQuestions: 40, isCritical: false },
    { day: 82, topics: ['COG_BS'], title: 'İklim Bilgisi', targetQuestions: 60, isCritical: true },
    { day: 83, topics: ['GEO_3D_VDD'], title: 'Dikdörtgen ve Kare', targetQuestions: 100, isCritical: true },
    { day: 84, topics: [], title: 'HAFTALIK ANALİZ + DENEME 6', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 13 (PKOB - Sayma Olasılık) ---
    { day: 85, topics: ['MAT_345'], title: 'Permütasyon', targetQuestions: 60, isCritical: true },
    { day: 86, topics: ['MAT_345'], title: 'Kombinasyon', targetQuestions: 60, isCritical: true },
    { day: 87, topics: ['KIMYA_PALME'], title: 'Karışımlar', targetQuestions: 60, isCritical: true },
    { day: 88, topics: ['BIYO_345'], title: 'Güncel Çevre Sorunları', targetQuestions: 30, isCritical: false },
    { day: 89, topics: ['FEL_LIMIT_EL'], title: 'Felsefe Bilimi ve Varlık Felsefesi', targetQuestions: 40, isCritical: false },
    { day: 90, topics: ['GEO_BS'], title: 'Yamuk', targetQuestions: 60, isCritical: false },
    { day: 91, topics: [], title: 'HAFTALIK ANALİZ + TELAFİ', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 14 (Olasılık ve Dalgalar) ---
    { day: 92, topics: ['MAT_345'], title: 'Binom ve Olasılık', targetQuestions: 80, isCritical: true },
    { day: 93, topics: ['FIZIK_AYDIN'], title: 'Dalgalar (Yay, Su, Ses, Deprem)', targetQuestions: 80, isCritical: true },
    { day: 94, topics: ['KIMYA_345'], title: 'Asitler, Bazlar ve Tuzlar', targetQuestions: 70, isCritical: true },
    { day: 95, topics: ['DIN_LIMIT_EL'], title: 'Din Kültürü Genel Tekrar', targetQuestions: 50, isCritical: false },
    { day: 96, topics: ['COG_BS'], title: 'Nüfus ve Yerleşme', targetQuestions: 50, isCritical: true },
    { day: 97, topics: ['GEO_3D_VDD'], title: 'Çemberde Açı ve Uzunluk', targetQuestions: 80, isCritical: true },
    { day: 98, topics: [], title: 'HAFTALIK ANALİZ + DENEME 7', targetQuestions: 0, isCritical: false, isAnalysis: true },

    // --- HAFTA 15 (Final Konuları) ---
    { day: 99, topics: ['MAT_BS'], title: 'Veri (İstatistik)', targetQuestions: 40, isCritical: false },
    { day: 100, topics: ['KIMYA_PALME'], title: 'Kimya Her Yerde', targetQuestions: 30, isCritical: false },
    { day: 101, topics: ['SOSYAL_345'], title: 'Osmanlı Tarihi ve İnkılap Tarihi', targetQuestions: 60, isCritical: true },
    { day: 102, topics: ['COG_BS'], title: 'Afetler ve Bölge Kavramı', targetQuestions: 40, isCritical: false },
    { day: 103, topics: ['GEO_BS'], title: 'Dairede Alan', targetQuestions: 60, isCritical: true },
    { day: 104, topics: ['GEO_3D_VDD'], title: 'Katı Cisimler (Prizma, Silindir, Küre)', targetQuestions: 80, isCritical: true },

    // --- FİNAL ---
    { day: 105, topics: [], title: 'TÜNEL SONU — GENEL TEKRAR VE MOTİVASYON', targetQuestions: 0, isCritical: true, isAnalysis: true }
];
