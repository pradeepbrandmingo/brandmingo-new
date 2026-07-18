import React, { useState } from "react";
// import "./pricing-section.css";
import { openEnquiryPopup } from "../../utils/popup";

const pricingFactors = [
  {
    icon: "fas fa-bullseye",
    label: "Campaign Goals & Scope",
  },
  {
    icon: "fas fa-briefcase",
    label: "Service Model Selected",
  },
  {
    icon: "fas fa-rectangle-ad",
    label: "Ad Budget & Channels",
  },
  {
    icon: "fas fa-calendar-days",
    label: "Campaign Scale & Timeline",
  },
  {
    icon: "fas fa-chart-column",
    label: "Tracking & Analytics Setup",
  },
];

const estimateSteps = [
  {
    num: "01",
    title: "Business Discovery",
    desc: "Understand your goals, audience, and campaign requirements.",
  },
  {
    num: "02",
    title: "Campaign Assessment",
    desc: "Review your market, competition, and growth opportunities.",
  },
  {
    num: "03",
    title: "Strategy & Budget Plan",
    desc: "Create the ideal campaign structure and budget allocation.",
  },
  {
    num: "04",
    title: "Transparent Proposal",
    desc: "Receive a custom quote with clear pricing and deliverables.",
  },
];

const FbInstAdsPricingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="prc-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="prc-header">
          <div className="prc-eyebrow">Transparent Pricing</div>
          {/* h3 tag — sized via var(--h3-font-size) in CSS */}
          <h3 className="prc-title">Campaign Pricing & Cost Estimation</h3>
          <p className="prc-subtitle">
            Transparent pricing tailored to your business goals, campaign scope,
            and advertising requirements
          </p>
        </div>

        {/* ════ BLOCK 1 — Pricing Depends On ════ */}
        <div className="prc-block">
          <div className="prc-block-label">PRICING DEPENDS ON</div>
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
            Get a custom performance marketing quote tailored to your business
            goals
          </p>
          <a
            href="/"
            className="prc-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Get a Free Proposal
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FbInstAdsPricingSection;
