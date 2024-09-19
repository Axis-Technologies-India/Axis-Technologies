import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { useState } from "react";

let questions =[
    {
        q:"Compliance Crucial in Product Design?",
        a:"Lojnjcdnncjdncjndjcnjdncjdnjcndjncjncjndjncjdncjndjcndjncjdnjcndjnc"
    },
    {
        q:"Compliance Crucial in Product Design?",
        a:"Lojnjcdnncjdncjndjcnjdncjdnjcndjncjncjndjncjdncjndjcndjncjdnjcndjnc"
    },
    {
        q:"Compliance Crucial in Product Design?",
        a:"Lojnjcdnncjdncjndjcnjdncjdsdsddss dsdsdsdsdsdsdsdsd sdsdsdsdnjcnd jncjncjndjncj dncjndjcndjncjdnjcndjnc"
    },
    {
        q:"Compliance Crucial in Product Design?",
        a:"Lojnjcdnncjdncjndjcnjdncjdnjcndjncjncjndjncjdncjndjcndjncjdnjcndjnc"
    },
]

const FaqQuestions = () =>{
    let [faq,setfaq] = useState([true,false,false,false])
    function handlefaq(id)
    {
        setfaq((prev)=>{
            return prev.map((value,index)=>{
                return index==id
            })
        })
    }
    return <div className="lg:w-[50%] w-full">
        <p className="text-sec">FAQ</p>
        <p className="text-head text-white">Do You Have Any Questions?</p>
        <div className="flex flex-col my-[3rem] gap-6 w-full">
            {questions.map((value,index)=>{
                return <div className="border-b-[0.3px] border-b-white cursor-pointer flex flex-col " onClick={()=>handlefaq(index)}>
                <p className={`sm:text-[1.1rem] font-semibold items-center ${faq[index]?"text-primaryColor":"text-white"} py-3 flex justify-between text-[1rem]`}>{value.q}<TfiArrowCircleRight /></p>
                <p className={`${faq[index]?"visible":"hidden"} text-desc pb-5`}>{value.a}</p>
            </div>
            })}
            
        </div>
    </div>
}

export default FaqQuestions