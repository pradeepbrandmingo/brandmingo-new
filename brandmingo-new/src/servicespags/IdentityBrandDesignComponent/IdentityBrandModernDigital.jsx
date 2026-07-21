import React, { useState } from "react";

const serviceImages = {
  lead: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=520&q=80&auto=format&fit=crop",
  ecommerce:
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=520&q=80&auto=format&fit=crop",
  google:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=520&q=80&auto=format&fit=crop",
  meta: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=520&q=80&auto=format&fit=crop",
  retargeting:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=520&q=80&auto=format&fit=crop",
  funnel:
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=520&q=80&auto=format&fit=crop",
  analytics:
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=520&q=80&auto=format&fit=crop",
  scaling:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=520&q=80&auto=format&fit=crop",
};

const servicesData = [
  {
    id: "lead",
    title: "Brand Strategy & Positioning",
    desc: "Build a strong brand strategy that defines your vision, values, target audience, and market positioning to create a memorable business identity.",
  },
  {
    id: "ecommerce",
    title: "Logo & Visual Identity",
    desc: "Design memorable logos, typography, color palettes, icons, and visual elements that make your brand instantly recognizable.",
  },
  {
    id: "google",
    title: "Brand Style Guidelines",
    desc: "Create comprehensive brand guidelines that ensure consistent branding across digital, print, and marketing materials.",
  },
  {
    id: "meta",
    title: "Business Stationery Design",
    desc: "Design professional business cards, letterheads, envelopes, email signatures, and corporate stationery that reinforce your brand.",
  },
  {
    id: "retargeting",
    title: "Digital Brand Assets",
    desc: "Develop social media templates, presentations, website graphics, and digital branding materials for a consistent online presence.",
  },
  {
    id: "funnel",
    title: "Marketing Collateral Design",
    desc: "Create brochures, flyers, company profiles, catalogs, banners, and promotional materials that strengthen your brand identity.",
  },
  {
    id: "analytics",
    title: "Corporate Branding Applications",
    desc: "Extend your brand identity across office branding, signage, packaging, exhibition materials, and promotional merchandise.",
  },
  {
    id: "scaling",
    title: "Brand Management & Support",
    desc: "Maintain a consistent and professional brand identity with ongoing design support, updates, and branding consultation.",
  },
];

const IdentityBrandModernDigital = () => {
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
        {/* Heading */}
        <h3 className="ret-heading text-center mb-5">
          Brand Identity Design Services for Modern Businesses
        </h3>

        {/* Desktop */}
        <div className="ret-grid ret-desktop-only">
          {/* Left */}
          <div className="ret-tabs">
            {servicesData.map((service) => (
              <button
                key={service.id}
                className={`ret-tab-btn ${
                  activeTab.id === service.id ? "active" : ""
                }`}
                onClick={() => handleTabClick(service)}
              >
                <span className="ret-tab-label">{service.title}</span>

                <span className="ret-arrow">
                  <i className="fas fa-arrow-right" />
                </span>
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="ret-content" key={animKey}>
            <h4 className="ret-content-title">{activeTab.title}</h4>

            <div className="ret-content-body">
              <p className="ret-content-desc">{activeTab.desc}</p>

              <div className="ret-image-wrap">
                <div className="ret-image-badge">
                  <i className="fas fa-palette" />
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

        {/* Mobile */}
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

export default IdentityBrandModernDigital;
