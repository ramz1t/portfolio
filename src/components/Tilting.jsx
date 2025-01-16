import React, { useRef, useState } from 'react'

const Tilting = ({ children }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const itemRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = itemRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 50;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;

        setTilt({ x, y });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setScale(1);
    };

    return (
        <div
            ref={itemRef}
            style={{
                transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scaleX(${scale}) scaleY(${scale})`,
                perspective: "1000px"
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setScale(1.1)}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
}

export default Tilting