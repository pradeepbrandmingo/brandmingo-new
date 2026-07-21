import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const brandIdentityHero =
  "https://res.cloudinary.com/dqqgpii8v/image/upload/v1783516949/Untitled_design_2_elf2n9.png";

const NAV = [
  {
    fa: "fa-solid fa-pen-nib",
    label: "Logo Design",
    to: "/logo-design",
  },
  {
    fa: "fa-solid fa-bullhorn",
    label: "Package & Label Designing",
    to: "/label-designing",
  },
  {
    fa: "fa-solid fa-id-card",
    label: "Corporate Identity Designing",
    to: "/corporate-identity-designing",
  },
  {
    fa: "fa-solid fa-file-powerpoint",
    label: "Brand Identity Design",
    to: "/brand-identity-design",
  },
];

const REASONS = [
  {
    fa: "fa-solid fa-eye",
    title: "Brand Recognition",
    desc: "Build a memorable visual identity that helps customers recognize your brand instantly.",
  },
  {
    fa: "fa-solid fa-palette",
    title: "Visual Consistency",
    desc: "Maintain consistent branding across every platform to strengthen your business identity.",
  },
  {
    fa: "fa-solid fa-users",
    title: "Audience Engagement",
    desc: "Create meaningful brand experiences that increase customer engagement and long-term loyalty.",
  },
  {
    fa: "fa-solid fa-shield-halved",
    title: "Trust & Credibility",
    desc: "Establish a professional brand image that builds customer confidence and lasting trust.",
  },
  {
    fa: "fa-solid fa-trophy",
    title: "Competitive Advantage",
    desc: "Stand out from competitors with distinctive branding that leaves a lasting impression.",
  },
];

const STATS = [
  {
    fa: "fa-solid fa-pen-nib",
    key: "p",
    suffix: "+",
    label: "Brand Projects Delivered",
    target: 500,
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
    label: "Brand Support Available",
    target: 24,
  },
  {
    fa: "fa-solid fa-award",
    key: "e",
    suffix: "+",
    label: "Years Branding Experience",
    target: 3,
  },
];

const BrandIdentityAbout = () => {
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
    const targets = { p: 500, s: 98, h: 24, e: 3 };
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
              Let’s Build Your
              <span>Brand That Stands Out</span>
            </h3>
            <p>
              Want to create a strong brand presence? Let’s craft a unique
              identity that builds recognition, trust, and long-term brand
              value.
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
          <a
            href="src/assets/images/Brochure/BM Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="wda-pdf-card"
          >
            <span className="wda-dl-label">
              <i className="fa-solid fa-file-pdf" />
              Brochure (PDF)
            </span>

            <div className="wda-dl-btn">
              <i className="fa-solid fa-download" />
            </div>
          </a>
        </aside>
        {/* ══ END SIDEBAR ══ */}

        {/* ══ RIGHT MAIN CONTENT ══ */}
        <main className="wda-main">
          {/* Hero image */}
          <div className="wda-hero">
            <img
              src={brandIdentityHero}
              alt="Brand Identity Banner - Brandmingo"
              className="wda-hero-img"
            />

            <div className="wda-hero-ov">
              <div className="wda-hero-txt">
                <div className="wda-hero-badge">
                  <i className="fa-solid fa-laptop-code" />
                  ABOUT BRAND IDENTITY
                </div>

                <h2>
                  Building Powerful Brands <span>With Creative Design</span>
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
            <h2 className="wda-h1">What is Brand Identity?</h2>
            <p className="wda-p">
              Graphic design is more than creating attractive visuals—it shapes
              how customers see, remember, and connect with your brand. From
              logo design and typography to marketing creatives and brand
              assets, every element works together to build a strong visual
              identity.
              <br />A consistent brand identity helps your business stand out,
              earn customer trust, and create a memorable experience across
              every platform. Strategic graphic design strengthens brand
              recognition, improves credibility, and supports long-term business
              growth.
            </p>

            <div className="wda-lbl" style={{ marginTop: "40px" }}>
              <i className="fa-solid fa-circle" />
              Strategy
            </div>
            <h3 className="wda-h2">Why Your Business Needs Brand Identity</h3>

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
                A strong brand identity turns first impressions{" "}
                <em> into lasting customer relationships</em>
              </span>
            </div>

            {/* ── Image Cards Row ── */}
            <div className="wda-img-cards">
              <div className="wda-img-card">
                <img
                  src="https://res.cloudinary.com/dqqgpii8v/image/upload/v1783516949/Untitled_design_2_elf2n9.png"
                  alt="Modern Web Development"
                />
                <div className="wda-img-card-body">
                  <div className="wda-img-card-icon">
                    <i className="fa-solid fa-palette" />
                  </div>
                  <p>
                    Creative brand identities designed to strengthen
                    recognition, build trust, and create a consistent visual
                    presence across every customer touchpoint
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
                    <i className="fa-solid fa-bullseye" />
                  </div>
                  <p>
                    Strategic graphic design solutions that capture attention,
                    engage your audience, and transform ideas into memorable
                    brand experiences
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

export default BrandIdentityAbout;
