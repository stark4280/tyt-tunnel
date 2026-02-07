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

// --- 105-DAY INTERLEAVED CURRICULUM ---
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
    { d: 105, c: "SİSTEM", n: "SINAV GÜNÜ - 20 HAZİRAN 2026", t: 0, isRest: true }
];

export default function App() {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('citadel_v13_pdfjs');
        return saved ? JSON.parse(saved) : {
            dayIdx: 0,
            phase: 0,
            videoId: null,
            history: [],
            currentPage: 1
        };
    });

    const [url, setUrl] = useState('');
    const [toast, setToast] = useState(null);
    const [pdfDoc, setPdfDoc] = useState(null);
    const [loading, setLoading] = useState(false);
    const [numPages, setNumPages] = useState(0);

    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('citadel_v13_pdfjs', JSON.stringify(state));
    }, [state]);

    // Initialize PDF.js worker
    useEffect(() => {
        if (window.pdfjsLib) {
            window.pdfjsLib.GlobalWorkerOptions.workerSrc =
                'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        }
    }, []);

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
        console.log("🔍 PDF butonu tıklandı");

        const current = CURRICULUM_105[state.dayIdx];
        const fileId = DEFAULT_FILE_IDS[current.pdf];

        if (!fileId) {
            console.error("❌ File ID bulunamadı:", current.pdf);
            showToast("⚠️ PDF bulunamadı!");
            return;
        }

        if (!window.pdfjsLib) {
            console.error("❌ PDF.js yüklenmemiş!");
            showToast("⚠️ PDF.js kütüphanesi yüklenmedi, sayfa yenileniyor...");
            setTimeout(() => window.location.reload(), 2000);
            return;
        }

        console.log("✅ PDF.js hazır, File ID:", fileId);

        setLoading(true);
        showToast("📥 PDF yükleniyor...");

        try {
            const downloadUrl = `https://docs.google.com/uc?id=${fileId}&export=download`;
            console.log("📥 İndirme başladı:", downloadUrl);

            const response = await fetch(downloadUrl, { mode: 'cors' });
            console.log("📦 Response status:", response.status);

            if (!response.ok) throw new Error(`Download failed: ${response.status}`);

            const arrayBuffer = await response.arrayBuffer();
            console.log("✅ ArrayBuffer alındı, boyut:", arrayBuffer.byteLength);

            // Load PDF with PDF.js
            const loadingTask = window.pdfjsLib.getDocument({ data: arrayBuffer });
            const pdf = await loadingTask.promise;
            console.log("✅ PDF yüklendi, sayfa sayısı:", pdf.numPages);

            setPdfDoc(pdf);
            setNumPages(pdf.numPages);
            setState({ ...state, currentPage: 1 });

            showToast(`✅ PDF yüklendi (${pdf.numPages} sayfa)`);

            // Render first page
            await renderPage(pdf, 1);
        } catch (error) {
            console.error("❌ PDF yükleme hatası:", error);
            showToast(`❌ Hata: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };


    const renderPage = async (pdf, pageNum) => {
        const page = await pdf.getPage(pageNum);
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // High-DPI for tablets (2.0 scale)
        const viewport = page.getViewport({ scale: 2.0 });

        // Set canvas dimensions
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Fit to container width
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            canvas.style.width = `${containerWidth}px`;
            canvas.style.height = `${(viewport.height / viewport.width) * containerWidth}px`;
        }

        // Render PDF page
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };

        await page.render(renderContext).promise;
    };

    const nextPage = () => {
        if (state.currentPage < numPages) {
            const newPage = state.currentPage + 1;
            setState({ ...state, currentPage: newPage });
            renderPage(pdfDoc, newPage);
        }
    };

    const prevPage = () => {
        if (state.currentPage > 1) {
            const newPage = state.currentPage - 1;
            setState({ ...state, currentPage: newPage });
            renderPage(pdfDoc, newPage);
        }
    };

    const handleDayComplete = () => {
        setPdfDoc(null);

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
                currentPage: 1,
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

                            {/* PHASE 1: VIDEO PLAYER + PDF */}
                            {state.phase === 1 && (
                                <>
                                    <div style={s.videoContainer}>
                                        <iframe
                                            src={`https://www.youtube-nocookie.com/embed/${state.videoId}`}
                                            style={s.iframe}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="YouTube Video"
                                        />
                                    </div>

                                    {!pdfDoc ? (
                                        <button style={s.pdfBtn} onClick={openPDF} disabled={loading}>
                                            {loading ? "⏳ Yükleniyor..." : "📖 PDF'İ AÇ (PDF.js HD)"}
                                        </button>
                                    ) : (
                                        <>
                                            <div style={s.pdfViewerBox} ref={containerRef}>
                                                <canvas ref={canvasRef} style={s.canvas} />
                                            </div>

                                            <div style={s.pdfControls}>
                                                <button style={s.navBtn} onClick={prevPage} disabled={state.currentPage === 1}>
                                                    ◀ Önceki
                                                </button>
                                                <span style={s.pageInfo}>
                                                    Sayfa {state.currentPage} / {numPages}
                                                </span>
                                                <button style={s.navBtn} onClick={nextPage} disabled={state.currentPage === numPages}>
                                                    İleri ▶
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    <button style={s.doneBtn} onClick={() => setState({ ...state, phase: 2 })}>
                                        ✅ ÇALIŞMAYI BİTİRDİM
                                    </button>
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

    main: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px', maxWidth: '1000px', margin: '0 auto', width: '100%' },
    subjectBox: { textAlign: 'center', marginBottom: '30px' },
    badgeCrit: { display: 'inline-block', background: '#ffaa00', color: '#000', padding: '6px 14px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', marginBottom: '12px' },
    badgeNorm: { display: 'inline-block', background: '#1a1a1a', color: '#666', padding: '6px 14px', borderRadius: '6px', fontSize: '10px', marginBottom: '12px' },
    category: { fontSize: '13px', color: '#00ff88', marginBottom: '10px', letterSpacing: '2px' },
    topicTitle: { fontSize: '28px', fontWeight: 'bold', margin: '10px 0' },
    target: { fontSize: '13px', color: '#888' },

    actions: { width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' },
    searchBtn: { padding: '14px', background: '#1a1a1a', border: '1px solid #333', color: '#888', borderRadius: '10px', cursor: 'pointer', fontSize: '14px' },
    inputField: { padding: '16px', background: '#0a0a0a', border: '2px solid #222', color: '#fff', borderRadius: '10px', fontSize: '15px', textAlign: 'center', outline: 'none' },
    lockBtn: { padding: '18px', background: 'linear-gradient(135deg, #fff, #e0e0e0)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },

    videoContainer: { width: '100%', aspectRatio: '16/9', borderRadius: '10px', overflow: 'hidden', marginBottom: '15px', border: '2px solid #222' },
    iframe: { width: '100%', height: '100%', border: 'none' },

    pdfBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },

    pdfViewerBox: { width: '100%', borderRadius: '10px', overflow: 'auto', marginBottom: '15px', border: '2px solid #222', background: '#1a1a1a', maxHeight: '70vh' },
    canvas: { display: 'block', margin: '0 auto' },

    pdfControls: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', background: '#1a1a1a', borderRadius: '10px', marginBottom: '15px' },
    navBtn: { padding: '10px 20px', background: '#0a0a0a', border: '1px solid #333', color: '#00ff88', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' },
    pageInfo: { fontSize: '14px', color: '#888' },

    doneBtn: { padding: '18px', background: 'linear-gradient(135deg, #ffaa00, #ff8800)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    finishBtn: { padding: '18px', background: 'linear-gradient(135deg, #00ff88, #00cc66)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
    restBtn: { padding: '18px', background: '#1a1a1a', border: '1px solid #333', color: '#00ff88', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },

    stats: { display: 'flex', gap: '20px', marginTop: '30px' },
    stat: { textAlign: 'center', padding: '20px', background: '#0a0a0a', borderRadius: '10px', minWidth: '120px' },
    statLabel: { fontSize: '10px', color: '#666', marginBottom: '8px' },
    statValue: { fontSize: '24px', fontWeight: 'bold', color: '#00ff88' }
};
