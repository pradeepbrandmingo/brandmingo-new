import React, { useState } from "react";

const serviceImages = {
  lead: "https://i.ibb.co/1tg8nSPm/Chat-GPT-Image-Jul-20-2026-06-01-30-PM.png",
  ecommerce:
    "https://i.ibb.co/1tg8nSPm/Chat-GPT-Image-Jul-20-2026-06-01-30-PM.png",
  google:
    "https://i.ibb.co/1tg8nSPm/Chat-GPT-Image-Jul-20-2026-06-01-30-PM.png",
  meta: "https://i.ibb.co/1tg8nSPm/Chat-GPT-Image-Jul-20-2026-06-01-30-PM.png",
  retargeting:
    "https://i.ibb.co/1tg8nSPm/Chat-GPT-Image-Jul-20-2026-06-01-30-PM.png",
  funnel:
    "https://i.ibb.co/1tg8nSPm/Chat-GPT-Image-Jul-20-2026-06-01-30-PM.png",
  analytics:
    "https://i.ibb.co/1tg8nSPm/Chat-GPT-Image-Jul-20-2026-06-01-30-PM.png",
  scaling:
    "https://i.ibb.co/1tg8nSPm/Chat-GPT-Image-Jul-20-2026-06-01-30-PM.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Custom Logo Design",
    desc: "We create unique, memorable, and professionally crafted logos that represent your brand identity and leave a lasting impression. Every logo is designed from scratch to reflect your business values and vision.",
  },
  {
    id: "ecommerce",
    title: "Brand Identity Design",
    desc: "Build a strong and consistent brand identity with carefully selected colors, typography, and visual elements that enhance recognition and create a professional image across every platform.",
  },
  {
    id: "google",
    title: "Logo Redesign Services",
    desc: "Refresh your existing logo with a modern and professional design while preserving your brand's core identity. We transform outdated logos into timeless, impactful brand assets.",
  },
  {
    id: "meta",
    title: "Minimalist Logo Design",
    desc: "Create clean, modern, and timeless logos that are simple, memorable, and versatile. Our minimalist designs ensure maximum impact across digital and print media.",
  },
  {
    id: "retargeting",
    title: "Business Logo Design",
    desc: "Whether you're a startup or an established business, we design professional logos tailored to your industry, audience, and long-term branding goals.",
  },
  {
    id: "funnel",
    title: "Logo Mockups & Variations",
    desc: "Visualize your logo in real-world applications with premium mockups and multiple layout variations, ensuring it looks perfect across websites, packaging, stationery, and social media.",
  },
  {
    id: "analytics",
    title: "Vector Files & Brand Assets",
    desc: "Receive high-quality vector files and complete logo assets optimized for print, digital, merchandise, and large-scale branding without any loss of quality.",
  },
  {
    id: "scaling",
    title: "Brand Guidelines",
    desc: "Get a comprehensive brand guideline document covering logo usage, colors, typography, spacing, and design standards to maintain consistency across all marketing materials.",
  },
];

const LogoDesignModernDigital = () => {
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

export default LogoDesignModernDigital;
