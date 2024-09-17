import { Rating } from '@mui/material';
import React from 'react';
import { GoCodeReview } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Reviews = ({ product }) => {
    const emptyReview = <div className='flex flex-col items-center justify-center gap-6'>
        <GoCodeReview size={30} className='text-slate-600' />
        <p className='text-lg text-slate-600'>Currently!! Reviews are not available or reviewed yet..</p>
    </div>
    const overallRating = (product?.reviews.reduce((prev, cur)=>{return prev+cur.rating},0)/product?.reviews?.length);
    return (
        <div className='my-4'>
            <div className='pb-4 border-b-2 flex items-center justify-between px-4'>
                <div >
                    <h2 className='text-lg  font-semibold'>Verified Customer Reviews</h2>
                    <p>Get specific details about this product from customers who own it.</p>
                    <div className='pt-4 flex items-center justify-start gap-2 text-lg font-light'>
                        <h2>Overall Review Rating</h2>
                        <Rating name="half-rating-read" value={overallRating} precision={0.5} readOnly />
                        <h2>{isNaN(overallRating)? 0 : overallRating} out of 5</h2>
                    </div>
                </div>
                <Link to={'/userActivity/writeReview'} state={{ product: product }} className='btn btn-outline px-10 rounded text-blue-800 hover:bg-blue-900'>Write a Review</Link>
            </div>
            <div className='my-10'>
                {
                    product?.reviews?.length === 0 ? emptyReview : <>
                        <div className='space-y-4'>
                            {
                                product?.reviews.map((review, idx) => <>
                                    <div key={idx}>
                                        <div className='flex flex-col items-start justify-center gap-1 text-gray-900 text-lg'>
                                            <div className='flex items-center justify-start gap-3'>
                                                <Rating name="half-rating-read2" value={review?.rating} size='small' precision={0.5} readOnly />
                                                <h2>{review?.rating} out of 5</h2>
                                            </div>
                                            <h4 className='text-[16px] font-light pt-2'>{review?.review}</h4>
                                            <h2 className='text-sm text-gray-700'>By <span className='text-blue-700 font-medium'>{review?.customer}</span><p className='inline'> on </p><span className=''>{(review?.reviewedAt)}</span></h2>
                                        </div>
                                    </div>
                                </>)
                            }
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Reviews;