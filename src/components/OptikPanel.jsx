import { useState, useEffect } from 'react';
import { GripVertical, Trash2, X } from 'lucide-react';
import { saveOptik, loadOptik } from '../utils/storage';
import DraggablePanel from './DraggablePanel';

/**
 * OptikPanel - Soru işaretleme paneli (optik form gibi)
 */
export default function OptikPanel({ day, topicName }) {
    const [questions, setQuestions] = useState(
        Array.from({ length: 40 }, (_, i) => ({
            id: i + 1,
            answer: null // null, 'A', 'B', 'C', 'D', 'E'
        }))
    );
    const [minimized, setMinimized] = useState(false);
    const [visible, setVisible] = useState(true);

    // Sayfa yüklendiğinde kaydedilmiş cevapları yükle
    useEffect(() => {
        if (day && topicName) {
            loadOptik(day, topicName).then(savedAnswers => {
                if (savedAnswers) {
                    setQuestions(savedAnswers);
                }
            });
        }
    }, [day, topicName]);

    // Cevap değiştiğinde otomatik kaydet
    useEffect(() => {
        if (day && topicName) {
            const timer = setTimeout(() => {
                saveOptik(day, topicName, questions);
            }, 500); // 500ms debounce

            return () => clearTimeout(timer);
        }
    }, [questions, day, topicName]);

    const options = ['A', 'B', 'C', 'D', 'E'];

    const handleAnswer = (questionId, option) => {
        setQuestions(prev =>
            prev.map(q =>
                q.id === questionId
                    ? { ...q, answer: q.answer === option ? null : option }
                    : q
            )
        );
    };

    const clearAll = () => {
        if (confirm('Tüm işaretlemeleri temizlemek istediğinize emin misiniz?')) {
            const emptyQuestions = questions.map(q => ({ ...q, answer: null }));
            setQuestions(emptyQuestions);
            // Temizlenmiş hali de kaydet
            if (day && topicName) {
                saveOptik(day, topicName, emptyQuestions);
            }
        }
    };

    const answeredCount = questions.filter(q => q.answer !== null).length;

    if (!visible) {
        return (
            <button
                onClick={() => setVisible(true)}
                className="fixed top-20 right-4 z-45 bg-black/90 backdrop-blur-md
                   border border-white/10 rounded-full px-4 py-2
                   text-green-400 font-mono text-sm hover:bg-black/95 transition-colors
                   flex items-center gap-2 shadow-xl"
                title="Optik Panelini Aç"
            >
                📝 Optik
            </button>
        );
    }

    if (minimized) {
        return (
            <DraggablePanel
                initialX={window.innerWidth - 200}
                initialY={window.innerHeight - 100}
                zIndex={45}
            >
                <button
                    onClick={() => setMinimized(false)}
                    className="bg-black/90 backdrop-blur-md border border-white/10 rounded-full px-4 py-2
                       text-green-400 font-mono text-sm hover:bg-black/95 transition-colors
                       flex items-center gap-2 shadow-xl"
                >
                    📝 {topicName ? `${topicName.substring(0, 15)}...` : 'Optik'} ({answeredCount}/40)
                </button>
            </DraggablePanel>
        );
    }

    return (
        <DraggablePanel
            initialX={window.innerWidth - 340}
            initialY={window.innerHeight - 650}
            zIndex={45}
        >
            <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl w-80
                   shadow-2xl shadow-green-500/10 flex flex-col max-h-[80vh]"
            >
            {/* Header - Drag Handle */}
            <div className="drag-handle flex items-center justify-between p-3 border-b border-white/10 cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-2 pointer-events-none">
                    <GripVertical size={16} className="text-gray-600" />
                    <div className="text-sm font-semibold text-green-400">
                        📝 {topicName || 'Optik Form'}
                    </div>
                </div>
                <div className="flex items-center gap-2 pointer-events-auto">
                    <div className="text-xs text-gray-500 font-mono">
                        {answeredCount}/40
                    </div>
                    <button
                        onClick={() => setMinimized(true)}
                        className="text-gray-600 hover:text-gray-400 transition-colors p-1 hover:bg-white/5 rounded"
                        title="Küçült"
                    >
                        <X size={14} />
                    </button>
                    <button
                        onClick={() => setVisible(false)}
                        className="text-gray-600 hover:text-red-400 transition-colors p-1 hover:bg-white/5 rounded"
                        title="Kapat"
                    >
                        <X size={14} />
                    </button>
                </div>
            </div>

            {/* Questions Grid - Scrollable */}
            <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
                <div className="space-y-2">
                    {questions.map((q) => (
                        <div
                            key={q.id}
                            className="flex items-center gap-2 bg-white/5 rounded-lg p-2 border border-white/5"
                        >
                            {/* Question Number */}
                            <div className="text-xs font-mono text-gray-500 w-6 text-center">
                                {q.id}
                            </div>

                            {/* Options */}
                            <div className="flex gap-1 flex-1">
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleAnswer(q.id, option)}
                                        className={`flex-1 py-1.5 rounded text-xs font-semibold transition-all ${
                                            q.answer === option
                                                ? 'bg-green-500 text-black shadow-lg'
                                                : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-gray-300'
                                        }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                            {/* Clear Button */}
                            {q.answer && (
                                <button
                                    onClick={() => handleAnswer(q.id, q.answer)}
                                    className="text-gray-600 hover:text-red-400 transition-colors"
                                    title="Temizle"
                                >
                                    <X size={14} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                    <span className="text-green-400 font-semibold">{answeredCount}</span> soru işaretlendi
                </div>
                <button
                    onClick={clearAll}
                    className="flex items-center gap-1 px-3 py-1.5 bg-red-500/10 border border-red-500/30
                             rounded-lg text-red-400 text-xs hover:bg-red-500/20 transition-colors"
                >
                    <Trash2 size={12} />
                    Temizle
                </button>
            </div>
        </div>
        </DraggablePanel>
    );
}
