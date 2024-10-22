import { GoPersonFill } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = (props) => {
    const star = [1, 2, 3, 4, 5];

    return <div className={`relative min-h-[16rem] shadow-lg mx-[0.5rem] bg-white flex flex-col rounded-lg`}>
        <FaQuoteLeft className="absolute opacity-40 z-20 -top-1 -right-2 text-primaryColor text-[3rem]"/>

        <div className="flex flex-col w-[80%] mt-[2.5rem] mx-auto justify-end h-full">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-start gap-4">
                    <div className="w-[3rem] h-[3rem] rounded-full bg-center bg-cover" style={{ backgroundImage: `url(https://avatar.iran.liara.run/public/${props.no})` }}></div>
                    <p className="text-sec">{props.head}</p>
                </div>

                <div className="flex gap-2 mt-1 w-full justify-center">
                    {
                        star.map((_, id) => {
                            return <FaStar className="text-[1.1rem] text-yellow-500" />
                        })
                    }
                </div>
                <p className="text-desc text-primaryColor">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae libero nulla ex quia numquam temporibus ullam...</p>
            </div>
        </div>
    </div>
}

export default TestimonialCard;

// ${(props.no%2==0)?'bottom-[0.8rem]':'top-[0.8rem]'}
// style={{ backgroundImage: `url(${props.img})` }}