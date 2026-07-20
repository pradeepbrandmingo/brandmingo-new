import React, { useState } from "react";

const serviceImages = {
  lead: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784549548/Untitled_design_13_ffb8zq.png",
  ecommerce:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784549548/Untitled_design_13_ffb8zq.png",
  google:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784549548/Untitled_design_13_ffb8zq.png",
  meta: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784549548/Untitled_design_13_ffb8zq.png",
  retargeting:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784549548/Untitled_design_13_ffb8zq.png",
  funnel:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784549548/Untitled_design_13_ffb8zq.png",
  analytics:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784549548/Untitled_design_13_ffb8zq.png",
  scaling:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784549548/Untitled_design_13_ffb8zq.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Product Listing Optimization",
    desc: "Optimize your Shopsy product listings with SEO-friendly titles, descriptions, keywords, and images to improve visibility, attract more customers, and increase product sales.",
  },
  {
    id: "ecommerce",
    title: "Catalog Management",
    desc: "Keep your Shopsy catalog organized with accurate categories, product attributes, variations, and inventory updates for a better shopping experience.",
  },
  {
    id: "google",
    title: "Pricing & Promotion Strategy",
    desc: "Increase sales with competitive pricing, promotional offers, and marketplace strategies designed to improve product visibility and conversions.",
  },
  {
    id: "meta",
    title: "Shopsy Store Management",
    desc: "Manage your complete Shopsy store with account optimization, policy compliance, and continuous performance improvements for long-term growth.",
  },
  {
    id: "retargeting",
    title: "Order & Inventory Management",
    desc: "Manage orders and inventory efficiently with real-time stock updates, smooth fulfillment, and accurate inventory control across your store.",
  },
  {
    id: "funnel",
    title: "Seller Account Optimization",
    desc: "Improve your seller account health, store performance, and customer experience with expert account optimization strategies.",
  },
  {
    id: "analytics",
    title: "Analytics & Performance Reports",
    desc: "Track sales, product performance, and customer insights with detailed reports that support smarter business decisions and continuous growth.",
  },
  {
    id: "scaling",
    title: "Store Growth & Scaling",
    desc: "Scale your Shopsy business with data-driven optimization, marketplace best practices, and growth strategies that increase long-term revenue.",
  },
];

const ShopsyModernDigital = () => {
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
          Shopsy Management Services for
          <br /> Modern Online Businesses
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

export default ShopsyModernDigital;
