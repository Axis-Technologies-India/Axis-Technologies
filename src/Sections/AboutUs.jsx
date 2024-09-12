import AboutImage from "../Components/AboutUs/AboutImage"
import AboutDescription from "../Components/AboutUs/AboutDescription"

const AboutUs = () =>
{
    return <><div id="AboutUs" className="lg:w-[70%] sm:w-[80%] w-[90%] my-[2rem] gap-[2rem] mx-auto flex lg:flex-row flex-col">
        <AboutImage/>
        <AboutDescription/>
    </div>
    <div className="w-full flex justify-center items-center gap-[1rem] sm:gap-[2rem] lg:gap-[3rem]">
            <p className="lg:text-[9rem] text-[12vw] font-extrabold text-gray-300">2018</p>
            <div className="lg:min-w-[6rem] min-w-[8vw] min-h-[8vw] lg:min-h-[6rem] bg-primaryColor rounded-[50%] flex justify-center items-center">
                <p className="text-white text-[1rem] lg:text-[2rem]">+</p>
            </div>
            <p className="lg:text-[9rem] text-[12vw] font-extrabold text-gray-300">Since</p>
    </div>
    </>
}

export default AboutUs