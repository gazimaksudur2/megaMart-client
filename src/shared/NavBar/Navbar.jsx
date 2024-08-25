import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/products'}>Products</NavLink></li>
        <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
    </>;
    return (
        <div className='flex flex-col items-center'>
            <div className='w-full px-[6%] py-6 mx-auto flex justify-between'>
                <div className='flex justify-center items-center gap-2'>
                    <img className='w-8 h-8' src="https://www.svgrepo.com/show/343883/ecommerce-online-shopping-app.svg" alt="logo" />
                    <h2 className='text-xl font-semibold font-beginner'>Mega Mart</h2>
                </div>
                <h4 className='font-open font-light text-lg'>This is main Layout.</h4>
            </div>
            <ul className='h-12 w-full px-[20%] bg-slate-800 text-white flex items-center justify-center gap-[10%]'>
                {
                    navItems
                }
            </ul>
        </div>
    );
};

export default Navbar;