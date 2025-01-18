import React, { useEffect, useState } from 'react';
import { FiMinus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import useLocalCart from '../../hooks/useLocalCart';
import { useDispatch } from 'react-redux';
import { changeQuantity, deleteProduct } from '../../redux/features/cart/cartSlice';

const CartRow = ({cartProduct}) => {
    const dispatch = useDispatch();

    const handleDeleteProductFromCart = ()=>{
        dispatch(deleteProduct({productID: cartProduct?.productID}))
    }
    const handleCount = (operation) =>{
        if(operation==='minus'){
            dispatch(changeQuantity({productID: cartProduct?.productID, amount: 1}))
        }else{
            dispatch(changeQuantity({productID: cartProduct?.productID, amount: -1}))
        }
    }
    return (
        <>
            <tr>
                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                        <div className="flex items-center gap-x-2">
                            <img className="object-cover w-14 h-14 rounded" src={cartProduct?.productImg} alt="productImage" />
                        </div>
                    </div>
                </td>
                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <h2 className="text-sm font-normal hover:text-orange-300 cursor-pointer">{cartProduct?.productName}</h2>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">$ {parseInt(cartProduct?.price)}</td>
                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                    <div className='flex items-center justify-center gap-2'>
                        <button className='btn btn-xs' onClick={()=>(cartProduct?.count>1) && handleCount('minus')}><FiMinus/></button>
                        <p>{cartProduct?.count}</p>
                        <button className='btn btn-xs' onClick={()=>(cartProduct?.count <= cartProduct?.stock) && handleCount('add')}><GoPlus/></button>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    $ {(parseInt(cartProduct?.price)*parseInt(cartProduct?.count))}
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center gap-x-6">
                        <button className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none" onClick={handleDeleteProductFromCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default CartRow;