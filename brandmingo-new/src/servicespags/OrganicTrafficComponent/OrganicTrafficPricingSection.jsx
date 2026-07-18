import React, { useState } from "react";
// import "./pricing-section.css";
import { openEnquiryPopup } from "../../utils/popup";

const pricingFactors = [
  {
    icon: "fas fa-bullseye",
    label: "Business Goals & Scope",
  },
  {
    icon: "fas fa-briefcase",
    label: "Service Package",
  },
  {
    icon: "fas fa-wallet",
    label: "Budget & Resources",
  },
  {
    icon: "fas fa-calendar-days",
    label: "Project Timeline",
  },
  {
    icon: "fas fa-chart-line",
    label: "Tracking & Reporting",
  },
];

const estimateSteps = [
  {
    num: "01",
    title: "Requirement Analysis",
    desc: "Understand your business goals and project needs.",
  },
  {
    num: "02",
    title: "Market Evaluation",
    desc: "Analyze your industry, audience, and opportunities.",
  },
  {
    num: "03",
    title: "Strategy & Planning",
    desc: "Create the right execution plan and budget.",
  },
  {
    num: "04",
    title: "Custom Proposal",
    desc: "Receive transparent pricing with clear deliverables.",
  },
];

const OrganicTrafficPricingSection = () => {
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
            Every project is unique. We provide transparent pricing based on
            your business goals, campaign requirements, and growth objectives.
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
            Get a customized proposal tailored to your business requirements and
            growth goals
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

export default OrganicTrafficPricingSection;
