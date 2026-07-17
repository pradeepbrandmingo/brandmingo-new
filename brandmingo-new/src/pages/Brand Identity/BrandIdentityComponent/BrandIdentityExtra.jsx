import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-lightbulb",
    title: "Strategic Design Thinking",
    desc: "Every design is guided by research, audience insights, and business goals.",
  },
  {
    fa: "fa-solid fa-chart-pie",
    title: "Data-Driven Creativity",
    desc: "We combine market insights with creative design for stronger brand impact.",
  },
  {
    fa: "fa-solid fa-bullhorn",
    title: "Conversion-Focused Design",
    desc: "Create designs that engage audiences and encourage meaningful customer actions.",
  },
  {
    fa: "fa-solid fa-diagram-project",
    title: "Scalable Brand Systems",
    desc: "Build flexible brand identities that grow with your business over time.",
  },
  {
    fa: "fa-solid fa-medal",
    title: "Lasting Brand Value",
    desc: "Develop memorable brand experiences that build trust and long-term recognition.",
  },
];

const ECOM_ALLOWS = [
  "Build strong brand recognition",
  "Create a consistent visual identity",
  "Connect with your ideal audience",
  "Strengthen customer trust",
];

const ECOM_PROVIDES = [
  "Logo & visual identity design",
  "Brand guidelines & style systems",
  "Corporate branding & stationery",
  "Marketing creatives & brand assets",
];

const PLATFORMS = [
  {
    fa: "fa-solid fa-pen-nib",
    title: "Logo & Visual Identity",
    sub: "BEST FOR",
    desc: "Creating a memorable brand identity that stands out in the market.",
  },
  {
    fa: "fa-solid fa-layer-group",
    title: "Brand Guidelines",
    sub: "BEST FOR",
    desc: "Keeping your branding consistent across every business platform.",
  },
  {
    fa: "fa-solid fa-id-card",
    title: "Corporate Identity",
    sub: "BEST FOR",
    desc: "Building a professional image for business communication.",
  },
  {
    fa: "fa-solid fa-bullhorn",
    title: "Marketing & Brand Assets",
    sub: "BEST FOR",
    desc: "Designing impactful creatives for marketing and promotions.",
  },
];

const FAQS = [
  {
    fa: "fa-solid fa-pen-ruler",
    q: "What graphic design services do you offer?",
    a: "We provide logo design, brand identity, packaging design, social media creatives, brochures, marketing materials, and complete branding solutions.",
  },
  {
    fa: "fa-solid fa-lightbulb",
    q: "Why is brand identity important?",
    a: "A strong brand identity builds recognition, earns customer trust, improves credibility, and creates a consistent experience across every platform.",
  },
  {
    fa: "fa-solid fa-clock",
    q: "How long does a graphic design project take?",
    a: "Project timelines depend on the scope. Logo design takes 5–10 days, while complete branding projects usually require 2–4 weeks.",
  },
  {
    fa: "fa-solid fa-book-open",
    q: "Do you provide brand guidelines?",
    a: "Yes. We create detailed brand guidelines covering logo usage, typography, color palettes, imagery, and visual identity standards.",
  },
  {
    fa: "fa-solid fa-arrows-rotate",
    q: "Can you redesign my existing brand?",
    a: "Absolutely. We modernize your brand identity while preserving recognition and creating a fresh, professional visual presence.",
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
            <div className="wds-section-label">OUR PROMISE</div>
            <h3 className="wde-heading">
              What Makes Our Graphic <span>Design Different?</span>
            </h3>
            <p className="wde-desc">
              Great design goes beyond aesthetics—it builds recognition,
              communicates your brand story, and creates lasting customer
              impressions. Our creative solutions combine strategy, consistency,
              and innovation to help your business stand out in a competitive
              market
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
                Great design doesn't just attract attention{" "}
                <em>—it builds trust, </em>
                recognition, and lasting brand value
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
              Do You Need
              <span>Brand Identity Design?</span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              If your brand lacks consistency, recognition, or a clear visual
              identity, you're missing valuable business opportunities. A strong
              brand identity helps you build trust, stand out from competitors,
              and create lasting connections with your audience
            </p>
          </div>

          {/* Right — two cards */}
          <div className="wdec-cards">
            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.1s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-palette" />
              </div>
              <h4>
                Brand Identity<span>Allows You To:</span>
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
              Which Brand Identity<span> Service</span> Fits Your Business?
            </h3>
            <p className="wdpl-desc">
              Every brand has unique goals, audiences, and challenges. We help
              you choose the right branding solution to build recognition,
              trust, and long-term business growth
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
                The right brand identity strategy strengthens recognition,
                builds trust, and helps your business grow with confidence
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
const BrandIdentityExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default BrandIdentityExtra;
