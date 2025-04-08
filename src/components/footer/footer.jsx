import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const currentYear = new Date().getFullYear();

  const Links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yewande-biobaku-65a685239/",
      icon: "fab fa-linkedin",
    },
    {
      name: "GitHub",
      href: "https://github.com/Yewandee",
      icon: "fab fa-github",
    },
    {
      name: "Email",
      href: "mailto:ybiobaku1@gmail.com",
      icon: "fas fa-envelope",
    },
    {
      name: "Twitter",
      href: "https://x.com/yewande__",
      icon: " fab fa-x",
    },
  ];

  return (
    <footer className="bg-dark text-light py-3 border-top border-secondary ">
      <div className="container text-center">
        <div className="mb-4">
          {Links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-3"
              aria-label={link.name}
            >
              <i
                className={` ${link.icon}`}
                style={{ fontSize: "1.25rem" }}
              ></i>
            </a>
          ))}
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-end align-items-center mb-3 small text-white">
          <span>&copy; {currentYear} Yewande Biobaku</span>
          <span className="mx-2 d-none d-sm-inline">|</span>
          <span className="d-flex align-items-center gap-1">
            Built with React and Bootstrap
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
