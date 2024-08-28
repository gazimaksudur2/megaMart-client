import React, { useState } from 'react';
import CartRow from './CartRow';

const CartTable = () => {
    const [price, setPrice] = useState([]);
    return (
        <div className='w-[90%] my-10 mx-auto'>
            <section className="container px-4 mx-auto">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800">Total Products</h2>

                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">100 pcs</span>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Product Image</span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Product Name</span>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Unit Price</span>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center text-gray-500">QTY</th>

                                            <th scope="col" className="px-4 py-3.5 uppercase text-sm font-normal text-left rtl:text-right text-gray-500">Sub total</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                <span>Action</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <CartRow price={price} index={1} />
                                        <CartRow price={price} index={2} />
                                        <CartRow price={price} index={3} />
                                        <CartRow price={price} index={4} />
                                        <tr className='h-14'>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className='font-semibold text-[#181818cd]'>Grand Total : </td>
                                            <td className='font-fira font-normal text-lg text-[#181818de]'>$ 260.0</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-100 flex items-center justify-between my-14 p-4 rounded'>
                    <div className='flex items-center w-[50%]'>
                        <input type="text" placeholder="Type here" className="input input-bordered border-yellow-500 w-full rounded-r-none rounded" />
                        <button className='btn btn-warning rounded-l-none text-white rounded'>Apply Coupon</button>
                    </div>
                    <div className='space-x-4'>
                        <button className='btn btn-warning rounded text-white'>Clear cart</button>
                        <button className='btn bg-black hover:bg-[#181818e0] text-white rounded'>Proceed to checkout</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CartTable;