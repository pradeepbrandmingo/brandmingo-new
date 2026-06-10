import { useEffect, useRef } from "react";
import "./HeroBackground.css";


const HeroBackground = () => {
  const cursorRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    const cursor = cursorRef.current;
    if (!bg || !cursor) return;

    let raf;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isInside = false;

    const onMove = (e) => {
      const rect = bg.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      if (!isInside) {
        currentX = targetX;
        currentY = targetY;
        isInside = true;
      }
      cursor.style.opacity = "0.92";
    };

    const onLeave = () => {
      isInside = false;
      cursor.style.opacity = "0";
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      raf = requestAnimationFrame(animate);
    };

    bg.addEventListener("mousemove", onMove, { passive: true });
    bg.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      bg.removeEventListener("mousemove", onMove);
      bg.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-bg" ref={bgRef}>
      {/* grid-lines div removed entirely */}
      <div className="glow-1" />
      <div className="glow-2" />
      <div className="glow-3" />
      <div className="glow-cursor" ref={cursorRef} />
    </div>
  );
};

export default HeroBackground;
