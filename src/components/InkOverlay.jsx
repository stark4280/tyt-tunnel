import { useRef, useEffect, useState, useCallback } from 'react';
import { Pen, Eraser, Trash2, Eye, GripVertical } from 'lucide-react';
import { saveInk, loadInk } from '../utils/storage';
import DraggablePanel from './DraggablePanel';

/**
 * Ink Overlay - PDF üzerine şeffaf canvas çizim katmanı
 */
export default function InkOverlay({ pdfId, pageNumber }) {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [tool, setTool] = useState('view'); // Varsayılan: görüntüleme modu
    const [penSize, setPenSize] = useState(2);
    const [penColor, setPenColor] = useState('#000000'); // Varsayılan: Siyah
    const lastPoint = useRef(null);

    // Sayfa değişince çizimi yükle
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        console.log('[InkOverlay] Loading ink for:', pdfId, 'page:', pageNumber);
        loadInk(pdfId, pageNumber).then(savedDataUrl => {
            if (savedDataUrl) {
                console.log('[InkOverlay] Ink found, loading...');
                const img = new Image();
                img.onload = () => {
                    ctx.drawImage(img, 0, 0);
                    console.log('[InkOverlay] Ink loaded successfully');
                };
                img.onerror = () => {
                    console.error('[InkOverlay] Failed to load ink image');
                };
                img.src = savedDataUrl;
            } else {
                console.log('[InkOverlay] No saved ink found');
            }
        }).catch(err => {
            console.error('[InkOverlay] Ink load failed:', err);
        });
    }, [pdfId, pageNumber]);

    // Canvas boyutunu ayarla
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement;
        if (parent) {
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
        }
    }, []);

    const getCoords = useCallback((e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY,
            pressure: e.pressure || 0.5
        };
    }, []);

    const startDraw = useCallback((e) => {
        if (tool === 'view') return;

        e.preventDefault();
        e.stopPropagation();
        setIsDrawing(true);

        const coords = getCoords(e);
        lastPoint.current = coords;

        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(coords.x, coords.y);
    }, [getCoords, tool]);

    const draw = useCallback((e) => {
        if (!isDrawing || tool === 'view') return;
        e.preventDefault();
        e.stopPropagation();

        const ctx = canvasRef.current.getContext('2d');
        const coords = getCoords(e);

        if (tool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = 30;
        } else {
            ctx.globalCompositeOperation = 'source-over';
            // Pressure sensitivity
            ctx.lineWidth = penSize * (0.5 + coords.pressure * 1.5);
            ctx.strokeStyle = penColor;
        }

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(coords.x, coords.y);

        lastPoint.current = coords;
    }, [isDrawing, tool, penSize, penColor, getCoords]);

    const endDraw = useCallback(() => {
        if (!isDrawing) return;
        setIsDrawing(false);
        lastPoint.current = null;

        // Otomatik kaydet
        const canvas = canvasRef.current;
        const dataUrl = canvas.toDataURL('image/png');
        console.log('[InkOverlay] Saving ink for:', pdfId, 'page:', pageNumber);
        saveInk(pdfId, pageNumber, dataUrl).then(() => {
            console.log('[InkOverlay] Ink saved successfully');
        }).catch(err => {
            console.error('[InkOverlay] Ink save failed:', err);
        });
    }, [isDrawing, pdfId, pageNumber]);

    const clearAll = () => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        console.log('[InkOverlay] Clearing ink for:', pdfId, 'page:', pageNumber);
        saveInk(pdfId, pageNumber, null).then(() => {
            console.log('[InkOverlay] Ink cleared successfully');
        });
    };

    const colors = ['#000000', '#ffffff', '#ff3333', '#00ff00', '#3399ff', '#ffff00'];

    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Şeffaf çizim canvas */}
            <canvas
                ref={canvasRef}
                className={`absolute inset-0 ${tool === 'view' ? 'pointer-events-none' : 'pointer-events-auto'}`}
                style={{
                    touchAction: 'none',
                    cursor: tool === 'view' ? 'default' : tool === 'pen' ? 'crosshair' : 'cell',
                    zIndex: tool === 'view' ? 0 : 40
                }}
                onPointerDown={startDraw}
                onPointerMove={draw}
                onPointerUp={endDraw}
                onPointerLeave={endDraw}
                onPointerCancel={endDraw}
            />

            {/* Araç Çubuğu - Sürüklenebilir */}
            <DraggablePanel
                initialX={window.innerWidth - 100}
                initialY={20}
                zIndex={50}
            >
                <div className="flex flex-col gap-1.5 bg-black/90 backdrop-blur-md rounded-2xl p-2 border border-white/10 pointer-events-auto">
                {/* Drag Handle */}
                <div className="drag-handle flex items-center justify-center py-1 cursor-grab active:cursor-grabbing border-b border-white/10 mb-1">
                    <GripVertical size={16} className="text-gray-400 pointer-events-none" />
                </div>

                {/* Görüntüleme */}
                <button
                    onClick={() => setTool('view')}
                    className={`p-2 rounded-lg transition-colors ${tool === 'view' ? 'bg-blue-500/30 text-blue-400' : 'text-gray-500 hover:text-gray-300'
                        }`}
                    title="Görüntüle (PDF'i kaydır)"
                >
                    <Eye size={20} />
                </button>

                {/* Kalem */}
                <button
                    onClick={() => setTool('pen')}
                    className={`p-2 rounded-lg transition-colors ${tool === 'pen' ? 'bg-green-500/30 text-green-400' : 'text-gray-500 hover:text-gray-300'
                        }`}
                    title="Kalem (Çiz)"
                >
                    <Pen size={20} />
                </button>

                {/* Silgi */}
                <button
                    onClick={() => setTool('eraser')}
                    className={`p-2 rounded-lg transition-colors ${tool === 'eraser' ? 'bg-red-500/30 text-red-400' : 'text-gray-500 hover:text-gray-300'
                        }`}
                    title="Silgi"
                >
                    <Eraser size={20} />
                </button>

                {/* Kalem kalınlığı */}
                <div className="border-t border-white/10 pt-1.5 flex flex-col gap-1">
                    {[1, 2, 4].map(size => (
                        <button
                            key={size}
                            onClick={() => { setPenSize(size); setTool('pen'); }}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${penSize === size && tool === 'pen'
                                    ? 'bg-green-500/20 border border-green-500/30'
                                    : 'bg-white/5 hover:bg-white/10'
                                }`}
                        >
                            <div
                                className="rounded-full"
                                style={{
                                    width: size * 3 + 2,
                                    height: size * 3 + 2,
                                    backgroundColor: penColor
                                }}
                            />
                        </button>
                    ))}
                </div>

                {/* Renk seçici */}
                <div className="border-t border-white/10 pt-1.5 flex flex-col gap-1">
                    {colors.map(color => (
                        <button
                            key={color}
                            onClick={() => { setPenColor(color); setTool('pen'); }}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${penColor === color && tool === 'pen' ? 'ring-2 ring-white/50' : ''
                                }`}
                        >
                            <div
                                className="w-5 h-5 rounded-full border border-white/20"
                                style={{ backgroundColor: color }}
                            />
                        </button>
                    ))}
                </div>

                {/* Temizle */}
                <div className="border-t border-white/10 pt-1.5">
                    <button
                        onClick={clearAll}
                        className="p-2 rounded-lg text-red-500 hover:bg-red-500/20 
                       transition-colors w-full"
                        title="Tümünü temizle"
                    >
                        <Trash2 size={20} />
                    </button>
                </div>
            </div>
            </DraggablePanel>
        </div>
    );
}
