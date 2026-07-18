import React, { useState } from "react";
// import "./pricing-section.css";

const pricingFactors = [
  { icon: "fas fa-users", label: "Audience Size & Engagement Goals" },
  { icon: "fas fa-handshake", label: "Engagement Strategy Selected" },
  { icon: "fas fa-comments", label: "Communication Channels" },
  { icon: "fas fa-chart-line", label: "Growth Objectives & Timeline" },
  { icon: "fas fa-chart-pie", label: "Analytics & Reporting Requirements" },
];

const estimateSteps = [
  {
    num: "01",
    title: "Understanding Your Business",
    desc: "We learn about your business, audience, and engagement objectives.",
  },
  {
    num: "02",
    title: "Audience & Engagement Analysis",
    desc: "We evaluate customer behavior, engagement opportunities, and current brand interactions.",
  },
  {
    num: "03",
    title: "Strategy Planning",
    desc: "We create a customized engagement strategy aligned with your goals, audience, and growth plans.",
  },
  {
    num: "04",
    title: "Custom Engagement Proposal",
    desc: "Receive a transparent engagement plan with clear deliverables and flexible pricing.",
  },
];

const GrowthPricingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="prc-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="prc-header">
          <div className="prc-eyebrow">Flexible Pricing</div>

          <h3 className="prc-title">
            Engagement Growth Pricing
          </h3>

          <p className="prc-subtitle">
            Every business has unique engagement goals. Our pricing is
            customized to your audience, engagement strategy, and long-term
            growth objectives with complete transparency.
          </p>
        </div>

        {/* ════ BLOCK 1 ════ */}
        <div className="prc-block">
          <div className="prc-block-label">
            Pricing Depends On
          </div>

          <div className="prc-factors">
            {pricingFactors.map((f, i) => (
              <div className="prc-factor-card" key={i}>
                <div className="prc-factor-icon">
                  <i className={f.icon} />
                </div>

                <span className="prc-factor-label">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ════ BLOCK 2 ════ */}
        <div className="prc-block">
          <div className="prc-block-label">
            How We Create Your Engagement Plan
          </div>

          <div className="prc-steps-row">
            {estimateSteps.map((step, i) => (
              <div
                key={i}
                className={`prc-step${activeStep === i ? " active" : ""}`}
                onMouseEnter={() => setActiveStep(i)}
              >
                <div className="prc-step-num">{step.num}</div>

                <div className="prc-step-title">
                  {step.title}
                </div>

                <p className="prc-step-desc">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="prc-cta-wrap">
          <p className="prc-cta-note">
            Let's create an engagement strategy tailored to your business and
            audience.
          </p>

          <a href="#contact" className="prc-cta-btn">
            Request a Free Consultation
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GrowthPricingSection;