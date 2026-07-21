import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-tags",
    title: "Dedicated Label Design Team",
    desc: "A dedicated team of creative designers focused on delivering premium, custom label designs for your products.",
    points: [
      "Dedicated design experts",
      "100% custom label concepts",
      "Unlimited design consultation",
      "Fast communication & support",
    ],
    tag: "Most Popular",
  },
  {
    id: "time",
    icon: "fas fa-pencil-ruler",
    title: "Time & Material Model",
    desc: "Perfect for businesses that require multiple concepts, revisions, and flexible design collaboration.",
    points: [
      "Flexible revisions",
      "Pay for actual design work",
      "Creative collaboration",
      "Ideal for evolving projects",
    ],
    tag: null,
  },
  {
    id: "fixed",
    icon: "fas fa-coins",
    title: "Fixed Price Package",
    desc: "Transparent pricing with everything you need for professional label design and print-ready artwork.",
    points: [
      "Fixed project pricing",
      "Premium label design",
      "Source & print-ready files",
      "Complete ownership rights",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-box-open",
    title: "Complete Packaging Solution",
    desc: "A complete branding package including product labels, packaging artwork, and brand consistency.",
    points: [
      "Label & packaging design",
      "Multiple product variations",
      "Brand consistency",
      "Commercial print ready",
    ],
    tag: null,
  },
];

const LabelDesigningEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* Header */}
        <div className="eng-header">
          <div className="eng-eyebrow">HOW WE WORK</div>

          <h3 className="eng-title">
            Our Label Designing
            <br />
            Engagement Models
          </h3>

          <p className="eng-subtitle">
            Choose a flexible label design model tailored to your products,
            branding, packaging, and business goals.
          </p>
        </div>

        {/* Cards */}
        <div className="eng-grid">
          {engagementData.map((card) => (
            <div
              key={card.id}
              className={`eng-card ${activeCard === card.id ? "active" : ""}`}
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
                {card.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="eng-cta-wrap">
          <p className="eng-cta-note">
            Need a custom label for your product? Our experts are ready to help
            you create packaging that stands out.
          </p>

          <a
            href="/"
            className="eng-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Start Your Label Design
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LabelDesigningEngagementModels;
