import React, { useState } from "react";

const serviceImages = {
  lead: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784357620/Untitled_design_3_xxpj7r.png",
  ecommerce:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784357620/Untitled_design_3_xxpj7r.png",
  google:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784357620/Untitled_design_3_xxpj7r.png",
  meta: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784357620/Untitled_design_3_xxpj7r.png",
  retargeting:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784357620/Untitled_design_3_xxpj7r.png",
  funnel:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784357620/Untitled_design_3_xxpj7r.png",
  analytics:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784357620/Untitled_design_3_xxpj7r.png",
  scaling:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1784357620/Untitled_design_3_xxpj7r.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Lead Generation Campaigns",
    desc: "Generate high-quality B2B leads through LinkedIn Ads campaigns designed to connect your business with decision-makers, increase lead quality, and drive measurable business growth.",
  },
  {
    id: "ecommerce",
    title: "E-commerce Advertising",
    desc: "Promote your online store with LinkedIn Ads that target business buyers, increase product visibility, generate qualified leads, and improve return on advertising investment.",
  },
  {
    id: "google",
    title: "LinkedIn Ads Management",
    desc: "Manage and optimize LinkedIn Ads campaigns with advanced audience targeting, smart bidding strategies, continuous optimization, and ROI-focused campaign management.",
  },
  {
    id: "meta",
    title: "Sponsored Content Ads",
    desc: "Promote valuable business content through Sponsored Content campaigns that increase brand awareness, professional engagement, website traffic, and qualified inquiries.",
  },
  {
    id: "retargeting",
    title: "Retargeting Campaigns",
    desc: "Reconnect with previous website visitors using LinkedIn remarketing campaigns that improve conversions, strengthen brand recall, and maximize every marketing opportunity.",
  },
  {
    id: "funnel",
    title: "Lead Funnel Optimization",
    desc: "Optimize every stage of your B2B sales funnel to improve lead quality, increase conversion rates, reduce acquisition costs, and maximize campaign performance.",
  },
  {
    id: "analytics",
    title: "Analytics & Tracking Setup",
    desc: "Track every click, lead, and conversion with LinkedIn Insight Tag, conversion tracking, and advanced analytics for accurate reporting and smarter business decisions.",
  },
  {
    id: "scaling",
    title: "Campaign Scaling & Optimization",
    desc: "Scale successful LinkedIn Ads campaigns with audience refinement, budget optimization, performance analysis, and data-driven strategies for sustainable business growth.",
  },
];

const LinkedinModernDigital = () => {
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
          LinkedIn Ads Services for
          <br /> Modern B2B Businesses
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

export default LinkedinModernDigital;
