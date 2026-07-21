import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-pencil-ruler",
    title: "Custom Website Design",
    desc: "Get a dedicated team of designers focused on creating a unique, responsive, and conversion-driven website tailored to your business.",
    points: [
      "100% custom UI/UX design",
      "Business-focused website strategy",
      "Responsive layouts for all devices",
      "Ongoing design collaboration",
    ],
    tag: "Most Popular",
  },
  {
    id: "time",
    icon: "fas fa-laptop-code",
    title: "UI/UX Design Services",
    desc: "Professional interface and user experience design that improves usability, engagement, and customer satisfaction.",
    points: [
      "Modern and intuitive interfaces",
      "Wireframes & interactive prototypes",
      "User-focused navigation",
      "Optimized user experience",
    ],
    tag: null,
  },
  {
    id: "fixed",
    icon: "fas fa-mobile-screen-button",
    title: "Responsive Web Design",
    desc: "Build websites that look and perform perfectly across desktop, tablet, and mobile devices.",
    points: [
      "Mobile-first design approach",
      "Cross-browser compatibility",
      "Fast-loading responsive layouts",
      "Consistent experience on every screen",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-gauge-high",
    title: "Website Optimization",
    desc: "Enhance your website with performance optimization, SEO-friendly structure, and ongoing improvements for better business results.",
    points: [
      "SEO-friendly website structure",
      "Performance & speed optimization",
      "Conversion-focused layouts",
      "Continuous website improvements",
    ],
    tag: null,
  },
];

const CustomWebDevEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>

          <h3 className="eng-title">
            Our Custom Web Design
            <br />
            Service Models
          </h3>

          <p className="eng-subtitle">
            We provide flexible web design solutions tailored to your business
            goals, helping you build modern, responsive, and high-performing
            websites that deliver exceptional user experiences.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="eng-grid">
          {engagementData.map((card) => (
            <div
              key={card.id}
              className={`eng-card${activeCard === card.id ? " active" : ""}`}
              onMouseEnter={() => setActiveCard(card.id)}
            >
              {card.tag && <span className="eng-badge">{card.tag}</span>}

              <div className="eng-icon">
                <i className={card.icon} />
              </div>

              <h3 className="eng-card-title">{card.title}</h3>

              <p className="eng-card-desc">{card.desc}</p>

              <div className="eng-divider" />

              <ul className="eng-points">
                {card.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="eng-cta-wrap">
          <p className="eng-cta-note">
            Looking for a custom website? Let's discuss your requirements and
            create the perfect web solution for your business.
          </p>

          <a
            href=""
            className="eng-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Start Your Project
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomWebDevEngagementModels;
