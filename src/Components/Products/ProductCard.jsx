

const ProductCard = (props)=>{
    return <div className="border-[1px] items-center border-gray-300 flex flex-col aspect-[5/8] w-[15rem] sm:w-[16rem]">
        <img src={props.url} className="w-[100%] min-h-[14rem] sm:min-h-[15rem] max-h-[15rem]"></img>
        <div className="w-[90%] flex flex-col gap-3">
            <p className="text-[1rem] font-[1.1rem]">{props.title}</p>
            <p className="font-semibold text-[1.1rem]">Rs.{props.price}</p>
            <button className="bg-primaryColor p-2 w-[100%] text-white font-light text-[0.9rem]">Add to Cart</button>
        </div>
    </div>
}

export default ProductCard