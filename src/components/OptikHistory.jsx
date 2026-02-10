import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Trash2 } from 'lucide-react';
import { getAllOptiks, deleteOptik } from '../utils/storage';

/**
 * OptikHistory - Kaydedilmiş optik formlarını gösterir
 */
export default function OptikHistory() {
    const [optiks, setOptiks] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadOptiks = async () => {
        setLoading(true);
        const data = await getAllOptiks();
        // En yeni önce sırala
        data.sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt));
        setOptiks(data);
        setLoading(false);
    };

    useEffect(() => {
        loadOptiks();
    }, []);

    const handleDelete = async (day, topicName) => {
        if (confirm(`Gün ${day} - ${topicName} optik kaydını silmek istediğinize emin misiniz?`)) {
            await deleteOptik(day, topicName);
            loadOptiks(); // Listeyi yenile
        }
    };

    if (loading) {
        return (
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-gray-500 text-center">Optik kayıtları yükleniyor...</div>
            </div>
        );
    }

    if (optiks.length === 0) {
        return (
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-3">📝 Optik Geçmişi</h3>
                <div className="text-gray-500 text-sm text-center py-4">
                    Henüz kaydedilmiş optik formu yok
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">📝 Optik Geçmişi</h3>
            
            <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
                {optiks.map((optik, idx) => {
                    const percentage = Math.round((optik.answeredCount / optik.totalQuestions) * 100);
                    const isComplete = optik.answeredCount === optik.totalQuestions;
                    
                    return (
                        <motion.div
                            key={`${optik.day}-${optik.topicName}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-blue-400 font-mono text-xs font-semibold">
                                            GÜN {optik.day}
                                        </span>
                                        {isComplete ? (
                                            <CheckCircle size={14} className="text-green-400" />
                                        ) : (
                                            <XCircle size={14} className="text-yellow-400" />
                                        )}
                                    </div>
                                    <div className="text-white text-sm font-medium truncate mb-2">
                                        {optik.topicName}
                                    </div>
                                    
                                    {/* Progress Bar */}
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full transition-all ${
                                                    isComplete ? 'bg-green-500' : 'bg-yellow-500'
                                                }`}
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                        <span className="text-xs font-mono text-gray-400 w-16 text-right">
                                            {optik.answeredCount}/{optik.totalQuestions}
                                        </span>
                                    </div>
                                    
                                    <div className="text-xs text-gray-500 mt-1">
                                        {new Date(optik.savedAt).toLocaleDateString('tr-TR', {
                                            day: 'numeric',
                                            month: 'short',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                </div>
                                
                                <button
                                    onClick={() => handleDelete(optik.day, optik.topicName)}
                                    className="text-gray-600 hover:text-red-400 transition-colors p-1"
                                    title="Sil"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10 text-center">
                <div className="text-xs text-gray-500">
                    Toplam <span className="text-green-400 font-semibold">{optiks.length}</span> optik kaydı
                </div>
            </div>
        </div>
    );
}
