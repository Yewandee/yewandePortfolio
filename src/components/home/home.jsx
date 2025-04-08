import React, { useEffect } from "react";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

// Import Avatar
import Avatar from "../../assets/avatar.png";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="home bg-dark text-white position-relative overflow-hidden">
      <div className="position-absolute top-0 start-0 translate-middle rounded-circle bg-primary opacity-100 blur-circle animate-pulse"></div>
      <div className="position-absolute top-100 start-100 translate-middle rounded-circle bg-primary opacity-75 blur-circle animate-pulse"></div>

      <div className="container">
        <div className="row py-5 d-flex mb-5">
          <div className="col-lg-6 text-center text-lg-start mt-5 ps-5">
            <h1 className="fw-bold display-6 pt-5">
              <Typewriter
                words={["Hi, I'm Yewande Biobaku"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </h1>

            <p className="lead mt-3" data-aos="fade-up">
              I love building interactive and visually appealing web
              experiences. I enjoy working with JavaScript, React, and Vue.js to
              create dynamic, user-friendly applications. Let’s build something
              awesome!
            </p>

            <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
              <a
                href="#"
                className="btn btn-primary btn-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                See my Resume
              </a>
              <a
                href="/contact-me"
                className="btn btn-outline-light btn-lg"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-column align-items-center mt-3">
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
                href="https://github.com/Yewandee"
                target="_blank"
                className="btn btn-outline-light"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yewande-biobaku-65a685239/"
                target="_blank"
                className="btn btn-outline-light"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:ybiobaku1@gmail.com"
                target="_blank"
                className="btn btn-outline-light"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://x.com/yewande__"
                target="_blank"
                className="btn btn-outline-light"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <i className="fab fa-x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
