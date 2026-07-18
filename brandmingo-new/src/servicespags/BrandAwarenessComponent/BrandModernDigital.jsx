import React, { useState } from "react";

// Updated: Keys match perfectly with servicesData IDs now
const serviceImages = {
  strategy: "https://i.ibb.co/gLXv1bJP/Untitled-design-14.jpg",
  social: "https://i.ibb.co/gLXv1bJP/Untitled-design-14.jpg",
  content: "https://i.ibb.co/gLXv1bJP/Untitled-design-14.jpg",
  display: "https://i.ibb.co/gLXv1bJP/Untitled-design-14.jpg",
  video: "https://i.ibb.co/gLXv1bJP/Untitled-design-14.jpg",
  influencer: "https://i.ibb.co/gLXv1bJP/Untitled-design-14.jpg",
  reputation: "https://i.ibb.co/gLXv1bJP/Untitled-design-14.jpg",
  growth: "https://i.ibb.co/gLXv1bJP/Untitled-design-14.jpg",
};

const servicesData = [
  {
    id: "strategy",
    title: "Brand Strategy",
    desc: "We create data-driven brand strategies that strengthen your identity, increase visibility, and build lasting customer trust.",
  },
  {
    id: "social",
    title: "Social Media Branding",
    desc: "Grow your brand presence with engaging social media campaigns that increase reach, awareness, and audience engagement.",
  },
  {
    id: "content",
    title: "Content Marketing",
    desc: "Create valuable content that connects with your audience, builds authority, and improves long-term brand recognition.",
  },
  {
    id: "display",
    title: "Display Advertising",
    desc: "Reach new audiences with creative display campaigns designed to maximize brand exposure across digital platforms.",
  },
  {
    id: "video",
    title: "Video Marketing",
    desc: "Promote your brand with engaging video campaigns that capture attention and improve audience recall.",
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    desc: "Partner with trusted creators to expand your brand reach and build credibility with your target audience.",
  },
  {
    id: "reputation",
    title: "Online Reputation",
    desc: "Strengthen your online presence by managing reviews, improving brand trust, and maintaining a positive reputation.",
  },
  {
    id: "growth",
    title: "Brand Growth Optimization",
    desc: "Continuously optimize campaigns using audience insights and performance data to maximize brand awareness and growth.",
  },
];

const BrandModernDigital = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]);
  const [animKey, setAnimKey] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(servicesData[0].id);

  const handleTabClick = (service) => {
    setActiveTab(service);
    setAnimKey((k) => k + 1);
  };

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="ret-section">
      <div className="auto-container">
        {/* Heading — h3 tag, style.css vars apply automatically */}
        <h3 className="ret-heading text-center mb-5">
          Performance Marketing Services for
          <br /> Growing Businesses
        </h3>

        {/* ── DESKTOP ── */}
        <div className="ret-grid ret-desktop-only">
          {/* Left: tab buttons */}
          <div className="ret-tabs">
            {servicesData.map((service) => (
              <button
                key={service.id}
                className={`ret-tab-btn ${activeTab.id === service.id ? "active" : ""}`}
                onClick={() => handleTabClick(service)}
              >
                <span className="ret-tab-label">{service.title}</span>
                <span className="ret-arrow">
                  <i className="fas fa-arrow-right" />
                </span>
              </button>
            ))}
          </div>

          {/* Right: content panel */}
          <div className="ret-content" key={animKey}>
            <h4 className="ret-content-title">{activeTab.title}</h4>
            <div className="ret-content-body">
              <p className="ret-content-desc">{activeTab.desc}</p>
              <div className="ret-image-wrap">
                <div className="ret-image-badge">
                  <i className="fas fa-code" />
                </div>
                <div className="ret-image-inner">
                  <img
                    src={serviceImages[activeTab.id]}
                    alt={activeTab.title}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE accordion ── */}
        <div className="ret-mobile-only">
          {servicesData.map((service) => {
            const isOpen = openAccordion === service.id;
            return (
              <div
                key={service.id}
                className={`ret-mob-item ${isOpen ? "open" : ""}`}
              >
                <button
                  className="ret-mob-header"
                  onClick={() => toggleAccordion(service.id)}
                >
                  <span className="ret-mob-title">{service.title}</span>
                  <span className="ret-mob-icon">
                    <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`} />
                  </span>
                </button>

                {isOpen && (
                  <div className="ret-mob-body">
                    <p className="ret-mob-desc">{service.desc}</p>
                    <div className="ret-mob-img-wrap">
                      <img
                        src={serviceImages[service.id]}
                        alt={service.title}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandModernDigital;
