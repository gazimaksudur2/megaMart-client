import React from 'react';
import { GoCodeReview } from 'react-icons/go';

const Reviews = () => {
    const emptyReview = <div className='flex flex-col items-center justify-center gap-6'>
        <GoCodeReview size={30} className='text-slate-600' />
        <p className='text-lg text-slate-600'>Currently!! Reviews are not available or reviewed yet..</p>
    </div>
    return (
        <div className='my-4'>
            <div className='pb-4 border-b-2 flex items-center justify-between px-4'>
                <div >
                    <h2 className='text-lg  font-semibold'>Reviews (0)</h2>
                    <p>Get specific details about this product from customers who own it.</p>
                </div>
                <button className='btn btn-outline px-10 rounded text-blue-800 hover:bg-blue-900'>Write a Review</button>
            </div>
            <div className='my-10'>
                {
                    emptyReview
                }
            </div>
        </div>
    );
};

export default Reviews;