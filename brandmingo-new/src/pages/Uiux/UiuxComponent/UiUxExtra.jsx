import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-user-check",
    title: "User-Centric Experience Analysis",
    desc: "Understand user behavior to uncover usability issues and create smoother, more intuitive website experiences.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Conversion-Focused UX Strategy",
    desc: "Optimize user journeys, reduce friction, and improve engagement to increase leads and website conversions.",
  },
  {
    fa: "fa-solid fa-chart-pie",
    title: "Data-Driven UX Insights",
    desc: "Leverage analytics, heatmaps, and user behavior data to make smarter UX decisions with confidence.",
  },
  {
    fa: "fa-solid fa-route",
    title: "User Journey Optimization",
    desc: "Improve navigation, interaction flows, and accessibility for seamless user experiences across your website.",
  },
  {
    fa: "fa-solid fa-clipboard-list",
    title: "Actionable UX Audit Reports",
    desc: "Receive clear audit reports with prioritized recommendations to improve usability and website performance.",
  },
];

const ECOM_ALLOWS = [
  "Identify usability issues and UX gaps  ",
  "Improve navigation and user journeys",
  "Increase engagement and conversions",
  "Increase engagement and conversions",
];

const ECOM_PROVIDES = [
  "Complete UI/UX and usability audit",
  "User journey and interaction analysis",
  "Conversion-focused UX recommendations",
  "Actionable audit reports with priorities",
];

const PLATFORMS = [
  {
    fa: "fa-solid fa-user-check",
    title: "Usability Audit",
    sub: "BEST FOR",
    desc: "Improving navigation, accessibility, and overall website usability for better user experiences.",
  },
  {
    fa: "fa-solid fa-route",
    title: "User Journey Audit",
    sub: "BEST FOR",
    desc: "Optimizing user flows, interaction paths, and customer journeys for higher engagement.",
  },
  {
    fa: "fa-solid fa-filter",
    title: "Conversion Funnel Audit",
    sub: "BEST FOR",
    desc: "Increasing conversions, reducing drop-offs, and optimizing key user actions and funnels.",
  },
  {
    fa: "fa-solid fa-gauge-high",
    title: "Performance & UX Audit",
    sub: "BEST FOR",
    desc: "Enhancing website speed, responsiveness, and overall digital user experience performance.",
  },
];

const FAQS = [
  {
    fa: "fa-solid fa-magnifying-glass",
    q: "What is a UI/UX audit?",
    a: "A UI/UX audit is a comprehensive review of your website's usability, navigation, accessibility, and user experience to identify issues affecting engagement, conversions, and overall website performance.",
  },
  {
    fa: "fa-solid fa-user-check",
    q: "How do I know if my website needs a UI/UX audit?",
    a: "If your website has high bounce rates, low conversions, poor engagement, or confusing navigation, a UI/UX audit helps identify the problems and provides practical recommendations for improvement.",
  },
  {
    fa: "fa-solid fa-clock",
    q: "How long does a UI/UX audit take?",
    a: "Most UI/UX audits are completed within 5–10 business days, depending on your website's size and complexity, and include detailed findings with actionable improvement recommendations.",
  },
  {
    fa: "fa-solid fa-clipboard-list",
    q: "What will I receive after the audit?",
    a: "You'll receive a detailed audit report covering usability issues, user behavior insights, conversion opportunities, accessibility recommendations, and a prioritized UX improvement roadmap.",
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
            <div className="wds-section-label">OUR APPROACH</div>
            <h3 className="wde-heading">
              Why Choose Our UI/UX Audit <span>Services? </span>
            </h3>
            <p className="wde-desc">
              A successful website is built on more than great design. Our UI/UX
              audits uncover usability issues, improve user journeys, and
              optimize every interaction using data-driven insights to increase
              engagement, boost conversions, and support long-term business
              growth.
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
                Receive prioritized recommendations and practical insights
                <em> to improve usability and website performance.</em>
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
              Why Your Business
              <span>Needs a UI/UX Audit</span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              A poor user experience can cost your business valuable leads and
              customers. Our UI/UX audits identify usability issues, improve
              user journeys, and optimize website performance to increase
              engagement, strengthen trust, and boost conversions.
            </p>
          </div>

          {/* Right — two cards */}
          <div className="wdec-cards">
            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.1s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-circle-dot" />
              </div>
              <h4>
                UI/UX Audit <span>Helps You To:</span>
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
              <h4>What We Deliver:</h4>
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
            <div className="wds-section-label">CHOOSE WHAT’S RIGHT</div>
            <h3 className="wdpl-heading">
              Choose the Right
              <span> UI/UX</span> Audit for Your Business
            </h3>
            <p className="wdpl-desc">
              Every website has unique usability challenges and business goals.
              Our specialized UI/UX audits identify experience gaps, improve
              user journeys, and optimize website performance to increase
              engagement, conversions, and long-term business growth.
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
                Not sure which UI/UX audit fits your business? Our experts
                recommend the right strategy based on your goals, users, and
                growth opportunities.
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
const UiUxExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default UiUxExtra;
