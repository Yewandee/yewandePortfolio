import React from "react";
import projectData from "../../data/project";
import "./projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectCard = () => {
  return (
    <div className="py-5 bg-dark text-white text-center" id="projects">
      <div className="container">
        <h2 className="mb-5 fw-bold">
          My <span className="text-primary">Projects</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card-wrapper">
                <div className="project-card bg-white text-dark shadow-lg">
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="main-image"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="fw-bold text-primary">{project.title}</h4>
                    <p className="mb-3">{project.description}</p>

                    <div className="tech-stack d-flex flex-wrap justify-content-center gap-3 my-3">
                      {project.tech?.map((tech, i) => (
                        <div key={i} className="badge bg-secondary">
                          {tech}
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary mt-3"
                    >
                      <i className="fa-solid fa-link me-2"></i>View Project
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectCard;
