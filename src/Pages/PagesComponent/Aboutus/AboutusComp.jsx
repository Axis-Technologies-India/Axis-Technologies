import AboutusDesc from "./AboutusCompDesc/AboutusDesc";
import AboutusImage from "./AboutusCompDesc/AboutusImage";
import aboutData from "../../../Utils/AboutData";

const AboutusComp = () => {
  return (
    <div className='flex flex-col lg:my-6 gap-1'>
      <p className="text-head text-center text-primaryColor mt-6">Founders</p>
      {
        aboutData.map((item, id) => {
          return (
            <div key={id} className="lg:w-[70%] sm:w-[80%] w-[90%] my-[1rem] lg:my-[2rem] gap-[2rem] mx-auto flex lg:flex-row flex-col">
              <AboutusImage />
              <AboutusDesc aboutdata={item} />
            </div>
          )
        })
      }

    </div>
  )
}

export default AboutusComp