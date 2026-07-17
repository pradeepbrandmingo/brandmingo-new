import React, { useEffect, useRef, useState } from "react";
// import "./webdev-sections.css";
import { openEnquiryPopup } from "../../../utils/popup";

/* ── DATA ── */

const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-pen-nib",
    num: "01",
    title: "Logo & Brand Identity",
    desc: "Create memorable logos, colors, and visual elements that define your brand.",
  },
  {
    fa: "fa-solid fa-book-open",
    num: "02",
    title: "Brand Guidelines",
    desc: "Develop clear brand standards for consistent design and communication.",
  },
  {
    fa: "fa-solid fa-address-card",
    num: "03",
    title: "Corporate Identity",
    desc: "Design business stationery and branded assets for a professional image.",
  },
  {
    fa: "fa-solid fa-photo-film",
    num: "04",
    title: "Marketing Creatives",
    desc: "Create impactful marketing designs that boost visibility and engagement.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-solid fa-pen-ruler",
    title: "Creative Design Tools",
    desc: "Design professional logos, brand assets, and marketing creatives with precision.",
  },
  {
    fa: "fa-solid fa-lightbulb",
    title: "Brand Strategy Tools",
    desc: "Develop strong brand positioning and visual strategies for lasting business impact.",
  },
  {
    fa: "fa-solid fa-folder-tree",
    title: "Brand Asset Systems",
    desc: "Manage logos, brand assets, and design files for consistent brand communication.",
  },
  {
    fa: "fa-solid fa-palette",
    title: "Visual Identity Tools",
    desc: "Create cohesive color palettes, typography, and visual styles for every brand.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-magnifying-glass",
    title: "Brand Discovery",
    desc: "We research your business, audience, industry, and competitors to shape your brand strategy.",
  },
  {
    num: "02",
    fa: "fa-solid fa-lightbulb",
    title: "Creative Strategy",
    desc: "We define your brand positioning, messaging, and visual direction for market impact.",
  },
  {
    num: "03",
    fa: "fa-solid fa-pen-ruler",
    title: "Design Creation",
    desc: "We create logos, visual assets, typography, and branding elements that reflect your identity.",
  },
  {
    num: "04",
    fa: "fa-solid fa-book-open",
    title: "Brand Guidelines",
    desc: "We establish brand standards to ensure consistency across every design and platform.",
  },
  {
    num: "05",
    fa: "fa-solid fa-arrow-trend-up",
    title: "Brand Evolution",
    desc: "We refine your brand identity to support long-term growth and changing business needs.",
  },
];

/* ══════════════════════════════════════════
   SECTION 1 — Types of Websites
══════════════════════════════════════════ */
const WebDevTypes = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wds" ref={ref}>
      <div className="wds-container">
        <div className="wds-types-grid">
          {/* Left */}
          <div className="wds-types-left">
            <div className="wds-section-label">WHAT WE CREATE</div>
            <h3 className="wds-types-heading">
              Types of Graphic Design Services We Offer
            </h3>
            <p className="wds-types-desc">
              Every business has unique branding goals and design requirements.
              We create strategic graphic design solutions that strengthen your
              brand identity, improve recognition, and leave a lasting
              impression across every customer touchpoint.
            </p>

            {/* Decorative dot grid + arc */}
            <div className="wds-deco" aria-hidden="true">
              <svg
                width="240"
                height="190"
                viewBox="0 0 240 190"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="dotFade" cx="20%" cy="20%" r="80%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <mask id="gridMask">
                    <rect width="240" height="190" fill="url(#dotFade)" />
                  </mask>
                  <radialGradient id="glowDot" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Dot grid */}
                <g mask="url(#gridMask)">
                  {Array.from({ length: 10 }, (_, row) =>
                    Array.from({ length: 13 }, (_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={col * 20 + 4}
                        cy={row * 20 + 4}
                        r="1.4"
                        fill="#f97316"
                        opacity="0.5"
                      />
                    )),
                  )}
                </g>

                {/* Arc curve */}
                <path
                  d="M 0 190 Q 180 150 230 20"
                  stroke="#f97316"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.45"
                  strokeLinecap="round"
                />

                {/* Glowing dot on arc */}
                <circle cx="205" cy="72" r="5" fill="#f97316" opacity="0.9" />
                <circle cx="205" cy="72" r="10" fill="#f97316" opacity="0.2" />
                <circle cx="205" cy="72" r="16" fill="#f97316" opacity="0.08" />
              </svg>
            </div>
          </div>

          {/* Right 2×2 cards */}
          <div className="wds-types-cards">
            {WEBSITE_TYPES.map((item, i) => (
              <div
                key={i}
                className={`wds-type-card${visible ? " wds-anim" : ""}`}
                style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              >
                <span className="wds-card-num">{item.num}</span>
                <div className="wds-card-icon">
                  <i className={item.fa} />
                </div>
                <h4 className="wds-card-title">{item.title}</h4>
                <p className="wds-card-desc">{item.desc}</p>
                <a
                  href="#contact"
                  className="wds-card-link"
                  onClick={(e) => {
                    e.preventDefault();
                    openEnquiryPopup();
                  }}
                >
                  Learn More <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 2 — Technologies We Use
══════════════════════════════════════════ */
const WebDevTech = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wdt" ref={ref}>
      <div className="wdt-container">
        <div className="wdt-grid">
          {/* Left */}
          <div className="wdt-left">
            <div className="wds-section-label">BUILT WITH POWERFUL TOOLS</div>
            <h3 className="wdt-heading">Design Tools & Platforms We Use</h3>
            <p className="wdt-desc">
              We use industry-leading design tools and creative platforms to
              craft impactful brand identities, marketing creatives, and visual
              assets that help businesses stand out and grow.
            </p>
          </div>

          {/* Right tech cards */}
          <div className="wdt-cards">
            {TECHNOLOGIES.map((item, i) => (
              <div
                key={i}
                className={`wdt-card${visible ? " wds-anim" : ""}`}
                style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              >
                <div className="wdt-card-icon">
                  <i className={item.fa} />
                </div>
                <div className="wdt-card-content">
                  <h4 className="wdt-card-title">{item.title}</h4>
                  <p className="wdt-card-desc">{item.desc}</p>
                  <div className="wdt-card-line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 3 — Web Development Process
══════════════════════════════════════════ */
const WebDevProcess = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wdp" ref={ref}>
      <div className="wdp-container">
        <div className="wdp-grid">
          {/* Left */}
          <div className="wdp-left">
            <div className="wds-section-label">OUR WORKFLOW</div>
            <h3 className="wdp-heading"> Our Brand Design Process</h3>
            <p className="wdp-desc">
              We follow a strategic branding process to create memorable visual
              identities, maintain consistency, and help businesses build
              long-term brand recognition
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Have a branding project in mind?</h4>
                <p>
                  Let's create a unique brand identity that builds trust,
                  attracts customers, and drives long-term business growth
                </p>
                <button
                  className="wdp-cta-btn"
                  type="button"
                  onClick={openEnquiryPopup}
                >
                  Let's Talk
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>

          {/* Right steps */}
          <div className="wdp-steps">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className={`wdp-step${visible ? " wds-anim" : ""}`}
                style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              >
                <div className="wdp-step-num">{step.num}</div>
                <div className="wdp-step-icon">
                  <i className={step.fa} />
                </div>
                <div className="wdp-step-body">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   DEFAULT EXPORT — all three sections
══════════════════════════════════════════ */
const BrandIdentitySections = () => (
  <>
    <WebDevTypes />
    <WebDevTech />
    <WebDevProcess />
  </>
);

export default BrandIdentitySections;
