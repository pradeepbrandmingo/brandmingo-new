import React, { useState } from "react";
// import "./engagement-models.css";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-users",
    title: "Dedicated Engagement Team",
    desc: "A dedicated team focused on building stronger customer relationships, increasing engagement, and driving long-term brand loyalty.",
    points: [
      "Dedicated engagement specialists",
      "Continuous customer interaction",
      "Long-term engagement strategy",
      "Personalized audience communication",
    ],
    tag: "Most Popular",
  },
  {
    id: "time",
    icon: "fas fa-comments",
    title: "Community Engagement Model",
    desc: "Build active communities through meaningful conversations, customer participation, and personalized engagement strategies.",
    points: [
      "Community growth planning",
      "Audience interaction management",
      "Customer relationship building",
      "Continuous engagement improvement",
    ],
    tag: null,
  },
  {
    id: "fixed",
    icon: "fas fa-heart",
    title: "Customer Retention Program",
    desc: "Strengthen customer loyalty with consistent communication, personalized experiences, and retention-focused engagement strategies.",
    points: [
      "Customer loyalty initiatives",
      "Retention-focused campaigns",
      "Personalized customer experiences",
      "Long-term relationship building",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-chart-line",
    title: "Growth & Engagement Strategy",
    desc: "A comprehensive engagement model that combines customer interaction, analytics, and optimization for sustainable business growth.",
    points: [
      "Data-driven engagement strategy",
      "Performance monitoring",
      "Continuous optimization",
      "Scalable customer engagement",
    ],
    tag: null,
  },
];

const GrowthEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>

          <h3 className="eng-title">
            Our Engagement Growth
            <br />
            Models
          </h3>

          <p className="eng-subtitle">
            We offer flexible engagement solutions designed to help businesses
            strengthen customer relationships, improve audience interaction, and
            achieve sustainable long-term growth.
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
            Not sure which engagement model is right for your business? Let's
            discuss the best strategy for your audience and growth goals.
          </p>

          <a href="#contact" className="eng-cta-btn">
            Let's Grow Together
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GrowthEngagementModels;