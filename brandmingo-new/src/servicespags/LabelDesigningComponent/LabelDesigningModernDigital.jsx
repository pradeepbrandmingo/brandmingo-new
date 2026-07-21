import React, { useState } from "react";

const serviceImages = {
  lead: "https://i.ibb.co/99041tRP/Chat-GPT-Image-Jul-20-2026-07-11-13-PM.png",
  ecommerce:
    "https://i.ibb.co/99041tRP/Chat-GPT-Image-Jul-20-2026-07-11-13-PM.png",
  google:
    "https://i.ibb.co/99041tRP/Chat-GPT-Image-Jul-20-2026-07-11-13-PM.png",
  meta: "https://i.ibb.co/99041tRP/Chat-GPT-Image-Jul-20-2026-07-11-13-PM.png",
  retargeting:
    "https://i.ibb.co/99041tRP/Chat-GPT-Image-Jul-20-2026-07-11-13-PM.png",
  funnel:
    "https://i.ibb.co/99041tRP/Chat-GPT-Image-Jul-20-2026-07-11-13-PM.png",
  analytics:
    "https://i.ibb.co/99041tRP/Chat-GPT-Image-Jul-20-2026-07-11-13-PM.png",
  scaling:
    "https://i.ibb.co/99041tRP/Chat-GPT-Image-Jul-20-2026-07-11-13-PM.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Custom Label Design",
    desc: "We design premium custom labels that reflect your brand identity and help your products stand out on retail shelves.",
  },
  {
    id: "ecommerce",
    title: "Product Packaging Labels",
    desc: "Creative packaging labels designed for food, beverages, cosmetics, and retail products with a modern, professional look.",
  },
  {
    id: "google",
    title: "Bottle & Jar Label Design",
    desc: "Eye-catching labels for bottles, jars, and containers that combine attractive visuals with clear product information.",
  },
  {
    id: "meta",
    title: "Food & Beverage Labels",
    desc: "Professional food and beverage labels designed to improve shelf appeal while maintaining a clean and compliant layout.",
  },
  {
    id: "retargeting",
    title: "Cosmetic Label Design",
    desc: "Elegant labels for skincare, beauty, perfume, and cosmetic products that enhance your premium brand image.",
  },
  {
    id: "funnel",
    title: "Print-Ready Artwork",
    desc: "High-resolution label designs delivered with proper bleed, dimensions, and print-ready files for flawless production.",
  },
  {
    id: "analytics",
    title: "Multi-Size Label Variations",
    desc: "Create multiple label versions for different product sizes, flavors, and packaging formats while maintaining consistency.",
  },
  {
    id: "scaling",
    title: "Brand Identity Labels",
    desc: "Maintain a consistent brand identity across your entire product range with professionally designed labels and packaging.",
  },
];

const LabelDesigningModernDigital = () => {
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
          Google Ads Services for Modern Digital Businesses
          {/* <br /> Modern Digital Businesses */}
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

export default LabelDesigningModernDigital;
