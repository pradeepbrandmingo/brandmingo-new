import React, { useState } from "react";

const serviceImages = {
  lead: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784553147/Untitled_design_17_l1zbcu.png",
  ecommerce:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784553147/Untitled_design_17_l1zbcu.png",
  google:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784553147/Untitled_design_17_l1zbcu.png",
  meta: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784553147/Untitled_design_17_l1zbcu.png",
  retargeting:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784553147/Untitled_design_17_l1zbcu.png",
  funnel:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784553147/Untitled_design_17_l1zbcu.png",
  analytics:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784553147/Untitled_design_17_l1zbcu.png",
  scaling:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784553147/Untitled_design_17_l1zbcu.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Product Listing Optimization",
    desc: "Improve your Snapdeal product listings with SEO-friendly titles, descriptions, keywords, and images to increase visibility, attract more buyers, and drive higher sales.",
  },
  {
    id: "ecommerce",
    title: "Catalog Management",
    desc: "Manage your Snapdeal catalog with accurate product information, categories, variants, and regular updates for a seamless shopping experience.",
  },
  {
    id: "google",
    title: "Pricing & Promotion Strategy",
    desc: "Boost conversions with competitive pricing, discount campaigns, promotional offers, and marketplace strategies that maximize sales and profitability.",
  },
  {
    id: "meta",
    title: "Seller Account Optimization",
    desc: "Enhance your Snapdeal seller account performance with account health monitoring, policy compliance, and continuous marketplace optimization.",
  },
  {
    id: "retargeting",
    title: "Order & Inventory Management",
    desc: "Maintain accurate inventory, process orders efficiently, and reduce stock issues to deliver a smooth customer experience and consistent growth.",
  },
  {
    id: "funnel",
    title: "Store Growth Strategy",
    desc: "Grow your Snapdeal business with data-driven marketplace strategies focused on increasing visibility, improving sales, and achieving long-term success.",
  },
  {
    id: "analytics",
    title: "Analytics & Performance Reports",
    desc: "Monitor store performance through detailed reports and actionable insights to optimize sales, products, and overall marketplace performance.",
  },
  {
    id: "scaling",
    title: "Marketplace Growth Support",
    desc: "Receive dedicated marketplace support with continuous optimization, expert guidance, and growth strategies to scale your Snapdeal business.",
  },
];

const SnapdealModernDigital = () => {
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
          Snapdeal Management Services
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

export default SnapdealModernDigital;
