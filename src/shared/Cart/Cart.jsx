import React from 'react';
import { RiShoppingBag4Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

const Cart = () => {
    // const cartProducts = ['ad', 'cd', 'ef'];
    const cartProducts = [];
    return (
        <div className='w-full min-h-screen bg-base-200 text-base-content p-4 flex flex-col justify-between'>
            <div className=''>
                <div className='text-xl font-semibold font-fira pb-2 px-2 border-b-2 border-slate-400 flex justify-between'>
                    <h2 className=''>Cart</h2>
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay opacity-50 pt-1 cursor-pointer hover:text-amber-700">
                        <RxCross2 />
                    </label>
                </div>
                {
                    cartProducts.length == 0 ? <>
                        <div className='min-h-80 flex flex-col items-center justify-center space-y-3'>
                            <RiShoppingBag4Line size={70} className='text-amber-500'/>
                            <h2 className='text-lg font-medium'>There are no products!</h2>
                        </div>
                    </> : <>
                        <ul className="mt-10">
                            <li><a>Sidebar Item </a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </>
                }
            </div>
            <div className='bg-amber-400 rounded flex items-center justify-between p-3'>
                <h4 className='text-white font-open font-bold text-lg'>View Cart</h4>
                <button className='btn text-amber-400 font-bold font-fira'>$0.00</button>
            </div>
        </div>
    );
};

export default Cart;