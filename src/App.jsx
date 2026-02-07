import React, { useState, useEffect } from 'react';

// --- FULL TYT CURRICULUM (78 TOPICS) ---
const FULL_DB = [
    // TÜRKÇE
    { c: "TÜRKÇE", n: "Sözcükte Anlam", q: 3, target: 60, s: false },
    { c: "TÜRKÇE", n: "Cümlede Anlam", q: 4, target: 60, s: false },
    { c: "TÜRKÇE", n: "Paragrafta Anlatım Teknikleri", q: 4, target: 100, s: true },
    { c: "TÜRKÇE", n: "Paragrafta Ana Düşünce", q: 22, target: 150, s: true },
    { c: "TÜRKÇE", n: "Ses Bilgisi", q: 1, target: 40, s: false },
    { c: "TÜRKÇE", n: "Yazım Kuralları", q: 2, target: 60, s: true },
    { c: "TÜRKÇE", n: "Noktalama İşaretleri", q: 2, target: 60, s: true },
    { c: "TÜRKÇE", n: "Sözcük Yapısı ve Ekler", q: 1, target: 50, s: false },
    { c: "TÜRKÇE", n: "İsimler, Sıfatlar, Zamirler", q: 1, target: 60, s: false },
    { c: "TÜRKÇE", n: "Zarflar, Edatlar, Bağlaçlar", q: 1, target: 60, s: false },
    { c: "TÜRKÇE", n: "Fiiller ve Fiilimsiler", q: 1, target: 60, s: false },
    { c: "TÜRKÇE", n: "Cümlenin Ögeleri", q: 1, target: 50, s: true },

    // MATEMATİK
    { c: "MATEMATİK", n: "Temel Kavramlar", q: 3, target: 100, s: true },
    { c: "MATEMATİK", n: "Sayı Basamakları", q: 2, target: 60, s: false },
    { c: "MATEMATİK", n: "Bölme ve Bölünebilme", q: 2, target: 60, s: false },
    { c: "MATEMATİK", n: "EBOB - EKOK", q: 1, target: 50, s: false },
    { c: "MATEMATİK", n: "Rasyonel Sayılar", q: 1, target: 40, s: true },
    { c: "MATEMATİK", n: "Basit Eşitsizlikler", q: 1, target: 50, s: false },
    { c: "MATEMATİK", n: "Mutlak Değer", q: 1, target: 60, s: true },
    { c: "MATEMATİK", n: "Üslü Sayılar", q: 1, target: 80, s: true },
    { c: "MATEMATİK", n: "Köklü Sayılar", q: 1, target: 80, s: true },
    { c: "MATEMATİK", n: "Çarpanlara Ayırma", q: 1, target: 60, s: false },
    { c: "MATEMATİK", n: "Oran - Orantı", q: 1, target: 50, s: false },
    { c: "MATEMATİK", n: "Denklem Çözme", q: 1, target: 40, s: false },
    { c: "MATEMATİK", n: "Sayı ve Kesir Problemleri", q: 5, target: 200, s: true },
    { c: "MATEMATİK", n: "Yaş Problemleri", q: 1, target: 50, s: false },
    { c: "MATEMATİK", n: "Hız ve Hareket Problemleri", q: 1, target: 60, s: true },
    { c: "MATEMATİK", n: "Yüzde, Kar-Zarar Problemleri", q: 2, target: 100, s: true },
    { c: "MATEMATİK", n: "Karışım ve Grafik Problemleri", q: 1, target: 50, s: false },
    { c: "MATEMATİK", n: "Kümeler", q: 2, target: 80, s: true },
    { c: "MATEMATİK", n: "Fonksiyonlar", q: 2, target: 100, s: true },
    { c: "MATEMATİK", n: "Permütasyon ve Kombinasyon", q: 1, target: 60, s: false },
    { c: "MATEMATİK", n: "Olasılık", q: 1, target: 60, s: true },
    { c: "MATEMATİK", n: "Veri ve İstatistik", q: 1, target: 40, s: false },
    { c: "MATEMATİK", n: "Mantık", q: 1, target: 40, s: false },

    // GEOMETRİ
    { c: "GEOMETRİ", n: "Doğruda ve Üçgende Açılar", q: 1, target: 80, s: true },
    { c: "GEOMETRİ", n: "Dik ve Özel Üçgenler", q: 2, target: 100, s: true },
    { c: "GEOMETRİ", n: "Üçgende Alan ve Benzerlik", q: 2, target: 100, s: true },
    { c: "GEOMETRİ", n: "Çokgenler ve Dörtgenler", q: 2, target: 80, s: false },
    { c: "GEOMETRİ", n: "Çember ve Daire", q: 1, target: 60, s: false },
    { c: "GEOMETRİ", n: "Katı Cisimler", q: 2, target: 80, s: true },

    // FİZİK
    { c: "FİZİK", n: "Fizik Bilimine Giriş", q: 1, target: 30, s: false },
    { c: "FİZİK", n: "Madde ve Özellikleri", q: 1, target: 40, s: false },
    { c: "FİZİK", n: "Hareket ve Kuvvet", q: 1, target: 60, s: true },
    { c: "FİZİK", n: "Enerji", q: 1, target: 40, s: false },
    { c: "FİZİK", n: "Isı, Sıcaklık ve Genleşme", q: 1, target: 50, s: true },
    { c: "FİZİK", n: "Elektrik ve Manyetizma", q: 1, target: 60, s: false },
    { c: "FİZİK", n: "Basınç ve Kaldırma Kuvveti", q: 1, target: 50, s: false },
    { c: "FİZİK", n: "Dalgalar", q: 1, target: 40, s: false },
    { c: "FİZİK", n: "Optik", q: 2, target: 100, s: true },

    // KİMYA
    { c: "KİMYA", n: "Kimya Bilimi", q: 1, target: 30, s: false },
    { c: "KİMYA", n: "Atomun Yapısı", q: 1, target: 40, s: true },
    { c: "KİMYA", n: "Periyodik Sistem", q: 1, target: 40, s: true },
    { c: "KİMYA", n: "Kimyasal Türler Arası Etkileşimler", q: 1, target: 60, s: true },
    { c: "KİMYA", n: "Maddenin Halleri", q: 1, target: 40, s: false },
    { c: "KİMYA", n: "Kimyanın Temel Kanunları", q: 1, target: 50, s: true },
    { c: "KİMYA", n: "Karışımlar", q: 1, target: 40, s: false },
    { c: "KİMYA", n: "Asitler, Bazlar ve Tuzlar", q: 1, target: 50, s: true },

    // BİYOLOJİ
    { c: "BİYOLOJİ", n: "Canlıların Ortak Özellikleri", q: 1, target: 30, s: false },
    { c: "BİYOLOJİ", n: "Hücre ve Yapısı", q: 1, target: 50, s: true },
    { c: "BİYOLOJİ", n: "Canlıların Sınıflandırılması", q: 1, target: 40, s: false },
    { c: "BİYOLOJİ", n: "Hücre Bölünmeleri", q: 1, target: 50, s: true },
    { c: "BİYOLOJİ", n: "Kalıtım", q: 1, target: 80, s: true },
    { c: "BİYOLOJİ", n: "Ekosistem Ekolojisi", q: 1, target: 40, s: false },

    // SOSYAL
    { c: "TARİH", n: "Tarih ve Zaman - İlk Türk Devletleri", q: 1, target: 40, s: true },
    { c: "TARİH", n: "Osmanlı Devleti Kuruluş ve Yükselme", q: 1, target: 40, s: false },
    { c: "TARİH", n: "Milli Mücadele Hazırlık", q: 1, target: 50, s: true },
    { c: "TARİH", n: "Atatürk İlkeleri ve İnkılaplar", q: 2, target: 50, s: true },
    { c: "COĞRAFYA", n: "Harita Bilgisi", q: 1, target: 30, s: true },
    { c: "COĞRAFYA", n: "İklim Bilgisi", q: 1, target: 40, s: true },
    { c: "COĞRAFYA", n: "Nüfus ve Yerleşme", q: 1, target: 30, s: true },
    { c: "FELSEFE", n: "Felsefenin Temel Konuları", q: 5, target: 50, s: false },
    { c: "DİN", n: "Din Kültürü Temel Kavramlar", q: 5, target: 50, s: true }
];

export default function App() {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('tunnel_v53');
        return saved ? JSON.parse(saved) : { idx: 0, step: 0, videoId: null, count: '', notes: '', history: [] };
    });

    const [urlInput, setUrlInput] = useState('');
    const [toast, setToast] = useState(null);

    useEffect(() => {
        localStorage.setItem('tunnel_v53', JSON.stringify(state));
    }, [state]);

    const current = FULL_DB[state.idx];
    const examDate = new Date("2026-06-20");
    const daysLeft = Math.ceil((examDate - new Date()) / (1000 * 60 * 60 * 24));
    const progress = Math.round((state.idx / FULL_DB.length) * 100);
    const totalSolved = state.history.reduce((sum, h) => sum + (Number(h.count) || 0), 0);

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 2500);
    };

    // YouTube URL Parser
    const extractVideoID = (url) => {
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const handleVideoLock = () => {
        const id = extractVideoID(urlInput);
        if (!id) {
            showToast("❌ Geçersiz YouTube linki!");
            return;
        }
        setState({ ...state, videoId: id, step: 1 });
        setUrlInput('');
        showToast("🔒 Video kilitlendi. İzlemeye başla.");
    };

    const handleWatchComplete = () => {
        setState({ ...state, step: 2 });
        showToast("✅ İzleme tamamlandı. Soru çözmeye geç.");
    };

    const handleSolveSave = () => {
        const count = Number(state.count);
        if (!count || count < 10) {
            showToast("❌ En az 10 soru çözmelisin!");
            return;
        }
        setState({ ...state, step: 3 });
        showToast(`💾 ${count} soru kaydedildi. Notlarını yaz.`);
    };

    const handleComplete = () => {
        if (!state.notes || state.notes.trim().length < 20) {
            showToast("❌ En az 20 karakter not yazmalısın!");
            return;
        }

        const record = {
            topic: current.n,
            count: Number(state.count),
            notes: state.notes,
            date: new Date().toISOString()
        };

        if (state.idx < FULL_DB.length - 1) {
            setState({
                idx: state.idx + 1,
                step: 0,
                videoId: null,
                count: '',
                notes: '',
                history: [...state.history, record]
            });
            showToast("🎯 Konu tamamlandı! Sıradaki konuya geçiliyor.");
        } else {
            setState({ ...state, history: [...state.history, record] });
            showToast("🎉 TEBRİKLER! TÜM MÜFREDATI BİTİRDİN!");
        }
    };

    return (
        <div style={s.app}>
            {toast && <div style={s.toast}>{toast}</div>}

            {/* Header */}
            <div style={s.header}>
                <div style={s.countdown}>⏱ {daysLeft} GÜN</div>
                <div style={s.module}>{current.c}</div>
                <div style={s.counter}>{state.idx + 1}/{FULL_DB.length}</div>
            </div>

            {/* Progress */}
            <div style={s.progressBar}>
                <div style={{ ...s.progressFill, width: `${progress}%` }} />
            </div>
            <div style={s.progressLabel}>{progress}% TUNNEL | {totalSolved} SORU</div>

            {/* Subject */}
            <div style={s.subject}>
                <div style={current.s ? s.tagCrit : s.tagNorm}>
                    {current.s ? "★ YÜK. PUAN" : "○ TEMEL"}
                </div>
                <h1 style={s.title}>{current.n}</h1>
                <p style={s.meta}>Sınavda ~{current.q} Soru | Hedef: {current.target}</p>
            </div>

            {/* Steps */}
            <div style={s.steps}>
                <span style={state.step >= 0 ? s.stepOn : s.stepOff}>BUL</span>
                <span style={s.arrow}>→</span>
                <span style={state.step >= 1 ? s.stepOn : s.stepOff}>İZLE</span>
                <span style={s.arrow}>→</span>
                <span style={state.step >= 2 ? s.stepOn : s.stepOff}>ÇÖZ</span>
                <span style={s.arrow}>→</span>
                <span style={state.step >= 3 ? s.stepOn : s.stepOff}>NOTLA</span>
            </div>

            {/* Content */}
            <div style={s.content}>
                {/* STEP 0: BUL & KİLİTLE */}
                {state.step === 0 && (
                    <>
                        <p style={s.hint}>⚠️ Algoritma tuzağına düşme. Videoyu bul, linkini yapıştır.</p>
                        <button
                            style={s.searchBtn}
                            onClick={() => window.open(`https://www.youtube.com/results?search_query=TYT+${current.c}+${current.n}+konu+anlatimi`, '_blank')}
                        >
                            🔍 YOUTUBE'DA ARA
                        </button>
                        <input
                            style={s.input}
                            type="text"
                            placeholder="Video linkini buraya yapıştır..."
                            value={urlInput}
                            onChange={(e) => setUrlInput(e.target.value)}
                        />
                        <button style={s.lockBtn} onClick={handleVideoLock}>
                            🔒 VİDEOYU TÜNELE KİLİTLE
                        </button>
                    </>
                )}

                {/* STEP 1: İZLE (DISTRACTION-FREE) */}
                {state.step === 1 && (
                    <>
                        <div style={s.videoWrapper}>
                            <iframe
                                src={`https://www.youtube-nocookie.com/embed/${state.videoId}?rel=0&modestbranding=1&iv_load_policy=3`}
                                style={s.iframe}
                                title="Tunnel Player"
                                allowFullScreen
                            />
                        </div>
                        <button style={s.doneBtn} onClick={handleWatchComplete}>
                            ✅ VİDEOYU BİTİRDİM
                        </button>
                    </>
                )}

                {/* STEP 2: ÇÖZ */}
                {state.step === 2 && (
                    <>
                        <h2 style={s.targetTitle}>🎯 HEDEF: {current.target} SORU</h2>
                        <input
                            style={s.input}
                            type="number"
                            placeholder="Kaç soru çözdün?"
                            value={state.count}
                            onChange={(e) => setState({ ...state, count: e.target.value })}
                        />
                        <button style={s.doneBtn} onClick={handleSolveSave}>
                            💾 KAYDET VE İLERLE
                        </button>
                    </>
                )}

                {/* STEP 3: NOTLA (ACTIVE RECALL) */}
                {state.step === 3 && (
                    <>
                        <p style={s.hint}>📝 Bu konudan ne öğrendin? (Active Recall)</p>
                        <textarea
                            style={s.textarea}
                            rows={5}
                            placeholder="3-5 cümle not al..."
                            value={state.notes}
                            onChange={(e) => setState({ ...state, notes: e.target.value })}
                        />
                        <button style={s.finishBtn} onClick={handleComplete}>
                            ✅ KONUYU BİTİR
                        </button>
                    </>
                )}
            </div>

            {/* Stats */}
            {state.history.length > 0 && (
                <div style={s.stats}>
                    <div style={s.stat}>
                        <div style={s.statLabel}>Biten</div>
                        <div style={s.statValue}>{state.history.length}</div>
                    </div>
                    <div style={s.stat}>
                        <div style={s.statLabel}>Toplam</div>
                        <div style={s.statValue}>{totalSolved}</div>
                    </div>
                </div>
            )}

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
    app: { minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' },
    toast: { position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', zIndex: 1000, animation: 'fadeIn 0.3s' },
    header: { display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#666', paddingTop: '30px' },
    countdown: { fontWeight: 'bold' },
    module: { color: '#00ff88' },
    counter: {},
    progressBar: { width: '100%', height: '4px', backgroundColor: '#111', borderRadius: '2px', overflow: 'hidden' },
    progressFill: { height: '100%', background: 'linear-gradient(90deg, #00ff88, #00cc66)', transition: 'width 0.5s' },
    progressLabel: { fontSize: '10px', color: '#00ff88', textAlign: 'center', letterSpacing: '1px' },
    subject: { textAlign: 'center', padding: '20px 0' },
    tagCrit: { display: 'inline-block', background: '#ffaa00', color: '#000', padding: '5px 12px', borderRadius: '5px', fontSize: '10px', fontWeight: 'bold' },
    tagNorm: { display: 'inline-block', background: '#1a1a1a', color: '#666', padding: '5px 12px', borderRadius: '5px', fontSize: '10px' },
    title: { fontSize: '24px', fontWeight: 'bold', margin: '15px 0 5px' },
    meta: { fontSize: '12px', color: '#666' },
    steps: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '11px', fontWeight: 'bold' },
    stepOn: { color: '#00ff88' },
    stepOff: { color: '#333' },
    arrow: { color: '#333' },
    content: { flex: 1, display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', margin: '0 auto', width: '100%' },
    hint: { fontSize: '13px', color: '#888', textAlign: 'center', margin: 0 },
    searchBtn: { padding: '14px', background: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '10px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' },
    input: { padding: '15px', background: '#0a0a0a', border: '2px solid #222', color: '#fff', borderRadius: '10px', fontSize: '16px', textAlign: 'center', outline: 'none' },
    lockBtn: { padding: '16px', background: 'linear-gradient(135deg, #fff, #e0e0e0)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' },
    videoWrapper: { position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px', background: '#0a0a0a' },
    iframe: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: '10px' },
    doneBtn: { padding: '16px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' },
    targetTitle: { fontSize: '18px', textAlign: 'center', color: '#00ff88', margin: 0 },
    textarea: { padding: '15px', background: '#0a0a0a', border: '2px solid #222', color: '#fff', borderRadius: '10px', fontSize: '15px', outline: 'none', resize: 'vertical', fontFamily: 'inherit' },
    finishBtn: { padding: '16px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' },
    stats: { display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '15px' },
    stat: { textAlign: 'center', padding: '15px', background: '#0a0a0a', borderRadius: '10px', flex: 1, maxWidth: '120px' },
    statLabel: { fontSize: '10px', color: '#666', marginBottom: '5px' },
    statValue: { fontSize: '22px', fontWeight: 'bold', color: '#00ff88' },
};
