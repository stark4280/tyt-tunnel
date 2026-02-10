import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * VideoSetup - İlk kurulum ekranı (phase: 0)
 * Kullanıcıdan YouTube videosu ID'si ister
 */
export default function VideoSetup({ onSubmit }) {
    const [videoId, setVideoId] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Boş video ID ile başlat - kullanıcı split screen'de girecek
        onSubmit('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-2xl relative z-10"
            >
                {/* Logo Section */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h1 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight">
                            THE CITADEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">V2</span>
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-2">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-600"></div>
                            <span className="font-mono">105 GÜNLÜK SİSTEMATİK PROGRAM</span>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-600"></div>
                        </div>
                        <p className="text-gray-500 text-base max-w-md mx-auto">
                            Strateji • Takip • Analiz • Başarı
                        </p>
                    </motion.div>
                </div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10
                        rounded-3xl p-8 md:p-10 shadow-2xl"
                >
                    <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-white mb-2">
                                Hazır mısın?
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                105 günlük sistematik TYT hazırlık programına başlamak için butona tıkla. 
                                Video linklerini çalışma ekranında ekleyebilirsin.
                            </p>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                            <div className="text-blue-400 text-2xl mb-2">📚</div>
                            <div className="text-white font-semibold text-sm mb-1">Günlük Takip</div>
                            <div className="text-gray-500 text-xs">Her gün için özel konu planı</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                            <div className="text-purple-400 text-2xl mb-2">📊</div>
                            <div className="text-white font-semibold text-sm mb-1">Detaylı Analiz</div>
                            <div className="text-gray-500 text-xs">Net ve performans takibi</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                            <div className="text-green-400 text-2xl mb-2">🎯</div>
                            <div className="text-white font-semibold text-sm mb-1">Hedef Odaklı</div>
                            <div className="text-gray-500 text-xs">Sınava özel strateji</div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-500/10 border border-red-500/30 rounded-xl p-4
                           text-red-400 text-sm flex items-center gap-3"
                            >
                                <span className="text-xl">⚠️</span>
                                <span>{error}</span>
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-5 bg-gradient-to-r from-blue-500 to-purple-600 
                                     text-white font-black text-lg rounded-xl 
                                     hover:from-blue-400 hover:to-purple-500 
                                     transition-all duration-300
                                     active:scale-[0.98] shadow-lg shadow-blue-500/30
                                     hover:shadow-xl hover:shadow-blue-500/40
                                     relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                PROGRAMA BAŞLA
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    </form>

                    {/* Footer Info */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>Sistem Aktif</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>Verileriniz Güvende</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center text-gray-600 text-xs mt-6"
                >
                    TYT 2026 • Hedefine ulaşmanın en sistematik yolu
                </motion.p>
            </motion.div>
        </div>
    );
}
