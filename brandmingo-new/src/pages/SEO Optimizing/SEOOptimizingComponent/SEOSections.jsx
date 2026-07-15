import React, { useEffect, useRef, useState } from "react";
// import "./webdev-sections.css";
import { openEnquiryPopup } from "../../../utils/popup";

/* ── DATA ── */

const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-file-lines",
    num: "01",
    title: "On-Page SEO",
    desc: "Optimize content, keywords, meta tags, and internal links to improve search rankings and user experience.",
  },
  {
    fa: "fa-solid fa-gears",
    num: "02",
    title: "Technical SEO",
    desc: "Improve website speed, indexing, Core Web Vitals, and crawlability for stronger search performance.",
  },
  {
    fa: "fa-solid fa-link",
    num: "03",
    title: "Off-Page SEO",
    desc: "Build domain authority through quality backlinks, digital PR, and strategic outreach campaigns.",
  },
  {
    fa: "fa-solid fa-location-dot",
    num: "04",
    title: "Local SEO",
    desc: "Increase local visibility with Google Business Profile optimization and location-based SEO strategies.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-brands fa-google",
    title: "Google Search Console",
    desc: "Track search visibility, indexing, keyword performance, and website health using trusted Google search data.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "SEO Analytics Tools",
    desc: "Monitor rankings, organic traffic, user behavior, and SEO performance with accurate analytics and reports.",
  },
  {
    fa: "fa-solid fa-key",
    title: "Keyword Research Tools",
    desc: "Discover valuable keywords, analyze competitors, and uncover search opportunities to increase organic traffic.",
  },
  {
    fa: "fa-solid fa-screwdriver-wrench",
    title: "Technical SEO Tools",
    desc: "Identify crawl issues, speed errors, indexing problems, and technical improvements for stronger SEO performance.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-magnifying-glass",
    title: "SEO Audit & Competitor Analysis",
    desc: "We audit your website, competitors, keyword opportunities, technical health, and current rankings to uncover growth opportunities.",
  },
  {
    num: "02",
    fa: "fa-solid fa-clipboard-list",
    title: "SEO Strategy & Keyword Research",
    desc: "We build a customized SEO roadmap with keyword research, content planning, and strategies aligned with your business goals.",
  },
  {
    num: "03",
    fa: "fa-solid fa-gears",
    title: "On-Page & Technical Optimization",
    desc: "We optimize website structure, content, metadata, Core Web Vitals, and technical SEO to improve search visibility.",
  },
  {
    num: "04",
    fa: "fa-solid fa-link",
    title: "Content & Authority Building",
    desc: "We create SEO-optimized content and build quality backlinks to strengthen authority and improve organic rankings.",
  },
  {
    num: "05",
    fa: "fa-solid fa-chart-line",
    title: "Monitoring & Growth Optimization",
    desc: "We continuously track SEO performance, refine strategies, and optimize campaigns for sustainable organic business growth.",
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
            <div className="wds-section-label">WHAT WE OPTIMIZE</div>
            <h3 className="wds-types-heading">
              SEO Services Tailored to Your Business Goals
            </h3>
            <p className="wds-types-desc">
              Every business has different goals, audiences, and competition. We
              create customized SEO strategies that improve search rankings,
              increase organic traffic, and generate qualified leads through
              data-driven optimization and long-term growth.
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
                <a href="#contact" className="wds-card-link">
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
            <h3 className="wdt-heading">SEO Tools & Platforms We Use</h3>
            <p className="wdt-desc">
              We use industry-leading SEO tools and analytics platforms to
              uncover insights, monitor performance, improve rankings, and
              identify growth opportunities that help your business achieve
              long-term organic success.
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
            <h3 className="wdp-heading"> Our SEO Process</h3>
            <p className="wdp-desc">
              Successful SEO is built on strategy, research, and continuous
              optimization. Our proven process improves search visibility,
              drives qualified organic traffic, and delivers measurable business
              growth through data-driven SEO execution.
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Have an SEO project in mind?</h4>
                <p>
                  Let’s build a strong SEO strategy that drives traffic and real
                  growth.
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
const SEOSections = () => (
  <>
    <WebDevTypes />
    <WebDevTech />
    <WebDevProcess />
  </>
);

export default SEOSections;
