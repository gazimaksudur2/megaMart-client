import { Modal } from 'antd';
import React, { useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { FaSortDown } from 'react-icons/fa';
import { MdOutlineDone } from 'react-icons/md';
import { RiErrorWarningLine } from 'react-icons/ri';
import { TbUserEdit } from 'react-icons/tb';
import { Tooltip } from 'react-tooltip';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';

const ActiveProductRow = ({ product, refetch }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const axiosPublic = useAxios();
    const [add, setAdd] = useState(1);
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

    const handleSubmit = e => {
        e.preventDefault();
        setIsModalOpen(false);
        axiosPublic.patch(`/products?id=${product?._id}`, {availableQuantity: parseInt(parseInt(product?.availableQuantity)+add)})
            .then(res=>{
                if(res.data.modifiedCount){
                    Swal.fire({
                        title: "Perfect Job",
                        text: "Product Stock updated Successfully",
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    refetch();
                } else {
                    Swal.fire({
                        title: "Try Again!",
                        text: "Stock is not appropriate to be updated",
                        icon: 'warning',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    console.log("product modification failed but server called perfectly")
                };
            })
            .catch(err=>{
                Swal.fire({
                    title: "Failed!!",
                    text: "Product Stock not updated",
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
        // console.log(add);
    }
    // console.log(product);
    const productDetails = <>
        <div>
            <CgDetailsMore id='tooltip' onClick={showModal} className='hover:bg-amber-50 bg-gray-100 hover:text-amber-500 rounded-full p-1 duration-200' size={25} />
            <Tooltip anchorSelect='#tooltip' content='details' place='bottom' offset={5} />
            <Modal title="Active Product Details" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <div className='my-5 flex flex-col items-center justify-center gap-2'>
                    <img className='w-56 rounded-xl' src={product?.productImage[0]} alt="product image" />
                    <div className='w-full flex flex-col gap-1'>
                        <h2 className='text-lg text-gray-600 text-center'>{product?.productName}</h2>
                        <form onSubmit={handleSubmit} className='w-full pt-4 space-y-2'>
                            <div className='flex items-center justify-start gap-2'>
                                <div className='w-[35%] font-semibold flex items-center justify-between capitalize'>
                                    <h2>Category </h2>
                                    <p>:</p>
                                </div>
                                <h3 className='text-sm'>{product?.productCategory}</h3>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <div className='w-[35%] font-semibold flex items-center justify-between capitalize'>
                                    <h2>Brand </h2>
                                    <p>:</p>
                                </div>
                                <h3 className='text-sm'>{product?.brand}</h3>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <div className='w-[35%] font-semibold flex items-center justify-between'>
                                    <h2>Add New Stock </h2>
                                    <p>:</p>
                                </div>
                                <div className='flex items-center justify-center gap-2'>
                                    <CiSquareMinus className='cursor-pointer' onClick={() => add>0 && setAdd(add - 1)} size={20} />
                                    <h2 className='text-sm text-gray-700 font-medium'>{add}</h2>
                                    <CiSquarePlus className='cursor-pointer' onClick={() => setAdd(add + 1)} size={20} />
                                </div>
                                {/* <h3 className='text-sm'>MD. Rashed Majumder</h3> */}
                                {/* <input type="number" className=''/> */}
                            </div>
                            {/* <div className='flex items-center justify-start gap-2'>
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
                            </div> */}
                            <div className='w-full flex items-center justify-end'>
                                <button className='btn btn-primary btn-sm '>Add Stock</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    </>;

    return (
        <tr className=''>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center gap-x-3">

                    <div class="flex items-center gap-x-2">
                        <img class="object-cover w-10 h-10 rounded-full" src={product?.productImage[0]} alt="product image" />
                        <div>
                            <h2 class="font-medium text-gray-800 ">{product?.productName}</h2>
                            <p class="text-sm font-normal text-gray-600">{product?.brand}</p>
                        </div>
                        {
                            productDetails
                        }
                    </div>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">#{product?._id.slice(-10)}</td>
            <td class="px-4 py-4 text-sm text-gray-500 text-center whitespace-nowrap">{product?.productCategory}</td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">${product?.actualPrice}</td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap text-center">{product?.availableQuantity}</td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap text-center">{product?.rating}</td>
            <td class="px-4 py-4 text-sm whitespace-nowrap ">

                <div className="flex items-center justify-center gap-4">
                    {/* <button class="p-1 text-gray-500 transition-colors duration-200 hover:text-emerald-500 hover:bg-emerald-50 rounded-full focus:outline-none flex items-center justify-center gap-2">
                        <RiErrorWarningLine className='font-light' size={20} />
                        <MdOutlineDone className='font-light' size={20} />
                    </button> */}
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

export default ActiveProductRow;