import React, { useState, useEffect } from 'react';

// --- 105-DAY FULL INTERLEAVED CURRICULUM ---
const CURRICULUM_105 = [
    // Week 1
    { d: 1, c: "TÜRKÇE", n: "Sözcükte Anlam", t: 60, s: false },
    { d: 2, c: "MATEMATİK", n: "Temel Kavramlar", t: 100, s: true },
    { d: 3, c: "FİZİK", n: "Fizik Bilimine Giriş", t: 30, s: false },
    { d: 4, c: "TÜRKÇE", n: "Cümlede Anlam", t: 60, s: false },
    { d: 5, c: "MATEMATİK", n: "Sayı Basamakları", t: 60, s: false },
    { d: 6, c: "KİMYA", n: "Kimya Bilimi & Atom Yapısı", t: 70, s: true },
    { d: 7, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    // Week 2
    { d: 8, c: "BİYOLOJİ", n: "Canlıların Ortak Özellikleri", t: 30, s: false },
    { d: 9, c: "TÜRKÇE", n: "Paragrafta Anlatım Teknikleri", t: 100, s: true },
    { d: 10, c: "MATEMATİK", n: "Bölme ve Bölünebilme", t: 60, s: false },
    { d: 11, c: "GEOMETRİ", n: "Doğruda ve Üçgende Açılar", t: 80, s: true },
    { d: 12, c: "FİZİK", n: "Madde ve Özellikleri", t: 40, s: false },
    { d: 13, c: "TÜRKÇE", n: "Paragrafta Ana Düşünce", t: 150, s: true },
    { d: 14, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    // Week 3
    { d: 15, c: "MATEMATİK", n: "EBOB - EKOK", t: 50, s: false },
    { d: 16, c: "KİMYA", n: "Periyodik Sistem", t: 40, s: true },
    { d: 17, c: "BİYOLOJİ", n: "Hücre ve Yapısı", t: 50, s: true },
    { d: 18, c: "TÜRKÇE", n: "Ses Bilgisi", t: 40, s: false },
    { d: 19, c: "MATEMATİK", n: "Rasyonel Sayılar", t: 40, s: true },
    { d: 20, c: "GEOMETRİ", n: "Dik ve Özel Üçgenler", t: 100, s: true },
    { d: 21, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    // Week 4
    { d: 22, c: "FİZİK", n: "Hareket ve Kuvvet", t: 60, s: true },
    { d: 23, c: "TÜRKÇE", n: "Yazım Kuralları", t: 60, s: true },
    { d: 24, c: "MATEMATİK", n: "Basit Eşitsizlikler", t: 50, s: false },
    { d: 25, c: "KİMYA", n: "Kimyasal Türler Arası Etkileşimler", t: 60, s: true },
    { d: 26, c: "TÜRKÇE", n: "Noktalama İşaretleri", t: 60, s: true },
    { d: 27, c: "MATEMATİK", n: "Mutlak Değer", t: 60, s: true },
    { d: 28, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    // Week 5
    { d: 29, c: "BİYOLOJİ", n: "Canlıların Sınıflandırılması", t: 40, s: false },
    { d: 30, c: "GEOMETRİ", n: "Üçgende Alan ve Benzerlik", t: 100, s: true },
    { d: 31, c: "TÜRKÇE", n: "Sözcük Yapısı ve Ekler", t: 50, s: false },
    { d: 32, c: "MATEMATİK", n: "Üslü Sayılar", t: 80, s: true },
    { d: 33, c: "FİZİK", n: "Enerji", t: 40, s: false },
    { d: 34, c: "KİMYA", n: "Maddenin Halleri", t: 40, s: false },
    { d: 35, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    // Week 6
    { d: 36, c: "TÜRKÇE", n: "İsimler, Sıfatlar, Zamirler", t: 60, s: false },
    { d: 37, c: "MATEMATİK", n: "Köklü Sayılar", t: 80, s: true },
    { d: 38, c: "BİYOLOJİ", n: "Hücre Bölünmeleri", t: 50, s: true },
    { d: 39, c: "GEOMETRİ", n: "Çokgenler ve Dörtgenler", t: 80, s: false },
    { d: 40, c: "TÜRKÇE", n: "Zarflar, Edatlar, Bağlaçlar", t: 60, s: false },
    { d: 41, c: "MATEMATİK", n: "Çarpanlara Ayırma", t: 60, s: false },
    { d: 42, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    // Week 7
    { d: 43, c: "FİZİK", n: "Isı, Sıcaklık ve Genleşme", t: 50, s: true },
    { d: 44, c: "KİMYA", n: "Kimyanın Temel Kanunları", t: 50, s: true },
    { d: 45, c: "TÜRKÇE", n: "Fiiller ve Fiilimsiler", t: 60, s: false },
    { d: 46, c: "MATEMATİK", n: "Oran - Orantı", t: 50, s: false },
    { d: 47, c: "BİYOLOJİ", n: "Kalıtım", t: 80, s: true },
    { d: 48, c: "GEOMETRİ", n: "Çember ve Daire", t: 60, s: false },
    { d: 49, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    // Week 8
    { d: 50, c: "TÜRKÇE", n: "Cümlenin Ögeleri", t: 50, s: true },
    { d: 51, c: "MATEMATİK", n: "Denklem Çözme", t: 40, s: false },
    { d: 52, c: "FİZİK", n: "Elektrik ve Manyetizma", t: 60, s: false },
    { d: 53, c: "KİMYA", n: "Karışımlar", t: 40, s: false },
    { d: 54, c: "MATEMATİK", n: "Sayı ve Kesir Problemleri", t: 200, s: true },
    { d: 55, c: "GEOMETRİ", n: "Katı Cisimler", t: 80, s: true },
    { d: 56, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    // Week 9
    { d: 57, c: "BİYOLOJİ", n: "Ekosistem Ekolojisi", t: 40, s: false },
    { d: 58, c: "FİZİK", n: "Basınç ve Kaldırma Kuvveti", t: 50, s: false },
    { d: 59, c: "MATEMATİK", n: "Yaş Problemleri", t: 50, s: false },
    { d: 60, c: "KİMYA", n: "Asitler, Bazlar ve Tuzlar", t: 50, s: true },
    { d: 61, c: "MATEMATİK", n: "Hız ve Hareket Problemleri", t: 60, s: true },
    { d: 62, c: "FİZİK", n: "Dalgalar", t: 40, s: false },
    { d: 63, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    // Week 10
    { d: 64, c: "MATEMATİK", n: "Yüzde, Kar-Zarar Problemleri", t: 100, s: true },
    { d: 65, c: "FİZİK", n: "Optik", t: 100, s: true },
    { d: 66, c: "MATEMATİK", n: "Karışım ve Grafik Problemleri", t: 50, s: false },
    { d: 67, c: "TARİH", n: "Tarih ve Zaman - İlk Türk Devletleri", t: 40, s: true },
    { d: 68, c: "MATEMATİK", n: "Kümeler", t: 80, s: true },
    { d: 69, c: "COĞRAFYA", n: "Harita Bilgisi", t: 30, s: true },
    { d: 70, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    // Week 11
    { d: 71, c: "MATEMATİK", n: "Fonksiyonlar", t: 100, s: true },
    { d: 72, c: "TARİH", n: "Osmanlı Devleti Kuruluş ve Yükselme", t: 40, s: false },
    { d: 73, c: "MATEMATİK", n: "Permütasyon ve Kombinasyon", t: 60, s: false },
    { d: 74, c: "COĞRAFYA", n: "İklim Bilgisi", t: 40, s: true },
    { d: 75, c: "MATEMATİK", n: "Olasılık", t: 60, s: true },
    { d: 76, c: "TARİH", n: "Milli Mücadele Hazırlık", t: 50, s: true },
    { d: 77, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    // Week 12
    { d: 78, c: "MATEMATİK", n: "Veri ve İstatistik", t: 40, s: false },
    { d: 79, c: "COĞRAFYA", n: "Nüfus ve Yerleşme", t: 30, s: true },
    { d: 80, c: "MATEMATİK", n: "Mantık", t: 40, s: false },
    { d: 81, c: "TARİH", n: "Atatürk İlkeleri ve İnkılaplar", t: 50, s: true },
    { d: 82, c: "FELSEFE", n: "Felsefenin Temel Konuları", t: 50, s: false },
    { d: 83, c: "DİN", n: "Din Kültürü Temel Kavramlar", t: 50, s: true },
    { d: 84, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    // Week 13-15: Deep Revision
    { d: 85, c: "SİSTEM", n: "TÜRKÇE GENEL TEKRAR", t: 150, isRest: false },
    { d: 86, c: "SİSTEM", n: "MATEMATİK GENEL TEKRAR 1", t: 200, isRest: false },
    { d: 87, c: "SİSTEM", n: "FEN BİLİMLERİ GENEL TEKRAR", t: 120, isRest: false },
    { d: 88, c: "SİSTEM", n: "GEOMETRİ GENEL TEKRAR", t: 100, isRest: false },
    { d: 89, c: "SİSTEM", n: "MATEMATİK GENEL TEKRAR 2", t: 200, isRest: false },
    { d: 90, c: "SİSTEM", n: "SOSYAL BİLİMLER GENEL TEKRAR", t: 80, isRest: false },
    { d: 91, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    { d: 92, c: "SİSTEM", n: "TÜRKÇE SON TEKRAR", t: 100, isRest: false },
    { d: 93, c: "SİSTEM", n: "MATEMATİK PROBLEMLER", t: 150, isRest: false },
    { d: 94, c: "SİSTEM", n: "FEN BİLİMLERİ SON TEKRAR", t: 100, isRest: false },
    { d: 95, c: "SİSTEM", n: "GEOMETRİ SON TEKRAR", t: 80, isRest: false },
    { d: 96, c: "SİSTEM", n: "SOSYAL BİLİMLER SON TEKRAR", t: 60, isRest: false },
    { d: 97, c: "SİSTEM", n: "FULL DENEME SINAVI 1", t: 0, isRest: true },
    { d: 98, c: "SİSTEM", n: "HAFTALIK TEKRAR & ANALİZ", t: 0, isRest: true },

    { d: 99, c: "SİSTEM", n: "ZAYIF KONULAR SPRINT", t: 200, isRest: false },
    { d: 100, c: "SİSTEM", n: "FULL DENEME SINAVI 2", t: 0, isRest: true },
    { d: 101, c: "SİSTEM", n: "ZAYIF KONULAR SON RÖTUŞ", t: 150, isRest: false },
    { d: 102, c: "SİSTEM", n: "FULL DENEME SINAVI 3", t: 0, isRest: true },
    { d: 103, c: "SİSTEM", n: "SON GÖZDEN GEÇİRME", t: 100, isRest: false },
    { d: 104, c: "SİSTEM", n: "MENTAL HAZIRLIK & DİNLENME", t: 0, isRest: true },
    { d: 105, c: "SİSTEM", n: "SINAV GÜNÜ - 20 HAZİRAN 2026", t: 0, isRest: true }
];

const BOOK_INVENTORY = [
    { id: 'm1', cat: 'MATEMATİK', name: '3D TYT Matematik' },
    { id: 'm2', cat: 'MATEMATİK', name: '3-4-5 TYT Matematik' },
    { id: 'm3', cat: 'MATEMATİK', name: 'Karekök TYT Matematik' },
    { id: 't1', cat: 'TÜRKÇE', name: 'Paraf IQ Paragraf' },
    { id: 't2', cat: 'TÜRKÇE', name: '3-4-5 TYT Türkçe' },
    { id: 't3', cat: 'TÜRKÇE', name: 'Limit Paragraf' },
    { id: 'f1', cat: 'FEN', name: 'Aydın TYT Fen Bilimleri' },
    { id: 'f2', cat: 'FEN', name: '3-4-5 TYT Fen' },
    { id: 'g1', cat: 'GEOMETRİ', name: 'Karekök Geometri' },
    { id: 'g2', cat: 'GEOMETRİ', name: '3D Geometri' },
    { id: 's1', cat: 'SOSYAL', name: 'Limit Sosyal Bilimler' },
    { id: 's2', cat: 'SOSYAL', name: 'Hız ve Renk TYT Sosyal' }
];

export default function App() {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('citadel_v7');
        return saved ? JSON.parse(saved) : {
            setupComplete: false,
            inventory: [],
            dayIdx: 0,
            step: 0,
            videoId: null,
            history: []
        };
    });

    const [url, setUrl] = useState('');
    const [toast, setToast] = useState(null);

    useEffect(() => {
        localStorage.setItem('citadel_v7', JSON.stringify(state));
    }, [state]);

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 2500);
    };

    const toggleBook = (id) => {
        const newInv = state.inventory.includes(id)
            ? state.inventory.filter(i => i !== id)
            : [...state.inventory, id];
        setState({ ...state, inventory: newInv });
    };

    const startEngine = () => {
        if (state.inventory.length < 3) {
            showToast("⚠️ En az 3 kaynak seçmelisin!");
            return;
        }
        setState({ ...state, setupComplete: true });
        showToast("🔒 Envanter kilitlendi. Tünel açıldı.");
    };

    const extractVideoID = (url) => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w\-]{11})/);
        return match ? match[1] : null;
    };

    const handleVideoLock = () => {
        const id = extractVideoID(url);
        if (!id) {
            showToast("❌ Geçersiz YouTube linki!");
            return;
        }
        setState({ ...state, videoId: id, step: 1 });
        setUrl('');
        showToast("🔒 Video kilitlendi.");
    };

    const handleDayComplete = () => {
        const record = {
            day: current.d,
            topic: current.n,
            date: new Date().toISOString()
        };

        if (state.dayIdx < CURRICULUM_105.length - 1) {
            setState({
                dayIdx: state.dayIdx + 1,
                step: 0,
                videoId: null,
                history: [...state.history, record]
            });
            showToast("✅ Gün tamamlandı!");
        } else {
            setState({ ...state, history: [...state.history, record] });
            showToast("🎉 105 GÜN TAMAMLANDI!");
        }
    };

    const current = CURRICULUM_105[state.dayIdx];
    const progress = Math.round((state.dayIdx / 105) * 100);

    // SETUP SCREEN
    if (!state.setupComplete) {
        return (
            <div style={s.base}>
                <div style={s.setupBox}>
                    <h1 style={s.setupTitle}>ENVANTER KONTROLÜ</h1>
                    <p style={s.setupDesc}>Tünele girmeden önce masandaki kaynakları doğrula.<br />En az 3 kaynak seçilmelidir.</p>
                    <div style={s.bookGrid}>
                        {BOOK_INVENTORY.map(book => (
                            <div
                                key={book.id}
                                onClick={() => toggleBook(book.id)}
                                style={{
                                    ...s.bookItem,
                                    borderColor: state.inventory.includes(book.id) ? '#00ff88' : '#222',
                                    backgroundColor: state.inventory.includes(book.id) ? '#001a00' : 'transparent'
                                }}
                            >
                                <span style={s.bookCat}>{book.cat}</span>
                                <div style={s.bookName}>{book.name}</div>
                                {state.inventory.includes(book.id) && <span style={s.check}>✓</span>}
                            </div>
                        ))}
                    </div>
                    <div style={s.inventoryCount}>
                        Seçili: {state.inventory.length} / Minimum: 3
                    </div>
                    <button onClick={startEngine} style={s.startBtn}>
                        🔒 SİSTEMİ BAŞLAT
                    </button>
                </div>

                <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
            </div>
        );
    }

    // MAIN SCREEN
    return (
        <div style={s.base}>
            {toast && <div style={s.toast}>{toast}</div>}

            {/* Sidebar */}
            <div style={s.sidebar}>
                <h3 style={s.sidebarTitle}>105 GÜN HARİTASI</h3>
                <div style={s.sidebarScroll}>
                    {CURRICULUM_105.map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                ...s.sideItem,
                                color: idx < state.dayIdx ? '#00ff88' : idx === state.dayIdx ? '#fff' : '#444',
                                fontWeight: idx === state.dayIdx ? 'bold' : 'normal'
                            }}
                        >
                            G{item.d}: {item.c}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div style={s.main}>
                {/* Header */}
                <div style={s.header}>
                    <span style={s.dayCounter}>GÜN {current.d} / 105</span>
                    <span style={s.progressLabel}>{progress}% TAMAMLANDI</span>
                    <span style={s.exam}>SINAV: 20 HAZ 2026</span>
                </div>

                {/* Station */}
                <div style={s.station}>
                    <div style={s.subjectBox}>
                        <div style={current.s ? s.badgeCrit : s.badgeNorm}>
                            {current.s ? "★ YÜK" : "○ BASE"}
                        </div>
                        <div style={s.category}>{current.c}</div>
                        <h1 style={s.topicTitle}>{current.n}</h1>
                        {!current.isRest && <p style={s.target}>Hedef: {current.t} Soru</p>}
                    </div>

                    <div style={s.actions}>
                        {!current.isRest ? (
                            <>
                                {state.step === 0 && (
                                    <>
                                        <button
                                            style={s.searchBtn}
                                            onClick={() => window.open(`https://www.youtube.com/results?search_query=TYT+${current.c}+${current.n}+konu+anlatimi`, '_blank')}
                                        >
                                            🔍 VİDEOYU BUL
                                        </button>
                                        <input
                                            style={s.input}
                                            placeholder="Video linkini yapıştır..."
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                        />
                                        <button style={s.lockBtn} onClick={handleVideoLock}>
                                            🔒 VİDEOYU KİLİTLE
                                        </button>
                                    </>
                                )}

                                {state.step === 1 && (
                                    <>
                                        <div style={s.videoWrapper}>
                                            <iframe
                                                style={s.iframe}
                                                src={`https://www.youtube-nocookie.com/embed/${state.videoId}?rel=0&modestbranding=1`}
                                                allowFullScreen
                                                title="Locked Video"
                                            />
                                        </div>
                                        <button style={s.doneBtn} onClick={() => setState({ ...state, step: 2 })}>
                                            ✅ İZLEDİM, SORUYA GEÇ
                                        </button>
                                    </>
                                )}

                                {state.step === 2 && (
                                    <button style={s.finishBtn} onClick={handleDayComplete}>
                                        ✅ GÜNÜ BİTİR
                                    </button>
                                )}
                            </>
                        ) : (
                            <button style={s.restBtn} onClick={handleDayComplete}>
                                ⏭ TEKRARapprovalLAR YAPILDI, DEVAM ET
                            </button>
                        )}
                    </div>

                    {/* Stats */}
                    {state.history.length > 0 && (
                        <div style={s.stats}>
                            <div style={s.stat}>
                                <div style={s.statLabel}>Tamamlanan</div>
                                <div style={s.statValue}>{state.history.length} GÜN</div>
                            </div>
                            <div style={s.stat}>
                                <div style={s.statLabel}>Kalan</div>
                                <div style={s.statValue}>{105 - state.dayIdx} GÜN</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        button:active { transform: scale(0.97); }
      `}</style>
        </div>
    );
}

const s = {
    base: { minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'monospace', display: 'flex' },

    // Setup Screen
    setupBox: { width: '100%', maxWidth: '600px', margin: 'auto', padding: '40px 30px', textAlign: 'center' },
    setupTitle: { fontSize: '28px', letterSpacing: '4px', marginBottom: '15px', color: '#00ff88' },
    setupDesc: { fontSize: '13px', color: '#666', marginBottom: '40px', lineHeight: '1.6' },
    bookGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '15px', marginBottom: '30px' },
    bookItem: { padding: '18px', border: '2px solid #222', borderRadius: '10px', cursor: 'pointer', position: 'relative', textAlign: 'left', transition: 'all 0.2s' },
    bookCat: { fontSize: '9px', color: '#666', fontWeight: 'bold', display: 'block', marginBottom: '8px' },
    bookName: { fontSize: '13px', fontWeight: 'bold', lineHeight: '1.3' },
    check: { position: 'absolute', right: '12px', top: '12px', color: '#00ff88', fontSize: '18px' },
    inventoryCount: { fontSize: '14px', color: '#888', marginBottom: '25px' },
    startBtn: { width: '100%', padding: '20px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', fontWeight: 'bold', fontSize: '16px', border: 'none', borderRadius: '10px', cursor: 'pointer' },

    // Main Screen
    toast: { position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', zIndex: 1000, animation: 'fadeIn 0.3s' },
    sidebar: { width: '240px', borderRight: '1px solid #111', padding: '25px 20px', overflowY: 'auto', display: 'flex', flexDirection: 'column' },
    sidebarTitle: { color: '#00ff88', fontSize: '12px', letterSpacing: '2px', marginBottom: '20px' },
    sidebarScroll: { flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' },
    sideItem: { fontSize: '11px', padding: '6px 0', cursor: 'default' },

    main: { flex: 1, display: 'flex', flexDirection: 'column' },
    header: { padding: '25px 30px', borderBottom: '1px solid #111', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#666' },
    dayCounter: { fontWeight: 'bold', color: '#00ff88' },
    progressLabel: { color: '#888' },
    exam: { fontWeight: 'bold' },

    station: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' },
    subjectBox: { textAlign: 'center', marginBottom: '50px' },
    badgeCrit: { display: 'inline-block', background: '#ffaa00', color: '#000', padding: '6px 14px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', marginBottom: '12px' },
    badgeNorm: { display: 'inline-block', background: '#1a1a1a', color: '#666', padding: '6px 14px', borderRadius: '6px', fontSize: '10px', marginBottom: '12px' },
    category: { fontSize: '13px', color: '#00ff88', marginBottom: '10px', letterSpacing: '2px' },
    topicTitle: { fontSize: '32px', fontWeight: 'bold', margin: '10px 0', letterSpacing: '1px' },
    target: { fontSize: '14px', color: '#666' },

    actions: { width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '15px' },
    searchBtn: { padding: '14px', background: '#1a1a1a', border: '1px solid #333', color: '#888', borderRadius: '10px', cursor: 'pointer', fontSize: '14px' },
    input: { padding: '16px', background: '#0a0a0a', border: '2px solid #222', color: '#fff', borderRadius: '10px', fontSize: '15px', textAlign: 'center', outline: 'none' },
    lockBtn: { padding: '18px', background: 'linear-gradient(135deg, #fff, #e0e0e0)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    videoWrapper: { position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', background: '#0a0a0a' },
    iframe: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: '12px' },
    doneBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    finishBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    restBtn: { padding: '18px', background: '#1a1a1a', border: '1px solid #333', color: '#00ff88', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },

    stats: { display: 'flex', gap: '20px', marginTop: '40px' },
    stat: { textAlign: 'center', padding: '20px', background: '#0a0a0a', borderRadius: '10px', minWidth: '140px' },
    statLabel: { fontSize: '10px', color: '#666', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' },
    statValue: { fontSize: '24px', fontWeight: 'bold', color: '#00ff88' }
};
