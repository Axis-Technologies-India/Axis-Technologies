
const FaqContact = () =>{
    return <form className="lg:w-[50%] w-full bg-white p-6 flex items-center justify-center">
        <div className="w-[98%] md:w-[90%]">
        <p className="text-black text-[2rem] lg:text-[2.7rem] font-bold mb-[2rem]">Get In Touch Now!</p>
        <div className="flex flex-col gap-5">
            <input type="text" placeholder="Full Name" className="border-[1px] border-black p-4 w-full"></input>
            <input type="email" placeholder="Email Address" className="border-[1px] border-black p-4 w-full"></input>
            <input type="text" placeholder="Phone Number" className="border-[1px] border-black p-4 w-full"></input>
            <input type="text-area" placeholder="Message.." className="border-[1px] border-black p-4 w-full"></input>
            <input type="submit" value="SUBMIT NOW" className="bg-primaryColor text-white py-3 text-[0.8rem]"></input>
        </div>
        </div>
    </form>
}

export default FaqContact