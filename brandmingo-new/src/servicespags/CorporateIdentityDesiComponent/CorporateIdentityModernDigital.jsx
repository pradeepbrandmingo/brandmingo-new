import React, { useState } from "react";

const serviceImages = {
  lead: "https://i.ibb.co/dwVGRppT/Chat-GPT-Image-Jul-21-2026-11-19-37-AM.png",
  ecommerce:
    "https://i.ibb.co/dwVGRppT/Chat-GPT-Image-Jul-21-2026-11-19-37-AM.png",
  google:
    "https://i.ibb.co/dwVGRppT/Chat-GPT-Image-Jul-21-2026-11-19-37-AM.png",
  meta: "https://i.ibb.co/dwVGRppT/Chat-GPT-Image-Jul-21-2026-11-19-37-AM.png",
  retargeting:
    "https://i.ibb.co/dwVGRppT/Chat-GPT-Image-Jul-21-2026-11-19-37-AM.png",
  funnel:
    "https://i.ibb.co/dwVGRppT/Chat-GPT-Image-Jul-21-2026-11-19-37-AM.png",
  analytics:
    "https://i.ibb.co/dwVGRppT/Chat-GPT-Image-Jul-21-2026-1 1-19-37-AM.png",
  scaling:
    "https://i.ibb.co/dwVGRppT/Chat-GPT-Image-Jul-21-2026-11-19-37-AM.png",
};

const servicesData = [
  {
    id: "lead",
    title: "Brand Strategy & Identity",
    desc: "Build a strong corporate identity that reflects your company's vision, values, and brand personality while creating a consistent visual presence across every touchpoint.",
  },
  {
    id: "ecommerce",
    title: "Logo & Visual Identity",
    desc: "Design professional logos, color palettes, typography, and visual elements that create a memorable and recognizable corporate identity.",
  },
  {
    id: "google",
    title: "Business Stationery Design",
    desc: "Create premium business cards, letterheads, envelopes, ID cards, and other stationery that reinforce your professional brand image.",
  },
  {
    id: "meta",
    title: "Brand Guidelines",
    desc: "Develop comprehensive brand guidelines that define logo usage, typography, colors, imagery, and visual standards for consistent branding.",
  },
  {
    id: "retargeting",
    title: "Digital Brand Assets",
    desc: "Design social media templates, email signatures, presentation decks, website graphics, and other digital assets that strengthen your brand identity.",
  },
  {
    id: "funnel",
    title: "Marketing Collateral Design",
    desc: "Create brochures, company profiles, flyers, catalogs, banners, and promotional materials that communicate your brand professionally.",
  },
  {
    id: "analytics",
    title: "Corporate Branding Applications",
    desc: "Extend your corporate identity across office branding, signage, packaging, uniforms, exhibitions, and promotional materials.",
  },
  {
    id: "scaling",
    title: "Brand Management & Support",
    desc: "Maintain a consistent corporate identity with ongoing design support, brand updates, creative enhancements, and identity management.",
  },
];

const CorporateIdentityModernDigital = () => {
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
          Google Ads Services for Modern Digital Businesses
          {/* <br /> Modern Digital Businesses */}
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

export default CorporateIdentityModernDigital;
