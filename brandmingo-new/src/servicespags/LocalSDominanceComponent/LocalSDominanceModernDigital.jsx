import React, { useState } from "react";

const serviceImages = {
  lead: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784377042/Untitled_design_8_kxvpra.png",
  ecommerce:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784377042/Untitled_design_8_kxvpra.png",
  google:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784377042/Untitled_design_8_kxvpra.png",
  meta: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784377042/Untitled_design_8_kxvpra.png",
  retargeting:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784377042/Untitled_design_8_kxvpra.png",
  funnel:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784377042/Untitled_design_8_kxvpra.png",
  analytics:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784377042/Untitled_design_8_kxvpra.png",
  scaling:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784377042/Untitled_design_8_kxvpra.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Google Business Profile",
    desc: "Optimize your Google Business Profile to improve local visibility, attract nearby customers, and increase calls, enquiries, and store visits.",
  },
  {
    id: "ecommerce",
    title: "Local Keyword Research",
    desc: "Identify high-value location-based keywords that help your business rank higher in local search results and reach the right audience.",
  },
  {
    id: "google",
    title: "Google Maps Optimization",
    desc: "Improve your Google Maps presence with profile optimization, accurate business details, and strategies that increase local visibility.",
  },
  {
    id: "meta",
    title: "Local Citation Management",
    desc: "Build and manage consistent business listings across trusted directories to strengthen local authority and improve search rankings.",
  },
  {
    id: "retargeting",
    title: "Review & Reputation Management",
    desc: "Increase customer trust by managing online reviews, improving ratings, and building a stronger local business reputation.",
  },
  {
    id: "funnel",
    title: "Location Landing Pages",
    desc: "Create SEO-optimized location pages that target nearby customers, improve rankings, and generate qualified local enquiries.",
  },
  {
    id: "analytics",
    title: "Local SEO Tracking",
    desc: "Track local keyword rankings, Google Business insights, and customer engagement with detailed performance reporting.",
  },
  {
    id: "scaling",
    title: "Local Growth Strategy",
    desc: "Continuously optimize your Local SEO strategy to increase visibility, generate more local leads, and drive long-term business growth.",
  },
];

const LocalSDominanceModernDigital = () => {
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
          Local SEO Services for
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

export default LocalSDominanceModernDigital;
