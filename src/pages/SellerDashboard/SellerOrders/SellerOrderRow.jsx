import React, { useEffect, useState } from 'react';
import { FcShipped } from 'react-icons/fc';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';

const SellerOrderRow = ({ order, refetchOrder }) => {
    const axiosPublic = useAxios();
    const [buyer, setBuyer] = useState();
    useEffect(() => {
        axiosPublic.get(`/users?email=${order.buyer}`)
            .then(res => {
                setBuyer(res.data);
            })
            .catch(err => {
                console.log(err?.message);
                setBuyer({});
            })
    }, []);

    const handleShip = () => {
        axiosPublic.patch(`/orders?id=${order?._id}`, { order_status: 'shipped' })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: 'Shipped',
                        text: "Product's current status changed",
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false,
                    })
                    refetchOrder();
                } else {
                    Swal.fire({
                        title: 'failed!!',
                        text: "Product's current status not changed",
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false,
                    })
                }
            })
            .catch(err => {
                Swal.fire({
                    title: 'Shipping failed',
                    text: err?.message,
                    icon: 'error',
                    timer: 2000,
                    showConfirmButton: false,
                })
            })
    }
    // console.log(buyer);
    return (
        <tr>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center gap-x-3">

                    <span>#{order?.orderID}</span>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{new Date(order?.orderedAt).toLocaleString()}</td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                <div>
                    {
                        order?.products.map(product => <>
                            <div class="flex items-center gap-x-2">
                                <img className='w-10 rounded-md' src={product?.productImg} alt="productImg" />
                                <h2 class="text-xs font-medium text-gray-800 ">{product?.productName}</h2>
                                <p class="text-xs font-normal text-gray-600">x {product?.count} pcs</p>
                            </div>
                        </>)
                    }
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                <h4>$ {order?.total_amount}</h4>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                <div class="flex items-center gap-x-2">
                    <img class="object-cover w-8 h-8 rounded-full" src={buyer?.photoURL} alt="" />
                        <div>
                            <h2 class="text-sm font-medium text-gray-800">{buyer?.username}</h2>
                            <p class="text-xs font-normal text-gray-600">{buyer?.email}</p>
                        </div>
                </div>
            </td>
            {/* <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Monthly subscription</td> */}
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                {
                    order?.order_status == 'order_placed' ? <>
                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-yellow-500 bg-yellow-100/60">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <h2 class="text-sm font-normal">placed</h2>
                        </div>
                    </> : <>
                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60">
                            <FcShipped size={20} />
                            <h2 class="text-sm font-normal">shipped</h2>
                        </div>
                    </>
                }
            </td>
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div class="flex flex-col items-start justify-between">
                    <h2>{order?.phone}</h2>
                    <h2>{order?.address}</h2>
                </div>
            </td>

            <td class="px-4 py-4 text-sm whitespace-nowrap">
                {
                    order?.order_status == 'order_placed' ? <>
                        <button onClick={handleShip} className='btn btn-sm btn-warning text-gray-800'>Ship it Now</button>
                    </> : <>
                        <h2 className='text-xs text-gray-700 text-wrap w-28 text-center'>Product is on the way</h2>
                    </>
                }
            </td>
        </tr>
    );
};

export default SellerOrderRow;