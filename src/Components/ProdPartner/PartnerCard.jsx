import { Link } from "react-router-dom"

const PartnerCard = (props) => {
    const shadowColor = [
        'shadow-blue-400',
        'shadow-yellow-500',
        'shadow-orange-300',
        'shadow-yellow-500',
        'shadow-yellow-500',
        'shadow-gray-500',
        'shadow-blue-900',
        'shadow-orange-500',
        'shadow-orange-500',
    ];

    return <Link to="/products/:id" state={{ id: props.id }}>
        <div className={`min-w-[8rem] min-h-[8rem] lg:min-w-[13rem] lg:min-h-[13rem] flex justify-center items-center bg-contain bg-no-repeat bg-center`} style={ { backgroundImage : `url(${props.url})` } } to="/products/:id" state={{id:props.id}}>
     </div>
        {/* <img src={props.url} className={`w-[10rem] shadow-xl ${shadowColor[props.id] || ''}`}></img> */}
    </Link>
}

export default PartnerCard