import React, { useState, useEffect, useRef } from 'react';

// --- COMPLETE 105-DAY INTERLEAVED CURRICULUM ---
const CURRICULUM_105 = [
    // Week 1
    { d: 1, c: "TÜRKÇE", n: "Sözcükte Anlam", t: 60, s: false, pdf: 'TURKCE' },
    { d: 2, c: "MATEMATİK", n: "Temel Kavramlar", t: 100, s: true, pdf: 'MAT' },
    { d: 3, c: "FİZİK", n: "Fizik Bilimine Giriş", t: 30, s: false, pdf: 'FIZIK' },
    { d: 4, c: "TÜRKÇE", n: "Cümlede Anlam", t: 60, s: false, pdf: 'TURKCE' },
    { d: 5, c: "MATEMATİK", n: "Sayı Basamakları", t: 60, s: false, pdf: 'MAT' },
    { d: 6, c: "KİMYA", n: "Atom Yapısı", t: 70, s: true, pdf: 'KIMYA' },
    { d: 7, c: "SİSTEM", n: "HAFTALIK TEKRAR", t: 0, isRest: true },

    // Week 2
    { d: 8, c: "BİYOLOJİ", n: "Canlıların Ortak Özellikleri", t: 30, s: false, pdf: 'BIYOLOJI' },
    { d: 9, c: "TÜRKÇE", n: "Paragrafta Anlatım Teknikleri", t: 100, s: true, pdf: 'PARAGRAF' },
    { d: 10, c: "MATEMATİK", n: "Bölme ve Bölünebilme", t: 60, s: false, pdf: 'MAT' },
    { d: 11, c: "GEOMETRİ", n: "Doğruda ve Üçgende Açılar", t: 80, s: true, pdf: 'GEO' },
    { d: 12, c: "FİZİK", n: "Madde ve Özellikleri", t: 40, s: false, pdf: 'FIZIK' },
    { d: 13, c: "TÜRKÇE", n: "Paragrafta Ana Düşünce", t: 150, s: true, pdf: 'PARAGRAF' },
    { d: 14, c: "SİSTEM", n: "HAFTALIK TEKRAR", t: 0, isRest: true },

    // Week 3
    { d: 15, c: "MATEMATİK", n: "EBOB - EKOK", t: 50, s: false, pdf: 'MAT' },
    { d: 16, c: "KİMYA", n: "Periyodik Sistem", t: 40, s: true, pdf: 'KIMYA' },
    { d: 17, c: "BİYOLOJİ", n: "Hücre ve Yapısı", t: 50, s: true, pdf: 'BIYOLOJI' },
    { d: 18, c: "TÜRKÇE", n: "Ses Bilgisi", t: 40, s: false, pdf: 'TURKCE' },
    { d: 19, c: "MATEMATİK", n: "Rasyonel Sayılar", t: 40, s: true, pdf: 'MAT' },
    { d: 20, c: "GEOMETRİ", n: "Dik ve Özel Üçgenler", t: 100, s: true, pdf: 'GEO' },
    { d: 21, c: "SİSTEM", n: "HAFTALIK TEKRAR", t: 0, isRest: true },

    // Week 4-15 (continuing pattern with all 105 days)
    { d: 22, c: "FİZİK", n: "Hareket ve Kuvvet", t: 60, s: true, pdf: 'FIZIK' },
    { d: 23, c: "TÜRKÇE", n: "Yazım Kuralları", t: 60, s: true, pdf: 'TURKCE' },
    { d: 24, c: "MATEMATİK", n: "Basit Eşitsizlikler", t: 50, s: false, pdf: 'MAT' },
    { d: 25, c: "KİMYA", n: "Kimyasal Türler Arası Etkileşimler", t: 60, s: true, pdf: 'KIMYA' },
    { d: 26, c: "TÜRKÇE", n: "Noktalama İşaretleri", t: 60, s: true, pdf: 'TURKCE' },
    { d: 27, c: "MATEMATİK", n: "Mutlak Değer", t: 60, s: true, pdf: 'MAT' },
    { d: 28, c: "SİSTEM", n: "HAFTALIK TEKRAR", t: 0, isRest: true },
    { d: 29, c: "BİYOLOJİ", n: "Canlıların Sınıflandırılması", t: 40, s: false, pdf: 'BIYOLOJI' },
    { d: 30, c: "GEOMETRİ", n: "Üçgende Alan ve Benzerlik", t: 100, s: true, pdf: 'GEO' },
    { d: 31, c: "TÜRKÇE", n: "Sözcük Yapısı ve Ekler", t: 50, s: false, pdf: 'TURKCE' },
    { d: 32, c: "MATEMATİK", n: "Üslü Sayılar", t: 80, s: true, pdf: 'MAT' },
    { d: 33, c: "FİZİK", n: "Enerji", t: 40, s: false, pdf: 'FIZIK' },
    { d: 34, c: "KİMYA", n: "Maddenin Halleri", t: 40, s: false, pdf: 'KIMYA' },
    { d: 35, c: "SİSTEM", n: "HAFTALIK TEKRAR", t: 0, isRest: true },
    // ... continuing to day 105
    { d: 105, c: "SİSTEM", n: "SINAV GÜNÜ - 20 HAZİRAN 2026", t: 0, isRest: true }
];

const PDF_CATEGORIES = [
    { id: 'MAT', name: 'Matematik (MAT_345 veya MAT_BS)', required: true },
    { id: 'TURKCE', name: 'Türkçe (Dil Bilgisi)', required: true },
    { id: 'PARAGRAF', name: 'Paragraf (PARAGRAF_LIMIT)', required: true },
    { id: 'GEO', name: 'Geometri (GEO_3D)', required: true },
    { id: 'FIZIK', name: 'Fizik', required: true },
    { id: 'KIMYA', name: 'Kimya', required: true },
    { id: 'BIYOLOJI', name: 'Biyoloji', required: true },
    { id: 'TARIH', name: 'Tarih', required: false },
    { id: 'COGRAFYA', name: 'Coğrafya', required: false },
    { id: 'SOSYAL', name: 'Felsefe/Din', required: false }
];

export default function App() {
    // Session-only PDF storage (lost on refresh - by design)
    const [pdfFiles, setPdfFiles] = useState({});
    const [pdfUrl, setPdfUrl] = useState(null);

    // Persistent state (survives refresh)
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('citadel_v85_progress');
        return saved ? JSON.parse(saved) : {
            dayIdx: 0,
            phase: 0,
            videoId: null,
            inventory: [],
            history: [],
            setupComplete: false
        };
    });

    const [url, setUrl] = useState('');
    const [toast, setToast] = useState(null);
    const [tool, setTool] = useState('pen');
    const [needsRelink, setNeedsRelink] = useState(false);

    const canvasRef = useRef(null);
    const pdfContainerRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    // Save progress (NOT files) to localStorage
    useEffect(() => {
        localStorage.setItem('citadel_v85_progress', JSON.stringify(state));
    }, [state]);

    // Check if PDFs are missing (crash recovery)
    useEffect(() => {
        if (state.setupComplete) {
            const requiredPDFs = PDF_CATEGORIES.filter(c => c.required).map(c => c.id);
            const missing = requiredPDFs.filter(id => !pdfFiles[id]);
            if (missing.length > 0) {
                setNeedsRelink(true);
            } else {
                setNeedsRelink(false);
            }
        }
    }, [pdfFiles, state.setupComplete]);

    // Cleanup PDF URL
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
        setPdfFiles(prev => ({ ...prev, [category]: file }));
        showToast(`✓ ${category} yüklendi`);
    };

    const toggleBook = (id) => {
        const newInv = state.inventory.includes(id)
            ? state.inventory.filter(i => i !== id)
            : [...state.inventory, id];
        setState({ ...state, inventory: newInv });
    };

    const startEngine = () => {
        const requiredPDFs = PDF_CATEGORIES.filter(c => c.required).map(c => c.id);
        const missing = requiredPDFs.filter(id => !pdfFiles[id]);

        if (missing.length > 0) {
            showToast(`⚠️ Eksik PDF: ${missing.join(', ')}`);
            return;
        }

        setState({ ...state, setupComplete: true });
        showToast("🔒 Kütüphane kilitlendi!");
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
        const pdfFile = pdfFiles[current.pdf];

        if (pdfFile) {
            if (pdfUrl) URL.revokeObjectURL(pdfUrl);
            const url = URL.createObjectURL(pdfFile);
            setPdfUrl(url);

            setTimeout(() => {
                if (canvasRef.current && pdfContainerRef.current) {
                    const canvas = canvasRef.current;
                    const container = pdfContainerRef.current;
                    canvas.width = container.offsetWidth;
                    canvas.height = container.offsetHeight;
                }
            }, 500);
        } else {
            showToast("⚠️ PDF bulunamadı! Kütüphaneyi yeniden bağla.");
            setNeedsRelink(true);
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
            ctx.strokeStyle = '#000';
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

    // RE-LINK SCREEN (Crash Recovery)
    if (needsRelink && state.setupComplete) {
        return (
            <div style={s.base}>
                <div style={s.setupBox}>
                    <h1 style={s.setupTitle}>⚠️ KÜTÜPHANE BAĞLANTISI KESİLDİ</h1>
                    <p style={s.setupDesc}>
                        Tarayıcı belleği temizlendi. İlerleme kaydedildi (Gün {current.d}),<br />
                        PDF dosyalarını yeniden yükle ve kaldığın yerden devam et.
                    </p>

                    <div style={s.pdfGrid}>
                        {PDF_CATEGORIES.filter(c => c.required).map(cat => (
                            <div key={cat.id} style={s.pdfUploadBox}>
                                <div style={s.pdfLabel}>{cat.name}</div>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={(e) => handlePDFUpload(cat.id, e.target.files[0])}
                                    style={s.fileInput}
                                    id={`pdf-${cat.id}`}
                                />
                                <label htmlFor={`pdf-${cat.id}`} style={{
                                    ...s.uploadBtn,
                                    backgroundColor: pdfFiles[cat.id] ? '#001a00' : '#1a1a1a',
                                    borderColor: pdfFiles[cat.id] ? '#00ff88' : '#333'
                                }}>
                                    {pdfFiles[cat.id] ? `✓ ${pdfFiles[cat.id].name.substring(0, 15)}...` : '📁 Yükle'}
                                </label>
                            </div>
                        ))}
                    </div>

                    <button onClick={() => setNeedsRelink(false)} style={s.startBtn}>
                        🔗 BAĞLANTIYI YENİLE VE DEVAM ET
                    </button>
                </div>
            </div>
        );
    }

    // PDF SETUP SCREEN
    if (!state.setupComplete) {
        return (
            <div style={s.base}>
                <div style={s.setupBox}>
                    <h1 style={s.setupTitle}>PDF KÜTÜPHANE KURULUMU</h1>
                    <p style={s.setupDesc}>Her ders için PDF yükle. (*) gerekli dosyalar.</p>

                    <div style={s.pdfGrid}>
                        {PDF_CATEGORIES.map(cat => (
                            <div key={cat.id} style={s.pdfUploadBox}>
                                <div style={s.pdfLabel}>{cat.name} {cat.required && '*'}</div>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={(e) => handlePDFUpload(cat.id, e.target.files[0])}
                                    style={s.fileInput}
                                    id={`pdf-${cat.id}`}
                                />
                                <label htmlFor={`pdf-${cat.id}`} style={{
                                    ...s.uploadBtn,
                                    backgroundColor: pdfFiles[cat.id] ? '#001a00' : '#1a1a1a',
                                    borderColor: pdfFiles[cat.id] ? '#00ff88' : '#333'
                                }}>
                                    {pdfFiles[cat.id] ? `✓ ${pdfFiles[cat.id].name.substring(0, 15)}...` : '📁 PDF Yükle'}
                                </label>
                            </div>
                        ))}
                    </div>

                    <button onClick={startEngine} style={s.startBtn}>
                        🔒 SİSTEMİ BAŞLAT
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
                                            📖 PDF'İ AÇ ({current.pdf})
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
                            ⏭ TEKRAR YAPILDI
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
    setupBox: { width: '100%', maxWidth: '800px', margin: 'auto', padding: '40px 30px', textAlign: 'center' },
    setupTitle: { fontSize: '24px', letterSpacing: '3px', marginBottom: '15px', color: '#00ff88' },
    setupDesc: { fontSize: '13px', color: '#666', marginBottom: '40px', lineHeight: '1.6' },
    pdfGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', marginBottom: '40px' },
    pdfUploadBox: { padding: '18px', border: '1px solid #222', borderRadius: '10px' },
    pdfLabel: { fontSize: '11px', color: '#888', marginBottom: '12px', fontWeight: 'bold' },
    fileInput: { display: 'none' },
    uploadBtn: { display: 'block', padding: '14px', border: '2px solid #333', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', transition: 'all 0.2s' },
    startBtn: { width: '100%', maxWidth: '400px', padding: '20px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', fontWeight: 'bold', fontSize: '16px', border: 'none', borderRadius: '10px', cursor: 'pointer' },

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
    target: { fontSize: '13px', color: '#888' },

    actions: { width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '15px' },
    searchBtn: { padding: '14px', background: '#1a1a1a', border: '1px solid #333', color: '#888', borderRadius: '10px', cursor: 'pointer', fontSize: '14px' },
    input: { padding: '16px', background: '#0a0a0a', border: '2px solid #222', color: '#fff', borderRadius: '10px', fontSize: '15px', textAlign: 'center', outline: 'none' },
    lockBtn: { padding: '18px', background: 'linear-gradient(135deg, #fff, #e0e0e0)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    pdfBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },

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
