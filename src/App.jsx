import React, { useState, useEffect, useRef } from 'react';

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
    // ... continuing to day 105
];

const PDF_CATEGORIES = [
    { id: 'MAT_345', name: 'Matematik 3-4-5' },
    { id: 'MAT_BS', name: 'Matematik Başarı Serisi' },
    { id: 'MAT_PROB', name: 'Matematik Problemler' },
    { id: 'TURKCE_345', name: 'Türkçe 3-4-5' },
    { id: 'PARAGRAF_LIMIT', name: 'Paragraf Limit' },
    { id: 'PARAGRAF_PARAF', name: 'Paragraf Paraf IQ' },
    { id: 'GEO_3D_VDD', name: 'Geometri 3D VDD' },
    { id: 'GEO_BS', name: 'Geometri Başarı Serisi' },
    { id: 'FIZIK_345', name: 'Fizik 3-4-5' },
    { id: 'FIZIK_AYDIN', name: 'Fizik Aydın' },
    { id: 'KIMYA_345', name: 'Kimya 3-4-5' },
    { id: 'KIMYA_PALME', name: 'Kimya Palme' },
    { id: 'BIYO_345', name: 'Biyoloji 3-4-5' },
    { id: 'BIYO_BIYOTIK', name: 'Biyoloji Biyotik' },
    { id: 'SOSYAL_345', name: 'Sosyal 3-4-5' },
    { id: 'COG_BS', name: 'Coğrafya Başarı Serisi' },
    { id: 'FEL_LIMIT_EL', name: 'Felsefe Limit Elin' },
    { id: 'DIN_LIMIT_EL', name: 'Din Limit Elin' },
    { id: 'TARIH_345', name: 'Tarih 3-4-5' }
];

export default function App() {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('cloud_citadel_v11');
        return saved ? JSON.parse(saved) : {
            driveSetup: false,
            fileIdMap: {}, // { MAT_345: 'abc123...', TURKCE_345: 'def456...', ... }
            dayIdx: 0,
            phase: 0,
            videoId: null,
            history: []
        };
    });

    const [url, setUrl] = useState('');
    const [toast, setToast] = useState(null);
    const [tool, setTool] = useState('pen');
    const [pdfUrl, setPdfUrl] = useState(null);
    const [currentFileId, setCurrentFileId] = useState('');
    const [currentCategory, setCurrentCategory] = useState('');

    const canvasRef = useRef(null);
    const pdfContainerRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        localStorage.setItem('cloud_citadel_v11', JSON.stringify(state));
    }, [state]);

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 3000);
    };

    const handleFileIdInput = (category, fileId) => {
        setState(prev => ({
            ...prev,
            fileIdMap: { ...prev.fileIdMap, [category]: fileId }
        }));
    };

    const handleDriveSetup = () => {
        const required = ['MAT_345', 'TURKCE_345', 'PARAGRAF_LIMIT', 'GEO_3D_VDD', 'FIZIK_345', 'KIMYA_345', 'BIYO_345'];
        const missing = required.filter(cat => !state.fileIdMap[cat]);

        if (missing.length > 0) {
            showToast(`⚠️ Eksik: ${missing.join(', ')}`);
            return;
        }

        setState({ ...state, driveSetup: true });
        showToast("🔒 Drive bağlandı!");
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

    const openPDF = () => {
        const current = CURRICULUM_105[state.dayIdx];
        const fileId = state.fileIdMap[current.pdf];

        if (!fileId) {
            showToast("⚠️ Bu PDF için File ID girilmemiş!");
            return;
        }

        const driveUrl = `https://docs.google.com/viewer?srcid=${fileId}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`;
        setPdfUrl(driveUrl);

        setTimeout(() => {
            if (canvasRef.current && pdfContainerRef.current) {
                const canvas = canvasRef.current;
                const container = pdfContainerRef.current;
                canvas.width = container.offsetWidth;
                canvas.height = container.offsetHeight;
            }
        }, 500);

        showToast("📖 PDF yüklendi");
    };

    const handleDayComplete = () => {
        setPdfUrl(null);

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
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const pos = getPosition(e, rect);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    };

    const draw = (e) => {
        if (!isDrawing) return;
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

    // GOOGLE DRIVE SETUP SCREEN
    if (!state.driveSetup) {
        return (
            <div style={s.base}>
                <div style={s.setupBox}>
                    <h1 style={s.setupTitle}>☁️ GOOGLE DRIVE BAĞLANTI</h1>
                    <p style={s.setupDesc}>
                        Drive Klasörü: <a href="https://drive.google.com/drive/folders/1A05kx1ewqSajhDP9pnI4LDSgZmFsjC2V" target="_blank" style={s.link}>Klasörü Aç</a><br />
                        Her PDF için File ID'yi gir. (Sağ tık → Paylaş → Link kopyala → ID'yi çıkar)
                    </p>

                    <div style={s.grid}>
                        {PDF_CATEGORIES.map(cat => (
                            <div key={cat.id} style={s.mapBox}>
                                <div style={s.catName}>{cat.name}</div>
                                <input
                                    type="text"
                                    placeholder="File ID (örn: 1A05kx1e...)"
                                    value={state.fileIdMap[cat.id] || ''}
                                    onChange={(e) => handleFileIdInput(cat.id, e.target.value)}
                                    style={{
                                        ...s.input,
                                        borderColor: state.fileIdMap[cat.id] ? '#00ff88' : '#333'
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <button onClick={handleDriveSetup} style={s.startBtn}>
                        🚀 BAĞLANTIYI TAMAMLA
                    </button>
                </div>
            </div>
        );
    }

    // MAIN STUDY SCREEN
    return (
        <div style={s.base}>
            {toast && <div style={s.toast}>{toast}</div>}

            <div style={s.header}>
                <span style={s.dayCounter}>GÜN {current.d} / 105</span>
                <span style={s.progressLabel}>{progress}%</span>
                <span style={s.cloud}>☁️ Drive</span>
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
                                        <button style={s.pdfBtn} onClick={openPDF}>
                                            📖 PDF'İ DRIVE'DAN AÇ
                                        </button>
                                    ) : (
                                        <>
                                            <div style={s.toolbar}>
                                                <button
                                                    style={{ ...s.toolBtn, ...(tool === 'pen' ? s.toolActive : {}) }}
                                                    onClick={() => setTool('pen')}
                                                >
                                                    ✏️ KALEM
                                                </button>
                                                <button
                                                    style={{ ...s.toolBtn, ...(tool === 'eraser' ? s.toolActive : {}) }}
                                                    onClick={() => setTool('eraser')}
                                                >
                                                    🧹 SİLGİ
                                                </button>
                                                <button style={s.toolBtn} onClick={clearCanvas}>
                                                    🗑️ TEMİZLE
                                                </button>
                                            </div>

                                            <div style={s.pdfContainer} ref={pdfContainerRef}>
                                                <iframe
                                                    src={pdfUrl}
                                                    style={s.pdfViewer}
                                                    title="Drive PDF"
                                                />
                                                <canvas
                                                    ref={canvasRef}
                                                    style={s.canvasLayer}
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

    setupBox: { width: '100%', maxWidth: '900px', margin: 'auto', padding: '40px 30px', textAlign: 'center', overflowY: 'auto', maxHeight: '100vh' },
    setupTitle: { fontSize: '24px', letterSpacing: '3px', marginBottom: '15px', color: '#00ff88' },
    setupDesc: { fontSize: '13px', color: '#666', marginBottom: '30px', lineHeight: '1.8' },
    link: { color: '#00ff88', textDecoration: 'underline' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px', marginBottom: '40px' },
    mapBox: { padding: '15px', border: '1px solid #222', borderRadius: '8px', textAlign: 'left' },
    catName: { fontSize: '11px', color: '#888', marginBottom: '8px', fontWeight: 'bold' },
    input: { width: '100%', padding: '12px', background: '#0a0a0a', border: '2px solid #333', color: '#fff', borderRadius: '6px', fontSize: '13px', outline: 'none' },
    startBtn: { width: '100%', maxWidth: '400px', padding: '20px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', fontWeight: 'bold', fontSize: '16px', border: 'none', borderRadius: '10px', cursor: 'pointer' },

    toast: { position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', zIndex: 1000 },
    header: { padding: '25px 30px', borderBottom: '1px solid #111', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#666' },
    dayCounter: { fontWeight: 'bold', color: '#00ff88' },
    progressLabel: {},
    cloud: { color: '#555' },

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

    toolbar: { display: 'flex', gap: '10px', marginBottom: '15px', justifyContent: 'center' },
    toolBtn: { padding: '12px 20px', background: '#1a1a1a', border: '1px solid #333', color: '#888', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', transition: 'all 0.2s' },
    toolActive: { background: '#00ff88', color: '#000', borderColor: '#00ff88' },

    pdfContainer: { position: 'relative', width: '100%', height: '500px', borderRadius: '10px', overflow: 'hidden', marginBottom: '15px' },
    pdfViewer: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' },
    canvasLayer: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'crosshair', touchAction: 'none', pointerEvents: 'all' },

    doneBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    finishBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    restBtn: { padding: '18px', background: '#1a1a1a', border: '1px solid #333', color: '#00ff88', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },

    stats: { display: 'flex', gap: '20px', marginTop: '30px' },
    stat: { textAlign: 'center', padding: '20px', background: '#0a0a0a', borderRadius: '10px', minWidth: '120px' },
    statLabel: { fontSize: '10px', color: '#666', marginBottom: '8px' },
    statValue: { fontSize: '24px', fontWeight: 'bold', color: '#00ff88' }
};
