import React from 'react';

const Navbar = () => {
    const navItems = <>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
    </>;
    return (
        <div className='pt-10 flex flex-col items-center  gap-3'>
            <div className='w-full px-[10%] mx-auto flex justify-between'>
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