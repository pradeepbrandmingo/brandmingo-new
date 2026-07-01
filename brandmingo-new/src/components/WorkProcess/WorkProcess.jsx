import { useState } from "react";
import star from "../../assets/images/icons/star.png";
import shape from "../../assets/images/icons/work-process-shape1-1.png";
import "./WorkProcess.css";

const steps = [
  {
    step: "Step 01",
    title: "Tailored Solutions",
    content:
      "Every business is different, so we begin by understanding your goals, audience, and challenges to craft customized digital solutions that align with your vision and growth strategy.",
  },
  {
    step: "Step 02",
    title: "Project Planning",
    content:
      "We create a structured roadmap covering design, development, timelines, and execution strategy to ensure smooth collaboration and efficient project delivery.",
  },
  {
    step: "Step 03",
    title: "Content Creation",
    content:
      "From website copy and branding assets to marketing creatives and SEO content, we develop engaging content designed to attract, inform, and convert your audience.",
  },
  {
    step: "Step 04",
    title: "Seamless Execution",
    content:
      "Our team handles development, optimization, testing, and deployment with precision to deliver high-performance digital experiences without delays or complications.",
  },
];

const WorkProcess = () => {
  const [activeStep, setActiveStep] = useState(1); // Step 02 default active

  return (
    <section className="work-process-section section-padding">
      <div className="container">
        <div className="row g-4">
          {/* LEFT */}
          <div className="col-lg-6">
            <div className="work-process-content-1">
              <div className="sec-title mb-0">
                <span className="sub-title">
                  <img src={star} alt="" />
                  Working Process
                </span>

                <h2 className="title work-process-heading">
                  Shaping the Future Through{" "}
                  <span className="work-process-heading-highlight">
                    Step-by-Step Innovation
                  </span>
                </h2>
              </div>

              <div className="work-process-thumb" data-aos="fade-up">
                <img src={shape} alt="" className="rotate-circle" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="working-block-one"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`inner-block ${
                    index === 0 ? "top-margin-none" : ""
                  } ${index === activeStep ? "active" : ""}`}
                >
                  <div className="step">{item.step}</div>

                  <div className="content-box">
                    <h4 className="title">{item.title}</h4>

                    <div className="text">{item.content}</div>

                    <div className="line"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
