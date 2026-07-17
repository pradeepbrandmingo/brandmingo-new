import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-user-group",
    title: "Dedicated Marketing Team",
    desc: "A dedicated performance marketing team focused on generating leads, increasing ROI, and scaling your business.",
    points: [
      "Dedicated performance specialists",
      "Continuous campaign optimization",
      "Weekly strategy & performance reviews",
      "Long-term growth-focused execution",
    ],
    tag: "Most Popular",
  },
  {
    id: "time",
    icon: "fas fa-gauge-high",
    title: "Performance-Based Model",
    desc: "A flexible engagement model where campaigns are optimized around measurable performance and business growth.",
    points: [
      "Results-driven pricing model",
      "Flexible campaign scaling",
      "Fast optimization & execution",
      "Data-backed marketing decisions",
    ],
    tag: null,
  },
  {
    id: "fixed",
    icon: "fas fa-calendar-check",
    title: "Monthly Growth Retainer",
    desc: "A fixed monthly solution for consistent campaign management, optimization, and measurable business growth.",
    points: [
      "Fixed monthly investment",
      "Complete campaign management",
      "Transparent performance reports",
      "Continuous growth optimization",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-arrows-rotate",
    title: "Hybrid Growth Model",
    desc: "A balanced approach combining fixed management with performance optimization for maximum business growth.",
    points: [
      "Fixed + performance pricing",
      "Flexible growth strategies",
      "Scalable campaign management",
      "Maximum ROI optimization",
    ],
    tag: null,
  },
];

const MarketingEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>
          {/* h3 tag — uses style.css h3 vars via .eng-title override */}
          <h3 className="eng-title">
            Our Performance
            <br />
            Marketing Engagement Models
          </h3>
          <p className="eng-subtitle">
            Choose a flexible performance marketing model designed to match your
            business goals, advertising budget, and long-term growth strategy.
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
            Not sure which model fits your business? Let's find the right
            performance marketing strategy together.
          </p>
          <a
            href="/"
            className="eng-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Request a Free Quote
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketingEngagementModels;
