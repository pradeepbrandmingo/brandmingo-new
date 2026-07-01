import { useState } from "react";

import star from "../../assets/images/icons/star.png";
import light from "../../assets/images/icons/faq-light-1-1.png";
import shape from "../../assets/images/icons/faq-shape-1-1.png";

const faqData = [
  {
    question: "What services does your digital agency offer?",
    answer:
      "We provide complete digital solutions including website development, ecommerce setup, SEO, social media management, performance marketing, branding, UI/UX design, and custom business solutions tailored to your goals.",
  },
  {
    question: "What is your pricing model or cost structure?",
    answer:
      "Our pricing depends on project scope, features, timeline, and business requirements. We offer flexible packages for startups, growing businesses, and enterprise-level projects with transparent pricing and no hidden costs.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "We start by understanding your business, audience, and objectives. From planning and strategy to design, development, testing, and launch, every step is focused on delivering measurable business results.",
  },
  {
    question: "Can you help with ongoing support?",
    answer:
      "Yes, we provide ongoing maintenance, technical support, performance optimization, security updates, and digital growth support to keep your business running smoothly online.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with startups, ecommerce brands, educational businesses, healthcare, real estate, fashion, service-based businesses, and many other industries looking to grow digitally.",
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer:
      "We work with both startups and established companies. Whether you are launching a new brand or scaling an existing business, we create solutions based on your stage and growth goals.",
  },
  {
    question: "Do you offer custom website or app development?",
    answer:
      "Absolutely. We build fully customized websites, web applications, ecommerce platforms, and business systems designed specifically around your requirements, workflows, and scalability needs.",
  },
  {
    question: "What sets Brandmingo apart?",
    answer:
      "We create tailored digital solutions that drive growth, engagement, and measurable results. ",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // first open same as theme

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding position-relative">
      {/* Shapes */}
      <div className="faq-light-shape">
        <img src={light} alt="" />
      </div>

      <div className="faq-shape">
        <img src={shape} alt="" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="sec-title text-center mb-60">
              <span className="sub-title">
                <img src={star} alt="" />
                Faqs
              </span>

              <h2 className="title">
                Have Questions in Your Mind? <br />
                <span>Get the Answers Now</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {[0, 1].map((col) => (
            <div className="col-lg-6" key={col}>
              {faqData
                .slice(
                  col * Math.ceil(faqData.length / 2),
                  (col + 1) * Math.ceil(faqData.length / 2),
                )
                .map((item, index) => {
                  const actualIndex =
                    col * Math.ceil(faqData.length / 2) + index;

                  return (
                    <div
                      key={actualIndex}
                      className={`faq-block-one ${
                        activeIndex === actualIndex ? "active" : ""
                      }`}
                    >
                      <div
                        className="title-box"
                        onClick={() => toggleFAQ(actualIndex)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="content">
                          <h5 className="title">{item.question}</h5>
                        </div>

                        <span className="icon">
                          <i className="fa-sharp fa-solid fa-plus"></i>
                        </span>
                      </div>

                      <div
                        className={`content-box ${
                          activeIndex === actualIndex ? "show" : ""
                        }`}
                      >
                        <div className="inner">
                          <div className="text">{item.answer}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
