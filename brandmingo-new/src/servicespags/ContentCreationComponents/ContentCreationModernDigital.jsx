import React, { useState } from "react";

const serviceImages = {
  lead: "https://i.ibb.co/LMzkrP7/Untitled-design-16.jpg",
  ecommerce:
    "https://i.ibb.co/0XJzQpX/Untitled-design-17.jpg",
  google:
    "https://i.ibb.co/0XJzQpX/Untitled-design-17.jpg",
  meta: "https://i.ibb.co/0XJzQpX/Untitled-design-17.jpg",
  retargeting:
    "https://i.ibb.co/0XJzQpX/Untitled-design-17.jpg",
  funnel:
    "https://i.ibb.co/0XJzQpX/Untitled-design-17.jpg",
  analytics:
    "https://i.ibb.co/0XJzQpX/Untitled-design-17.jpg",
  scaling:
    "https://i.ibb.co/0XJzQpX/Untitled-design-17.jpg",
};

const servicesData = [
  {
    id: "lead",
    title: "Content Strategy",
    desc: "We create result-driven content strategies that align with your brand, audience, and business goals.",
  },
  {
    id: "ecommerce",
    title: "Website Content",
    desc: "SEO-friendly website content designed to engage visitors, build trust, and improve conversions.",
  },
  {
    id: "google",
    title: "SEO Content Writing",
    desc: "Keyword-optimized content that improves search rankings, drives organic traffic, and boosts visibility.",
  },
  {
    id: "meta",
    title: "Blog & Article Writing",
    desc: "Informative and engaging blogs that educate your audience, build authority, and attract more readers.",
  },
  {
    id: "retargeting",
    title: "Social Media Content",
    desc: "Creative content crafted for social platforms to increase engagement, reach, and brand awareness.",
  },
  {
    id: "funnel",
    title: "Product Descriptions",
    desc: "Persuasive product descriptions that highlight features, benefits, and encourage more sales.",
  },
  {
    id: "analytics",
    title: "Email Copywriting",
    desc: "Professional email content for newsletters, promotions, lead nurturing, and customer engagement.",
  },
  {
    id: "scaling",
    title: "Content Optimization",
    desc: "Improve existing content with SEO, readability, and optimization techniques for better performance.",
  },
];

const ContentCreationModernDigital = () => {
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
          Performance Marketing Services for
          <br /> Modern Digital Businesses
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

export default ContentCreationModernDigital;
