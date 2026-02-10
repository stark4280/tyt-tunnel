import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * MockExamForm - Deneme sınavı ekleme modal formu
 */
export default function MockExamForm({ onSave, onClose }) {
    const [source, setSource] = useState('');
    const [mat, setMat] = useState('');
    const [tur, setTur] = useState('');
    const [fen, setFen] = useState('');
    const [sos, setSos] = useState('');
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const matNum = parseFloat(mat) || 0;
        const turNum = parseFloat(tur) || 0;
        const fenNum = parseFloat(fen) || 0;
        const sosNum = parseFloat(sos) || 0;
        const total = matNum + turNum + fenNum + sosNum;

        if (!source.trim()) {
            alert('Deneme kaynağını girin!');
            return;
        }

        onSave({
            date: new Date().toISOString().split('T')[0],
            source: source.trim(),
            scores: { mat: matNum, tur: turNum, fen: fenNum, sos: sosNum },
            total,
            note: note.trim()
        });
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 
                   flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={e => e.stopPropagation()}
                    className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10
                     rounded-2xl p-6"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white">Deneme Sınavı Ekle</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-600 hover:text-gray-400 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Kaynak */}
                        <div>
                            <label className="text-gray-400 text-xs uppercase mb-1 block">
                                Deneme Kaynağı
                            </label>
                            <input
                                type="text"
                                value={source}
                                onChange={e => setSource(e.target.value)}
                                placeholder="örn: 3D Deneme 4"
                                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3
                           text-white focus:border-blue-500/50 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Net Puanları */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-gray-400 text-xs uppercase mb-1 block">Mat Net</label>
                                <input
                                    type="number"
                                    step="0.25"
                                    value={mat}
                                    onChange={e => setMat(e.target.value)}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2
                             text-center text-white font-mono
                             focus:border-blue-500/50 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-gray-400 text-xs uppercase mb-1 block">Türkçe Net</label>
                                <input
                                    type="number"
                                    step="0.25"
                                    value={tur}
                                    onChange={e => setTur(e.target.value)}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2
                             text-center text-white font-mono
                             focus:border-blue-500/50 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-gray-400 text-xs uppercase mb-1 block">Fen Net</label>
                                <input
                                    type="number"
                                    step="0.25"
                                    value={fen}
                                    onChange={e => setFen(e.target.value)}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2
                             text-center text-white font-mono
                             focus:border-blue-500/50 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-gray-400 text-xs uppercase mb-1 block">Sosyal Net</label>
                                <input
                                    type="number"
                                    step="0.25"
                                    value={sos}
                                    onChange={e => setSos(e.target.value)}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2
                             text-center text-white font-mono
                             focus:border-blue-500/50 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Not */}
                        <div>
                            <label className="text-gray-400 text-xs uppercase mb-1 block">
                                Not (opsiyonel)
                            </label>
                            <textarea
                                value={note}
                                onChange={e => setNote(e.target.value)}
                                placeholder="Denemede dikkat çekenler..."
                                rows={2}
                                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2
                           text-white text-sm resize-none
                           focus:border-blue-500/50 focus:outline-none"
                            />
                        </div>

                        {/* Butonlar */}
                        <div className="flex gap-3 pt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 py-3 bg-white/5 border border-white/10 rounded-lg
                           text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                İptal
                            </button>
                            <button
                                type="submit"
                                className="flex-1 py-3 bg-blue-500 text-black font-bold rounded-lg
                           hover:bg-blue-400 transition-colors"
                            >
                                Kaydet
                            </button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
