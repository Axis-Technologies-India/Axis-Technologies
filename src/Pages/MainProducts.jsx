import PartnerCard from "../Components/ProdPartner/PartnerCard"
import {sectionbg} from '../Utils/bgimage'

const MainProducts = () => {
  return (
    <div>
         <div className={`w-[100dvw] h-[40dvh] lg:h-[50dvh] bg-top bg-cover overflow-hidden overflow-y-hidden relative flex flex-col items-center justify-center`} style={ {backgroundImage : `URL(${sectionbg})`} }>
      <h1 className='text-head text-black uppercase'>Products</h1>
        <div className={`w-full h-full absolute z-10 bg-gradient-to-t from-red-400  via-transparent to-transparent bottom-0 opacity-30`}></div>
      </div>
      <div className="flex items-center justify-center bg-gray-100 py-4">
        <div className="sm:w-[80%] lg:w-[70%] w-[90%] flex flex-col mx-auto my-[3rem] ">
            <p className="text-head text-center">Browse Products by Partners</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-none place-items-center p-8 gap-4 my-[2rem]">
                <PartnerCard id={0} url="data:image/png;base64,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" />
                <PartnerCard id={1} url="https://www.silmax.it/wp-content/uploads/silmax-logo-pdf.png" />
                <PartnerCard id={2} url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYvazkF2ipaK5QkKqEZ3IQ84oWT_1nd84pg&s" />
                <PartnerCard id={3} url="https://vimaco.gr/img/cms/LOGO/guhring-logo_1.jpg" />
                <PartnerCard id={4} url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpw8W_Hzj_NObh3OY2vA88Jo7mkkv-71Q_Bg&s" />
                <PartnerCard id={5} url="https://cdn.cookielaw.org/logos/5432bf2b-8c79-4fee-8a05-0e864ece0650/9c73449f-290f-446e-933d-0bf3b2932f0c/1c1863d6-9a83-4d5b-bad1-54e8dfe4f20a/W_Mp_4c_C.png" />
                <PartnerCard id={6} url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZFiVVo6PPMS3z7-WlKMf5SlXKH9qYP0Jmbw&s" />
                <PartnerCard id={5} url="https://catalog.wlimg.com/1/5064702/other-images/12569-comp-image.png" />
                <PartnerCard id={5} url="https://axistechnologies.netlify.app/assets/logo-BwxDKmMZ.png" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default MainProducts