import React, { useState } from "react";
// import "./pricing-section.css";
import { openEnquiryPopup } from "../../utils/popup";

const pricingFactors = [
  { icon: "fas fa-pencil-ruler", label: "Website Type & Requirements" },
  { icon: "fas fa-object-group", label: "Design Complexity" },
  { icon: "fas fa-laptop-code", label: "Features & Functionality" },
  { icon: "fas fa-clock", label: "Project Timeline" },
  {
    icon: "fas fa-mobile-screen-button",
    label: "Responsive & SEO Requirements",
  },
];

const estimateSteps = [
  {
    num: "01",
    title: "Project Consultation",
    desc: "We discuss your business goals, target audience, and website requirements to understand your vision.",
  },
  {
    num: "02",
    title: "Requirement Analysis",
    desc: "Our team evaluates design complexity, required features, integrations, and project scope.",
  },
  {
    num: "03",
    title: "Planning & Proposal",
    desc: "We prepare a detailed project roadmap with timelines, technology recommendations, and cost estimation.",
  },
  {
    num: "04",
    title: "Transparent Quotation",
    desc: "Receive a clear, customized pricing proposal with no hidden costs and complete project transparency.",
  },
];

const CustomWebDevPricingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="prc-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="prc-header">
          <div className="prc-eyebrow">Transparent Pricing</div>

          <h3 className="prc-title">
            Custom Web Design Pricing & Cost Estimation
          </h3>

          <p className="prc-subtitle">
            Every website is unique. Our pricing is customized based on your
            business requirements, design complexity, required features, and
            project scope—ensuring complete transparency with no hidden charges.
          </p>
        </div>

        {/* ════ BLOCK 1 ════ */}
        <div className="prc-block">
          <div className="prc-block-label">Pricing Depends On</div>

          <div className="prc-factors">
            {pricingFactors.map((f, i) => (
              <div className="prc-factor-card" key={i}>
                <div className="prc-factor-icon">
                  <i className={f.icon} />
                </div>
                <span className="prc-factor-label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ════ BLOCK 2 ════ */}
        <div className="prc-block">
          <div className="prc-block-label">
            How We Estimate Your Project Cost
          </div>

          <div className="prc-steps-row">
            {estimateSteps.map((step, i) => (
              <div
                key={i}
                className={`prc-step${activeStep === i ? " active" : ""}`}
                onMouseEnter={() => setActiveStep(i)}
              >
                <div className="prc-step-num">{step.num}</div>

                <div className="prc-step-title">{step.title}</div>

                <p className="prc-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="prc-cta-wrap">
          <p className="prc-cta-note">
            Ready to build your custom website? Get a personalized quote based
            on your business requirements.
          </p>

          <a
            href="/"
            className="prc-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Request a Free Quote
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomWebDevPricingSection;
