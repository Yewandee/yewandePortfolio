import React from 'react'
import Home from '../components/home/home'
import TechStack from '../components/techstack/techstack'
import Contact from '../components/contact/contact'
import Projects from '../components/projects/projects'

const Pages = () => {
  return (
    <div>
      <Home/>
      <TechStack/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Pages