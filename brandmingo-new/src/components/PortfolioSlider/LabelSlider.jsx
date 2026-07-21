import React, { useEffect, useRef, useState } from "react";
// import "./premium-portfolio.css";

const projects = [
  {
    name: "Billionaire Perfume Box",
    category: "Luxury Perfume Packaging",
    tags: ["Packaging Design", "Label Design", "Premium Branding"],
    preview: "#",
    caseStudy: "/portfolio",
    images: ["https://i.ibb.co/gFdQL2fX/Billionaire-jpg.jpg"],
  },
  {
    name: "Suryatra Midnight Detox",
    category: "Skincare Product Packaging",
    tags: ["Package Design", "Label Design", "Product Branding"],
    preview: "#",
    caseStudy: "/portfolio",
    images: ["https://i.ibb.co/yBqZcdG6/image-1.png"],
  },
  {
    name: "Mr. President Perfume",
    category: "Fragrance Packaging",
    tags: ["Luxury Packaging", "Print Design", "Brand Identity"],
    preview: "#",
    caseStudy: "/portfolio",
    images: ["https://i.ibb.co/0R4MyDWZ/Mr-President-1-jpg.jpg"],
  },
  {
    name: "Aureia London Collection",
    category: "Cosmetic Packaging",
    tags: ["Label Design", "Packaging", "Luxury Branding"],
    preview: "#",
    caseStudy: "/portfolio",
    images: ["https://i.ibb.co/27YXjxs2/Aureia-Product-website-size-81.png"],
  },
];

const CARD_GAP = 24;
const SPEED = 0.6;

const LabelSlider = () => {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);

  // Mouse drag
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPosRef = useRef(0);

  // Touch drag
  const isTouchDraggingRef = useRef(false);
  const touchStartXRef = useRef(0);
  const touchStartPosRef = useRef(0);
  const touchMovedRef = useRef(false);

  const [popup, setPopup] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  const allCards = [...projects, ...projects, ...projects];

  const getCardWidth = () => {
    if (window.innerWidth <= 479) return 230;
    if (window.innerWidth <= 767) return 260;
    if (window.innerWidth <= 1199) return 290;
    return 320;
  };

  useEffect(() => {
    const animate = () => {
      if (!isPausedRef.current) {
        posRef.current -= SPEED;
        const track = trackRef.current;
        if (track) {
          const cardWidth = getCardWidth();
          const singleSetWidth = projects.length * (cardWidth + CARD_GAP);
          if (Math.abs(posRef.current) >= singleSetWidth) {
            posRef.current = 0;
          }
          track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ── Mouse Handlers ── */
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    isPausedRef.current = true;
    startXRef.current = e.clientX;
    startPosRef.current = posRef.current;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    posRef.current = startPosRef.current + dx;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    if (!popup) isPausedRef.current = false;
  };

  const handleWheel = (e) => {
    isPausedRef.current = true;
    posRef.current -= e.deltaY * 0.5;
  };

  /* ── Touch Handlers ── */
  const handleTouchStart = (e) => {
    isPausedRef.current = true;
    isTouchDraggingRef.current = true;
    touchMovedRef.current = false;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartPosRef.current = posRef.current;
  };

  const handleTouchMove = (e) => {
    if (!isTouchDraggingRef.current) return;
    const dx = e.touches[0].clientX - touchStartXRef.current;
    if (Math.abs(dx) > 5) {
      touchMovedRef.current = true;
    }
    posRef.current = touchStartPosRef.current + dx;
    if (Math.abs(dx) > 8) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    isTouchDraggingRef.current = false;
    if (!popup) isPausedRef.current = false;
  };

  /* ── Popup ── */
  const openPopup = (p, e) => {
    if (touchMovedRef.current) return;
    e.stopPropagation();
    setPopup(p);
    setActiveImg(0);
    isPausedRef.current = true;
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopup(null);
    isPausedRef.current = false;
    document.body.style.overflow = "";
  };

  return (
    <>
      <section className="ptf-section">
        <div className="ptf-header">
          <span className="ptf-subtitle-tag">Portfolio</span>
          <h3 className="ptf-title">Creative Archive</h3>
        </div>

        <div
          className="ptf-track-wrapper"
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => {
            if (!popup) isPausedRef.current = false;
            handleMouseUp();
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <div ref={trackRef} className="ptf-track">
            {allCards.map((p, i) => (
              <div
                key={i}
                className="ptf-card"
                onClick={(e) => openPopup(p, e)}
              >
                <div className="ptf-card-img-container">
                  <div className="ptf-card-index">
                    0{(i % projects.length) + 1}
                  </div>
                  <img src={p.images[0]} alt={p.name} draggable="false" />
                </div>

                <div className="ptf-card-content">
                  <span className="ptf-card-cat">{p.category}</span>
                  <h3 className="ptf-card-name">{p.name}</h3>
                  <div className="ptf-card-footer">
                    <span className="ptf-explore-text">View Details</span>
                    <div className="ptf-arrow-btn">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPUP ── */}
      {popup && (
        <div className="ptf-popup-overlay" onClick={closePopup}>
          <div className="ptf-popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="ptf-popup-close" onClick={closePopup}>
              ✕
            </button>

            {/* Left: Gallery */}
            <div className="ptf-popup-gallery">
              <div className="ptf-side-thumbs">
                {popup.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`ptf-thumb-item${activeImg === idx ? " active" : ""}`}
                    onMouseEnter={() => setActiveImg(idx)}
                    onClick={() => setActiveImg(idx)}
                  >
                    <img src={img} alt={`thumb-${idx}`} />
                  </div>
                ))}
              </div>
              <div className="ptf-main-view">
                <img src={popup.images[activeImg]} alt="Main View" />
              </div>
            </div>

            {/* Right: Info */}
            <div className="ptf-popup-info">
              <span className="ptf-card-cat">{popup.category}</span>
              <h3 className="ptf-popup-name">{popup.name}</h3>
              <p className="ptf-popup-desc">
                This production-level project focuses on a minimal yet highly
                functional UI to ensure the best user experience for{" "}
                {popup.name}'s target audience. Built with performance and
                aesthetics in mind.
              </p>
              <div className="ptf-popup-btns">
                <a
                  href={popup.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-live"
                >
                  LIVE PREVIEW
                </a>
                {popup.caseStudy && (
                  <a href={popup.caseStudy} className="btn-case">
                    CASE STUDY
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LabelSlider;
