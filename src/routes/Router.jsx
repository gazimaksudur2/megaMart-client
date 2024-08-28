import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';
import CartLayout from '../layouts/CartLayout';
import Authenticate from '../layouts/Authenticate';
import SignIn from '../pages/Authenticate/SignIn';
import CreateAccount from '../pages/Authenticate/CreateAccount';

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
    },
    {
        path: '/carts',
        element: <CartLayout/>,
        children: [],
    },
    {
        path: '/authenticate',
        element: <Authenticate/>,
        children: [
            {
                index: true,
                element: <SignIn/>,
            },
            {
                path: 'signup',
                element: <CreateAccount/>,
            }
        ]
    }
])

export default Router;