import React from 'react';
import { CiHeart, CiLogout, CiShoppingCart } from 'react-icons/ci';
import { GoPerson } from 'react-icons/go';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import useAuth from '../../hooks/useAuth';
import { Tooltip } from 'react-tooltip';

const NavTop = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(res => console.log('user Logged out!!'))
            .catch(error => console.log('logout failed!!'))
    }
    const faltuTopDrower = <>
        {/* <!-- drawer init and toggle --> */}
        <div className="text-center">
            <button className="overflow-y-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-top-example" data-drawer-show="drawer-top-example" data-drawer-placement="top" aria-controls="drawer-top-example">
                Show top drawer
            </button>
        </div>

        {/* <!-- drawer component --> */}
        <div id="drawer-top-example" className="fixed top-0 left-0 right-0 z-40 w-full p-4 transition-transform -translate-y-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-top-label">
            <h5 id="drawer-top-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>Top drawer</h5>
            <button type="button" data-drawer-hide="drawer-top-example" aria-controls="drawer-top-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close menu</span>
            </button>
            <p className="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
            <a href="#" className="px-4 py-2 me-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a>
        </div>
    </>;


    const handleSearch = e => {
        e.preventDefault();
        console.log(new FormData(e.target).get('search'));
    }
    return (
        <div className='w-full px-[6%] py-6 mx-auto flex justify-between'>
            <Link to={'/'} className='flex justify-center items-center gap-3'>
                <img className='w-8 h-8' src="https://cdn-icons-png.flaticon.com/128/1162/1162456.png" alt="logo" />
                <h2 className='text-xl font-semibold font-beginner'>Mega Mart</h2>
            </Link>
            {/* <h4 className='font-open font-light text-lg'>This is main Layout.</h4> */}
            <form onSubmit={handleSearch} className='w-[35%]'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow border-none " placeholder="Search" name='search' />
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70 hover:text-amber-500">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </label>
                {/* <button className='btn btn-ghost'>done</button> */}
            </form>
            <div className='flex justify-center items-center'>


                {
                    // faltuTopDrower
                }

                <div className='px-3 border-r-2 border-slate-300'>
                    {
                        user ? <>
                            <Link to={'/user'}>
                                <GoPerson id="clickable" className='hover:text-amber-600 ' size={25} />
                            </Link>
                            <Tooltip anchorSelect="#clickable" clickable className='bg-transparent'>
                                <button onClick={handleLogout} className='btn flex items-center justify-center'>
                                    <CiLogout size={20} />
                                    <h4>logout</h4>
                                </button>
                            </Tooltip>
                            {/* <div className="drawer mr-2">
                                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">

                                    <label htmlFor="my-drawer" className="drawer-button">
                                        <GoPerson className='hover:text-amber-600 ' size={25} />
                                    </label>
                                </div>
                                <div className="drawer-side z-50">
                                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

                                        <li><a>Sidebar Item 1</a></li>
                                        <li><a>Sidebar Item 2</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </>
                            :
                            <>
                                <Link to={'/authenticate'} className='hover:text-amber-600 cursor-pointer pb-2'>LogIn / SignUp</Link>
                            </>
                    }
                </div>

                <div className='mx-3'>
                    {/* <CiShoppingCart className='hover:text-amber-600' size={25} /> */}
                    <label>
                        <div className='relative'>
                            <IoIosNotificationsOutline className='hover:text-amber-600' size={25} />
                            <p className='absolute -top-[10px] -right-[5px] p-[3px] font-semibold text-xs text-white bg-red-400 rounded'>0</p>
                        </div>
                    </label>
                </div>

                <div className='mx-3'>
                    {/* <CiShoppingCart className='hover:text-amber-600' size={25} /> */}
                    <label>
                        <div className='relative'>
                            <CiHeart className='hover:text-amber-600' size={25} />
                            <p className='absolute -top-[10px] -right-[5px] p-[3px] font-semibold text-xs text-white bg-red-400 rounded'>0</p>
                        </div>
                    </label>
                </div>

                {/* <div className='px-3 border-x-2 border-slate-300'>
                        <GoPerson className='hover:text-amber-600 ' size={25} />
                    </div> */}
                <div className='ml-3'>
                    <div className="drawer drawer-end">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="drawer-button">
                                <div className='relative'>
                                    <CiShoppingCart className='hover:text-amber-600' size={25} />
                                    <p className='absolute -top-[10px] -right-[5px] p-[3px] font-semibold text-xs text-white bg-red-400 rounded'>0</p>
                                </div>
                            </label>
                        </div>
                        <div className="drawer-side z-50">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="menu p-0 min-h-full w-96 flex items-center justify-start">
                                <Cart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavTop;