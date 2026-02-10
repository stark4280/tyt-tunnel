import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Minimize2, Maximize2 } from 'lucide-react';
import { usePomodoro, requestNotificationPermission } from '../hooks/usePomodoro';

/**
 * Floating Pomodoro Timer
 */
export default function PomodoroTimer({ workMinutes = 25, breakMinutes = 5 }) {
    const timer = usePomodoro(workMinutes, breakMinutes);
    const [minimized, setMinimized] = useState(true); // Varsayılan: küçültülmüş

    // İlk mount'ta bildirim izni iste
    useEffect(() => {
        requestNotificationPermission();
    }, []);

    if (minimized) {
        return (
            <motion.button
                onClick={() => setMinimized(false)}
                drag
                dragMomentum={false}
                dragElastic={0}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed top-4 left-4 z-40 bg-black/90 backdrop-blur-md
                   border border-white/10 rounded-full px-4 py-2
                   text-blue-400 font-mono text-sm hover:bg-black/95 transition-colors
                   flex items-center gap-2 cursor-move shadow-xl"
                whileHover={{ scale: 1.05 }}
                title="Sürükle veya tıkla"
            >
                ⏱ {timer.isRunning ? timer.formattedTime : 'Pomodoro'}
            </motion.button>
        );
    }

    return (
        <AnimatePresence>
            <motion.div
                drag
                dragMomentum={false}
                dragElastic={0}
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed top-4 left-4 z-40 bg-black/95 backdrop-blur-xl
                   border border-white/10 rounded-2xl p-4 w-64
                   shadow-2xl shadow-blue-500/10 cursor-move"
            >
                {/* Header - Drag Handle */}
                <div className="flex items-center justify-between mb-3 cursor-move">
                    <div className="flex items-center gap-2">
                        <div className="text-gray-500">⏱</div>
                        <div className={`text-xs uppercase tracking-wider font-semibold ${timer.mode === 'work' ? 'text-blue-400' : 'text-purple-400'
                            }`}>
                            {timer.mode === 'work' ? 'Çalışma' : 'Mola'}
                        </div>
                    </div>
                    <button
                        onClick={() => setMinimized(true)}
                        className="text-gray-600 hover:text-gray-400 transition-colors p-1 hover:bg-white/5 rounded"
                        title="Küçült"
                    >
                        <Minimize2 size={14} />
                    </button>
                </div>

                {/* Timer Display */}
                <div className={`text-center text-4xl font-mono font-bold mb-4 ${timer.mode === 'work' ? 'text-blue-400' : 'text-purple-400'
                    }`}>
                    {timer.formattedTime}
                </div>

                {/* Completed Pomodoros */}
                <div className="flex justify-center gap-1 mb-4">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${i < timer.completedPomodoros ? 'bg-blue-400' : 'bg-white/10'
                                }`}
                        />
                    ))}
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-2 mb-4">
                    {!timer.isRunning ? (
                        <button
                            onClick={timer.start}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 
                         border border-blue-500/50 rounded-lg text-blue-400 text-xs font-medium
                         hover:bg-blue-500/30 transition-colors"
                        >
                            <Play size={14} />
                            Başlat
                        </button>
                    ) : (
                        <button
                            onClick={timer.pause}
                            className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 
                         border border-yellow-500/50 rounded-lg text-yellow-400 text-xs font-medium
                         hover:bg-yellow-500/30 transition-colors"
                        >
                            <Pause size={14} />
                            Duraklat
                        </button>
                    )}
                    <button
                        onClick={timer.reset}
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 border 
                       border-white/10 rounded-lg text-gray-500 text-xs 
                       hover:text-gray-300 hover:bg-white/10 transition-colors"
                        title="Sıfırla"
                    >
                        <RotateCcw size={14} />
                    </button>
                </div>

                {/* Stats */}
                <div className="pt-3 border-t border-white/10 space-y-1.5">
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Tamamlanan</span>
                        <span className="font-mono text-blue-400">{timer.completedPomodoros}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Toplam süre</span>
                        <span className="font-mono text-blue-400">{timer.totalWorkMinutes} dk</span>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
