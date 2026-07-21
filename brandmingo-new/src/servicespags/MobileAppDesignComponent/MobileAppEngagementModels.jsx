import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "uiux",
    icon: "fas fa-pencil-ruler",
    title: "Complete UI/UX Design",
    desc: "End-to-end mobile app UI/UX design services tailored to your business goals and user needs.",
    points: [
      "User-centered interface design",
      "Modern Android & iOS layouts",
      "Interactive design solutions",
      "Consistent visual experience",
    ],
    tag: "Most Popular",
  },
  {
    id: "prototype",
    icon: "fas fa-mobile-screen-button",
    title: "Prototype & User Testing",
    desc: "Validate your app idea with interactive prototypes and usability testing before development begins.",
    points: [
      "Interactive clickable prototypes",
      "User journey validation",
      "Usability testing",
      "Early design improvements",
    ],
    tag: null,
  },
  {
    id: "designsystem",
    icon: "fas fa-layer-group",
    title: "Design System Development",
    desc: "Build scalable design systems with reusable UI components for faster and consistent app development.",
    points: [
      "Reusable UI components",
      "Typography & color systems",
      "Developer-ready assets",
      "Consistent app experience",
    ],
    tag: null,
  },
  {
    id: "support",
    icon: "fas fa-headset",
    title: "Design Support & Optimization",
    desc: "Continuous UI/UX improvements, design updates, and optimization to keep your mobile app modern and engaging.",
    points: [
      "Post-design consultation",
      "UI improvements & updates",
      "User feedback implementation",
      "Long-term design support",
    ],
    tag: null,
  },
];

const MobileAppEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("uiux");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>

          <h3 className="eng-title">
            Our Mobile App Design
            <br />
            Engagement Models
          </h3>

          <p className="eng-subtitle">
            Choose the engagement model that best fits your project. From UI/UX
            design and interactive prototypes to complete design systems, we
            deliver flexible solutions for startups, enterprises, and growing
            businesses.
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
            Not sure which mobile app design solution is right for your
            business? Let's discuss your project and create the perfect user
            experience together.
          </p>

          <a
            href="/"
            className="eng-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Get a Free Design Consultation
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileAppEngagementModels;
