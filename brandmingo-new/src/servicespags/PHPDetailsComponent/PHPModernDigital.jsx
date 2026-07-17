import React, { useState } from "react";

const serviceImages = {
  custom:
    "https://i.ibb.co/gLRvZPDz/Untitled-design-11.jpg",
  theme:
    "https://i.ibb.co/gLRvZPDz/Untitled-design-11.jpg",
  woocommerce:
    "https://i.ibb.co/gLRvZPDz/Untitled-design-11.jpg",
  plugin:
    "https://i.ibb.co/gLRvZPDz/Untitled-design-11.jpg",
  optimization:
    "https://i.ibb.co/gLRvZPDz/Untitled-design-11.jpg",
  seo: "https://i.ibb.co/gLRvZPDz/Untitled-design-11.jpg",
  migration:
    "https://i.ibb.co/gLRvZPDz/Untitled-design-11.jpg",
  support:
    "https://i.ibb.co/gLRvZPDz/Untitled-design-11.jpg", 
};

const servicesData = [
  {
    id: "custom",
    title: "Custom PHP Development",
    desc: "We build secure, scalable, and custom PHP applications tailored to your business requirements.",
  },
  {
    id: "theme",
    title: "PHP Web Development",
    desc: "Develop fast, responsive, and dynamic PHP websites with clean code and modern architecture.",
  },
  {
    id: "woocommerce",
    title: "PHP CMS Development",
    desc: "Build powerful PHP-based CMS solutions that simplify content management and business growth.",
  },
  {
    id: "plugin",
    title: "API Integration",
    desc: "Integrate secure APIs, payment gateways, and third-party services into your PHP applications.",
  },
  {
    id: "optimization",
    title: "Performance Optimization",
    desc: "Optimize PHP applications for faster speed, better performance, and improved user experience.",
  },
  {
    id: "seo",
    title: "SEO-Friendly Development",
    desc: "Develop SEO-ready PHP websites with optimized structure, clean URLs, and better search visibility.",
  },
  {
    id: "migration",
    title: "PHP Migration",
    desc: "Migrate legacy applications to modern PHP securely with minimal downtime and zero data loss.",
  },
  {
    id: "support",
    title: "Maintenance & Support",
    desc: "Keep your PHP applications secure, updated, and running smoothly with expert technical support.",
  },
];

const PHPModernDigital = () => {
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
          PHP Development Services{" "}
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

export default PHPModernDigital;
