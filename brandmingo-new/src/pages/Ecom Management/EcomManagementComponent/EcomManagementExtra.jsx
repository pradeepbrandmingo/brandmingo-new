import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-store",
    title: "Marketplace-Focused Growth",
    desc: "Increase product visibility across leading marketplaces to drive more sales consistently.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "ROI-Driven Strategy",
    desc: "Every optimization is focused on maximizing revenue, profitability, and long-term growth.",
  },
  {
    fa: "fa-solid fa-chart-pie",
    title: "Data-Driven Decisions",
    desc: "Use analytics and customer insights to improve store performance continuously.",
  },
  {
    fa: "fa-solid fa-cart-shopping",
    title: "Conversion Optimization",
    desc: "Transform visitors into loyal customers through strategic store optimization efforts.",
  },
  {
    fa: "fa-solid fa-file-lines",
    title: "Transparent Reporting",
    desc: "Receive clear performance reports with actionable insights and growth recommendations.",
  },
];

const ECOM_ALLOWS = [
  "Increase product visibility",
  "Improve conversion rates",
  "Generate more online sales",
  "Scale your business faster",
];

const ECOM_PROVIDES = [
  "Marketplace account management",
  "Product listing optimization",
  "Inventory & order management",
  "Performance reporting & analytics",
];

const PLATFORMS = [
  {
    fa: "fa-solid fa-store",
    title: "Marketplace Management",
    sub: "BEST FOR",
    desc: "Managing Amazon, Flipkart, Myntra, Meesho, Etsy, and other marketplaces.",
  },
  {
    fa: "fa-solid fa-magnifying-glass",
    title: "Ecommerce SEO",
    sub: "BEST FOR",
    desc: "Improving product visibility, organic traffic, and search engine rankings.",
  },
  {
    fa: "fa-solid fa-bullhorn",
    title: "Performance Marketing",
    sub: "BEST FOR",
    desc: "Driving targeted traffic, customer acquisition, and online store sales.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Conversion Optimization",
    sub: "BEST FOR",
    desc: "Increasing conversions, revenue, and overall store performance consistently.",
  },
];

const FAQS = [
  {
    fa: "fa-solid fa-store",
    q: "What ecommerce management services do you offer?",
    a: "We provide marketplace management, product listing optimization, inventory management, ecommerce SEO, advertising, order monitoring, and growth consulting.",
  },
  {
    fa: "fa-solid fa-layer-group",
    q: "Which ecommerce platform is best for my business?",
    a: "The right platform depends on your products, audience, and business goals. We help you choose and optimize the best ecommerce ecosystem.",
  },
  {
    fa: "fa-solid fa-clock",
    q: "How long does it take to see results?",
    a: "Most ecommerce stores start seeing measurable improvements within 30–90 days, depending on competition, store performance, and optimization opportunities.",
  },
  {
    fa: "fa-solid fa-chart-line",
    q: "How do you increase ecommerce sales?",
    a: "We optimize listings, improve store visibility, manage advertising campaigns, enhance customer experience, and implement data-driven growth strategies.",
  },
  {
    fa: "fa-brands fa-amazon",
    q: "Which marketplaces do you manage?",
    a: "We manage Amazon, Flipkart, Myntra, Meesho, JioMart, Etsy, Shopify, WooCommerce, and other leading ecommerce platforms.",
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
              Why Brands Choose Our <span>Ecommerce Management Services</span>
            </h3>
            <p className="wde-desc">
              Most agencies focus only on traffic. We focus on increasing sales,
              improving profitability, and building scalable ecommerce
              businesses through data-driven management and continuous
              optimization.
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
                More visibility. More sales. More customers. More growth{" "}
                <em>That's the power of professional </em>
                ecommerce management
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
              <span>Ecommerce Management?</span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              If your online store is struggling with low sales, poor
              visibility, or operational challenges, ecommerce management can
              help. We optimize your store, improve conversions, streamline
              operations, and build sustainable growth across leading ecommerce
              platforms
            </p>
          </div>

          {/* Right — two cards */}
          <div className="wdec-cards">
            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.1s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-cart-shopping" />
              </div>
              <h4>
                Ecommerce Management<span>Allows You To:</span>
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
              Which Ecommerce<span> Strategy </span>Fits You?
            </h3>
            <p className="wdpl-desc">
              Every ecommerce business has unique products, customers, and
              growth goals. We help you choose the right ecommerce strategy to
              increase visibility, improve conversions, and maximize long-term
              sales performance.
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
                The strongest ecommerce brands combine marketplace management,
                SEO, paid marketing, and conversion optimization for sustainable
                growth.
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
const EcomManagementExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default EcomManagementExtra;
