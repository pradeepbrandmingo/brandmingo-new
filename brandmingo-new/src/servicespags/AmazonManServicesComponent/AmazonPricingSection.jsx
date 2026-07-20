import React, { useState } from "react";
// import "./pricing-section.css";
import { openEnquiryPopup } from "../../utils/popup";

const pricingFactors = [
  {
    icon: "fas fa-layer-group",
    label: "Marketplace Goals & Scope",
  },
  {
    icon: "fas fa-handshake",
    label: "Management Plan Selected",
  },
  {
    icon: "fas fa-store",
    label: "Store Size & Products",
  },
  {
    icon: "fas fa-clock",
    label: "Timeline & Growth Priority",
  },
  {
    icon: "fas fa-plug",
    label: "Integrations & Reporting",
  },
];

const estimateSteps = [
  {
    num: "01",
    title: "Business Assessment",
    desc: "Understand your marketplace goals, products, store status, and business requirements.",
  },
  {
    num: "02",
    title: "Store Performance Review",
    desc: "Evaluate current listings, sales, competition, account health, and growth opportunities.",
  },
  {
    num: "03",
    title: "Growth Strategy Planning",
    desc: "Create a customized management plan with optimization priorities and measurable goals.",
  },
  {
    num: "04",
    title: "Transparent Proposal",
    desc: "Receive a clear service proposal with deliverables, timeline, pricing, and support details.",
  },
];

const AmazonPricingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="prc-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="prc-header">
          <div className="prc-eyebrow">Transparent Pricing</div>
          {/* h3 tag — sized via var(--h3-font-size) in CSS */}
          <h3 className="prc-title">Pricing & Cost Estimation</h3>
          <p className="prc-subtitle">
            Custom pricing based on your marketplace, business goals, and
            management requirements.
          </p>
        </div>

        {/* ════ BLOCK 1 — Pricing Depends On ════ */}
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

        {/* ════ BLOCK 2 — How We Estimate Cost ════ */}
        <div className="prc-block">
          <div className="prc-block-label">How We Estimate Cost</div>
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
            Get a customized ecommerce management plan designed around your
            marketplace and business goals.
          </p>
          <a
            href="/"
            className="prc-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Get a Free Consultation
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AmazonPricingSection;
