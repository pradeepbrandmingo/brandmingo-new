import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-crosshairs",
    title: "Precision Audience Targeting",
    desc: "Reach high-intent audiences with advanced targeting strategies for better leads and conversions.",
  },
  {
    fa: "fa-solid fa-sack-dollar",
    title: "ROI-Driven Campaigns",
    desc: "Maximize every advertising investment with campaigns built for stronger returns and business growth.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Continuous Optimization",
    desc: "Monitor, test, and optimize campaigns in real time for improved performance and lower ad costs.",
  },
  {
    fa: "fa-solid fa-funnel-dollar",
    title: "Conversion-Focused Strategy",
    desc: "Turn website visitors into qualified leads and paying customers through data-driven campaigns.",
  },
  {
    fa: "fa-solid fa-chart-column",
    title: "Transparent Reporting",
    desc: "Track every click, lead, and conversion with clear reports and actionable performance insights.",
  },
];

const ECOM_ALLOWS = [
  "Increase brand visibility across top platforms",
  "Generate qualified leads and consistent sales",
  "Reach the right audience with smart targeting",
  "Scale your business with data-driven campaigns",
];

const ECOM_PROVIDES = [
  "Google Ads & Meta Ads campaign management",
  "Audience targeting and campaign strategy",
  "High-converting ad creatives and copy",
  "Performance tracking, optimization, and reporting",
];

const PLATFORMS = [
  {
    fa: "fa-brands fa-google",
    title: "Google Ads",
    sub: "BEST FOR",
    desc: "High-intent searches & quality lead generation",
  },
  {
    fa: "fa-brands fa-facebook",
    title: "Meta Ads",
    sub: "BEST FOR",
    desc: "Audience targeting, engagement & brand growth",
  },
  {
    fa: "fa-brands fa-youtube",
    title: "YouTube Ads",
    sub: "BEST FOR",
    desc: "Video advertising & customer engagement",
  },
  {
    fa: "fa-brands fa-linkedin",
    title: "LinkedIn Ads",
    sub: "BEST FOR",
    desc: " B2B lead generation & professional outreach",
  },
];

const FAQS = [
  {
    fa: "fa-solid fa-bullhorn",
    q: "What advertising platforms do you manage?",
    a: "We manage campaigns across Google Ads, Meta Ads (Facebook & Instagram), YouTube Ads, and LinkedIn Ads. Every platform is selected based on your business goals, audience, and campaign objectives.",
  },
  {
    fa: "fa-solid fa-chart-line",
    q: "Which advertising platform is best for my business?",
    a: "The right platform depends on your industry, target audience, budget, and marketing goals. We analyze your business and recommend the platform that delivers the highest ROI.",
  },
  {
    fa: "fa-solid fa-clock",
    q: "How long does it take to see results from ads?",
    a: "Most campaigns begin generating data within a few days, while consistent leads and measurable growth improve through continuous optimization, testing, and performance tracking.",
  },
  {
    fa: "fa-solid fa-gear",
    q: "How do you improve campaign performance over time?",
    a: "We continuously monitor campaign data, test creatives, optimize targeting, adjust budgets, and refine bidding strategies to increase conversions and maximize your return on investment.",
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
            <div className="wds-section-label">WHY BRANDS CHOOSE US</div>
            <h3 className="wde-heading">
              Campaigns That Generate Leads
              <span> Not Just Clicks</span>
            </h3>
            <p className="wde-desc">
              Successful advertising is about more than traffic. We create
              performance-driven campaigns that attract qualified customers,
              increase conversions, and maximize ROI through data-backed
              strategies and continuous optimization.
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
                If your ads aren't generating results, <em>you're funding</em>,
                your competitors' growth
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
            <div className="wds-section-label">Grow Your Business</div>
            <h3 className="wdec-heading">
              Ready to Scale with Ads &<span> Campaigns?</span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              Stop relying only on organic reach. Our performance-driven
              advertising campaigns help you reach the right audience, generate
              qualified leads, increase conversions, and grow your business with
              measurable results.
            </p>
          </div>

          {/* Right — two cards */}
          <div className="wdec-cards">
            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.1s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-bullhorn" />
              </div>
              <h4>
                Ads & Campaigns <span>Help You:</span>
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
            <div className="wds-section-label">CHOOSE THE RIGHT PLATFORM</div>
            <h3 className="wdpl-heading">
              Which Ad Platform Fits <span>Your</span> Goals?
            </h3>
            <p className="wdpl-desc">
              Selecting the right advertising platform is the key to better
              results. We help you choose the best channel based on your
              business goals, target audience, budget, and growth strategy to
              generate quality leads and maximize ROI.
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
                The right platform isn't the most popular one—it's where your
                ideal customers discover, engage, and convert.
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
const AdsAndCampaignsExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default AdsAndCampaignsExtra;
