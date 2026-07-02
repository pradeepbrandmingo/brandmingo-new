import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./TestimonialHome.css";

/* ── Testimonial Data ── */
const TESTIMONIALS = [
  {
    name: "Dipika",
    service: "DIGITAL MARKETING",
    review:
      "Brandmingo delivered highly professional, client-focused services. Their supportive team made the entire process smooth and exceeded our expectations.",
  },
  {
    name: "Rajneesh Choudhary",
    service: "META ADS",
    review:
      "Brandmingo managed our Meta Ads and social media exceptionally well. Our reach, engagement, and overall business growth improved significantly.",
  },
  {
    name: "N K",
    service: "GRAPHIC DESIGN",
    review:
      "Excellent coordination despite being in different cities. They patiently refined every detail until the final design matched our expectations perfectly.",
  },
  {
    name: "Mahil Hasan",
    service: "WEB DEVELOPMENT",
    review:
      "The team built a fast, modern, and beautifully designed website. Professional execution and a wonderful experience from start to finish.",
  },
  {
    name: "Vikash Kumar",
    service: "WEB DEVELOPMENT",
    review:
      "Without a doubt, Brandmingo delivers top-quality development solutions. Highly professional team with exceptional technical expertise and execution.",
  },
  {
    name: "Marque Career",
    service: "FULL STACK DEVELOPMENT",
    review:
      "Outstanding development partner with excellent technical expertise. We highly recommend Brandmingo for reliable and premium digital solutions.",
  },
  {
    name: "Bandhiya Hardik",
    service: "BRANDING",
    review:
      "A creative and supportive team that truly understands business growth. Brandmingo is an excellent partner for building your digital presence.",
  },
  {
    name: "Anjum Faheem",
    service: "WEB DEVELOPMENT",
    review:
      "Great experience working with Brandmingo. The team delivered quality work on time with professionalism, dedication, and excellent communication.",
  },
];

const STATS = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "BUSINESSES SERVED" },
  { value: "3+", label: "Years of Excellence" },
];

/* ── Avatar ── */
const Avatar = ({ name }) => (
  <div className="th-avatar">
    <span className="th-avatar-letter">{name.charAt(0).toUpperCase()}</span>
  </div>
);

/* ── Quote Icon ── */
const QuoteIcon = () => (
  <svg
    className="th-quote-icon"
    width="28"
    height="22"
    viewBox="0 0 28 22"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M0 22V13.3333C0 5.77778 4.08889 1.38889 12.2667 0L13.3333 2.13333C9.42222 3.02222 7.02222 5.37778 6.13333 9.2H11.5556V22H0ZM16.4444 22V13.3333C16.4444 5.77778 20.5333 1.38889 28.7111 0L29.7778 2.13333C25.8667 3.02222 23.4667 5.37778 22.5778 9.2H28V22H16.4444Z"
      fill="currentColor"
    />
  </svg>
);

/* ── Testimonial Card ── */
const TestimonialCard = ({ name, service, review }) => (
  <div className="th-card">
    <div className="th-card-shine" aria-hidden="true" />
    <QuoteIcon />
    <p className="th-card-review">{review}</p>
    <div className="th-card-divider" aria-hidden="true" />
    <div className="th-card-top">
      <Avatar name={name} />
      <div className="th-card-info">
        <h4 className="th-card-name">{name}</h4>
        <span className="th-card-service">{service}</span>
      </div>
      <div className="th-stars" aria-label="5 stars">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="var(--theme-color1,#ff6b1e)"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    </div>
    <div className="th-card-accent" aria-hidden="true" />
  </div>
);

/* ══════════════════════════════════════════
   INFINITE SCROLL TRACK
══════════════════════════════════════════ */
const InfiniteTrack = ({ items, direction = "left", speed = 40 }) => {
  const [isPaused, setIsPaused] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div
      className="th-track-wrap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`th-track th-track--${direction}${isPaused ? " th-track--paused" : ""}`}
        style={{ "--speed": `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   STATS BAR
══════════════════════════════════════════ */
const StatsBar = ({ isInView }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    }),
  };

  return (
    <motion.div
      className="th-stats-bar"
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={0.55}
    >
      {STATS.map((stat, i) => (
        <div className="th-stat-item" key={i}>
          <span className="th-stat-value">{stat.value}</span>
          <span className="th-stat-label">{stat.label}</span>
          {i < STATS.length - 1 && (
            <div className="th-stat-sep" aria-hidden="true" />
          )}
        </div>
      ))}
    </motion.div>
  );
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const TestimonialHome = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const row1 = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
  const row2 = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
    }),
  };

  return (
    <section className="th-section" ref={sectionRef}>
      {/* Background */}
      <div className="th-bg" aria-hidden="true">
        <div className="th-bg-grid" />
        <div className="th-bg-orb th-bg-orb--left" />
        <div className="th-bg-orb th-bg-orb--right" />
        <div className="th-bg-orb th-bg-orb--center" />
      </div>

      {/* ── Header ── */}
      <div className="th-header">
        <motion.div
          className="th-badge"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="var(--theme-color1,#ff6b1e)"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          CLIENT STORIES
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="var(--theme-color1,#ff6b1e)"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        <motion.h2
          className="th-heading"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.12}
        >
          Trusted by Brands.
          <br />
          <em className="th-heading-accent">Loved by Results.</em>
        </motion.h2>

        <motion.p
          className="th-sub"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.24}
        >
          We're proud to partner with ambitious businesses and creators who
          trust us to deliver impact that matters.
        </motion.p>
      </div>

      {/* ── Slider Area ── */}
      <motion.div
        className="th-slider-area"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.36}
      >
        <div className="th-fade th-fade--left" aria-hidden="true" />
        <div className="th-fade th-fade--right" aria-hidden="true" />

        <InfiniteTrack items={row1} direction="left" speed={38} />
        <InfiniteTrack items={row2} direction="right" speed={42} />
      </motion.div>

      {/* ── Stats Bar ── */}
      <StatsBar isInView={isInView} />
    </section>
  );
};

export default TestimonialHome;
