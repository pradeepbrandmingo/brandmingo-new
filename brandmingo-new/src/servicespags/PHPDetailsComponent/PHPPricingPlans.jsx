import { useEffect, useRef } from "react";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for small businesses",
    price: "₹15,000",
    features: [
      "5 Dynamic Pages",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Support",
    ],
    popular: false,
    delay: "0.1s",
  },
  {
    name: "Growth",
    desc: "Best for scaling businesses",
    price: "₹35,000",
    features: [
      "10 Dynamic Pages",
      "Custom PHP Development",
      "Performance Optimization",
      "Admin Panel",
      "3 Months Support",
      "API Integration",
    ],
    popular: true,
    delay: "0.2s",
  },
  {
    name: "Premium",
    desc: "For enterprise solutions",
    price: "₹75,000",
    features: [
      "Custom PHP Application",
      "Advanced API Integration",
      "Database Optimization",
      "6 Months Support",
      "Priority Support",
    ],
    popular: false,
    delay: "0.3s",
  },
];

const PHPPricingPlans = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("pp-active");
        });
      },
      { threshold: 0.08 },
    );
    const items = sectionRef.current?.querySelectorAll(".pp-reveal");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pp-section" ref={sectionRef}>
      <div className="auto-container">
        {/* Header */}
        <div className="pp-header pp-reveal">
          <div className="pp-tag">
            <span className="pp-dot" />
            Pricing Plans
          </div>
          {/* h2 tag — picks up style.css h2 vars automatically */}
          <h3 className="pp-title">Choose Your Plan</h3>
          <p className="pp-subtitle">
            Transparent pricing built for businesses of every size
          </p>
        </div>

        {/* Cards Grid */}
        <div className="pp-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pp-card pp-reveal${plan.popular ? " pp-popular" : ""}`}
              style={{ transitionDelay: plan.delay }}
            >
              {plan.popular && <div className="pp-badge">⭐ Most Popular</div>}

              {/* h3 tag — uses style.css h3 vars, overridden to h4 size via .pp-plan-name */}
              <h3 className="pp-plan-name">{plan.name}</h3>
              <p className="pp-plan-desc">{plan.desc}</p>

              <div className="pp-price-wrap">
                <span className="pp-price">{plan.price}</span>
                <span className="pp-price-note">One-time project price</span>
              </div>

              <ul className="pp-features">
                {plan.features.map((feat) => (
                  <li key={feat}>
                    <span className="pp-feat-icon">
                      <i className="fa-solid fa-check" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="pp-btn">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PHPPricingPlans;
