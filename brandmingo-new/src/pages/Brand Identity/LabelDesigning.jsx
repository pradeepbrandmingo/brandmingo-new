import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import d1 from "../../assets/images/resource/service-d1.jpg";
import d2 from "../../assets/images/resource/service-d2.jpg";
import RelatedServices from "../../components/RelatedServices/RelatedServices";
import PortfolioSlider from "../../components/PortfolioSlider/PortfolioSlider";
import ReactExpertiseDetails from "../../components/ReactExpertiseDetails/ReactExpertiseDetails";
import ReactDetailsHero from "../../servicespags/ReactComponents/ReactDetailsHero";
import LabelDesigningHero from "../../servicespags/LabelDesigningComponent/LabelDesigningHero";
import LabelDesigningExpertiseDetails from "../../servicespags/LabelDesigningComponent/LabelDesigningExpertiseDetails";
import LabelDesigningProcessSection from "../../servicespags/LabelDesigningComponent/LabelDesigningProcessSection";
import LabelDesigningModernDigital from "../../servicespags/LabelDesigningComponent/LabelDesigningModernDigital";
import LabelDesigningCtaBanner from "../../servicespags/LabelDesigningComponent/LabelDesigningCtaBanner";
import LabelDesigningPricingPlans from "../../servicespags/LabelDesigningComponent/LabelDesigningPricingPlans";
import WhyChooseLabelDesigning from "../../servicespags/LabelDesigningComponent/WhyChooseLabelDesigning";
import LabelDesigningEngagementModels from "../../servicespags/LabelDesigningComponent/LabelDesigningEngagementModels";
import LabelDesigningPricingSection from "../../servicespags/LabelDesigningComponent/LabelDesigningPricingSection";

const THEME = "#ff6b1e";

const LabelDesigning = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const swiper = new Swiper(".project-image-slider", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoHeight: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      },
    });

    return () => {
      if (swiper && swiper.destroy) {
        swiper.destroy(true, true);
      }
    };
  }, []);

  return (
    <div className="page-wrapper">
      <style>{`
  .wd-outer {
    display: flex;
    align-items: flex-start;   /* ZARURI hai */
  }

  .wd-sidebar-col {
    width: 320px;
    flex-shrink: 0;
    position: sticky;
    top: 100px;
    align-self: flex-start;   /* ZARURI hai */
  }

  .wd-content-col {
    flex: 1;
    min-width: 0;
    padding-left: 30px;
  }

  @media (max-width: 991px) {
    .wd-outer { flex-direction: column; }
    .wd-sidebar-col { width: 100%; position: static; margin-bottom: 40px; }
    .wd-content-col { padding-left: 0; }
  }
`}</style>

      {/* HERO */}
      <LabelDesigningHero />

      {/* MAIN */}
      <section
        className="services-details pt-120 pb-120"
        style={{ marginTop: "40px", marginBottom: "120px" }}
      >
        <div className="service-details-page">
          <div className="container">
            <div className="wd-outer">
              <div className="wd-content-col">
                <div className="services-details__content">
                  {/* S1 */}
                  <div className="react-build-section mt-5">
                    <div className="row align-items-center">
                      {/* Left Side: Content */}
                      <div className="col-lg-6 col-md-12">
                        <div className="react-build-content">
                          <h3 className="mt-0 mb-3 theme-h3">
                            Professional Label Designs That Stand Out
                          </h3>
                          <p className="text mb-3">
                            We design creative, professional product labels that
                            strengthen your brand and attract customers.
                          </p>

                          <p className="text mb-4">
                            From food and cosmetics to retail packaging, our
                            print-ready label designs help your products make a
                            lasting impression.
                          </p>

                          {/* Stats Row */}
                          <div className="react-stats-row">
                            <div className="react-stat-item">
                              <span className="react-stat-num">500+</span>
                              <span className="react-stat-label">
                                Labels Designed
                              </span>
                            </div>
                            <div className="react-stat-divider" />
                            <div className="react-stat-item">
                              <span className="react-stat-num">95%</span>
                              <span className="react-stat-label">
                                Client Satisfaction
                              </span>
                            </div>
                            <div className="react-stat-divider" />
                            <div className="react-stat-item">
                              <span className="react-stat-num">100%</span>
                              <span className="react-stat-label">
                                Print-Ready Files
                              </span>
                            </div>
                          </div>

                          {/* Feature Tag */}
                          <div className="react-feature-tag">
                            <i className="fas fa-bullhorn spin-icon"></i>
                            <span>Start Your Label Design</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Creative Image Box */}
                      <div className="col-lg-6 col-md-12">
                        <div className="react-build-image-wrapper">
                          <div className="image-glass-card">
                            <img
                              src="https://i.ibb.co/wFbGVttx/Chat-GPT-Image-Jul-20-2026-06-55-05-PM.png"
                              alt="Google Ads"
                              className="main-react-img"
                            />
                            <div className="floating-badge top-right">
                              <i
                                className="fas fa-bolt"
                                style={{ marginRight: "5px" }}
                              />
                              Fast
                            </div>
                            <div className="floating-badge bottom-left">
                              <i
                                className="fas fa-expand-arrows-alt"
                                style={{ marginRight: "5px" }}
                              />
                              Scalable
                            </div>
                          </div>

                          <div className="corner-accent top-left-accent" />
                          <div className="corner-accent bottom-right-accent" />
                          <div className="bg-glow-circle" />
                        </div>
                      </div>
                    </div>

                    <style>{`
    .react-build-section {
      position: relative;
      padding: 40px 0;
    }

    .react-build-content {
      padding-right: 30px;
    }

    /* ── Stats Row ── */
    .react-stats-row {
      display: flex;
      align-items: center;
      gap: 0;
      margin-bottom: 28px;
      background: linear-gradient(
        125deg,
        #e85c0d 0%,
        #ff6b1e 40%,
        #ff9a5c 75%,
        #ff6b1e 100%
      );
      border-radius: 16px;
      overflow: hidden;
    }

    .react-stat-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
      text-align: center;
      padding: 20px 24px;
    }

    .react-stat-num {
      font-family: var(--heading-font-family);
      font-size: 26px;
      font-weight: 700;
      color: #ffffff;
      line-height: 1;
    }

    .react-stat-label {
      font-family: var(--body-font-family);
      font-size: 12px;
      color: rgba(255,255,255,0.75);
      letter-spacing: 0.3px;
    }

    .react-stat-divider {
      width: 1px;
      height: 36px;
      background: rgba(255,255,255,0.25);
      flex-shrink: 0;
    }

    /* ── Feature Tag ── */
    .react-feature-tag {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(var(--theme-color1-rgb), 0.1);
      border: 1px solid rgba(var(--theme-color1-rgb), 0.2);
      padding: 8px 16px;
      border-radius: 50px;
      font-family: var(--heading-font-family);
      font-size: 13px;
      font-weight: 600;
      color: var(--theme-color1);
    }

    .spin-icon {
      animation: fa-spin 5s linear infinite;
    }

    /* ── Image Wrapper ── */
    .react-build-image-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }

    .corner-accent {
      position: absolute;
      width: 60px;
      height: 60px;
      z-index: 0;
    }

    .top-left-accent {
      top: 10px;
      left: 10px;
      border-top: 2px solid var(--theme-color1);
      border-left: 2px solid var(--theme-color1);
      border-radius: 4px 0 0 0;
      opacity: 0.5;
    }

    .bottom-right-accent {
      bottom: 10px;
      right: 10px;
      border-bottom: 2px solid var(--theme-color1);
      border-right: 2px solid var(--theme-color1);
      border-radius: 0 0 4px 0;
      opacity: 0.5;
    }

    /* ── Glass Card ── */
    .image-glass-card {
      position: relative;
      z-index: 2;
      border-radius: 24px;
      padding: 15px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255,255,255,0.08);
      backdrop-filter: blur(10px);
      transition: transform 0.5s ease;
    }

    .main-react-img {
      width: 100%;
      height: auto;
      border-radius: 18px;
      display: block;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .image-glass-card:hover {
      transform: translateY(-10px) rotate(1deg);
    }

    /* ── Floating Badges ── */
    .floating-badge {
      position: absolute;
      background: var(--theme-color1);
      color: #fff;
      padding: 6px 18px;
      border-radius: 50px;
      font-family: var(--heading-font-family);
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 10px 20px rgba(var(--theme-color1-rgb), 0.3);
      z-index: 3;
      display: flex;
      align-items: center;
    }

    .top-right { top: -10px; right: -10px; }
    .bottom-left { bottom: 20px; left: -20px; }

    /* ── Floating Code Card ── */
    .floating-code-card {
      position: absolute;
      bottom: -18px;
      right: -18px;
      background: #1a1a2e;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 12px 16px;
      z-index: 4;
      min-width: 160px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.4);
    }

    .floating-code-card p {
      margin: 0;
      font-family: monospace;
      font-size: 11px;
      line-height: 1.7;
    }

    .code-dot {
      display: inline-block;
      width: 8px; height: 8px;
      border-radius: 50%;
      margin-right: 4px;
      margin-bottom: 8px;
    }
    .red    { background: #ff5f57; }
    .yellow { background: #febc2e; }
    .green  { background: #28c840; }

    .code-blue   { color: #79b8ff; }
    .code-orange { color: var(--theme-color1, #ff6b1e); }
    .code-white  { color: rgba(255,255,255,0.8); }
    .code-line   { margin: 0 !important; }

    /* ── Back Glow ── */
    .bg-glow-circle {
      position: absolute;
      width: 300px;
      height: 300px;
      background: var(--theme-color1);
      filter: blur(100px);
      opacity: 0.12;
      z-index: 1;
    }

    @media (max-width: 991px) {
      .react-build-content { padding-right: 0; text-align: center; margin-bottom: 50px; }
      .react-build-image-wrapper { max-width: 500px; margin: 0 auto; }
      .react-feature-tag { justify-content: center; }
      .react-stats-row { justify-content: center; }
      .floating-code-card { display: none; }
    }
                        `}</style>
                  </div>

                  {/* S2 */}
                  <h3 style={{ marginTop: "60px" }} className="mb-2 ">
                    What is Label Designing?
                  </h3>
                  <p className="text mb-3">
                    Label designing is the process of creating visually
                    appealing and informative product labels that reflect your
                    brand identity while attracting customers and communicating
                    essential product information.
                  </p>
                  <p className="text mb-2">
                    A professionally designed label not only enhances shelf
                    appeal but also builds trust, strengthens brand recognition,
                    and helps your product stand out in a competitive market.
                    Our label designs are creative, print-ready, and tailored to
                    your industry.
                  </p>
                  {/* <div className="row g-2 mb-3"> */}
                  <div className="row g-4 mb-4">
                    {[
                      {
                        icon: "fas fa-tags",
                        label: "Premium Branding",
                      },
                      {
                        icon: "fas fa-box-open",
                        label: "Attractive Packaging",
                      },
                      {
                        icon: "fas fa-print",
                        label: "Print-Ready Design",
                      },
                      {
                        icon: "fas fa-palette",
                        label: "Brand Consistency",
                      },
                    ].map((item, i) => (
                      <div className="col-12 col-sm-6" key={i}>
                        <div className="benefit-card">
                          <div className="benefit-icon-wrap">
                            <i className={item.icon}></i>
                          </div>
                          <span className="benefit-label">{item.label}</span>
                        </div>
                      </div>
                    ))}

                    <style>{`
                 .benefit-card {
                   display: flex;
                  align-items: center;
                  gap: 16px;
                  padding: 16px 20px;
      background: var(--theme-color-white); /* #ffffff */
      border-radius: 14px;
      /* Border matches your style.css border settings but for light bg */
      border: 1.5px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      cursor: default;
    }

    .benefit-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
      border-color: var(--theme-color1); /* #ff6b1e */
    }

    .benefit-icon-wrap {
      width: 46px;
      height: 46px;
      min-width: 46px;
      border-radius: 12px;
      /* Using your theme color and gradient-1 logic */
      background: linear-gradient(135deg, var(--theme-color1), #ff8d4d);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(255, 107, 30, 0.2);
      transition: all 0.3s ease;
    }

    .benefit-card:hover .benefit-icon-wrap {
      transform: rotate(-10deg) scale(1.1);
    }

    .benefit-icon-wrap i {
      font-size: 18px;
      color: #ffffff; /* Always white on orange bg */
    }

    .benefit-label {
      font-family: var(--heading-font-family); /* Beatrice Trial */
      font-size: 16px; /* body-font-size */
      font-weight: 600;
      color: #151515; /* Using your --bg-color as text color for white bg */
      letter-spacing: -0.2px;
    }

    /* Footer Text Styling */
    .benefit-footer-text {
      font-family: var(--body-font-family);
      font-size: var(--body-font-size);
      line-height: var(--body-line-height);
      font-style: italic;
      opacity: 0.85;
      color: var(--text-color); /* Kept as white for dark outer section */
      border-top: 1px solid var(--border-color2-rgba);
      padding-top: 18px;
      margin-top: 8px;
    }
  `}</style>
                  </div>

                  <p className="benefit-footer-text mb-4">
                    So in simple terms — a professionally designed label makes
                    your products more attractive, strengthens your brand
                    identity, and increases customer trust.
                  </p>

                  {/* SLIDER */}
                  <div
                    className="swiper project-image-slider pb-0"
                    style={{ width: "100%" }}
                  >
                    <div className="swiper-wrapper">
                      {[
                        {
                          img: d1,
                          cap: "",
                        },
                        {
                          img: d2,
                          cap: "",
                        },
                      ].map((s, i) => (
                        <div className="swiper-slide" key={i}>
                          <div
                            style={{
                              width: "100%",
                              height: "220px",
                              overflow: "hidden",
                              borderRadius: "6px",
                            }}
                          >
                            <img
                              src={s.img}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                          </div>
                          <p className="text mt-2">{s.cap}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* S3 — CTA image Section */}
                  <section className="discuss-wrap mt-4">
                    <div className="auto-container">
                      <div className="row">
                        <div className="col-lg-9 col-12">
                          <div className="discuss-content">
                            {/* h3 = style.css se auto apply hoga — koi custom override nahi */}
                            <h3>
                              Ready to Elevate Your Product with Professional
                              Label Design?
                            </h3>

                            <a href="/contact" className="discuss-cta">
                              Start Your Label Design{" "}
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* S4 */}
                  {/* --- WHAT YOU GET / DELIVERABLES SECTION --- */}
                  <div className="mt-0" style={{ paddingTop: "70px" }}>
                    <h3 className="mb-2">
                      What You Get with Label Designing Services
                    </h3>
                    <p className="text mb-4">
                      We create premium, print-ready label designs that
                      strengthen your brand, attract customers, and make your
                      products stand out on every shelf.
                    </p>

                    <div className="deliverables-outer-card">
                      <div className="deliverables-accent-glow deliverables-accent-glow--top"></div>
                      <div className="deliverables-accent-glow deliverables-accent-glow--bottom"></div>

                      <div className="deliverables-subtitle-row">
                        <span className="deliverables-subtitle-bar"></span>
                        <p className="deliverables-subtitle">
                          Our Deliverables
                        </p>
                      </div>

                      <div className="deliverables-grid">
                        {[
                          {
                            icon: (
                              // Strategy = idea / planning
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 18h6" />
                                <path d="M10 22h4" />
                                <path d="M12 2a7 7 0 0 0-4 12c1 1 2 2 2 4h4c0-2 1-3 2-4a7 7 0 0 0-4-12z" />
                              </svg>
                            ),
                            label: "Label Strategy & Research",
                            desc: "Understanding your product, audience, and brand goals.",
                          },

                          {
                            icon: (
                              // Research
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="6" />
                                <circle cx="12" cy="12" r="2" />
                              </svg>
                            ),
                            label: "Brand & Market Research",
                            desc: "Research-driven designs that connect with your customers.",
                          },

                          {
                            icon: (
                              // Creative
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                              >
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                              </svg>
                            ),
                            label: "Custom Label Design",
                            desc: "Creative, premium labels designed for your products.",
                          },

                          {
                            icon: (
                              // Tracking
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                              >
                                <line x1="3" y1="17" x2="9" y2="11" />
                                <line x1="9" y1="11" x2="13" y2="15" />
                                <line x1="13" y1="15" x2="21" y2="7" />
                              </svg>
                            ),
                            label: "Print-Ready Files",
                            desc: "High-resolution files ready for professional printing.",
                          },

                          {
                            icon: (
                              // Retargeting
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                              >
                                <polyline points="23 4 23 10 17 10" />
                                <polyline points="1 20 1 14 7 14" />
                                <path d="M3.5 9a9 9 0 0 1 14-3L23 10" />
                                <path d="M20.5 15a9 9 0 0 1-14 3L1 14" />
                              </svg>
                            ),
                            label: "Multiple Label Variations",
                            desc: "Different sizes and layouts for every product variant.",
                          },

                          {
                            icon: (
                              // Optimization
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                              >
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0A1.7 1.7 0 0 0 10 3.2V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1z" />
                              </svg>
                            ),
                            label: "Quality & Brand Consistency",
                            desc: "Every label is optimized for premium quality and consistent branding.",
                          },
                        ].map((item, i) => (
                          <div className="deliverable-white-card" key={i}>
                            <div className="deliverable-icon-box">
                              {item.icon}
                            </div>
                            <div className="deliverable-text-group">
                              <span className="deliverable-label">
                                {item.label}
                              </span>
                              <span className="deliverable-desc">
                                {item.desc}
                              </span>
                            </div>
                            <div className="deliverable-arrow">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--theme-color1)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12,5 19,12 12,19" />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="react-expertise-section">
                    <LabelDesigningExpertiseDetails />
                  </div>

                  {/* S6 */}
                  <div className="process-section-wrapper">
                    <LabelDesigningProcessSection />
                  </div>

                  <div className="modern-cta-section">
                    <LabelDesigningModernDigital />
                    <LabelDesigningCtaBanner />
                  </div>

                  {/* PricingPlans */}
                  {/* <div className="pricing-section">
                    <LabelDesigningPricingPlans />
                  </div> */}

                  <div className="why-brandmingo-section">
                    <WhyChooseLabelDesigning />
                  </div>

                  <div className="engagement-section">
                    {/* <EngagementModels /> */}
                    <LabelDesigningEngagementModels />
                  </div>

                  <div className="pricing-final-section">
                    <LabelDesigningPricingSection />
                  </div>

                  {/* FAQ */}
                  <div className="faq-content mt-2">
                    <h3 className="mb-3">Frequently Asked Question</h3>
                    <ul className="accordion-box mt-40">
                      {[
                        {
                          q: "What is label designing?",
                          a: "Label designing is the process of creating visually appealing and informative labels that represent your brand, communicate product details, and attract customers.",
                        },
                        {
                          q: "Why is a professional label design important?",
                          a: "A professionally designed label improves shelf appeal, builds customer trust, strengthens brand identity, and helps your product stand out in a competitive market.",
                        },
                        {
                          q: "What types of labels do you design?",
                          a: "We design labels for food & beverages, cosmetics, pharmaceuticals, health products, retail items, bottles, jars, boxes, and other product packaging.",
                        },
                        {
                          q: "How much does label designing cost?",
                          a: "The cost depends on the label size, design complexity, packaging requirements, and number of design variations. We provide transparent pricing with no hidden charges.",
                        },
                        {
                          q: "What files will I receive after the design is completed?",
                          a: "You'll receive high-quality print-ready files in AI, EPS, PDF, SVG, PNG, and JPG formats, suitable for commercial printing and digital use.",
                        },
                      ].map((item, index) => (
                        <li
                          key={index}
                          className={`accordion block ${activeIndex === index ? "active-block" : ""}`}
                        >
                          <div
                            className="acc-btn"
                            onClick={() =>
                              setActiveIndex(
                                activeIndex === index ? null : index,
                              )
                            }
                          >
                            {item.q}
                            <div
                              className={`icon fa ${activeIndex === index ? "fa-minus" : "fa-plus"}`}
                            ></div>
                          </div>
                          <div
                            className={`acc-content ${activeIndex === index ? "current" : ""}`}
                          >
                            <div className="text">{item.a}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="related-portfolio-section">
          <RelatedServices />
        </div>

        <div className="portfolio-slider-section">
          <PortfolioSlider />
        </div>
      </section>
    </div>
  );
};

export default LabelDesigning;
