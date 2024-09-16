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
import BeSeller from '../pages/UserDashboard/BeSeller';
import BeAdmin from '../pages/UserDashboard/BeAdmin';
import Blogs from '../pages/UserDashboard/Blogs/Blogs';
import Posts from '../pages/UserDashboard/Posts/Posts';
import Loader from '../pages/Loader/Loader';
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard';
import AdminPage from '../pages/AdminDashboard/AdminPage/AdminPage';
import Users from '../pages/AdminDashboard/Users/Users';
import Sales from '../pages/AdminDashboard/Sales/Sales';
import AdminProducts from '../pages/AdminDashboard/AdminProducts/AdminProducts';
import Transactions from '../pages/AdminDashboard/Transactions/Transactions';
import ProductCategories from '../pages/AdminDashboard/ProductCategories/ProductCategories';
import OrderLists from '../pages/AdminDashboard/OrderLists/OrderLists';

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
            },
            {
                path: 'loader',
                element: <Loader/>,
            }
        ]
    },
    {
        path: 'user',
        element: <PrivateRouter><UserDashboard/></PrivateRouter>,
        children: [
            {
                path: 'dash',
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
            },
            {
                path: 'blogs',
                element: <Blogs/>,
            },
            {
                path: 'posts',
                element: <Posts/>,
            },
            {
                path: 'beseller',
                element: <BeSeller/>,
            },
            {
                path: 'beadmin',
                element: <BeAdmin/>,
            }
        ],
    },
    {
        path: 'admin',
        element: <AdminDashboard/>,
        children: [
            {
                index: 'true',
                element: <AdminPage/>,
            },
            {
                path: 'users',
                element: <Users/>,
            },
            {
                path: 'sales',
                element: <Sales/>,
            },
            {
                path: 'products',
                element: <AdminProducts/>,
            },
            {
                path: 'category',
                element: <ProductCategories/>,
            },
            {
                path: 'orders',
                element: <OrderLists/>,
            },
            {
                path: 'transactions',
                element: <Transactions/>,
            }
        ]
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