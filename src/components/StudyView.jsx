import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Minimize2, ChevronLeft, ChevronRight, Video } from 'lucide-react';
import PdfViewer from './PdfViewer';
import InkOverlay from './InkOverlay';
import VideoPlayer from './VideoPlayer';
import PomodoroTimer from './PomodoroTimer';
import OptikPanel from './OptikPanel';
import LoadingOverlay from './LoadingOverlay';

/**
 * StudyView - Ana çalışma ekranı
 * Google Drive Embed ile basitleştirildi - artık cache yok
 */
export default function StudyView({ videoId, curriculum, settings, onComplete, onBack }) {
    const [pdfData, setPdfData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Layout State: 'split' | 'video' | 'pdf'
    const [layoutMode, setLayoutMode] = useState('split');
    const [showSidebar, setShowSidebar] = useState(true);
    const [splitRatio, setSplitRatio] = useState(45); // Video paneli yüzdesi (varsayılan: 45%)

    // Video ID state
    const [currentVideoId, setCurrentVideoId] = useState(videoId);
    const [videoInput, setVideoInput] = useState('');
    const [showVideoInput, setShowVideoInput] = useState(!videoId);

    // Günün ilk PDF'ini yükle
    const currentPdfId = curriculum.topics[0];
    const fileId = settings.fileIds[currentPdfId];

    const handleVideoSubmit = () => {
        let trimmed = videoInput.trim();
        
        // URL parser
        if (trimmed.includes('v=')) {
            trimmed = trimmed.split('v=')[1].split('&')[0];
        } else if (trimmed.includes('youtu.be/')) {
            trimmed = trimmed.split('youtu.be/')[1].split('?')[0];
        }
        
        if (trimmed) {
            setCurrentVideoId(trimmed);
            setShowVideoInput(false);
        }
    };

    useEffect(() => {
        if (!fileId) {
            setError(`Bu konu için PDF File ID tanımlı değil: ${currentPdfId}`);
            setLoading(false);
            return;
        }

        // FileId'yi global olarak kaydet (PdfViewer için)
        window.currentPdfFileId = fileId;
        console.log('[StudyView] Setting PDF fileId:', fileId);

        // Artık PDF fetch yapmıyoruz - direkt Google Drive embed kullanıyoruz
        setPdfData(null);
        setLoading(false);
    }, [fileId, currentPdfId]);

    if (loading) return <LoadingOverlay message="PDF hazırlanıyor..." />;

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-[#050505] gap-6 p-8">
                <div className="text-red-500 text-6xl mb-4">⚠️</div>
                <div className="text-red-400 text-xl text-center max-w-md">{error}</div>
                <div className="flex gap-4">
                    <button onClick={() => window.location.reload()} className="px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 text-white">
                        Tekrar Dene
                    </button>
                    <button onClick={onComplete} className="px-6 py-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30">
                        Atla ve Devam Et
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col bg-[#050505] overflow-hidden">

            {/* Top Bar - Controls */}
            <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-black/50 backdrop-blur-sm z-50">
                <div className="flex items-center gap-3">
                    <button 
                        onClick={onBack} 
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 
                                 rounded-lg text-gray-400 hover:text-white transition-colors border border-white/10"
                        title="Dashboard'a Dön"
                    >
                        <ChevronLeft size={20} />
                        <span className="text-sm font-medium">Dashboard</span>
                    </button>
                    <div>
                        <span className="text-blue-400 font-bold font-mono text-lg">GÜN {curriculum.day}</span>
                        <span className="text-gray-500 text-sm ml-3 hidden md:inline">| {curriculum.title}</span>
                    </div>
                </div>

                <div className="flex bg-white/5 rounded-lg p-1 gap-1">
                    <button
                        onClick={() => setLayoutMode('video')}
                        className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                            layoutMode === 'video' 
                                ? 'bg-blue-500/20 text-blue-400' 
                                : 'text-gray-500 hover:text-white hover:bg-white/10'
                        }`}
                        title="Sadece Video"
                    >
                        🎥 Video
                    </button>
                    <button
                        onClick={() => setLayoutMode('split')}
                        className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                            layoutMode === 'split' 
                                ? 'bg-blue-500/20 text-blue-400' 
                                : 'text-gray-500 hover:text-white hover:bg-white/10'
                        }`}
                        title="İkili Görünüm"
                    >
                        🌗 İkili
                    </button>
                    <button
                        onClick={() => setLayoutMode('pdf')}
                        className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                            layoutMode === 'pdf' 
                                ? 'bg-blue-500/20 text-blue-400' 
                                : 'text-gray-500 hover:text-white hover:bg-white/10'
                        }`}
                        title="Sadece PDF"
                    >
                        📄 PDF
                    </button>
                    
                    {/* Split Ratio Ayarı */}
                    {layoutMode === 'split' && (
                        <div className="flex items-center gap-2 ml-2 pl-2 border-l border-white/10">
                            <span className="text-xs text-gray-500">Bölme:</span>
                            <input
                                type="range"
                                min="20"
                                max="80"
                                value={splitRatio}
                                onChange={(e) => setSplitRatio(Number(e.target.value))}
                                className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer
                                         [&::-webkit-slider-thumb]:appearance-none
                                         [&::-webkit-slider-thumb]:w-3
                                         [&::-webkit-slider-thumb]:h-3
                                         [&::-webkit-slider-thumb]:rounded-full
                                         [&::-webkit-slider-thumb]:bg-blue-400
                                         [&::-webkit-slider-thumb]:cursor-pointer"
                            />
                            <span className="text-xs text-blue-400 font-mono w-8">{splitRatio}%</span>
                        </div>
                    )}
                </div>

                <button
                    onClick={onComplete}
                    className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg
                             text-blue-400 hover:bg-blue-500/30 transition-colors font-medium text-sm"
                >
                    ✓ Tamamla
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden relative">

                {/* VIDEO PANEL */}
                <AnimatePresence mode="popLayout">
                    {(layoutMode === 'split' || layoutMode === 'video') && (
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ 
                                opacity: 1, 
                                x: 0, 
                                width: layoutMode === 'video' ? '100%' : layoutMode === 'split' ? `${splitRatio}%` : '0%'
                            }}
                            exit={{ opacity: 0, x: -50, width: '0%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="h-full border-r border-white/10 relative bg-[#0a0a0a] flex flex-col"
                        >
                            {/* Scrollable Content Container */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                {/* Video Container - Aspect Ratio Fix */}
                                <div className="w-full aspect-video bg-black sticky top-0 z-10 shadow-xl">
                                    {currentVideoId ? (
                                        <VideoPlayer videoId={currentVideoId} />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-900">
                                            <div className="text-center p-6">
                                                <Video size={48} className="text-gray-600 mx-auto mb-4" />
                                                <p className="text-gray-400 mb-4">Video eklenmedi</p>
                                                <div className="flex gap-2 justify-center">
                                                    <button
                                                        onClick={() => setShowVideoInput(true)}
                                                        className="px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-400 font-medium"
                                                    >
                                                        Video Ekle
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            const searchQuery = `${curriculum.title} TYT konu anlatımı`;
                                                            window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`, '_blank');
                                                        }}
                                                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 font-medium flex items-center gap-2"
                                                    >
                                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                                        </svg>
                                                        YouTube'da Ara
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Video Input Form */}
                                {showVideoInput && (
                                    <div className="p-4 bg-white/5 border-b border-white/10">
                                        <label className="text-gray-400 text-xs uppercase mb-2 block">
                                            YouTube Video ID veya URL
                                        </label>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={videoInput}
                                                onChange={e => setVideoInput(e.target.value)}
                                                placeholder="örn: dQw4w9WgXcQ"
                                                className="flex-1 bg-white/5 border border-white/20 rounded-lg px-3 py-2
                                                         text-white text-sm focus:border-blue-500/50 focus:outline-none"
                                                onKeyPress={e => e.key === 'Enter' && handleVideoSubmit()}
                                            />
                                            <button
                                                onClick={handleVideoSubmit}
                                                className="px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-400 text-sm font-medium"
                                            >
                                                Ekle
                                            </button>
                                            {currentVideoId && (
                                                <button
                                                    onClick={() => setShowVideoInput(false)}
                                                    className="px-3 py-2 bg-white/5 text-gray-400 rounded-lg hover:bg-white/10 text-sm"
                                                >
                                                    İptal
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Info & Controls */}
                                <div className="p-6 space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-2">{curriculum.title}</h2>
                                        <div className="flex items-center gap-3 text-sm">
                                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                Hedef: {curriculum.targetQuestions} Soru
                                            </span>
                                            {currentVideoId ? (
                                                <button
                                                    onClick={() => setShowVideoInput(!showVideoInput)}
                                                    className="text-gray-500 hover:text-blue-400 text-xs"
                                                >
                                                    Video Değiştir
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        const searchQuery = `${curriculum.title} TYT konu anlatımı`;
                                                        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`, '_blank');
                                                    }}
                                                    className="text-red-500 hover:text-red-400 text-xs flex items-center gap-1"
                                                >
                                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                                    </svg>
                                                    YouTube'da Ara
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description / Notes could go here */}
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm leading-relaxed">
                                        Bu ders için ayrılan süre boyunca odaklanın. PDF materyalini yandaki panelden takip edebilirsiniz.
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Fixed Action Bar */}
                            <div className="p-4 border-t border-white/10 bg-[#050505] backdrop-blur-lg z-20">
                                <div className="space-y-3">
                                    <div className="text-xs text-gray-500 text-center">
                                        Hedef: {curriculum.targetQuestions} soru
                                    </div>
                                    <button
                                        onClick={onComplete}
                                        className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 
                                                 text-black font-bold text-lg tracking-wide rounded-xl 
                                                 hover:from-blue-400 hover:to-purple-500 
                                                 transform active:scale-[0.98] transition-all shadow-lg shadow-green-900/20"
                                    >
                                        GÜNÜ TAMAMLA ✓
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* PDF PANEL */}
                <AnimatePresence mode="popLayout">
                    {(layoutMode === 'split' || layoutMode === 'pdf') && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ 
                                opacity: 1, 
                                x: 0, 
                                width: layoutMode === 'pdf' ? '100%' : layoutMode === 'split' ? `${100 - splitRatio}%` : '0%'
                            }}
                            exit={{ opacity: 0, x: 50, width: '0%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="h-full relative bg-[#111]"
                        >
                            <PdfViewer
                                pdfData={pdfData}
                                currentPage={currentPage}
                                onPageChange={setCurrentPage}
                                totalPages={totalPages}
                                setTotalPages={setTotalPages}
                                pdfId={currentPdfId}
                            />

                            {/* Mode Toggle Button Overlay (if full screen PDF) */}
                            {layoutMode === 'pdf' && (
                                <button
                                    onClick={() => setLayoutMode('split')}
                                    className="absolute top-4 left-4 z-50 p-2 bg-black/50 text-white rounded-full backdrop-blur-md hover:bg-blue-500 hover:text-black transition-colors"
                                >
                                    <Minimize2 size={20} />
                                </button>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

            {/* Floating Pomodoro */}
            <PomodoroTimer
                workMinutes={settings.pomodoroWork}
                breakMinutes={settings.pomodoroBreak}
            />

            {/* Floating Optik Panel */}
            <OptikPanel 
                day={curriculum.day}
                topicName={curriculum.title}
            />
        </div>
    );
}
