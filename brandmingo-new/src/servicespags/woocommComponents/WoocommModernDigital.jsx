import React, { useState } from "react";

const serviceImages = {
  custom:
    "https://i.ibb.co/1fg4zNRn/Chat-GPT-Image-Jul-15-2026-06-09-03-PM.png",
  design:
    "https://i.ibb.co/1fg4zNRn/Chat-GPT-Image-Jul-15-2026-06-09-03-PM.png",
  setup:
    "https://i.ibb.co/1fg4zNRn/Chat-GPT-Image-Jul-15-2026-06-09-03-PM.png",
  plugin:
    "https://i.ibb.co/1fg4zNRn/Chat-GPT-Image-Jul-15-2026-06-09-03-PM.png",
  optimization:
    "https://i.ibb.co/1fg4zNRn/Chat-GPT-Image-Jul-15-2026-06-09-03-PM.png",
  seo:"https://i.ibb.co/1fg4zNRn/Chat-GPT-Image-Jul-15-2026-06-09-03-PM.png",
  migration:
    "https://i.ibb.co/1fg4zNRn/Chat-GPT-Image-Jul-15-2026-06-09-03-PM.png",
  support:
    "https://i.ibb.co/1fg4zNRn/Chat-GPT-Image-Jul-15-2026-06-09-03-PM.png",
};

const servicesData = [
  {
    id: "custom",
    title: "Custom Store Development",
    desc: "We build fast, scalable, and fully customized WooCommerce stores tailored to your business needs and brand identity.",
  },
  {
    id: "design",
    title: "Store Design",
    desc: "We design modern, responsive, and user-friendly WooCommerce stores focused on seamless shopping and better conversions.",
  },
  {
    id: "setup",
    title: "WooCommerce Setup",
    desc: "We set up and configure complete WooCommerce stores with products, payments, shipping, taxes, and essential settings.",
  },
  {
    id: "plugin",
    title: "Plugin Development",
    desc: "We develop custom WooCommerce plugins and advanced features to extend functionality and streamline your store operations.",
  },
  {
    id: "optimization",
    title: "Store Optimization",
    desc: "We optimize WooCommerce stores for faster loading, improved performance, smooth navigation, and a better shopping experience.",
  },
  {
    id: "seo",
    title: "SEO for Store",
    desc: "We build SEO-friendly WooCommerce stores optimized for better search visibility, organic traffic, and higher online rankings.",
  },
  {
    id: "migration",
    title: "Store Migration",
    desc: "We securely migrate your existing online store to WooCommerce while protecting products, customer data, and SEO structure.",
  },
  {
    id: "support",
    title: "Maintenance & Support",
    desc: "We provide ongoing WooCommerce maintenance and technical support to keep your store secure, updated, and running smoothly.",
  },
];

const WoocommModernDigital = () => {
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
          WooCommerce Development Services{" "}
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

export default WoocommModernDigital;
