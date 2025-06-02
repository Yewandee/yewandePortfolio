import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import './index.css'
import Header from './components/header/header'
import Pages from "./pages/Pages";
import Project from "./components/projects/Project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import About from "./components/about/about";

function App() {

  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-projects" element={<Project />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </Router>
    <Footer/>
    </>
  )
}

export default App
