import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const ecommerceHero =
  "https://res.cloudinary.com/dqqgpii8v/image/upload/v1783514025/Untitled_design_we7jsc.png";

const NAV = [
  {
    fa: "fa-brands fa-amazon",
    label: "Amazon Management",
    to: "/amazon-management-services",
  },
  {
    fa: "fa-solid fa-store",
    label: "Flipkart Management",
    to: "/flipkart-management-services",
  },
  {
    fa: "fa-solid fa-bag-shopping",
    label: "Shopsy Management",
    to: "/shopsy-management-services",
  },
  {
    fa: "fa-solid fa-cart-shopping",
    label: "Snapdeal Management",
    to: "/snapdeal-management-services",
  },
];

const REASONS = [
  {
    fa: "fa-solid fa-store",
    title: "Increase Marketplace Visibility",
    desc: "Boost product visibility across marketplaces to attract more customers and increase sales.",
  },
  {
    fa: "fa-solid fa-cart-shopping",
    title: "Increase Sales & Conversions",
    desc: "Optimize listings, pricing, and customer journeys to drive higher conversions and revenue.",
  },
  {
    fa: "fa-solid fa-boxes-stacked",
    title: "Manage Inventory Efficiently",
    desc: "Track inventory, prevent stock issues, and maintain smooth store operations every day.",
  },
  {
    fa: "fa-solid fa-face-smile",
    title: "Enhance Customer Experience",
    desc: "Deliver faster order management and seamless shopping experiences that build customer trust.",
  },
  {
    fa: "fa-solid fa-rocket",
    title: "Achieve Sustainable Growth",
    desc: "Scale your ecommerce business with data-driven strategies built for long-term success.",
  },
];

const STATS = [
  {
    fa: "fa-solid fa-box",
    key: "p",
    suffix: "+",
    label: "Orders Managed",
    target: 150,
  },
  {
    fa: "fa-solid fa-face-smile",
    key: "s",
    suffix: "%",
    label: "Client Satisfaction",
    target: 98,
  },
  {
    fa: "fa-solid fa-headset",
    key: "h",
    suffix: "/7",
    label: "Store Support Available",
    target: 24,
  },
  {
    fa: "fa-solid fa-chart-line",
    key: "e",
    suffix: "+",
    label: "Years Ecommerce Experience",
    target: 5,
  },
];

const EcomManagementAbout = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeNav, setNav] = useState(0);
  const [counts, setCounts] = useState({ p: 0, s: 0, h: 0, e: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          animCounts();
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const animCounts = () => {
    const targets = { p: 150, s: 98, h: 24, e: 5 };
    let step = 0;
    const iv = setInterval(() => {
      step++;
      const r = 1 - Math.pow(1 - Math.min(step / 60, 1), 3);
      setCounts({
        p: Math.round(targets.p * r),
        s: Math.round(targets.s * r),
        h: Math.round(targets.h * r),
        e: Math.round(targets.e * r),
      });
      if (step >= 60) clearInterval(iv);
    }, 2000 / 60);
  };

  return (
    <section className="wda" ref={sectionRef}>
      <div className="wda-grid">
        {/* ══ LEFT SIDEBAR ══ */}
        <aside className="wda-sidebar">
          {/* ── CARD 1: Logo ── */}
          <div className="wda-main-card">
            <div className="wda-logo-row">
              <div className="wda-logo-img">
                <i className="fa-solid fa-layer-group" />
              </div>
              <div className="wda-logo-text">
                <b>Brandmingo</b>
                <span>Digital Solutions</span>
              </div>
            </div>
          </div>

          {/* ── CARD 2: Nav ── */}
          <div className="wda-main-card">
            <div className="wda-nav-wrap wda-nav-wrap--no-border">
              <ul className="wda-nav">
                {NAV.map((n, i) => (
                  <li
                    key={i}
                    className={activeNav === i ? "active" : ""}
                    onClick={() => {
                      setNav(i); // active UI
                      navigate(n.to); // redirect 🔥
                    }}
                  >
                    <span className="nl">
                      <i className={n.fa} />
                      {n.label}
                    </span>
                    <i className="fa-solid fa-chevron-right chev" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── CARD 3: Call CTA ── */}
          <div className="wda-main-card wda-call">
            <i className="fa-solid fa-rocket wda-rocket" />
            <h3>
              Let’s Grow Your <span>Business with Ecommerce</span>
            </h3>
            <p>
              Want to boost your online sales? Let’s turn your store into a
              high-converting machine that drives consistent orders and
              long-term revenue growth.
            </p>
            <a href="tel:+919990613140" className="wda-ring">
              <i className="fa-solid fa-phone" />
            </a>
            <small className="wda-expert-label">Talk to an expert</small>
            <a href="tel:+919990613140" className="wda-phone">
              +91 99906 13140
            </a>
            <small className="wda-expert-label wda-timing">
              Mon – Sat | 10:00 AM – 7:00 PM
            </small>
          </div>

          {/* ── CARD 4: Stats ── */}
          <div className="wda-main-card">
            <div className="wda-stats-wrap">
              <p className="wda-stats-lbl">Our Work Speaks</p>
              {STATS.map((s) => (
                <div className="wda-stat" key={s.key}>
                  <div className="wda-stat-ic">
                    <i className={s.fa} />
                  </div>
                  <div>
                    <b>
                      {counts[s.key]}
                      {s.suffix}
                    </b>
                    <span>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CARD 5: PDF (separate) ── */}
          <div className="wda-pdf-card">
            <span className="wda-dl-label">
              <i className="fa-solid fa-file-pdf" />
              Brochure (PDF)
            </span>
            <div className="wda-dl-btn">
              <i className="fa-solid fa-download" />
            </div>
          </div>
        </aside>
        {/* ══ END SIDEBAR ══ */}

        {/* ══ RIGHT MAIN CONTENT ══ */}
        <main className="wda-main">
          {/* Hero image */}
          <div className="wda-hero">
            <img
              src={ecommerceHero}
              alt="Ecommerce Management Banner - Brandmingo"
              className="wda-hero-img"
            />

            <div className="wda-hero-ov">
              <div className="wda-hero-txt">
                <div className="wda-hero-badge">
                  <i className="fa-solid fa-laptop-code" />
                  ABOUT ECOMMERCE MANAGEMENT
                </div>

                <h2>
                  Driving Ecommerce Growth Through{" "}
                  <span>Strategic Store Management</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Article */}
          <article>
            <div className="wda-lbl">
              <i className="fa-solid fa-circle" />
              Introduction
            </div>
            <h2 className="wda-h1">What is Ecommerce Management?</h2>
            <p className="wda-p">
              Ecommerce management is the process of optimizing, managing, and
              growing your online store across ecommerce platforms and
              marketplaces. It includes product listings, inventory management,
              pricing strategies, order processing, and store optimization to
              improve overall performance.
              <br />A successful ecommerce store is more than just products—it
              requires the right strategy, seamless operations, and continuous
              optimization. Effective ecommerce management helps increase
              visibility, improve customer experience, boost conversions, and
              drive sustainable business growth across every sales channel.
            </p>

            <div className="wda-lbl" style={{ marginTop: "40px" }}>
              <i className="fa-solid fa-circle" />
              Strategy
            </div>
            <h3 className="wda-h2">
              Why Your Business Needs Ecommerce Management
            </h3>

            <div className="wda-reasons">
              {REASONS.map((r, i) => (
                <div
                  className="wda-r"
                  key={i}
                  style={
                    visible
                      ? { animation: `wda-fade-up 0.55s ${i * 0.1}s forwards` }
                      : {}
                  }
                >
                  <div className="wda-r-ico">
                    <i className={r.fa} />
                  </div>
                  <h5>{r.title}</h5>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="wda-quote">
              <div className="wda-quote-icon">
                <i className="fa-solid fa-quote-right" />
              </div>
              <span>
                Without effective ecommerce management, you're losing valuable
                <em> sales, and long-term growth opportunities</em>
              </span>
            </div>

            {/* ── Image Cards Row ── */}
            <div className="wda-img-cards">
              <div className="wda-img-card">
                <img
                  src="https://res.cloudinary.com/dqqgpii8v/image/upload/v1783516290/Untitled_design_1_tdiced.png"
                  alt="Modern Web Development"
                />
                <div className="wda-img-card-body">
                  <div className="wda-img-card-icon">
                    <i className="fa-solid fa-cart-shopping" />
                  </div>
                  <p>
                    Data-driven ecommerce strategies that improve product
                    visibility, increase conversions, and accelerate long-term
                    business growth.
                  </p>
                  <a href="#contact" className="wda-img-card-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>

              <div className="wda-img-card">
                <img
                  src="https://i.ibb.co/Zz0MNRM4/website-developement-image-Brandmingo.avif"
                  alt="E-commerce Solutions"
                />
                <div className="wda-img-card-body">
                  <div className="wda-img-card-icon">
                    <i className="fa-solid fa-chart-line" />
                  </div>
                  <p>
                    Conversion-focused ecommerce solutions that optimize
                    customer journeys, boost online sales, and maximize store
                    performance.
                  </p>
                  <a href="#contact" className="wda-img-card-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </main>
        {/* ══ END MAIN CONTENT ══ */}
      </div>
    </section>
  );
};

export default EcomManagementAbout;
