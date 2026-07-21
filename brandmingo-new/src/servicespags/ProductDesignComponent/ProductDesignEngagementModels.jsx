import React, { useState } from "react";
// import "./engagement-models.css";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-pencil-ruler",
    title: "Dedicated Product Design Team",
    desc: "A dedicated team of UI/UX designers focused exclusively on creating exceptional digital products for your business.",
    points: [
      "Dedicated UI/UX designers",
      "Continuous design collaboration",
      "Scalable product design support",
      "End-to-end design ownership",
    ],
    tag: "Most Popular",
  },
  {
    id: "time",
    icon: "fas fa-clock",
    title: "Time & Material Model",
    desc: "Perfect for evolving products where design requirements change frequently throughout the project lifecycle.",
    points: [
      "Flexible design hours",
      "Pay only for actual work",
      "Quick design iterations",
      "Ideal for agile product teams",
    ],
    tag: null,
  },
  {
    id: "fixed",
    icon: "fas fa-coins",
    title: "Fixed Cost Project",
    desc: "Best for projects with clearly defined requirements, timelines, and deliverables from the beginning.",
    points: [
      "Fixed project pricing",
      "Defined milestones",
      "Transparent delivery timeline",
      "No hidden costs",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-layer-group",
    title: "Hybrid Design Partnership",
    desc: "Combine fixed project planning with ongoing design support for continuous product improvements and future updates.",
    points: [
      "Initial product design",
      "Long-term design support",
      "Flexible enhancement cycles",
      "Scalable engagement model",
    ],
    tag: null,
  },
];

const ProductDesignEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>
          {/* h3 tag — uses style.css h3 vars via .eng-title override */}
          <h3 className="eng-title">
            Our Product Design Engagement
            <br />
             Models
          </h3>
          <p className="eng-subtitle">
            Choose a flexible product design engagement model that fits your
            project scope, timeline, and business goals. Whether you need a
            dedicated design team or a one-time product design solution, we
            deliver scalable and user-focused experiences.
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
          <a href="#contact" className="eng-cta-btn">
            Request a Free Quote
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductDesignEngagementModels;
