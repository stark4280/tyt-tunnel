import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingOverlay from './components/LoadingOverlay';
import VideoSetup from './components/VideoSetup';
import Dashboard from './components/Dashboard';
import StudyView from './components/StudyView';
import DayComplete from './components/DayComplete';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useStreak } from './hooks/useStreak';
import { migrateFromV13, validateProgressData, repairProgressData } from './utils/migration';
import { CURRICULUM_105 } from './data/curriculum';
import { STORAGE_KEYS, DEFAULT_FILE_IDS } from './data/constants';

/**
 * PHASE STATE MACHINE:
 * 
 * -1: Dashboard (analytics ve genel görünüm)
 * 0:  VideoSetup (ilk kurulum)
 * 1:  StudyView (çalışma ekranı - PDF + Video + Pomodoro)
 * 2:  DayComplete (gün tamamlama formu)
 * 
 * İlk yüklemede:
 * - Eğer progress yoksa → V13 migration kontrolü → yoksa VideoSetuptan başla
 * - Eğer progress varsa → Dashboard'dan başla
 */

function App() {
    const [progress, setProgress, progressError] = useLocalStorage(STORAGE_KEYS.PROGRESS, {
        dayIdx: 0,
        startDate: null,
        days: {},
        mockExams: [],
        streak: { current: 0, longest: 0, lastActiveDate: null }
    });

    const [settings, setSettings, settingsError] = useLocalStorage(STORAGE_KEYS.SETTINGS, {
        pomodoroWork: 25,
        pomodoroBreak: 5,
        fileIds: DEFAULT_FILE_IDS,
        videoId: null
    });

    const [phase, setPhase] = useState(-1);
    const [loading, setLoading] = useState(true);

    const streakHook = useStreak(progress.streak, (newStreak) => {
        setProgress(prev => ({ ...prev, streak: newStreak }));
    });

    // İlk yükleme ve migration kontrolü
    useEffect(() => {
        console.log('[App] Initial load...');

        // Hata varsa (quota exceeded vb.)
        if (progressError || settingsError) {
            console.error('[App] Storage errors:', { progressError, settingsError });
            setLoading(false);
            return;
        }

        // Progress validasyonu
        if (progress && !validateProgressData(progress)) {
            console.warn('[App] Invalid progress data, attempting repair...');
            const repaired = repairProgressData(progress);
            setProgress(repaired);
        }

        // Bozuk cache kontrolü ve otomatik temizleme
        checkAndClearBrokenCache();

        // İlk kurulum mu?
        if (!settings.videoId) {
            console.log('[App] No video ID found, starting with VideoSetup');
            setPhase(0);
            setLoading(false);
            return;
        }

        // V13 migration
        if (!progress.days || Object.keys(progress.days).length === 0) {
            const migrated = migrateFromV13();
            if (migrated) {
                setProgress(migrated);
                setPhase(-1);
            } else {
                setPhase(-1); // Dashboard'dan başla
            }
        } else {
            setPhase(-1); // Dashboard
        }

        setLoading(false);
    }, []);

    // Bozuk cache kontrolü ve temizleme
    const checkAndClearBrokenCache = async () => {
        try {
            const dbName = 'citadel_store';
            const request = indexedDB.open(dbName);

            request.onsuccess = (event) => {
                const db = event.target.result;
                
                // Store'ların varlığını kontrol et
                if (!db.objectStoreNames.contains('pdfs')) {
                    console.log('[Cache Check] PDF store not found, skipping check');
                    db.close();
                    return;
                }
                
                const tx = db.transaction(['pdfs'], 'readonly');
                const store = tx.objectStore('pdfs');
                const getAllRequest = store.getAll();

                getAllRequest.onsuccess = () => {
                    const pdfs = getAllRequest.result;
                    let hasBrokenCache = false;

                    // Her PDF'i kontrol et
                    pdfs.forEach(pdf => {
                        if (pdf && pdf.byteLength < 10000) {
                            // 10KB'den küçük PDF'ler muhtemelen bozuk (HTML hata sayfası)
                            console.warn('[Cache Check] Broken cache detected:', pdf.byteLength, 'bytes');
                            hasBrokenCache = true;
                        }
                    });

                    // Bozuk cache varsa temizle
                    if (hasBrokenCache) {
                        console.log('[Cache] Clearing broken cache...');
                        clearBrokenCache();
                    }
                };
            };

            request.onerror = () => {
                console.error('[Cache Check] IndexedDB error');
            };
        } catch (error) {
            console.error('[Cache Check] Error:', error);
        }
    };

    // Bozuk cache'i temizle
    const clearBrokenCache = async () => {
        try {
            const dbName = 'citadel_store';
            const request = indexedDB.open(dbName);

            request.onsuccess = (event) => {
                const db = event.target.result;
                const tx = db.transaction(['pdfs'], 'readwrite');
                tx.objectStore('pdfs').clear();

                tx.oncomplete = () => {
                    console.log('[Cache] Broken cache cleared successfully');
                    alert('🧹 Bozuk PDF cache temizlendi! Sayfa yenileniyor...');
                    window.location.reload();
                };

                tx.onerror = () => {
                    console.error('[Cache] Clear failed');
                };
            };
        } catch (error) {
            console.error('[Cache Clear] Error:', error);
        }
    };

    // VideoSetup tamamlandığında
    const handleVideoSetupComplete = (videoId) => {
        setSettings(prev => ({ ...prev, videoId }));
        setProgress(prev => ({
            ...prev,
            startDate: new Date().toISOString().split('T')[0]
        }));
        setPhase(-1); // Dashboard'a git
    };

    // Dashboard'dan çalışmaya başla
    const handleStartStudy = () => {
        setPhase(1); // StudyView
    };

    // StudyView'dan günü tamamla
    const handleStudyComplete = () => {
        setPhase(2); // DayComplete form
    };

    // DayComplete form submit
    const handleDayCompleteSubmit = (stats) => {
        const today = new Date().toISOString().split('T')[0];
        const currentIdx = progress.dayIdx;
        const curriculum = CURRICULUM_105[currentIdx];

        // Günü kaydet
        const newDays = {
            ...progress.days,
            [currentIdx]: {
                completed: true,
                date: today,
                topics: curriculum.topics || [],
                stats,
                weakTags: stats.weakTags || [],
                note: stats.note || '',
                videoId: settings.videoId
            }
        };

        // Streak güncelle
        streakHook.updateStreak(today);

        // Sonraki güne geç
        const newDayIdx = currentIdx + 1;

        setProgress(prev => ({
            ...prev,
            dayIdx: newDayIdx,
            days: newDays
        }));

        // Eğer son gün ise (105. gün)
        if (newDayIdx >= CURRICULUM_105.length) {
            alert('🎉 TÜNEL TAMAMLANDI! Sınava hazırsın!');
        }

        setPhase(-1); // Dashboard'a dön
    };

    // Mock exam ekle
    const handleAddMockExam = (examData) => {
        setProgress(prev => ({
            ...prev,
            mockExams: [...prev.mockExams, examData]
        }));
    };

    if (loading) {
        return <LoadingOverlay message="Yükleniyor..." />;
    }

    // Storage hatası varsa
    if (progressError) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-[#050505] gap-6 p-8">
                <div className="text-red-500 text-6xl mb-4">💾</div>
                <div className="text-red-400 text-xl text-center max-w-md">
                    LocalStorage hatası: {progressError}
                </div>
                <div className="text-gray-500 text-sm max-w-lg text-center">
                    Tarayıcı depolama alanı dolu olabilir. Lütfen tarayıcı verilerini temizleyin
                    veya başka bir tarayıcı deneyin.
                </div>
            </div>
        );
    }

    const currentCurriculum = progress.dayIdx < CURRICULUM_105.length 
        ? CURRICULUM_105[progress.dayIdx] 
        : null;

    return (
        <ErrorBoundary>
            <AnimatePresence mode="wait">
                {phase === 0 && (
                    <VideoSetup
                        key="video-setup"
                        onSubmit={handleVideoSetupComplete}
                    />
                )}

                {phase === -1 && (
                    <Dashboard
                        key="dashboard"
                        progress={progress}
                        settings={settings}
                        onStartStudy={handleStartStudy}
                        onAddMockExam={handleAddMockExam}
                        onResumeStudy={() => setPhase(1)}
                    />
                )}

                {phase === 1 && currentCurriculum && (
                    <StudyView
                        key="study-view"
                        videoId={settings.videoId}
                        curriculum={currentCurriculum}
                        settings={settings}
                        onComplete={handleStudyComplete}
                        onBack={() => setPhase(-1)}
                    />
                )}

                {phase === 2 && currentCurriculum && (
                    <DayComplete
                        key="day-complete"
                        curriculum={currentCurriculum}
                        dayNumber={progress.dayIdx + 1}
                        onSubmit={handleDayCompleteSubmit}
                    />
                )}

                {/* Tünel tamamlandı mesajı */}
                {!currentCurriculum && phase !== 0 && phase !== -1 && (
                    <div className="flex flex-col items-center justify-center h-screen bg-[#050505] gap-6 p-8">
                        <div className="text-green-500 text-8xl mb-4">🎉</div>
                        <div className="text-green-400 text-3xl font-bold text-center">
                            TÜNEL TAMAMLANDI!
                        </div>
                        <div className="text-gray-400 text-lg text-center max-w-md">
                            105 günlük çalışma programını başarıyla tamamladınız!
                        </div>
                        <button
                            onClick={() => setPhase(-1)}
                            className="px-8 py-4 bg-green-500 text-black font-bold rounded-xl
                                     hover:bg-green-400 transition-all"
                        >
                            Dashboard'a Dön
                        </button>
                    </div>
                )}
            </AnimatePresence>

            {/* Milestone Toast */}
            {streakHook.showMilestone && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        z-[100] bg-black/95 backdrop-blur-xl border-2 border-green-500
                        rounded-2xl p-8 shadow-2xl shadow-green-500/30
                        text-center animate-bounce">
                    <div className="text-6xl mb-4">{streakHook.showMilestone.emoji}</div>
                    <div className="text-green-400 text-2xl font-bold">
                        {streakHook.showMilestone.msg}
                    </div>
                </div>
            )}
        </ErrorBoundary>
    );
}

export default App;
