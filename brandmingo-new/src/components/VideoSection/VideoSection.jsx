import videoImg from "../../assets/images/resource/video-1-1.jpg";
import shape from "../../assets/images/icons/video-shape-1-1.png";

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

        <div className="content">
          <h3 className="title">
            Turning Ideas Into Digital Experiences That Drive Real Business
            Growth.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
