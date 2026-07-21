import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-palette",
    title: "Dedicated Brand Identity Team",
    desc: "A dedicated team of branding experts working exclusively to create a memorable and consistent brand identity for your business.",
    points: [
      "Dedicated branding specialists",
      "Custom identity strategy",
      "Creative collaboration throughout",
      "Long-term brand consistency",
    ],
    tag: "Most Popular",
  },
  {
    id: "time",
    icon: "fas fa-lightbulb",
    title: "Time & Material Model",
    desc: "A flexible engagement model for businesses requiring ongoing brand identity design, updates, and creative support.",
    points: [
      "Flexible design revisions",
      "Pay for actual design work",
      "Continuous creative support",
      "Perfect for growing brands",
    ],
    tag: null,
  },
  {
    id: "fixed",
    icon: "fas fa-coins",
    title: "Fixed Brand Identity Package",
    desc: "A fixed-price solution that delivers a complete brand identity with clearly defined deliverables and timelines.",
    points: [
      "Transparent project pricing",
      "Complete visual identity",
      "Brand guideline document",
      "Full ownership rights",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-layer-group",
    title: "Complete Branding Solution",
    desc: "An end-to-end branding package covering logo design, brand assets, stationery, guidelines, and digital branding materials.",
    points: [
      "Complete branding package",
      "Print & digital brand assets",
      "Scalable identity system",
      "Professional brand experience",
    ],
    tag: null,
  },
];

const IdentityBrandEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* Header */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>

          <h3 className="eng-title">
            Our Brand Identity Design
            <br />
            Engagement Models
          </h3>

          <p className="eng-subtitle">
            We provide flexible engagement models to help businesses create a
            strong, memorable, and consistent brand identity that grows with
            their vision and business goals.
          </p>
        </div>

        {/* Cards */}
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

        {/* CTA */}
        <div className="eng-cta-wrap">
          <p className="eng-cta-note">
            Not sure which branding model is right for your business? Let's
            discuss your goals and build the perfect brand identity together.
          </p>

          <a
            href="/"
            className="eng-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Get a Free Consultation
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IdentityBrandEngagementModels;
