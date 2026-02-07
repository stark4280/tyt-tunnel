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
        const saved = localStorage.getItem('tunnel_v52');
        return saved ? JSON.parse(saved) : { idx: 0, step: 0, data: { count: '', notes: '' }, history: [] };
    });

    const [toast, setToast] = useState(null);

    useEffect(() => {
        localStorage.setItem('tunnel_v52', JSON.stringify(state));
    }, [state]);

    const current = FULL_DB[state.idx];
    const examDate = new Date("2026-06-20");
    const daysLeft = Math.ceil((examDate - new Date()) / (1000 * 60 * 60 * 24));
    const progress = Math.round((state.idx / FULL_DB.length) * 100);

    const totalSolved = state.history.reduce((sum, h) => sum + (Number(h.count) || 0), 0);
    const totalTarget = FULL_DB.reduce((sum, t) => sum + t.target, 0);

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 2500);
    };

    const openVideo = () => {
        const query = `TYT ${current.c} ${current.n} Konu Anlatimi`.replace(/ /g, '+');
        window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
        showToast("Video sayfası açıldı. İzleyip dön.");
    };

    const confirmWatched = () => {
        setState({ ...state, step: 1 });
        showToast("Adım 2: Soru çözmeye başla.");
    };

    const saveSolved = () => {
        const count = Number(state.data.count);
        if (!count || count < 10) {
            showToast("En az 10 soru çözmelisin.");
            return;
        }
        setState({ ...state, step: 2 });
        showToast(`${count} soru kaydedildi. Adım 3'e geç.`);
    };

    const saveNotes = () => {
        if (!state.data.notes || state.data.notes.trim().length < 20) {
            showToast("En az 20 karakter not almalısın.");
            return;
        }

        const record = {
            topic: current.n,
            count: Number(state.data.count),
            notes: state.data.notes,
            date: new Date().toISOString()
        };

        if (state.idx < FULL_DB.length - 1) {
            setState({
                idx: state.idx + 1,
                step: 0,
                data: { count: '', notes: '' },
                history: [...state.history, record]
            });
            showToast("Konu tamamlandı. Sıradaki konuya geçiliyor.");
        } else {
            setState({
                ...state,
                history: [...state.history, record]
            });
            showToast("TEBRİKLER! TÜM MÜFREDATI BİTİRDİN!");
        }
    };

    return (
        <div style={s.body}>
            {toast && <div style={s.toast}>{toast}</div>}

            {/* Header */}
            <div style={s.header}>
                <div style={s.countdown}>⏱ {daysLeft} GÜN</div>
                <div style={s.module}>{current.c}</div>
                <div style={s.position}>{state.idx + 1}/{FULL_DB.length}</div>
            </div>

            {/* Progress Bar */}
            <div style={s.progressBar}>
                <div style={{ ...s.progressFill, width: `${progress}%` }} />
            </div>
            <div style={s.progressLabel}>{progress}% | {totalSolved}/{totalTarget} SORU</div>

            {/* Subject Info */}
            <div style={s.subject}>
                <div style={current.s ? s.tagCritical : s.tagNormal}>
                    {current.s ? "★ YÜK. PUAN" : "○ TEMEL"}
                </div>
                <h1 style={s.title}>{current.n}</h1>
                <p style={s.meta}>Sınavda ~{current.q} Soru | Hedef: {current.target} Soru</p>
            </div>

            {/* Steps */}
            <div style={s.steps}>
                <div style={state.step >= 0 ? s.stepActive : s.stepInactive}>1. İZLE</div>
                <div style={s.arrow}>→</div>
                <div style={state.step >= 1 ? s.stepActive : s.stepInactive}>2. ÇÖZ</div>
                <div style={s.arrow}>→</div>
                <div style={state.step >= 2 ? s.stepActive : s.stepInactive}>3. ANALİZ</div>
            </div>

            {/* Actions */}
            <div style={s.actions}>
                {state.step === 0 && (
                    <>
                        <button onClick={openVideo} style={s.btn}>
                            🎬 VİDEO ARAMASINI BAŞLAT
                        </button>
                        <p style={s.hint}>En iyi anladığın hocayı seç, izle ve buraya dönüp onay ver.</p>
                        <button onClick={confirmWatched} style={s.btnSecondary}>
                            ✓ İZLEDİM
                        </button>
                    </>
                )}

                {state.step === 1 && (
                    <>
                        <p style={s.hint}>🎯 Hedef: {current.target} Soru</p>
                        <input
                            type="number"
                            placeholder="Kaç soru çözdün?"
                            value={state.data.count}
                            onChange={(e) => setState({ ...state, data: { ...state.data, count: e.target.value } })}
                            style={s.input}
                        />
                        <button onClick={saveSolved} style={s.btn}>
                            💾 KAYDET VE İLERLE
                        </button>
                    </>
                )}

                {state.step === 2 && (
                    <>
                        <p style={s.hint}>📝 Bu konudan ne öğrendin? (Active Recall)</p>
                        <textarea
                            placeholder="3-5 cümle not al..."
                            value={state.data.notes}
                            onChange={(e) => setState({ ...state, data: { ...state.data, notes: e.target.value } })}
                            style={s.textarea}
                            rows={4}
                        />
                        <button onClick={saveNotes} style={s.btnSuccess}>
                            ✅ KONUYU BİTİR
                        </button>
                    </>
                )}
            </div>

            {/* Stats */}
            {state.history.length > 0 && (
                <div style={s.stats}>
                    <div style={s.statItem}>
                        <div style={s.statLabel}>Biten Konu</div>
                        <div style={s.statValue}>{state.history.length}</div>
                    </div>
                    <div style={s.statItem}>
                        <div style={s.statLabel}>Toplam Soru</div>
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
    body: {
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    toast: {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#00ff88',
        color: '#000',
        padding: '12px 24px',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '14px',
        zIndex: 1000,
        animation: 'fadeIn 0.3s ease',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '11px',
        color: '#666',
        paddingTop: '30px',
    },
    countdown: { fontWeight: 'bold' },
    module: { color: '#00ff88' },
    position: {},
    progressBar: {
        width: '100%',
        height: '4px',
        backgroundColor: '#111',
        borderRadius: '2px',
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        background: 'linear-gradient(90deg, #00ff88, #00cc66)',
        transition: 'width 0.5s ease',
    },
    progressLabel: {
        fontSize: '10px',
        color: '#00ff88',
        textAlign: 'center',
        letterSpacing: '1px',
    },
    subject: {
        textAlign: 'center',
        padding: '20px 0',
    },
    tagCritical: {
        display: 'inline-block',
        background: '#ffaa00',
        color: '#000',
        padding: '5px 12px',
        borderRadius: '5px',
        fontSize: '10px',
        fontWeight: 'bold',
    },
    tagNormal: {
        display: 'inline-block',
        background: '#1a1a1a',
        color: '#666',
        padding: '5px 12px',
        borderRadius: '5px',
        fontSize: '10px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '15px 0 5px',
    },
    meta: {
        fontSize: '12px',
        color: '#666',
    },
    steps: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        fontSize: '12px',
        fontWeight: 'bold',
    },
    stepActive: {
        color: '#00ff88',
    },
    stepInactive: {
        color: '#333',
    },
    arrow: {
        color: '#333',
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        maxWidth: '400px',
        margin: '0 auto',
        width: '100%',
    },
    btn: {
        padding: '16px',
        background: 'linear-gradient(135deg, #fff, #e0e0e0)',
        color: '#000',
        border: 'none',
        borderRadius: '10px',
        fontWeight: 'bold',
        fontSize: '15px',
        cursor: 'pointer',
        transition: 'transform 0.1s',
    },
    btnSecondary: {
        padding: '14px',
        background: '#1a1a1a',
        color: '#fff',
        border: '1px solid #333',
        borderRadius: '10px',
        fontWeight: 'bold',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'transform 0.1s',
    },
    btnSuccess: {
        padding: '16px',
        background: 'linear-gradient(135deg, #00ff88, #00cc66)',
        color: '#000',
        border: 'none',
        borderRadius: '10px',
        fontWeight: 'bold',
        fontSize: '15px',
        cursor: 'pointer',
        transition: 'transform 0.1s',
    },
    hint: {
        fontSize: '13px',
        color: '#888',
        textAlign: 'center',
        margin: 0,
    },
    input: {
        padding: '15px',
        background: '#0a0a0a',
        border: '2px solid #222',
        color: '#fff',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        outline: 'none',
    },
    textarea: {
        padding: '15px',
        background: '#0a0a0a',
        border: '2px solid #222',
        color: '#fff',
        borderRadius: '10px',
        fontSize: '15px',
        outline: 'none',
        resize: 'vertical',
        fontFamily: 'inherit',
    },
    stats: {
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        marginTop: '20px',
    },
    statItem: {
        textAlign: 'center',
        padding: '15px',
        background: '#0a0a0a',
        borderRadius: '10px',
        flex: 1,
        maxWidth: '150px',
    },
    statLabel: {
        fontSize: '10px',
        color: '#666',
        marginBottom: '5px',
    },
    statValue: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#00ff88',
    },
};
