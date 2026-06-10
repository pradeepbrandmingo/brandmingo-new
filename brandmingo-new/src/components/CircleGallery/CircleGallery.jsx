/**
 * CircleGallery — Theme-matched React Component
 *
 * Theme: Gencyo Digital Agency
 * Colors: --theme-color1: #ff6b1e | --body-bg: #050505 | --bg-color: #050505
 * Fonts: Inter (headings) + Poppins (body)
 * Images: Free Unsplash images (no API key needed)
 *
 * Install: npm install gsap
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Free Unsplash Images (dummy / placeholder) ─── */
const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    alt: "Web Development Project",
    w: 800,
    h: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    alt: "App Design Project",
    w: 800,
    h: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    alt: "Code Project",
    w: 800,
    h: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    alt: "Digital Solution",
    w: 800,
    h: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    alt: "Analytics Dashboard",
    w: 800,
    h: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "SEO Strategy",
    w: 800,
    h: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    alt: "Team Collaboration",
    w: 800,
    h: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    alt: "IT Solutions",
    w: 800,
    h: 600,
  },
];

const PHRASE_HTML = `Every project is a chance to <span class="cg-accent">innovate</span>, <span class="cg-accent">create</span> and push the boundaries of digital excellence.`;

/* ─── Build cylinder slices ─── */
function buildSlices(imgEl) {
  const vw = window.innerWidth;
  const SLICES = 10;
  const imgW = Math.min(Math.max(120, vw * 0.14), 210);
  const imgH = (imgW * 2) / 3;
  const orbitR = (vw * 0.34 + 500) / 2;
  const bendRad = imgW / orbitR;
  const cylR = orbitR;
  const sliceW = imgW / SLICES;
  const totalBendDeg = (bendRad * 180) / Math.PI;
  const stepDeg = totalBendDeg / SLICES;
  const src = imgEl.getAttribute("src");

  const wrapper = document.createElement("div");
  wrapper.className = "cg-img-wrap";

  for (let s = 0; s < SLICES; s++) {
    const sl = document.createElement("div");
    sl.className = "cg-slice";
    const displayW = sliceW + 1.5;
    sl.style.width = displayW.toFixed(1) + "px";
    sl.style.height = imgH.toFixed(1) + "px";
    sl.style.position = "absolute";
    sl.style.top = "0";
    sl.style.left = "50%";
    sl.style.marginLeft = (-displayW / 2).toFixed(1) + "px";
    sl.style.backgroundImage = `url(${src})`;
    sl.style.backgroundSize = `${imgW.toFixed(1)}px ${imgH.toFixed(1)}px`;
    sl.style.backgroundPosition = `${(-s * sliceW).toFixed(1)}px 0`;
    sl.style.transformOrigin = `50% 50% ${(-cylR).toFixed(1)}px`;
    const angle = (s - (SLICES - 1) / 2) * stepDeg;
    sl.style.transform = `rotateY(${angle.toFixed(2)}deg)`;
    wrapper.appendChild(sl);
  }
  return wrapper;
}

/* ─── getPos ─── */
function getPos(t, rx, rz, tiltY, entryAngle, offX) {
  if (t <= 0.12) {
    const p = t / 0.12;
    return { x: -offX * (1 - p), y: tiltY, z: rz * p, rotY: 0 };
  }
  if (t <= 0.88) {
    const p = (t - 0.12) / 0.76;
    const angle = entryAngle - p * Math.PI * 2;
    const x = Math.cos(angle) * rx;
    const z = Math.sin(angle) * rz;
    const ry = p * Math.PI * 2;
    return { x, y: (z / rz) * tiltY, z, rotY: ry };
  }
  const p = (t - 0.88) / 0.12;
  return { x: offX * p, y: tiltY, z: rz * (1 - p), rotY: Math.PI * 2 };
}

export default function CircleGallery() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const phraseRef = useRef(null);
  const imgContainers = useRef([]);
  const stRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const phrase = phraseRef.current;
    if (!section || !pin || !phrase) return;

    /* ── Word-wrap phrase ── */
    const walker = document.createTreeWalker(phrase, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
      const words = node.textContent.split(/(\s+)/);
      const frag = document.createDocumentFragment();
      words.forEach((w) => {
        if (/^\s+$/.test(w)) {
          frag.appendChild(document.createTextNode(w));
        } else if (w) {
          const span = document.createElement("span");
          span.className = "cg-word";
          span.textContent = w;
          frag.appendChild(span);
        }
      });
      node.parentNode.replaceChild(frag, node);
    });
    const cgWords = Array.from(phrase.querySelectorAll(".cg-word"));

    /* ── Build slices ── */
    const placeholders = Array.from(
      pin.querySelectorAll(".cg-img-placeholder"),
    );
    placeholders.forEach((placeholder, i) => {
      const wrapper = buildSlices(placeholder);
      wrapper.style.cssText = `
        position:absolute;
        width:${Math.min(Math.max(120, window.innerWidth * 0.14), 210)}px;
        aspect-ratio:3/2;
        transform-style:preserve-3d;
        opacity:0;
      `;
      placeholder.replaceWith(wrapper);
      imgContainers.current[i] = wrapper;
    });

    const cgImgs = imgContainers.current;
    const count = cgImgs.length;
    const vw = window.innerWidth;
    const rx = vw * 0.34;
    const rz = 500;
    const tiltY = vw <= 768 ? 80 : 180;
    const entryAngle = Math.PI / 2;
    const offX = vw * 0.85;
    const stagger = 0.09;
    const totalRange = 1 + stagger * (count - 1);

    /* ── ScrollTrigger ── */
    stRef.current = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      pin: pin,
      onUpdate(self) {
        const progress = self.progress;

        cgImgs.forEach((img, i) => {
          const imgT = progress * totalRange - i * stagger;
          if (imgT <= 0 || imgT >= 1) {
            img.style.opacity = "0";
            return;
          }
          let alpha = 1;
          if (imgT < 0.06) alpha = imgT / 0.06;
          else if (imgT > 0.94) alpha = (1 - imgT) / 0.06;

          const pos = getPos(imgT, rx, rz, tiltY, entryAngle, offX);
          const rotDeg = ((pos.rotY * 180) / Math.PI).toFixed(1);

          img.style.transform = `translate3d(${pos.x.toFixed(1)}px,${pos.y.toFixed(1)}px,${pos.z.toFixed(1)}px) rotateY(${rotDeg}deg)`;
          img.style.opacity = alpha;
          img.style.zIndex = Math.round(pos.z + 600);
        });

        const phraseStart = 0.25;
        const phraseEnd = 0.75;
        const travelY = 200;

        if (progress < phraseStart || progress > phraseEnd) {
          phrase.style.opacity = "0";
        } else {
          const globalP = (progress - phraseStart) / (phraseEnd - phraseStart);
          const yOffset = travelY * (0.5 - globalP);
          phrase.style.transform = `translateY(${yOffset.toFixed(1)}px)`;

          const revealEnd = 0.4;
          cgWords.forEach((w, wi) => {
            if (globalP < revealEnd) {
              const revealP = globalP / revealEnd;
              const wordT = revealP * (cgWords.length + 4) - wi;
              const wP = Math.max(0, Math.min(1, wordT / 3));
              w.style.opacity = wP;
              w.style.filter = `blur(${(8 * (1 - wP)).toFixed(1)}px)`;
            } else {
              w.style.opacity = "1";
              w.style.filter = "blur(0px)";
            }
          });

          let alpha = 1;
          if (globalP < 0.1) alpha = globalP / 0.1;
          else if (globalP > 0.75) alpha = (1 - globalP) / 0.25;
          phrase.style.opacity = alpha;
        }
      },
    });

    return () => {
      if (stRef.current) stRef.current.kill();
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── Google Fonts ── */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');

        /* ── CSS Variables (matching theme) ── */
        :root {
          --theme-color1: #ff6b1e;
          --theme-color2: #050505;
          --theme-color3: #050505;
          --body-bg: #050505;
          --bg-color: #050505;
          background-color: #050505;
          --heading-font: 'Inter', sans-serif;
          --body-font: 'Poppins', sans-serif;
          --headings-color: #ffffff;
          --text-dark: #f2f1ef;
        }

        /* ── Section: 600vh ── */
        .cg-section {
          position: relative;
          height: 600vh;
          background: #050505 !important;
          background-color: #050505 !important;
          background-image: none !important;
          overflow: hidden;
        }

        /* ── Badge / label above section ── */
        .cg-section-label {
          position: absolute;
          top: 60px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          pointer-events: none;
        }

        .cg-label-tag {
          font-family: var(--body-font);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--theme-color1);
          border: 1px solid rgba(255, 107, 30, 0.35);
          padding: 6px 18px;
          border-radius: 100px;
          background: rgba(255, 107, 30, 0.08);
        }

        .cg-section-title {
          font-family: var(--heading-font);
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 700;
          color: var(--headings-color);
          text-align: center;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0;
        }

        .cg-section-title span {
          color: var(--theme-color1);
        }

        /* ── Pin container ── */
        .cg-pin {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          background: #050505;
        }

        /* ── Hidden placeholder ── */
        .cg-img-placeholder {
          display: none;
        }

        /* ── Slice wrapper ── */
        .cg-img-wrap {
          position: absolute;
          transform-style: preserve-3d;
          will-change: transform, opacity;
          border-radius: 8px;
          overflow: hidden;
        }

        /* ── Individual slice ── */
        .cg-slice {
          will-change: transform;
        }

        /* ── Phrase ── */
        .cg-phrase {
          position: absolute;
          font-family: var(--heading-font);
          font-size: clamp(1.4rem, 3vw, 2.8rem);
          font-weight: 700;
          color: var(--headings-color);
          text-align: center;
          max-width: 640px;
          line-height: 1.25;
          will-change: opacity, transform;
          z-index: 900;
          pointer-events: none;
          letter-spacing: -0.5px;
          padding: 0 20px;
        }

        /* Accent words — themed orange */
        .cg-accent {
          color: var(--theme-color1);
          font-style: italic;
        }

        /* ── Word blur animation ── */
        .cg-word {
          display: inline-block;
          opacity: 0;
          filter: blur(8px);
        }

        /* ── Bottom counter / scroll indicator ── */
        .cg-scroll-hint {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 20;
          pointer-events: none;
          animation: cgFadeInHint 1s ease 1s both;
        }

        .cg-scroll-hint span {
          font-family: var(--body-font);
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
        }

        .cg-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(255,107,30,0.8), transparent);
          animation: cgScrollLine 1.8s ease-in-out infinite;
        }

        @keyframes cgScrollLine {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.4); opacity: 0.4; }
        }

        @keyframes cgFadeInHint {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }



        /* ── Glow behind center ── */
        .cg-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,107,30,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Mobile: hide section ── */
        @media (max-width: 768px) {
          .cg-section {
            display: none !important;
          }
        }

        /* ── Tablet ── */
        @media (max-width: 1199px) {
          .cg-phrase {
            font-size: clamp(1.2rem, 2.5vw, 2.2rem);
            max-width: 500px;
          }
          .cg-section-title {
            font-size: clamp(28px, 4vw, 46px);
          }
        }
      `}</style>

      <section className="cg-section" id="circle-gallery" ref={sectionRef}>
        {/* Center glow */}
        <div className="cg-glow" />

        <div className="cg-pin" id="circle-gallery-pin" ref={pinRef}>
          {/* Placeholder images — replaced by slice wrappers in useEffect */}
          {IMAGES.map((img, i) => (
            <img
              key={i}
              className="cg-img-placeholder"
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
            />
          ))}

          {/* Phrase */}
          <p
            className="cg-phrase"
            id="cg-phrase"
            ref={phraseRef}
            dangerouslySetInnerHTML={{ __html: PHRASE_HTML }}
          />
        </div>
      </section>
    </>
  );
}
