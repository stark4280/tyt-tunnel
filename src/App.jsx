import React, { useState, useEffect } from 'react';

// --- EKSİKSİZ VE TAM TYT MÜFREDATI (75+ KONU) ---
const FULL_DB = [
    // TÜRKÇE
    { c: "TÜRKÇE", n: "Sözcükte Anlam", q: 3, target: 60, s: false, yt: "TYT+Turkce+Sozcukte+Anlam" },
    { c: "TÜRKÇE", n: "Cümlede Anlam", q: 4, target: 60, s: false, yt: "TYT+Turkce+Cumlede+Anlam" },
    { c: "TÜRKÇE", n: "Paragrafta Anlatım Teknikleri", q: 4, target: 100, s: true, yt: "TYT+Turkce+Paragraf+Anlatim+Teknikleri" },
    { c: "TÜRKÇE", n: "Paragrafta Ana Düşünce", q: 22, target: 150, s: true, yt: "TYT+Turkce+Paragraf+Ana+Dusunce" },
    { c: "TÜRKÇE", n: "Ses Bilgisi", q: 1, target: 40, s: false, yt: "TYT+Turkce+Ses+Bilgisi" },
    { c: "TÜRKÇE", n: "Yazım Kuralları", q: 2, target: 60, s: true, yt: "TYT+Turkce+Yazim+Kurallari" },
    { c: "TÜRKÇE", n: "Noktalama İşaretleri", q: 2, target: 60, s: true, yt: "TYT+Turkce+Noktalama+Isaretleri" },
    { c: "TÜRKÇE", n: "Sözcük Yapısı ve Ekler", q: 1, target: 50, s: false, yt: "TYT+Turkce+Sozcuk+Yapisi" },
    { c: "TÜRKÇE", n: "İsimler, Sıfatlar, Zamirler", q: 1, target: 60, s: false, yt: "TYT+Turkce+Sozcuk+Turleri" },
    { c: "TÜRKÇE", n: "Zarflar, Edatlar, Bağlaçlar", q: 1, target: 60, s: false, yt: "TYT+Turkce+Zarf+Edat+Baglac" },
    { c: "TÜRKÇE", n: "Fiiller ve Fiilimsiler", q: 1, target: 60, s: false, yt: "TYT+Turkce+Fiiller" },
    { c: "TÜRKÇE", n: "Cümlenin Ögeleri", q: 1, target: 50, s: true, yt: "TYT+Turkce+Cumlenin+Ogeleri" },

    // MATEMATİK
    { c: "MATEMATİK", n: "Temel Kavramlar", q: 3, target: 100, s: true, yt: "TYT+Matematik+Temel+Kavramlar" },
    { c: "MATEMATİK", n: "Sayı Basamakları", q: 2, target: 60, s: false, yt: "TYT+Matematik+Sayi+Basamaklari" },
    { c: "MATEMATİK", n: "Bölme ve Bölünebilme", q: 2, target: 60, s: false, yt: "TYT+Matematik+Bolme+Bolunebilme" },
    { c: "MATEMATİK", n: "EBOB - EKOK", q: 1, target: 50, s: false, yt: "TYT+Matematik+Ebob+Ekok" },
    { c: "MATEMATİK", n: "Rasyonel Sayılar", q: 1, target: 40, s: true, yt: "TYT+Matematik+Rasyonel+Sayilar" },
    { c: "MATEMATİK", n: "Basit Eşitsizlikler", q: 1, target: 50, s: false, yt: "TYT+Matematik+Basit+Esitsizlikler" },
    { c: "MATEMATİK", n: "Mutlak Değer", q: 1, target: 60, s: true, yt: "TYT+Matematik+Mutlak+Deger" },
    { c: "MATEMATİK", n: "Üslü Sayılar", q: 1, target: 80, s: true, yt: "TYT+Matematik+Uslu+Sayilar" },
    { c: "MATEMATİK", n: "Köklü Sayılar", q: 1, target: 80, s: true, yt: "TYT+Matematik+Koklu+Sayilar" },
    { c: "MATEMATİK", n: "Çarpanlara Ayırma", q: 1, target: 60, s: false, yt: "TYT+Matematik+Carpanlara+Ayirma" },
    { c: "MATEMATİK", n: "Oran - Orantı", q: 1, target: 50, s: false, yt: "TYT+Matematik+Oran+Oranti" },
    { c: "MATEMATİK", n: "Denklem Çözme", q: 1, target: 40, s: false, yt: "TYT+Matematik+Denklem+Cozme" },
    { c: "MATEMATİK", n: "Sayı ve Kesir Problemleri", q: 5, target: 200, s: true, yt: "TYT+Matematik+Sayi+Kesir+Problemleri" },
    { c: "MATEMATİK", n: "Yaş Problemleri", q: 1, target: 50, s: false, yt: "TYT+Matematik+Yas+Problemleri" },
    { c: "MATEMATİK", n: "Hız ve Hareket Problemleri", q: 1, target: 60, s: true, yt: "TYT+Matematik+Hiz+Problemleri" },
    { c: "MATEMATİK", n: "Yüzde, Kar-Zarar Problemleri", q: 2, target: 100, s: true, yt: "TYT+Matematik+Yuzde+Problemleri" },
    { c: "MATEMATİK", n: "Karışım ve Grafik Problemleri", q: 1, target: 50, s: false, yt: "TYT+Matematik+Grafik+Problemleri" },
    { c: "MATEMATİK", n: "Kümeler", q: 2, target: 80, s: true, yt: "TYT+Matematik+Kumeler" },
    { c: "MATEMATİK", n: "Fonksiyonlar", q: 2, target: 100, s: true, yt: "TYT+Matematik+Fonksiyonlar" },
    { c: "MATEMATİK", n: "Permütasyon ve Kombinasyon", q: 1, target: 60, s: false, yt: "TYT+Matematik+Permutasyon+Kombinasyon" },
    { c: "MATEMATİK", n: "Olasılık", q: 1, target: 60, s: true, yt: "TYT+Matematik+Olasilik" },
    { c: "MATEMATİK", n: "Veri ve İstatistik", q: 1, target: 40, s: false, yt: "TYT+Matematik+Veri+Istatistik" },
    { c: "MATEMATİK", n: "Mantık", q: 1, target: 40, s: false, yt: "TYT+Matematik+Mantik" },

    // GEOMETRİ
    { c: "GEOMETRİ", n: "Doğruda ve Üçgende Açılar", q: 1, target: 80, s: true, yt: "TYT+Geometri+Ucgende+Acilar" },
    { c: "GEOMETRİ", n: "Dik ve Özel Üçgenler", q: 2, target: 100, s: true, yt: "TYT+Geometri+Ozel+Ucgenler" },
    { c: "GEOMETRİ", n: "Üçgende Alan ve Benzerlik", q: 2, target: 100, s: true, yt: "TYT+Geometri+Ucgende+Benzerlik" },
    { c: "GEOMETRİ", n: "Çokgenler ve Dörtgenler", q: 2, target: 80, s: false, yt: "TYT+Geometri+Dortgenler" },
    { c: "GEOMETRİ", n: "Çember ve Daire", q: 1, target: 60, s: false, yt: "TYT+Geometri+Cember+Daire" },
    { c: "GEOMETRİ", n: "Katı Cisimler", q: 2, target: 80, s: true, yt: "TYT+Geometri+Kati+Cisimler" },

    // FİZİK
    { c: "FİZİK", n: "Fizik Bilimine Giriş", q: 1, target: 30, s: false, yt: "TYT+Fizik+Bilimine+Giris" },
    { c: "FİZİK", n: "Madde ve Özellikleri", q: 1, target: 40, s: false, yt: "TYT+Fizik+Madde+ve+Ozellikleri" },
    { c: "FİZİK", n: "Hareket ve Kuvvet", q: 1, target: 60, s: true, yt: "TYT+Fizik+Hareket+ve+Kuvvet" },
    { c: "FİZİK", n: "Enerji", q: 1, target: 40, s: false, yt: "TYT+Fizik+Enerji" },
    { c: "FİZİK", n: "Isı, Sıcaklık ve Genleşme", q: 1, target: 50, s: true, yt: "TYT+Fizik+Isi+Sicaklik" },
    { c: "FİZİK", n: "Elektrik ve Manyetizma", q: 1, target: 60, s: false, yt: "TYT+Fizik+Elektrik" },
    { c: "FİZİK", n: "Basınç ve Kaldırma Kuvveti", q: 1, target: 50, s: false, yt: "TYT+Fizik+Basinc" },
    { c: "FİZİK", n: "Dalgalar", q: 1, target: 40, s: false, yt: "TYT+Fizik+Dalgalar" },
    { c: "FİZİK", n: "Optik", q: 2, target: 100, s: true, yt: "TYT+Fizik+Optik" },

    // KİMYA
    { c: "KİMYA", n: "Kimya Bilimi", q: 1, target: 30, s: false, yt: "TYT+Kimya+Bilimi" },
    { c: "KİMYA", n: "Atomun Yapısı", q: 1, target: 40, s: true, yt: "TYT+Kimya+Atomun+Yapisi" },
    { c: "KİMYA", n: "Periyodik Sistem", q: 1, target: 40, s: true, yt: "TYT+Kimya+Periyodik+Sistem" },
    { c: "KİMYA", n: "Kimyasal Türler Arası Etkileşimler", q: 1, target: 60, s: true, yt: "TYT+Kimya+Etkilesimler" },
    { c: "KİMYA", n: "Maddenin Halleri", q: 1, target: 40, s: false, yt: "TYT+Kimya+Maddenin+Halleri" },
    { c: "KİMYA", n: "Kimyanın Temel Kanunları", q: 1, target: 50, s: true, yt: "TYT+Kimya+Kanunlar" },
    { c: "KİMYA", n: "Karışımlar", q: 1, target: 40, s: false, yt: "TYT+Kimya+Karisimlar" },
    { c: "KİMYA", n: "Asitler, Bazlar ve Tuzlar", q: 1, target: 50, s: true, yt: "TYT+Kimya+Asitler+Bazlar" },

    // BİYOLOJİ
    { c: "BİYOLOJİ", n: "Canlıların Ortak Özellikleri", q: 1, target: 30, s: false, yt: "TYT+Biyoloji+Ortak+Ozellikler" },
    { c: "BİYOLOJİ", n: "Hücre ve Yapısı", q: 1, target: 50, s: true, yt: "TYT+Biyoloji+Hucre" },
    { c: "BİYOLOJİ", n: "Canlıların Sınıflandırılması", q: 1, target: 40, s: false, yt: "TYT+Biyoloji+Siniflandirma" },
    { c: "BİYOLOJİ", n: "Hücre Bölünmeleri", q: 1, target: 50, s: true, yt: "TYT+Biyoloji+Hucre+Bolunmeleri" },
    { c: "BİYOLOJİ", n: "Kalıtım", q: 1, target: 80, s: true, yt: "TYT+Biyoloji+Kalitim" },
    { c: "BİYOLOJİ", n: "Ekosistem Ekolojisi", q: 1, target: 40, s: false, yt: "TYT+Biyoloji+Ekoloji" },

    // SOSYAL (Özetlenmiş Kritikler)
    { c: "TARİH", n: "Tarih ve Zaman - İlk Türk Devletleri", q: 1, target: 40, s: true, yt: "TYT+Tarih+Ilk+Turk+Devletleri" },
    { c: "TARİH", n: "Osmanlı Devleti Kuruluş ve Yükselme", q: 1, target: 40, s: false, yt: "TYT+Tarih+Osmanli+Siyasi" },
    { c: "TARİH", n: "Milli Mücadele Hazırlık", q: 1, target: 50, s: true, yt: "TYT+Tarih+Milli+Mucadele" },
    { c: "TARİH", n: "Atatürk İlkeleri ve İnkılaplar", q: 2, target: 50, s: true, yt: "TYT+Tarih+Inkilaplar" },
    { c: "COĞRAFYA", n: "Harita Bilgisi", q: 1, target: 30, s: true, yt: "TYT+Cografya+Harita+Bilgisi" },
    { c: "COĞRAFYA", n: "İklim Bilgisi", q: 1, target: 40, s: true, yt: "TYT+Cografya+Iklim+Bilgisi" },
    { c: "COĞRAFYA", n: "Nüfus ve Yerleşme", q: 1, target: 30, s: true, yt: "TYT+Cografya+Nufus" },
    { c: "FELSEFE", n: "Felsefenin Temel Konuları", q: 5, target: 50, s: false, yt: "TYT+Felsefe+Konu+Anlatimi" },
    { c: "DİN", n: "Din Kültürü Temel Kavramlar", q: 5, target: 50, s: true, yt: "TYT+Din+Kulturu+Kavramlar" }
];

export default function App() {
    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem('tyt_study_v3');
        return saved ? JSON.parse(saved) : { subjectIndex: 0, stepIndex: 0, showVideo: false };
    });

    const [questionCount, setQuestionCount] = useState("");
    const [toast, setToast] = useState(null);

    useEffect(() => {
        localStorage.setItem('tyt_study_v3', JSON.stringify(progress));
    }, [progress]);

    const current = FULL_DB[progress.subjectIndex];
    const examDate = new Date("2026-06-20");
    const daysLeft = Math.ceil((examDate - new Date()) / (1000 * 60 * 60 * 24));
    const completionPercentage = Math.round((progress.subjectIndex / FULL_DB.length) * 100);

    const showToast = (message, type = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const handleOpenVideo = () => {
        setProgress({ ...progress, stepIndex: 1, showVideo: true });
    };

    const handleCloseVideo = () => {
        setProgress({ ...progress, showVideo: false });
    };

    const handleSaveProgress = () => {
        const count = Number(questionCount);
        if (!questionCount || count < 10) {
            showToast("❌ En az 10 soru çözmelisin!", 'error');
            return;
        }

        showToast(`✅ ${count} soru kaydedildi! Tebrikler!`, 'success');
        setTimeout(() => {
            setProgress({ ...progress, stepIndex: 2, showVideo: false });
            setQuestionCount("");
        }, 1000);
    };

    const handleNextSubject = () => {
        if (progress.subjectIndex < FULL_DB.length - 1) {
            setProgress({ subjectIndex: progress.subjectIndex + 1, stepIndex: 0, showVideo: false });
            setQuestionCount("");
            showToast("📚 Yeni konuya geçildi!", 'info');
        } else {
            showToast("🎉 TEBRİKLER! TÜM MÜFREDATI BİTİRDİN!", 'success');
        }
    };

    const handlePreviousSubject = () => {
        if (progress.subjectIndex > 0) {
            setProgress({ subjectIndex: progress.subjectIndex - 1, stepIndex: 0, showVideo: false });
            setQuestionCount("");
            showToast("⬅️ Önceki konuya dönüldü", 'info');
        }
    };

    const jumpToStep = (stepIdx) => {
        if (stepIdx <= progress.stepIndex) {
            setProgress({ ...progress, stepIndex: stepIdx });
        }
    };

    return (
        <div style={styles.body}>
            {/* Toast Notification */}
            {toast && (
                <div style={{
                    ...styles.toast,
                    backgroundColor: toast.type === 'error' ? '#ff4444' : toast.type === 'info' ? '#4488ff' : '#00ff88',
                }}>
                    {toast.message}
                </div>
            )}

            {/* Status Bar */}
            <div style={styles.statusBar}>
                <span style={styles.statusItem}>📅 {daysLeft} GÜN</span>
                <span style={styles.statusItem}>{current.c}</span>
                <span style={styles.statusItem}>{progress.subjectIndex + 1}/{FULL_DB.length}</span>
            </div>

            {/* Video Overlay */}
            {progress.showVideo && (
                <div style={styles.videoOverlay}>
                    <div style={styles.videoHeader}>
                        <span style={styles.videoTitle}>▶ {current.n}</span>
                        <button onClick={handleCloseVideo} style={styles.closeBtn}>✕ KAPAT</button>
                    </div>
                    <iframe
                        style={styles.iframe}
                        src={`https://www.youtube.com/embed?listType=search&list=${current.yt}`}
                        allowFullScreen
                        title={current.n}
                    />
                </div>
            )}

            {/* Main Content */}
            <div style={styles.content}>
                <div style={styles.progressBar}>
                    <div style={{ ...styles.progressFill, width: `${completionPercentage}%` }} />
                </div>
                <div style={styles.progressText}>{completionPercentage}% TAMAMLANDI</div>

                <div style={styles.subjectCard}>
                    <span style={current.s ? styles.tagCritical : styles.tagNormal}>
                        {current.s ? "★ YÜKSEK PUAN" : "○ TEMEL KONU"}
                    </span>
                    <h1 style={styles.title}>{current.n}</h1>
                    <p style={styles.subtitle}>Sınavda ~{current.q} Soru | Hedef: {current.target} Soru</p>
                </div>

                <div style={styles.stepNav}>
                    <div
                        style={{ ...styles.stepDot, ...(progress.stepIndex >= 0 ? styles.stepActive : {}) }}
                        onClick={() => jumpToStep(0)}
                    >
                        <span style={styles.stepNumber}>1</span>
                        <span style={styles.stepLabel}>İZLE</span>
                    </div>
                    <div style={styles.stepLine} />
                    <div
                        style={{ ...styles.stepDot, ...(progress.stepIndex >= 1 ? styles.stepActive : {}) }}
                        onClick={() => jumpToStep(1)}
                    >
                        <span style={styles.stepNumber}>2</span>
                        <span style={styles.stepLabel}>ÇÖZ</span>
                    </div>
                    <div style={styles.stepLine} />
                    <div
                        style={{ ...styles.stepDot, ...(progress.stepIndex >= 2 ? styles.stepActive : {}) }}
                        onClick={() => jumpToStep(2)}
                    >
                        <span style={styles.stepNumber}>3</span>
                        <span style={styles.stepLabel}>BİTİR</span>
                    </div>
                </div>

                <div style={styles.actionSection}>
                    {progress.stepIndex === 0 && (
                        <button onClick={handleOpenVideo} style={styles.mainBtn} className="btn-primary">
                            🎬 KONU VİDEOSUNU İZLE
                        </button>
                    )}

                    {progress.stepIndex === 1 && (
                        <div style={styles.inputSection}>
                            <p style={styles.targetText}>🎯 Hedef: {current.target} Soru</p>
                            <input
                                type="number"
                                placeholder="Kaç soru çözdün?"
                                value={questionCount}
                                onChange={(e) => setQuestionCount(e.target.value)}
                                style={styles.input}
                            />
                            <button onClick={handleSaveProgress} style={styles.mainBtn} className="btn-primary">
                                💾 VERİYİ KAYDET
                            </button>
                        </div>
                    )}

                    {progress.stepIndex === 2 && (
                        <button onClick={handleNextSubject} style={styles.finishBtn} className="btn-success">
                            ✅ SONRAKİ KONUYA GEÇ
                        </button>
                    )}

                    {/* Navigation Buttons */}
                    <div style={styles.navButtons}>
                        <button
                            onClick={handlePreviousSubject}
                            disabled={progress.subjectIndex === 0}
                            style={{ ...styles.navBtn, ...(progress.subjectIndex === 0 ? styles.navBtnDisabled : {}) }}
                        >
                            ← ÖNCEKİ
                        </button>
                        <button
                            onClick={handleNextSubject}
                            disabled={progress.subjectIndex >= FULL_DB.length - 1}
                            style={{ ...styles.navBtn, ...(progress.subjectIndex >= FULL_DB.length - 1 ? styles.navBtnDisabled : {}) }}
                        >
                            ATLA →
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255,255,255,0.3);
        }
        .btn-primary:active {
          transform: scale(0.98);
        }
        .btn-success:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0,255,136,0.5);
        }
        .btn-success:active {
          transform: scale(0.98);
        }
      `}</style>
        </div>
    );
}

const styles = {
    body: {
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    },
    statusBar: {
        padding: '50px 20px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '11px',
        color: '#666',
        borderBottom: '1px solid #111',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #000 100%)',
    },
    statusItem: {
        animation: 'fadeIn 0.5s ease',
    },
    toast: {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '15px 30px',
        borderRadius: '10px',
        color: '#000',
        fontWeight: 'bold',
        fontSize: '14px',
        zIndex: 2000,
        animation: 'fadeIn 0.3s ease',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    },
    videoOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeIn 0.3s ease',
    },
    videoHeader: {
        padding: '50px 20px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        borderBottom: '1px solid #222',
    },
    videoTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    closeBtn: {
        background: 'linear-gradient(135deg, #333 0%, #222 100%)',
        border: '1px solid #444',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'all 0.2s ease',
    },
    iframe: {
        flex: 1,
        border: 'none',
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'slideIn 0.5s ease',
    },
    progressBar: {
        width: '100%',
        maxWidth: '400px',
        height: '4px',
        backgroundColor: '#111',
        borderRadius: '2px',
        overflow: 'hidden',
        marginBottom: '10px',
    },
    progressFill: {
        height: '100%',
        background: 'linear-gradient(90deg, #00ff88 0%, #00cc66 100%)',
        transition: 'width 0.5s ease',
    },
    progressText: {
        fontSize: '10px',
        color: '#00ff88',
        marginBottom: '30px',
        letterSpacing: '2px',
    },
    subjectCard: {
        textAlign: 'center',
        marginBottom: '40px',
    },
    tagCritical: {
        fontSize: '10px',
        background: 'linear-gradient(135deg, #ffaa00 0%, #ff8800 100%)',
        padding: '6px 12px',
        borderRadius: '6px',
        color: '#000',
        fontWeight: 'bold',
        display: 'inline-block',
    },
    tagNormal: {
        fontSize: '10px',
        backgroundColor: '#1a1a1a',
        padding: '6px 12px',
        borderRadius: '6px',
        color: '#888',
        display: 'inline-block',
    },
    title: {
        fontSize: '26px',
        fontWeight: 'bold',
        margin: '15px 0',
        background: 'linear-gradient(135deg, #fff 0%, #aaa 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    subtitle: {
        fontSize: '13px',
        color: '#666',
    },
    stepNav: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '40px',
        gap: '0',
    },
    stepDot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    stepActive: {
        transform: 'scale(1.1)',
    },
    stepNumber: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#111',
        border: '2px solid #00ff88',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#00ff88',
    },
    stepLabel: {
        fontSize: '11px',
        color: '#00ff88',
        fontWeight: 'bold',
    },
    stepLine: {
        width: '40px',
        height: '2px',
        backgroundColor: '#222',
        margin: '0 5px',
        marginBottom: '20px',
    },
    actionSection: {
        width: '100%',
        maxWidth: '350px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    mainBtn: {
        width: '100%',
        padding: '18px',
        background: 'linear-gradient(135deg, #fff 0%, #e0e0e0 100%)',
        color: '#000',
        border: 'none',
        borderRadius: '12px',
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    finishBtn: {
        width: '100%',
        padding: '18px',
        background: 'linear-gradient(135deg, #00ff88 0%, #00cc66 100%)',
        color: '#000',
        border: 'none',
        borderRadius: '12px',
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    inputSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    targetText: {
        fontSize: '14px',
        color: '#888',
        textAlign: 'center',
        margin: 0,
    },
    input: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#0a0a0a',
        border: '2px solid #222',
        color: '#fff',
        borderRadius: '10px',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        outline: 'none',
        transition: 'all 0.2s ease',
    },
    navButtons: {
        display: 'flex',
        gap: '10px',
    },
    navBtn: {
        flex: 1,
        padding: '12px',
        backgroundColor: '#1a1a1a',
        color: '#888',
        border: '1px solid #333',
        borderRadius: '8px',
        fontSize: '12px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    navBtnDisabled: {
        opacity: 0.3,
        cursor: 'not-allowed',
    },
};
