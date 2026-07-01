import React from "react";
import { Link } from "react-router-dom";

// ✅ Import all images (same naming)
import awardLight from "../../assets/images/icons/award-light-2-1.png";
import awardVec from "../../assets/images/icons/award-vec-2-1.png";
import starIcon from "../../assets/images/icons/star.png";
import awardsImg from "../../assets/images/icons/awards.png";
import arrowIcon from "../../assets/images/icons/arrow.png";

const AboutAwardSection = () => {
  return (
    <section className="award-section-2 section-padding">
      {/* Background Elements */}
      <div className="award-light">
        <img src={awardLight} alt="" />
      </div>

      <div className="award-vec tm-gsap-animate-circle">
        <img src={awardVec} alt="" />
      </div>

      <div className="container">
        {/* Section Title */}
        <div className="sec-title mb-60 text-center text-lg-start">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-xl-6 col-lg-8">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={starIcon} alt="img" /> Awards
              </span>

              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Innovation That Drives <span>Digital Growth</span>
              </h2>
            </div>

            <div className="col-xl-4">
              <div
                className="text"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                At Brandmingo, our journey is built on continuous learning,
                creativity, and helping brands grow in the digital space. Every
                year, we’ve expanded our expertise, worked with ambitious
                businesses, and delivered solutions focused on real-world
                results.
              </div>
            </div>
          </div>
        </div>

        {/* Content Row */}
        <div className="row">
          {/* Left Image */}
          <div className="col-xl-3 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="award-image1">
              <img src={awardsImg} alt="" />
            </div>
          </div>

          {/* Right List */}
          <div
            className="col-xl-9 col-lg-8 mt-4 mt-lg-0 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="award-block-two">
              {/* Item */}
              {[
                {
                  year: "2026",
                  title: "Expanding Creative Solutions",
                  tag: "Growth",
                },
                {
                  year: "2025",
                  title: "Helping Brands Scale Online",
                  tag: "Success",
                },
                {
                  year: "2024",
                  title: "Strengthening Digital Presence",
                  tag: "Strategy",
                },
                {
                  year: "2023",
                  title: "Building The Foundation",
                  tag: "Vision",
                },
                {
                  year: "2022",
                  title: "The Beginning Of The Journey",
                  tag: "Start",
                },
              ].map((item, index) => (
                <div className="list-item" key={index}>
                  <div className="content-box">
                    <div className="title-box">
                      <div className="year">{item.year}</div>
                      <h5 className="title">{item.title}</h5>
                    </div>

                    <div className="right-text">
                      <div className="text">{item.tag}</div>

                      <Link to="/about" className="arrow-icon">
                        <img src={arrowIcon} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAwardSection;
