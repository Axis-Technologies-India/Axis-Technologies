
let image = ["https://logovtor.com/wp-content/uploads/2020/01/haimer-logo-vector.png"]
const ClientLogo = ()=>{
    return <div className="lg:w-[50%] w-full flex flex-col gap-[3rem] justify-between">
        <div className="flex gap-2 justify-between">
            <img src={image[0]} className="min-w-[4rem] max-w-[5rem] max-h-[3rem]"></img>
            <img src={image[0]} className="min-w-[4rem] max-w-[5rem] max-h-[3rem]"></img>
            <img src={image[0]} className="min-w-[4rem] max-w-[5rem] max-h-[3rem]"></img>
            <img src={image[0]} className="min-w-[4rem] max-w-[5rem] max-h-[3rem]"></img>
        </div>
        <div className="flex gap-2 justify-between">
            <img src={image[0]} className="min-w-[4rem] max-w-[5rem] max-h-[3rem]"></img>
            <img src={image[0]} className="min-w-[4rem] max-w-[5rem] max-h-[3rem]"></img>
            <img src={image[0]} className="min-w-[4rem] max-w-[5rem] max-h-[3rem]"></img>
            <img src={image[0]} className="min-w-[4rem] max-w-[5rem] max-h-[3rem]"></img>
        </div>
        <div className="flex gap-2 justify-between">
            <img src={image[0]} className="min-w-[4rem] max-w-[5rem] max-h-[3rem]"></img>
            <img src={image[0]} className="min-w-[4rem] max-w-[5rem] max-h-[3rem]"></img>
            <img src={image[0]} className="min-w-[4rem] max-w-[5rem] max-h-[3rem]"></img>
            <img src={image[0]} className="min-w-[4rem] max-w-[5rem] max-h-[3rem]"></img>
        </div>
    </div>
}

export default ClientLogo