// import { useState, useEffect, useRef, useCallback } from "react";
// import { Link } from "react-router-dom";

// // ─── Project Data ────────────────────────────────────────────────────────────
// const PROJECTS = [
//   {
//     id: "cyberdiag",
//     title: "CyberDiag website",
//     slug: "/projects/cyberdiag",
//     date: "01 2025",
//     img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
//     category: "Website",
//     tags: ["GSAP", "Lenis", "Three.js"],
//     desc: "Showcase website for the CyberDiag app, presenting its features and benefits, and offering download for easy access.",
//   },
//   {
//     id: "anima",
//     title: "Anima",
//     slug: "/projects/anima",
//     date: "06 2025",
//     img: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=800&q=80",
//     category: "Website",
//     tags: ["GSAP", "Lenis"],
//     desc: "Website about animal rights, created to practice web animations with tools like GSAP and Lenis.",
//   },
//   {
//     id: "cyberdiag-app",
//     title: "CyberDiag app",
//     slug: "/projects/cyberdiag-app",
//     date: "09 2025",
//     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
//     category: "Desktop App",
//     tags: ["Python", "GSAP", "Three.js"],
//     desc: "Desktop application designed for SMEs to perform comprehensive cybersecurity diagnostics.",
//   },
//   {
//     id: "zenith",
//     title: "Zenith",
//     slug: "/projects/zenith",
//     date: "11 2025",
//     img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
//     category: "Desktop App",
//     tags: ["Electron", "JavaScript", "Three.js"],
//     desc: "Innovative web browser focused on privacy and performance, featuring a built-in ad blocker.",
//   },
//   {
//     id: "skymcdb",
//     title: "SkymcDB",
//     slug: "/projects/skymcdb",
//     date: "02 2026",
//     img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
//     category: "Desktop App",
//     tags: ["Java", "JavaFX", "CSS"],
//     desc: "A powerful and intuitive tool designed to manage Minecraft building projects.",
//   },
//   {
//     id: "chromablock",
//     title: "ChromaBlock",
//     slug: "/projects/chromablock",
//     date: "03 2026",
//     img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
//     category: "Web App",
//     tags: ["JavaScript", "HTML", "CSS"],
//     desc: "Web adaptation of SkymcDB to reach a wider audience, introducing brand new features.",
//   },
//   {
//     id: "symphony",
//     title: "Symphony",
//     slug: "/projects/symphony",
//     date: "03 2026",
//     img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
//     category: "Web App",
//     tags: ["Netlify", "JavaScript", "HTML/CSS"],
//     desc: "Web application allowing users to host and stream their music library.",
//   },
//   {
//     id: "echo",
//     title: "Echo",
//     slug: "/projects/echo",
//     date: "03 2026",
//     img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
//     category: "AI / Web",
//     tags: ["JavaScript", "HTML/CSS", "AI Local"],
//     desc: "Web interface to interact and chat with a local Artificial Intelligence (Qwen).",
//   },
// ];

// // ─── Hooks ────────────────────────────────────────────────────────────────────
// function usePrefersReducedMotion() {
//   const [prefersReduced, setPrefersReduced] = useState(false);
//   useEffect(() => {
//     const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
//     setPrefersReduced(mq.matches);
//     const handler = (e) => setPrefersReduced(e.matches);
//     mq.addEventListener("change", handler);
//     return () => mq.removeEventListener("change", handler);
//   }, []);
//   return prefersReduced;
// }

// function useIsMobile() {
//   const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);
//   return isMobile;
// }

// // ─── Main Component ───────────────────────────────────────────────────────────
// export default function ProjectssectionAnim() {
//   const [activeIdx, setActiveIdx] = useState(-1);
//   const [cardOpacity, setCardOpacity] = useState(0);
//   const [cardData, setCardData] = useState(PROJECTS[0]);
//   const [tiltX, setTiltX] = useState(0);
//   const [tiltY, setTiltY] = useState(0);
//   const [lineOffset, setLineOffset] = useState(null);
//   const [lineLen, setLineLen] = useState(0);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const [cursorVisible, setCursorVisible] = useState(false);
//   const [previewVisible, setPreviewVisible] = useState(false);

//   const prefersReducedMotion = usePrefersReducedMotion();
//   const isMobile = useIsMobile();

//   const sectionRef = useRef(null);
//   const listRef = useRef(null);
//   const cardRef = useRef(null);
//   const pathRef = useRef(null);
//   const itemRefs = useRef([]);
//   const tiltRAF = useRef(null);
//   const tiltTarget = useRef({ x: 0, y: 0 });
//   const tiltCurrent = useRef({ x: 0, y: 0 });
//   const prevIdxRef = useRef(-1);
//   const switchTimeout = useRef(null);

//   // ── SVG line length ────────────────────────────────────────────────────────
//   useEffect(() => {
//     if (pathRef.current) {
//       const len = pathRef.current.getTotalLength();
//       setLineLen(len);
//       setLineOffset(len);
//     }
//   }, []);

//   // ── Scroll handler ─────────────────────────────────────────────────────────
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current || !pathRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const total = rect.height - window.innerHeight;
//       const scrolled = Math.max(0, Math.min(1, -rect.top / total));

//       if (lineLen > 0) {
//         setLineOffset(prefersReducedMotion ? 0 : lineLen * (1 - scrolled));
//       }

//       const cy = window.innerHeight / 2;
//       let closestIdx = -1;
//       let closestDist = Infinity;

//       itemRefs.current.forEach((el, i) => {
//         if (!el) return;
//         const r = el.getBoundingClientRect();
//         const itemCy = r.top + r.height / 2;
//         const dist = Math.abs(itemCy - cy);
//         const halfH = window.innerHeight / 2;
//         const xOff = Math.min(dist / halfH, 1) * 60;

//         if (!prefersReducedMotion && !isMobile) {
//           el.style.transform = `translateX(${xOff}px)`;
//         }

//         if (dist < closestDist) {
//           closestDist = dist;
//           closestIdx = i;
//         }
//       });

//       const isInView = rect.top < window.innerHeight && rect.bottom > 0;
//       const threshold = window.innerHeight * 0.45;
//       const shouldShow = isInView && closestIdx >= 0 && closestDist < threshold;

//       setPreviewVisible(shouldShow);

//       if (shouldShow) {
//         if (closestIdx !== prevIdxRef.current) {
//           const prev = prevIdxRef.current;
//           prevIdxRef.current = closestIdx;

//           if (prev === -1) {
//             setCardData(PROJECTS[closestIdx]);
//             setActiveIdx(closestIdx);
//             setCardOpacity(1);
//           } else {
//             setCardOpacity(0);
//             clearTimeout(switchTimeout.current);
//             switchTimeout.current = setTimeout(() => {
//               setCardData(PROJECTS[closestIdx]);
//               setActiveIdx(closestIdx);
//               setCardOpacity(1);
//             }, 180);
//           }
//         }
//       } else {
//         prevIdxRef.current = -1;
//         setActiveIdx(-1);
//         setCardOpacity(0);
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       clearTimeout(switchTimeout.current);
//     };
//   }, [lineLen, prefersReducedMotion, isMobile]);

//   // ── 3D tilt loop ───────────────────────────────────────────────────────────
//   useEffect(() => {
//     if (prefersReducedMotion || isMobile) return;
//     const loop = () => {
//       tiltCurrent.current.x +=
//         (tiltTarget.current.x - tiltCurrent.current.x) * 0.1;
//       tiltCurrent.current.y +=
//         (tiltTarget.current.y - tiltCurrent.current.y) * 0.1;
//       setTiltX(tiltCurrent.current.x);
//       setTiltY(tiltCurrent.current.y);
//       tiltRAF.current = requestAnimationFrame(loop);
//     };
//     tiltRAF.current = requestAnimationFrame(loop);
//     return () => cancelAnimationFrame(tiltRAF.current);
//   }, [prefersReducedMotion, isMobile]);

//   // ── Mouse move ─────────────────────────────────────────────────────────────
//   const handleMouseMove = useCallback(
//     (e) => {
//       if (isMobile) return;
//       setCursorPos({ x: e.clientX, y: e.clientY });
//       if (cardRef.current && previewVisible) {
//         const rect = cardRef.current.getBoundingClientRect();
//         const cx = rect.left + rect.width / 2;
//         const cy = rect.top + rect.height / 2;
//         const ry = Math.max(
//           -1,
//           Math.min(1, (e.clientX - cx) / (rect.width / 2)),
//         );
//         const rx = Math.max(
//           -1,
//           Math.min(1, (e.clientY - cy) / (rect.height / 2)),
//         );
//         tiltTarget.current = { x: -rx * 5, y: ry * 6 };
//       }
//     },
//     [isMobile, previewVisible],
//   );

//   // ── Item click ─────────────────────────────────────────────────────────────
//   const handleItemClick = useCallback((i) => {
//     setActiveIdx(i);
//     setCardData(PROJECTS[i]);
//     setCardOpacity(1);
//   }, []);

//   const cardTransform =
//     prefersReducedMotion || isMobile
//       ? "none"
//       : `rotateY(${tiltY.toFixed(2)}deg) rotateX(${tiltX.toFixed(2)}deg)`;

//   return (
//     <>
//       <style>{`
//         .ps-section {
//           position: relative;
//           min-height: 100vh;
//           background: var(--body-bg, #0d0d0d);
//           padding: 120px 0;
//           overflow: hidden;
//         }

//         /* ── Section Title ───────────────── */
//         .ps-section-header {
//           text-align: center;
//           margin-bottom: 80px;
//           position: relative;
//           z-index: 5;
//           padding: 0 20px;
//         }

//         .ps-section-subtitle {
//           display: inline-block;
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: var(--sec-title-subtitle-font-size, 14px);
//           font-weight: var(--sec-title-subtitle-font-weight, 500);
//           color: var(--theme-color1, #ff6b1e);
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           margin-bottom: 12px;
//         }

//         .ps-section-title {
//           font-family: var(--heading-font-family, 'Inter', sans-serif);
//           font-size: var(--h2-font-size, clamp(40px, 5vw, 64px));
//           font-weight: var(--h2-font-weight, 700);
//           color: var(--headings-color, #ffffff);
//           line-height: var(--line-height-heading, 120%);
//           letter-spacing: -0.5px;
//           margin: 0;
//         }

//         /* ── SVG deco ────────────────────── */
//         .ps-svg-wrap {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           z-index: 1;
//           overflow: visible;
//           opacity: 0.15;
//         }

//         .ps-fluid-path {
//           fill: none;
//           stroke: var(--theme-color1, #ff6b1e);
//           stroke-width: 64;
//           stroke-linecap: round;
//           stroke-linejoin: round;
//         }

//         /* ── Layout ──────────────────────── */
//         .ps-inner {
//           position: relative;
//           display: flex;
//           align-items: flex-start;
//           min-height: 100vh;
//           z-index: 10;
//         }

//         /* ── List ────────────────────────── */
//         .ps-list {
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           width: 50%;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           padding-left: clamp(24px, 8vw, 120px);
//           padding-right: 2vw;
//           z-index: 10;
//           list-style: none;
//           margin: 0;
//           padding-top: 0;
//           padding-bottom: 0;
//         }

//         /* ── Item ────────────────────────── */
//         .ps-item {
//           position: relative;
//           font-family: var(--heading-font-family, 'Inter', sans-serif);
//           font-size: clamp(1.6rem, 3.5vw, 3.6rem);
//           font-weight: var(--h2-font-weight, 700);
//           line-height: 1.25;
//           letter-spacing: -0.03em;
//           color: rgba(255, 255, 255, 0.18);
//           padding: 0.55em 0;
//           cursor: pointer;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.07);
//           transition: color 0.45s ease, transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
//           will-change: transform;
//           user-select: none;
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           text-decoration: none;
//         }

//         .ps-item:first-child {
//           border-top: 1px solid rgba(255, 255, 255, 0.07);
//         }

//         .ps-item-number {
//           font-size: 0.55em;
//           font-weight: 500;
//           color: var(--theme-color1, #ff6b1e);
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           min-width: 2ch;
//           font-variant-numeric: tabular-nums;
//         }

//         .ps-item.ps-active {
//           color: #ffffff;
//         }

//         .ps-item.ps-active .ps-item-number {
//           opacity: 1;
//         }

//         .ps-item:hover:not(.ps-active) {
//           color: rgba(255, 255, 255, 0.5);
//         }

//         .ps-item:hover:not(.ps-active) .ps-item-number {
//           opacity: 0.5;
//         }

//         /* Active orange underline accent */
//         .ps-item::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: var(--theme-color1, #ff6b1e);
//           transition: width 0.4s cubic-bezier(0.33, 1, 0.68, 1);
//         }

//         .ps-item.ps-active::after {
//           width: 3rem;
//         }

//         /* ── Preview card ─────────────────── */
//         .ps-preview {
//           position: fixed;
//           top: 0;
//           right: 0;
//           height: 100vh;
//           width: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           perspective: 900px;
//           z-index: 9999;
//           pointer-events: none;
//           transition: opacity 0.4s ease;
//         }

//         .ps-preview.is-visible {
//           pointer-events: auto;
//         }

//         .ps-card {
//           position: relative;
//           width: min(28vw, 420px);
//           transform-style: preserve-3d;
//           will-change: transform;
//           transition: opacity 0.28s ease;
//         }

//         .ps-card-meta {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 10px;
//         }

//         .ps-meta-cat {
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: 0.68rem;
//           font-weight: 600;
//           letter-spacing: 0.12em;
//           color: var(--theme-color1, #ff6b1e);
//           text-transform: uppercase;
//         }

//         .ps-meta-date {
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: 0.68rem;
//           font-weight: 500;
//           letter-spacing: 0.08em;
//           color: rgba(255, 255, 255, 0.3);
//           text-transform: uppercase;
//         }

//         .ps-card-img-wrap {
//           position: relative;
//           overflow: hidden;
//           background: rgba(255, 255, 255, 0.04);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//         }

//         .ps-card-img-wrap::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to bottom,
//             transparent 50%,
//             rgba(13, 13, 13, 0.7) 100%
//           );
//           z-index: 1;
//         }

//         .ps-card-img {
//           width: 100%;
//           aspect-ratio: 4/3;
//           display: block;
//           object-fit: cover;
//           transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
//         }

//         .ps-card:hover .ps-card-img {
//           transform: scale(1.04);
//         }

//         .ps-card-badge {
//           position: absolute;
//           bottom: 14px;
//           right: 14px;
//           z-index: 2;
//           background: var(--theme-color1, #ff6b1e);
//           color: #fff;
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: 0.6rem;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           padding: 0.4em 0.8em;
//         }

//         .ps-card-body {
//           margin-top: 14px;
//           padding-top: 14px;
//           border-top: 1px solid rgba(255, 255, 255, 0.07);
//         }

//         .ps-card-desc {
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: 0.75rem;
//           color: rgba(255, 255, 255, 0.4);
//           line-height: 1.7;
//           letter-spacing: var(--letter-spacing-default, 0.2px);
//           margin: 0 0 12px;
//         }

//         .ps-tags {
//           display: flex;
//           gap: 6px;
//           flex-wrap: wrap;
//         }

//         .ps-tag {
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: 0.6rem;
//           font-weight: 600;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           color: rgba(255, 255, 255, 0.35);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           padding: 0.3em 0.75em;
//           border-radius: 50px;
//           transition: border-color 0.2s, color 0.2s;
//         }

//         .ps-tag:hover {
//           border-color: var(--theme-color1, #ff6b1e);
//           color: var(--theme-color1, #ff6b1e);
//         }

//         .ps-card-link {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           margin-top: 16px;
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: 0.72rem;
//           font-weight: 600;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           color: var(--theme-color1, #ff6b1e);
//           text-decoration: none;
//           transition: gap 0.25s ease;
//         }

//         .ps-card-link:hover {
//           gap: 14px;
//         }

//         .ps-card-link-arrow {
//           font-size: 1rem;
//           line-height: 1;
//         }

//         /* ── Custom cursor ────────────────── */
//         .ps-cursor {
//           position: fixed;
//           pointer-events: none;
//           z-index: 99999;
//           background: var(--theme-color1, #ff6b1e);
//           color: #fff;
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: 0.62rem;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           padding: 0.75em 1.3em;
//           border-radius: 50px;
//           transition: opacity 0.25s ease;
//           white-space: nowrap;
//           top: 0;
//           left: 0;
//           will-change: transform;
//         }

//         /* ── View all btn ─────────────────── */
//         .ps-view-all-wrap {
//           display: flex;
//           justify-content: center;
//           margin-top: 80px;
//           position: relative;
//           z-index: 5;
//         }

//         .ps-view-all-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 16px 40px;
//           background: transparent;
//           border: 1px solid var(--theme-color1, #ff6b1e);
//           color: var(--theme-color1, #ff6b1e);
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: 0.8rem;
//           font-weight: 600;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           text-decoration: none;
//           cursor: pointer;
//           transition: background 0.3s ease, color 0.3s ease;
//         }

//         .ps-view-all-btn:hover {
//           background: var(--theme-color1, #ff6b1e);
//           color: #fff;
//         }

//         /* ── Mobile cards (shown on mobile) ─ */
//         .ps-mobile-cards {
//           display: none;
//           padding: 0 20px;
//           gap: 24px;
//           flex-direction: column;
//         }

//         .ps-mobile-card {
//           display: block;
//           text-decoration: none;
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           overflow: hidden;
//           transition: border-color 0.3s ease;
//         }

//         .ps-mobile-card:hover {
//           border-color: var(--theme-color1, #ff6b1e);
//         }

//         .ps-mobile-card-img {
//           width: 100%;
//           aspect-ratio: 16/9;
//           object-fit: cover;
//           display: block;
//         }

//         .ps-mobile-card-body {
//           padding: 16px;
//         }

//         .ps-mobile-card-top {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 8px;
//         }

//         .ps-mobile-card-cat {
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: 0.65rem;
//           font-weight: 600;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: var(--theme-color1, #ff6b1e);
//         }

//         .ps-mobile-card-date {
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: 0.65rem;
//           color: rgba(255, 255, 255, 0.3);
//         }

//         .ps-mobile-card-title {
//           font-family: var(--heading-font-family, 'Inter', sans-serif);
//           font-size: clamp(1.1rem, 4vw, 1.4rem);
//           font-weight: 700;
//           color: #fff;
//           margin: 0 0 6px;
//           line-height: 1.2;
//         }

//         .ps-mobile-card-desc {
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: 0.75rem;
//           color: rgba(255, 255, 255, 0.4);
//           line-height: 1.65;
//           margin: 0 0 12px;
//         }

//         .ps-mobile-card-tags {
//           display: flex;
//           gap: 6px;
//           flex-wrap: wrap;
//         }

//         .ps-mobile-card-tag {
//           font-family: var(--body-font-family, 'Poppins', sans-serif);
//           font-size: 0.58rem;
//           font-weight: 600;
//           letter-spacing: 0.07em;
//           text-transform: uppercase;
//           color: rgba(255, 255, 255, 0.3);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           padding: 0.25em 0.65em;
//           border-radius: 50px;
//         }

//         /* ── Responsive overrides ─────────── */
//         @media (max-width: 768px) {
//           .ps-section {
//             padding: 80px 0 60px;
//           }

//           .ps-section-header {
//             margin-bottom: 48px;
//           }

//           .ps-inner {
//             display: none;
//           }

//           .ps-preview,
//           .ps-cursor {
//             display: none !important;
//           }

//           .ps-mobile-cards {
//             display: flex;
//           }

//           .ps-view-all-wrap {
//             margin-top: 48px;
//           }
//         }

//         @media (min-width: 769px) and (max-width: 1024px) {
//           .ps-list {
//             padding-left: 5vw;
//             width: 52%;
//           }

//           .ps-card {
//             width: min(34vw, 360px);
//           }

//           .ps-item {
//             font-size: clamp(1.4rem, 2.8vw, 2.6rem);
//           }
//         }

//         @media (min-width: 1600px) {
//           .ps-list {
//             padding-left: 12vw;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .ps-item,
//           .ps-card-img,
//           .ps-card-link,
//           .ps-view-all-btn {
//             transition: none !important;
//           }
//           .ps-fluid-path {
//             transition: none !important;
//           }
//         }

//         .ps-item:focus-visible {
//           outline: 2px solid var(--theme-color1, #ff6b1e);
//           outline-offset: 6px;
//           border-radius: 2px;
//         }
//       `}</style>

//       <section
//         ref={sectionRef}
//         className="ps-section"
//         onMouseMove={handleMouseMove}
//         aria-label="Projects showcase"
//       >
//         {/* Section Header */}
//         <header className="ps-section-header">
//           <p className="ps-section-subtitle">Our Work</p>
//           <h2 className="ps-section-title">Featured Projects</h2>
//         </header>

//         {/* Decorative SVG */}
//         <svg
//           className="ps-svg-wrap"
//           viewBox="0 0 1400 1200"
//           preserveAspectRatio="xMidYMid slice"
//           aria-hidden="true"
//           focusable="false"
//         >
//           <path
//             ref={pathRef}
//             className="ps-fluid-path"
//             d="M -80,0 C 300,-20 600,150 540,400 C 490,650 0,655 300,900 C 600,1100 650,1000 850,950 C 1050,900 1350,1000 1540,1050"
//             style={{
//               strokeDasharray: lineLen || 3000,
//               strokeDashoffset:
//                 lineOffset !== null ? lineOffset : lineLen || 3000,
//               transition: "stroke-dashoffset 0.12s linear",
//             }}
//           />
//         </svg>

//         {/* Desktop layout */}
//         <div className="ps-inner">
//           <nav
//             ref={listRef}
//             className="ps-list"
//             aria-label="Project list"
//             role="list"
//           >
//             {PROJECTS.map((proj, i) => (
//               <Link
//                 key={proj.id}
//                 to={proj.slug}
//                 ref={(el) => (itemRefs.current[i] = el)}
//                 className={`ps-item${activeIdx === i ? " ps-active" : ""}`}
//                 role="listitem"
//                 aria-current={activeIdx === i ? "true" : undefined}
//                 aria-label={`${proj.title} — ${proj.category}, ${proj.date}`}
//                 onClick={() => handleItemClick(i)}
//                 onFocus={() => handleItemClick(i)}
//               >
//                 <span className="ps-item-number" aria-hidden="true">
//                   {String(i + 1).padStart(2, "0")}
//                 </span>
//                 {proj.title}
//               </Link>
//             ))}
//           </nav>
//         </div>

//         {/* Desktop preview card */}
//         {!isMobile && (
//           <div
//             className={`ps-preview${previewVisible ? " is-visible" : ""}`}
//             style={{ opacity: previewVisible ? 1 : 0 }}
//             aria-hidden={!previewVisible}
//           >
//             <div
//               ref={cardRef}
//               className="ps-card"
//               style={{
//                 opacity: cardOpacity,
//                 transform: cardTransform,
//               }}
//               onMouseEnter={() => setCursorVisible(true)}
//               onMouseLeave={() => {
//                 setCursorVisible(false);
//                 tiltTarget.current = { x: 0, y: 0 };
//               }}
//             >
//               <div className="ps-card-meta">
//                 <span className="ps-meta-cat">{cardData.category}</span>
//                 <span className="ps-meta-date">{cardData.date}</span>
//               </div>

//               <div className="ps-card-img-wrap">
//                 <img
//                   src={cardData.img}
//                   alt={cardData.title}
//                   className="ps-card-img"
//                   loading="lazy"
//                   decoding="async"
//                   width={420}
//                   height={315}
//                 />
//                 <span className="ps-card-badge">{cardData.category}</span>
//               </div>

//               <div className="ps-card-body">
//                 <p className="ps-card-desc">{cardData.desc}</p>
//                 <div className="ps-tags" aria-label="Technologies">
//                   {cardData.tags.map((tag) => (
//                     <span key={tag} className="ps-tag">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <Link
//                   to={cardData.slug}
//                   className="ps-card-link"
//                   tabIndex={previewVisible ? 0 : -1}
//                   aria-label={`View ${cardData.title} project`}
//                 >
//                   View Project
//                   <span className="ps-card-link-arrow" aria-hidden="true">
//                     ↗
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Mobile project cards */}
//         <div className="ps-mobile-cards" aria-label="Projects list">
//           {PROJECTS.map((proj) => (
//             <Link
//               key={proj.id}
//               to={proj.slug}
//               className="ps-mobile-card"
//               aria-label={`${proj.title} — ${proj.category}`}
//             >
//               <img
//                 src={proj.img}
//                 alt={proj.title}
//                 className="ps-mobile-card-img"
//                 loading="lazy"
//                 decoding="async"
//                 width={600}
//                 height={337}
//               />
//               <div className="ps-mobile-card-body">
//                 <div className="ps-mobile-card-top">
//                   <span className="ps-mobile-card-cat">{proj.category}</span>
//                   <span className="ps-mobile-card-date">{proj.date}</span>
//                 </div>
//                 <h3 className="ps-mobile-card-title">{proj.title}</h3>
//                 <p className="ps-mobile-card-desc">{proj.desc}</p>
//                 <div className="ps-mobile-card-tags">
//                   {proj.tags.map((tag) => (
//                     <span key={tag} className="ps-mobile-card-tag">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* View All CTA */}
//         <div className="ps-view-all-wrap">
//           <Link
//             to="/projects"
//             className="ps-view-all-btn"
//             aria-label="View all projects"
//           >
//             View All Projects
//             <span aria-hidden="true">→</span>
//           </Link>
//         </div>

//         {/* Custom cursor (desktop) */}
//         {!isMobile && (
//           <div
//             className="ps-cursor"
//             aria-hidden="true"
//             style={{
//               opacity: cursorVisible && previewVisible ? 1 : 0,
//               transform: `translate(calc(${cursorPos.x}px - 50%), calc(${cursorPos.y}px - 50%))`,
//             }}
//           >
//             Open ↗
//           </div>
//         )}
//       </section>
//     </>
//   );
// }

// import { useEffect, useRef } from "react";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// /* ─── project data ──────────────────────────────────────────────────────── */
// const PROJECTS = [
//   {
//     id: "cyberdiag",
//     title: "CyberDiag website",
//     date: "01 2025",
//     cover: "assets/images/projects/Covers/cyberDiag_web.avif",
//     desc: "Showcase website for the CyberDiag app, presenting its features and benefits, and offering download for easy access.",
//     category: "Website",
//     year: "2026",
//     tags: ["Gsap", "Lenis", "Three.js"],
//     images: [
//       "assets/images/projects/CyberDiagWebsite/image1.png",
//       "assets/images/projects/CyberDiagWebsite/image2.png",
//       "assets/images/projects/CyberDiagWebsite/image3.png",
//     ],
//   },
//   {
//     id: "anima",
//     title: "Anima",
//     date: "06 2025",
//     cover: "assets/images/projects/Covers/Anima.avif",
//     desc: "Website about animal rights, created to practice web animations with tools like GSAP and Lenis.",
//     category: "Website",
//     year: "2026",
//     tags: ["Gsap", "Lenis"],
//     images: [
//       "assets/images/projects/Anima/image1.png",
//       "assets/images/projects/Anima/image2.png",
//       "assets/images/projects/Anima/image3.png",
//     ],
//   },
//   {
//     id: "cyberdiag-app",
//     title: "CyberDiag app",
//     date: "09 2025",
//     cover: "assets/images/projects/Covers/CyberDiag.avif",
//     desc: "Desktop application designed for SMEs to perform comprehensive cybersecurity diagnostics.",
//     category: "Desktop App",
//     year: "2026",
//     tags: ["Python", "Gsap", "Three.js"],
//     images: [
//       "assets/images/projects/cyberdiag/image1.png",
//       "assets/images/projects/cyberdiag/image2.png",
//       "assets/images/projects/cyberdiag/image3.png",
//     ],
//   },
//   {
//     id: "zenith",
//     title: "Zenith",
//     date: "11 2025",
//     cover: "assets/images/projects/Covers/Zenith.avif",
//     desc: "Innovative web browser focused on privacy and performance, featuring a built-in ad blocker.",
//     category: "Desktop App",
//     year: "2026",
//     tags: ["Electron", "JavaScript", "Three.js"],
//     images: [
//       "assets/images/projects/Zenith/image1.png",
//       "assets/images/projects/Zenith/image2.png",
//       "assets/images/projects/Zenith/image3.png",
//     ],
//   },
//   {
//     id: "skymcdb",
//     title: "SkymcDB",
//     date: "02 2026",
//     cover: "assets/images/projects/Covers/SkymcDB.avif",
//     desc: "A powerful and intuitive tool designed to manage, organize, and optimize your Minecraft building projects.",
//     category: "Desktop App",
//     year: "2024",
//     tags: ["Java", "JavaFX", "CSS"],
//     images: [
//       "assets/images/projects/skymcdb/image.png",
//       "assets/images/projects/skymcdb/image2.png",
//       "assets/images/projects/skymcdb/image3.png",
//     ],
//   },
//   {
//     id: "chromablock",
//     title: "ChromaBlock",
//     date: "03 2026",
//     cover: "assets/images/projects/Covers/ChromaBlock.avif",
//     desc: "Web adaptation of SkymcDB to reach a wider audience, introducing brand new features for Minecraft builders.",
//     category: "Web Application",
//     year: "2024",
//     tags: ["JavaScript", "HTML", "CSS"],
//     images: [
//       "assets/images/projects/chromablock/image1.png",
//       "assets/images/projects/chromablock/image2.png",
//       "assets/images/projects/chromablock/image3.png",
//     ],
//   },
//   {
//     id: "symphony",
//     title: "Symphony",
//     date: "03 2026",
//     cover: "assets/images/projects/Covers/Symphony.avif",
//     desc: "Web application allowing users to host and stream their music, as well as discover music published by others.",
//     category: "Web Application",
//     year: "2024",
//     tags: ["Netlify Functions", "JavaScript", "HTML/CSS"],
//     images: [
//       "assets/images/projects/symphony/image2.png",
//       "assets/images/projects/symphony/image.png",
//       "assets/images/projects/symphony/image3.png",
//     ],
//   },
//   {
//     id: "echo",
//     title: "Echo",
//     date: "03 2026",
//     cover: "assets/images/projects/Covers/Echo.avif",
//     desc: "Web interface to interact and chat with a local Artificial Intelligence (Qwen). Smooth and private conversational experience.",
//     category: "AI / Web",
//     year: "2024",
//     tags: ["JavaScript", "HTML/CSS", "AI Local"],
//     images: ["assets/images/projects/echo/image.png"],
//   },
// ];

// /* ─── component ─────────────────────────────────────────────────────────── */
// export default function ProjectsSectionAnim({ lenis: externalLenis }) {
//   const sectionRef = useRef(null);
//   const listRef = useRef(null);
//   const cardRef = useRef(null);
//   const coverRef = useRef(null);
//   const dateRef = useRef(null);
//   const previewRef = useRef(null);
//   const cursorRef = useRef(null);
//   const lineRef = useRef(null);
//   const itemRefs = useRef([]);

//   /* tilt state — stored in ref so RAF doesn't cause re-renders */
//   const tilt = useRef({ ry: 0, rx: 0, targetRY: 0, targetRX: 0 });
//   const currentIdxRef = useRef(-1);
//   const visibleRef = useRef(false);
//   const lenisRef = useRef(null);

//   useEffect(() => {
//     lenisRef.current = externalLenis || null;

//     const items = itemRefs.current;
//     const card = cardRef.current;
//     const cover = coverRef.current;
//     const dateEl = dateRef.current;
//     const preview = previewRef.current;
//     const cursor = cursorRef.current;
//     const section = sectionRef.current;

//     if (!items.length || !card) return;

//     /* ── preload covers ── */
//     PROJECTS.forEach((p) => {
//       const img = new Image();
//       img.src = p.cover;
//       if (img.decode) img.decode().catch(() => {});
//     });

//     gsap.set(card, { opacity: 0 });

//     /* ── quickTo helpers for cursor ── */
//     const qCursorX = gsap.quickTo(cursor, "left", {
//       duration: 0.35,
//       ease: "power3.out",
//     });
//     const qCursorY = gsap.quickTo(cursor, "top", {
//       duration: 0.35,
//       ease: "power3.out",
//     });

//     /* ── quickTo per item for horizontal nudge ── */
//     const itemQuickX = items.map((item) =>
//       gsap.quickTo(item, "x", { duration: 0.6, ease: "power2.out" }),
//     );

//     /* ── activate / deactivate ── */
//     function deactivateAll() {
//       if (currentIdxRef.current >= 0) {
//         items[currentIdxRef.current].classList.remove("psa-proj-item--active");
//       }
//       currentIdxRef.current = -1;
//       gsap.to(card, { opacity: 0, duration: 0.25, ease: "power2.in" });
//     }

//     function activateProject(i) {
//       if (i === currentIdxRef.current) return;
//       const prev = currentIdxRef.current;
//       if (prev >= 0) items[prev].classList.remove("psa-proj-item--active");
//       items[i].classList.add("psa-proj-item--active");

//       if (prev === -1) {
//         cover.src = PROJECTS[i].cover;
//         dateEl.textContent = PROJECTS[i].date;
//         gsap.to(card, { opacity: 1, duration: 0.4, ease: "power2.out" });
//       } else {
//         gsap.to(card, {
//           opacity: 0,
//           duration: 0.18,
//           ease: "power2.in",
//           onComplete: () => {
//             cover.src = PROJECTS[i].cover;
//             dateEl.textContent = PROJECTS[i].date;
//             gsap.to(card, { opacity: 1, duration: 0.3, ease: "power2.out" });
//           },
//         });
//       }
//       currentIdxRef.current = i;
//     }

//     /* ── scroll-based activation (mirrors original onProjectsScroll) ── */
//     function onProjectsScroll() {
//       if (!visibleRef.current) {
//         if (currentIdxRef.current >= 0) deactivateAll();
//         return;
//       }
//       const cy = window.innerHeight / 2;
//       const halfH = window.innerHeight / 2;
//       let closestIdx = -1;
//       let closestDist = Infinity;

//       items.forEach((item, i) => {
//         const rect = item.getBoundingClientRect();
//         const itemCy = rect.top + rect.height / 2;
//         const dist = Math.abs(itemCy - cy);
//         itemQuickX[i](Math.min(dist / halfH, 1) * 80);
//         if (dist < closestDist) {
//           closestDist = dist;
//           closestIdx = i;
//         }
//       });

//       if (closestIdx >= 0 && closestDist < window.innerHeight * 0.45) {
//         activateProject(closestIdx);
//       } else {
//         deactivateAll();
//       }
//     }

//     /* ── visibility trigger ── */
//     const visTrigger = ScrollTrigger.create({
//       trigger: section,
//       start: "top 80%",
//       end: "bottom 20%",
//       onEnter: () => {
//         preview.classList.add("psa-proj-preview--visible");
//         visibleRef.current = true;
//       },
//       onLeave: () => {
//         preview.classList.remove("psa-proj-preview--visible");
//         visibleRef.current = false;
//       },
//       onEnterBack: () => {
//         preview.classList.add("psa-proj-preview--visible");
//         visibleRef.current = true;
//       },
//       onLeaveBack: () => {
//         preview.classList.remove("psa-proj-preview--visible");
//         visibleRef.current = false;
//       },
//     });

//     /* ── lenis scroll listener ── */
//     const lenis = lenisRef.current;
//     if (lenis) {
//       lenis.on("scroll", onProjectsScroll);
//     } else {
//       window.addEventListener("scroll", onProjectsScroll, { passive: true });
//     }
//     onProjectsScroll();

//     /* ── mouse: cursor + tilt ── */
//     function onMouseMove(e) {
//       if (visibleRef.current) {
//         qCursorX(e.clientX);
//         qCursorY(e.clientY);

//         const rect = card.getBoundingClientRect();
//         const cx = rect.left + rect.width / 2;
//         const cy2 = rect.top + rect.height / 2;
//         const ry = Math.max(
//           -1,
//           Math.min(1, (e.clientX - cx) / (rect.width / 2)),
//         );
//         const rx = Math.max(
//           -1,
//           Math.min(1, (e.clientY - cy2) / (rect.height / 2)),
//         );
//         tilt.current.targetRY = ry * 6;
//         tilt.current.targetRX = -rx * 5;
//       }
//     }
//     document.addEventListener("mousemove", onMouseMove);

//     /* ── tilt RAF ── */
//     let tiltRafId;
//     function tiltLoop() {
//       tiltRafId = requestAnimationFrame(tiltLoop);
//       if (!visibleRef.current) return;
//       const t = tilt.current;
//       t.ry += (t.targetRY - t.ry) * 0.12;
//       t.rx += (t.targetRX - t.rx) * 0.12;
//       card.style.transform = `rotateY(${t.ry.toFixed(2)}deg) rotateX(${t.rx.toFixed(2)}deg)`;
//     }
//     tiltLoop();

//     /* ── cursor enter/leave on cover ── */
//     cover.addEventListener("mouseenter", () =>
//       cursor.classList.add("psa-proj-cursor--active"),
//     );
//     cover.addEventListener("mouseleave", () =>
//       cursor.classList.remove("psa-proj-cursor--active"),
//     );

//     /* ── fluid line animation ── */
//     const linePath = lineRef.current;
//     if (linePath) {
//       const lineLen = linePath.getTotalLength();
//       gsap.set(linePath, {
//         strokeDasharray: lineLen,
//         strokeDashoffset: lineLen,
//       });
//       gsap.to(linePath, {
//         strokeDashoffset: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: section,
//           start: "top 70%",
//           end: "bottom 20%",
//           scrub: 1,
//         },
//       });
//     }

//     /* ── per-item scroll-based lenis lerp slowdown ── */
//     items.forEach((item) => {
//       ScrollTrigger.create({
//         trigger: item,
//         start: "top 52%",
//         end: "bottom 48%",
//         onEnter: () => lenis && lenis.options && (lenis.options.lerp = 0.04),
//         onLeave: () => lenis && lenis.options && (lenis.options.lerp = 0.06),
//         onEnterBack: () =>
//           lenis && lenis.options && (lenis.options.lerp = 0.04),
//         onLeaveBack: () =>
//           lenis && lenis.options && (lenis.options.lerp = 0.06),
//       });
//     });

//     return () => {
//       visTrigger.kill();
//       cancelAnimationFrame(tiltRafId);
//       document.removeEventListener("mousemove", onMouseMove);
//       if (lenis) lenis.off("scroll", onProjectsScroll);
//       else window.removeEventListener("scroll", onProjectsScroll);
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, [externalLenis]);

//   return (
//     <>
//       {/* ── inline styles (mirrors original CSS exactly) ── */}
//       <style>{`
//         /* ── projects section ── */
//         .psa-projects {
//           position: relative;
//           padding: 20vh 0;
//           min-height: 100vh;
//           z-index: 20010;
//           background: #0a0a0a;
//         }

//         .psa-projects-inner {
//           position: relative;
//           display: flex;
//           align-items: flex-start;
//           min-height: 100vh;
//         }

//         /* ── sticky list ── */
//         .psa-projects-list {
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           width: 45%;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           padding-left: 12vw;
//           gap: 0;
//           z-index: 10;
//         }

//         /* ── individual project item ── */
//         .psa-proj-item {
//           font-family: "Breton", sans-serif;
//           font-size: clamp(2rem, 4vw, 4rem);
//           line-height: 1.3;
//           letter-spacing: -0.02em;
//           color: rgba(255, 255, 255, 0.2);
//           padding: 0.6em 0;
//           cursor: pointer;
//           transition: color 0.5s ease;
//           white-space: nowrap;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.08);
//           user-select: none;
//         }

//         .psa-proj-item:first-child {
//           border-top: 1px solid rgba(255, 255, 255, 0.08);
//         }

//         .psa-proj-item--active {
//           color: #f0f0f0;
//         }

//         /* ── preview card (fixed) ── */
//         .psa-proj-preview {
//           position: fixed;
//           top: 0;
//           right: 0;
//           height: 100vh;
//           width: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           perspective: 800px;
//           pointer-events: none;
//           opacity: 0;
//           z-index: 30005;
//           transition: opacity 0.4s ease;
//         }

//         .psa-proj-preview--visible {
//           pointer-events: auto;
//           opacity: 1;
//         }

//         .psa-proj-card {
//           position: relative;
//           width: min(30vw, 440px);
//           transition: opacity 0.4s ease;
//           will-change: transform;
//           transform-style: preserve-3d;
//         }

//         .psa-proj-card img {
//           width: 100%;
//           height: auto;
//           display: block;
//           object-fit: cover;
//           cursor: none;
//         }

//         .psa-proj-meta {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 0.6rem;
//         }

//         .psa-proj-date,
//         .psa-proj-label {
//           font-family: "Inter", sans-serif;
//           font-size: 0.75rem;
//           font-weight: 600;
//           letter-spacing: 0.1em;
//           color: rgba(255, 255, 255, 0.45);
//           text-transform: uppercase;
//         }

//         /* ── custom cursor ── */
//         .psa-proj-cursor {
//           position: fixed;
//           pointer-events: none;
//           z-index: 30006;
//           opacity: 0;
//           transform: translate(-50%, -50%);
//           background: #f0f0f0;
//           color: #0a0a0a;
//           font-family: "Inter", sans-serif;
//           font-size: 0.7rem;
//           font-weight: 700;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           padding: 1em 1.6em;
//           border-radius: 50px;
//           transition: opacity 0.3s ease, transform 0.3s ease;
//           white-space: nowrap;
//         }

//         .psa-proj-cursor--active {
//           opacity: 1;
//         }

//         /* ── fluid SVG line ── */
//         .psa-fluid-line-svg {
//           position: absolute;
//           top: -30vh;
//           left: 0;
//           width: 100%;
//           height: calc(100% + 100vh);
//           pointer-events: none;
//           z-index: 1;
//           overflow: visible;
//         }

//         .psa-fluid-line {
//           fill: none;
//           stroke: #ff6b1e;
//           stroke-width: 72;
//           stroke-linecap: round;
//           stroke-linejoin: round;
//         }

//         /* ── mobile ── */
//         @media (max-width: 768px) {
//           .psa-projects {
//             padding: 35vh 0 10vh;
//           }
//           .psa-projects-inner {
//             flex-direction: column;
//           }
//           .psa-projects-list {
//             position: relative;
//             top: auto;
//             width: 100%;
//             height: auto;
//             padding-left: 1.5rem;
//             padding-right: 1.5rem;
//           }
//           .psa-proj-item {
//             white-space: normal;
//             font-size: clamp(1.6rem, 7vw, 2.5rem);
//           }
//           .psa-proj-preview {
//             display: none !important;
//           }
//           .psa-proj-cursor {
//             display: none;
//           }
//         }
//       `}</style>

//       {/* ── markup ── */}
//       <div className="psa-projects" id="projects" ref={sectionRef}>
//         {/* fluid decorative SVG line */}
//         <svg
//           className="psa-fluid-line-svg"
//           viewBox="0 0 1400 1400"
//           preserveAspectRatio="xMidYMid slice"
//           aria-hidden="true"
//         >
//           <path
//             className="psa-fluid-line"
//             ref={lineRef}
//             d="
//               M -80,0
//               C 300,-20  600,150  540,400
//               C 490,650   0,655    300,1050
//               C 600,1385 650,1250 850,1200
//               C 1050,1150 1350,1250 1540,1300
//             "
//           />
//         </svg>

//         <div className="psa-projects-inner">
//           {/* ── sticky project list ── */}
//           <div className="psa-projects-list" ref={listRef}>
//             {PROJECTS.map((proj, i) => (
//               <div
//                 key={proj.id}
//                 className="psa-proj-item"
//                 ref={(el) => (itemRefs.current[i] = el)}
//                 data-id={proj.id}
//               >
//                 {proj.title}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── fixed preview card ── */}
//         <div className="psa-proj-preview" ref={previewRef} id="proj-preview">
//           <div
//             className="psa-proj-card"
//             ref={cardRef}
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <div className="psa-proj-meta">
//               <span className="psa-proj-date" ref={dateRef}>
//                 -- ----
//               </span>
//               <span className="psa-proj-label">Project</span>
//             </div>
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               ref={coverRef}
//               src=""
//               alt="project preview"
//               draggable={false}
//             />
//           </div>
//         </div>
//       </div>

//       {/* ── custom cursor pill ── */}
//       <div className="psa-proj-cursor" ref={cursorRef}>
//         View
//       </div>
//     </>
//   );
// }

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── project data ──────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "cyberdiag",
    title: "CyberDiag website",
    date: "01 2025",
    cover:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    desc: "Showcase website for the CyberDiag app, presenting its features and benefits, and offering download for easy access.",
    category: "Website",
    year: "2026",
    tags: ["Gsap", "Lenis", "Three.js"],
    images: [
      "assets/images/projects/CyberDiagWebsite/image1.png",
      "assets/images/projects/CyberDiagWebsite/image2.png",
      "assets/images/projects/CyberDiagWebsite/image3.png",
    ],
  },
  {
    id: "anima",
    title: "Anima",
    date: "06 2025",
    cover:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    desc: "Website about animal rights, created to practice web animations with tools like GSAP and Lenis.",
    category: "Website",
    year: "2026",
    tags: ["Gsap", "Lenis"],
    images: [
      "assets/images/projects/Anima/image1.png",
      "assets/images/projects/Anima/image2.png",
      "assets/images/projects/Anima/image3.png",
    ],
  },
  {
    id: "cyberdiag-app",
    title: "CyberDiag app",
    date: "09 2025",
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    desc: "Desktop application designed for SMEs to perform comprehensive cybersecurity diagnostics.",
    category: "Desktop App",
    year: "2026",
    tags: ["Python", "Gsap", "Three.js"],
    images: [
      "assets/images/projects/cyberdiag/image1.png",
      "assets/images/projects/cyberdiag/image2.png",
      "assets/images/projects/cyberdiag/image3.png",
    ],
  },
  {
    id: "zenith",
    title: "Zenith",
    date: "11 2025",
    cover:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    desc: "Innovative web browser focused on privacy and performance, featuring a built-in ad blocker.",
    category: "Desktop App",
    year: "2026",
    tags: ["Electron", "JavaScript", "Three.js"],
    images: [
      "assets/images/projects/Zenith/image1.png",
      "assets/images/projects/Zenith/image2.png",
      "assets/images/projects/Zenith/image3.png",
    ],
  },
  {
    id: "skymcdb",
    title: "SkymcDB",
    date: "02 2026",
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    desc: "A powerful and intuitive tool designed to manage, organize, and optimize your Minecraft building projects.",
    category: "Desktop App",
    year: "2024",
    tags: ["Java", "JavaFX", "CSS"],
    images: [
      "assets/images/projects/skymcdb/image.png",
      "assets/images/projects/skymcdb/image2.png",
      "assets/images/projects/skymcdb/image3.png",
    ],
  },
  {
    id: "chromablock",
    title: "ChromaBlock",
    date: "03 2026",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    desc: "Web adaptation of SkymcDB to reach a wider audience, introducing brand new features for Minecraft builders.",
    category: "Web Application",
    year: "2024",
    tags: ["JavaScript", "HTML", "CSS"],
    images: [
      "assets/images/projects/chromablock/image1.png",
      "assets/images/projects/chromablock/image2.png",
      "assets/images/projects/chromablock/image3.png",
    ],
  },
  {
    id: "symphony",
    title: "Symphony",
    date: "03 2026",
    cover:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    desc: "Web application allowing users to host and stream their music, as well as discover music published by others.",
    category: "Web Application",
    year: "2024",
    tags: ["Netlify Functions", "JavaScript", "HTML/CSS"],
    images: [
      "assets/images/projects/symphony/image2.png",
      "assets/images/projects/symphony/image.png",
      "assets/images/projects/symphony/image3.png",
    ],
  },
  {
    id: "echo",
    title: "Echo",
    date: "03 2026",
    cover:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    desc: "Web interface to interact and chat with a local Artificial Intelligence (Qwen). Smooth and private conversational experience.",
    category: "AI / Web",
    year: "2024",
    tags: ["JavaScript", "HTML/CSS", "AI Local"],
    images: ["assets/images/projects/echo/image.png"],
  },
];

/* ─── component ─────────────────────────────────────────────────────────── */
export default function ProjectsSectionAnim({ lenis: externalLenis }) {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const cardRef = useRef(null);
  const coverRef = useRef(null);
  const dateRef = useRef(null);
  const previewRef = useRef(null);
  const cursorRef = useRef(null);
  const lineRef = useRef(null);
  const itemRefs = useRef([]);

  /* tilt state — stored in ref so RAF doesn't cause re-renders */
  const tilt = useRef({ ry: 0, rx: 0, targetRY: 0, targetRX: 0 });
  const currentIdxRef = useRef(-1);
  const visibleRef = useRef(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = externalLenis || null;

    const items = itemRefs.current;
    const card = cardRef.current;
    const cover = coverRef.current;
    const dateEl = dateRef.current;
    const preview = previewRef.current;
    const cursor = cursorRef.current;
    const section = sectionRef.current;

    if (!items.length || !card) return;

    /* ── preload covers ── */
    PROJECTS.forEach((p) => {
      const img = new Image();
      img.src = p.cover;
      if (img.decode) img.decode().catch(() => {});
    });

    gsap.set(card, { opacity: 0 });

    /* ── quickTo helpers for cursor ── */
    const qCursorX = gsap.quickTo(cursor, "left", {
      duration: 0.35,
      ease: "power3.out",
    });
    const qCursorY = gsap.quickTo(cursor, "top", {
      duration: 0.35,
      ease: "power3.out",
    });

    /* ── quickTo per item for horizontal nudge ── */
    const itemQuickX = items.map((item) =>
      gsap.quickTo(item, "x", { duration: 0.6, ease: "power2.out" }),
    );

    /* ── activate / deactivate ── */
    function deactivateAll() {
      if (currentIdxRef.current >= 0) {
        items[currentIdxRef.current].classList.remove("psa-proj-item--active");
      }
      currentIdxRef.current = -1;
      gsap.to(card, { opacity: 0, duration: 0.25, ease: "power2.in" });
    }

    function activateProject(i) {
      if (i === currentIdxRef.current) return;
      const prev = currentIdxRef.current;
      if (prev >= 0) items[prev].classList.remove("psa-proj-item--active");
      items[i].classList.add("psa-proj-item--active");

      if (prev === -1) {
        cover.src = PROJECTS[i].cover;
        dateEl.textContent = PROJECTS[i].date;
        gsap.to(card, { opacity: 1, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(card, {
          opacity: 0,
          duration: 0.18,
          ease: "power2.in",
          onComplete: () => {
            cover.src = PROJECTS[i].cover;
            dateEl.textContent = PROJECTS[i].date;
            gsap.to(card, { opacity: 1, duration: 0.3, ease: "power2.out" });
          },
        });
      }
      currentIdxRef.current = i;
    }

    /* ── scroll-based activation (mirrors original onProjectsScroll) ── */
    function onProjectsScroll() {
      if (!visibleRef.current) {
        if (currentIdxRef.current >= 0) deactivateAll();
        return;
      }
      const cy = window.innerHeight / 2;
      const halfH = window.innerHeight / 2;
      let closestIdx = -1;
      let closestDist = Infinity;

      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        const itemCy = rect.top + rect.height / 2;
        const dist = Math.abs(itemCy - cy);
        itemQuickX[i](Math.min(dist / halfH, 1) * 80);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });

      if (closestIdx >= 0 && closestDist < window.innerHeight * 0.45) {
        activateProject(closestIdx);
      } else {
        deactivateAll();
      }
    }

    /* ── visibility trigger ── */
    const visTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        preview.classList.add("psa-proj-preview--visible");
        visibleRef.current = true;
      },
      onLeave: () => {
        preview.classList.remove("psa-proj-preview--visible");
        visibleRef.current = false;
      },
      onEnterBack: () => {
        preview.classList.add("psa-proj-preview--visible");
        visibleRef.current = true;
      },
      onLeaveBack: () => {
        preview.classList.remove("psa-proj-preview--visible");
        visibleRef.current = false;
      },
    });

    /* ── lenis scroll listener ── */
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.on("scroll", onProjectsScroll);
    } else {
      window.addEventListener("scroll", onProjectsScroll, { passive: true });
    }
    onProjectsScroll();

    /* ── mouse: cursor + tilt ── */
    function onMouseMove(e) {
      if (visibleRef.current) {
        qCursorX(e.clientX);
        qCursorY(e.clientY);

        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy2 = rect.top + rect.height / 2;
        const ry = Math.max(
          -1,
          Math.min(1, (e.clientX - cx) / (rect.width / 2)),
        );
        const rx = Math.max(
          -1,
          Math.min(1, (e.clientY - cy2) / (rect.height / 2)),
        );
        tilt.current.targetRY = ry * 6;
        tilt.current.targetRX = -rx * 5;
      }
    }
    document.addEventListener("mousemove", onMouseMove);

    /* ── tilt RAF ── */
    let tiltRafId;
    function tiltLoop() {
      tiltRafId = requestAnimationFrame(tiltLoop);
      if (!visibleRef.current) return;
      const t = tilt.current;
      t.ry += (t.targetRY - t.ry) * 0.12;
      t.rx += (t.targetRX - t.rx) * 0.12;
      card.style.transform = `rotateY(${t.ry.toFixed(2)}deg) rotateX(${t.rx.toFixed(2)}deg)`;
    }
    tiltLoop();

    /* ── cursor enter/leave on cover ── */
    cover.addEventListener("mouseenter", () =>
      cursor.classList.add("psa-proj-cursor--active"),
    );
    cover.addEventListener("mouseleave", () =>
      cursor.classList.remove("psa-proj-cursor--active"),
    );

    /* ── fluid line animation ── */
    const linePath = lineRef.current;
    if (linePath) {
      const lineLen = linePath.getTotalLength();
      gsap.set(linePath, {
        strokeDasharray: lineLen,
        strokeDashoffset: lineLen,
      });
      gsap.to(linePath, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    }

    /* ── per-item scroll-based lenis lerp slowdown ── */
    items.forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 52%",
        end: "bottom 48%",
        onEnter: () => lenis && lenis.options && (lenis.options.lerp = 0.04),
        onLeave: () => lenis && lenis.options && (lenis.options.lerp = 0.06),
        onEnterBack: () =>
          lenis && lenis.options && (lenis.options.lerp = 0.04),
        onLeaveBack: () =>
          lenis && lenis.options && (lenis.options.lerp = 0.06),
      });
    });

    return () => {
      visTrigger.kill();
      cancelAnimationFrame(tiltRafId);
      document.removeEventListener("mousemove", onMouseMove);
      if (lenis) lenis.off("scroll", onProjectsScroll);
      else window.removeEventListener("scroll", onProjectsScroll);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [externalLenis]);

  return (
    <>
      {/* ── inline styles (mirrors original CSS exactly) ── */}
      <style>{`
        /* ── projects section ── */
        .psa-projects {
          position: relative;
          padding: 20vh 0;
          min-height: 100vh;
          z-index: 20010;
          background: #050505;
        }

        .psa-projects-inner {
          position: relative;
          display: flex;
          align-items: flex-start;
          min-height: 100vh;
        }

        /* ── sticky list ── */
        .psa-projects-list {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 45%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 12vw;
          gap: 0;
          z-index: 10;
        }

        /* ── individual project item ── */
        .psa-proj-item {
          font-family: "Breton", sans-serif;
          font-size: clamp(2rem, 4vw, 4rem);
          line-height: 1.3;
          letter-spacing: -0.02em;
          color: rgba(255, 255, 255, 0.2);
          padding: 0.6em 0;
          cursor: pointer;
          transition: color 0.5s ease;
          white-space: nowrap;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          user-select: none;
        }

        .psa-proj-item:first-child {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .psa-proj-item--active {
          color: #f0f0f0;
        }

        /* ── preview card (fixed) ── */
        .psa-proj-preview {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 800px;
          pointer-events: none;
          opacity: 0;
          z-index: 30005;
          transition: opacity 0.4s ease;
        }

        .psa-proj-preview--visible {
          pointer-events: auto;
          opacity: 1;
        }

        .psa-proj-card {
          position: relative;
          width: min(30vw, 440px);
          transition: opacity 0.4s ease;
          will-change: transform;
          transform-style: preserve-3d;
        }

        .psa-proj-card img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          cursor: none;
        }

        .psa-proj-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }

        .psa-proj-date,
        .psa-proj-label {
          font-family: "Inter", sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
        }

        /* ── custom cursor ── */
        .psa-proj-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 30006;
          opacity: 0;
          transform: translate(-50%, -50%);
          background: #f0f0f0;
          color: #0a0a0a;
          font-family: "Inter", sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 1em 1.6em;
          border-radius: 50px;
          transition: opacity 0.3s ease, transform 0.3s ease;
          white-space: nowrap;
        }

        .psa-proj-cursor--active {
          opacity: 1;
        }

        /* ── fluid SVG line ── */
        .psa-fluid-line-svg {
          position: absolute;
          top: -30vh;
          left: 0;
          width: 100%;
          height: calc(100% + 100vh);
          pointer-events: none;
          z-index: 1;
          overflow: visible;
        }

        .psa-fluid-line {
          fill: none;
          stroke: #ff6b1e;
          stroke-width: 72;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* ── mobile ── */
        @media (max-width: 768px) {
          .psa-projects {
            padding: 35vh 0 10vh;
          }
          .psa-projects-inner {
            flex-direction: column;
          }
          .psa-projects-list {
            position: relative;
            top: auto;
            width: 100%;
            height: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          .psa-proj-item {
            white-space: normal;
            font-size: clamp(1.6rem, 7vw, 2.5rem);
          }
          .psa-proj-preview {
            display: none !important;
          }
          .psa-proj-cursor {
            display: none;
          }
        }

        
      `}</style>

      {/* ── markup ── */}
      <div className="psa-projects" id="projects" ref={sectionRef}>
        {/* fluid decorative SVG line */}
        <svg
          className="psa-fluid-line-svg"
          viewBox="0 0 1400 1400"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            className="psa-fluid-line"
            ref={lineRef}
            d="
              M -80,0
              C 300,-20  600,150  540,400
              C 490,650   0,655    300,1050
              C 600,1385 650,1250 850,1200
              C 1050,1150 1350,1250 1540,1300
            "
          />
        </svg>

        <div className="psa-projects-inner">
          {/* ── sticky project list ── */}
          <div className="psa-projects-list" ref={listRef}>
            {PROJECTS.map((proj, i) => (
              <div
                key={proj.id}
                className="psa-proj-item"
                ref={(el) => (itemRefs.current[i] = el)}
                data-id={proj.id}
              >
                {proj.title}
              </div>
            ))}
          </div>
        </div>

        {/* ── fixed preview card ── */}
        <div className="psa-proj-preview" ref={previewRef} id="proj-preview">
          <div
            className="psa-proj-card"
            ref={cardRef}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="psa-proj-meta">
              <span className="psa-proj-date" ref={dateRef}>
                -- ----
              </span>
              <span className="psa-proj-label">Project</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={coverRef}
              src=""
              alt="project preview"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* ── custom cursor pill ── */}
      <div className="psa-proj-cursor" ref={cursorRef}>
        View
      </div>
    </>
  );
}
