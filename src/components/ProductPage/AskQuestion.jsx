import React from 'react';
import { Link, ScrollRestoration, useLocation, useNavigate } from 'react-router-dom';
import TitleBanner from '../../shared/TitleBanner';
import { Rating } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const AskQuestion = () => {
    const location = useLocation();
    const { userDB } = useAuth();
    const axios = useAxios();
    const navigate = useNavigate();
    const product = location?.state?.product;
    const handleQuestion = e => {
        e.preventDefault();
        const form = new FormData(e.target);

        const question = form.get('question');
        // console.log(question);
        const questionInfo = {
            customer: userDB?.username,
            customer_email: userDB?.email,
            product_id: product?._id,
            product_name: product?.product_name,
            product_category: product?.category,
            postedAt: new Date().toLocaleString(),
            question,
            answered: false,
        };
        axios.post('/questions',questionInfo, {withCredentials: true})
            .then(res=>{
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Thank You!",
                        text: "You Review submitted Successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    e.target.reset();
                    navigate(`/product/${product?._id}`);
                }else {
                    Swal.fire({
                        title: "Error Occured!",
                        text: "Unfortunately Your question isnot perfectly submitted",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
            })
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
                            <input name='product' type={'text'} value={product?.product_name} className="input input-bordered disabled:text-gray-600 rounded w-full" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <h4 className="label-text">Your E-Mail <span className='text-red-500'>*</span></h4>
                            </label>
                            <input name='mail' type="email" value={userDB?.email} className="input input-bordered disabled:text-gray-600 rounded w-full" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <h4 className="label-text">Your Question <span className='text-red-500'>*</span></h4>
                            </label>
                            <textarea name='question' className="textarea textarea-bordered" placeholder="Write your Question here" required></textarea>
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