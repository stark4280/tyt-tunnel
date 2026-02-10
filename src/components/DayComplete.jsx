import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { calculateNet, validateStats } from '../utils/netCalculator';
import { WEAK_TAG_OPTIONS, WEAK_TAG_OPTIONS_BY_SUBJECT } from '../data/constants';

/**
 * DayComplete - Zorunlu istatistik formu
 */
export default function DayComplete({ curriculum, dayNumber, onSubmit }) {
    const [solved, setSolved] = useState('');
    const [correct, setCorrect] = useState('');
    const [wrong, setWrong] = useState('');
    const [blank, setBlank] = useState('');
    const [studyMinutes, setStudyMinutes] = useState('');
    const [weakTags, setWeakTags] = useState([]);
    const [note, setNote] = useState('');
    const [validationError, setValidationError] = useState(null);

    const solvedNum = parseInt(solved) || 0;
    const correctNum = parseInt(correct) || 0;
    const wrongNum = parseInt(wrong) || 0;
    const blankNum = parseInt(blank) || 0;
    const net = calculateNet(correctNum, wrongNum);

    // Ders türünü belirle (curriculum.title'dan)
    const subjectType = useMemo(() => {
        const title = curriculum.title.toLowerCase();
        if (title.includes('matematik')) return 'matematik';
        if (title.includes('geometri')) return 'geometri';
        if (title.includes('türkçe') || title.includes('paragraf')) return 'turkce';
        if (title.includes('fizik')) return 'fizik';
        if (title.includes('kimya')) return 'kimya';
        if (title.includes('biyoloji')) return 'biyoloji';
        if (title.includes('tarih')) return 'tarih';
        if (title.includes('coğrafya')) return 'cografya';
        if (title.includes('felsefe')) return 'felsefe';
        if (title.includes('din')) return 'din';
        return null;
    }, [curriculum.title]);

    // Derse özel etiketleri al
    const availableTags = subjectType 
        ? WEAK_TAG_OPTIONS_BY_SUBJECT[subjectType] 
        : WEAK_TAG_OPTIONS;

    const toggleTag = (tagId) => {
        setWeakTags(prev =>
            prev.includes(tagId)
                ? prev.filter(t => t !== tagId)
                : [...prev, tagId]
        );
    };

    const handleSubmit = () => {
        // Validasyon
        if (solvedNum === 0) {
            setValidationError('Çözülen soru sayısı 0 olamaz.');
            return;
        }

        if (!validateStats(solvedNum, correctNum, wrongNum, blankNum)) {
            setValidationError(
                `Sayılar uyuşmuyor: ${correctNum} + ${wrongNum} + ${blankNum} = ${correctNum + wrongNum + blankNum}, ama çözülen ${solvedNum}`
            );
            return;
        }

        if (!studyMinutes || parseInt(studyMinutes) <= 0) {
            setValidationError('Çalışma süresi girilmeli.');
            return;
        }

        setValidationError(null);

        onSubmit({
            solved: solvedNum,
            correct: correctNum,
            wrong: wrongNum,
            blank: blankNum,
            net: net,
            studyMinutes: parseInt(studyMinutes),
            weakTags,
            note: note.trim()
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-screen flex items-center justify-center p-4 bg-[#050505]"
        >
            <div className="w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10
                      rounded-2xl p-8 space-y-6">

                {/* Başlık */}
                <div>
                    <div className="text-blue-400 font-mono text-sm">GÜN {dayNumber} / 105</div>
                    <h2 className="text-2xl font-bold text-white mt-1">
                        {curriculum.title}
                    </h2>
                </div>

                {/* Soru İstatistikleri */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-gray-400 text-xs uppercase mb-1 block">Çözülen</label>
                        <input
                            type="number" min="0" value={solved}
                            onChange={e => setSolved(e.target.value)}
                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3
                         text-white text-center text-lg font-mono
                         focus:border-blue-500/50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-gray-400 text-xs uppercase mb-1 block">Doğru</label>
                        <input
                            type="number" min="0" value={correct}
                            onChange={e => setCorrect(e.target.value)}
                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3
                         text-blue-400 text-center text-lg font-mono
                         focus:border-blue-500/50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-gray-400 text-xs uppercase mb-1 block">Yanlış</label>
                        <input
                            type="number" min="0" value={wrong}
                            onChange={e => setWrong(e.target.value)}
                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3
                         text-red-400 text-center text-lg font-mono
                         focus:border-red-500/50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-gray-400 text-xs uppercase mb-1 block">Boş</label>
                        <input
                            type="number" min="0" value={blank}
                            onChange={e => setBlank(e.target.value)}
                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3
                         text-gray-400 text-center text-lg font-mono
                         focus:border-white/30 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Net Gösterimi */}
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                    <div className="text-gray-400 text-xs uppercase mb-1">NET</div>
                    <div className={`text-4xl font-bold font-mono ${net >= 0 ? 'text-blue-400' : 'text-red-400'
                        }`}>
                        {solvedNum > 0 ? net.toFixed(2) : '—'}
                    </div>
                    <div className="text-gray-600 text-xs mt-1">
                        doğru - (yanlış ÷ 4)
                    </div>
                </div>

                {/* Çalışma Süresi */}
                <div>
                    <label className="text-gray-400 text-xs uppercase mb-1 block">
                        Çalışma Süresi (dakika)
                    </label>
                    <input
                        type="number" min="1" value={studyMinutes}
                        onChange={e => setStudyMinutes(e.target.value)}
                        placeholder="örn: 120"
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3
                       text-white font-mono
                       focus:border-blue-500/50 focus:outline-none"
                    />
                </div>

                {/* Zayıf Noktalar */}
                <div>
                    <label className="text-gray-400 text-xs uppercase mb-2 block">
                        Zorlandığın Alanlar {subjectType && <span className="text-blue-400">({curriculum.title})</span>}
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {availableTags.map(tag => (
                            <button
                                key={tag.id}
                                onClick={() => toggleTag(tag.id)}
                                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${weakTags.includes(tag.id)
                                        ? 'bg-red-500/20 border border-red-500/50 text-red-400'
                                        : 'bg-white/5 border border-white/10 text-gray-500 hover:text-gray-300'
                                    }`}
                            >
                                {tag.label}
                            </button>
                        ))}
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
                        placeholder="Bu konuda dikkat etmem gereken şeyler..."
                        rows={3}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3
                       text-white text-sm resize-none
                       focus:border-blue-500/50 focus:outline-none"
                    />
                </div>

                {/* Validasyon Hatası */}
                {validationError && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/10 border border-red-500/30 rounded-lg p-3
                       text-red-400 text-sm"
                    >
                        ❌ {validationError}
                    </motion.div>
                )}

                {/* Gönder */}
                <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-blue-500 text-black font-black text-lg
                     rounded-xl hover:bg-blue-400 transition-colors
                     active:scale-[0.98] shadow-lg shadow-blue-500/20"
                >
                    GÜNÜ TAMAMLA ✓
                </button>
            </div>
        </motion.div>
    );
}
