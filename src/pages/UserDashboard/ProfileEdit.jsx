import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiFacebookFill } from 'react-icons/ri';
import ImageUpload from './ImageUpload';

const ProfileEdit = ({setEdit}) => {
    return (
        <div className='max-w-[380px] bg-base-100 p-6 rounded-xl border-2 border-slate-200'>
            <div className='flex items-center justify-between'>
                <h2 className='font-semibold'>Edit Your Profile</h2>
            </div>
            <div className='my-8 w-full flex flex-col items-center justify-center space-y-2'>
                <div className=''>
                    {/* <BsPersonCircle size={80} /> */}
                    <ImageUpload/>
                </div>
                <div className='text-center'>
                    <h2 className='font-semibold'>Geneva Mcknight</h2>
                    <h4 className='text-sm font-light'>@webdeveloper</h4>
                </div>
                <div className='w-full'>
                    <h2 className='font-semibold'>Edit Your Bio :</h2>
                    <p className='text-sm pt-2'>{"Hi I'm jonathan Deo, has been the dummy text since the 1500s, when an took a evergolley of type."}</p>
                </div>
                <div className='w-full pt-4 space-y-2'>
                    <div className='flex items-center justify-start gap-2'>
                        <div className='w-[35%] font-semibold flex items-center justify-between'>
                            <h2>Full Name </h2>
                            <p>:</p>
                        </div>
                        <h3 className='text-sm'>Geneva D. Mcknight</h3>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <div className='w-[35%] font-semibold flex items-center justify-between'>
                            <h2>Mobile </h2>
                            <p>:</p>
                        </div>
                        <h3 className='text-sm'>+880 1903 219313</h3>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <div className='w-[35%] font-semibold flex items-center justify-between'>
                            <h2>Email </h2>
                            <p>:</p>
                        </div>
                        <h3 className='text-sm'>gazimaksudur2@gmail.com</h3>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <div className='w-[35%] font-semibold flex items-center justify-between'>
                            <h2>Location </h2>
                            <p>:</p>
                        </div>
                        <h3 className='text-sm'>Bangladesh</h3>
                    </div>
                    <div className='pt-5 flex items-center justify-center gap-5'>
                        <RiFacebookFill size={35} className='bg-slate-800 text-white rounded-full p-[6px] cursor-pointer' />
                        <FaInstagram size={35} className='bg-slate-800 text-white rounded-full p-[6px] cursor-pointer' />
                        <FaXTwitter size={35} className='bg-slate-800 text-white rounded-full p-[6px] cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='py-4 flex gap-6'>
                <button onClick={()=>setEdit(false)} className='btn btn-sm bg-slate-700 text-white hover:bg-base-200 hover:text-slate-700 border-2 duration-150'>Save Changes</button>
                <button onClick={()=>setEdit(false)} className='btn btn-sm hover:bg-slate-700 hover:text-white bg-base-200 text-slate-700 border-2 duration-150'>Cancel</button>
            </div>
        </div>
    );
};

export default ProfileEdit;