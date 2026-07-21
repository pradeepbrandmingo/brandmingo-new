import React, { useState } from "react";

const serviceImages = {
  lead: "https://i.ibb.co/xKRVL7XB/Chat-GPT-Image-Jul-20-2026-11-42-40-AM.png",
  ecommerce:
    "https://i.ibb.co/xKRVL7XB/Chat-GPT-Image-Jul-20-2026-11-42-40-AM.png",
  google:
    "https://i.ibb.co/xKRVL7XB/Chat-GPT-Image-Jul-20-2026-11-42-40-AM.png",
  meta: "https://i.ibb.co/xKRVL7XB/Chat-GPT-Image-Jul-20-2026-11-42-40-AM.png",
  retargeting:
    "https://i.ibb.co/xKRVL7XB/Chat-GPT-Image-Jul-20-2026-11-42-40-AM.png",
  funnel:
    "https://i.ibb.co/xKRVL7XB/Chat-GPT-Image-Jul-20-2026-11-42-40-AM.png",
  analytics:
    "https://i.ibb.co/xKRVL7XB/Chat-GPT-Image-Jul-20-2026-11-42-40-AM.png",
  scaling:
    "https://i.ibb.co/xKRVL7XB/Chat-GPT-Image-Jul-20-2026-11-42-40-AM.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Custom Website Design",
    desc: "We create unique, visually stunning websites tailored to your brand identity. Our custom designs focus on delivering exceptional user experiences, improving engagement, and helping your business stand out online.",
  },
  {
    id: "ecommerce",
    title: "Responsive Web Design",
    desc: "We build fully responsive websites that provide seamless experiences across desktops, tablets, and mobile devices. Every design is optimized for performance, usability, and accessibility.",
  },
  {
    id: "google",
    title: "Landing Page Design",
    desc: "Our high-converting landing pages are designed to capture attention, generate leads, and maximize conversions with clear messaging, engaging visuals, and effective call-to-action sections.",
  },
  {
    id: "meta",
    title: "UI/UX Design",
    desc: "We design intuitive user interfaces and engaging user experiences that make your website easy to navigate, visually appealing, and optimized for customer satisfaction.",
  },
  {
    id: "retargeting",
    title: "eCommerce Website Design",
    desc: "Create beautiful online stores with user-friendly shopping experiences, optimized product pages, and conversion-focused layouts that help increase sales and customer retention.",
  },
  {
    id: "funnel",
    title: "Website Redesign",
    desc: "Transform outdated websites into modern, professional, and high-performing digital experiences that improve usability, strengthen your brand, and increase customer engagement.",
  },
  {
    id: "analytics",
    title: "SEO-Friendly Web Design",
    desc: "We develop websites using SEO best practices, clean code, optimized structures, and fast-loading pages to improve search engine visibility and drive more organic traffic.",
  },
  {
    id: "scaling",
    title: "Website Maintenance & Support",
    desc: "Keep your website secure, updated, and performing at its best with ongoing maintenance, regular updates, performance optimization, and dedicated technical support.",
  },
];

const CustomWebDevModernDigital = () => {
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
          Custom Web Design Services for
          <br /> Modern Businesses
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

export default CustomWebDevModernDigital;
