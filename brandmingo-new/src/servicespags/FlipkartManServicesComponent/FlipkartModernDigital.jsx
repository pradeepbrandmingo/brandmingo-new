import React, { useState } from "react";

const serviceImages = {
  lead: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784544833/Untitled_design_12_fk6fsa.png",
  ecommerce:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784544833/Untitled_design_12_fk6fsa.png",
  google:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784544833/Untitled_design_12_fk6fsa.png",
  meta: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784544833/Untitled_design_12_fk6fsa.png",
  retargeting:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784544833/Untitled_design_12_fk6fsa.png",
  funnel:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784544833/Untitled_design_12_fk6fsa.png",
  analytics:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784544833/Untitled_design_12_fk6fsa.png",
  scaling:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784544833/Untitled_design_12_fk6fsa.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Product Listing Optimization",
    desc: "Optimize Flipkart product listings with SEO-friendly titles, descriptions, keywords, and images to improve search visibility, increase clicks, and drive higher conversions across the marketplace.",
  },
  {
    id: "ecommerce",
    title: "Catalog Management",
    desc: "Manage your Flipkart catalog with accurate product information, organized categories, updated attributes, and marketplace-compliant listings for better discoverability and sales.",
  },
  {
    id: "google",
    title: "Flipkart Ads Management",
    desc: "Run high-performing Flipkart advertising campaigns that increase product visibility, attract qualified buyers, optimize ad spend, and maximize return on investment.",
  },
  {
    id: "meta",
    title: "Pricing & Promotion Strategy",
    desc: "Create competitive pricing strategies, promotional offers, and discount campaigns that improve product rankings, increase conversions, and boost overall marketplace performance.",
  },
  {
    id: "retargeting",
    title: "Order & Inventory Management",
    desc: "Efficiently manage orders, inventory, stock updates, and fulfillment processes to reduce delays, prevent stock issues, and deliver a seamless customer experience.",
  },
  {
    id: "funnel",
    title: "Seller Account Optimization",
    desc: "Improve Flipkart seller account health, ratings, policy compliance, and operational performance to strengthen brand credibility and achieve sustainable marketplace growth.",
  },
  {
    id: "analytics",
    title: "Analytics & Performance Reports",
    desc: "Monitor sales, product performance, advertising metrics, and customer insights through detailed reports that support smarter business decisions and continuous optimization.",
  },
  {
    id: "scaling",
    title: "Store Growth & Scaling",
    desc: "Scale your Flipkart business with data-driven strategies, continuous optimization, marketplace expansion, and long-term growth initiatives that maximize revenue and profitability.",
  },
];

const FlipkartModernDigital = () => {
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
          Professional Flipkart Management
          <br /> Services for Growing Brands
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

export default FlipkartModernDigital;
