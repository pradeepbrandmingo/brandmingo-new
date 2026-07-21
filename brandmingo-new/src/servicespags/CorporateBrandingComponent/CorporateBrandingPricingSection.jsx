import React, { useState } from "react";
// import "./pricing-section.css";

const pricingFactors = [
  { icon: "fas fa-lightbulb", label: "Brand Strategy Requirements" },
  { icon: "fas fa-palette", label: "Visual Identity & Design Scope" },
  { icon: "fas fa-building", label: "Corporate Branding Assets" },
  { icon: "fas fa-clock", label: "Project Timeline & Deliverables" },
  { icon: "fas fa-layer-group", label: "Brand Guidelines & Collateral" },
];

const estimateSteps = [
  {
    num: "01",
    title: "Brand Discovery",
    desc: "We understand your business, industry, audience, and long-term branding objectives.",
  },
  {
    num: "02",
    title: "Brand Assessment",
    desc: "We evaluate your existing brand identity, competitors, and opportunities for improvement.",
  },
  {
    num: "03",
    title: "Scope & Proposal",
    desc: "Based on your branding requirements, we define the project scope, deliverables, timeline, and pricing.",
  },
  {
    num: "04",
    title: "Transparent Quotation",
    desc: "Receive a detailed branding proposal with clear pricing, timelines, and no hidden charges.",
  },
];

const CorporateBrandingPricingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="prc-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="prc-header">
          <div className="prc-eyebrow">Transparent Pricing</div>

          <h3 className="prc-title">
            Corporate Branding Pricing & Cost Estimation
          </h3>

          <p className="prc-subtitle">
            Every brand is unique. Our corporate branding pricing is customized
            based on your business goals, branding requirements, design scope,
            and deliverables—ensuring complete transparency with no hidden
            costs.
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
            How We Estimate Your Branding Cost
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
            Ready to build a memorable corporate brand? Get a personalized quote
            tailored to your branding goals and business requirements.
          </p>

          <a href="#contact" className="prc-cta-btn">
            Get a Free Branding Quote
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CorporateBrandingPricingSection;