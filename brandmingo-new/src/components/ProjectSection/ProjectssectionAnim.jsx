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
//     cover:
//       "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
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
//     cover:
//       "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
//     desc: "Website about animal rights, created to practice web animations with tools like GSAP and Lenis.",
//     category: "Website",
//     year: "2026",
//     tags: ["Gsap", "Lenis"],
//     images: [
//       "assets/images/projects/Anima/image1image1.png",
//       "assets/images/projects/Anima/image2.png",
//       "assets/images/projects/Anima/image3.png",
//     ],
//   },
//   {
//     id: "cyberdiag-app",
//     title: "CyberDiag app",
//     date: "09 2025",
//     cover:
//       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
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
//     cover:
//       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
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
//     cover:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
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
//     cover:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
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
//     cover:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
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
//     cover:
//       "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
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
//           background: #050505;
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

// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// /* ─── project data ──────────────────────────────────────────────────────── */
// const PROJECTS = [
//   {
//     id: "cyberdiag",
//     title: "CyberDiag website",
//     date: "01 2025",
//     cover:
//       "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
//     desc: "Showcase website for the CyberDiag app, presenting its features and benefits, and offering download for easy access.",
//     category: "Website",
//     year: "2026",
//     tags: ["Gsap", "Lenis", "Three.js"],
//     slug: "/projects/cyberdiag-website",
//   },
//   {
//     id: "anima",
//     title: "Anima",
//     date: "06 2025",
//     cover:
//       "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
//     desc: "Website about animal rights, created to practice web animations with tools like GSAP and Lenis.",
//     category: "Website",
//     year: "2026",
//     tags: ["Gsap", "Lenis"],
//     slug: "/projects/anima",
//   },
//   {
//     id: "cyberdiag-app",
//     title: "CyberDiag app",
//     date: "09 2025",
//     cover:
//       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
//     desc: "Desktop application designed for SMEs to perform comprehensive cybersecurity diagnostics.",
//     category: "Desktop App",
//     year: "2026",
//     tags: ["Python", "Gsap", "Three.js"],
//     slug: "/projects/cyberdiag-app",
//   },
//   {
//     id: "zenith",
//     title: "Zenith",
//     date: "11 2025",
//     cover:
//       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
//     desc: "Innovative web browser focused on privacy and performance, featuring a built-in ad blocker.",
//     category: "Desktop App",
//     year: "2026",
//     tags: ["Electron", "JavaScript", "Three.js"],
//     slug: "/projects/zenith",
//   },
//   {
//     id: "skymcdb",
//     title: "SkymcDB",
//     date: "02 2026",
//     cover:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
//     desc: "A powerful and intuitive tool designed to manage, organize, and optimize your Minecraft building projects.",
//     category: "Desktop App",
//     year: "2024",
//     tags: ["Java", "JavaFX", "CSS"],
//     slug: "/projects/skymcdb",
//   },
//   {
//     id: "chromablock",
//     title: "ChromaBlock",
//     date: "03 2026",
//     cover:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
//     desc: "Web adaptation of SkymcDB to reach a wider audience, introducing brand new features for Minecraft builders.",
//     category: "Web Application",
//     year: "2024",
//     tags: ["JavaScript", "HTML", "CSS"],
//     slug: "/projects/chromablock",
//   },
//   {
//     id: "symphony",
//     title: "Symphony",
//     date: "03 2026",
//     cover:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
//     desc: "Web application allowing users to host and stream their music, as well as discover music published by others.",
//     category: "Web Application",
//     year: "2024",
//     tags: ["Netlify Functions", "JavaScript", "HTML/CSS"],
//     slug: "/projects/symphony",
//   },
//   {
//     id: "echo",
//     title: "Echo",
//     date: "03 2026",
//     cover:
//       "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
//     desc: "Web interface to interact and chat with a local Artificial Intelligence (Qwen). Smooth and private conversational experience.",
//     category: "AI / Web",
//     year: "2024",
//     tags: ["JavaScript", "HTML/CSS", "AI Local"],
//     slug: "/projects/echo",
//   },
// ];

// /* ─── component ─────────────────────────────────────────────────────────── */
// export default function ProjectsSectionAnim({ lenis: externalLenis }) {
//   const sectionRef = useRef(null);
//   const listRef = useRef(null);
//   const cardRef = useRef(null);
//   const coverRef = useRef(null);
//   const dateRef = useRef(null);
//   const categoryRef = useRef(null);
//   const previewRef = useRef(null);
//   const cursorRef = useRef(null);
//   const lineRef = useRef(null);
//   const itemRefs = useRef([]);
//   const viewBtnRef = useRef(null);
//   const currentSlugRef = useRef(null);

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
//     const categoryEl = categoryRef.current;
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

//     gsap.set(card, { opacity: 0, y: 20 });

//     /* ── quickTo helpers for cursor ── */
//     const qCursorX = gsap.quickTo(cursor, "left", {
//       duration: 0.4,
//       ease: "power3.out",
//     });
//     const qCursorY = gsap.quickTo(cursor, "top", {
//       duration: 0.4,
//       ease: "power3.out",
//     });

//     /* ── quickTo per item for horizontal nudge ── */
//     const itemQuickX = items.map((item) =>
//       gsap.quickTo(item, "x", { duration: 0.7, ease: "power2.out" }),
//     );

//     /* ── activate / deactivate ── */
//     function deactivateAll() {
//       if (currentIdxRef.current >= 0) {
//         items[currentIdxRef.current].classList.remove("psa-proj-item--active");
//       }
//       currentIdxRef.current = -1;
//       currentSlugRef.current = null;
//       gsap.to(card, { opacity: 0, y: 20, duration: 0.3, ease: "power2.in" });
//     }

//     function activateProject(i) {
//       if (i === currentIdxRef.current) return;
//       const prev = currentIdxRef.current;
//       if (prev >= 0) items[prev].classList.remove("psa-proj-item--active");
//       items[i].classList.add("psa-proj-item--active");
//       currentSlugRef.current = PROJECTS[i].slug;

//       if (prev === -1) {
//         cover.src = PROJECTS[i].cover;
//         dateEl.textContent = PROJECTS[i].date;
//         if (categoryEl) categoryEl.textContent = PROJECTS[i].category;
//         gsap.to(card, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" });
//       } else {
//         gsap.to(card, {
//           opacity: 0,
//           y: -10,
//           duration: 0.2,
//           ease: "power2.in",
//           onComplete: () => {
//             cover.src = PROJECTS[i].cover;
//             dateEl.textContent = PROJECTS[i].date;
//             if (categoryEl) categoryEl.textContent = PROJECTS[i].category;
//             gsap.to(card, {
//               opacity: 1,
//               y: 0,
//               duration: 0.35,
//               ease: "power3.out",
//             });
//           },
//         });
//       }
//       currentIdxRef.current = i;
//     }

//     /* ── scroll-based activation ── */
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
//         itemQuickX[i](Math.min(dist / halfH, 1) * 90);
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
//         deactivateAll();
//       },
//       onEnterBack: () => {
//         preview.classList.add("psa-proj-preview--visible");
//         visibleRef.current = true;
//       },
//       onLeaveBack: () => {
//         preview.classList.remove("psa-proj-preview--visible");
//         visibleRef.current = false;
//         deactivateAll();
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
//       t.ry += (t.targetRY - t.ry) * 0.1;
//       t.rx += (t.targetRX - t.rx) * 0.1;
//       card.style.transform = `rotateY(${t.ry.toFixed(2)}deg) rotateX(${t.rx.toFixed(2)}deg)`;
//     }
//     tiltLoop();

//     /* ── cursor enter/leave on cover ── */
//     const coverWrapper = cover.parentElement;
//     coverWrapper.addEventListener("mouseenter", () =>
//       cursor.classList.add("psa-proj-cursor--active"),
//     );
//     coverWrapper.addEventListener("mouseleave", () =>
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
//           end: "bottom 30%",
//           scrub: 1.5,
//         },
//       });
//     }

//     /* ── per-item lenis lerp slowdown ── */
//     items.forEach((item) => {
//       ScrollTrigger.create({
//         trigger: item,
//         start: "top 52%",
//         end: "bottom 48%",
//         onEnter: () => lenis?.options && (lenis.options.lerp = 0.04),
//         onLeave: () => lenis?.options && (lenis.options.lerp = 0.06),
//         onEnterBack: () => lenis?.options && (lenis.options.lerp = 0.04),
//         onLeaveBack: () => lenis?.options && (lenis.options.lerp = 0.06),
//       });
//     });

//     /* ── stagger entrance animation for items ── */
//     gsap.fromTo(
//       items,
//       { opacity: 0, x: -30 },
//       {
//         opacity: 1,
//         x: 0,
//         stagger: 0.08,
//         duration: 0.7,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: section,
//           start: "top 60%",
//           once: true,
//         },
//       },
//     );

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
//       <style>{`
//         /* ─── projects section ─────────────────────────────────────────── */
//         .psa-projects {
//           position: relative;
//           padding: 20vh 0;
//           min-height: 100vh;
//           /* FIXED: z-index lower than navbar so line never goes above nav */
//           z-index: 10;
//           background: #050505;
//           /* isolate stacking context so fixed children are contained */
//           isolation: isolate;
//         }

//         .psa-projects-inner {
//           position: relative;
//           display: flex;
//           align-items: flex-start;
//           min-height: 100vh;
//         }

//         /* ── section header ── */
//         .psa-section-header {
//           position: absolute;
//           top: 6vh;
//           left: 12vw;
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           z-index: 2;
//         }

//         .psa-section-eyebrow {
//           font-family: "Inter", sans-serif;
//           font-size: 0.7rem;
//           font-weight: 700;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: #ff6b1e;
//         }

//         .psa-section-divider {
//           width: 32px;
//           height: 1px;
//           background: rgba(255,255,255,0.2);
//         }

//         .psa-section-title {
//           font-family: "Inter", sans-serif;
//           font-size: 0.7rem;
//           font-weight: 500;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.35);
//         }

//         /* ── sticky list ── */
//         .psa-projects-list {
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           width: 52%;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           padding-left: 12vw;
//           padding-right: 2rem;
//           gap: 0;
//           z-index: 10;
//         }

//         /* ── individual project item ── */
//         .psa-proj-item {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           font-family: "Breton", "Inter", sans-serif;
//           font-size: clamp(1.8rem, 3.2vw, 3.6rem);
//           line-height: 1.25;
//           letter-spacing: -0.025em;
//           color: rgba(255, 255, 255, 0.18);
//           padding: 0.55em 0;
//           cursor: pointer;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.07);
//           user-select: none;
//           overflow: hidden;
//           text-decoration: none;
//         }

//         .psa-proj-item:first-child {
//           border-top: 1px solid rgba(255, 255, 255, 0.07);
//         }

//         .psa-proj-item-left {
//           display: flex;
//           align-items: center;
//           gap: 1.2rem;
//           flex: 1;
//           min-width: 0;
//           transition: color 0.5s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//           color: inherit;
//           text-decoration: none;
//         }

//         .psa-proj-item-num {
//           font-family: "Inter", sans-serif;
//           font-size: 0.65rem;
//           font-weight: 600;
//           letter-spacing: 0.12em;
//           color: rgba(255,255,255,0.2);
//           transition: color 0.5s ease;
//           min-width: 1.8rem;
//           flex-shrink: 0;
//         }

//         .psa-proj-item-name {
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           transition: color 0.5s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .psa-proj-item-tag {
//           font-family: "Inter", sans-serif;
//           font-size: 0.62rem;
//           font-weight: 600;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.18);
//           border: 1px solid rgba(255,255,255,0.12);
//           padding: 0.25em 0.7em;
//           border-radius: 50px;
//           flex-shrink: 0;
//           transition: color 0.4s ease, border-color 0.4s ease, opacity 0.4s ease;
//           opacity: 0;
//           pointer-events: none;
//         }

//         /* ── View button on each row ── */
//         .psa-proj-item-btn {
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           gap: 0.4rem;
//           font-family: "Inter", sans-serif;
//           font-size: 0.65rem;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: #0a0a0a;
//           background: #ff6b1e;
//           padding: 0.5em 1.1em;
//           border-radius: 50px;
//           text-decoration: none;
//           opacity: 0;
//           transform: translateX(12px);
//           transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), background 0.2s ease, color 0.2s ease;
//           pointer-events: none;
//           cursor: pointer;
//           white-space: nowrap;
//         }

//         .psa-proj-item-btn svg {
//           width: 10px;
//           height: 10px;
//           flex-shrink: 0;
//           transition: transform 0.25s ease;
//         }

//         .psa-proj-item-btn:hover {
//           background: #fff;
//           color: #0a0a0a;
//         }

//         .psa-proj-item-btn:hover svg {
//           transform: translate(2px, -2px);
//         }

//         /* ── active state ── */
//         .psa-proj-item--active .psa-proj-item-left {
//           color: #f0f0f0;
//           transform: translateX(8px);
//         }

//         .psa-proj-item--active .psa-proj-item-num {
//           color: #ff6b1e;
//         }

//         .psa-proj-item--active .psa-proj-item-tag {
//           color: rgba(255,255,255,0.5);
//           border-color: rgba(255,255,255,0.25);
//           opacity: 1;
//         }

//         .psa-proj-item--active .psa-proj-item-btn {
//           opacity: 1;
//           transform: translateX(0);
//           pointer-events: auto;
//         }

//         /* ── preview card (fixed) ── */
//         /* FIXED: z-index must be less than navbar z-index */
//         .psa-proj-preview {
//           position: fixed;
//           top: 0;
//           right: 0;
//           height: 100vh;
//           width: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           perspective: 900px;
//           pointer-events: none;
//           opacity: 0;
//           /* FIXED: z-index below navbar (navbar is typically z-index 100+) */
//           z-index: 50;
//           transition: opacity 0.45s ease;
//         }

//         .psa-proj-preview--visible {
//           pointer-events: auto;
//           opacity: 1;
//         }

//         .psa-proj-card {
//           position: relative;
//           width: min(28vw, 420px);
//           will-change: transform;
//           transform-style: preserve-3d;
//         }

//         .psa-proj-card-cover {
//           position: relative;
//           overflow: hidden;
//           cursor: none;
//           border-radius: 4px;
//         }

//         .psa-proj-card-cover::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to bottom,
//             transparent 55%,
//             rgba(5,5,5,0.6) 100%
//           );
//           pointer-events: none;
//         }

//         .psa-proj-card img {
//           width: 100%;
//           height: auto;
//           display: block;
//           object-fit: cover;
//           cursor: none;
//           border-radius: 4px;
//           transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .psa-proj-card-cover:hover img {
//           transform: scale(1.04);
//         }

//         .psa-proj-meta {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 0.7rem;
//         }

//         .psa-proj-date {
//           font-family: "Inter", sans-serif;
//           font-size: 0.72rem;
//           font-weight: 600;
//           letter-spacing: 0.1em;
//           color: rgba(255, 255, 255, 0.4);
//           text-transform: uppercase;
//         }

//         .psa-proj-label {
//           font-family: "Inter", sans-serif;
//           font-size: 0.68rem;
//           font-weight: 700;
//           letter-spacing: 0.12em;
//           color: #ff6b1e;
//           text-transform: uppercase;
//         }

//         /* card bottom view link */
//         .psa-proj-card-footer {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-top: 0.9rem;
//           padding-top: 0.7rem;
//           border-top: 1px solid rgba(255,255,255,0.08);
//         }

//         .psa-proj-card-link {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           font-family: "Inter", sans-serif;
//           font-size: 0.7rem;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: #f0f0f0;
//           text-decoration: none;
//           transition: color 0.2s ease, gap 0.2s ease;
//         }

//         .psa-proj-card-link:hover {
//           color: #ff6b1e;
//           gap: 0.8rem;
//         }

//         .psa-proj-card-link svg {
//           width: 12px;
//           height: 12px;
//           transition: transform 0.25s ease;
//         }

//         .psa-proj-card-link:hover svg {
//           transform: translate(3px, -3px);
//         }

//         /* ── custom cursor ── */
//         .psa-proj-cursor {
//           position: fixed;
//           pointer-events: none;
//           /* FIXED: same z-index tier as preview but above card */
//           z-index: 51;
//           opacity: 0;
//           transform: translate(-50%, -50%);
//           background: #f0f0f0;
//           color: #0a0a0a;
//           font-family: "Inter", sans-serif;
//           font-size: 0.68rem;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           padding: 0.85em 1.8em;
//           border-radius: 50px;
//           transition: opacity 0.25s ease, transform 0.25s ease, background 0.2s ease;
//           white-space: nowrap;
//           display: flex;
//           align-items: center;
//           gap: 0.4rem;
//         }

//         .psa-proj-cursor--active {
//           opacity: 1;
//         }

//         .psa-proj-cursor svg {
//           width: 10px;
//           height: 10px;
//         }

//         /* ── fluid SVG line ── */
//         .psa-fluid-line-svg {
//           position: absolute;
//           top: -30vh;
//           left: 0;
//           width: 100%;
//           height: calc(100% + 100vh);
//           pointer-events: none;
//           /* FIXED: z-index 1 so it stays behind everything */
//           z-index: 1;
//           overflow: visible;
//         }

//         .psa-fluid-line {
//           fill: none;
//           stroke: #ff6b1e;
//           stroke-width: 64;
//           stroke-linecap: round;
//           stroke-linejoin: round;
//           opacity: 0.92;
//         }

//         /* ── empty scroll spacer on right so sticky works ── */
//         .psa-scroll-spacer {
//           width: 48%;
//           pointer-events: none;
//           flex-shrink: 0;
//         }

//         /* ── mobile ── */
//         @media (max-width: 900px) {
//           .psa-projects {
//             padding: 30vh 0 12vh;
//           }

//           .psa-section-header {
//             left: 1.5rem;
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
//             font-size: clamp(1.5rem, 7vw, 2.4rem);
//           }

//           .psa-proj-item-name {
//             white-space: normal;
//           }

//           .psa-proj-item-tag {
//             display: none;
//           }

//           .psa-proj-item-btn {
//             opacity: 0 !important;
//             pointer-events: none !important;
//             display: none;
//           }

//           /* On mobile, active items show an arrow instead */
//           .psa-proj-item--active .psa-proj-item-left {
//             transform: translateX(0);
//           }

//           .psa-proj-preview {
//             display: none !important;
//           }

//           .psa-proj-cursor {
//             display: none;
//           }

//           .psa-scroll-spacer {
//             display: none;
//           }

//           /* mobile: show a subtle right arrow on active */
//           .psa-proj-item--active::after {
//             content: '→';
//             position: absolute;
//             right: 0;
//             font-size: 0.9em;
//             color: #ff6b1e;
//             opacity: 1;
//             transition: opacity 0.3s ease;
//           }

//           /* Mobile: make entire row tappable */
//           .psa-proj-item {
//             -webkit-tap-highlight-color: transparent;
//           }
//         }

//         @media (max-width: 480px) {
//           .psa-projects {
//             padding: 25vh 0 10vh;
//           }

//           .psa-projects-list {
//             padding-left: 1.2rem;
//             padding-right: 1.2rem;
//           }

//           .psa-proj-item {
//             font-size: clamp(1.3rem, 8vw, 2rem);
//             padding: 0.6em 0;
//           }

//           .psa-proj-item-num {
//             display: none;
//           }
//         }

//         /* ── reduced motion ── */
//         @media (prefers-reduced-motion: reduce) {
//           .psa-proj-item,
//           .psa-proj-item-left,
//           .psa-proj-item-name,
//           .psa-proj-item-btn,
//           .psa-proj-card img {
//             transition: none !important;
//           }
//         }
//       `}</style>

//       {/* ── markup ── */}
//       <div className="psa-projects" id="projects" ref={sectionRef}>
//         {/* section eyebrow label */}
//         <div className="psa-section-header" aria-hidden="true">
//           <span className="psa-section-eyebrow">Selected work</span>
//           <span className="psa-section-divider" />
//           <span className="psa-section-title">{PROJECTS.length} projects</span>
//         </div>

//         {/*
//           FIXED: fluid decorative SVG line — z-index:1 so it stays
//           behind the sticky list, preview, and especially the navbar
//         */}
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
//               /*
//                 Each row is a flex container.
//                 - Left side (Link): project number + name — clicking navigates
//                 - Right side: tag pill + View button (also navigates)
//                 The whole row's hover/active state is controlled by
//                 the scroll-based activation, not hover.
//               */
//               <div
//                 key={proj.id}
//                 className="psa-proj-item"
//                 ref={(el) => (itemRefs.current[i] = el)}
//                 data-id={proj.id}
//               >
//                 {/* ── left: number + title (clickable via Link) ── */}
//                 <Link
//                   to={proj.slug}
//                   className="psa-proj-item-left"
//                   tabIndex={0}
//                   aria-label={`View ${proj.title} project`}
//                 >
//                   <span className="psa-proj-item-num">
//                     {String(i + 1).padStart(2, "0")}
//                   </span>
//                   <span className="psa-proj-item-name">{proj.title}</span>
//                 </Link>

//                 {/* ── category tag pill ── */}
//                 <span className="psa-proj-item-tag" aria-hidden="true">
//                   {proj.category}
//                 </span>

//                 {/* ── view button (visible when active) ── */}
//                 <Link
//                   to={proj.slug}
//                   className="psa-proj-item-btn"
//                   tabIndex={-1}
//                   aria-hidden="true"
//                 >
//                   View
//                   <svg
//                     viewBox="0 0 12 12"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M1 11L11 1M11 1H3M11 1V9"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* scroll spacer to make sticky work while right side is fixed */}
//           <div className="psa-scroll-spacer" aria-hidden="true" />
//         </div>

//         {/*
//           FIXED: preview is fixed position.
//           z-index: 50 — well below navbar (usually z-index: 100+)
//           This ensures it never overlaps the navbar.
//         */}
//         <div className="psa-proj-preview" ref={previewRef} id="proj-preview">
//           <div
//             className="psa-proj-card"
//             ref={cardRef}
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             {/* meta row */}
//             <div className="psa-proj-meta">
//               <span className="psa-proj-date" ref={dateRef}>
//                 -- ----
//               </span>
//               <span className="psa-proj-label" ref={categoryRef}>
//                 Project
//               </span>
//             </div>

//             {/* cover image wrapper */}
//             <div className="psa-proj-card-cover">
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 ref={coverRef}
//                 src=""
//                 alt="project preview"
//                 draggable={false}
//               />
//             </div>

//             {/* card footer with View link */}
//             <div className="psa-proj-card-footer">
//               <Link
//                 to={currentSlugRef.current || "#"}
//                 className="psa-proj-card-link"
//                 ref={viewBtnRef}
//                 onClick={(e) => {
//                   if (!currentSlugRef.current) e.preventDefault();
//                 }}
//               >
//                 View project
//                 <svg
//                   viewBox="0 0 12 12"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M1 11L11 1M11 1H3M11 1V9"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/*
//         Custom cursor pill — z-index: 51, just above preview card.
//         Still below navbar.
//       */}
//       <div className="psa-proj-cursor" ref={cursorRef}>
//         View
//         <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             d="M1 11L11 1M11 1H3M11 1V9"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>
//     </>
//   );
// }

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
    slug: "/projects/cyberdiag-website",
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
    slug: "/projects/anima",
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
    slug: "/projects/cyberdiag-app",
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
    slug: "/projects/zenith",
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
    slug: "/projects/skymcdb",
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
    slug: "/projects/chromablock",
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
    slug: "/projects/symphony",
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
    slug: "/projects/echo",
  },
];

/* ─── component ─────────────────────────────────────────────────────────── */
export default function ProjectsSectionAnim({ lenis: externalLenis }) {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const cardRef = useRef(null);
  const coverRef = useRef(null);
  const dateRef = useRef(null);
  const categoryRef = useRef(null);
  const previewRef = useRef(null);
  const cursorRef = useRef(null);
  const lineRef = useRef(null);
  const itemRefs = useRef([]);
  const currentSlugRef = useRef(null);

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
    const categoryEl = categoryRef.current;
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

    gsap.set(card, { opacity: 0, y: 20 });

    /* ── quickTo helpers for cursor ── */
    const qCursorX = gsap.quickTo(cursor, "left", {
      duration: 0.4,
      ease: "power3.out",
    });
    const qCursorY = gsap.quickTo(cursor, "top", {
      duration: 0.4,
      ease: "power3.out",
    });

    /* ── quickTo per item for horizontal nudge ── */
    const itemQuickX = items.map((item) =>
      gsap.quickTo(item, "x", { duration: 0.7, ease: "power2.out" }),
    );

    /* ── activate / deactivate ── */
    function deactivateAll() {
      if (currentIdxRef.current >= 0) {
        items[currentIdxRef.current].classList.remove("psa-proj-item--active");
      }
      currentIdxRef.current = -1;
      currentSlugRef.current = null;
      gsap.to(card, { opacity: 0, y: 20, duration: 0.3, ease: "power2.in" });
    }

    function activateProject(i) {
      if (i === currentIdxRef.current) return;
      const prev = currentIdxRef.current;
      if (prev >= 0) items[prev].classList.remove("psa-proj-item--active");
      items[i].classList.add("psa-proj-item--active");
      currentSlugRef.current = PROJECTS[i].slug;

      if (prev === -1) {
        cover.src = PROJECTS[i].cover;
        dateEl.textContent = PROJECTS[i].date;
        if (categoryEl) categoryEl.textContent = PROJECTS[i].category;
        gsap.to(card, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" });
      } else {
        gsap.to(card, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            cover.src = PROJECTS[i].cover;
            dateEl.textContent = PROJECTS[i].date;
            if (categoryEl) categoryEl.textContent = PROJECTS[i].category;
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: "power3.out",
            });
          },
        });
      }
      currentIdxRef.current = i;
    }

    /* ── scroll-based activation ── */
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
        itemQuickX[i](Math.min(dist / halfH, 1) * 90);
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
        deactivateAll();
      },
      onEnterBack: () => {
        preview.classList.add("psa-proj-preview--visible");
        visibleRef.current = true;
      },
      onLeaveBack: () => {
        preview.classList.remove("psa-proj-preview--visible");
        visibleRef.current = false;
        deactivateAll();
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
      t.ry += (t.targetRY - t.ry) * 0.1;
      t.rx += (t.targetRX - t.rx) * 0.1;
      card.style.transform = `rotateY(${t.ry.toFixed(2)}deg) rotateX(${t.rx.toFixed(2)}deg)`;
    }
    tiltLoop();

    /* ── cursor enter/leave on cover ── */
    const coverWrapper = cover.parentElement;
    coverWrapper.addEventListener("mouseenter", () =>
      cursor.classList.add("psa-proj-cursor--active"),
    );
    coverWrapper.addEventListener("mouseleave", () =>
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
          end: "bottom 30%",
          scrub: 1.5,
        },
      });
    }

    /* ── per-item lenis lerp slowdown ── */
    items.forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 52%",
        end: "bottom 48%",
        onEnter: () => lenis?.options && (lenis.options.lerp = 0.04),
        onLeave: () => lenis?.options && (lenis.options.lerp = 0.06),
        onEnterBack: () => lenis?.options && (lenis.options.lerp = 0.04),
        onLeaveBack: () => lenis?.options && (lenis.options.lerp = 0.06),
      });
    });

    /* ── stagger entrance animation for items ── */
    gsap.fromTo(
      items,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          once: true,
        },
      },
    );

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
      <style>{`
        /* ─── projects section ─────────────────────────────────────────── */
        .psa-projects {
          position: relative;
          padding: 20vh 0;
          min-height: 100vh;
          z-index: 10;
          background: #050505;
          isolation: isolate;
        }

        .psa-projects-inner {
          position: relative;
          display: flex;
          align-items: flex-start;
          min-height: 100vh;
        }

        /* ── section header ── */
        .psa-section-header {
          position: absolute;
          top: -5vh;
          left: 12vw;
          display: flex;
          align-items: center;
          gap: 1rem;
          z-index: 2;
        }

        .psa-section-eyebrow {
          font-family: "Inter", sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ff6b1e;
        }

        .psa-section-divider {
          width: 32px;
          height: 1px;
          background: rgba(255,255,255,0.2);
        }

        .psa-section-title {
          font-family: "Inter", sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }

        /* ── sticky list ── */
        .psa-projects-list {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 52%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 12vw;
          padding-right: 2rem;
          gap: 0;
          z-index: 10;
        }

        /* ── individual project item ── */
        .psa-proj-item {
          position: relative;
          display: flex;
          align-items: center;
          font-family: "Breton", "Inter", sans-serif;
          font-size: clamp(1.8rem, 3.2vw, 3.6rem);
          line-height: 1.25;
          letter-spacing: -0.025em;
          color: rgba(255, 255, 255, 0.18);
          padding: 0.55em 0;
          cursor: pointer;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          user-select: none;
          text-decoration: none;
        }

        .psa-proj-item:first-child {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .psa-proj-item-left {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex: 1;
          min-width: 0;
          transition: color 0.5s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          color: inherit;
          text-decoration: none;
        }

        .psa-proj-item-num {
          font-family: "Inter", sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.2);
          transition: color 0.5s ease;
          min-width: 1.8rem;
          flex-shrink: 0;
        }

        .psa-proj-item-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.5s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* ── active state ── */
        .psa-proj-item--active .psa-proj-item-left {
          color: #f0f0f0;
          transform: translateX(8px);
        }

        .psa-proj-item--active .psa-proj-item-num {
          color: #ff6b1e;
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
          perspective: 900px;
          pointer-events: none;
          opacity: 0;
          z-index: 50;
          transition: opacity 0.45s ease;
        }

        .psa-proj-preview--visible {
          pointer-events: auto;
          opacity: 1;
        }

        .psa-proj-card {
          position: relative;
          width: min(28vw, 420px);
          will-change: transform;
          transform-style: preserve-3d;
        }

        .psa-proj-card-cover {
          position: relative;
          overflow: hidden;
          cursor: none;
          border-radius: 4px;
        }

        .psa-proj-card-cover::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 55%,
            rgba(5,5,5,0.6) 100%
          );
          pointer-events: none;
        }

        .psa-proj-card img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          cursor: none;
          border-radius: 4px;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .psa-proj-card-cover:hover img {
          transform: scale(1.04);
        }

        .psa-proj-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.7rem;
        }

        .psa-proj-date {
          font-family: "Inter", sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
        }

        .psa-proj-label {
          font-family: "Inter", sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #ff6b1e;
          text-transform: uppercase;
        }

        /* ── custom cursor ── */
        .psa-proj-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 51;
          opacity: 0;
          transform: translate(-50%, -50%);
          background: #f0f0f0;
          color: #0a0a0a;
          font-family: "Inter", sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.85em 1.8em;
          border-radius: 50px;
          transition: opacity 0.25s ease, transform 0.25s ease, background 0.2s ease;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .psa-proj-cursor--active {
          opacity: 1;
        }

        .psa-proj-cursor svg {
          width: 10px;
          height: 10px;
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
          stroke-width: 64;
          stroke-linecap: round;
          stroke-linejoin: round;
          opacity: 0.92;
        }

        /* ── empty scroll spacer on right so sticky works ── */
        .psa-scroll-spacer {
          width: 48%;
          pointer-events: none;
          flex-shrink: 0;
        }

        /* ── mobile ── */
        @media (max-width: 900px) {
          .psa-projects {
            padding: 30vh 0 12vh;
          }

          .psa-section-header {
            left: 1.5rem;
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
            font-size: clamp(1.5rem, 7vw, 2.4rem);
          }

          .psa-proj-item-name {
            white-space: normal;
          }

          /* CHANGED: orange line hidden on mobile */
          .psa-fluid-line-svg {
            display: none;
          }

          .psa-proj-item--active .psa-proj-item-left {
            transform: translateX(0);
          }

          .psa-proj-preview {
            display: none !important;
          }

          .psa-proj-cursor {
            display: none;
          }

          .psa-scroll-spacer {
            display: none;
          }

          /* mobile: show a subtle right arrow on active */
          .psa-proj-item--active::after {
            content: '→';
            position: absolute;
            right: 0;
            font-size: 0.9em;
            color: #ff6b1e;
            opacity: 1;
            transition: opacity 0.3s ease;
          }

          .psa-proj-item {
            -webkit-tap-highlight-color: transparent;
          }
        }

        @media (max-width: 480px) {
          .psa-projects {
            padding: 25vh 0 10vh;
          }

          .psa-projects-list {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          }

          .psa-proj-item {
            font-size: clamp(1.3rem, 8vw, 2rem);
            padding: 0.6em 0;
          }

          .psa-proj-item-num {
            display: none;
          }
        }

        /* ── reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .psa-proj-item,
          .psa-proj-item-left,
          .psa-proj-item-name,
          .psa-proj-card img {
            transition: none !important;
          }
        }
           @media (max-width: 900px) {
          .psa-section-header {
           top: 5.5rem;
           }

          .psa-projects-list {
          margin-top: 0rem;
        }

}
      `}</style>

      {/* ── markup ── */}
      <div className="psa-projects" id="projects" ref={sectionRef}>
        {/* section eyebrow label */}
        <div className="psa-section-header" aria-hidden="true">
          <span className="psa-section-eyebrow">Selected work</span>
          <span className="psa-section-divider" />
          <span className="psa-section-title">{PROJECTS.length} projects</span>
        </div>

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
          {/* CHANGED: each row is a Link — no tag pill, no view btn inside */}
          <div className="psa-projects-list" ref={listRef}>
            {PROJECTS.map((proj, i) => (
              <Link
                key={proj.id}
                to={proj.slug}
                className="psa-proj-item"
                ref={(el) => (itemRefs.current[i] = el)}
                data-id={proj.id}
                aria-label={`View ${proj.title} project`}
              >
                <span className="psa-proj-item-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="psa-proj-item-left">
                  <span className="psa-proj-item-name">{proj.title}</span>
                </span>
              </Link>
            ))}
          </div>

          {/* scroll spacer to make sticky work while right side is fixed */}
          <div className="psa-scroll-spacer" aria-hidden="true" />
        </div>

        {/* fixed preview card — NO footer, NO view project link */}
        <div className="psa-proj-preview" ref={previewRef} id="proj-preview">
          <div
            className="psa-proj-card"
            ref={cardRef}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* meta row */}
            <div className="psa-proj-meta">
              <span className="psa-proj-date" ref={dateRef}>
                -- ----
              </span>
              <span className="psa-proj-label" ref={categoryRef}>
                Project
              </span>
            </div>

            {/* cover image wrapper — REMOVED footer below */}
            <div className="psa-proj-card-cover">
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
      </div>

      {/* custom cursor pill */}
      <div className="psa-proj-cursor" ref={cursorRef}>
        View
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 11L11 1M11 1H3M11 1V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
