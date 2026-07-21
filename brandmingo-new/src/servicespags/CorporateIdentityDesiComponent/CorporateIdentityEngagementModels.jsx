import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-building",
    title: "Dedicated Branding Team",
    desc: "A dedicated team of branding experts working exclusively to create a strong and consistent corporate identity for your business.",
    points: [
      "Dedicated branding specialists",
      "Custom identity strategy",
      "Continuous design collaboration",
      "Long-term brand consistency",
    ],
    tag: "Most Popular",
  },
  {
    id: "time",
    icon: "fas fa-palette",
    title: "Time & Material Model",
    desc: "A flexible engagement model ideal for businesses that require ongoing design support and multiple branding revisions.",
    points: [
      "Flexible branding revisions",
      "Pay for actual design work",
      "Creative collaboration",
      "Perfect for evolving brands",
    ],
    tag: null,
  },
  {
    id: "fixed",
    icon: "fas fa-coins",
    title: "Fixed Price Package",
    desc: "A transparent pricing model that covers complete corporate identity design with clearly defined deliverables.",
    points: [
      "Fixed project pricing",
      "Complete corporate identity",
      "Brand guideline delivery",
      "Full ownership rights",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-layer-group",
    title: "Complete Branding Solution",
    desc: "A comprehensive branding package that includes logo design, stationery, brand guidelines, and digital brand assets.",
    points: [
      "Complete visual identity",
      "Print & digital assets",
      "Brand consistency",
      "Scalable branding solution",
    ],
    tag: null,
  },
];

const CorporateIdentityEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* Header */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>

          <h3 className="eng-title">
            Our Corporate Identity
            <br />
            Engagement Models
          </h3>

          <p className="eng-subtitle">
            We offer flexible engagement models to help businesses build a
            strong, professional, and consistent corporate identity that grows
            with their brand.
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
            Not sure which engagement model is right for your business? Let's
            discuss your branding goals and find the perfect solution.
          </p>

          <a
            href="/"
            className="eng-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Request a Free Consultation
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CorporateIdentityEngagementModels;
