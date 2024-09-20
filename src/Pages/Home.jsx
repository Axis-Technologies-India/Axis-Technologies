import AboutUs from "../Sections/AboutUs"
import Landing from "../Sections/Landing"
import Services from "../Sections/Services"
import Faq from "../Sections/Faq"
import Client from '../Sections/Client'
import React from 'react'
import Navbar from "../Sections/Navbar"
import Process from "../Sections/Process"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutUs />
      <Services />
      <Process />
      <Faq />
      <Client />
    </div>
  )
}

export default Home