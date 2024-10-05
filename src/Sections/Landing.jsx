import { useEffect, useState } from "react";
import LandingContent from "../Components/Landing/LandingContent";

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
    <div className={`w-[100dvw] h-[100dvh] lg:h-[100dvh] bg-custom-image1 bg-center bg-cover overflow-hidden overflow-y-hidden relative flex flex-col items-center justify-center`}>
      <LandingContent />
      <div className="w-full h-full absolute z-10 bg-gradient-to-t from-primaryColor  via-transparent to-transparent bottom-0 opacity-30"></div>
    </div>
  )
}

export default Landing;