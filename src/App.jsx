import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Pen, Eraser, Trash2, Check, Lock, Search,
    FileText, Layout, Zap, ChevronRight, Activity,
    Maximize2, Minimize2, ArrowLeft, ArrowRight
} from 'lucide-react';

// --- DATA ---
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
    // --- STATE ---
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('citadel_v13_pdfjs');
        return saved ? JSON.parse(saved) : {
            dayIdx: 0,
            phase: 0, // 0: Video, 1: PDF, 2: Complete
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
    const [focusMode, setFocusMode] = useState(false);

    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    // --- EFFECTS ---
    useEffect(() => {
        localStorage.setItem('citadel_v13_pdfjs', JSON.stringify(state));
    }, [state]);

    useEffect(() => {
        if (window.pdfjsLib) {
            window.pdfjsLib.GlobalWorkerOptions.workerSrc =
                'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        }
    }, []);

    // --- HELPERS ---
    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 3000);
    };

    const extractVideoID = (url) => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=))([\w\-]{11})/);
        return match ? match[1] : null;
    };

    // --- HANDLERS ---
    const handleVideoLock = () => {
        const id = extractVideoID(url);
        if (!id) {
            showToast("❌ Geçersiz link!");
            return;
        }
        setState({ ...state, videoId: id, phase: 1 });
        setUrl('');
        setFocusMode(true);
        showToast("🔒 Video kilitlendi");
    };

    const openPDF = async () => {
        const current = CURRICULUM_105[state.dayIdx];
        const fileId = DEFAULT_FILE_IDS[current.pdf];

        if (!fileId) {
            showToast("⚠️ PDF bulunamadı!");
            return;
        }

        if (!window.pdfjsLib) {
            showToast("⚠️ PDF.js bekleniyor...");
            setTimeout(() => window.location.reload(), 2000);
            return;
        }

        setLoading(true);
        showToast("📥 PDF İndiriliyor...");

        try {
            const driveUrl = `https://drive.google.com/uc?id=${fileId}&export=download`;
            const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(driveUrl)}`;

            const response = await fetch(proxyUrl);
            if (!response.ok) throw new Error('Proxy fetch failed');

            const arrayBuffer = await response.arrayBuffer();
            const loadingTask = window.pdfjsLib.getDocument({ data: arrayBuffer });
            const pdf = await loadingTask.promise;

            setPdfDoc(pdf);
            setNumPages(pdf.numPages);
            setState({ ...state, currentPage: 1 });
            setFocusMode(true);

            showToast(`✅ PDF Hazır (${pdf.numPages} Sayfa)`);
            setTimeout(() => renderPage(pdf, 1), 100);

        } catch (error) {
            console.error("Proxy error:", error);
            showToast("⚠️ Proxy hatası! Yeni sekmede açılıyor...");
            window.open(`https://drive.google.com/file/d/${fileId}/view`, '_blank');
        } finally {
            setLoading(false);
        }
    };

    const renderPage = async (pdf, pageNum) => {
        if (!pdf || !canvasRef.current) return;

        const page = await pdf.getPage(pageNum);
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const viewport = page.getViewport({ scale: 2.0 });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            canvas.style.width = `${containerWidth}px`;
            canvas.style.height = `${(viewport.height / viewport.width) * containerWidth}px`;
        }

        await page.render({
            canvasContext: context,
            viewport: viewport
        }).promise;
    };

    const changePage = (delta) => {
        const newPage = state.currentPage + delta;
        if (newPage >= 1 && newPage <= numPages) {
            setState({ ...state, currentPage: newPage });
            renderPage(pdfDoc, newPage);
        }
    };

    const handleDayComplete = () => {
        setPdfDoc(null);
        setFocusMode(false);

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

    // --- RENDER ---
    return (
        <div className="h-screen w-full bg-obsidian text-white flex overflow-hidden font-sans selection:bg-accent selection:text-black">

            {/* TOAST */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-surface border border-accent/30 text-accent px-6 py-3 rounded-full shadow-[0_0_20px_rgba(0,255,0,0.2)] z-50 backdrop-blur-md flex items-center gap-3 font-medium"
                    >
                        <Activity size={18} />
                        {toast}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* SIDEBAR (ROADMAP) */}
            <motion.div
                className="w-72 bg-surface/50 border-r border-border flex flex-col backdrop-blur-sm z-20"
                initial={{ x: -300 }}
                animate={{ x: focusMode ? -300 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="p-6 border-b border-border">
                    <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                        <Layout className="text-accent" /> THE CITADEL
                    </h2>
                    <p className="text-xs text-secondary mt-1 tracking-widest">TYT 2026 ROADMAP</p>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                    {CURRICULUM_105.map((item, idx) => {
                        const isPast = idx < state.dayIdx;
                        const isCurrent = idx === state.dayIdx;

                        return (
                            <div
                                key={idx}
                                className={`p-3 rounded-lg border transition-all duration-300 ${isCurrent
                                        ? 'bg-accent/10 border-accent/50 shadow-[0_0_15px_rgba(0,255,0,0.1)]'
                                        : isPast
                                            ? 'bg-surface border-border opacity-40'
                                            : 'bg-transparent border-transparent opacity-30 hover:opacity-50'
                                    }`}
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <span className={`text-[10px] font-bold ${isCurrent ? 'text-accent' : 'text-secondary'}`}>
                                        GÜN {item.d}
                                    </span>
                                    {isPast && <Check size={12} className="text-accent" />}
                                </div>
                                <h3 className={`text-sm font-medium leading-tight ${isCurrent ? 'text-white' : 'text-gray-400'}`}>
                                    {item.n}
                                </h3>
                                <div className="text-[10px] text-secondary mt-1">{item.c}</div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            {/* MAIN CONTENT (FOCUS ZONE) */}
            <div className="flex-1 flex flex-col relative h-full">

                {/* HEADER */}
                <header className="h-16 border-b border-border bg-surface/30 backdrop-blur flex items-center px-8 justify-between z-10">
                    <div className="flex items-center gap-4">
                        <motion.button
                            onClick={() => setFocusMode(!focusMode)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-full hover:bg-white/5 text-secondary hover:text-white transition-colors"
                        >
                            {focusMode ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
                        </motion.button>
                        <div>
                            <h1 className="text-lg font-bold tracking-tight">
                                {current.isRest ? "ANALİZ GÜNÜ" : `${current.c} • ${current.n}`}
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-secondary uppercase tracking-widest">İlerleme</span>
                            <span className="text-accent font-mono font-bold">{progress}%</span>
                        </div>
                        <div className="w-32 h-1 bg-surface rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-accent shadow-[0_0_10px_#00ff00]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                    </div>
                </header>

                {/* CONTENT STAGE */}
                <div className="flex-1 overflow-hidden relative p-0 flex flex-col items-center justify-center bg-obsidian">

                    <AnimatePresence mode="wait">
                        {!current.isRest ? (
                            <motion.div
                                key="study-content"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full max-w-6xl p-6 flex flex-col gap-6"
                            >
                                {/* PHASE 0: PREPARATION */}
                                {state.phase === 0 && (
                                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
                                        <div className="space-y-4">
                                            <motion.div
                                                className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto border border-accent/20"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            >
                                                <Zap size={40} className="text-accent" />
                                            </motion.div>
                                            <h2 className="text-4xl font-bold tracking-tighter">MİSYON HAZIRLIĞI</h2>
                                            <p className="text-secondary max-w-md mx-auto">
                                                Bugünün hedefi: {current.t} Soru çözümü ve konu anlatımı.
                                                Başlamak için video kilidini aktif et.
                                            </p>
                                        </div>

                                        <div className="w-full max-w-md space-y-4">
                                            <button
                                                onClick={() => window.open(`https://www.youtube.com/results?search_query=TYT+${current.c}+${current.n}+konu+anlatimi`, '_blank')}
                                                className="w-full py-4 rounded-lg border border-border bg-surface hover:bg-white/5 hover:border-white/20 text-secondary hover:text-white transition-all flex items-center justify-center gap-3 group"
                                            >
                                                <Search size={18} className="group-hover:scale-110 transition-transform" />
                                                Video Araştır
                                            </button>

                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    placeholder="YouTube linkini yapıştır..."
                                                    value={url}
                                                    onChange={(e) => setUrl(e.target.value)}
                                                    className="w-full py-4 px-6 bg-surface border border-border rounded-lg focus:outline-none focus:border-accent/50 text-white placeholder-secondary/50 transition-all font-mono text-sm text-center"
                                                />
                                                <div className="absolute inset-0 rounded-lg bg-accent/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={handleVideoLock}
                                                className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                            >
                                                <Lock size={18} />
                                                SİSTEMİ KİLİTLE
                                            </motion.button>
                                        </div>
                                    </div>
                                )}

                                {/* PHASE 1 & 2: ACTION */}
                                {state.phase >= 1 && (
                                    <div className="flex-1 flex flex-col gap-6 h-full">

                                        {/* VIDEO SECTION */}
                                        {state.videoId && (
                                            <motion.div
                                                layoutId="video-container"
                                                className={`w-full bg-black rounded-2xl overflow-hidden border border-border shadow-2xl shrink-0 transition-all duration-500 ${pdfDoc ? 'h-48 opacity-80 hover:opacity-100' : 'flex-1'
                                                    }`}
                                            >
                                                <iframe
                                                    src={`https://www.youtube-nocookie.com/embed/${state.videoId}`}
                                                    className="w-full h-full object-cover"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Mission Briefing"
                                                />
                                            </motion.div>
                                        )}

                                        {/* PDF SECTION */}
                                        <div className="flex-1 relative bg-surface/30 rounded-2xl border border-border flex flex-col overflow-hidden backdrop-blur-sm">
                                            {!pdfDoc ? (
                                                <div className="flex-1 flex flex-col items-center justify-center gap-6">
                                                    <FileText size={64} className="text-surface drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] opacity-20" />
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={openPDF}
                                                        disabled={loading}
                                                        className="px-8 py-4 bg-accent text-black font-bold rounded-xl shadow-[0_0_30px_rgba(0,255,0,0.3)] hover:shadow-[0_0_50px_rgba(0,255,0,0.5)] transition-all flex items-center gap-3"
                                                    >
                                                        {loading ? (
                                                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                                        ) : (
                                                            <Pen size={20} />
                                                        )}
                                                        {loading ? "VERİ ÇEKİLİYOR..." : "DİJİTAL KİTAPLIĞI AÇ"}
                                                    </motion.button>
                                                </div>
                                            ) : (
                                                <>
                                                    {/* Floating Toolbar */}
                                                    <motion.div
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-surface/90 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-2xl shadow-2xl z-30 flex items-center gap-4"
                                                    >
                                                        <button
                                                            onClick={() => changePage(-1)}
                                                            disabled={state.currentPage === 1}
                                                            className="p-3 rounded-xl hover:bg-white/10 text-white disabled:opacity-30 transition-colors"
                                                        >
                                                            <ArrowLeft size={20} />
                                                        </button>
                                                        <span className="font-mono text-sm tracking-wider text-accent min-w-[80px] text-center">
                                                            {state.currentPage} / {numPages}
                                                        </span>
                                                        <button
                                                            onClick={() => changePage(1)}
                                                            disabled={state.currentPage === numPages}
                                                            className="p-3 rounded-xl hover:bg-white/10 text-white disabled:opacity-30 transition-colors"
                                                        >
                                                            <ArrowRight size={20} />
                                                        </button>

                                                        <div className="w-px h-6 bg-white/10 mx-2" />

                                                        <button
                                                            onClick={() => setState({ ...state, phase: 2 })}
                                                            className="px-4 py-2 bg-accent/20 text-accent hover:bg-accent hover:text-black rounded-lg text-xs font-bold transition-all"
                                                        >
                                                            TAMAMLA
                                                        </button>
                                                    </motion.div>

                                                    {/* Viewer */}
                                                    <div className="flex-1 overflow-auto custom-scrollbar p-6 flex justify-center bg-zinc-900/50" ref={containerRef}>
                                                        <canvas ref={canvasRef} className="shadow-2xl rounded-lg max-w-full" />
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        {state.phase === 2 && (
                                            <motion.button
                                                initial={{ scale: 0.9, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                whileHover={{ scale: 1.02 }}
                                                onClick={handleDayComplete}
                                                className="w-full py-6 bg-accent text-black text-xl font-black tracking-widest uppercase rounded-2xl shadow-[0_0_60px_rgba(0,255,0,0.4)] hover:shadow-[0_0_80px_rgba(0,255,0,0.6)] transition-all flex items-center justify-center gap-4"
                                            >
                                                <Check size={28} strokeWidth={3} />
                                                GÖREVİ TAMAMLA
                                            </motion.button>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="rest-day"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-8"
                            >
                                <div className="inline-block p-6 rounded-full bg-white/5 border border-white/10">
                                    <Activity size={48} className="text-accent" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold mb-2">SİSTEM ANALİZİ</h2>
                                    <p className="text-secondary">Verilerin işlendiği ve zihnin toparlandığı gün.</p>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    onClick={handleDayComplete}
                                    className="px-10 py-4 bg-surface border border-accent/30 text-accent rounded-xl font-bold hover:bg-accent hover:text-black transition-colors"
                                >
                                    ANALİZ TAMAMLANDI
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

const s = {}; // Style object deprecated in favor of Tailwind classes
