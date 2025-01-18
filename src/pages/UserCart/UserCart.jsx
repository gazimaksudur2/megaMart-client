import React from 'react';
import TitleBanner from '../../shared/TitleBanner';
import CartTable from './CartTable';
import useLocalCart from '../../hooks/useLocalCart';

const UserCart = () => {
    return (
        <div>
            <TitleBanner title={'Your Cart'} route={'home / cart'}/>
            <CartTable />
            {/* <EmptyCart/> */}
            {/* <Footer/> */}
        </div>
    );
};

export default UserCart;