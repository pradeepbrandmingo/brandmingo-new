import React, { useState } from "react";
// import "./pricing-section.css";
import { openEnquiryPopup } from "../../utils/popup";

const pricingFactors = [
  { icon: "fas fa-lightbulb", label: "Product Scope & Complexity" },
  { icon: "fas fa-users", label: "User Research & UX Requirements" },
  { icon: "fas fa-pencil-ruler", label: "UI/UX Design & Prototyping" },
  { icon: "fas fa-clock", label: "Project Timeline" },
  { icon: "fas fa-layer-group", label: "Design System & Deliverables" },
];

const estimateSteps = [
  {
    num: "01",
    title: "Discovery Session",
    desc: "We understand your product vision, business goals, and target users.",
  },
  {
    num: "02",
    title: "Scope & Planning",
    desc: "We define user flows, design requirements, and project deliverables.",
  },
  {
    num: "03",
    title: "Design Estimation",
    desc: "We estimate effort, timeline, and resources based on your project.",
  },
  {
    num: "04",
    title: "Transparent Proposal",
    desc: "Receive a detailed proposal with pricing, timeline, and no hidden costs.",
  },
];

const ProductDesignPricingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="prc-section">
      <div className="auto-container">
        {/* Header */}
        <div className="prc-header">
          <div className="prc-eyebrow">Transparent Pricing</div>

          <h3 className="prc-title">
            Product Design Pricing & Cost Estimation
          </h3>

          <p className="prc-subtitle">
            Every product is unique. Our pricing is customized based on your
            product goals, design complexity, user experience requirements, and
            project scope—ensuring complete transparency with no hidden costs.
          </p>
        </div>

        {/* Pricing Factors */}
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

        {/* Estimation Process */}
        <div className="prc-block">
          <div className="prc-block-label">How We Estimate Your Project</div>

          <div className="prc-steps-row">
            {estimateSteps.map((step, index) => (
              <div
                key={index}
                className={`prc-step ${activeStep === index ? "active" : ""}`}
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
            Ready to design your next digital product? Get a personalized
            estimate tailored to your product vision and business goals.
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

export default ProductDesignPricingSection;
