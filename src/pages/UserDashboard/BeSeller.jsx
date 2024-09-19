import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { ScrollRestoration } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { Spin } from 'antd';

const BeSeller = () => {
    const { userDB, refetch } = useAuth();
    const axios = useAxios();
    const sellFacility = [
        {
            title: "Highly Reputed",
            info: "Millions of customers on MegaMart, Bangladesh's most visited shopping destination",
            image: "https://cdn-icons-png.freepik.com/256/11921/11921528.png?ga=GA1.1.820294120.1714974066&semt=ais_hybrid",
        },
        {
            title: "Free Registration",
            info: "Account registration & listing items for sale is free",
            image: "https://cdn-icons-png.freepik.com/256/1598/1598591.png?ga=GA1.1.820294120.1714974066&semt=ais_hybrid",
        },
        {
            title: "Reliable Shipping",
            info: "Fast, reliable and hassle free delivery through MegaMart logistic network",
            image: "https://cdn-icons-png.freepik.com/256/762/762152.png?ga=GA1.1.820294120.1714974066&semt=ais_hybrid",
        },
        {
            title: "Timely Payments",
            info: "Funds are safely deposited directly to your bank account on a weekly basis",
            image: "https://cdn-icons-png.freepik.com/256/13010/13010328.png?ga=GA1.1.820294120.1714974066&semt=ais_hybrid",
        },
        {
            title: "Marketing Tools",
            info: "Find new customers & grow more with advertising and our whole range of marketing tools",
            image: "https://cdn-icons-png.freepik.com/256/2518/2518025.png?ga=GA1.1.820294120.1714974066&semt=ais_hybrid",
        },
        {
            title: "Support & Training",
            info: "Learn all about E-commerce for free and get help with seller support and MegaMart Community",
            image: "https://cdn-icons-png.freepik.com/256/12251/12251876.png?ga=GA1.1.820294120.1714974066&semt=ais_hybrid",
        }
    ]
    const info = {
        pending: {
            image: "https://img.freepik.com/premium-vector/illustration-newsletter-service-subscription-concept-with-woman-subscribe-newsletter-from-phone_675567-3061.jpg?uid=R113556208&ga=GA1.1.820294120.1714974066&semt=ais_hybrid",
            title: "Your Request is received",
            message: "Admin will review your request in a very short. We highly appreciate your interest in becoming a seller on our platform! we are excited about the unique products and value you'll bring to our marketplace. We look forward to supporting your success with us!",
        },
        approved: {
            image: "https://img.freepik.com/premium-photo/accepted-rubber-stamp-3d-illustration-isolated-white-background_839035-1821275.jpg?uid=R113556208&ga=GA1.1.820294120.1714974066&semt=ais_hybrid",
            title: 'Welcome to our Platform',
            message: "Welcome to our platform! We're excited to have you join our community of sellers and look forward to supporting your journey to success. If you need any assistance, don't hesitate to reach out—we're here to help you every step of the way!",
        },
        rejected: {
            image: "https://t3.ftcdn.net/jpg/06/92/50/30/240_F_692503047_tFU2Uc6rkdKUCEwTbM1vYW5DuzAC8YTW.jpg",
            title: "Best wishes for next time",
            message: "Thank you for your application. After careful consideration, we have decided to move forward with other candidates, but we truly appreciate your interest and wish you all the best in your future endeavors."
        },
        unattempted: {
            image:'',
            title: '',
            message: '',
        }
    }
    const appliedContent = <>
        <div className='flex flex-col items-center justify-center gap-1 text-center'>
            <img className='w-72' src={info[(userDB?.sellerRequest?.status)].image} alt="status image" />
            <h2 className='text-2xl pb-3 font-semibold text-gray-700'>{info[(userDB?.sellerRequest?.status)].title }</h2>
            <h4 className='text-sm w-[60%]'>{info[(userDB?.sellerRequest?.status)].message }</h4>
        </div>
    </>;
    const handleSeller = e => {
        e.preventDefault();
        const sellerRequest = {
            status: 'pending',
            requestMessage: e.target.message.value,
        }
        // request status unattempted, pending, approved, rejected 
        axios.patch(`/user?id=${userDB?._id}`, sellerRequest, { withCredentials: true })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Submitted successfully!!",
                        text: "Request to be a seller",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false,
                    });
                    refetch();
                    e.target.reset();
                } else {
                    Swal.fire({
                        title: "Error Occured!!",
                        text: 'Request cannot submit successfully',
                        icon: "error",
                        timer: 2000,
                        showConfirmButton: false,
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "Failed!!",
                    text: error.message,
                    icon: "error",
                    timer: 2000,
                    showConfirmButton: false,
                });
            })
    }
    // console.log(!userDB);

    if (!userDB) {
        return <div className='h-full flex items-center justify-center'>
            <Spin size='large' />
        </div>
    }

    return (
        <div className='p-10'>
            <ScrollRestoration />
            {/* <h2 className='text-xl font-semibold text-gray-700'>Create a Seller Account</h2> */}
            <h2 className='text-2xl font-semibold text-gray-700'>Why sell on MegaMart?</h2>
            <div className='w-full p-6 mt-10 flex flex-wrap items-start justify-between gap-5'>
                {
                    sellFacility.map((each, idx) => <>
                        <div key={idx} className='basis-72 flex-1 h-44 bg-gradient-to-br from-blue-50 to-blue-100  p-5 flex items-center justify-center gap-5 rounded-lg'>
                            <img className='w-20 h-20 object-cover' src={each.image} alt="eachImage" />
                            <div className='flex flex-col items-start justify-between'>
                                <h2 className='pb-4 text-xl font-semibold text-gray-600'>{each?.title}</h2>
                                <p className='text-sm'>{each?.info}</p>
                            </div>
                        </div>
                    </>)
                }
            </div>
            {
                (userDB?.sellerRequest?.status === 'unattempted') ? <>
                    <form onSubmit={handleSeller} className="card-body w-[60%] mx-auto">
                        <h2 className='text-2xl font-semibold text-gray-600 text-center my-6'>Seller Request Form</h2>
                        <div className='w-full flex justify-between'>
                            <div className="form-control w-[48%]">
                                <label className="label">
                                    <span className="label-text">First Name *</span>
                                </label>
                                <input value={userDB?.first_name} className="input input-bordered rounded disabled:text-gray-600" disabled />
                            </div>
                            <div className="form-control w-[48%]">
                                <label className="label">
                                    <span className="label-text">Last Name *</span>
                                </label>
                                <input value={userDB?.last_name} className="input input-bordered rounded disabled:text-gray-600" disabled />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email *</span>
                            </label>
                            <input type="email" value={userDB?.email} className="input input-bordered rounded disabled:text-gray-600" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Request Message</span>
                            </label>
                            <textarea name='message' className="textarea textarea-bordered rounded disabled:text-gray-600" placeholder="Write Your Message Here" required></textarea>
                        </div>
                        <div className='flex items-center justify-start gap-2 pt-6'>
                            <input type="checkbox" className="checkbox checkbox-sm" required />
                            <h4 className='text-sm font-semibold'>{"I've read and accept the Privacy Policy"}</h4>
                        </div>
                        <p className='text-xs'>By submitting request, you agree to our <a href="#" className='font-semibold hover:underline hover:text-yellow-600'>Terms of Services.</a> Learn how we collect and use your data in our <a href="#" className='font-semibold hover:underline hover:text-yellow-600'>Privacy Policy.</a></p>
                        <div className="form-control mt-6 space-y-3">
                            <button className="btn btn-warning text-white rounded-none uppercase ">Submit Request</button>
                        </div>
                    </form>
                </> : appliedContent
            }
        </div>
    );
};

export default BeSeller;