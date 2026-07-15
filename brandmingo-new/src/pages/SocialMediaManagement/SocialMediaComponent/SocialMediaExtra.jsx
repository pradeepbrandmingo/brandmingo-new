import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-bullseye",
    title: "Strategic Content Planning",
    desc: "Content tailored to your audience, industry, and business goals for maximum engagement.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Growth-Focused Strategy",
    desc: "Proven strategies designed to increase visibility, engagement, followers, and brand authority.",
  },
  {
    fa: "fa-solid fa-chart-pie",
    title: "Performance Analytics",
    desc: "Track insights, measure engagement, and optimize content using real-time performance data.",
  },
  {
    fa: "fa-solid fa-comments",
    title: "Community-First Engagement",
    desc: "Build meaningful relationships through conversations, interaction, and audience engagement.",
  },
  {
    fa: "fa-solid fa-sliders",
    title: "Transparent Account Management",
    desc: "Clear reporting, regular updates, and performance insights to keep your brand moving forward.",
  },
];

const ECOM_ALLOWS = [
  "Increase brand awareness & engagement",
  "Build a loyal online community",
  "Reach your ideal audience consistently",
  "Drive business growth through content",
];

const ECOM_PROVIDES = [
  "Content creation & creative design",
  "Social media strategy & planning",
  "Community management & engagement",
  "Analytics, reporting & optimization",
];

const PLATFORMS = [
  {
    fa: "fa-brands fa-instagram",
    title: "Instagram",
    sub: "BEST FOR",
    desc: "Visual branding, Reels & audience engagement",
  },
  {
    fa: "fa-brands fa-facebook",
    title: "Facebook",
    sub: "BEST FOR",
    desc: "Local marketing, communities & lead generation",
  },
  {
    fa: "fa-brands fa-linkedin",
    title: "LinkedIn",
    sub: "BEST FOR",
    desc: "B2B networking & professional brand growth",
  },
  {
    fa: "fa-brands fa-youtube",
    title: "YouTube",
    sub: "BEST FOR",
    desc: "Video marketing & long-term brand visibility",
  },
];

const FAQS = [
  {
    fa: "fa-brands fa-instagram",
    q: "Which social media platforms do you manage?",
    a: "We manage Instagram, Facebook, LinkedIn, YouTube, and other platforms based on your business goals, industry, and target audience to maximize engagement and business growth.",
  },
  {
    fa: "fa-solid fa-chart-line",
    q: "Which social platform is right for my business?",
    a: "The ideal platform depends on your audience and objectives. We recommend the best channels to increase brand awareness, engagement, leads, and long-term business growth.",
  },
  {
    fa: "fa-solid fa-calendar-check",
    q: "How long does social media growth take?",
    a: "Organic social media growth requires consistency. Most businesses begin seeing improved engagement within weeks, while stronger brand growth develops over the following months.",
  },
  {
    fa: "fa-solid fa-users",
    q: "How do you increase engagement and followers?",
    a: "We create strategic content, publish consistently, optimize every post, and actively engage with your audience to build an authentic community and sustainable growth.",
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
            <div className="wds-section-label">WHY CHOOSE US</div>
            <h3 className="wde-heading">
              What Makes Our Social Media Strategy <span>Different?</span>
            </h3>
            <p className="wde-desc">
              Most brands post content without a strategy. We combine
              creativity, consistency, and data-driven marketing to increase
              engagement, grow your audience, and deliver measurable business
              results.
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
                If your audience isn't engaging,{" "}
                <em>your social media isn't delivering </em>
                real business growth.
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
              Ready to Grow <span> Through Social Media?</span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              Without a clear strategy, social media becomes noise. We help you
              build a strong brand presence, engage the right audience, and
              generate consistent leads through creative, data-driven social
              media management.
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
                Social Media Management
                <span>Allows You To:</span>
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
            <div className="wds-section-label">CHOOSE WHAT’S RIGHT</div>
            <h3 className="wdpl-heading">
              Which Social Media Platform <span>Drives</span> Your Growth?
            </h3>
            <p className="wdpl-desc">
              Every platform serves a different purpose. We help you choose the
              right social media channel based on your audience, business goals,
              and growth strategy to maximize engagement, visibility, and
              conversions.
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
                The best platform isn't the biggest one — it's where your ideal
                audience spends their time.
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
const SocialMediaExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default SocialMediaExtra;
