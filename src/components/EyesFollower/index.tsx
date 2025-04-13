import React, { useEffect, useRef } from "react";

const Eye: React.FC = () => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveEye = (e: MouseEvent) => {
      const eye = eyeRef.current;
      if (!eye) return;

      const rect = eye.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const radius = 6;
      targetPosition.current = {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    };

    const animate = () => {
      const pupil = pupilRef.current;
      if (!pupil) return;

      // Interpolação suave entre posição atual e alvo
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * 0.15;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * 0.15;

      pupil.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveEye);
    animate(); // iniciar animação

    return () => window.removeEventListener("mousemove", moveEye);
  }, []);

  return (
    <div
      ref={eyeRef}
      className="w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center mx-1"
    >
      <div
        ref={pupilRef}
        className="w-6 h-6 bg-black rounded-full"
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
