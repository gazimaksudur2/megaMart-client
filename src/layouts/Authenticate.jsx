import React from 'react';
import NavTop from '../shared/NavBar/NavTop';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';

const Authenticate = () => {
    return (
        <div>
            <NavTop/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Authenticate;