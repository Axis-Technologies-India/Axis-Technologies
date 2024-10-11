import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const LandingContent = () => {

  const content = ['We are the industry solution to grow']
  const buttonContent = ['Discover More ', 'Contact Us']

  const onButtonClick = () => {

    fetch("/axistechnologies.pdf").then((response) => {
      response.blob().then((blob) => {

        const fileURL =
          window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "axistechnologies.pdf";
        alink.click();
      });
    });
  };


  return (
    <div className="lg:w-[70dvw] h-[80dvh] m-auto lg:mt-[20vh] text-black grid lg:grid-cols-2 grid-rows-none place-items-center">
      <div className="flex flex-col gap-8 p-4 ">
        <h1 className="text-head capitalize">{content[0]}</h1>
        <h1 className="text-[3.5vw] lg:text-[1vw] text-black"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, consectetur unde praesentium aspernatur fuga saepe.</h1>
        <div className="custom-flex gap-8 w-full">

          {/* ---Button Content--- */}
          <div className="relative z-0 " onClick={onButtonClick}>
            <span class="absolute z-10 -top-1 -right-2 flex h-4 w-4">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primaryColor opacity-75"></span>
              <span class="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
            </span>
            <button className='custom-button text-[3vw] lg:text-[1vw] font-semibold '>Discover More</button>
          </div>

          <div className="relative z-0">
            <span class="absolute z-10 -top-1 -right-2 flex h-4 w-4">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span class="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
            </span>
            <Link to={'/contactus'}>
              <button className='custom-button text-[3vw] lg:text-[1vw] font-semibold'>Contact Us</button>
            </Link>
          </div>

          {/* ---Button Content---- */}
        </div>
      </div>
      <div className="hidden lg:block">

      </div>
    </div>
  )
}

export default LandingContent;