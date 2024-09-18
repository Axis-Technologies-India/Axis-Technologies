import { useEffect, useState } from "react";
import LandingContent from "./LandingContent";
import Navbar from "./Navbar";

const Landing = () => {
  
  const images = ['custom-image1', 'custom-image2','custom-image1','custom-image2']

  const [bg, setbg] = useState(images[0])

  useEffect(() => {

    const interval = setInterval(() => {
      setbg(prev => {
        const curr = images.indexOf(prev);
        const next = (curr + 1) % images.length;
        return images[next];
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [images])


  return (
    <div className={`w-[100vw] h-[100vh] bg-custom-image1 bg-center bg-cover overflow-hidden overflow-y-hidden`}>
      <LandingContent />
      <div className="w-full h-full absolute z-0 bg-gradient-to-t from-primaryColor  via-transparent to-transparent bottom-0 opacity-30"></div>
    </div>
  )
}

export default Landing;