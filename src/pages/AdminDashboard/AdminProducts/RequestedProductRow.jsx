import { Modal } from 'antd';
import React, { useState } from 'react';
import { CiSquareQuestion } from 'react-icons/ci';
import { FaSortDown } from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';
import { TbUserEdit } from 'react-icons/tb';

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
        console.log("canceled");
    };

    return (
        <tr className=''>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center gap-x-3">

                    <div class="flex items-center gap-x-2">
                        <img class="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="user image" />
                        <div>
                            <h2 class="font-medium text-gray-800 ">Arthur Melo</h2>
                            <p class="text-sm font-normal text-gray-600">@authurmelo</p>
                        </div>
                        <div>
                            <CiSquareQuestion className='hover:bg-amber-50 hover:text-amber-500 rounded-full p-1 duration-200' onClick={showModal} size={32} />
                            <Modal title="Request to be an Admin" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">authurmelo@example.com</td>
            <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                    <h2 class="text-sm font-normal text-emerald-500">Active</h2>
                </div>
            </td>
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
                <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="p-[6px] text-blue-500 flex items-center justify-center gap-2 border-[1px] border-blue-500 hover:border-blue-400 hover:text-blue-400 rounded-md active:scale-95 duration-150">
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                                <h2>Make Seller</h2>
                            </button>
                        </a></li>
                        <li className='hover:bg-gray-200 p-2 rounded'><a>
                            <button class="text-gray-500 transition-colors duration-200 hover:text-amber-500 focus:outline-none flex items-center justify-center gap-2">
                                <RiErrorWarningLine className='font-light' size={20} />
                                <h2>Disable User</h2>
                            </button>
                        </a></li>
                        <li className='hover:bg-gray-200 p-2 rounded'><a>
                            <button class="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                                <h2>Delete User</h2>
                            </button>
                        </a></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
};

export default RequestedProductRow;