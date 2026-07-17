import React, { useState } from "react";

const servicesData = [
  {
    id: "custom",
    title: "Custom PHP Development",
    desc: "We build secure and scalable PHP web applications tailored to your business needs.",
    points: [
      "Custom PHP solutions",
      "Scalable application architecture",
      "Clean and secure coding",
      "Business-focused development",
    ],
  },
  {
    id: "theme",
    title: "PHP Web Development",
    desc: "We develop fast, responsive, and feature-rich PHP websites for modern businesses.",
    points: [
      "Responsive web development",
      "Dynamic website solutions",
      "Modern UI integration",
      "Cross-browser compatibility",
    ],
  },
  {
    id: "woocommerce",
    title: "PHP CMS Development",
    desc: "We create powerful CMS solutions with PHP for easy content management and growth.",
    points: [
      "Custom CMS development",
      "Admin dashboard setup",
      "Content management tools",
      "Scalable CMS architecture",
    ],
  },
  {
    id: "plugin",
    title: "API Integration",
    desc: "We integrate secure APIs and third-party services to extend your PHP application.",
    points: [
      "REST API integration",
      "Payment gateway setup",
      "Third-party services",
      "Secure data exchange",
    ],
  },
  {
    id: "optimization",
    title: "Performance Optimization",
    desc: "We optimize PHP applications for faster performance and better user experience.",
    points: [
      "Code optimization",
      "Database optimization",
      "Faster page loading",
      "Performance improvements",
    ],
  },
  {
    id: "seo",
    title: "SEO-Friendly Development",
    desc: "We build SEO-ready PHP websites with clean structure and optimized performance.",
    points: [
      "SEO-friendly URLs",
      "Optimized page structure",
      "Schema-ready coding",
      "Search engine optimized",
    ],
  },
  {
    id: "migration",
    title: "PHP Migration",
    desc: "We migrate legacy websites and applications to modern PHP without downtime.",
    points: [
      "Legacy system migration",
      "Secure data transfer",
      "Minimal downtime",
      "Post-migration optimization",
    ],
  },
  {
    id: "support",
    title: "Maintenance & Support",
    desc: "We provide reliable PHP maintenance to keep your applications secure and updated.",
    points: [
      "Regular maintenance",
      "Bug fixes & updates",
      "Security monitoring",
      "Technical support",
    ],
  },
];

const PHPExpertiseDetails = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]);
  const [openAccordion, setOpenAccordion] = useState(servicesData[0].id);

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="react-expertise-section">
        <div className="auto-container">
          <h3 className="mb-5 text-center section-main-h3">
            Our PHP Development Expertise
          </h3>

          {/* ── DESKTOP: same as before ── */}
          <div className="react-expertise-grid re-desktop-only">
            <div className="react-expertise-tabs">
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  className={`react-expertise-tab-btn ${activeTab.id === service.id ? "active" : ""}`}
                  onClick={() => setActiveTab(service)}
                >
                  <h3 className="tab-btn-title">{service.title}</h3>
                  <span className="arrow-icon">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </button>
              ))}
            </div>

            <div className="react-expertise-content" key={activeTab.id}>
              <h3 className="react-expertise-content-title">
                {activeTab.title}
              </h3>
              <p className="react-expertise-content-desc">{activeTab.desc}</p>
              <ul className="react-expertise-content-list">
                {activeTab.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── MOBILE: accordion ── */}
          <div className="re-accordion re-mobile-only">
            {servicesData.map((service) => {
              const isOpen = openAccordion === service.id;
              return (
                <div
                  key={service.id}
                  className={`re-accordion-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="re-accordion-header"
                    onClick={() => toggleAccordion(service.id)}
                  >
                    <span className="re-acc-title">{service.title}</span>
                    <span className="re-acc-icon">
                      <i
                        className={`fas fa-chevron-${isOpen ? "up" : "down"}`}
                      ></i>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="re-accordion-body">
                      <p className="re-acc-desc">{service.desc}</p>
                      <ul className="re-acc-list">
                        {service.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          /* ─────────────────────────────────────────
             REACT EXPERTISE — Desktop unchanged
             Mobile: accordion replaces grid
          ───────────────────────────────────────── */

          .react-expertise-section {
            background-color: var(--body-bg);
            padding: 100px 0;
          }

          /* visibility helpers */
          .re-desktop-only { display: grid; }
          .re-mobile-only  { display: none; }

          /* ── DESKTOP GRID (unchanged) ── */
          .react-expertise-grid {
            grid-template-columns: 1fr 1.2fr;
            gap: 30px;
            align-items: stretch;
          }

          .react-expertise-tabs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }

          .react-expertise-tab-btn {
            background-color: var(--bg-color);
            border: 1px solid var(--border-color2-rgba);
            border-radius: 12px;
            padding: 25px 20px;
            color: rgba(255, 255, 255, 0.5);
            text-align: left;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 1.3;
            height: 100%;
          }

          .tab-btn-title {
            font-family: var(--heading-font-family) !important;
            font-size: var(--body-font-size) !important;
            font-weight: 400 !important;
            color: inherit;
            margin: 0;
            max-width: 85%;
          }

          .react-expertise-tab-btn:hover {
            background-color: #1a1a1a;
            border-color: rgba(var(--theme-color1-rgb), 0.3);
            color: #fff;
          }

          .react-expertise-tab-btn.active {
            background-color: var(--bg-color);
            border: 1px solid var(--theme-color1);
            color: #fff;
            box-shadow: 0 8px 25px rgba(var(--theme-color1-rgb), 0.15);
          }

          .react-expertise-tab-btn.active .tab-btn-title {
            font-weight: 700 !important;
          }

          .react-expertise-tab-btn .arrow-icon {
            font-size: 14px;
            color: var(--theme-color1);
            opacity: 0.3;
            transition: 0.3s ease;
          }

          .react-expertise-tab-btn.active .arrow-icon {
            opacity: 1;
            transform: rotate(-45deg);
          }

          .react-expertise-content {
            background-color: var(--bg-color);
            border-radius: 20px;
            padding: 50px;
            border: 1px solid var(--border-color2-rgba);
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
          }

          .react-expertise-content-title {
            font-family: var(--heading-font-family);
            font-size: var(--h3-font-size);
            color: var(--headings-color);
            margin-bottom: 20px;
            font-weight: 600;
            border-left: 4px solid var(--theme-color1);
            padding-left: 20px;
          }

          .react-expertise-content-desc {
            color: var(--text-color);
            opacity: 0.7;
            font-size: var(--body-font-size);
            line-height: var(--body-line-height);
            margin-bottom: 30px;
            font-family: var(--body-font-family);
          }

          .react-expertise-content-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .react-expertise-content-list li {
            font-size: 15px;
            color: var(--text-color);
            opacity: 0.9;
            display: flex;
            align-items: start;
            gap: 12px;
            font-family: var(--body-font-family);
          }

          .react-expertise-content-list li::before {
            content: '✓';
            color: var(--theme-color1);
            font-weight: bold;
          }

          /* tablet: stack columns */
          @media (max-width: 1200px) {
            .react-expertise-grid { grid-template-columns: 1fr; }
          }

          /* ── MOBILE: swap to accordion ── */
          @media (max-width: 768px) {
            .react-expertise-section { padding: 60px 0; }

            .re-desktop-only { display: none !important; }
            .re-mobile-only  { display: flex; flex-direction: column; gap: 10px; }

            /* accordion item */
            .re-accordion-item {
              border: 1px solid var(--border-color2-rgba);
              border-radius: 12px;
              overflow: hidden;
              transition: border-color 0.3s ease;
            }
            .re-accordion-item.open {
              border-color: var(--theme-color1);
            }

            /* header */
            .re-accordion-header {
              width: 100%;
              background-color: var(--bg-color);
              border: none;
              padding: 18px 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 12px;
              cursor: pointer;
              text-align: left;
            }
            .re-accordion-item.open .re-accordion-header {
              border-bottom: 1px solid var(--border-color2-rgba);
            }

            .re-acc-title {
              font-family: var(--heading-font-family);
              font-size: 15px;
              font-weight: 600;
              color: #fff;
              line-height: 1.4;
            }

            .re-acc-icon {
              font-size: 13px;
              color: var(--theme-color1);
              flex-shrink: 0;
            }

            /* body */
            .re-accordion-body {
              background-color: var(--bg-color);
              padding: 20px 20px 24px;
            }

            .re-acc-desc {
              font-family: var(--body-font-family);
              font-size: 14px;
              color: var(--text-color);
              opacity: 0.75;
              line-height: var(--body-line-height);
              margin-bottom: 16px;
            }

            .re-acc-list {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .re-acc-list li {
              font-family: var(--body-font-family);
              font-size: 14px;
              color: var(--text-color);
              display: flex;
              align-items: flex-start;
              gap: 10px;
              line-height: 1.5;
            }

            .re-acc-list li::before {
              content: "✓";
              color: var(--theme-color1);
              font-weight: bold;
              flex-shrink: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default PHPExpertiseDetails;
