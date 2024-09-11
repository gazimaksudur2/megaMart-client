import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { ScrollRestoration } from 'react-router-dom';

const BeSeller = () => {
    const { user } = useAuth();
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
    // console.log(user);
    const handleSeller = e => {
        e.preventDefault();
        Swal.fire({
            title: "Submitted successfully!!",
            text: "Request to be a seller",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
        });
    }
    return (
        <div className='p-10'>
            <ScrollRestoration/>
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

            <form onSubmit={handleSeller} className="card-body w-[60%] mx-auto">
                <h2 className='text-2xl font-semibold text-gray-600 text-center mt-6'>Seller Request Form</h2>
                <div className='w-full flex justify-between'>
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">First Name *</span>
                        </label>
                        <input name="first_name" value={user?.firstName} className="input input-bordered rounded disabled:text-gray-600" disabled />
                    </div>
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">Last Name *</span>
                        </label>
                        <input name="last_name" placeholder={user?.lastName} className="input input-bordered rounded disabled:text-gray-600" disabled />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email *</span>
                    </label>
                    <input type="email" name='mail' value={user?.email} className="input input-bordered rounded disabled:text-gray-600" disabled />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Request Message</span>
                    </label>
                    <textarea name='message' className="textarea textarea-bordered rounded disabled:text-gray-600" placeholder="Write Your Message Here"></textarea>
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
        </div>
    );
};

export default BeSeller;