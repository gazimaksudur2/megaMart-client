import React from 'react';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { GoPerson } from 'react-icons/go';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import NavTop from './NavTop';

const Navbar = () => {
    const navItems = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-amber-300 font-semibold font-fira text-lg" : "font-fira text-lg"}>Home</NavLink></li>
        <li><NavLink to={'/products'} className={({ isActive }) => isActive ? "text-amber-300 font-semibold font-fira text-lg" : "font-fira text-lg"}>Products</NavLink></li>
        <li><NavLink to={'/blogs'} className={({ isActive }) => isActive ? "text-amber-300 font-semibold font-fira text-lg" : "font-fira text-lg"}>Blogs</NavLink></li>
        <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? "text-amber-300 font-semibold font-fira text-lg" : "font-fira text-lg"}>Contact</NavLink></li>
        <li><NavLink to={'/about'} className={({ isActive }) => isActive ? "text-amber-300 font-semibold font-fira text-lg" : "font-fira text-lg"}>About</NavLink></li>
    </>;
    return (
        <div className='flex flex-col items-center'>
            <NavTop/>
            <div className='h-14 w-full bg-slate-800 text-white flex justify-between items-center'>
                {/* <div className='h-full px-[5%] bg-orange-500 flex items-center'>
                    <h2>All Categories</h2>
                </div> */}
                <ul className='h-full w-full flex items-center justify-center gap-[3%]'>
                    {
                        navItems
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;