import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-users",
    title: "Dedicated Marketing Team",
    desc: "A dedicated team managing campaigns to deliver consistent growth, leads, and measurable ROI.",
    points: [
      "Dedicated specialists",
      "Campaign optimization",
      "Weekly reviews",
      "Growth planning",
    ],
    tag: "Most Popular",
  },
  {
    id: "performance",
    icon: "fas fa-chart-line",
    title: "Performance-Based Model",
    desc: "Pay only for measurable campaign performance with flexible execution and continuous optimization.",
    points: [
      "Results pricing",
      "Flexible scaling",
      "Fast optimization",
      "Data insights",
    ],
    tag: null,
  },
  {
    id: "retainer",
    icon: "fas fa-calendar-check",
    title: "Monthly Growth Retainer",
    desc: "Fixed monthly campaign management with continuous optimization, reporting, and business growth support.",
    points: [
      "Fixed pricing",
      "Full management",
      "Clear reporting",
      "Ongoing optimization",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-arrows-rotate",
    title: "Hybrid Growth Model",
    desc: "Combine fixed management with performance strategies for scalable campaigns and higher ROI.",
    points: [
      "Flexible pricing",
      "Growth strategy",
      "Scalable campaigns",
      "Maximum ROI",
    ],
    tag: null,
  },
];

const LinkedinEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>
          {/* h3 tag — uses style.css h3 vars via .eng-title override */}
          <h3 className="eng-title">
            Flexible Campaign
            <br />
            Engagement Models
          </h3>
          <p className="eng-subtitle">
            Choose a marketing engagement model that aligns with your business
            goals, campaign budget, and long-term growth strategy.
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
            Not sure which engagement model is right for you? Let's build the
            perfect growth strategy together
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

export default LinkedinEngagementModels;
