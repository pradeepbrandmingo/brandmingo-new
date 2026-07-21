import React, { useState } from "react";

const serviceImages = {
  lead: "https://i.ibb.co/V090FKhh/Chat-GPT-Image-Jul-20-2026-12-56-58-PM.png",
  ecommerce:
    "https://i.ibb.co/V090FKhh/Chat-GPT-Image-Jul-20-2026-12-56-58-PM.png",
  google:
    "https://i.ibb.co/V090FKhh/Chat-GPT-Image-Jul-20-2026-12-56-58-PM.png",
  meta: "https://i.ibb.co/V090FKhh/Chat-GPT-Image-Jul-20-2026-12-56-58-PM.png",
  retargeting:
    "https://i.ibb.co/V090FKhh/Chat-GPT-Image-Jul-20-2026-12-56-58-PM.png",
  funnel:
    "https://i.ibb.co/V090FKhh/Chat-GPT-Image-Jul-20-2026-12-56-58-PM.png",
  analytics:
    "https://i.ibb.co/V090FKhh/Chat-GPT-Image-Jul-20-2026-12-56-58-PM.png",
  scaling:
    "https://i.ibb.co/V090FKhh/Chat-GPT-Image-Jul-20-2026-12-56-58-PM.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Brand Strategy Development",
    desc: "Build a strong foundation for your business with a comprehensive brand strategy that defines your vision, mission, positioning, values, and long-term goals. We help you create a brand that stands out and connects with your audience.",
  },
  {
    id: "ecommerce",
    title: "Visual Identity Design",
    desc: "Create a memorable visual identity with professionally designed logos, color palettes, typography, and brand assets that reflect your company's personality and establish lasting recognition.",
  },
  {
    id: "google",
    title: "Corporate Identity Design",
    desc: "Develop premium corporate identity materials including business cards, letterheads, presentation templates, email signatures, and stationery that reinforce your brand's professionalism.",
  },
  {
    id: "meta",
    title: "Brand Guidelines",
    desc: "Ensure brand consistency with detailed brand guidelines covering logo usage, typography, colors, imagery, and communication standards across all digital and print platforms.",
  },
  {
    id: "retargeting",
    title: "Brand Messaging",
    desc: "Develop compelling brand messaging, mission statements, taglines, and communication strategies that clearly express your values and build stronger customer relationships.",
  },
  {
    id: "funnel",
    title: "Marketing Collateral Design",
    desc: "Design impactful marketing materials including brochures, company profiles, pitch decks, flyers, banners, and social media creatives that strengthen your brand identity.",
  },
  {
    id: "analytics",
    title: "Brand Reputation Management",
    desc: "Build customer trust and maintain a strong market reputation through consistent branding, positive brand perception, and strategic reputation management practices.",
  },
  {
    id: "scaling",
    title: "Brand Growth & Consulting",
    desc: "Receive expert branding consultation to improve brand positioning, strengthen market presence, and create scalable branding strategies for long-term business growth.",
  },
];

const CorporateBrandingModernDigital = () => {
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

export default CorporateBrandingModernDigital;
