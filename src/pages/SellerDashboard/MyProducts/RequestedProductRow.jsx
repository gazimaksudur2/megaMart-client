import { Modal } from 'antd';
import React, { useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { FaSortDown } from 'react-icons/fa';
import { MdOutlineDone } from 'react-icons/md';
import { RiErrorWarningLine } from 'react-icons/ri';
import { TbUserEdit } from 'react-icons/tb';
import { Tooltip } from 'react-tooltip';

const RequestedProductRow = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        console.log('okay');
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        console.log('cancel');
    };

    return (
        <tr className=''>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center gap-x-3">

                    <div class="flex items-center gap-x-2">
                        <img class="object-cover w-10 h-10 rounded-full" src="https://furns-react.netlify.app/images/slider-image/slider-1.png" alt="product image" />
                        <div>
                            <h2 class="font-medium text-gray-800 ">Arthur Melo</h2>
                            <p class="text-sm font-normal text-gray-600">@authurmelo</p>
                        </div>
                        <div>
                            <CgDetailsMore id='tooltip' onClick={showModal} className='hover:bg-amber-50 bg-gray-100 hover:text-amber-500 rounded-full p-1 duration-200' size={25} />
                            <Tooltip anchorSelect='#tooltip' content='details' place='bottom' offset={5} />
                            <Modal title="Requested Product Details" open={isModalOpen} onCancel={handleCancel} footer={null}>
                                <div className='my-5 flex flex-col items-center justify-center gap-2'>
                                    <img className='w-32' src="https://furns-react.netlify.app/images/slider-image/slider-1.png" alt="product image" />
                                    <div className='w-full flex flex-col gap-1'>
                                        <h2 className='text-lg text-gray-600 text-center'>Adidas Ultraboost</h2>
                                        <div className='w-full pt-4 space-y-2'>
                                            <div className='flex items-center justify-start gap-2'>
                                                <div className='w-[35%] font-semibold flex items-center justify-between capitalize'>
                                                    <h2>Category </h2>
                                                    <p>:</p>
                                                </div>
                                                <h3 className='text-sm'>Hudai</h3>
                                            </div>
                                            <div className='flex items-center justify-start gap-2'>
                                                <div className='w-[35%] font-semibold flex items-center justify-between capitalize'>
                                                    <h2>Brand </h2>
                                                    <p>:</p>
                                                </div>
                                                <h3 className='text-sm'>25 / 05 / 2001</h3>
                                            </div>
                                            <div className='flex items-center justify-start gap-2'>
                                                <div className='w-[35%] font-semibold flex items-center justify-between'>
                                                    <h2>Seller </h2>
                                                    <p>:</p>
                                                </div>
                                                <h3 className='text-sm'>MD. Rashed Majumder</h3>
                                            </div>
                                            <div className='flex items-center justify-start gap-2'>
                                                <div className='w-[35%] font-semibold flex items-center justify-between capitalize'>
                                                    <h2>offer status </h2>
                                                    <p>:</p>
                                                </div>
                                                <h3 className='text-sm'>Not Available</h3>
                                            </div>
                                            <div className='flex items-center justify-start gap-2'>
                                                <div className='w-[35%] font-semibold flex items-center justify-between capitalize'>
                                                    <h2>Location </h2>
                                                    <p>:</p>
                                                </div>
                                                <h3 className='text-sm'>Bangladesh</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">authurmelo</td>
            <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                    <h2 class="text-sm font-normal text-emerald-500">Active</h2>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Design Director</td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Design Director</td>
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                {/* <div class="flex items-center gap-x-2">
                    <p class="px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60">Design</p>
                    <p class="px-3 py-1 text-xs text-blue-500 rounded-full bg-blue-100/60">Product</p>
                    <p class="px-3 py-1 text-xs text-pink-500 rounded-full bg-pink-100/60">Marketing</p>
                </div> */}
                <span className=''>
                    {
                        new Date().toDateString().slice(4, new Date().toDateString().length)
                    }
                </span>
            </td>
            <td class="px-4 py-4 text-sm whitespace-nowrap ">

                <div className="flex items-center justify-center gap-4">
                    <button class="p-1 text-gray-500 transition-colors duration-200 hover:text-emerald-500 hover:bg-emerald-50 rounded-full focus:outline-none flex items-center justify-center gap-2">
                        {/* <RiErrorWarningLine className='font-light' size={20} /> */}
                        <MdOutlineDone className='font-light' size={20} />
                    </button>
                    <button class="text-gray-500 transition-colors duration-200 hover:text-red-500 hover:bg-red-50 p-1 rounded-full focus:outline-none flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                    {/* <div tabIndex={0} role="button" className="p-[6px] text-blue-500 flex items-center justify-center gap-2 border-[1px] border-blue-500 hover:border-blue-400 hover:text-blue-400 rounded-md active:scale-95 duration-150">
                        <h4>Action</h4>
                        <FaSortDown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content bg-base-100 rounded z-[50] p-2 shadow flex justify-center items-center gap-4">
                        <li className='hover:bg-gray-200 p-2 rounded'><a>
                            <button class="text-gray-500 transition-colors duration-200 hover:text-green-500 focus:outline-none flex items-center justify-center gap-2">
                                <TbUserEdit className='font-light' size={20} />
                                <h2>Make Admin</h2>
                            </button>
                        </a></li>
                        <li className='hover:bg-gray-200 p-2 rounded'><a>
                            <button class="text-gray-500 transition-colors duration-200 hover:text-cyan-500 focus:outline-none flex items-center justify-center gap-2">
                                <h2>Make Seller</h2>
                            </button>
                        </a></li>
                        <li className='hover:bg-gray-200 p-2 rounded'><a>
                            <button class="text-gray-500 transition-colors duration-200 hover:text-amber-500 focus:outline-none flex items-center justify-center gap-2">
                                <h2>Disable User</h2>
                            </button>
                        </a></li>
                    </ul> */}
                </div>
            </td>
        </tr>
    );
};

export default RequestedProductRow;