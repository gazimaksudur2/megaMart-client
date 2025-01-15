import { Rating } from '@mui/material';
import { Tooltip } from 'antd';
import React from 'react';
import { AiOutlineStop } from 'react-icons/ai';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FcApproval } from 'react-icons/fc';
import { IoIosGitCompare } from 'react-icons/io';
// import useAxios from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';

const CategoryProductCard = ({ product }) => {
    // console.log(product); Link to={`/product/${product?._id}`}
    const { user } = useAuth();
    // const axiosPublic = useAxios();
    const handleAddToCart = () => {
        console.log('adding to cart ' + product?._id);
        const cartProduct = {
            clientEmail: user?.email,
            productID: product?._id,
            productName: product?.productName,
            productImg: product?.productImage[0],
            // availableQuantity: product?.
            price: product?.actualPrice,
            count: 1,
            status: 'carted',
            cartedAt: new Date()
        }
        let prevProduct = [];
        if (JSON.parse(localStorage.getItem('cartProduct'))) {
            prevProduct = JSON.parse(localStorage.getItem('cartProduct'));
        }
        localStorage.setItem('cartProduct', JSON.stringify([cartProduct, ...prevProduct]));
        Swal.fire({
            title: "Added to Cart",
            text: "Product added to your local cart",
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        })
        // axiosPublic.post('/carts', cartProduct)
        // .then(res=>{
        //     if(res.data.insertedId){
        //         Swal.fire({
        // title: "Added to Cart",
        // text: "To view all carted products Go To Carts",
        // icon: 'success',
        // showConfirmButton: false,
        // timer: 2000
        //         })
        //     }
        // })
        // .catch(err=>{
        //     console.log(err?.message);
        // })

    }
    return (
        <div class="group basis-80 flex-1 pb-2 bg-white flex flex-col items-center justify-start border-4 border-white hover:border-base-200 duration-150 hover:shadow-lg cursor-pointer rounded">
            <div className='relative w-full overflow-hidden'>
                {
                    product?.flashSale && <>
                        <p className='absolute z-40 bg-orange-700 w-20 text-white text-center py-[2px] rounded-r-full top-3 capitalize text-sm font-open'>save: ${(product?.actualPrice * (product?.off / 100)).toFixed()}</p>
                    </>
                }
                <img class="group-hover:scale-110 w-full h-40 object-cover transition-transform duration-300 ease-in-out transform" src={product?.productImage[0]} alt="category_products" />
                <div className='h-full absolute group-hover:z-50 top-0 right-3 flex flex-col items-center justify-center gap-3'>
                    <Tooltip placement="left" title={'Add to Cart'}>
                        <CiShoppingCart size={35} className='text-gray-700 bg-gray-100 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 active:scale-95' />
                    </Tooltip>
                    <Tooltip placement='left' title={'Add to Wishlist'}>
                        <CiHeart size={35} className='text-gray-700 bg-gray-100 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 active:scale-95' />
                    </Tooltip>
                    <Tooltip placement='left' title={'Add to Compare'}>
                        <IoIosGitCompare size={35} className='text-gray-700 bg-gray-100 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 active:scale-95' />
                    </Tooltip>
                </div>
            </div>
            <div class="w-full px-2 py-1 pt-6 text-start space-y-2">
                <h2 class="text-gray-700">{product?.productName}</h2>
                <div className='flex items-center justify-between'>
                    <p className='text-xs text-slate-500'>{product?.brand}</p>
                    {
                        product?.availableQuantity > 0 ? <div className='flex items-center justify-center gap-1 text-xs'>
                            <FcApproval size={20} className='' />
                            <p className=''>in stock</p>
                        </div> : <div className='flex items-center justify-center gap-1 text-xs'>
                            <AiOutlineStop className='text-orange-900' size={15} />
                            <p className='capitalize'>out of stock</p>
                        </div>
                    }
                </div>
                <div className='pt-10 flex flex-col items-start gap-1'>
                    {
                        product?.flashSale ? <div className='flex gap-4'>
                            <h2 className='font-open text-lg text-orange-500 font-semibold'>$ {((product?.actualPrice) - (product?.actualPrice * (product?.off / 100))).toFixed(0)}</h2>
                            <div className='flex items-center justify-start gap-2'>
                                <h4 className='line-through text-slate-400 text-sm'>${product?.actualPrice}</h4>
                                <h5 className='text-yellow-500'>-{product?.off}%</h5>
                            </div>
                        </div> : <>
                            <h2 className='font-open text-lg text-orange-500 font-semibold'>$ {product?.actualPrice}</h2>
                        </>
                    }
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-row-reverse justify-end items-center gap-2'>
                        <h2 className='text-sm text-slate-600'>({product?.rating})</h2>
                        <Rating name="read-only" value={(product?.rating)} readOnly size='small' />
                    </div>
                    <button className='btn btn-sm btn-accent' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryProductCard;