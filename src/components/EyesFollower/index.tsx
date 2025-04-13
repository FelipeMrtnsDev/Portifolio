import React, { useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const Eye: React.FC = () => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const moveEye = (e: MouseEvent) => {
      const eye = eyeRef.current;
      if (!eye) return;

      const rect = eye.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const radius = 6; // movimento máximo
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", moveEye);
    return () => window.removeEventListener("mousemove", moveEye);
  }, []);

  return (
    <div
      ref={eyeRef}
      className="w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center mx-1"
    >
      <div
        className="w-6 h-6 bg-black rounded-full transition-transform duration-75"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
};

const Eyes: React.FC = () => {
  return (
    <div className="flex">
      <Eye />
      <Eye />
    </div>
  );
};

export default Eyes;
