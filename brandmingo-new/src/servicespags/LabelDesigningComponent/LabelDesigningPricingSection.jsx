import React, { useState } from "react";
// import "./pricing-section.css";

const pricingFactors = [
  { icon: "fas fa-tags", label: "Label Type & Complexity" },
  { icon: "fas fa-box-open", label: "Product & Packaging Requirements" },
  { icon: "fas fa-palette", label: "Custom Design & Branding" },
  { icon: "fas fa-clock", label: "Timeline & Revisions" },
  { icon: "fas fa-print", label: "Print-Ready Deliverables" },
];

const estimateSteps = [
  {
    num: "01",
    title: "Requirement Discussion",
    desc: "We understand your product, brand identity, and label design requirements.",
  },
  {
    num: "02",
    title: "Research & Planning",
    desc: "We analyze your industry, competitors, packaging style, and target audience.",
  },
  {
    num: "03",
    title: "Design Scope & Proposal",
    desc: "We define the label concept, deliverables, timeline, and branding requirements.",
  },
  {
    num: "04",
    title: "Transparent Cost Estimate",
    desc: "Receive a clear quote with no hidden charges and complete design ownership.",
  },
];

const LabelDesigningPricingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="prc-section">
      <div className="auto-container">
        {/* Header */}
        <div className="prc-header">
          <div className="prc-eyebrow">Transparent Pricing</div>

          <h3 className="prc-title">
            Label Designing Pricing
            <br />& Cost Estimation
          </h3>

          <p className="prc-subtitle">
            Our label design pricing is flexible, transparent, and based on your
            product, branding, and packaging requirements—no hidden costs.
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

        {/* How We Estimate */}
        <div className="prc-block">
          <div className="prc-block-label">How We Estimate Cost</div>

          <div className="prc-steps-row">
            {estimateSteps.map((step, index) => (
              <div
                key={index}
                className={`prc-step ${activeStep === index ? " active" : ""}`}
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
            Get a custom label design quote tailored to your product and
            packaging requirements.
          </p>

          <a href="#contact" className="prc-cta-btn">
            Get a Free Quote
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LabelDesigningPricingSection;
