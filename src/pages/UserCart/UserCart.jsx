import React from 'react';
import TitleBanner from '../../shared/TitleBanner';
import CartTable from './CartTable';
import useLocalCart from '../../hooks/useLocalCart';

const UserCart = () => {
    const {items: cartProducts} = useLocalCart();

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