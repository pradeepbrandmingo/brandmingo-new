import React, { useState } from "react";

const serviceImages = {
  lead: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784541119/Untitled_design_10_ojdosh.png",
  ecommerce:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784541119/Untitled_design_10_ojdosh.png",
  google:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784541119/Untitled_design_10_ojdosh.png",
  meta: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784541119/Untitled_design_10_ojdosh.png",
  retargeting:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784541119/Untitled_design_10_ojdosh.png",
  funnel:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784541119/Untitled_design_10_ojdosh.png",
  analytics:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784541119/Untitled_design_10_ojdosh.png",
  scaling:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784541119/Untitled_design_10_ojdosh.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Store Setup & Optimization",
    desc: "Build a professional Amazon store with optimized settings, branding, and structure that improves visibility, customer trust, and long-term growth.",
  },
  {
    id: "ecommerce",
    title: "Product Listing Optimization",
    desc: "Create SEO-friendly product listings with optimized titles, bullet points, descriptions, and keywords to increase rankings and conversions.",
  },
  {
    id: "google",
    title: "Amazon PPC Management",
    desc: "Launch and manage Sponsored Ads campaigns that increase product visibility, reduce ACoS, and generate consistent sales growth.",
  },
  {
    id: "meta",
    title: "A+ Content & Brand Store",
    desc: "Enhance your brand presence with premium A+ Content and Amazon Brand Store designs that improve customer engagement and conversions.",
  },
  {
    id: "retargeting",
    title: "Inventory Management",
    desc: "Monitor inventory, prevent stock shortages, and maintain healthy product availability to support uninterrupted business growth.",
  },
  {
    id: "funnel",
    title: "Order & Account Management",
    desc: "Manage orders, account health, customer communication, and seller performance to ensure smooth Amazon operations.",
  },
  {
    id: "analytics",
    title: "Sales & Performance Analytics",
    desc: "Track sales, keyword rankings, and account performance with detailed reports that support smarter business decisions.",
  },
  {
    id: "scaling",
    title: "Store Growth & Scaling",
    desc: "Scale your Amazon business with data-driven optimization, category expansion, and proven strategies for long-term revenue growth.",
  },
];

const AmazonModernDigital = () => {
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
          Amazon Management Services for
          <br /> Modern E-commerce Brands
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

export default AmazonModernDigital;
