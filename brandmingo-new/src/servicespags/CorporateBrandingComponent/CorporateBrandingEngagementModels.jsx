import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-lightbulb",
    title: "Brand Strategy & Consulting",
    desc: "Work with our branding experts to build a strong corporate identity that aligns with your business goals and creates a lasting market impact.",
    points: [
      "Brand discovery & research",
      "Business positioning strategy",
      "Target audience analysis",
      "Long-term brand growth roadmap",
    ],
    tag: "Most Popular",
  },
  {
    id: "identity",
    icon: "fas fa-palette",
    title: "Visual Identity Design",
    desc: "Create a memorable and consistent visual identity that reflects your brand personality and builds customer trust.",
    points: [
      "Custom logo design",
      "Color palette & typography",
      "Brand style guide",
      "Visual consistency across platforms",
    ],
    tag: null,
  },
  {
    id: "corporate",
    icon: "fas fa-building",
    title: "Corporate Identity Package",
    desc: "Build a professional corporate image with branded business assets that strengthen credibility and recognition.",
    points: [
      "Business cards & stationery",
      "Presentation templates",
      "Email signature design",
      "Corporate branding materials",
    ],
    tag: null,
  },
  {
    id: "growth",
    icon: "fas fa-chart-line",
    title: "Brand Growth & Management",
    desc: "Strengthen your brand with ongoing optimization, reputation management, and strategic branding support.",
    points: [
      "Brand consistency management",
      "Marketing collateral updates",
      "Brand reputation monitoring",
      "Continuous brand improvement",
    ],
    tag: null,
  },
];

const CorporateBrandingEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* Header */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>

          <h3 className="eng-title">
            Our Corporate Branding
            <br />
            Service Models
          </h3>

          <p className="eng-subtitle">
            We provide flexible branding solutions designed to help businesses
            build a strong identity, enhance brand recognition, and create
            lasting customer trust.
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
            Ready to build a powerful corporate brand? Let's discuss your
            branding goals and create the perfect solution for your business.
          </p>

          <a
            href="/"
            className="eng-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Get a Free Branding Consultation
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CorporateBrandingEngagementModels;
