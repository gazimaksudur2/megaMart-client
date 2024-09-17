import React, { useState } from 'react';
import { Link, ScrollRestoration, useLocation, useNavigate } from 'react-router-dom';
import TitleBanner from '../../shared/TitleBanner';
import { Rating } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const WriteReview = () => {
    const { userDB } = useAuth();
    const axios = useAxios();
    const location = useLocation();
    const [value, setValue] = useState(0);
    const product = location?.state?.product;
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: (info) => {
            axios.post('/reviews', info)
        },
    })

    const handleReview = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const review = form.get('review');
        const reviewInfo = {
            customer: userDB?.username,
            customer_email: userDB?.email,
            product_id: product?._id,
            product_name: product?.product_name,
            product_category: product?.category,
            postedAt: new Date().toLocaleString(),
            review,
            rating: value,
        };
        mutation.mutate(reviewInfo);
        if (mutation.isSuccess) {
            Swal.fire({
                title: "Thank You!",
                text: "You Review submitted Successfully!",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
            });
            navigate(`/product/${product?._id}`);
        }else if(mutation.isError){
            Swal.fire({
                title: "Error Occured!",
                text: mutation.error.message,
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
            });
        }

        // e.target.reset();
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
                            <input name='password' type={'text'} value={product?.product_name} className="input input-bordered disabled:text-gray-600 rounded w-full" disabled />
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
                                    required
                                />
                                <h2>Very Good</h2>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <h4 className="label-text">Your Review <span className='text-red-500'>*</span></h4>
                            </label>
                            <textarea name='review' className="textarea textarea-bordered" placeholder="Write your review" required></textarea>
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