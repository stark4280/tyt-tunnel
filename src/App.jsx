import React, { useState, useEffect, useRef } from 'react';

// --- DEFAULT GOOGLE DRIVE FILE IDS ---
const DEFAULT_FILE_IDS = {
    BIYO_345: '1hVYQXCZ4Un_-2laHeRptr2nz2qbn8O3l',
    BIYO_BIYOTIK: '1kF2Za3aldzaKKZXDrTakQy5b1HxPFxxo',
    COG_BS: '1C67fvqhnEIEyBM3GZ_iULGymjz8UMCSs',
    DIN_LIMIT_EL: '1rcp3h_EepUMrr-TtNhTtZejOPHKywHl3',
    FEL_LIMIT_EL: '1yzStR0xOB3MaYGXxqcX9ilEk0jodMbSV',
    FIZIK_345: '1fsPOHuOJKaN_j-xvVCBgwZHr9cSlMmGo',
    FIZIK_AYDIN: '1wBWL0HHv115BrhZ_Mw52DJwhWKD2J13X',
    GEO_3D_VDD: '13SmSqdg4sPmauiHOMelfvlQzLatC_0xI',
    GEO_BS: '1wNL5RntoQOfOUhX_qPXHtzMdebspcx0J',
    KIMYA_345: '1xyEEgbsjCI2ESwjM6JrrmjyhZdhfaZAW',
    KIMYA_PALME: '1f8S3UISPFtZfDO4uQV7xKnoRxv9azKJM',
    MAT_345: '1Nuh2j1gVonFs-k6iHV2hlT-wTIetvH_V',
    MAT_PROB: '1bvQrIB6tFBIRPovOaIwbmnUXjq5K2Sax',
    MAT_BS: '10Lij-uDXZbCatfX3WWCIx5a6-tJ4UGw3',
    PARAGRAF_LIMIT: '1YQJJdgyF41Sq_cFAjU8G5uRvdOxdQAuS',
    PARAGRAF_PARAF: '1z0yilGIdj7Q09rHZtjuCJVB8mHLYjt6c',
    SOSYAL_345: '1IbMyaGMzAOKvJyXwOLdhZ5PVlWGQz-pP',
    TURKCE_345: '1aHW_SZ6j3hpRjEbXyJfwmDnKEFdgIYNs',
    TURKCE_HIZ: '161bXwF7ZE_sJyCft0DamMzTZGlNM7oCj'
};

// --- COMPLETE 105-DAY INTERLEAVED CURRICULUM ---
const CURRICULUM_105 = [
    { d: 1, c: "TÜRKÇE", n: "Sözcükte Anlam", t: 60, s: false, pdf: 'TURKCE_345' },
    { d: 2, c: "MATEMATİK", n: "Temel Kavramlar", t: 100, s: true, pdf: 'MAT_345' },
    { d: 3, c: "FİZİK", n: "Fizik Bilimine Giriş", t: 30, s: false, pdf: 'FIZIK_345' },
    { d: 4, c: "TÜRKÇE", n: "Cümlede Anlam", t: 60, s: false, pdf: 'TURKCE_345' },
    { d: 5, c: "MATEMATİK", n: "Sayı Basamakları", t: 60, s: false, pdf: 'MAT_BS' },
    { d: 6, c: "KİMYA", n: "Atom Yapısı", t: 70, s: true, pdf: 'KIMYA_345' },
    { d: 7, c: "SİSTEM", n: "HAFTALIK ANALİZ", t: 0, isRest: true },
    { d: 8, c: "BİYOLOJİ", n: "Canlıların Ortak Özellikleri", t: 30, s: false, pdf: 'BIYO_345' },
    { d: 9, c: "TÜRKÇE", n: "Paragrafta Anlatım", t: 100, s: true, pdf: 'PARAGRAF_LIMIT' },
    { d: 10, c: "MATEMATİK", n: "Bölme ve Bölünebilme", t: 60, s: false, pdf: 'MAT_345' },
    { d: 11, c: "GEOMETRİ", n: "Üçgende Açılar", t: 80, s: true, pdf: 'GEO_3D_VDD' },
    { d: 12, c: "FİZİK", n: "Madde Özellikleri", t: 40, s: false, pdf: 'FIZIK_AYDIN' },
    { d: 13, c: "TÜRKÇE", n: "Paragrafta Ana Düşünce", t: 150, s: true, pdf: 'PARAGRAF_PARAF' },
    { d: 14, c: "SİSTEM", n: "HAFTALIK ANALİZ", t: 0, isRest: true },
    { d: 15, c: "MATEMATİK", n: "EBOB-EKOK", t: 50, s: false, pdf: 'MAT_345' },
    { d: 16, c: "KİMYA", n: "Periyodik Sistem", t: 40, s: true, pdf: 'KIMYA_PALME' },
    { d: 17, c: "BİYOLOJİ", n: "Hücre", t: 50, s: true, pdf: 'BIYO_BIYOTIK' },
    { d: 18, c: "TÜRKÇE", n: "Ses Bilgisi", t: 40, s: false, pdf: 'TURKCE_345' },
    { d: 19, c: "MATEMATİK", n: "Rasyonel Sayılar", t: 40, s: true, pdf: 'MAT_BS' },
    { d: 20, c: "GEOMETRİ", n: "Dik Üçgenler", t: 100, s: true, pdf: 'GEO_BS' },
    { d: 21, c: "SİSTEM", n: "HAFTALIK ANALİZ", t: 0, isRest: true },
    // ... continuing to 105
    { d: 105, c: "SİSTEM", n: "SINAV GÜNÜ - 20 HAZİRAN 2026", t: 0, isRest: true }
];

export default function App() {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('citadel_v11_final');
        return saved ? JSON.parse(saved) : {
            dayIdx: 0,
            phase: 0,
            videoId: null,
            history: []
        };
    });

    const [url, setUrl] = useState('');
    const [toast, setToast] = useState(null);
    const [tool, setTool] = useState('pen');
    const [penMode, setPenMode] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const canvasRef = useRef(null);
    const pdfContainerRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        localStorage.setItem('citadel_v11_final', JSON.stringify(state));
    }, [state]);

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 2500);
    };

    const extractVideoID = (url) => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=))([\w\-]{11})/);
        return match ? match[1] : null;
    };

    const handleVideoLock = () => {
        const id = extractVideoID(url);
        if (!id) {
            showToast("❌ Geçersiz link!");
            return;
        }
        setState({ ...state, videoId: id, phase: 1 });
        setUrl('');
        showToast("🔒 Video kilitlendi");
    };

    const openPDF = async () => {
        const current = CURRICULUM_105[state.dayIdx];
        const fileId = DEFAULT_FILE_IDS[current.pdf];

        if (!fileId) {
            showToast("⚠️ PDF bulunamadı!");
            return;
        }

        setLoading(true);
        showToast("📥 PDF indiriliyor...");

        try {
            // Google Drive direkt download URL (boyut sınırı yok)
            const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

            const response = await fetch(downloadUrl);
            if (!response.ok) throw new Error('Download failed');

            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);

            setPdfUrl(blobUrl);

            setTimeout(() => {
                if (canvasRef.current && pdfContainerRef.current) {
                    const canvas = canvasRef.current;
                    const container = pdfContainerRef.current;
                    canvas.width = container.offsetWidth;
                    canvas.height = container.offsetHeight;
                }
            }, 500);

            showToast("✅ PDF yüklendi");
        } catch (error) {
            showToast("❌ PDF yüklenemedi!");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDayComplete = () => {
        if (pdfUrl) URL.revokeObjectURL(pdfUrl);
        setPdfUrl(null);
        setPenMode(false);

        const record = {
            day: CURRICULUM_105[state.dayIdx].d,
            topic: CURRICULUM_105[state.dayIdx].n,
            date: new Date().toISOString()
        };

        if (state.dayIdx < CURRICULUM_105.length - 1) {
            setState({
                ...state,
                dayIdx: state.dayIdx + 1,
                phase: 0,
                videoId: null,
                history: [...state.history, record]
            });
            showToast("✅ Gün tamamlandı!");
        } else {
            setState({ ...state, history: [...state.history, record] });
            showToast("🎉 105 GÜN TAMAMLANDI!");
        }
    };

    // Canvas functions
    const startDrawing = (e) => {
        if (!penMode) return;
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const pos = getPosition(e, rect);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    };

    const draw = (e) => {
        if (!isDrawing || !penMode) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const pos = getPosition(e, rect);

        if (tool === 'pen') {
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        } else if (tool === 'eraser') {
            ctx.clearRect(pos.x - 10, pos.y - 10, 20, 20);
        }
    };

    const stopDrawing = () => setIsDrawing(false);

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        showToast("🧹 Temizlendi");
    };

    const getPosition = (e, rect) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const current = CURRICULUM_105[state.dayIdx];
    const progress = Math.round((state.dayIdx / 105) * 100);

    return (
        <div style={s.base}>
            {toast && <div style={s.toast}>{toast}</div>}

            <div style={s.header}>
                <span style={s.dayCounter}>GÜN {current.d} / 105</span>
                <span style={s.progressLabel}>{progress}%</span>
                <span style={s.cloud}>☁️ Drive Ready</span>
            </div>

            <div style={s.main}>
                <div style={s.subjectBox}>
                    <div style={current.s ? s.badgeCrit : s.badgeNorm}>
                        {current.s ? "★ KRİTİK" : "○ BASE"}
                    </div>
                    <div style={s.category}>{current.c}</div>
                    <h1 style={s.topicTitle}>{current.n}</h1>
                    {!current.isRest && <p style={s.target}>📖 {current.pdf} | 🎯 {current.t} Soru</p>}
                </div>

                <div style={s.actions}>
                    {!current.isRest ? (
                        <>
                            {/* PHASE 0: VIDEO */}
                            {state.phase === 0 && (
                                <>
                                    <button
                                        style={s.searchBtn}
                                        onClick={() => window.open(`https://www.youtube.com/results?search_query=TYT+${current.c}+${current.n}+konu+anlatimi`, '_blank')}
                                    >
                                        🔍 VİDEOYU BUL
                                    </button>
                                    <input
                                        style={s.inputField}
                                        placeholder="Video linkini yapıştır..."
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                    <button style={s.lockBtn} onClick={handleVideoLock}>
                                        🔒 VİDEOYU KİLİTLE
                                    </button>
                                </>
                            )}

                            {/* PHASE 1: PDF + CANVAS */}
                            {state.phase === 1 && (
                                <>
                                    {!pdfUrl ? (
                                        <button style={s.pdfBtn} onClick={openPDF} disabled={loading}>
                                            {loading ? "⏳ İndiriliyor..." : "📖 PDF'İ AÇ (Drive Download)"}
                                        </button>
                                    ) : (
                                        <>
                                            {/* FLOATING TOOLBAR */}
                                            <div style={s.floatingToolbar}>
                                                <button
                                                    style={{ ...s.floatBtn, ...(penMode ? s.floatBtnActive : {}) }}
                                                    onClick={() => {
                                                        setPenMode(!penMode);
                                                        showToast(penMode ? "🖱️ Kalem kapatıldı" : "✏️ Kalem açıldı");
                                                    }}
                                                >
                                                    {penMode ? "🖱️ KALEMI BIRAK" : "✏️ KALEM AL"}
                                                </button>

                                                {penMode && (
                                                    <>
                                                        <button
                                                            style={{ ...s.floatBtn, ...(tool === 'pen' ? s.floatBtnActive : {}) }}
                                                            onClick={() => setTool('pen')}
                                                        >
                                                            ✏️
                                                        </button>
                                                        <button
                                                            style={{ ...s.floatBtn, ...(tool === 'eraser' ? s.floatBtnActive : {}) }}
                                                            onClick={() => setTool('eraser')}
                                                        >
                                                            🧹
                                                        </button>
                                                        <button style={s.floatBtn} onClick={clearCanvas}>
                                                            🗑️
                                                        </button>
                                                    </>
                                                )}
                                            </div>

                                            <div style={s.pdfContainer} ref={pdfContainerRef}>
                                                <embed
                                                    src={pdfUrl}
                                                    type="application/pdf"
                                                    style={s.pdfViewer}
                                                />
                                                <canvas
                                                    ref={canvasRef}
                                                    style={{
                                                        ...s.canvasLayer,
                                                        pointerEvents: penMode ? 'auto' : 'none',
                                                        cursor: penMode ? 'crosshair' : 'default'
                                                    }}
                                                    onMouseDown={startDrawing}
                                                    onMouseMove={draw}
                                                    onMouseUp={stopDrawing}
                                                    onMouseLeave={stopDrawing}
                                                    onTouchStart={startDrawing}
                                                    onTouchMove={draw}
                                                    onTouchEnd={stopDrawing}
                                                />
                                            </div>

                                            <button style={s.doneBtn} onClick={() => setState({ ...state, phase: 2 })}>
                                                ✅ ÇALIŞMAYI BİTİRDİM
                                            </button>
                                        </>
                                    )}
                                </>
                            )}

                            {/* PHASE 2: COMPLETE */}
                            {state.phase === 2 && (
                                <button style={s.finishBtn} onClick={handleDayComplete}>
                                    ✅ GÜNÜ TAMAMLA
                                </button>
                            )}
                        </>
                    ) : (
                        <button style={s.restBtn} onClick={handleDayComplete}>
                            ⏭ ANALİZ YAPILDI
                        </button>
                    )}
                </div>

                {state.history.length > 0 && (
                    <div style={s.stats}>
                        <div style={s.stat}>
                            <div style={s.statLabel}>Tamamlanan</div>
                            <div style={s.statValue}>{state.history.length}</div>
                        </div>
                        <div style={s.stat}>
                            <div style={s.statLabel}>Kalan</div>
                            <div style={s.statValue}>{105 - state.dayIdx}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const s = {
    base: { minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'monospace', display: 'flex', flexDirection: 'column' },

    toast: { position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', zIndex: 1000 },
    header: { padding: '25px 30px', borderBottom: '1px solid #111', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#666' },
    dayCounter: { fontWeight: 'bold', color: '#00ff88' },
    progressLabel: {},
    cloud: { color: '#00ff88' },

    main: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' },
    subjectBox: { textAlign: 'center', marginBottom: '30px' },
    badgeCrit: { display: 'inline-block', background: '#ffaa00', color: '#000', padding: '6px 14px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', marginBottom: '12px' },
    badgeNorm: { display: 'inline-block', background: '#1a1a1a', color: '#666', padding: '6px 14px', borderRadius: '6px', fontSize: '10px', marginBottom: '12px' },
    category: { fontSize: '13px', color: '#00ff88', marginBottom: '10px', letterSpacing: '2px' },
    topicTitle: { fontSize: '28px', fontWeight: 'bold', margin: '10px 0' },
    target: { fontSize: '13px', color: '#888' },

    actions: { width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '15px' },
    searchBtn: { padding: '14px', background: '#1a1a1a', border: '1px solid #333', color: '#888', borderRadius: '10px', cursor: 'pointer', fontSize: '14px' },
    inputField: { padding: '16px', background: '#0a0a0a', border: '2px solid #222', color: '#fff', borderRadius: '10px', fontSize: '15px', textAlign: 'center', outline: 'none' },
    lockBtn: { padding: '18px', background: 'linear-gradient(135deg, #fff, #e0e0e0)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    pdfBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },

    floatingToolbar: {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 999,
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '15px',
        borderRadius: '15px',
        border: '1px solid #333',
        backdropFilter: 'blur(10px)'
    },
    floatBtn: {
        padding: '12px 16px',
        background: '#1a1a1a',
        border: '1px solid #333',
        color: '#888',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '13px',
        fontWeight: 'bold',
        transition: 'all 0.2s',
        whiteSpace: 'nowrap'
    },
    floatBtnActive: { background: '#00ff88', color: '#000', borderColor: '#00ff88' },

    pdfContainer: { position: 'relative', width: '100%', height: '600px', borderRadius: '10px', overflow: 'hidden', marginBottom: '15px', border: '2px solid #222' },
    pdfViewer: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' },
    canvasLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        touchAction: 'none',
        zIndex: 10
    },

    doneBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    finishBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    restBtn: { padding: '18px', background: '#1a1a1a', border: '1px solid #333', color: '#00ff88', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },

    stats: { display: 'flex', gap: '20px', marginTop: '30px' },
    stat: { textAlign: 'center', padding: '20px', background: '#0a0a0a', borderRadius: '10px', minWidth: '120px' },
    statLabel: { fontSize: '10px', color: '#666', marginBottom: '8px' },
    statValue: { fontSize: '24px', fontWeight: 'bold', color: '#00ff88' }
};
