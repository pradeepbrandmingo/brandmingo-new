import React, { useState } from "react";
// import "./pricing-section.css";
import { openEnquiryPopup } from "../../utils/popup";

const pricingFactors = [
  { icon: "fas fa-lightbulb", label: "Brand Strategy Requirements" },
  { icon: "fas fa-palette", label: "Design Scope & Deliverables" },
  { icon: "fas fa-layer-group", label: "Brand Assets Included" },
  { icon: "fas fa-clock", label: "Project Timeline" },
  { icon: "fas fa-file-alt", label: "Brand Guidelines & Files" },
];

const estimateSteps = [
  {
    num: "01",
    title: "Brand Discovery",
    desc: "We understand your business, audience, goals, and the vision behind your brand.",
  },
  {
    num: "02",
    title: "Research & Strategy",
    desc: "We research your industry, competitors, and define a strong brand positioning strategy.",
  },
  {
    num: "03",
    title: "Design Proposal",
    desc: "We prepare a branding proposal with deliverables, timelines, and creative direction.",
  },
  {
    num: "04",
    title: "Transparent Cost Estimate",
    desc: "Receive a clear quotation with no hidden charges, tailored to your branding requirements.",
  },
];

const IdentityBrandPricingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="prc-section">
      <div className="auto-container">
        {/* Header */}
        <div className="prc-header">
          <div className="prc-eyebrow">Transparent Pricing</div>

          <h3 className="prc-title">
            Brand Identity Design Pricing
            <br />
            and Cost Estimation
          </h3>

          <p className="prc-subtitle">
            Our pricing is flexible and transparent, based on your branding
            goals, project scope, and the identity assets your business needs.
          </p>
        </div>

        {/* Pricing Depends On */}
        <div className="prc-block">
          <div className="prc-block-label">Pricing Depends On</div>

          <div className="prc-factors">
            {pricingFactors.map((factor, index) => (
              <div className="prc-factor-card" key={index}>
                <div className="prc-factor-icon">
                  <i className={factor.icon} />
                </div>

                <span className="prc-factor-label">{factor.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How We Estimate Cost */}
        <div className="prc-block">
          <div className="prc-block-label">How We Estimate Cost</div>

          <div className="prc-steps-row">
            {estimateSteps.map((step, index) => (
              <div
                key={index}
                className={`prc-step${activeStep === index ? " active" : ""}`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="prc-step-num">{step.num}</div>

                <div className="prc-step-title">{step.title}</div>

                <p className="prc-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="prc-cta-wrap">
          <p className="prc-cta-note">
            Get a customized quote for your brand identity project with complete
            transparency and no hidden costs.
          </p>

          <a
            href="/"
            className="prc-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Get a Free Quote
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IdentityBrandPricingSection;
