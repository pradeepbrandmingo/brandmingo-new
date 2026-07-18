import React, { useState } from "react";

const serviceImages = {
  lead: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784293707/Untitled_design_1_p5mjns.png",
  ecommerce:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784293707/Untitled_design_1_p5mjns.png",
  google:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784293707/Untitled_design_1_p5mjns.png",
  meta: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784293707/Untitled_design_1_p5mjns.png",
  retargeting:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784293707/Untitled_design_1_p5mjns.png",
  funnel:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784293707/Untitled_design_1_p5mjns.png",
  analytics:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784293707/Untitled_design_1_p5mjns.png",
  scaling:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784293707/Untitled_design_1_p5mjns.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Lead Generation Campaigns",
    desc: "Generate qualified leads with Facebook & Instagram Ads designed to reach high-intent audiences and increase conversions through data-driven targeting.",
  },
  {
    id: "ecommerce",
    title: "E-commerce Advertising",
    desc: "Boost online sales with Meta Ads that showcase your products, recover abandoned carts, and maximize return on ad spend.",
  },
  {
    id: "facebook",
    title: "Facebook Ads Management",
    desc: "Run high-performing Facebook Ads campaigns that increase brand awareness, generate leads, and drive measurable business growth.",
  },
  {
    id: "instagram",
    title: "Instagram Ads Marketing",
    desc: "Engage your audience with visually compelling Instagram Ads that increase reach, engagement, and sales across every stage of the funnel.",
  },
  {
    id: "remarketing",
    title: "Retargeting Campaigns",
    desc: "Reconnect with previous visitors using Meta remarketing campaigns that improve conversions and recover lost business opportunities.",
  },
  {
    id: "funnel",
    title: "Sales Funnel Optimization",
    desc: "Optimize every stage of your customer journey to improve conversions, lower acquisition costs, and maximize campaign performance.",
  },
  {
    id: "analytics",
    title: "Meta Pixel & Tracking",
    desc: "Track every click, lead, and purchase with Meta Pixel setup and advanced conversion tracking for accurate campaign insights.",
  },
  {
    id: "scaling",
    title: "Campaign Scaling & Optimization",
    desc: "Scale winning Meta Ads campaigns with continuous optimization, audience refinement, and performance-driven growth strategies.",
  },
];

const FbInstAdsModernDigital = () => {
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
          Meta Ads Services for
          <br /> Modern Digital Businesses
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

export default FbInstAdsModernDigital;
