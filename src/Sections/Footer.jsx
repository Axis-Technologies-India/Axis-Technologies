import { PiArrowFatLineRightThin } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import aboutdata from '../Utils/AboutData'
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return <footer className="bg-secondaryColor py-[5rem]">
        <div className="lg:w-[70%] w-[90%] mx-auto gap-[2rem] flex lg:flex-row flex-col-reverse items-center lg:justify-between lg:items-start">
            <div className="flex flex-col gap-4 my-4">
                <p className="text-desc">We Leverage Cutting Edge Technologies</p>
                <div className="flex">
                    <input type="text" placeholder="Email Address" className="px-[0.9rem] w-[80%] py-[0.8rem] text-[0.8rem]"></input>
                    <button className="bg-primaryColor w-[20%] border-[7px] border-white flex justify-center items-center">{<PiArrowFatLineRightThin style={{ color: "white" }} />}</button>
                </div>
                <div className="flex flex-row lg:justify-start justify-center gap-3">
                    <a href="#" className=" text-gray-400 text-[1.8rem] rounded-[50%]"><FaFacebook /></a>
                    <a href="#" className=" text-gray-400 text-[1.8rem] rounded-[50%]"><FaTwitter /></a>
                    <a href="#" className=" text-gray-400 text-[1.8rem] rounded-[50%]"><FaInstagramSquare /></a>
                </div>
            </div>

            <div className="flex flex-col gap-1  lg:items-start items-center justify-start">
                <p className="text-sec-head text-white my-2">Our Links</p>
                <Link to={'/'} className="text-desc" >Home</Link>
                <Link to={'/aboutus'} className="text-desc" >About Us</Link>
                <Link to={'/services'} className="text-desc" >Services</Link>
                <Link to={'/products'} className="text-desc" >Products</Link>
                <Link to={'/contactus'} className="text-desc" >Contact Us</Link>
            </div>

            <div className="flex flex-col gap-3 lg:w-[33%] lg:items-start items-center">
                <p className="text-sec-head text-white my-2">Contact Us</p>
                <div className="flex flex-col gap-4">
                    {
                        aboutdata.map((item, id) => {
                            return <div className="flex flex-row justify-between items-center gap-4">
                                <div className="bg-primaryColor flex items-center justify-center min-w-[2rem] min-h-[2rem] rounded-[50%]">
                                    <MdOutlineEmail />
                                </div>
                                <p className="text-desc"><a href={`mailto:${item.email}`}>{item.email}</a></p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </footer>
}

export default Footer