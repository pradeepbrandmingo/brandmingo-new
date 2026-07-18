import React, { useState } from "react";

// 1. यहाँ Keys को servicesData की IDs से मैच कर दिया गया है
const serviceImages = {
  business: "https://i.ibb.co/F43TwtrL/Untitled-design-15.jpg",
  market: "https://i.ibb.co/F43TwtrL/Untitled-design-15.jpg",
  audience: "https://i.ibb.co/F43TwtrL/Untitled-design-15.jpg",
  competitive: "https://i.ibb.co/F43TwtrL/Untitled-design-15.jpg",
  roadmap: "https://i.ibb.co/F43TwtrL/Untitled-design-15.jpg",
  planning: "https://i.ibb.co/F43TwtrL/Untitled-design-15.jpg",
  analysis: "https://i.ibb.co/F43TwtrL/Untitled-design-15.jpg",
  consulting: "https://i.ibb.co/F43TwtrL/Untitled-design-15.jpg",
};

const servicesData = [
  {
    id: "business",
    title: "Business Strategy",
    desc: "We create data-driven business strategies that align with your goals, improve decision-making, and build a strong foundation for sustainable business growth.",
  },
  {
    id: "market",
    title: "Market Research",
    desc: "Understand industry trends, customer demand, and competitor insights to identify opportunities and build effective business strategies.",
  },
  {
    id: "audience",
    title: "Audience Research",
    desc: "Analyze customer behavior, preferences, and demographics to create targeted strategies that improve engagement and business results.",
  },
  {
    id: "competitive",
    title: "Competitive Analysis",
    desc: "Evaluate competitors, identify market gaps, and discover competitive advantages that strengthen your business positioning.",
  },
  {
    id: "roadmap",
    title: "Growth Roadmap",
    desc: "Develop a structured roadmap with clear milestones, priorities, and action plans to achieve long-term business growth.",
  },
  {
    id: "planning",
    title: "Strategic Planning",
    desc: "Build practical business strategies that optimize resources, reduce risks, and support scalable growth with measurable outcomes.",
  },
  {
    id: "analysis",
    title: "Performance Analysis",
    desc: "Track business performance using meaningful insights and key metrics to refine strategies and improve overall business efficiency.",
  },
  {
    id: "consulting",
    title: "Strategic Consulting",
    desc: "Get expert guidance to refine your business strategy, overcome challenges, and unlock new growth opportunities with confidence.",
  },
];

const StrategyModernDigital = () => {
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
        <h3 className="ret-heading text-center mb-5">
          Strategy Planning Services for
          <br /> Business Growth
        </h3>

        {/* ── DESKTOP ── */}
        <div className="ret-grid ret-desktop-only">
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

        {/* ── MOBILE ── */}
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

export default StrategyModernDigital;