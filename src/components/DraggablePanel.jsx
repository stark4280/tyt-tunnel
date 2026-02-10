import { useState, useRef, useEffect } from 'react';

/**
 * DraggablePanel - Performanslı sürüklenebilir panel wrapper
 */
export default function DraggablePanel({ 
    children, 
    initialX = 0, 
    initialY = 0, 
    className = '',
    style = {},
    zIndex = 40,
    dragHandleClassName = 'drag-handle' // Sadece bu class'a sahip elementlerden sürüklenebilir
}) {
    const [position, setPosition] = useState({ x: initialX, y: initialY });
    const [isDragging, setIsDragging] = useState(false);
    const dragRef = useRef(null);
    const offsetRef = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        // Sadece drag handle'dan sürükleme yapılabilir
        if (!e.target.closest(`.${dragHandleClassName}`)) return;
        
        // Sadece sol tık
        if (e.button !== 0) return;
        
        setIsDragging(true);
        const rect = dragRef.current.getBoundingClientRect();
        offsetRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        
        const newX = e.clientX - offsetRef.current.x;
        const newY = e.clientY - offsetRef.current.y;
        
        setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging]);

    return (
        <div
            ref={dragRef}
            className={className}
            style={{
                ...style,
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                zIndex,
                userSelect: 'none'
            }}
            onMouseDown={handleMouseDown}
        >
            {children}
        </div>
    );
}
