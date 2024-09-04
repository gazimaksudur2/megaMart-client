import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoMdAdd } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';

const SavedPayment = () => {
    return (
        <div className='min-w-[600px] bg-base-100 p-6 rounded-xl border-2 border-slate-200'>
            <div className=''>
                <h2 className='font-semibold'>Saved Payment Gateway</h2>
            </div>
            <div className='my-10 pr-10 flex flex-col gap-6'>
                <div className='flex items-center justify-between p-4 border-2 hover:border-slate-200 border-white hover:rounded bg-slate-100 duration-100'>
                    <div className='flex items-center gap-2'>
                        <img className='w-10 h-10' src="https://img.alicdn.com/imgextra/i3/O1CN01WCvNHS1szr0jNLEZT_!!6000000005838-2-tps-667-667.png" alt="nagad image" />
                        <h2 className='font-semibold'>Nagad Pvt. Ltd</h2>
                    </div>
                    <h4 className='text-sm'>01903****13</h4>
                    <div className=''>
                        <MdDeleteOutline className='bg-slate-300 rounded-full p-2 cursor-pointer' size={35} />
                    </div>
                </div>
                <div className='flex items-center justify-between p-4 border-2 hover:border-slate-200 border-white hover:rounded bg-slate-100 duration-100'>
                    <div className='flex items-center gap-2'>
                        <img className='w-10 h-10' src="https://laz-img-cdn.alicdn.com/tfs/TB14FT1JpOWBuNjy0FiXXXFxVXa-400-400.png" alt="bkash image" />
                        <h2 className='font-semibold'>Bkash Pvt. Ltd</h2>
                    </div>
                    <h4 className='text-sm'>01538****21</h4>
                    <div className=''>
                        <MdDeleteOutline className='bg-slate-300 rounded-full p-2 cursor-pointer' size={35} />
                    </div>
                </div>
            </div>
            <button className='btn hover:bg-slate-700 hover:text-white bg-base-200 text-slate-700 border-2 duration-150'>
                <IoMdAdd size={20} />
                Add a Payment Option
            </button>
        </div>
    );
};

export default SavedPayment;