import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-pen-nib",
    title: "Dedicated Logo Design Team",
    desc: "Work with a dedicated team of creative designers focused exclusively on crafting a unique and memorable logo for your brand.",
    points: [
      "Dedicated professional logo designers",
      "100% custom logo concepts",
      "Direct communication throughout the project",
      "Unlimited design guidance and support",
    ],
    tag: "Most Popular",
  },
  {
    id: "time",
    icon: "fas fa-pencil-ruler",
    title: "Time & Material Model",
    desc: "Ideal for businesses requiring flexible design iterations, revisions, and creative exploration throughout the project.",
    points: [
      "Flexible design revisions",
      "Pay for actual design effort",
      "Perfect for evolving requirements",
      "Creative collaboration at every stage",
    ],
    tag: null,
  },
  {
    id: "fixed",
    icon: "fas fa-coins",
    title: "Fixed Cost Logo Package",
    desc: "A transparent fixed-price model that includes everything needed to create a professional logo with no hidden costs.",
    points: [
      "Fixed project pricing",
      "Custom logo design package",
      "Final vector and source files included",
      "Timely delivery with complete ownership",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-layer-group",
    title: "Complete Brand Identity Package",
    desc: "Go beyond logo design with a complete branding solution including logo, colors, typography, and brand guidelines.",
    points: [
      "Logo + brand identity design",
      "Color palette & typography selection",
      "Brand guideline document",
      "Scalable branding assets for all platforms",
    ],
    tag: null,
  },
];

const LogoDesignEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>
          {/* h3 tag — uses style.css h3 vars via .eng-title override */}
          <h3 className="eng-title">
            Our Logo Design Engagement
            <br />
            Models
          </h3>
          <p className="eng-subtitle">
            We offer flexible logo design engagement models tailored to your
            business goals, budget, and branding needs—whether you need a custom
            logo, a complete brand identity, or ongoing creative support.
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

export default LogoDesignEngagementModels;
