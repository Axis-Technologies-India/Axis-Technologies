import {sectionbg} from '../Utils/bgimage'
import ProductCard from "../Components/Products/ProductCard";
import { useLocation } from "react-router-dom";

const Products = (props) => {

  const state = useLocation();

  let name=["Haimer","Guering","Silmax"]

  let prods = [{
    url:"https://media.istockphoto.com/id/1131844402/photo/chrome-vanadium-wrench-industrial-spanner.jpg?s=612x612&w=0&k=20&c=sxRTCrku5cVgK5OgJAgUncbkqMnvq5vC8pxLWJQTJPU=",
    title:"Fisksars Pro 10635535 TrueTension Blade",
    price:"4000"
  },
  {
    url:"https://media.istockphoto.com/id/1131844402/photo/chrome-vanadium-wrench-industrial-spanner.jpg?s=612x612&w=0&k=20&c=sxRTCrku5cVgK5OgJAgUncbkqMnvq5vC8pxLWJQTJPU=",
    title:"Fisksars Pro 10635535 TrueTension Blade",
    price:"4000"
  },
  {
    url:"https://media.istockphoto.com/id/1131844402/photo/chrome-vanadium-wrench-industrial-spanner.jpg?s=612x612&w=0&k=20&c=sxRTCrku5cVgK5OgJAgUncbkqMnvq5vC8pxLWJQTJPU=",
    title:"Fisksars Pro 10635535 TrueTension Blade",
    price:"4000"
  },
  {
    url:"https://media.istockphoto.com/id/1131844402/photo/chrome-vanadium-wrench-industrial-spanner.jpg?s=612x612&w=0&k=20&c=sxRTCrku5cVgK5OgJAgUncbkqMnvq5vC8pxLWJQTJPU=",
    title:"Fisksars Pro 10635535 TrueTension Blade",
    price:"4000"
  },
  {
    url:"https://media.istockphoto.com/id/1131844402/photo/chrome-vanadium-wrench-industrial-spanner.jpg?s=612x612&w=0&k=20&c=sxRTCrku5cVgK5OgJAgUncbkqMnvq5vC8pxLWJQTJPU=",
    title:"Fisksars Pro 10635535 TrueTension Blade",
    price:"4000"
  },
  {
    url:"https://media.istockphoto.com/id/1131844402/photo/chrome-vanadium-wrench-industrial-spanner.jpg?s=612x612&w=0&k=20&c=sxRTCrku5cVgK5OgJAgUncbkqMnvq5vC8pxLWJQTJPU=",
    title:"Fisksars Pro 10635535 TrueTension Blade",
    price:"4000"
  }]

  return (
    <div>
      <div className={`w-[100dvw] h-[40dvh] lg:h-[50dvh] bg-top bg-cover overflow-hidden overflow-y-hidden relative flex flex-col items-center justify-center`} style={ {backgroundImage : `URL(${sectionbg})`} }>
      <h1 className='text-head text-black uppercase'>{name[state.state.id]}</h1>
        <div className={`w-full h-full absolute z-10 bg-gradient-to-t from-${props.color}  via-transparent to-transparent bottom-0 opacity-30`}></div>
      </div>
      <div className="py-[5rem] sm:w-[80%] justify-center gap-6 w-[90%] mx-auto flex-wrap flex">
        <ProductCard url="https://media.istockphoto.com/id/1131844402/photo/chrome-vanadium-wrench-industrial-spanner.jpg?s=612x612&w=0&k=20&c=sxRTCrku5cVgK5OgJAgUncbkqMnvq5vC8pxLWJQTJPU=" title="Fisksars Pro 10635535 TrueTension Blade" price="300" />
        {prods.map((value,index)=>{
          return <ProductCard url={value.url} title={value.title} price={value.price} key={index}/>
        })}
      </div>
      <p className="text-[1.2rem] text-center mb-[3rem]">Didn't find your product? <a href="#" className="underline">Request Here</a></p>
    </div>
  )
}

export default Products;