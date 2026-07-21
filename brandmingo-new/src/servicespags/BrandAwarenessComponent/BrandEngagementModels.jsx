import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-bullseye",
    title: "Dedicated Marketing Team",
    desc: "A dedicated performance marketing team focused on managing, optimizing, and scaling your campaigns for long-term growth.",
    points: [
      "Dedicated account manager",
      "Continuous campaign optimization",
      "Scalable growth strategies",
      "Monthly performance reports",
    ],
    tag: "Most Popular",
  },
  {
    id: "performance",
    icon: "fas fa-chart-line",
    title: "Performance-Based Model",
    desc: "A flexible engagement model where campaigns are optimized based on measurable performance and business goals.",
    points: [
      "Performance-driven execution",
      "Flexible campaign scaling",
      "Real-time optimization",
      "ROI-focused strategies",
    ],
    tag: null,
  },
  {
    id: "retainer",
    icon: "fas fa-coins",
    title: "Monthly Retainer",
    desc: "A fixed monthly engagement for continuous campaign management, optimization, and predictable business growth.",
    points: [
      "Fixed monthly pricing",
      "Campaign monitoring",
      "Performance reporting",
      "Ongoing optimization",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-layer-group",
    title: "Hybrid Growth Model",
    desc: "A combination of fixed management and performance-driven strategies designed to maximize ROI and scalability.",
    points: [
      "Flexible pricing model",
      "Growth-focused strategy",
      "Scalable campaign management",
      "Maximum ROI optimization",
    ],
    tag: null,
  },
];

const BrandEngagementModels = () => {
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
            We offer flexible performance marketing engagement models tailored
            to your business goals, budget, and growth objectives.
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
            Not sure which model suits you? Let's talk and find the perfect fit.
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

export default BrandEngagementModels;
