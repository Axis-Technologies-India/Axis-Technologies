import FaqContact from "../Components/Faq/FaqContact";
import ContactMap from "./PagesComponent/Contactus/ContactMap";
import landingimage from "../Utils/bgimage";

const Contactus = () => {
  return (
    <div>
      <div className={`w-[100dvw] h-[40dvh] lg:h-[50dvh] bg-top bg-cover overflow-hidden overflow-y-hidden relative flex flex-col items-center justify-center`} style={ {backgroundImage : `URL(${landingimage})`} }>
      <h1 className='text-head text-black uppercase'>Contact US</h1>
        <div className="w-full h-full absolute z-10 bg-gradient-to-t from-primaryColor  via-transparent to-transparent bottom-0 opacity-30"></div>
      </div>
    

      <div className="lg:w-[70%] sm:w-[80%] w-[90%] flex lg:flex-row flex-col z-6 mx-auto my-4">            
            <ContactMap/>
            <FaqContact/>
        </div>

    </div>
  )
}

export default Contactus