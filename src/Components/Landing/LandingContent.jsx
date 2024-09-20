import { LiaGreaterThanSolid } from "react-icons/lia";

const LandingContent = () => {

  const content = ['We are the industry solution to grow']
  const buttonContent = ['Discover More ', 'Contact Us']  
  
  return (
    <div className="lg:w-[70dvw] h-[80dvh] m-auto lg:mt-[20vh] text-white grid lg:grid-cols-2 grid-rows-none place-items-center ">
      <div className="flex flex-col gap-8 p-4 ">
        <h1 className="text-head capitalize">{content[0]}</h1>
        <h1 className="text-[3.5vw] lg:text-[1vw] text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, consectetur unde praesentium aspernatur fuga saepe.</h1>
        <div className="custom-flex gap-8 w-full">
          {
            buttonContent.map((item, index)=>{
              return  <div key={index} className="relative z-0">
              <span class="absolute z-10 -top-1 -right-2 flex h-4 w-4">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
              </span>
              <button className='custom-button text-[3vw] lg:text-[1vw] font-semibold'>{item}</button>
              </div>
            })
          }
         
          {/* <button className='custom-button text-[.8rem]'></button> */}
        </div>
      </div>
      <div className="hidden lg:block">

      </div>
    </div>
  )
}

export default LandingContent;