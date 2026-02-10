import { motion } from 'framer-motion';

/**
 * MetricCard - Tek metrik gösterimi
 */
export default function MetricCard({ label, value, sub, icon }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-md border border-white/10
                 rounded-xl p-5 hover:bg-white/10 transition-colors"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="text-gray-500 text-xs uppercase tracking-wider">
                    {label}
                </div>
                {icon && <div className="text-gray-600 text-xl">{icon}</div>}
            </div>
            <div className="text-3xl font-bold text-blue-400 font-mono mb-1">
                {value}
            </div>
            {sub && (
                <div className="text-gray-600 text-xs">{sub}</div>
            )}
        </motion.div>
    );
}
