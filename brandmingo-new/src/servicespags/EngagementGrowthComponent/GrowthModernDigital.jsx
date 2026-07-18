import React, { useState } from "react";

const serviceImages = {
  lead: "https://i.ibb.co/9krSTfcT/Chat-GPT-Image-Jul-18-2026-05-33-21-PM.png",
  ecommerce:
    "https://i.ibb.co/9krSTfcT/Chat-GPT-Image-Jul-18-2026-05-33-21-PM.png",
  google:
    "https://i.ibb.co/9krSTfcT/Chat-GPT-Image-Jul-18-2026-05-33-21-PM.png",
  meta: "https://i.ibb.co/9krSTfcT/Chat-GPT-Image-Jul-18-2026-05-33-21-PM.png",
  retargeting:
    "https://i.ibb.co/9krSTfcT/Chat-GPT-Image-Jul-18-2026-05-33-21-PM.png",
  funnel:
    "https://i.ibb.co/9krSTfcT/Chat-GPT-Image-Jul-18-2026-05-33-21-PM.png",
  analytics:
    "https://i.ibb.co/9krSTfcT/Chat-GPT-Image-Jul-18-2026-05-33-21-PM.png",
  scaling:
    "https://i.ibb.co/9krSTfcT/Chat-GPT-Image-Jul-18-2026-05-33-21-PM.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Engagement Strategy",
    desc: "We create customized engagement strategies that help businesses connect with their audience, strengthen customer relationships, and drive sustainable growth.",
  },
  {
    id: "ecommerce",
    title: "Customer Engagement",
    desc: "Build meaningful customer relationships through personalized interactions, engagement campaigns, and loyalty-focused initiatives that increase retention.",
  },
  {
    id: "google",
    title: "Content & Communication",
    desc: "Deliver valuable content and personalized communication that keeps your audience engaged across every stage of the customer journey.",
  },
  {
    id: "meta",
    title: "Social Media Engagement",
    desc: "Increase audience interaction and brand visibility with engaging social media strategies designed to encourage conversations and community growth.",
  },
  {
    id: "retargeting",
    title: "Community Building",
    desc: "Develop active communities around your brand by encouraging meaningful participation, discussions, and long-term customer relationships.",
  },
  {
    id: "funnel",
    title: "Customer Journey Optimization",
    desc: "Optimize every customer touchpoint to deliver seamless experiences that improve engagement, satisfaction, and long-term loyalty.",
  },
  {
    id: "analytics",
    title: "Engagement Analytics",
    desc: "Track customer engagement, measure performance, and gain actionable insights that help refine strategies and improve business outcomes.",
  },
  {
    id: "scaling",
    title: "Growth & Retention",
    desc: "Continuously optimize engagement strategies to increase customer retention, strengthen brand loyalty, and achieve sustainable business growth.",
  },
];

const GrowthModernDigital = () => {
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

export default GrowthModernDigital;
