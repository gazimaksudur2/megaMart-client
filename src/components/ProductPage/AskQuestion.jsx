import React, { useState } from 'react';
import { Link, ScrollRestoration, useLocation } from 'react-router-dom';
import TitleBanner from '../../shared/TitleBanner';
import { Rating } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const AskQuestion = () => {
    const location = useLocation();
    const { user } = useAuth();
    const [value, setValue] = useState(0);
    const product = location?.state?.product;
    const handleQuestion = e => {
        e.preventDefault();
    }
    // console.log(location);
    return (
        <div>
            <ScrollRestoration />
            <TitleBanner title={'Ask a Question'} route={'Product / Question'} />
            <div className='w-full flex items-center justify-center  my-12'>
                <div className="bg-base-100 w-full max-w-lg shrink-0 shadow-xl rounded" >
                    <form onSubmit={handleQuestion} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product</span>
                            </label>
                            <input name='product' type={'text'} value={product?.productName} className="input input-bordered disabled:text-gray-600 rounded w-full" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <h4 className="label-text">Your E-Mail <span className='text-red-500'>*</span></h4>
                            </label>
                            <input name='mail' type="email" value={user?.email} className="input input-bordered disabled:text-gray-600 rounded w-full" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <h4 className="label-text">Your Question <span className='text-red-500'>*</span></h4>
                            </label>
                            <textarea name='review' className="textarea textarea-bordered" placeholder="Write your Question here"></textarea>
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

export default AskQuestion;