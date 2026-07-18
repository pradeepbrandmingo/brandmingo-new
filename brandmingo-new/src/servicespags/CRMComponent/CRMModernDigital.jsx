import React, { useState } from "react";

const serviceImages = {
  custom:
    "https://i.ibb.co/rK5XDVPW/Untitled-design-13.jpg",
  lead:
    "https://i.ibb.co/rK5XDVPW/Untitled-design-13.jpg",
  customer:
    "https://i.ibb.co/rK5XDVPW/Untitled-design-13.jpg",
  automation:
    "https://i.ibb.co/rK5XDVPW/Untitled-design-13.jpg",
  integration:
    "https://i.ibb.co/rK5XDVPW/Untitled-design-13.jpg",
  analytics:
    "https://i.ibb.co/rK5XDVPW/Untitled-design-13.jpg",
  security:
    "https://i.ibb.co/rK5XDVPW/Untitled-design-13.jpg",
  support:
    "https://i.ibb.co/rK5XDVPW/Untitled-design-13.jpg",
};

const servicesData = [
  {
    id: "custom",
    title: "Custom CRM Development",
    desc: "We build secure, scalable, and fully customized CRM solutions tailored to your business workflows and customer management needs.",
  },
  {
    id: "lead",
    title: "Lead Management",
    desc: "Capture, organize, and track leads efficiently with a centralized CRM system designed to improve conversions.",
  },
  {
    id: "customer",
    title: "Customer Management",
    desc: "Manage customer profiles, interactions, and communication history from a single, easy-to-use dashboard.",
  },
  {
    id: "automation",
    title: "Workflow Automation",
    desc: "Automate repetitive business tasks, approvals, follow-ups, and notifications to increase productivity.",
  },
  {
    id: "integration",
    title: "CRM Integration",
    desc: "Integrate your CRM with payment gateways, email platforms, ERP systems, and third-party APIs.",
  },
  {
    id: "analytics",
    title: "Reports & Analytics",
    desc: "Monitor business performance with real-time dashboards, sales reports, and customer insights.",
  },
  {
    id: "security",
    title: "CRM Security",
    desc: "Protect your business data with role-based access, secure authentication, encryption, and regular backups.",
  },
  {
    id: "support",
    title: "Maintenance & Support",
    desc: "Keep your CRM secure, optimized, and up to date with ongoing maintenance and dedicated technical support.",
  },
];

const CRMModernDigital = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]);
  const [animKey, setAnimKey] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(servicesData[0].id);

  const handleTabClick = (service) => {
    setActiveTab(service);
    setAnimKey((prev) => prev + 1);
  };

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="ret-section">
      <div className="auto-container">
        <h3 className="ret-heading text-center mb-5">
          CRM Development Services
        </h3>

        {/* Desktop */}
        <div className="ret-grid ret-desktop-only">
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

          <div className="ret-content" key={animKey}>
            <h4 className="ret-content-title">{activeTab.title}</h4>

            <div className="ret-content-body">
              <p className="ret-content-desc">{activeTab.desc}</p>

              <div className="ret-image-wrap">
                <div className="ret-image-badge">
                  <i className="fas fa-users-cog" />
                </div>

                <div className="ret-image-inner">
                  <img
                    src={
                      serviceImages[activeTab.id] ||
                      "https://placehold.co/700x500?text=CRM+Development"
                    }
                    alt={activeTab.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/700x500?text=CRM+Development";
                    }}
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
                    <i
                      className={`fas fa-chevron-${
                        isOpen ? "up" : "down"
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="ret-mob-body">
                    <p className="ret-mob-desc">{service.desc}</p>

                    <div className="ret-mob-img-wrap">
                      <img
                        src={
                          serviceImages[service.id] ||
                          "https://placehold.co/700x500?text=CRM+Development"
                        }
                        alt={service.title}
                        loading="lazy"
                        onError={(e) => {
                          e.target.src =
                            "https://placehold.co/700x500?text=CRM+Development";
                        }}
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

export default CRMModernDigital;