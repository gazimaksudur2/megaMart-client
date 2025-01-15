import React, { useState } from 'react';
import TitleBanner from '../../shared/TitleBanner';
import CartTable from './CartTable';
import Footer from '../../shared/Footer/Footer';
import EmptyCart from './EmptyCart';

const UserCart = () => {
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cartProduct')));

    const handleChangeCart = ()=>{

    }
    return (
        <div>
            <TitleBanner title={'Your Cart'} route={'home / cart'}/>
            <CartTable cartProducts={cartProducts}/>
            {/* <EmptyCart/> */}
            {/* <Footer/> */}
        </div>
    );
};

export default UserCart;