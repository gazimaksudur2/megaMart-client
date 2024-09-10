import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
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
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import CheckOut from '../pages/UserCart/CheckOut';
import Payment from '../pages/UserCart/Payment';
import PlaceOrder from '../pages/UserCart/PlaceOrder';
import UserDashboard from '../pages/UserDashboard/UserDashboard';
import AccountPage from '../pages/UserDashboard/AccountPage';
import MyOrders from '../pages/UserDashboard/Orders/MyOrders';
import MyReviews from '../pages/UserDashboard/Reviews/MyReviews';
import PrivateRouter from './PrivateRouter';
import ProductPage from '../components/ProductPage/ProductPage';
import AskQuestion from '../components/ProductPage/AskQuestion';
import WriteReview from '../components/ProductPage/WriteReview';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
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
                path: '/product/:id',
                element: <ProductPage />,
                // loader: ({params})=> fetch(`http://localhost:5000/product?id=${params?.id}`),
            },
            {
                path: '/userActivity',
                element:<Outlet/>,
                children: [
                    {
                        path: 'askQuestion',
                        element: <AskQuestion/>,
                    },
                    {
                        path: 'writeReview',
                        element: <WriteReview/>,
                    }
                ],
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
        path: 'user',
        element: <PrivateRouter><UserDashboard/></PrivateRouter>,
        children: [
            {
                index: true,
                element: <AccountPage/>,
            },
            {
                path: 'cart',
                element: <CartLayout/>,
            },
            {
                path: 'history',
                element: <MyOrders/>,
            },
            {
                path: 'reviews',
                element: <MyReviews/>,
            }
        ],
    },
    {
        path: '/carts',
        element: <CartLayout/>,
    },
    {
        path: '/checkout',
        element: <CheckOut/>,
        children: [
            {
                index: true,
                element: <PlaceOrder/>,
            },
            {
                path: 'pay',
                element: <Payment/>,
            }
        ]
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