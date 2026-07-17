import React, { useState } from "react";

const serviceImages = {
  lead: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784203476/performance-marketing_mlg4jy.png",
  ecommerce:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784203476/performance-marketing_mlg4jy.png",
  google:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784203476/performance-marketing_mlg4jy.png",
  meta: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784203476/performance-marketing_mlg4jy.png",
  retargeting:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784203476/performance-marketing_mlg4jy.png",
  funnel:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784203476/performance-marketing_mlg4jy.png",
  analytics:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784203476/performance-marketing_mlg4jy.png",
  scaling:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784203476/performance-marketing_mlg4jy.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Lead Generation Campaigns",
    desc: "We build high-converting performance marketing campaigns designed to generate qualified leads and consistent business growth. Our strategies focus on targeting the right audience, optimizing landing pages, and reducing cost per lead while maximizing ROI.",
  },
  {
    id: "ecommerce",
    title: "E-commerce Advertising",
    desc: "Scale your online store with performance-driven campaigns focused on increasing sales and maximizing return on ad spend. We optimize product ads, implement dynamic remarketing, and continuously improve campaign performance.",
  },
  {
    id: "google",
    title: "Google Ads Management",
    desc: "Reach high-intent users actively searching for your services with optimized Google Ads campaigns. We focus on keyword strategy, ad copy, bidding optimization, and ROI-driven results.",
  },
  {
    id: "meta",
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Engage your audience with creative and data-driven ad campaigns across Facebook and Instagram. We build funnel-based campaigns that drive awareness, engagement, and conversions.",
  },
  {
    id: "retargeting",
    title: "Retargeting Campaigns",
    desc: "Convert lost visitors into customers using advanced retargeting strategies. We re-engage users based on behavior and improve conversion rates significantly.",
  },
  {
    id: "funnel",
    title: "Sales Funnel Optimization",
    desc: "Improve your conversion rates by optimizing every stage of your marketing funnel. From landing pages to final conversion, we ensure a smooth and effective user journey.",
  },
  {
    id: "analytics",
    title: "Analytics & Tracking Setup",
    desc: "Track every click, lead, and conversion with advanced analytics and tracking systems. We set up tools that provide actionable insights for better decision-making.",
  },
  {
    id: "scaling",
    title: "Campaign Scaling & Optimization",
    desc: "Scale your campaigns with data-backed strategies to maximize ROI and business growth. We identify winning campaigns and continuously optimize for better performance.",
  },
];

const MarketingModernDigital = () => {
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
          Performance Marketing Solutions
          <br /> for Business Growth
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

export default MarketingModernDigital;
