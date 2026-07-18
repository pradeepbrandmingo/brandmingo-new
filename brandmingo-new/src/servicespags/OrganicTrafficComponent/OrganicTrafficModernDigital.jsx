import React, { useState } from "react";

const serviceImages = {
  lead: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784378351/Untitled_design_5_qe07zc.png",
  ecommerce:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784378351/Untitled_design_5_qe07zc.png",
  google:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784378351/Untitled_design_5_qe07zc.png",
  meta: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784378351/Untitled_design_5_qe07zc.png",
  retargeting:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784378351/Untitled_design_5_qe07zc.png",
  funnel:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784378351/Untitled_design_5_qe07zc.png",
  analytics:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784378351/Untitled_design_5_qe07zc.png",
  scaling:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784378351/Untitled_design_5_qe07zc.png ",
};

const servicesData = [
  {
    id: "lead",
    title: "Keyword Research & Strategy",
    desc: "Identify high-value keywords your customers search for and build a data-driven SEO strategy that improves rankings, attracts qualified traffic, and supports long-term organic growth.",
  },
  {
    id: "ecommerce",
    title: "On-Page SEO Optimization",
    desc: "Optimize your website with SEO-friendly content, metadata, internal linking, and page improvements that increase search visibility and organic website traffic.",
  },
  {
    id: "google",
    title: "Technical SEO Audit",
    desc: "Resolve technical SEO issues affecting crawling, indexing, website speed, and overall performance to build a strong foundation for higher search rankings.",
  },
  {
    id: "meta",
    title: "SEO Content Strategy",
    desc: "Create optimized website content that matches search intent, improves keyword rankings, increases engagement, and drives consistent organic traffic growth.",
  },
  {
    id: "retargeting",
    title: "Local SEO Optimization",
    desc: "Increase your local search visibility with Google Business Profile optimization, location-based SEO, and strategies that attract nearby customers consistently.",
  },
  {
    id: "funnel",
    title: "SEO Analytics & Tracking",
    desc: "Monitor keyword rankings, organic traffic, and user behavior with advanced SEO reporting to measure performance and discover new growth opportunities.",
  },
  {
    id: "analytics",
    title: "Link Building Strategy",
    desc: "Build high-quality backlinks through ethical SEO practices that improve domain authority, search rankings, and long-term organic website visibility.",
  },
  {
    id: "scaling",
    title: "Organic Growth Optimization",
    desc: "Continuously optimize your SEO strategy using real performance data to improve rankings, increase qualified traffic, and achieve sustainable business growth.",
  },
];

const OrganicTrafficModernDigital = () => {
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
          Comprehensive Organic
          <br />
          Traffic Growth Solutions
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

export default OrganicTrafficModernDigital;
