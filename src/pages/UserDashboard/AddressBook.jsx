import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoMdAdd } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';

const AddressBook = () => {
    return (
        <div className='min-w-[600px] bg-base-100 p-6 rounded-xl border-2 border-slate-200'>
            <div className=''>
                <h2 className='font-semibold'>Address Book</h2>
                {/* <button className='px-2 py-1 border-2 border-opacity-70 rounded flex items-center justify-center gap-2 active:scale-95 duration-150 hover:text-white hover:bg-slate-600 hover:border-slate-600'>
                    <CiEdit size={15} />
                    <p className='text-sm'>Edit</p>
                </button> */}
            </div>
            <div className='my-8 pr-10 grid grid-cols-2 gap-6'>
                <div className='p-4 border-2 hover:border-slate-200 border-white hover:rounded flex flex-col justify-start items-start gap-2 bg-slate-100 duration-100'>
                    <h4 className='text-slate-500 text-sm'>Default Shipping Address</h4>
                    <h3 className='pt-2 font-semibold font-open'>Gazi Maksudur Rahman</h3>
                    <div className='text-sm'>
                        <p>house no:2 road no:1</p>
                        <p>Sylhet - Sylhet Sadar - Nehari Para</p>
                        <p>(+880) 1903 219313</p>
                    </div>
                    <div className='w-full py-2 flex items-center justify-end'>
                        <MdDeleteOutline className='bg-slate-300 rounded-full p-2 cursor-pointer' size={35} />
                    </div>
                </div>
                <div className='p-4 border-2 hover:border-slate-200 border-white hover:rounded flex flex-col justify-start items-start gap-2 bg-slate-100 duration-100'>
                    <h4 className='text-slate-500 text-sm'>Default Shipping Address</h4>
                    <h3 className='pt-2 font-semibold font-open'>Gazi Maksudur Rahman</h3>
                    <div className='text-sm'>
                        <p>house no:2 road no:1</p>
                        <p>Sylhet - Sylhet Sadar - Nehari Para</p>
                        <p>(+880) 1903 219313</p>
                    </div>
                    <div className='w-full py-2 flex items-center justify-end'>
                        <MdDeleteOutline className='bg-slate-300 rounded-full p-2 cursor-pointer' size={35} />
                    </div>
                </div>
            </div>
            <button className='btn hover:bg-slate-700 hover:text-white bg-base-200 text-slate-700 border-2 duration-150'>
                <IoMdAdd size={20} />
                Add An Address
            </button>
        </div>
    );
};

export default AddressBook;