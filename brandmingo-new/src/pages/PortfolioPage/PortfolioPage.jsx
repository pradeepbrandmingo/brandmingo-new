import { useState, useMemo } from "react";
import PopUpPortfolio from "../../components/PopUpPortfolio/PopUpPortfolio";
import projects from "../../data/projects";
import "./PortfolioPage.css";

import star from "../../assets/images/icons/star.png";
import arrowIcon from "../../assets/images/icons/arrow-icon.png";

const FILTERS = ["All Projects", "Full Stack", "Shopify", "WordPress"];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") {
      return projects;
    }

    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  const openPopup = (project) => setActiveProject(project);
  const closePopup = () => setActiveProject(null);

  return (
    <>
      <section className="portfolio-page section-padding">
        {/* Hero */}
        <div className="pf-hero">
          <div className="pf-orb pf-orb--1" />
          <div className="pf-orb pf-orb--2" />
          <div className="pf-orb pf-orb--3" />

          <div className="container">
            <div className="pf-hero-inner">
              <span className="sub-title pf-subtag">
                <img src={star} alt="" />
                Our Work
              </span>

              <h1 className="pf-heading">
                Explore Our <span>Projects</span>
              </h1>

              <p className="pf-subtext">
                Discover how we help brands grow, engage, and lead through
                strategic digital marketing and creative solutions.
              </p>

              {/* FILTER BUTTONS */}

              <div
                className="pf-filters"
                role="tablist"
                aria-label="Project Filters"
              >
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    className={`pf-filter-btn ${
                      activeFilter === filter ? "is-active" : ""
                    }`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}

        <div className="container">
          <div className="row pf-grid">
            {filteredProjects.length === 0 ? (
              <div className="pf-empty">No projects found.</div>
            ) : (
              filteredProjects.map((item, index) => (
                <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                  <div
                    className="project-block"
                    onClick={() => openPopup(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="inner-block">
                      <div className="image-block">
                        <img
                          className="hover-img"
                          src={item.img}
                          alt={item.title}
                        />

                        <img
                          className="hover-img"
                          src={item.img}
                          alt={item.title}
                        />

                        <a
                          href="#"
                          className="arrow-icon"
                          onClick={(e) => {
                            e.preventDefault();
                            openPopup(item);
                          }}
                        >
                          <img src={arrowIcon} alt="" />
                        </a>
                      </div>

                      <div className="content-block">
                        <h4 className="title">
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              openPopup(item);
                            }}
                          >
                            {item.title}
                          </a>
                        </h4>

                        <ul>
                          <li>{item.category}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {activeProject && (
        <PopUpPortfolio project={activeProject} onClose={closePopup} />
      )}
    </>
  );
};

export default PortfolioPage;
