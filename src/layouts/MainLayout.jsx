import React from 'react';
import Navbar from '../shared/NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between bg-base-200'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;