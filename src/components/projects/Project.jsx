import React from "react";
import projectData from "../../data/project";
import "./projects.css";

const Project = () => {
  return (
    <div className="py-5 bg-dark text-white text-center" id="projects">
      <div className="container">
        <h2 className="mb-3 fw-bold">
          My <span className="text-primary">Projects</span>
        </h2>
        <h5 className="mb-5">Here are some things I've built</h5>

        <div className="d-flex flex-column gap-5">
          {projectData.map((project, index) => (
            <div key={index} className="row align-items-center project-entry g-4 text-start">
              <div className="col-md-6">
                <div className="image-container position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded main-image"
                  />
                  <img
                    src={project.hoverImage}
                    alt={`${project.title} Hover`}
                    className="img-fluid rounded hover-image"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="fw-bold mb-2 ">{project.title}</h4>
                <p>{project.description}</p>

                <ul className="features-list ps-3 mb-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="badge bg-secondary">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  <i className="fa-solid fa-link me-2"></i>View Project
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Project;
