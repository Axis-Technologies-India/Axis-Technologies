const AboutImage = () =>{
    return <div className="lg:w-[60%] lg:h-[31rem] sm:h-[30rem] w-full h-[23rem]">
        <div className="grid grid-rows-3 grid-cols-2 lg:gap-7 gap-3 h-full">
            <div className="flex items-end justify-center  row-start-1 row-span-2 col-start-1 col-span-1 bg-[url('https://images.pexels.com/photos/3822900/pexels-photo-3822900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center">
                <div className="relative top-5 p-3 border-primaryColor border-[1px] rounded-[50%]">
                <div className=" bg-white sm:min-w-[4rem] min-w-[3rem] min-h-[3rem] rounded-[50%] shadow-lg  sm:min-h-[4rem]"></div>
                </div>
                
            </div>
            <div className="row-start-2 row-span-2 col-start-2 col-span-1 bg-[url('https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        </div>
    </div>
}

export default AboutImage;