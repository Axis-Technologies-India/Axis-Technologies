import { Outlet } from "react-router-dom"

import Navbar from "./Sections/Landing/Navbar"

const App = () => {
  return (
    <>
      {/*<Navbar/>*/}
      <Outlet/>
      {/* <Home/> */}
    </>
  )
}

export default App
