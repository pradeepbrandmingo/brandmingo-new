import React, { useState } from "react";

const serviceImages = {
  enterprise:
    "https://i.ibb.co/b5fbj3wB/Chat-GPT-Image-Jul-16-2026-03-40-25-PM.png",
  legacy:
    "https://i.ibb.co/b5fbj3wB/Chat-GPT-Image-Jul-16-2026-03-40-25-PM.png",
  pwa: "https://i.ibb.co/b5fbj3wB/Chat-GPT-Image-Jul-16-2026-03-40-25-PM.png",
  api: "https://i.ibb.co/b5fbj3wB/Chat-GPT-Image-Jul-16-2026-03-40-25-PM.png",
  ecommerce:
    "https://i.ibb.co/b5fbj3wB/Chat-GPT-Image-Jul-16-2026-03-40-25-PM.png",
  spa: "https://i.ibb.co/b5fbj3wB/Chat-GPT-Image-Jul-16-2026-03-40-25-PM.png",
  migration:
    "https://i.ibb.co/b5fbj3wB/Chat-GPT-Image-Jul-16-2026-03-40-25-PM.png",
  payment:
    "https://i.ibb.co/b5fbj3wB/Chat-GPT-Image-Jul-16-2026-03-40-25-PM.png",
};

const servicesData = [
  {
    id: "enterprise",
    title: "Custom Shopify Store Development",
    desc: "We build premium Shopify stores tailored to your brand, business goals, and customer journey for higher conversions.",
  },
  {
    id: "legacy",
    title: "Shopify Theme Customization",
    desc: "We customize Shopify themes to match your brand identity while improving performance and shopping experiences.",
  },
  {
    id: "pwa",
    title: "Shopify Store Redesign",
    desc: "We redesign outdated Shopify stores with modern layouts that improve user experience and increase online sales.",
  },
  {
    id: "api",
    title: "Shopify App Integrations",
    desc: "We integrate Shopify with payment gateways, shipping providers, CRMs, and third-party business applications.",
  },
  {
    id: "ecommerce",
    title: "Shopify Migration Services",
    desc: "We migrate your existing online store to Shopify securely while preserving products, customers, and SEO structure.",
  },
  {
    id: "spa",
    title: "Shopify Performance Optimization",
    desc: "We optimize Shopify stores for faster loading, better performance, and smoother shopping across every device.",
  },
  {
    id: "migration",
    title: "Shopify SEO Optimization",
    desc: "We build SEO-ready Shopify stores designed to improve search visibility, rankings, and organic traffic growth.",
  },
  {
    id: "payment",
    title: "Shopify Maintenance & Support",
    desc: "We provide ongoing Shopify maintenance, updates, and technical support to keep your store running smoothly.",
  },
];

const ShopifyModernDigital = () => {
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
          Shopify Development Services for Modern eCommerce Brands
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

export default ShopifyModernDigital;
