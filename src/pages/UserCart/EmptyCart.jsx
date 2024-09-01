import React from 'react';
import { RiShoppingBag4Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

const EmptyCart = () => {
    return (
        <div className='flex flex-col items-center justify-center mb-16'>
            <div className='mx-auto'>
                <div className='min-h-80 flex flex-col items-center justify-center space-y-3'>
                    <RiShoppingBag4Line size={70} className='text-amber-500' />
                    <h2 className='text-lg font-medium'>There are no products in Your cart!!</h2>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;