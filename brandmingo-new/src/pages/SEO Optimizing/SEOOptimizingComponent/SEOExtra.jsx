import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-bullseye",
    title: "Highly Targeted SEO",
    desc: "Reach the right audience with precise keyword targeting strategies.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "ROI-Focused SEO",
    desc: "Optimized to deliver long-term value and measurable organic growth.",
  },
  {
    fa: "fa-solid fa-chart-pie",
    title: "Data-Driven Optimization",
    desc: "Continuous analysis and improvements to boost rankings and traffic.",
  },
  {
    fa: "fa-solid fa-magnifying-glass",
    title: "Conversion-Focused Approach",
    desc: "Designed to turn organic visitors into leads and customers.",
  },
  {
    fa: "fa-solid fa-sliders",
    title: "Easy SEO Management",
    desc: "Transparent reporting and clear insights for better decisions.",
  },
];
const ECOM_ALLOWS = [
  "Increase Google rankings & visibility",
  "Drive qualified organic website traffic",
  "Generate consistent leads & enquiries",
  "Build long-term business growth",
];

const ECOM_PROVIDES = [
  "SEO audit & keyword strategy",
  "On-page & technical optimization",
  "Content marketing & link building",
  "Performance tracking & SEO reporting",
];

const PLATFORMS = [
  {
    fa: "fa-solid fa-magnifying-glass",
    title: "On-Page SEO",
    sub: "BEST FOR",
    desc: "Improve content quality, keyword relevance, and search visibility.",
  },
  {
    fa: "fa-solid fa-screwdriver-wrench",
    title: "Technical SEO",
    sub: "BEST FOR",
    desc: "Enhance website speed, indexing, and technical performance.",
  },
  {
    fa: "fa-solid fa-link",
    title: "Off-Page SEO",
    sub: "BEST FOR",
    desc: "Build domain authority, quality backlinks, and online trust.",
  },
  {
    fa: "fa-solid fa-location-dot",
    title: "Local SEO",
    sub: "BEST FOR",
    desc: "Increase local visibility, nearby reach, and customer growth.",
  },
];

const FAQS = [
  {
    fa: "fa-solid fa-list-check",
    q: "What SEO services do you offer?",
    a: "We provide Technical SEO, On-Page SEO, Off-Page SEO, Local SEO, Keyword Research, Content Optimization, SEO Audits, Link Building, eCommerce SEO, and Enterprise SEO services.",
  },
  {
    fa: "fa-solid fa-bullseye",
    q: "Which SEO strategy is best for my business?",
    a: "The right SEO strategy depends on your industry, competition, audience, and business goals. We create a customized SEO roadmap designed to maximize long-term growth.",
  },
  {
    fa: "fa-solid fa-clock",
    q: "How long does SEO take to show results?",
    a: "Most businesses begin seeing measurable improvements within 3–6 months. Competitive industries may require ongoing optimization for stronger long-term rankings.",
  },
  {
    fa: "fa-solid fa-chart-line",
    q: "How do you improve rankings and organic traffic?",
    a: "We combine technical SEO, keyword research, content optimization, link building, UX improvements, and continuous performance tracking for sustainable growth.",
  },
  {
    fa: "fa-solid fa-scale-balanced",
    q: "Is SEO better than paid advertising?",
    a: "SEO delivers long-term organic visibility, while paid ads generate immediate traffic. Combining both strategies helps maximize reach, leads, and business growth.",
  },
];

/* ── shared intersection hook ── */
const useVisible = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
};

/* ══════════════════════════════════════════
   SECTION 1 — What Makes Our Websites Different
══════════════════════════════════════════ */
const WebDevDiff = () => {
  const [ref, visible] = useVisible(0.08);
  return (
    <section className="wde" ref={ref}>
      <div className="wde-container">
        <div className="wde-grid">
          {/* Left */}
          <div className="wde-left">
            <div className="wds-section-label">OUR DIFFERENCE</div>
            <h3 className="wde-heading">
              Why Businesses Choose Brandmingo <span>SEO Services</span>
            </h3>
            <p className="wde-desc">
              Most SEO agencies focus only on rankings. At Brandmingo, we focus
              on qualified traffic, lead generation, measurable ROI, and
              long-term business growth through proven SEO strategies.
            </p>
            <div className="wde-gradient-bar" />
          </div>

          {/* Right */}
          <div className="wde-right">
            <div className="wde-features">
              {DIFF_FEATURES.map((f, i) => (
                <div
                  key={i}
                  className={`wde-feat${visible ? " wde-anim" : ""}`}
                  style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
                >
                  <div className="wde-feat-icon">
                    <i className={f.fa} />
                  </div>
                  <div className="wde-feat-body">
                    <h5>{f.title}</h5>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="wde-note">
              <div className="wde-note-icon">
                <i className="fa-solid fa-rocket" />
              </div>
              <p>
                Higher Google rankings matter only when they generate{" "}
                <em>qualified leads </em>
                real customers, and measurable business growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 2 — E-commerce
══════════════════════════════════════════ */
const WebDevEcom = () => {
  const [ref, visible] = useVisible(0.08);
  return (
    <section className="wdec" ref={ref}>
      <div className="wdec-container">
        <div className="wdec-grid">
          {/* Left */}
          <div className="wdec-left">
            <div className="wds-section-label">GROW YOUR BUSINESS</div>
            <h3 className="wdec-heading">
              Is SEO Right
              <span>for Your Business?</span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              If your website isn't generating consistent organic traffic or
              relies heavily on paid ads, SEO can become your most valuable
              long-term growth channel. A strategic SEO campaign helps improve
              rankings, attract qualified visitors, and generate sustainable
              leads that continue growing your business over time.
            </p>
          </div>

          {/* Right — two cards */}
          <div className="wdec-cards">
            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.1s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-magnifying-glass" />
              </div>
              <h4>
                SEO Optimization <span>Allows You To:</span>
              </h4>
              <ul className="wdec-list">
                {ECOM_ALLOWS.map((item, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-arrow-right" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.2s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-gift" />
              </div>
              <h4>We Provide:</h4>
              <ul className="wdec-list wdec-list--dot">
                {ECOM_PROVIDES.map((item, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-circle" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 3 — Which Platform is Best
   Desktop: Left sticky col | Right 2×2 grid + full-width note
   Mobile: stacked single col
══════════════════════════════════════════ */
const WebDevPlatform = () => {
  const [ref, visible] = useVisible(0.08);
  return (
    <section className="wdpl" ref={ref}>
      <div className="wdpl-container">
        <div className="wdpl-grid">
          {/* Left */}
          <div className="wdpl-left">
            <div className="wds-section-label">CHOOSE YOUR SEO PATH</div>
            <h3 className="wdpl-heading">
              Which SEO <span>Service</span> Do You Need?
            </h3>
            <p className="wdpl-desc">
              Every business has unique goals, competition, and audiences. We
              help you choose the right SEO strategy to improve rankings,
              increase organic traffic, and achieve long-term business growth.
            </p>
          </div>

          {/* Right — 2×2 grid + full-width note below */}
          <div className="wdpl-right">
            <div className="wdpl-cards">
              {PLATFORMS.map((p, i) => (
                <div
                  key={i}
                  className={`wdpl-card${visible ? " wde-anim" : ""}`}
                  style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
                >
                  {/* Icon + text */}
                  <div className="wdpl-card-inner">
                    <div className="wdpl-card-icon">
                      <i className={p.fa} />
                    </div>
                    <div className="wdpl-card-body">
                      <h5>{p.title}</h5>
                      <span className="wdpl-sub">{p.sub}</span>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="wdpl-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
              ))}
            </div>

            {/* Full-width note below the 2×2 grid */}
            <div
              className={`wdpl-note${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.45s" } : {}}
            >
              <div className="wdpl-note-icon">
                <i className="fa-solid fa-lightbulb" />
              </div>
              <p>
                The right SEO strategy depends on your goals — and we help you
                grow in the right direction from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 4 — FAQ (DARK accordion)
══════════════════════════════════════════ */
const WebDevFaq = () => {
  const [ref, visible] = useVisible(0.08);
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="wdfq" ref={ref}>
      <div className="wdfq-container">
        <div className="wds-section-label">QUESTIONS? WE'VE GOT ANSWERS</div>
        <h3 className="wdfq-heading">Frequently Asked Questions</h3>

        <div className="wdfq-list">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`wdfq-item${open === i ? " open" : ""}${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              onClick={() => toggle(i)}
            >
              <div className="wdfq-q">
                <div className="wdfq-icon">
                  <i className={faq.fa} />
                </div>
                <span>{faq.q}</span>
                <div className="wdfq-plus">
                  <i
                    className={`fa-solid ${open === i ? "fa-minus" : "fa-plus"}`}
                  />
                </div>
              </div>
              {open === i && (
                <div className="wdfq-a">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   DEFAULT EXPORT
══════════════════════════════════════════ */
const SEOExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default SEOExtra;
