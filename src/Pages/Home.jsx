import AboutUs from "../Sections/AboutUs"
import Landing from "../Sections/Landing/Landing"
import Services from "../Sections/Services"
import Faq from "../Sections/Faq"

import React from 'react'

const Home = () => {
  return (
    <div>
        {/*<Landing/>*/}
        <AboutUs/>
        <Services/>
        <Faq/>
    </div>
  )
}

export default Home