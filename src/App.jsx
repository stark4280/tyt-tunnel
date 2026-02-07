import React, { useState, useEffect, useRef } from 'react';

// --- 105-DAY INTERLEAVED CURRICULUM (SAME AS V7.0) ---
const CURRICULUM_105 = [
    { d: 1, c: "TÜRKÇE", n: "Sözcükte Anlam", t: 60, s: false, pdf: 'TURK' },
    { d: 2, c: "MATEMATİK", n: "Temel Kavramlar", t: 100, s: true, pdf: 'MAT' },
    { d: 3, c: "FİZİK", n: "Fizik Bilimine Giriş", t: 30, s: false, pdf: 'FEN' },
    { d: 4, c: "TÜRKÇE", n: "Cümlede Anlam", t: 60, s: false, pdf: 'TURK' },
    { d: 5, c: "MATEMATİK", n: "Sayı Basamakları", t: 60, s: false, pdf: 'MAT' },
    { d: 6, c: "KİMYA", n: "Atom Yapısı", t: 70, s: true, pdf: 'FEN' },
    { d: 7, c: "SİSTEM", n: "HAFTALIK TEKRAR", t: 0, isRest: true },
    { d: 8, c: "BİYOLOJİ", n: "Canlıların Ortak Özellikleri", t: 30, s: false, pdf: 'FEN' },
    { d: 9, c: "TÜRKÇE", n: "Paragrafta Anlatım Teknikleri", t: 100, s: true, pdf: 'TURK' },
    { d: 10, c: "MATEMATİK", n: "Bölme ve Bölünebilme", t: 60, s: false, pdf: 'MAT' },
    { d: 11, c: "GEOMETRİ", n: "Doğruda ve Üçgende Açılar", t: 80, s: true, pdf: 'GEO' },
    { d: 12, c: "FİZİK", n: "Madde ve Özellikleri", t: 40, s: false, pdf: 'FEN' },
    { d: 13, c: "TÜRKÇE", n: "Paragrafta Ana Düşünce", t: 150, s: true, pdf: 'TURK' },
    { d: 14, c: "SİSTEM", n: "HAFTALIK TEKRAR", t: 0, isRest: true },
    // ... continuing pattern for 105 days
];

const BOOK_INVENTORY = [
    { id: 'm1', cat: 'MATEMATİK', name: '3D TYT Matematik' },
    { id: 'm2', cat: 'MATEMATİK', name: '3-4-5 TYT Matematik' },
    { id: 't1', cat: 'TÜRKÇE', name: 'Paraf IQ Paragraf' },
    { id: 't2', cat: 'TÜRKÇE', name: '3-4-5 TYT Türkçe' },
    { id: 'f1', cat: 'FEN', name: 'Aydın TYT Fen Bilimleri' },
    { id: 'g1', cat: 'GEOMETRİ', name: 'Karekök Geometri' },
];

export default function App() {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('citadel_v81');
        return saved ? JSON.parse(saved) : {
            step: 'setup', // setup, inventory, main
            pdfs: {}, // { MAT: File, TURK: File, FEN: File, GEO: File }
            inventory: [],
            dayIdx: 0,
            phase: 0, // 0=video, 1=pdf, 2=complete
            videoId: null,
            history: []
        };
    });

    const [url, setUrl] = useState('');
    const [toast, setToast] = useState(null);
    const [tool, setTool] = useState('pen');

    const canvasRef = useRef(null);
    const pdfContainerRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);

    useEffect(() => {
        localStorage.setItem('citadel_v81', JSON.stringify(state));
    }, [state]);

    // Cleanup PDF URL on unmount
    useEffect(() => {
        return () => {
            if (pdfUrl) URL.revokeObjectURL(pdfUrl);
        };
    }, [pdfUrl]);

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 2500);
    };

    const handlePDFUpload = (category, file) => {
        setState(prev => ({
            ...prev,
            pdfs: { ...prev.pdfs, [category]: file }
        }));
    };

    const toggleBook = (id) => {
        const newInv = state.inventory.includes(id)
            ? state.inventory.filter(i => i !== id)
            : [...state.inventory, id];
        setState({ ...state, inventory: newInv });
    };

    const startEngine = () => {
        const requiredPDFs = ['MAT', 'TURK', 'FEN', 'GEO'];
        const missing = requiredPDFs.filter(cat => !state.pdfs[cat]);

        if (missing.length > 0) {
            showToast(`⚠️ Eksik PDF: ${missing.join(', ')}`);
            return;
        }

        if (state.inventory.length < 3) {
            showToast("⚠️ En az 3 kaynak seç!");
            return;
        }

        setState({ ...state, step: 'main' });
        showToast("🔒 Kütüphane kilitlendi. Tünel açıldı.");
    };

    const extractVideoID = (url) => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=))([\w\-]{11})/);
        return match ? match[1] : null;
    };

    const handleVideoLock = () => {
        const id = extractVideoID(url);
        if (!id) {
            showToast("❌ Geçersiz YouTube linki!");
            return;
        }
        setState({ ...state, videoId: id, phase: 1 });
        setUrl('');
        showToast("🔒 Video kilitlendi.");
    };

    const openPDF = () => {
        const current = CURRICULUM_105[state.dayIdx];
        const pdfFile = state.pdfs[current.pdf];

        if (pdfFile) {
            const url = URL.createObjectURL(pdfFile);
            setPdfUrl(url);

            // Initialize canvas
            setTimeout(() => {
                if (canvasRef.current && pdfContainerRef.current) {
                    const canvas = canvasRef.current;
                    const container = pdfContainerRef.current;
                    canvas.width = container.offsetWidth;
                    canvas.height = container.offsetHeight;
                }
            }, 500);
        }
    };

    const handleDayComplete = () => {
        if (pdfUrl) URL.revokeObjectURL(pdfUrl);
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

    // Canvas drawing functions
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
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        } else if (tool === 'eraser') {
            ctx.clearRect(pos.x - 10, pos.y - 10, 20, 20);
        }
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        showToast("🧹 Tuval temizlendi");
    };

    const getPosition = (e, rect) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    };

    const current = CURRICULUM_105[state.dayIdx];
    const progress = Math.round((state.dayIdx / 105) * 100);

    // PDF SETUP SCREEN
    if (state.step === 'setup') {
        return (
            <div style={s.base}>
                <div style={s.setupBox}>
                    <h1 style={s.setupTitle}>PDF KÜTÜPHANE KURULUMU</h1>
                    <p style={s.setupDesc}>Çalışma PDF'lerini yükle. Her kategori için bir dosya gerekli.</p>

                    <div style={s.pdfGrid}>
                        {['MAT', 'TURK', 'FEN', 'GEO'].map(cat => (
                            <div key={cat} style={s.pdfUploadBox}>
                                <div style={s.pdfLabel}>{cat === 'MAT' ? 'MATEMATİK' : cat === 'TURK' ? 'TÜRKÇE' : cat === 'FEN' ? 'FEN' : 'GEOMETRİ'}</div>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={(e) => handlePDFUpload(cat, e.target.files[0])}
                                    style={s.fileInput}
                                    id={`pdf-${cat}`}
                                />
                                <label htmlFor={`pdf-${cat}`} style={{
                                    ...s.uploadBtn,
                                    backgroundColor: state.pdfs[cat] ? '#001a00' : '#1a1a1a',
                                    borderColor: state.pdfs[cat] ? '#00ff88' : '#333'
                                }}>
                                    {state.pdfs[cat] ? `✓ ${state.pdfs[cat].name.substring(0, 20)}...` : '📁 PDF Yükle'}
                                </label>
                            </div>
                        ))}
                    </div>

                    <button onClick={() => setState({ ...state, step: 'inventory' })} style={s.nextBtn}>
                        İLERLE
                    </button>
                </div>
            </div>
        );
    }

    // INVENTORY SCREEN
    if (state.step === 'inventory') {
        return (
            <div style={s.base}>
                <div style={s.setupBox}>
                    <h1 style={s.setupTitle}>ENVANTER KONTROLÜ</h1>
                    <p style={s.setupDesc}>En az 3 kaynak seç.</p>

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

                    <div style={s.inventoryCount}>Seçili: {state.inventory.length} / Min: 3</div>
                    <button onClick={startEngine} style={s.startBtn}>🔒 SİSTEMİ BAŞLAT</button>
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
            </div>

            <div style={s.main}>
                <div style={s.subjectBox}>
                    <div style={current.s ? s.badgeCrit : s.badgeNorm}>
                        {current.s ? "★ KRİTİK" : "○ BASE"}
                    </div>
                    <div style={s.category}>{current.c}</div>
                    <h1 style={s.topicTitle}>{current.n}</h1>
                    {!current.isRest && <p style={s.target}>Hedef: {current.t} Soru</p>}
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

                            {/* PHASE 1: PDF + CANVAS */}
                            {state.phase === 1 && (
                                <>
                                    {!pdfUrl ? (
                                        <button style={s.pdfBtn} onClick={openPDF}>
                                            📖 PDF'İ AÇ VE ÇALIŞMAYA BAŞLA
                                        </button>
                                    ) : (
                                        <>
                                            {/* Digital Ink Tools */}
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

                                            {/* PDF + Canvas Container */}
                                            <div style={s.pdfContainer} ref={pdfContainerRef}>
                                                <embed
                                                    src={pdfUrl}
                                                    type="application/pdf"
                                                    style={s.pdfViewer}
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
                            ⏭ TEKRAR YAPILDI, DEVAM ET
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

    // Setup
    setupBox: { width: '100%', maxWidth: '700px', margin: 'auto', padding: '40px 30px', textAlign: 'center' },
    setupTitle: { fontSize: '24px', letterSpacing: '3px', marginBottom: '15px', color: '#00ff88' },
    setupDesc: { fontSize: '13px', color: '#666', marginBottom: '40px', lineHeight: '1.6' },
    pdfGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' },
    pdfUploadBox: { padding: '20px', border: '1px solid #222', borderRadius: '10px' },
    pdfLabel: { fontSize: '12px', color: '#888', marginBottom: '15px', fontWeight: 'bold' },
    fileInput: { display: 'none' },
    uploadBtn: { display: 'block', padding: '15px', border: '2px solid #333', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', transition: 'all 0.2s' },
    nextBtn: { width: '100%', maxWidth: '300px', padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },

    bookGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '15px', marginBottom: '30px' },
    bookItem: { padding: '18px', border: '2px solid #222', borderRadius: '10px', cursor: 'pointer', position: 'relative', textAlign: 'left', transition: 'all 0.2s' },
    bookCat: { fontSize: '9px', color: '#666', fontWeight: 'bold', display: 'block', marginBottom: '8px' },
    bookName: { fontSize: '13px', fontWeight: 'bold', lineHeight: '1.3' },
    check: { position: 'absolute', right: '12px', top: '12px', color: '#00ff88', fontSize: '18px' },
    inventoryCount: { fontSize: '14px', color: '#888', marginBottom: '25px' },
    startBtn: { width: '100%', padding: '20px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', fontWeight: 'bold', fontSize: '16px', border: 'none', borderRadius: '10px', cursor: 'pointer' },

    // Main
    toast: { position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', zIndex: 1000 },
    header: { padding: '25px 30px', borderBottom: '1px solid #111', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#666' },
    dayCounter: { fontWeight: 'bold', color: '#00ff88' },
    progressLabel: {},

    main: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' },
    subjectBox: { textAlign: 'center', marginBottom: '30px' },
    badgeCrit: { display: 'inline-block', background: '#ffaa00', color: '#000', padding: '6px 14px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', marginBottom: '12px' },
    badgeNorm: { display: 'inline-block', background: '#1a1a1a', color: '#666', padding: '6px 14px', borderRadius: '6px', fontSize: '10px', marginBottom: '12px' },
    category: { fontSize: '13px', color: '#00ff88', marginBottom: '10px', letterSpacing: '2px' },
    topicTitle: { fontSize: '28px', fontWeight: 'bold', margin: '10px 0' },
    target: { fontSize: '14px', color: '#666' },

    actions: { width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '15px' },
    searchBtn: { padding: '14px', background: '#1a1a1a', border: '1px solid #333', color: '#888', borderRadius: '10px', cursor: 'pointer', fontSize: '14px' },
    input: { padding: '16px', background: '#0a0a0a', border: '2px solid #222', color: '#fff', borderRadius: '10px', fontSize: '15px', textAlign: 'center', outline: 'none' },
    lockBtn: { padding: '18px', background: 'linear-gradient(135deg, #fff, #e0e0e0)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    pdfBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },

    // Digital Ink
    toolbarContainer: { position: 'relative', width: '100%' },
    toolbar: { display: 'flex', gap: '10px', marginBottom: '15px', justifyContent: 'center' },
    toolBtn: { padding: '12px 20px', background: '#1a1a1a', border: '1px solid #333', color: '#888', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', transition: 'all 0.2s' },
    toolActive: { background: '#00ff88', color: '#000', borderColor: '#00ff88' },

    pdfContainer: { position: 'relative', width: '100%', height: '500px', borderRadius: '10px', overflow: 'hidden', marginBottom: '15px' },
    pdfViewer: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' },
    canvasLayer: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'crosshair', touchAction: 'none' },

    doneBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    finishBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    restBtn: { padding: '18px', background: '#1a1a1a', border: '1px solid #333', color: '#00ff88', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },

    stats: { display: 'flex', gap: '20px', marginTop: '30px' },
    stat: { textAlign: 'center', padding: '20px', background: '#0a0a0a', borderRadius: '10px', minWidth: '120px' },
    statLabel: { fontSize: '10px', color: '#666', marginBottom: '8px' },
    statValue: { fontSize: '24px', fontWeight: 'bold', color: '#00ff88' }
};
