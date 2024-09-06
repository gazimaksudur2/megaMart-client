import React from 'react';
import NavTop from '../shared/NavBar/NavTop';
import UserCart from '../pages/UserCart/UserCart';

const CartLayout = () => {
    return (
        <div className='bg-base-200'>
            {/* <NavTop/> */}
            <UserCart/>
        </div>
    );
};

export default CartLayout;