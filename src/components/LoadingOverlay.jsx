import { motion } from 'framer-motion';

/**
 * Loading Overlay - PDF indirme, migration vb. uzun işlemler için
 */
export default function LoadingOverlay({ message = 'Yükleniyor...', subMessage }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505]/95 backdrop-blur-xl z-50
                 flex flex-col items-center justify-center"
        >
            {/* Animasyonlu spinner */}
            <motion.div
                className="w-20 h-20 border-4 border-blue-500/20 border-t-blue-500
                   rounded-full mb-8"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            />

            {/* Ana mesaj */}
            <div className="text-blue-400 text-2xl font-bold font-mono mb-3 animate-pulse">
                {message}
            </div>

            {/* Alt mesaj */}
            {subMessage && (
                <div className="text-gray-500 text-sm max-w-md text-center">
                    {subMessage}
                </div>
            )}

            {/* İpucu */}
            <div className="text-gray-700 text-xs mt-8 max-w-xs text-center">
                💡 İlk yükleme biraz sürebilir. Sonraki açılışlar anında olacak.
            </div>
        </motion.div>
    );
}
