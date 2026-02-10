import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, CloudOff, Upload, Download, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { 
    initSync, 
    syncAllData, 
    downloadAllData, 
    isSyncEnabled,
    getUserId 
} from '../firebase/sync';

/**
 * CloudSync - Firebase senkronizasyon paneli
 */
export default function CloudSync() {
    const [syncEnabled, setSyncEnabled] = useState(false);
    const [userId, setUserId] = useState(null);
    const [syncing, setSyncing] = useState(false);
    const [lastSync, setLastSync] = useState(null);
    const [status, setStatus] = useState({ type: '', message: '' });

    useEffect(() => {
        // Sayfa yüklendiğinde sync durumunu kontrol et
        const checkSync = async () => {
            const enabled = isSyncEnabled();
            setSyncEnabled(enabled);
            if (enabled) {
                setUserId(getUserId());
            }
        };
        checkSync();
    }, []);

    const handleInitSync = async () => {
        setSyncing(true);
        setStatus({ type: 'info', message: 'Firebase bağlantısı kuruluyor...' });
        
        const success = await initSync();
        
        if (success) {
            setSyncEnabled(true);
            setUserId(getUserId());
            setStatus({ type: 'success', message: 'Firebase bağlantısı başarılı!' });
            
            // İlk senkronizasyonu yap
            await handleUpload();
        } else {
            setStatus({ type: 'error', message: 'Firebase bağlantısı başarısız! Config dosyasını kontrol et.' });
        }
        
        setSyncing(false);
    };

    const handleUpload = async () => {
        setSyncing(true);
        setStatus({ type: 'info', message: 'Veriler buluta yükleniyor...' });
        
        const success = await syncAllData();
        
        if (success) {
            setLastSync(new Date());
            setStatus({ type: 'success', message: 'Tüm veriler buluta yüklendi!' });
        } else {
            setStatus({ type: 'error', message: 'Yükleme başarısız!' });
        }
        
        setSyncing(false);
    };

    const handleDownload = async () => {
        if (!confirm('Buluttaki veriler yerel verilerin üzerine yazılacak. Devam edilsin mi?')) {
            return;
        }

        setSyncing(true);
        setStatus({ type: 'info', message: 'Veriler buluttan indiriliyor...' });
        
        const success = await downloadAllData();
        
        if (success) {
            setLastSync(new Date());
            setStatus({ type: 'success', message: 'Veriler buluttan indirildi! Sayfa yenileniyor...' });
            setTimeout(() => window.location.reload(), 1500);
        } else {
            setStatus({ type: 'error', message: 'İndirme başarısız!' });
        }
        
        setSyncing(false);
    };

    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    {syncEnabled ? (
                        <Cloud size={24} className="text-green-400" />
                    ) : (
                        <CloudOff size={24} className="text-gray-600" />
                    )}
                    <div>
                        <h3 className="text-xl font-bold text-white">Bulut Senkronizasyonu</h3>
                        <p className="text-xs text-gray-500">
                            {syncEnabled ? 'Aktif' : 'Pasif'} • Firebase Realtime Database
                        </p>
                    </div>
                </div>
                
                {syncEnabled && userId && (
                    <div className="text-xs text-gray-500 font-mono">
                        ID: {userId.substring(0, 8)}...
                    </div>
                )}
            </div>

            {/* Status Message */}
            {status.message && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-4 p-3 rounded-lg border flex items-center gap-2 text-sm ${
                        status.type === 'success' 
                            ? 'bg-green-500/10 border-green-500/30 text-green-400'
                            : status.type === 'error'
                            ? 'bg-red-500/10 border-red-500/30 text-red-400'
                            : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                    }`}
                >
                    {status.type === 'success' && <CheckCircle size={16} />}
                    {status.type === 'error' && <XCircle size={16} />}
                    {status.type === 'info' && <RefreshCw size={16} className="animate-spin" />}
                    {status.message}
                </motion.div>
            )}

            {!syncEnabled ? (
                <div className="space-y-4">
                    <p className="text-gray-400 text-sm">
                        Firebase ile cihazlar arası otomatik senkronizasyon. 
                        Tüm verileriniz (ilerleme, optikler, çizimler) güvenli şekilde bulutta saklanır.
                    </p>
                    <button
                        onClick={handleInitSync}
                        disabled={syncing}
                        className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 
                                 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500
                                 disabled:opacity-50 disabled:cursor-not-allowed transition-all
                                 flex items-center justify-center gap-2"
                    >
                        {syncing ? (
                            <>
                                <RefreshCw size={20} className="animate-spin" />
                                Bağlanıyor...
                            </>
                        ) : (
                            <>
                                <Cloud size={20} />
                                Senkronizasyonu Başlat
                            </>
                        )}
                    </button>
                    
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 text-xs text-yellow-400">
                        ⚠️ İlk kullanımda Firebase config dosyasını düzenlemelisin!
                    </div>
                </div>
            ) : (
                <div className="space-y-3">
                    {lastSync && (
                        <div className="text-xs text-gray-500 text-center mb-2">
                            Son senkronizasyon: {lastSync.toLocaleTimeString('tr-TR')}
                        </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={handleUpload}
                            disabled={syncing}
                            className="py-3 bg-green-500/20 border border-green-500/50 rounded-lg
                                     text-green-400 hover:bg-green-500/30 transition-colors
                                     disabled:opacity-50 disabled:cursor-not-allowed
                                     flex items-center justify-center gap-2 font-medium"
                        >
                            <Upload size={18} />
                            Yükle
                        </button>
                        
                        <button
                            onClick={handleDownload}
                            disabled={syncing}
                            className="py-3 bg-blue-500/20 border border-blue-500/50 rounded-lg
                                     text-blue-400 hover:bg-blue-500/30 transition-colors
                                     disabled:opacity-50 disabled:cursor-not-allowed
                                     flex items-center justify-center gap-2 font-medium"
                        >
                            <Download size={18} />
                            İndir
                        </button>
                    </div>
                    
                    <p className="text-xs text-gray-500 text-center">
                        Veriler otomatik olarak senkronize edilir. Manuel yükleme/indirme için butonları kullan.
                    </p>
                </div>
            )}
        </div>
    );
}
