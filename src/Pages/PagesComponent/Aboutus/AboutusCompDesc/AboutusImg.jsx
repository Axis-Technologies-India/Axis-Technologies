import { IoMdConstruct } from "react-icons/io";

const AboutusImg = () => {
    return <div className="lg:w-[60%] lg:h-[31rem] sm:h-[30rem] w-full h-[23rem]">
        <div className="grid grid-rows-3 grid-cols-2 lg:gap-7 gap-3 h-full">
            <div className="flex items-end justify-center row-start-2 row-span-2 col-start-1 col-span-1 bg-[url('https://plus.unsplash.com/premium_photo-1682146891912-6bc7768da82e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
                <div className="relative top-5 p-3 border-primaryColor border-[1px] rounded-[50%]">
                    <div className=" bg-white sm:min-w-[4rem] min-w-[3rem] min-h-[3rem] rounded-[50%] shadow-lg  sm:min-h-[4rem] flex items-center justify-center">
                        <IoMdConstruct className="text-primaryColor min-w-[2rem] min-h-[2rem]" />
                    </div>
                </div>
            </div>
            <div className="flex items-end justify-center row-start-1 row-span-2 col-start-2 col-span-1 bg-[url('https://images.unsplash.com/photo-1584549239925-5554aa6b9183?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
            <div className="relative top-5 p-3 border-primaryColor border-[1px] rounded-[50%]">
                    <div className=" bg-white sm:min-w-[4rem] min-w-[3rem] min-h-[3rem] rounded-[50%] shadow-lg  sm:min-h-[4rem] flex items-center justify-center">
                        <IoMdConstruct className="text-primaryColor min-w-[2rem] min-h-[2rem]" />
                    </div>
                </div>
            </div>
            {/* <div className="row-start-3 row-span-2 col-start-2 col-span-1 bg-[url('https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div> */}
            {/* <div className="row-start- row-span-1 col-start-2 col-span-2 bg-[url('https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div> */}

        </div>
    </div>
}

export default AboutusImg;