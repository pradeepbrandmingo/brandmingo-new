import { Link } from "react-router-dom";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCode,
  FaBullhorn,
  FaShareNodes,
  FaPenRuler,
  FaMagnifyingGlassChart,
  FaBagShopping,
  FaMedal,
  FaStarOfLife,
  FaArrowRight,
} from "react-icons/fa6";
import "./ServicesSectionHome.css";

/* ──────────────────────────────────────────
   DATA
────────────────────────────────────────── */
const SERVICES = [
  {
    id: "01",
    icon: <FaCode />,
    title: "Web Development",
    desc: "We create fast, responsive, and SEO-friendly websites designed to deliver seamless user experiences and strong business performance.",
    to: "/web-development-new",
    custom: false,
  },
  {
    id: "02",
    icon: <FaBullhorn />,
    title: "Ads And Campaigns",
    desc: "Performance-driven Google and Meta ad campaigns focused on lead generation, customer acquisition, and maximizing ROI.",
    to: "/ads-and-campaigns",
    custom: false,
  },
  {
    id: "03",
    icon: <FaShareNodes />,
    title: "Social Media Management",
    desc: "Creative content planning, audience engagement, and platform management to build a strong and consistent online presence",
    to: "/social-media-management",
    custom: false,
  },
  {
    id: "04",
    icon: <FaPenRuler />,
    title: "UI/UX And Audits",
    desc: "User-focused interfaces and detailed experience audits that improve usability, engagement, and conversion rates",
    to: "/ui-ux-audits",
    custom: false,
  },
  {
    id: "05",
    icon: <FaMagnifyingGlassChart />,
    title: "SEO Optimizing",
    desc: "Technical SEO, content optimization, keyword strategy, and performance improvements to increase organic search visibility.",
    to: "/seo-optimizing",
    custom: false,
  },
  {
    id: "06",
    icon: <FaBagShopping />,
    title: "Ecommerce Management",
    desc: "Complete ecommerce support including store setup, product management, conversion optimization, and operational scaling",
    to: "/ecommerce-management",
    custom: false,
  },
  {
    id: "07",
    icon: <FaMedal />,
    title: "Graphic Designing",
    desc: "Creative brand visuals, marketing creatives, social media graphics, and design systems that strengthen brand identity.",
    to: "/graphic-designing",
    custom: false,
  },
  {
    id: "08",
    icon: <FaStarOfLife />,
    title: null,
    desc: null,
    to: "/contact-us",
    custom: true,
  },
];

/* ──────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.07,
    },
  }),
};

const headFade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ──────────────────────────────────────────
   SERVICE CARD (regular)
   ────────────────────────────────────────── */

const MotionLink = motion(Link);

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <MotionLink
      ref={ref}
      to={service.to} // href → to
      className="ssh-card"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      aria-label={service.title}
    >
      {/* Top row: icon + number */}
      <div className="ssh-card-top">
        <motion.div
          className="ssh-icon-wrap"
          whileHover={{ rotate: -6, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          {service.icon}
        </motion.div>
        <span className="ssh-card-num">{service.id}</span>
      </div>

      {/* Title + desc */}
      <h3 className="ssh-card-title">{service.title}</h3>
      <p className="ssh-card-desc">{service.desc}</p>

      {/* Arrow */}
      <div className="ssh-arrow">
        <FaArrowRight />
      </div>

      {/* Hover glow */}
      <div className="ssh-card-glow" aria-hidden="true" />
    </MotionLink>
  );
};

/* ──────────────────────────────────────────
   CUSTOM / CTA CARD (last)
────────────────────────────────────────── */
const CustomCard = ({ service, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="ssh-card ssh-card--custom"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      <div className="ssh-card-top">
        <motion.div
          className="ssh-icon-wrap ssh-icon-wrap--custom"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {service.icon}
        </motion.div>
      </div>

      <h3 className="ssh-card-title ssh-card-title--custom">
        Need something <span className="ssh-title-orange">custom</span>?
      </h3>

      <p className="ssh-card-desc">
        We build tailored digital solutions based on your unique business goals,
        workflows, and growth requirements.
      </p>

      <Link to={service.to} className="ssh-custom-cta">
        Let's Discuss <FaArrowRight />
      </Link>

      {/* Strong ambient glow */}
      <div className="ssh-card-glow ssh-card-glow--custom" aria-hidden="true" />
    </motion.div>
  );
};

/* ──────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────── */
const ServicesSectionHome = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const regular = SERVICES.filter((s) => !s.custom);
  const custom = SERVICES.find((s) => s.custom);

  return (
    <section className="ssh-section">
      {/* Bg decorations */}
      <div className="ssh-bg" aria-hidden="true">
        <div className="ssh-bg-orb ssh-bg-orb--tl" />
        <div className="ssh-bg-orb ssh-bg-orb--br" />
        <div className="ssh-bg-dots" />
      </div>

      <div className="ssh-container">
        {/* ── HEADER ── */}
        <motion.div
          ref={headerRef}
          className="ssh-header"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {/* Badge */}
          <motion.div className="ssh-badge" variants={headFade}>
            <span className="ssh-badge-line" aria-hidden="true" />
            <span className="ssh-badge-text">Our Services</span>
            <span className="ssh-badge-line" aria-hidden="true" />
          </motion.div>

          {/* Heading */}
          <motion.h2 className="ssh-heading" variants={headFade}>
            Your Complete Partner.
            <br />
            For <span className="ssh-heading-accent">Digital Growth</span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p className="ssh-para" variants={headFade}>
            From high-performance websites to growth-focused marketing
            strategies, Brandmingo delivers complete digital solutions designed
            to help businesses build visibility, generate leads, improve
            customer engagement, and scale faster online.
          </motion.p>
        </motion.div>

        {/* ── GRID ── */}
        <div className="ssh-grid">
          {regular.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} index={i} />
          ))}
          {custom && (
            <CustomCard
              key={custom.id}
              service={custom}
              index={regular.length}
            />
          )}
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          className="ssh-cta-wrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <Link to="/contact-us" className="btn-style-one" data-aos="fade-up">
            <span className="btn-arrow-left">
              <img src={arrow} alt="" />
            </span>
            <span className="btn-title">Let's Talk About Your Project</span>
            <span className="btn-arrow-right">
              <img src={arrow} alt="" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSectionHome;
