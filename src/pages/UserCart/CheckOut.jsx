import React from 'react';
import NavTop from '../../shared/NavBar/NavTop';
import TitleBanner from '../../shared/TitleBanner';
import { Outlet } from 'react-router-dom';

const CheckOut = () => {
    return (
        <div>
            <NavTop />
            <TitleBanner route={'Home / checkout'} title={'CheckOut'} />
            <div className='max-w-[85%] mx-auto my-20'>
                <Outlet/>
            </div>
        </div>
    );
};

export default CheckOut;