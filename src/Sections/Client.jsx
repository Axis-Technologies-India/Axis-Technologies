import ClientDesc from "../Components/Clients/ClientDesc"
import ClientLogo from "../Components/Clients/ClientLogo"

const Client = ()=> {
    return <div className="flex flex-row justify-center py-[4rem] bg-gray-100">
        <div className="flex lg:flex-row gap-[3rem] flex-col-reverse w-[90%] lg:w-[70%]">
            <ClientLogo/>
            <ClientDesc/>
        </div>
    </div>
}

export default Client