import { useRouteError } from "react-router-dom"
import {sectionbg} from '../Utils/bgimage'

const Error = () => {
    
const error = useRouteError();
console.log(error);

  return (
    <div>
      <div className={`w-[100dvw] h-[40dvh] lg:h-[50dvh] bg-top bg-cover overflow-hidden overflow-y-hidden relative flex flex-col items-center justify-center`} style={ {backgroundImage : `URL(${sectionbg})`} }>
      <h1 className='text-head text-black uppercase'> 404 Not Found</h1>
        <div className="w-full h-full absolute z-10 bg-gradient-to-t from-primaryColor  via-transparent to-transparent bottom-0 opacity-30"></div>
      </div>

    </div>
  )
}

export default Error;