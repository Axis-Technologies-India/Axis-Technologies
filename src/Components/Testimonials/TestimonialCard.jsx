import { GoPersonFill } from "react-icons/go";

const TestimonialCard = (props) => {
    return <div className={`relative min-h-[20rem] shadow-lg mx-[0.5rem] bg-white flex flex-col rounded-lg`}>
        <div className='w-full min-h-[7.5rem] bg-cover bg-center flex items-end rounded-lg' style={{ backgroundImage: `url(${props.img})` }}>
            <div className="bg-primaryColor min-w-[4rem] min-h-[4rem] ml-[1.3rem] relative top-[2rem] rounded-[50%] border-[8px] border-white flex items-center justify-center">
                <GoPersonFill className=" text-white min-w-[1rem] min-h-[1rem]"/>
            </div>
        </div>
        <div className="flex flex-col w-[80%] mt-[2.5rem] mx-auto justify-end h-full gap-2">
            <div className="flex flex-col gap-1">
                <p className="text-sec-head">{props.head}</p>
                <p className="text-desc text-primaryColor">Our Client</p>
            </div>
            <p className="text-desc">{props.desc}</p>
        </div>
    </div>
}

export default TestimonialCard;

// ${(props.no%2==0)?'bottom-[0.8rem]':'top-[0.8rem]'}