import React, { useState } from "react";

const serviceImages = {
  lead: "https://i.ibb.co/My6TFJ4b/Chat-GPT-Image-Jul-20-2026-03-03-34-PM.png",
  ecommerce:
    "https://i.ibb.co/My6TFJ4b/Chat-GPT-Image-Jul-20-2026-03-03-34-PM.png",
  google:
    "https://i.ibb.co/My6TFJ4b/Chat-GPT-Image-Jul-20-2026-03-03-34-PM.png",
  meta: "https://i.ibb.co/My6TFJ4b/Chat-GPT-Image-Jul-20-2026-03-03-34-PM.png",
  retargeting:
    "https://i.ibb.co/My6TFJ4b/Chat-GPT-Image-Jul-20-2026-03-03-34-PM.png",
  funnel:
    "https://i.ibb.co/My6TFJ4b/Chat-GPT-Image-Jul-20-2026-03-03-34-PM.png",
  analytics:
    "https://i.ibb.co/My6TFJ4b/Chat-GPT-Image-Jul-20-2026-03-03-34-PM.png",
  scaling:
    "https://i.ibb.co/My6TFJ4b/Chat-GPT-Image-Jul-20-2026-03-03-34-PM.png",
};

const servicesData = [
  {
    id: "lead",
    title: "UI/UX Design",
    desc: "We design visually stunning, intuitive, and user-friendly mobile app interfaces that enhance user engagement and deliver exceptional experiences across Android and iOS platforms.",
  },
  {
    id: "ecommerce",
    title: "Wireframing & User Flow",
    desc: "We create detailed wireframes and user journeys that ensure smooth navigation, logical screen flow, and an effortless user experience before design begins.",
  },
  {
    id: "google",
    title: "Interactive Prototyping",
    desc: "Validate your app idea with interactive prototypes that simulate real user interactions, helping you visualize the complete experience before development.",
  },
  {
    id: "meta",
    title: "Responsive Mobile Design",
    desc: "Our mobile app designs are fully responsive and optimized for Android, iOS, tablets, and multiple screen sizes to ensure a seamless experience everywhere.",
  },
  {
    id: "retargeting",
    title: "Design System Development",
    desc: "We build scalable design systems with reusable UI components, typography, icons, and color styles that keep your mobile application visually consistent.",
  },
  {
    id: "funnel",
    title: "Usability Testing",
    desc: "We conduct usability testing and user experience evaluations to identify pain points and refine every interaction before your app goes live.",
  },
  {
    id: "analytics",
    title: "Micro Interactions & Animations",
    desc: "Create engaging mobile experiences with smooth transitions, meaningful animations, and interactive elements that delight users and improve usability.",
  },
  {
    id: "content",
    title: "Design Optimization & Support",
    desc: "We continuously improve your app's UI/UX with design updates, user feedback, and optimization to keep your application modern, intuitive, and competitive.",
  },
];

const MobileAppModernDigital = () => {
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
          Mobile App Design Services for
          <br /> Modern Digital Products
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

export default MobileAppModernDigital;
