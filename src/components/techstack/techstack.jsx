import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TechStack = () => {
  const technologies = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://www.svgrepo.com/show/374118/tailwind.svg", 
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
  ];

  return (
    <section className="py-5 bg-dark text-center text-white position-relative overflow-hidden">
      <div className="position-absolute top-100 start-100 translate-middle rounded-circle bg-primary opacity-75 blur-circle animate-pulse"></div>
      <div className="position-absolute top-0 start-0 translate-middle rounded-circle bg-primary opacity-100 blur-circle animate-pulse"></div>
      <div className="container">
        <h2 className="mb-4">
          Tech <span className="text-primary">Stack</span>
        </h2>
        <div className="row justify-content-center gap-2">
          {technologies.map((tech, index) => (
            <div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center p-3 border rounded shadow-sm bg-white"
            data-aos="zoom-in"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="img-fluid mb-2"
              style={{ width: "60px", height: "60px", objectFit: "contain" }}
            />
            <span className="fw-semibold text-dark text-center small">{tech.name}</span>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
