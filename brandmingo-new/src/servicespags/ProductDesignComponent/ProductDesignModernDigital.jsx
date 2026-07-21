import React, { useState } from "react";

const serviceImages = {
  lead: "https://i.ibb.co/qFFmJqkQ/Chat-GPT-Image-Jul-20-2026-03-43-29-PM.png",
  ecommerce:
    "https://i.ibb.co/qFFmJqkQ/Chat-GPT-Image-Jul-20-2026-03-43-29-PM.png",
  google:
    "https://i.ibb.co/qFFmJqkQ/Chat-GPT-Image-Jul-20-2026-03-43-29-PM.png",
  meta: "https://i.ibb.co/qFFmJqkQ/Chat-GPT-Image-Jul-20-2026-03-43-29-PM.png",
  retargeting:
    "https://i.ibb.co/qFFmJqkQ/Chat-GPT-Image-Jul-20-2026-03-43-29-PM.png",
  funnel:
    "https://i.ibb.co/qFFmJqkQ/Chat-GPT-Image-Jul-20-2026-03-43-29-PM.png",
  analytics:
    "https://i.ibb.co/qFFmJqkQ/Chat-GPT-Image-Jul-20-2026-03-43-29-PM.png",
  scaling:
    "https://i.ibb.co/qFFmJqkQ/Chat-GPT-Image-Jul-20-2026-03-43-29-PM.png",
};

const servicesData = [
  {
    id: "lead",
    title: "UI/UX Design",
    desc: "We create intuitive and visually engaging user interfaces that deliver seamless user experiences across web and mobile applications.",
  },
  {
    id: "ecommerce",
    title: "Product Research",
    desc: "We research your market, competitors, and users to build products that solve real user problems and validate product ideas.",
  },
  {
    id: "google",
    title: "Wireframing & Prototyping",
    desc: "Transform concepts into interactive wireframes and prototypes to visualize the product before development begins.",
  },
  {
    id: "meta",
    title: "Design System Development",
    desc: "Build scalable design systems with reusable components that ensure consistency across every screen and platform.",
  },
  {
    id: "retargeting",
    title: "Mobile App Design",
    desc: "Design modern, user-friendly mobile applications with engaging interfaces and seamless user experiences.",
  },
  {
    id: "funnel",
    title: "Web Application Design",
    desc: "Create responsive and high-performance web application interfaces focused on usability and business goals.",
  },
  {
    id: "analytics",
    title: "Usability Testing",
    desc: "Identify usability issues through testing and improve the overall user experience before product launch.",
  },
  {
    id: "scaling",
    title: "Product Design Optimization",
    desc: "Continuously refine and optimize product designs to improve usability, accessibility, and customer satisfaction.",
  },
];

const ProductDesignModernDigital = () => {
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

export default ProductDesignModernDigital;
