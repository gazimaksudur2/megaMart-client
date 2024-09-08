import { Rating } from '@mui/material';
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div class="group w-64 bg-white flex flex-col items-center justify-start border-4 border-white hover:border-base-200 duration-150 hover:shadow-lg cursor-pointer rounded">
            <div className='relative w-full overflow-hidden'>
                {
                    product?.flashSale && <>
                        <p className='absolute z-40 bg-orange-700 w-20 text-white text-center py-[2px] rounded-r-full top-3 capitalize text-sm font-open'>save: ${(product?.actualPrice * (product?.off / 100)).toFixed()}</p>
                    </>
                }
                <img class="group-hover:scale-110 w-full h-40 object-cover transition-transform duration-300 ease-in-out transform" src={product?.productImage} alt="category_products" />
            </div>
            <div class="w-full px-2 py-1 pt-6 text-start space-y-2">
                <h2 class="text-gray-700">{product?.productName}</h2>
                <p className='text-xs text-slate-500'>{product?.Brand}</p>
                <div className='flex flex-col items-start gap-1'>
                    {
                        product?.flashSale ? <div className='flex gap-4'>
                            <h2 className='font-open text-lg text-orange-500 font-semibold'>$ {((product?.actualPrice) - (product?.actualPrice * (product?.off / 100))).toFixed(0)}</h2>
                            <div className='flex items-center justify-start gap-2'>
                                <h4 className='line-through text-slate-400 text-sm'>${product?.actualPrice}</h4>
                                <h5 className='text-yellow-500'>-{product?.off}%</h5>
                            </div>
                        </div> : <>
                            <h2 className='font-open text-lg text-orange-500 font-semibold'>$ {(product?.actualPrice).toFixed()}</h2>
                        </>
                    }
                </div>
                <div className='flex flex-row-reverse justify-end items-center gap-2'>
                    <h2 className='text-sm text-slate-600'>({product?.rating})</h2>
                    <Rating name="read-only" value={(product?.rating)} readOnly size='small'/>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;