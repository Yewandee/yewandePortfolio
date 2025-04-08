import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "../contact/contact";

// Import Avatar
import Avatar from "../../assets/avatar.png";

const techStack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Vue.js",
  "TypeScript",
  "Bootstrap",
  "Tailwind Css",
  "Git",
  "GitHub",
  "VS Code",
  "Firebase",
];

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="about-page bg-dark text-white position-relative overflow-hidden">
      <div className="position-absolute top-0 start-0 translate-middle rounded-circle bg-primary opacity-100 blur-circle animate-pulse"></div>
      <div className="position-absolute top-50 start-100 translate-middle rounded-circle bg-primary opacity-75 blur-circle animate-pulse"></div>

      <div className="container text-white ">
        <div className="row py-5 d-flex mb-5">
          <div className="col-lg-6 text-center text-lg-start mt-5 ps-2">
            <div data-aos="fade-up" data-aos-duration="1000">
              <h2 className="mb-3">Who Am I?</h2>
              <p>
                Hi, I'm <strong>Yewande Biobaku</strong>, a Front-End Web
                Developer with over 2 years of experience. I have a strong foundation
                in Computer Science and a passion for crafting clean,
                responsive, and accessible user interfaces. I enjoy turning
                ideas into reality through code and design. I love building
                interactive and visually appealing web experiences. I enjoy
                working with JavaScript, React, and Vue.js to create dynamic,
                user-friendly applications. Let’s build something awesome!
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1200">
             
              <p>
                I love learning and growing with every project. I believe in
                clean code, user-first design, and building things that make a
                difference. Whether working solo or in a team, I strive to
                deliver with excellence.
              </p>
            </div>

            <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
              <a
                href="#"
                className="btn btn-primary btn-lg"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                See my Resume
              </a>
              <a
                href="#"
                className="btn btn-outline-light btn-lg"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-column align-items-center mt-4">
            <div className="img " data-aos="zoom-in">
              <img
                src={Avatar}
                alt="Yewande Biobaku"
                className="img-fluid border border-primary border-5 rounded-circle"
                style={{ width: "250px", height: "250px" }}
              />
            </div>

            <div className="mt-3 d-flex gap-3">
              <a
                href="#"
                target="_blank"
                className="btn btn-outline-light"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                target="_blank"
                className="btn btn-outline-light"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                target="_blank"
                className="btn btn-outline-light"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="#"
                target="_blank"
                className="btn btn-outline-light"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <i className="fab fa-x"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-column align-items-center mt-3">
            <div className="tech-stack d-flex flex-column align-items-center my-5 ">
              <h3 className="mb-4" data-aos="fade-down">
                Tech Stack <span className="text-primary"> & Tools</span>
              </h3>
              <div className="d-flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="badge p-3 bg-secondary"
                    data-aos="zoom-in-down"
                  >
                    <span className="fs-6">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-column align-items-center mt-3">
            <div className="my-5" >
              <h3 className="mb-3" data-aos="fade-down">
                Soft <span className="text-primary">Skills</span>
              </h3>
              <ul>
                <li data-aos="fade-down" data-aos-duration="1000">Good communication & project management skills</li>
                <li data-aos="fade-down" data-aos-duration="1100">Attention to detail</li>
                <li data-aos="fade-down" data-aos-duration="1200">Problem-solving and troubleshooting</li>
                <li data-aos="fade-down" data-aos-duration="1300">Adaptability and quick learning</li>
                <li data-aos="fade-down" data-aos-duration="1400">Time management</li>
                <li data-aos="fade-down" data-aos-duration="1500">Critical thinking</li>
                <li data-aos="fade-down" data-aos-duration="1600">Feedback receptiveness</li>
              </ul>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </section>
  );
};

export default About;
