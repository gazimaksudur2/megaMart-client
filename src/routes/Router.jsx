import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "/products",
                element: <Products/>,
            },
            {
                path: '/blogs',
                element: <Blog/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
])

export default Router;