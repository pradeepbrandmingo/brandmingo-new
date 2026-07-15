import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const socialMediaHero =
  "https://res.cloudinary.com/dqqgpii8v/image/upload/v1783153379/Untitled_design_2_wboyug.png";

const NAV = [
  {
    fa: "fa-solid fa-bullhorn",
    label: "Brand Awareness",
    to: "/brand-awareness",
  },
  {
    fa: "fa-solid fa-lightbulb",
    label: "Strategy & Planning",
    to: "/strategy-planning",
  },
  {
    fa: "fa-solid fa-pen-nib",
    label: "Content Creation & Publishing",
    to: "/content-creation-publishing",
  },
  {
    fa: "fa-solid fa-users",
    label: "Engagement & Growth",
    to: "/engagement-growth",
  },
];

const REASONS = [
  {
    fa: "fa-solid fa-users",
    title: "Boost Brand Awareness",
    desc: "Increase your brand visibility with consistent, creative content that keeps your business top-of-mind across every social platform.",
  },
  {
    fa: "fa-solid fa-comments",
    title: "Increase Engagement",
    desc: "Build meaningful connections through interactive content that encourages conversations, shares, and long-term audience loyalty.",
  },
  {
    fa: "fa-solid fa-bullseye",
    title: "Generate Quality Leads",
    desc: "Turn your social media presence into a lead generation channel with targeted strategies and high-converting content.",
  },
  {
    fa: "fa-solid fa-handshake",
    title: "Build Customer Trust",
    desc: "Strengthen your brand credibility with authentic communication, timely responses, and consistent online engagement.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Drive Business Growth",
    desc: "Achieve measurable business growth through data-driven campaigns, performance tracking, and continuous optimization.",
  },
];

const STATS = [
  {
    fa: "fa-solid fa-briefcase",
    key: "p",
    suffix: "+",
    label: "Accounts Managed",
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
    label: "Support Available",
    target: 24,
  },
  {
    fa: "fa-solid fa-award",
    key: "e",
    suffix: "+",
    label: "Years Experience",
    target: 5,
  },
];

const SocialMediaAbout = () => {
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
              Let’s Grow Your <span>Business with Ads</span>
            </h3>
            <p>
              Have a campaign idea? Let’s turn your budget into high-performing
              ads that generate real leads and sales.
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
              src={socialMediaHero}
              alt="Social Media Management Banner - Brandmingo"
              className="wda-hero-img"
            />

            <div className="wda-hero-ov">
              <div className="wda-hero-txt">
                <div className="wda-hero-badge">
                  <i className="fa-solid fa-laptop-code" />
                  ABOUT SOCIAL MEDIA MANAGEMENT
                </div>

                <h2>
                  Smart Social Media That <span>Delivers Business Growth.</span>
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
            <h2 className="wda-h1">What is Social Media Management?</h2>
            <p className="wda-p">
              Social Media Management is the process of creating, publishing,
              and optimizing content across digital platforms to build brand
              awareness, engage audiences, and generate quality leads. It
              combines strategic planning, creative storytelling, and
              data-driven insights to help businesses establish a strong online
              presence.
              <br />
              With consistent content, active community management, and
              performance optimization, social media becomes a powerful channel
              for increasing visibility, building customer trust, and driving
              sustainable business growth.
            </p>

            <div className="wda-lbl" style={{ marginTop: "40px" }}>
              <i className="fa-solid fa-circle" />
              Strategy
            </div>
            <h3 className="wda-h2">
              Why Social Media Management Matters for Your Business
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
                A strong social media presence isn't optional anymore—it's
                essential for{" "}
                <em> sustainable business growth. losing winning it.</em>
              </span>
            </div>

            {/* ── Image Cards Row ── */}
            <div className="wda-img-cards">
              <div className="wda-img-card">
                <img
                  src="https://res.cloudinary.com/dqqgpii8v/image/upload/v1783155891/Untitled_design_3_pnt8wg.png"
                  alt="Modern Web Development"
                />
                <div className="wda-img-card-body">
                  <div className="wda-img-card-icon">
                    <i className="fa-solid fa-laptop-code" />
                  </div>
                  <p>
                    Professional social media content strategy designed to
                    increase brand awareness, audience engagement, and online
                    visibility through creative and consistent content
                    marketing.
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
                    <i className="fa-solid fa-cart-shopping" />
                  </div>
                  <p>
                    Expert social media marketing strategies focused on audience
                    growth, lead generation, customer engagement, and measurable
                    business results across digital platforms.
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

export default SocialMediaAbout;
