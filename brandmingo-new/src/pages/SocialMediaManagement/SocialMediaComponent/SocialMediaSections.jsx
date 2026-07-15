import React, { useEffect, useRef, useState } from "react";
// import "./webdev-sections.css";
import { openEnquiryPopup } from "../../../utils/popup";
/* ── DATA ── */

const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-pen-to-square",
    num: "01",
    title: "Content Creation & Management",
    desc: "Create engaging posts, reels, and branded content designed to increase reach, engagement, and customer interest.",
  },
  {
    fa: "fa-solid fa-bullhorn",
    num: "02",
    title: "Social Media Strategy",
    desc: "Develop customized content strategies that align with your business goals and connect with your ideal audience.",
  },
  {
    fa: "fa-solid fa-comments",
    num: "03",
    title: "Community Management",
    desc: "Engage with your audience, respond to messages, and build lasting customer relationships across every platform.",
  },
  {
    fa: "fa-solid fa-chart-line",
    num: "04",
    title: "Performance & Analytics",
    desc: "Track key metrics, measure performance, and optimize campaigns to improve engagement and business growth.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-brands fa-instagram",
    title: "Instagram Marketing",
    desc: "Create engaging reels, posts, and stories that boost brand awareness, audience engagement, and organic growth.",
  },
  {
    fa: "fa-brands fa-facebook-f",
    title: "Facebook Marketing",
    desc: "Reach targeted customers with strategic content, community management, and high-performing promotional campaigns.",
  },
  {
    fa: "fa-brands fa-youtube",
    title: "YouTube Marketing",
    desc: "Grow your brand with engaging video content that increases visibility, builds trust, and drives audience engagement.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Performance Analytics",
    desc: "Measure engagement, audience behavior, and campaign performance with real-time insights for smarter marketing decisions.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-magnifying-glass",
    title: "Brand & Audience Research",
    desc: "We analyze your business, target audience, competitors, and market trends to build a strong social media foundation.",
  },
  {
    num: "02",
    fa: "fa-solid fa-calendar-check",
    title: "Content Strategy & Planning",
    desc: "We create content calendars, posting schedules, and platform-specific strategies designed for consistent brand growth.",
  },
  {
    num: "03",
    fa: "fa-solid fa-photo-film",
    title: "Creative Content Production",
    desc: "We design engaging posts, reels, graphics, and creatives that capture attention and encourage audience interaction.",
  },
  {
    num: "04",
    fa: "fa-solid fa-users",
    title: "Community Engagement",
    desc: "We actively manage interactions, respond to messages, and build meaningful relationships with your online community.",
  },
  {
    num: "05",
    fa: "fa-solid fa-chart-line",
    title: "Performance Analysis & Optimization",
    desc: "We monitor insights, optimize content performance, and refine strategies to maximize reach, engagement, and business growth.",
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
            <div className="wds-section-label">WHAT WE MANAGE</div>
            <h3 className="wds-types-heading">
              {" "}
              Social Media Solutions Designed to Grow Your Brand
            </h3>
            <p className="wds-types-desc">
              Every business needs a unique social media strategy. We understand
              your goals, identify the right audience, and create content that
              builds engagement, strengthens your brand, and delivers measurable
              business growth.
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
              POWERED BY LEADING PLATFORMS
            </div>
            <h3 className="wdt-heading">
              Platforms & Tools That Drive Social Growth
            </h3>
            <p className="wdt-desc">
              We use leading social media platforms and advanced analytics tools
              to help brands reach the right audience, increase engagement, and
              achieve measurable growth. Every strategy is backed by data,
              creativity, and continuous performance optimization.
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
            <h3 className="wdp-heading">Our Social Media Growth Process</h3>
            <p className="wdp-desc">
              Successful social media growth requires a clear strategy. We
              follow a structured, data-driven process to strengthen your brand,
              engage your audience, and deliver consistent business growth
              across every platform.
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Have a brand to grow?</h4>
                <p>
                  Let’s build engaging content and strategies that turn your
                  audience into loyal customers.
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
const SocialMediaSections = () => (
  <>
    <WebDevTypes />
    <WebDevTech />
    <WebDevProcess />
  </>
);

export default SocialMediaSections;
