import { Link } from "react-router-dom";
// import videoImg from "../../assets/images/resource/video-1-1.jpg";
import videoImg from "../../assets/images/resource/cta-finel.png";
import shape from "../../assets/images/icons/video-shape-1-1.png";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section section-padding pt-0">
      {/* SHAPE */}
      <div className="video-light-shape-1">
        <img src={shape} alt="" />
      </div>

      {/* IMAGE */}
      <div className="video-image fix">
        <img src={videoImg} alt="" />

        <div className="content video-cta-content">
          <h3 className="title video-cta-heading">
            Turning Ideas Into Digital Experiences That Drive Real Business
            Growth.
          </h3>

          <p className="video-cta-desc">
            Whether you're launching a new brand, growing your online presence,
            or scaling your business, Brandmingo delivers creative,
            technology-driven solutions designed for measurable success.
          </p>

          <div className="video-cta-btn-wrap project-btn text-center">
            <Link to="/portfolio" className="btn-style-one">
              <span className="btn-arrow-left">
                <img src={arrow} alt="" />
              </span>
              <span className="btn-title">View All Project</span>
              <span className="btn-arrow-right">
                <img src={arrow} alt="" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
