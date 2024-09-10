import React, { useState } from 'react';
import { Link, ScrollRestoration, useLocation } from 'react-router-dom';
import TitleBanner from '../../shared/TitleBanner';
import { Rating } from '@mui/material';

const WriteReview = () => {
    const location = useLocation();
    const [value, setValue] = useState(0);
    const product = location?.state?.product;
    const handleReview = e => {
        e.preventDefault();
    }
    return (
        <div>
            <ScrollRestoration />
            <TitleBanner title={'Write a Review'} route={'Product / Review'} />
            <div className='w-full flex items-center justify-center  my-12'>
                <div className="bg-base-100 w-full max-w-lg shrink-0 shadow-xl rounded" >
                    <form onSubmit={handleReview} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product</span>
                            </label>
                            <input name='password' type={'text'} value={product?.productName} className="input input-bordered disabled:text-gray-600 rounded w-full" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <h4 className="label-text">Rating <span className='text-red-500'>*</span></h4>
                            </label>
                            <div className='text-xs p-3 flex items-center justify-start gap-3'>
                                <h2>Very Bad</h2>
                                <Rating
                                    name="half-rating"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    precision={0.5}
                                    aria-required
                                />
                                <h2>Very Good</h2>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <h4 className="label-text">Your Review <span className='text-red-500'>*</span></h4>
                            </label>
                            <textarea name='review' className="textarea textarea-bordered" placeholder="Write your review"></textarea>
                        </div>
                        <div className="form-control mt-6 space-y-3">
                            <button className="btn btn-warning text-white rounded-none uppercase ">Submit</button>
                            <Link to={`/product/${product?._id}`} className="btn bg-[#181818] hover:bg-white text-white hover:text-black rounded-none uppercase flex-1">Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WriteReview;