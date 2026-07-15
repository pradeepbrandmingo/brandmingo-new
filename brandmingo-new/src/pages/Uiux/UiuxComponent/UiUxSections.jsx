import React, { useEffect, useRef, useState } from "react";
// import "./webdev-sections.css";
import { openEnquiryPopup } from "../../../utils/popup";
/* ── DATA ── */

const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-computer-mouse",
    num: "01",
    title: "Website Usability Audit",
    desc: "Evaluate navigation, accessibility, and interface usability to deliver smoother interactions and a better user experience.",
  },
  {
    fa: "fa-solid fa-route",
    num: "02",
    title: "User Journey Audit",
    desc: "Analyze user behavior, navigation paths, and touchpoints to improve engagement and optimize conversion opportunities.",
  },
  {
    fa: "fa-solid fa-arrow-trend-up",
    num: "03",
    title: "Conversion Rate Audit",
    desc: "Review landing pages, CTAs, and conversion funnels to increase leads, reduce drop-offs, and improve business growth.",
  },
  {
    fa: "fa-solid fa-gauge-high",
    num: "04",
    title: "Performance & UX Audit",
    desc: "Assess website speed, responsiveness, and overall user experience to create faster, seamless digital interactions.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-solid fa-user-group",
    title: "User Insights Discovery",
    desc: "Uncover valuable insights from user behavior, feedback, and interaction patterns to better understand audience needs.",
  },
  {
    fa: "fa-solid fa-route",
    title: "Experience Journey Mapping",
    desc: "Analyze every stage of the user journey to remove friction and create smooth, intuitive digital experiences.",
  },
  {
    fa: "fa-solid fa-flask",
    title: "UX Evaluation & Testing",
    desc: "Evaluate usability, accessibility, and interface performance through expert audits and real-world user testing.",
  },
  {
    fa: "fa-solid fa-chart-simple",
    title: "Performance Intelligence",
    desc: "Turn analytics, heatmaps, and user insights into actionable recommendations that improve engagement and conversions.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-magnifying-glass",
    title: "UX Discovery & Website Assessment",
    desc: "We evaluate your website, user behavior, and business goals to identify usability issues and opportunities for UX improvement.",
  },
  {
    num: "02",
    fa: "fa-solid fa-chart-line",
    title: "User Behavior & Data Analysis",
    desc: "Using analytics, heatmaps, and interaction data, we uncover friction points and optimize user journeys for better engagement.",
  },
  {
    num: "03",
    fa: "fa-solid fa-laptop-code",
    title: "Interface & Usability Evaluation",
    desc: "We review navigation, accessibility, responsiveness, and interface consistency to deliver seamless user experiences.",
  },
  {
    num: "04",
    fa: "fa-solid fa-lightbulb",
    title: "UX Optimization Strategy",
    desc: "Our experts recommend practical improvements to enhance user flows, increase engagement, and boost conversion performance.",
  },
  {
    num: "05",
    fa: "fa-solid fa-file-lines",
    title: "Reporting & Continuous Enhancement",
    desc: "Receive a detailed audit report with prioritized recommendations and an actionable roadmap for continuous UX improvements.",
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
            <div className="wds-section-label">WHAT WE AUDIT</div>
            <h3 className="wds-types-heading">
              Types of UI/UX Audits We Perform
            </h3>
            <p className="wds-types-desc">
              Every digital experience is different, and so are the challenges
              users face. Our specialized UI/UX audits help identify usability
              issues, improve user journeys, and optimize website performance to
              create seamless experiences that drive engagement, conversions,
              and business growth.
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
            <div className="wds-section-label">
              BUILT WITH UX INSIGHTS & TOOLS
            </div>
            <h3 className="wdt-heading">Tools & Methods We Use</h3>
            <p className="wdt-desc">
              We combine proven UX methodologies, behavioral analysis, and
              data-driven insights to identify usability challenges, enhance
              customer experiences, and improve website performance. Our
              approach helps businesses create seamless digital journeys that
              increase engagement, conversions, and long-term customer
              satisfaction.
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
            <h3 className="wdp-heading"> Our Proven UI/UX Audit Process</h3>
            <p className="wdp-desc">
              Our structured UI/UX audit process identifies usability issues,
              improves user experiences, and optimizes conversion opportunities.
              Every step is focused on creating seamless digital journeys that
              increase engagement, customer satisfaction, and measurable
              business growth.
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Need to Improve Your User Experience?</h4>
                <p>
                  Let's identify usability issues, optimize user journeys, and
                  create seamless digital experiences that improve engagement
                  and conversions.
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
const UiUxSections = () => (
  <>
    <WebDevTypes />
    <WebDevTech />
    <WebDevProcess />
  </>
);

export default UiUxSections;
