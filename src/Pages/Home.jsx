import AboutUs from "../Sections/AboutUs"
import Landing from "../Sections/Landing"
import Services from "../Sections/Services"
import Faq from "../Sections/Faq"
import Client from '../Sections/Client'
import React from 'react'
import Process from "../Sections/Process"
import ProdPartner from "../Sections/ProdPartner"
import Testimonials from "../Sections/Testimonial"

const Home = () => {
  return (
    <div>
      <Landing />
      <AboutUs />
      <Services />
      <Process />
      <ProdPartner/>
      {/* Products here */}
      <Testimonials/>
      <Client />
      <Faq />
    </div>
  )
}

export default Home