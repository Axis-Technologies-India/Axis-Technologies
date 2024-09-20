import AboutUs from "../Sections/AboutUs"
import Landing from "../Sections/Landing/Landing"
import Services from "../Sections/Services"
import Faq from "../Sections/Faq"
import Client from '../Sections/Client'
import React from 'react'

const Home = () => {
  return (
    <div>
        {/*<Landing/>*/}
        <AboutUs/>
        <Services/>
        <Faq/>
        <Client/>
    </div>
  )
}

export default Home