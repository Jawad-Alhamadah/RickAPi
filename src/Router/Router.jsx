import React from 'react'
import * as ReactDOM from "react-dom/client";
import About from '../Pages/About';
import Home from '../Pages/Home';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },

    {
        path:"/about/:id",
        element: <About/>
    }
]);

function Router() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

export default Router
