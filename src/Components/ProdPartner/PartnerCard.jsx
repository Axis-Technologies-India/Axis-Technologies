import { Link } from "react-router-dom"

const PartnerCard = (props) =>{
    return <Link className="sm:max-w-[10rem] sm:min-w-[10rem] sm:min-h-[10rem] max-w-[6rem] min-w-[6rem] min-h-[6rem] rounded-[50%] bg-gray-300 flex justify-center items-center" to="/products" state={{id:props.id}}>
        <img src={props.url} className="min-w-[3rem] max-w-[3rem] sm:max-w-[5rem] sm:min-w-[5rem]"></img>
    </Link>
}

export default PartnerCard