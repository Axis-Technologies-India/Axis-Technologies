
const ServicesCard = (props) => {
    return <div className={`relative ${(props.no%2==0)?'bottom-[0.8rem]':'top-[0.8rem]'} min-h-[20rem] shadow-lg mx-[0.5rem]  bg-white flex flex-col`}>
        <div className= 'w-full min-h-[10.5rem] bg-cover bg-center flex items-end' style={{backgroundImage:`url(${props.img})`}}>
            <div className="bg-primaryColor min-w-[4rem] min-h-[4rem] ml-[1.3rem] relative top-[2rem] rounded-[50%] border-[8px] border-white"></div>
        </div>
        <div className="flex flex-col w-[80%] mt-[2.5rem] mx-auto justify-end h-full gap-4">
            <p className="text-sec-head">{props.head}</p>
            <p className="text-desc">{props.desc}</p>
            <button className="bg-primaryColor max-w-[2.5rem] min-h-[2.5rem]"></button>
        </div>
    </div>
}

export default ServicesCard 