import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Founders.css";

import team1 from "../../assets/images/resource/CHIRAG.png";
import team2 from "../../assets/images/resource/Tarun.png";
import team3 from "../../assets/images/resource/Anunay.png";

/* ── Team data ── */
const teamMembers = [
  {
    image: team1,
    name: "Chirag Gupta",
    role: "CEO & Founder",
    delay: "0.1s",
    bio: "Vision-driven entrepreneur focused on helping businesses grow through branding, web development, and performance-driven digital marketing solutions.",
    tags: ["Leadership", "Business Strategy", "Growth"],
    linkedin: "https://www.linkedin.com/in/chirag-gupta-70427b1b4/",
  },
  {
    image: team2,
    name: "Tarun Anand",
    role: "Co-Founder",
    delay: "0.22s",
    bio: "Leads creative strategy and digital campaigns, combining branding, paid advertising, and design to deliver measurable business growth.",
    tags: ["Brand Strategy", "Performance Marketing", "Creative"],
    linkedin: "https://www.linkedin.com/in/tarun-anand-brandmingo/",
  },
  {
    image: team3,
    name: "Anunay Kashyap",
    role: "Operations Lead",
    delay: "0.34s",
    bio: "Ensures seamless project execution, client coordination, and operational excellence while maintaining high-quality delivery across every project.",
    tags: ["Operations", "Project Management", "Client Success"],
    linkedin: "https://www.linkedin.com/in/anunay-kashyap/",
  },
];

const Founders = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
  const navigate = useNavigate();

  const toggleFlip = (index) => {
    setFlippedCard((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleApplyNow = (e) => {
    e.preventDefault();
    navigate("/contact-us");
  };

  return (
    <section id="team" className="fnd-section" ref={sectionRef}>
      <div className="fnd-bg-dots" aria-hidden="true" />

      <div className="fnd-container">
        {/* ── Header ── */}
        <div className={`fnd-header ${visible ? "fnd-visible" : ""}`}>
          <div className="fnd-label">
            <span className="fnd-label-dot" />
            Our Team
          </div>
          <h2 className="fnd-heading">
            Meet Our Experienced
            <span className="fnd-heading-accent">Team People</span>
          </h2>
          <span className="fnd-heading-line" />
        </div>

        {/* ── Cards ── */}
        <div className="fnd-grid">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`fnd-card ${visible ? "fnd-visible" : ""}`}
              style={{ animationDelay: member.delay }}
              aria-label={`${member.name} — click to see bio`}
              onClick={() => toggleFlip(index)}
              onMouseLeave={() =>
                setFlippedCard((prev) => (prev === index ? null : prev))
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleFlip(index);
                }
              }}
            >
              <div
                className={`fnd-card-inner ${
                  flippedCard === index ? "fnd-flipped" : ""
                }`}
              >
                {/* ── FRONT: dark image ── */}
                <div className="fnd-card-front">
                  <div className="fnd-card-img">
                    <img src={member.image} alt={member.name} loading="lazy" />
                    <div className="fnd-card-overlay" aria-hidden="true" />
                  </div>
                  <div className="fnd-card-glow" aria-hidden="true" />

                  <div className="fnd-card-content">
                    <h4 className="fnd-card-name">{member.name}</h4>
                    <p className="fnd-card-role">{member.role}</p>
                    <div className="fnd-card-divider" aria-hidden="true" />
                    <div className="fnd-card-footer">
                      <div className="fnd-social">
                        <a
                          href={member.linkedin}
                          aria-label={`${member.name} on LinkedIn`}
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(
                              member.linkedin,
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }}
                        >
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </div>
                      <a
                        href={member.linkedin}
                        className="fnd-view-profile"
                        aria-label={`Flip card to see ${member.name}'s bio and LinkedIn`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleFlip(index);
                        }}
                      >
                        View Profile <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* ── BACK: pure white bio panel ── */}
                <div className="fnd-card-back">
                  {/* decorative icon top-right */}
                  <div className="fnd-back-deco" aria-hidden="true">
                    <i className="fas fa-user-tie" />
                  </div>

                  <h4 className="fnd-back-name">{member.name}</h4>
                  <p className="fnd-back-role">{member.role}</p>
                  <div className="fnd-back-divider" aria-hidden="true" />
                  <p className="fnd-back-bio">{member.bio}</p>

                  {/* skill tags */}
                  <div className="fnd-back-tags">
                    {member.tags.map((tag) => (
                      <span key={tag} className="fnd-back-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="fnd-back-footer">
                    {/* LinkedIn button → redirects to linkedin */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fnd-back-linkedin"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fa-brands fa-linkedin-in" />
                      View Profile
                    </a>
                    <a
                      href={member.linkedin}
                      className="fnd-back-arrow"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(
                          member.linkedin,
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                    >
                      Connect <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div className={`fnd-cta ${visible ? "fnd-visible" : ""}`}>
          <div className="fnd-cta-text">
            <h3>
              Want to Join Our <span>Creative Team?</span>
            </h3>
            <p>
              We're always looking for talented people passionate about building
              great digital experiences.
            </p>
          </div>
          <a
            href="/contact-us"
            className="fnd-cta-btn"
            onClick={handleApplyNow}
          >
            <i className="fas fa-paper-plane" />
            Apply Now
            <span className="fnd-cta-btn-arrow">
              <i className="fas fa-arrow-right" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Founders;
