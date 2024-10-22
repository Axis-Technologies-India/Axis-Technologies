import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const FoundersDesc = ({ aboutdata }) => {
    const {name, position, experience, email, phone} = aboutdata;

    return (
        <div className="flex flex-col lg:w-[50%] w-[100%] gap-[1.3rem] text-justify">
            {/* <p className="text-sec">ABOUT US</p> */}
            <p className="text-head text-nowrap">{name}</p>
            <p className="text-desc">{experience}</p>
            <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-center justify-start">
                    <div className="bg-primaryColor min-w-[4rem] min-h-[4rem] rounded-[50%] shadow-lg flex items-center justify-center">
                        <FaMailBulk className="text-white min-w-[2rem] min-h-[2rem]" />
                    </div>
                    <div className="flex flex-col">
                        <a  className="text-sec-head">{email}</a>
                        {/* href={`mailto:${email}`} <p className="text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sint.</p> */}
                    </div>
                </div>

                <div className="flex gap-4 items-center justify-start">
                    <div className="bg-primaryColor min-w-[4rem] min-h-[4rem] rounded-[50%] shadow-lg flex items-center justify-center">
                        <FaPhoneAlt className="text-white min-w-[2rem] min-h-[2rem]" />
                    </div>
                    <div className="flex flex-col">
                    <a  className="text-sec-head">{phone}</a>
                    {/* href={`tel:${phone}`} <p className="text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sint.</p> */}
                    </div>
                </div>

                {/* <a className="bg-primaryColor w-[7rem] sm:w-[9rem] sm:p-4 p-2 sm:px-6 mt-[0.3rem] text-[0.7rem] text-white">DISCOVER MORE</a> */}

            </div>
        </div>
    )
}

export default FoundersDesc