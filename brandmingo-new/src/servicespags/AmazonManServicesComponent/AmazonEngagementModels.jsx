import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-users",
    title: "Dedicated Ecommerce Team",
    desc: "A dedicated team manages your ecommerce store, improves product visibility, boosts marketplace sales, and supports long-term business growth.",
    points: [
      "Dedicated account specialists",
      "Complete store management",
      "Weekly performance reviews",
      "Long-term growth planning",
    ],
    tag: "Most Popular",
  },
  {
    id: "performance",
    icon: "fas fa-chart-line",
    title: "Performance-Based Model",
    desc: "A performance-focused model improves marketplace visibility, increases product sales, delivers measurable results, and supports business growth.",
    points: [
      "Performance-driven strategy",
      "Flexible optimization plans",
      "Data-driven improvements",
      "Scalable business growth",
    ],
    tag: null,
  },
  {
    id: "retainer",
    icon: "fas fa-calendar-check",
    title: "Monthly Management Plan",
    desc: "A fixed monthly management plan includes continuous optimization, detailed reporting, complete account support, and consistent marketplace business growth.",
    points: [
      "Fixed monthly pricing",
      "Complete account management",
      "Transparent reporting",
      "Continuous optimization",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-arrows-rotate",
    title: "Hybrid Growth Model",
    desc: "A hybrid model combines expert management with growth strategies to improve marketplace performance and increase long-term business success.",
    points: [
      "Flexible engagement model",
      "Custom growth strategy",
      "Scalable marketplace support",
      "Maximum business growth",
    ],
    tag: null,
  },
];

const AmazonEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>
          {/* h3 tag — uses style.css h3 vars via .eng-title override */}
          <h3 className="eng-title">
            Our Performance Marketing
            <br />
            Engagement Models
          </h3>
          <p className="eng-subtitle">
            Choose a flexible ecommerce management model designed to match your
            business goals, marketplace requirements, and long-term growth
            strategy.
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

              {/* h3 tag for card title — semantic heading, sized via CSS */}
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
            Find the right ecommerce management model to increase visibility,
            improve sales, and achieve long-term marketplace growth.
          </p>
          <a
            href="/"
            className="eng-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Start Your Growth Journey
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AmazonEngagementModels;
