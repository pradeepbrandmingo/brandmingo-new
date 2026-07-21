import React, { useState } from "react";

const servicesData = [
  {
    id: "Lead Generation Campaigns",
    title: "Custom Website Design",
    desc: "We create custom websites that reflect your brand identity and deliver an engaging user experience.",
    points: [
      "Unique layouts tailored to your business",
      "Modern and visually appealing designs",
      "User-focused interface for better engagement",
      "Scalable design for future growth",
    ],
  },
  {
    id: "legacy",
    title: "Responsive Web Design",
    desc: "Build fully responsive websites that provide a seamless experience across all devices and screen sizes.",
    points: [
      "Mobile, tablet, and desktop optimized",
      "Consistent user experience",
      "Responsive layouts for every screen",
      "Cross-browser compatibility",
    ],
  },
  {
    id: "pwa",
    title: "Landing Page Design",
    desc: "Design high-converting landing pages that capture attention and drive more leads and conversions.",
    points: [
      "Conversion-focused page layouts",
      "Clear call-to-action sections",
      "Fast-loading landing pages",
      "Optimized for marketing campaigns",
    ],
  },
  {
    id: "api",
    title: "UI/UX Design",
    desc: "Create intuitive and engaging user interfaces that improve usability and customer satisfaction.",
    points: [
      "Modern UI with clean layouts",
      "Improved user navigation",
      "Interactive design elements",
      "Better customer experience",
    ],
  },
  {
    id: "ecommerce",
    title: "eCommerce Web Design",
    desc: "Design attractive online stores that provide seamless shopping experiences and boost online sales.",
    points: [
      "Product-focused layouts",
      "Easy shopping experience",
      "Optimized checkout pages",
      "Designed to increase conversions",
    ],
  },
  {
    id: "spa",
    title: "Website Redesign",
    desc: "Transform outdated websites into modern, fast, and conversion-focused digital experiences.",
    points: [
      "Modern visual improvements",
      "Enhanced user experience",
      "Better website structure",
      "Improved performance and branding",
    ],
  },
  {
    id: "migration",
    title: "SEO-Friendly Design",
    desc: "Build websites with clean structure and SEO best practices to improve search visibility.",
    points: [
      "SEO-friendly page structure",
      "Optimized headings and metadata",
      "Fast-loading pages",
      "Better search engine indexing",
    ],
  },
  {
    id: "payment",
    title: "Website Maintenance",
    desc: "Keep your website secure, updated, and performing at its best with ongoing maintenance.",
    points: [
      "Regular website updates",
      "Performance monitoring",
      "Bug fixes and security checks",
      "Continuous technical support",
    ],
  },
];

const CustomWebDevExpertiseDetails = () => {
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
            Our Custom Web Design Expertise
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

export default CustomWebDevExpertiseDetails;
