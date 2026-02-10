import { useState, useEffect } from 'react';
import { ExternalLink, Download } from 'lucide-react';
import { PROXY_URL } from '../data/constants';
import InkOverlay from './InkOverlay';

/**
 * PDF Viewer - Browser Native (En Basit Çözüm)
 * PDF'i iframe'de göster veya yeni sekmede aç
 */
export default function PdfViewer({
    pdfData,
    currentPage,
    onPageChange,
    totalPages,
    setTotalPages,
    pdfId // InkOverlay için gerekli
}) {
    const [fileId, setFileId] = useState(null);
    const [pdfUrl, setPdfUrl] = useState('');

    useEffect(() => {
        const currentFileId = window.currentPdfFileId;
        
        if (currentFileId && currentFileId !== fileId) {
            setFileId(currentFileId);
            // Cloudflare Worker URL
            const url = `${PROXY_URL}?id=${currentFileId}`;
            setPdfUrl(url);
            console.log('[PdfViewer] PDF URL:', url);
        }
    }, [fileId]);

    // FileId değişikliklerini dinle
    useEffect(() => {
        const interval = setInterval(() => {
            const currentFileId = window.currentPdfFileId;
            if (currentFileId && currentFileId !== fileId) {
                setFileId(currentFileId);
                const url = `${PROXY_URL}?id=${currentFileId}`;
                setPdfUrl(url);
                console.log('[PdfViewer] Updated PDF URL');
            }
        }, 500);

        return () => clearInterval(interval);
    }, [fileId]);

    if (!pdfUrl) {
        return (
            <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                    <div className="text-4xl mb-4">📄</div>
                    <div>PDF hazırlanıyor...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full bg-gray-900 flex flex-col">
            {/* Browser Native PDF Viewer (iframe) */}
            <div className="relative w-full h-full">
                <iframe
                    key={pdfUrl}
                    src={pdfUrl}
                    className="w-full h-full border-0 absolute inset-0"
                    title="PDF Viewer"
                    style={{ pointerEvents: 'auto' }}
                    onError={(e) => {
                        console.error('[PdfViewer] iframe error:', e);
                    }}
                />

                {/* InkOverlay - PDF'in üstünde çizim katmanı */}
                <div className="absolute inset-0 pointer-events-none">
                    <InkOverlay
                        pdfId={pdfId}
                        pageNumber={currentPage}
                    />
                </div>
            </div>

            {/* Floating Controls */}
            <div className="absolute top-4 left-4 z-50 flex gap-2">
                {/* Yeni Sekmede Aç */}
                <button
                    onClick={() => window.open(pdfUrl, '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-black/90 backdrop-blur-md 
                             text-white rounded-lg border border-white/20 hover:bg-blue-500 
                             hover:text-black transition-colors shadow-xl"
                    title="Yeni sekmede aç"
                >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Yeni Sekmede Aç</span>
                </button>

                {/* İndir */}
                <a
                    href={pdfUrl}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-black/90 backdrop-blur-md 
                             text-white rounded-lg border border-white/20 hover:bg-blue-500 
                             hover:text-black transition-colors shadow-xl"
                    title="İndir"
                >
                    <Download size={18} />
                    <span className="text-sm font-medium">İndir</span>
                </a>
            </div>

            {/* Info Badge */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                          bg-black/90 backdrop-blur-md px-6 py-3 rounded-full
                          border border-white/20 shadow-2xl z-50">
                <div className="text-blue-400 font-mono text-sm">
                    📄 Browser PDF Viewer
                </div>
            </div>
        </div>
    );
}
