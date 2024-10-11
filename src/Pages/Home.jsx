import AboutUs from "../Sections/AboutUs"
import Landing from "../Sections/Landing"
import Services from "../Sections/Services"
import Faq from "../Sections/Faq"
import Client from '../Sections/Client'
import React from 'react'
import Navbar from "../Sections/Navbar"
import Process from "../Sections/Process"
import Testimonials from "../Sections/Testimonial"

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Landing />
      <AboutUs />
      <Services />
      <Process />
      {/* Products here */}
      <Testimonials/>
      <Client />
      <Faq />
    </div>
  )
}

export default Home