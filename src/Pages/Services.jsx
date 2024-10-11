import landingimage from "../Utils/bgimage";

const Services = () => {
  return (
    <div>
      <div className={`w-[100dvw] h-[40dvh] lg:h-[50dvh] bg-top bg-cover overflow-hidden overflow-y-hidden relative flex flex-col items-center justify-center`} style={ {backgroundImage : `URL(${landingimage})`} }>
      <h1 className='text-head text-black uppercase'>Services</h1>
        <div className="w-full h-full absolute z-10 bg-gradient-to-t from-primaryColor  via-transparent to-transparent bottom-0 opacity-30"></div>
      </div>
    </div>
  )
}

export default Services;