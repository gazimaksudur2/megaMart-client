import React from 'react';
import { MdOutlineDone } from 'react-icons/md';

const RequestedBrands = ({ brands }) => {
    return (
        <div className=' my-16'>
            <h2 className='text-xl text-gray-600 font-semibold text-start mb-4'>Your Brands Status Table</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-[16px]'>
                            <th className='font-semibold'>Brand</th>
                            <th className='font-semibold'>Requested / Confirmed At</th>
                            <th className='font-semibold'>Status</th>
                            <th className='font-semibold'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            brands?.map((brand, idx) => <>
                                <tr key={idx}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        className='object-cover'
                                                        src={brand?.brand_logo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{brand?.brand}</div>
                                                <div className="text-sm opacity-50">{brand?.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {new Date(brand?.status === 'pending' ? brand?.requestedAt : brand?.approvedAt).toDateString()}
                                    </td>
                                    <td>{brand?.status}</td>
                                    <td >
                                        <div className='flex items-center justify-start gap-4'>
                                            <button class="p-1 text-gray-500 transition-colors duration-200 hover:text-amber-500 hover:bg-amber-50 rounded-full focus:outline-none flex items-center justify-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                            <button class="text-gray-500 transition-colors duration-200 hover:text-red-500 hover:bg-red-50 p-1 rounded-full focus:outline-none flex items-center justify-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestedBrands;