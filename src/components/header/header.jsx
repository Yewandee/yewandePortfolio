import React, { useState } from "react";
import "../header/header.css";


const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleToggle = () => {
    setMobileMenu(!mobileMenu);
  };



  return (
    <section className="navbars bg-dark text-white sticky-top pe-2 ps-2">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid d-flex">
          <a className="navbar-brand text-white" href="/">
            <h3>Yewande</h3>
          </a>

          <button
            className="navbar-toggler text-white "
            type="button"
            onClick={handleToggle}
            aria-controls="navbarNav"
            aria-expanded={mobileMenu ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            {mobileMenu ? (
              <i className="fas fa-times close home-bth text-white"></i>
            ) : (
              <span className="navbar-toggler-icon home-toggle text-white"><i class="fa-solid fa-bars"></i></span>
            )}
          </button>
          <div
            className={`collapse navbar-collapse justify-content-center ${
              mobileMenu ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <a className="nav-link text-white" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/my-projects">
                  My Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact-me">
                  Contact Me
                </a>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;


// import React, { useState } from "react";

// const Navbar = () => {
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const handleToggle = () => setMobileMenu(!mobileMenu);

//   return (
//     <nav className="flex items-center justify-between px-4 py  mx-auto">
//       <a className="text-white text-2xl font-bold" href="/">
//         Rilwan Biobaku
//       </a>

//       <a className="text-white text-2xl font-bold" href="/">
//         Rilwan Biobaku
//       </a>

//       <button
//         className="md:hidden text-white focus:outline-none"
//         onClick={handleToggle}
//         aria-label="Toggle navigation"
//       >
//         {mobileMenu ? (
//           <i className="fas fa-times text-xl"></i>
//         ) : (
//           <i className="fa-solid fa-bars text-xl"></i>
//         )}
//       </button>

//       <div
//         className={`${
//           mobileMenu ? "block" : "hidden"
//         } w-full md:flex md:items-center md:justify-center md:space-x-6 mt-4 md:mt-0`}
//       >
//         <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-white">
//           <li>
//             <a className="hover:text-gray-300" href="/">
//               Home
//             </a>
//           </li>
//           <li>
//             <a className="hover:text-gray-300" href="/about">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="/services" className="hover:text-gray-300">
//               Services
//             </a>
//           </li>

//           <li>
//             <a className="hover:text-gray-300" href="/projects">
//               Projects
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div className="hidden md:flex md:items-center md:justify-end space-x-4">
//         <a className="hover:text-gray-300 flex justify-end" href="/contact-me">
//           <button className="hover:text-gray-300">Contact Me</button>
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;'


import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleToggle = () => setMobileMenu(!mobileMenu);

  return (
    <nav className="relative bg-gray-900 text-white px-4 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <a className="text-2xl font-bold" href="/">
          Rilwan
        </a>

        {/* Toggle button */}
        <button
          className="md:hidden z-50"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          {mobileMenu ? (
            <i className="fas fa-times text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 bg-gray-900 transform ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <div className="p-6 pt-24 flex flex-col h-full justify-between">
          <ul className="flex flex-col gap-6 text-white text-lg">
            <li>
              <a href="/" onClick={() => setMobileMenu(false)} className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" onClick={() => setMobileMenu(false)} className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/services" onClick={() => setMobileMenu(false)} className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="/projects" onClick={() => setMobileMenu(false)} className="hover:text-gray-300">
                Projects
              </a>
            </li>
          </ul>

          {/* Contact Button at the bottom */}
          <div className="mt-10">
            <a href="/contact-me" onClick={() => setMobileMenu(false)}>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md transition duration-300">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex justify-between items-center mt-4">
        <ul className="flex gap-6">
          <li>
            <a className="hover:text-gray-300" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="/services">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="/projects">
              Projects
            </a>
          </li>
        </ul>
        <a href="/contact-me">
          <button className="ml-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300">
            Contact Me
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
