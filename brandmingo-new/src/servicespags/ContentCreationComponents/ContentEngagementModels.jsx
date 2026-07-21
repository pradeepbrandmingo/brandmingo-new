import React, { useState } from "react";
// import "./engagement-models.css";
import { openEnquiryPopup } from "../../utils/popup";

const engagementData = [
  {
    id: "website",
    icon: "fas fa-pen-nib",
    title: "Website Content Creation",
    desc: "Professional website copy crafted to communicate your brand message, improve user experience, and increase conversions.",
    points: [
      "SEO-friendly website copy",
      "Landing pages & service pages",
      "Homepage & About Us content",
      "Conversion-focused messaging",
    ],
    tag: "Most Popular",
  },
  {
    id: "social",
    icon: "fas fa-share-alt",
    title: "Social Media Content",
    desc: "Engaging social media content designed to grow your audience, increase engagement, and strengthen your brand presence.",
    points: [
      "Creative post designs & captions",
      "Instagram, Facebook & LinkedIn content",
      "Content calendar planning",
      "Brand-focused storytelling",
    ],
    tag: null,
  },
  {
    id: "seo",
    icon: "fas fa-search",
    title: "SEO & Blog Content",
    desc: "High-quality SEO content that improves search rankings, drives organic traffic, and establishes industry authority.",
    points: [
      "Keyword-optimized blog articles",
      "SEO-friendly content structure",
      "Industry research & writing",
      "Organic traffic growth",
    ],
    tag: null,
  },
  {
    id: "branding",
    icon: "fas fa-lightbulb",
    title: "Complete Content Strategy",
    desc: "A complete content marketing solution covering planning, creation, optimization, and distribution across all digital platforms.",
    points: [
      "Content planning & strategy",
      "Multi-platform content creation",
      "Brand consistency across channels",
      "Performance analysis & optimization",
    ],
    tag: null,
  },
];

const ContentEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("website");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>

          <h3 className="eng-title">
            Our Content Creation
            <br />
            Service Models
          </h3>

          <p className="eng-subtitle">
            We provide flexible content creation solutions tailored to your
            business goals, helping you build a strong brand, engage your
            audience, and drive measurable growth.
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
                {card.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="eng-cta-wrap">
          <p className="eng-cta-note">
            Not sure which content solution is right for your business? Let's
            discuss your goals and create the perfect content strategy together.
          </p>

          <a
            href="/"
            className="eng-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Start Your Content Project
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentEngagementModels;
