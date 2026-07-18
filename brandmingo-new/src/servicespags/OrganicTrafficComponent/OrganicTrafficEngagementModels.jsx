import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-users",
    title: "Dedicated Expert Team",
    desc: "A dedicated team focused on delivering consistent results, strategic execution, and sustainable business growth.",
    points: [
      "Dedicated specialists",
      "Priority support",
      "Weekly reviews",
      "Growth strategy",
    ],
    tag: "Most Popular",
  },
  {
    id: "performance",
    icon: "fas fa-chart-line",
    title: "Performance-Based Model",
    desc: "A flexible engagement model focused on measurable outcomes, continuous optimization, and business performance.",
    points: [
      "Performance-focused",
      "Flexible scaling",
      "Continuous optimization",
      "Actionable insights",
    ],
    tag: null,
  },
  {
    id: "retainer",
    icon: "fas fa-calendar-check",
    title: "Monthly Growth Retainer",
    desc: "Ongoing monthly support with strategic planning, optimization, transparent reporting, and continuous improvements.",
    points: [
      "Fixed monthly plan",
      "Dedicated management",
      "Transparent reporting",
      "Continuous support",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-arrows-rotate",
    title: "Custom Growth Model",
    desc: "A tailored engagement model built around your business goals, project scope, and long-term growth plans.",
    points: [
      "Flexible engagement",
      "Custom strategy",
      "Scalable execution",
      "Maximum value",
    ],
    tag: null,
  },
];

const OrganicTrafficEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>
          {/* h3 tag — uses style.css h3 vars via .eng-title override */}
          <h3 className="eng-title">
            Flexible Business
            <br />
            Engagement Models
          </h3>
          <p className="eng-subtitle">
            Choose the engagement model that best fits your business goals,
            budget, and long-term growth strategy.
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
            Not sure which engagement model is right for your business? Our
            experts will help you choose the best option.
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

export default OrganicTrafficEngagementModels;
