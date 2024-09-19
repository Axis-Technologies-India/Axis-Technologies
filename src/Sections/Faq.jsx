import FaqQuestions from "../Components/Faq/FaqQuestions"
import FaqContact from "../Components/Faq/FaqContact"

const Faq = () => {
    return <div className="w-full relative z-[0] py-[3rem] lg:pb-[5.5rem] lg:pt-[9rem] bg-secondaryColor overflow-hidden flex justify-center">
        <div className="absolute opacity-[0.15] z-[-1] left-[0] blur-[10px] bottom-[0] w-[15rem] h-[15rem] rounded-t-[50%] rounded-br-[50%] bg-gradient-to-tr from-primaryColor"></div>
        <div className="absolute opacity-[0.15] z-[-1] right-[0] blur-[10px] bottom-[50] w-[15rem] h-[15rem] rounded-[50%]  bg-gradient-to-l from-primaryColor"></div>
        <div className="lg:block hidden w-[5rem] h-[12rem] z-[-1] rotate-[54deg] absolute right-[0] top-[20%] bg-black"></div>
        <div className="lg:block hidden w-[5rem] h-[12rem] z-[-1] rotate-[54deg] absolute right-[-3%] top-[38%] bg-primaryColor"></div>
        <div className="lg:w-[70%] w-[90%] flex lg:flex-row flex-col gap-[3rem] z-6">
            <FaqQuestions/>
            <FaqContact/>
        </div>
    </div>

}

export default Faq