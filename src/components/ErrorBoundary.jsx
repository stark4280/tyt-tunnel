import React from 'react';

/**
 * Global Error Boundary
 * React rendering hatalarını yakalar ve kullanıcıya anlamlı hata ekranı gösterir
 */
export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('[ErrorBoundary] Caught error:', error);
        console.error('[ErrorBoundary] Component stack:', errorInfo.componentStack);

        this.setState({ errorInfo });
    }

    handleReload = () => {
        window.location.reload();
    };

    handleEmergencyBackup = () => {
        try {
            const progressData = localStorage.getItem('citadel_v2_progress');
            const settingsData = localStorage.getItem('citadel_v2_settings');

            if (!progressData) {
                alert('Yedeklenecek veri bulunamadı.');
                return;
            }

            const backup = {
                version: '2.0.0',
                exportDate: new Date().toISOString(),
                progress: JSON.parse(progressData),
                settings: settingsData ? JSON.parse(settingsData) : null
            };

            const dataStr = JSON.stringify(backup, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `citadel_emergency_backup_${Date.now()}.json`;
            link.click();

            URL.revokeObjectURL(url);

            alert('✅ Acil yedek oluşturuldu!');

        } catch (error) {
            console.error('[Emergency Backup] Failed:', error);
            alert('❌ Acil yedek oluşturulamadı! Browser console\'u kontrol edin.');
        }
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen 
                        bg-[#050505] p-8 text-center">
                    {/* Hata ikonu */}
                    <div className="text-red-500 text-8xl mb-6 animate-pulse">
                        💥
                    </div>

                    {/* Başlık */}
                    <h1 className="text-red-400 text-3xl font-bold mb-3">
                        Bir hata oluştu
                    </h1>

                    {/* Hata mesajı */}
                    <pre className="text-gray-500 text-sm mb-8 max-w-md text-left 
                          bg-white/5 rounded-lg p-4 overflow-auto max-h-40">
                        {this.state.error?.message || 'Bilinmeyen hata'}
                    </pre>

                    {/* Beta uyarısı */}
                    <div className="text-gray-600 text-sm mb-8 max-w-md">
                        <p className="mb-2">
                            Bu uygulama beta aşamasındadır. Lütfen aşağıdaki adımları deneyin:
                        </p>
                        <ol className="text-left list-decimal list-inside space-y-1 text-gray-500">
                            <li>Sayfayı yenileyin</li>
                            <li>Tarayıcı cache\'ini temizleyin</li>
                            <li>Yedek alıp tarayıcı verilerini sıfırlayın</li>
                        </ol>
                    </div>

                    {/* Aksiyon butonları */}
                    <div className="flex gap-4 flex-wrap justify-center">
                        <button
                            onClick={this.handleReload}
                            className="px-8 py-4 bg-blue-500/20 border-2 border-blue-500/50
                         rounded-xl text-blue-400 font-bold text-lg
                         hover:bg-blue-500/30 hover:border-blue-400
                         transition-all active:scale-95"
                        >
                            🔄 Sayfayı Yenile
                        </button>

                        <button
                            onClick={this.handleEmergencyBackup}
                            className="px-8 py-4 bg-red-500/20 border-2 border-red-500/50
                         rounded-xl text-red-400 font-bold text-lg
                         hover:bg-red-500/30 hover:border-red-400
                         transition-all active:scale-95"
                        >
                            💾 Acil Yedek Al
                        </button>
                    </div>

                    {/* Component stack (dev mode) */}
                    {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
                        <details className="mt-8 max-w-2xl w-full">
                            <summary className="text-gray-600 cursor-pointer hover:text-gray-400 mb-2">
                                Developer Info (Component Stack)
                            </summary>
                            <pre className="text-left text-xs text-gray-700 bg-white/5 
                              rounded-lg p-4 overflow-auto max-h-60">
                                {this.state.errorInfo.componentStack}
                            </pre>
                        </details>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}
