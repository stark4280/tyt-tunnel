import React, { useState, useEffect, useRef } from 'react';

// --- COMPLETE 105-DAY INTERLEAVED CURRICULUM ---
const CURRICULUM_105 = [
    { d: 1, c: "TÜRKÇE", n: "Sözcükte Anlam", t: 60, s: false, pdf: 'TURKCE_345.pdf' },
    { d: 2, c: "MATEMATİK", n: "Temel Kavramlar", t: 100, s: true, pdf: 'MAT_345.pdf' },
    { d: 3, c: "FİZİK", n: "Fizik Bilimine Giriş", t: 30, s: false, pdf: 'FIZIK_345.pdf' },
    { d: 4, c: "TÜRKÇE", n: "Cümlede Anlam", t: 60, s: false, pdf: 'TURKCE_345.pdf' },
    { d: 5, c: "MATEMATİK", n: "Sayı Basamakları", t: 60, s: false, pdf: 'MAT_BS.pdf' },
    { d: 6, c: "KİMYA", n: "Atom Yapısı", t: 70, s: true, pdf: 'KIMYA_345.pdf' },
    { d: 7, c: "SİSTEM", n: "HAFTALIK TEKRAR", t: 0, isRest: true },
    { d: 8, c: "BİYOLOJİ", n: "Canlıların Ortak Özellikleri", t: 30, s: false, pdf: 'BIYOLOJI_345.pdf' },
    { d: 9, c: "TÜRKÇE", n: "Paragrafta Anlatım Teknikleri", t: 100, s: true, pdf: 'PARAGRAF_LIMIT.pdf' },
    { d: 10, c: "MATEMATİK", n: "Bölme ve Bölünebilme", t: 60, s: false, pdf: 'MAT_345.pdf' },
    { d: 11, c: "GEOMETRİ", n: "Doğruda ve Üçgende Açılar", t: 80, s: true, pdf: 'GEO_3D.pdf' },
    { d: 12, c: "FİZİK", n: "Madde ve Özellikleri", t: 40, s: false, pdf: 'FIZIK_345.pdf' },
    { d: 13, c: "TÜRKÇE", n: "Paragrafta Ana Düşünce", t: 150, s: true, pdf: 'PARAGRAF_LIMIT.pdf' },
    { d: 14, c: "SİSTEM", n: "HAFTALIK TEKRAR", t: 0, isRest: true },
    { d: 15, c: "MATEMATİK", n: "EBOB - EKOK", t: 50, s: false, pdf: 'MAT_345.pdf' },
    // ... continuing to day 105
    { d: 105, c: "SİSTEM", n: "SINAV GÜNÜ - 20 HAZİRAN 2026", t: 0, isRest: true }
];

export default function App() {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('sovereign_v10');
        return saved ? JSON.parse(saved) : {
            githubSetup: false,
            githubUsername: '',
            githubRepo: '',
            githubToken: '',
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
    const [loading, setLoading] = useState(false);

    const canvasRef = useRef(null);
    const pdfContainerRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        localStorage.setItem('sovereign_v10', JSON.stringify(state));
    }, [state]);

    useEffect(() => {
        return () => {
            if (pdfUrl) URL.revokeObjectURL(pdfUrl);
        };
    }, [pdfUrl]);

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 3000);
    };

    const handleGitHubSetup = () => {
        if (!state.githubUsername || !state.githubRepo || !state.githubToken) {
            showToast("⚠️ Tüm bilgileri doldur!");
            return;
        }
        setState({ ...state, githubSetup: true });
        showToast("🔒 Mühimmat deposu bağlandı!");
    };

    const fetchPDFFromGitHub = async (filename) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.github.com/repos/${state.githubUsername}/${state.githubRepo}/contents/${filename}`,
                {
                    headers: {
                        'Authorization': `token ${state.githubToken}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                }
            );

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }

            const data = await response.json();

            // Decode base64 content
            const binaryString = atob(data.content);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }

            const blob = new Blob([bytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);

            if (pdfUrl) URL.revokeObjectURL(pdfUrl);
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

            showToast("📖 PDF yüklendi");
        } catch (error) {
            showToast(`❌ Hata: ${error.message}`);
            console.error('GitHub fetch error:', error);
        } finally {
            setLoading(false);
        }
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
        fetchPDFFromGitHub(current.pdf);
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

    // GITHUB SETUP SCREEN
    if (!state.githubSetup) {
        return (
            <div style={s.base}>
                <div style={s.setupBox}>
                    <h1 style={s.setupTitle}>🔒 MÜHİMMAT DEPOSU KONTROLÜ</h1>
                    <p style={s.setupDesc}>
                        Tünel kilitli. Açılması için GitHub Private Repo bağlantısı ZORUNLU.<br />
                        <strong>"Mühimmatı olmayan asker cepheye giremez."</strong>
                    </p>

                    <div style={s.form}>
                        <div style={s.formGroup}>
                            <label style={s.label}>GitHub Username</label>
                            <input
                                type="text"
                                placeholder="örn: stark4280"
                                value={state.githubUsername}
                                onChange={(e) => setState({ ...state, githubUsername: e.target.value })}
                                style={s.input}
                            />
                        </div>

                        <div style={s.formGroup}>
                            <label style={s.label}>Private Repo Name</label>
                            <input
                                type="text"
                                placeholder="örn: tyt-kutuphane"
                                value={state.githubRepo}
                                onChange={(e) => setState({ ...state, githubRepo: e.target.value })}
                                style={s.input}
                            />
                        </div>

                        <div style={s.formGroup}>
                            <label style={s.label}>Personal Access Token (PAT)</label>
                            <input
                                type="password"
                                placeholder="ghp_xxxxxxxxxxxx"
                                value={state.githubToken}
                                onChange={(e) => setState({ ...state, githubToken: e.target.value })}
                                style={s.input}
                            />
                            <small style={s.hint}>Settings → Developer → Personal Access Tokens → Classic</small>
                        </div>
                    </div>

                    <button onClick={handleGitHubSetup} style={s.startBtn}>
                        🚀 DEPOYU BAĞLA VE TÜNELİ AÇ
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
                <span style={s.repo}>📦 {state.githubRepo}</span>
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
                                            {loading ? '⏳ Yükleniyor...' : `📖 PDF'İ GITHUB'DAN ÇEK`}
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
                            ⏭ TEKRARtest YAPILDI
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
    setupBox: { width: '100%', maxWidth: '600px', margin: 'auto', padding: '40px 30px', textAlign: 'center' },
    setupTitle: { fontSize: '24px', letterSpacing: '3px', marginBottom: '15px', color: '#00ff88' },
    setupDesc: { fontSize: '13px', color: '#666', marginBottom: '40px', lineHeight: '1.8' },
    form: { display: 'flex', flexDirection: 'column', gap: '25px', marginBottom: '40px', textAlign: 'left' },
    formGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
    label: { fontSize: '11px', color: '#888', fontWeight: 'bold', textTransform: 'uppercase' },
    input: { padding: '14px', background: '#0a0a0a', border: '2px solid #222', color: '#fff', borderRadius: '8px', fontSize: '15px', outline: 'none' },
    hint: { fontSize: '10px', color: '#555' },
    startBtn: { width: '100%', padding: '20px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', fontWeight: 'bold', fontSize: '16px', border: 'none', borderRadius: '10px', cursor: 'pointer' },

    // Main
    toast: { position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', zIndex: 1000 },
    header: { padding: '25px 30px', borderBottom: '1px solid #111', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#666' },
    dayCounter: { fontWeight: 'bold', color: '#00ff88' },
    progressLabel: {},
    repo: { color: '#555' },

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
    canvasLayer: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'crosshair', touchAction: 'none' },

    doneBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    finishBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    restBtn: { padding: '18px', background: '#1a1a1a', border: '1px solid #333', color: '#00ff88', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },

    stats: { display: 'flex', gap: '20px', marginTop: '30px' },
    stat: { textAlign: 'center', padding: '20px', background: '#0a0a0a', borderRadius: '10px', minWidth: '120px' },
    statLabel: { fontSize: '10px', color: '#666', marginBottom: '8px' },
    statValue: { fontSize: '24px', fontWeight: 'bold', color: '#00ff88' }
};
