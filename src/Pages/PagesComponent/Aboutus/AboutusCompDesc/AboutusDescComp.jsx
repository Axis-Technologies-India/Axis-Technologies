import { IoMdConstruct } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";

const AboutusDescComp = () => {
    return <div className="flex flex-col lg:w-[50%] w-[100%] gap-[1.3rem]">
        {/* <p className="text-sec">ABOUT US</p> */}
        <p className="text-head text-nowrap">Your Partner in <br/>Excellence</p>
        <p className="text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae doloribus, velit obcaecati quam saepe deserunt ullam adipisci numquam deleniti laboriosam. Nobis!</p>
        <div className="flex flex-col gap-5">
            <div className="flex gap-4 items-center justify-start">
                <div className="bg-primaryColor min-w-[4rem] min-h-[4rem] rounded-[50%] shadow-lg flex items-center justify-center">
                    <IoMdConstruct className="text-white min-w-[2rem] min-h-[2rem]" />
                </div>
                <div className="flex flex-col">
                    <p className="text-sec-head">Expert Engineer</p>
                    <p className="text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sint.</p>
                </div>
            </div>

            <div className="flex gap-4 items-center justify-start">
                <div className="bg-primaryColor min-w-[4rem] min-h-[4rem] rounded-[50%] shadow-lg flex items-center justify-center">
                    <IoIosPeople className="text-white min-w-[3rem] min-h-[3rem]" />
                </div>
                <div className="flex flex-col">
                    <p className="text-sec-head">Certified Engineer</p>
                    <p className="text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sint.</p>
                </div>
            </div>

            {/* <Link to={'/aboutus'} >
                <button className="bg-primaryColor w-[7rem] sm:w-[9rem] sm:p-4 p-2 sm:px-6 mt-[0.3rem] text-[0.7rem] text-white">DISCOVER MORE</button>
            </Link> */}

        </div>
    </div>
}

export default AboutusDescComp;