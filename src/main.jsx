import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Error from './Pages/Error.jsx';
import Home from './Pages/Home.jsx';
import Aboutus from './Pages/Aboutus.jsx';
import Products from './Pages/Products.jsx';
import Services from './Pages/Services.jsx';
import Contactus from './Pages/Contactus.jsx';

const appLayout = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : '/',
                element: <Home/>
            },
            {
                path : '/aboutus',
                element: <Aboutus/>
            },
            {
                path : '/products',
                element: <Products/>
            },
            {
                path : '/services',
                element: <Services/>
            },
            {
                path : '/contactus',
                element: <Contactus/>
            },
        ],
        errorElement : <Error/>
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appLayout} />
)
