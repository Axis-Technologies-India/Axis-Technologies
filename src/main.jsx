import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Error from './Pages/Error.jsx';
import Home from './Pages/Home.jsx';
import Aboutus from './Pages/Aboutus.jsx';

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
            
        ],
        errorElement : <Error/>
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appLayout} />
)
