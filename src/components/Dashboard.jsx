import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Download, Upload, Plus, Activity } from 'lucide-react';
import MetricCard from './MetricCard';
import NetChart from './NetChart';
import WeakTopicMap from './WeakTopicMap';
import MockExamForm from './MockExamForm';
import OptikHistory from './OptikHistory';
import CloudSync from './CloudSync';
import {
    getWeakTopics,
    getAverageNet,
    getTrendAnalysis,
    getTotalStudyTime
} from '../utils/analytics';
import { exportBackup, importBackup } from '../utils/exportImport';
import { printDiagnostics } from '../utils/diagnostics';

/**
 * Dashboard - Analiz ve istatistik ekranı (phase: -1)
 */
export default function Dashboard({ progress, settings, onStartStudy, onAddMockExam, onResumeStudy }) {
    const [showMockForm, setShowMockForm] = useState(false);
    const [importing, setImporting] = useState(false);
    const [runningDiagnostics, setRunningDiagnostics] = useState(false);

    const completedDays = Object.values(progress.days).filter(d => d.completed);
    const weakTopics = getWeakTopics(progress.days);
    const avgNet = getAverageNet(progress.days, 7);
    const trend = getTrendAnalysis(progress.days);
    
    // Aktif gün var mı kontrol et (tamamlanmamış)
    const hasActiveDay = progress.dayIdx < 105 && !progress.days[progress.dayIdx]?.completed;
    const studyTime = getTotalStudyTime(progress.days);

    // Tünel tamamlandı mı kontrolü
    const isTunnelComplete = progress.dayIdx >= 105;

    // Dinamik Geri Sayım ve Hız Analizi
    const totalDays = 105;
    const completedCount = completedDays.length;
    const remainingDays = totalDays - completedCount;
    
    // Hedef tarih (TYT sınavı veya kullanıcı hedefi)
    const targetDate = settings.targetDate 
        ? new Date(settings.targetDate) 
        : new Date('2026-06-06'); // Varsayılan: 6 Haziran 2026 (TYT tahmini)
    
    // Bugünden hedefe kalan fiziksel gün sayısı
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    const daysUntilTarget = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
    
    // Günlük ortalama hız (son 7 gün)
    const recentDays = Object.entries(progress.days)
        .filter(([_, day]) => day.completed)
        .slice(-7);
    
    const daysPassedForRecent = recentDays.length > 0 
        ? (Date.now() - new Date(recentDays[0][1].completedAt).getTime()) / (1000 * 60 * 60 * 24)
        : 0;
    
    const dailyPace = daysPassedForRecent > 0 ? recentDays.length / daysPassedForRecent : 0;
    
    // Tahmini bitiş (çalışma hızına göre)
    const estimatedDaysToFinish = dailyPace > 0 ? Math.ceil(remainingDays / dailyPace) : null;
    const estimatedFinishDate = estimatedDaysToFinish 
        ? new Date(Date.now() + estimatedDaysToFinish * 24 * 60 * 60 * 1000)
        : null;
    
    // Hedef tarihe yetişmek için gereken günlük hız
    const requiredDailyPace = daysUntilTarget > 0 ? remainingDays / daysUntilTarget : 0;

    // Grafik için veri hazırla
    const chartData = Object.entries(progress.days)
        .filter(([_, day]) => day.completed)
        .map(([idx, day]) => ({
            day: parseInt(idx) + 1,
            net: day.stats?.net || 0
        }));

    const handleMockExamSave = (examData) => {
        onAddMockExam(examData);
        setShowMockForm(false);
    };

    const handleExportBackup = () => {
        exportBackup(progress, settings);
    };

    const handleImportBackup = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            setImporting(true);
            try {
                const { progress: importedProgress, settings: importedSettings } = await importBackup(file);
                
                // localStorage'a kaydet
                localStorage.setItem('citadel_v2_progress', JSON.stringify(importedProgress));
                localStorage.setItem('citadel_v2_settings', JSON.stringify(importedSettings));
                
                alert('✅ Yedek başarıyla içe aktarıldı! Sayfa yenileniyor...');
                window.location.reload();
            } catch (error) {
                alert(`❌ İçe aktarma hatası: ${error.message}`);
                console.error('[Import Error]', error);
            } finally {
                setImporting(false);
            }
        };
        
        input.click();
    };

    const handleRunDiagnostics = async () => {
        setRunningDiagnostics(true);
        try {
            await printDiagnostics();
            alert('✅ Diagnostic raporu konsola yazdırıldı!\n\nTarayıcı konsolunu açın (F12) ve kontrol edin.');
        } catch (error) {
            alert(`❌ Diagnostic hatası: ${error.message}`);
        } finally {
            setRunningDiagnostics(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] p-6 lg:p-12 overflow-y-auto">
            <div className="max-w-7xl mx-auto">

                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-black text-white mb-2">
                            THE CITADEL <span className="text-blue-400">V2</span>
                        </h1>
                        <p className="text-gray-500">
                            GÜN {progress.dayIdx + 1} / 105
                        </p>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                        <button
                            onClick={handleRunDiagnostics}
                            disabled={runningDiagnostics}
                            className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg
                         text-gray-400 hover:text-white hover:bg-white/10
                         transition-colors flex items-center gap-2 disabled:opacity-50"
                            title="Sistem Kontrolü"
                        >
                            <Activity size={18} />
                        </button>
                        <button
                            onClick={handleImportBackup}
                            disabled={importing}
                            className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg
                         text-gray-400 hover:text-white hover:bg-white/10
                         transition-colors flex items-center gap-2 disabled:opacity-50"
                        >
                            <Upload size={18} />
                            <span className="hidden sm:inline">{importing ? 'Yükleniyor...' : 'İçe Aktar'}</span>
                        </button>
                        <button
                            onClick={handleExportBackup}
                            className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg
                         text-gray-400 hover:text-white hover:bg-white/10
                         transition-colors flex items-center gap-2"
                        >
                            <Download size={18} />
                            <span className="hidden sm:inline">Yedek Al</span>
                        </button>
                        {hasActiveDay && onResumeStudy && (
                            <button
                                onClick={onResumeStudy}
                                className="px-6 py-3 bg-green-500 text-black font-bold rounded-lg
                                     hover:bg-green-400 transition-colors flex items-center gap-2"
                                title="Aktif günü devam ettir"
                            >
                                ▶ DEVAM ET
                            </button>
                        )}
                        <button
                            onClick={onStartStudy}
                            disabled={isTunnelComplete}
                            className="px-6 py-3 bg-blue-500 text-black font-bold rounded-lg
                         hover:bg-blue-400 transition-colors disabled:opacity-50 
                         disabled:cursor-not-allowed"
                            title={isTunnelComplete ? 'Tünel tamamlandı!' : 'Çalışmaya başla'}
                        >
                            {isTunnelComplete ? '✓ TAMAMLANDI' : 'BAŞLA →'}
                        </button>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                    <MetricCard
                        label="Sınava Kalan"
                        value={daysUntilTarget > 0 ? daysUntilTarget : '0'}
                        sub={`${targetDate.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })}`}
                        icon="🎯"
                    />
                    <MetricCard
                        label="Kalan Konu"
                        value={remainingDays}
                        sub={`${completedCount} / ${totalDays} tamamlandı`}
                        icon="📚"
                    />
                    <MetricCard
                        label="Günlük Hız"
                        value={dailyPace > 0 ? dailyPace.toFixed(2) : '—'}
                        sub={dailyPace > 0 ? 'konu/gün (son 7 gün)' : 'henüz veri yok'}
                        icon="⚡"
                    />
                    <MetricCard
                        label="Gerekli Hız"
                        value={requiredDailyPace > 0 ? requiredDailyPace.toFixed(2) : '—'}
                        sub={requiredDailyPace > 0 ? 'konu/gün (hedefe ulaşmak için)' : '—'}
                        icon="🎲"
                    />
                    <MetricCard
                        label="Streak"
                        value={progress.streak.current}
                        sub={`En uzun: ${progress.streak.longest}`}
                        icon="🔥"
                    />
                </div>

                {/* Hız Analizi Banner */}
                {dailyPace > 0 && remainingDays > 0 && daysUntilTarget > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`bg-gradient-to-r ${
                            dailyPace >= requiredDailyPace 
                                ? 'from-blue-500/10 to-purple-500/10 border-blue-500/30' 
                                : 'from-yellow-500/10 to-orange-500/10 border-yellow-500/30'
                        } border rounded-xl p-4 mb-8`}
                    >
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <div className={`${
                                    dailyPace >= requiredDailyPace ? 'text-blue-400' : 'text-yellow-400'
                                } font-bold text-lg mb-1`}>
                                    {dailyPace >= requiredDailyPace 
                                        ? `🚀 Mükemmel! Hedefe yetişiyorsun.`
                                        : `⚠️ Dikkat! Hedefe yetişmek için hızlanmalısın.`
                                    }
                                </div>
                                <div className="text-gray-400 text-sm">
                                    Şu anki hızın: <strong>{dailyPace.toFixed(2)} konu/gün</strong> • 
                                    Gerekli hız: <strong>{requiredDailyPace.toFixed(2)} konu/gün</strong>
                                    {dailyPace < requiredDailyPace && (
                                        <span className="text-yellow-400"> • Günde {(requiredDailyPace - dailyPace).toFixed(2)} konu daha fazla çalışmalısın!</span>
                                    )}
                                </div>
                            </div>
                            {dailyPace >= requiredDailyPace ? (
                                <TrendingUp className="text-blue-400" size={32} />
                            ) : (
                                <TrendingDown className="text-yellow-400" size={32} />
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Net Trend Grafiği */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10
                        rounded-2xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Net Trend</h3>
                    <NetChart data={chartData} targetNet={75} />
                </div>

                {/* İki Kolon */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">

                    {/* Zayıf Konular */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10
                          rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Zayıf Noktalar
                        </h3>
                        <WeakTopicMap topics={weakTopics} />
                    </div>

                    {/* Deneme Sınavları */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10
                          rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">Deneme Sınavları</h3>
                            <button
                                onClick={() => setShowMockForm(true)}
                                className="p-2 bg-blue-500/20 border border-blue-500/50 rounded-lg
                           text-blue-400 hover:bg-blue-500/30 transition-colors"
                            >
                                <Plus size={20} />
                            </button>
                        </div>

                        {progress.mockExams.length === 0 ? (
                            <p className="text-gray-600 text-sm">Henüz deneme eklenmedi</p>
                        ) : (
                            <div className="space-y-3 max-h-60 overflow-y-auto">
                                {progress.mockExams.slice().reverse().map((exam, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white/5 rounded-lg p-4 border border-white/10"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="font-semibold text-white text-sm">
                                                {exam.source}
                                            </div>
                                            <div className="text-blue-400 font-mono font-bold">
                                                {exam.total.toFixed(1)}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-2 text-xs text-gray-500">
                                            <div>Mat: <span className="text-white font-mono">{exam.scores.mat}</span></div>
                                            <div>Tür: <span className="text-white font-mono">{exam.scores.tur}</span></div>
                                            <div>Fen: <span className="text-white font-mono">{exam.scores.fen}</span></div>
                                            <div>Sos: <span className="text-white font-mono">{exam.scores.sos}</span></div>
                                        </div>
                                        {exam.note && (
                                            <p className="text-gray-600 text-xs mt-2">{exam.note}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Bulut Senkronizasyonu */}
                <div className="mb-8">
                    <CloudSync />
                </div>

                {/* Optik Geçmişi - Tam Genişlik */}
                <div className="mb-8">
                    <OptikHistory />
                </div>

                {/* Mock Exam Form Modal */}
                {showMockForm && (
                    <MockExamForm
                        onSave={handleMockExamSave}
                        onClose={() => setShowMockForm(false)}
                    />
                )}
            </div>
        </div>
    );
}
