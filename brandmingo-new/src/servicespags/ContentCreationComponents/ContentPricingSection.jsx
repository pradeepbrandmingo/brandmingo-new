import React, { useState } from "react";
// import "./pricing-section.css";
import { openEnquiryPopup } from "../../utils/popup";

const pricingFactors = [
  { icon: "fas fa-file-alt", label: "Content Type & Requirements" },
  { icon: "fas fa-pen-nib", label: "Content Volume & Word Count" },
  { icon: "fas fa-search", label: "SEO & Research Requirements" },
  { icon: "fas fa-calendar-alt", label: "Delivery Timeline" },
  { icon: "fas fa-share-alt", label: "Platforms & Content Formats" },
];

const estimateSteps = [
  {
    num: "01",
    title: "Requirement Discussion",
    desc: "We understand your business, target audience, content objectives, and brand voice.",
  },
  {
    num: "02",
    title: "Content Planning",
    desc: "We analyze your content needs, preferred formats, publishing channels, and content strategy.",
  },
  {
    num: "03",
    title: "Scope & Resource Planning",
    desc: "We estimate the content volume, timeline, SEO requirements, and creative resources needed.",
  },
  {
    num: "04",
    title: "Transparent Cost Estimate",
    desc: "Receive a customized content creation proposal with clear pricing and no hidden costs.",
  },
];

const ContentPricingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="prc-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="prc-header">
          <div className="prc-eyebrow">Transparent Pricing</div>

          <h3 className="prc-title">
            Content Creation Pricing & Cost Estimation
          </h3>

          <p className="prc-subtitle">
            Our content creation pricing is flexible and tailored to your
            business goals, content requirements, and project scope. You only
            pay for the services you need—no hidden fees or unnecessary
            packages.
          </p>
        </div>

        {/* ════ BLOCK 1 — Pricing Depends On ════ */}
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

        {/* ════ BLOCK 2 — How We Estimate Cost ════ */}
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

        {/* ── CTA ── */}
        <div className="prc-cta-wrap">
          <p className="prc-cta-note">
            Need high-quality content for your brand? Get a personalized quote
            based on your content goals and project requirements.
          </p>

          <a
            href="/"
            className="prc-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              openEnquiryPopup();
            }}
          >
            Get a Free Content Quote
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentPricingSection;
