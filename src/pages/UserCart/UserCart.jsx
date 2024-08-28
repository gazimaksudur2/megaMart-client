import React from 'react';
import TitleBanner from '../../shared/TitleBanner';
import CartTable from './CartTable';
import Footer from '../../shared/Footer/Footer';

const UserCart = () => {
    return (
        <div>
            <TitleBanner title={'Your Cart'} route={'home / cart'}/>
            <CartTable/>
            <Footer/>
        </div>
    );
};

export default UserCart;