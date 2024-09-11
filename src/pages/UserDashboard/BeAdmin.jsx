import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { ScrollRestoration } from 'react-router-dom';

const BeAdmin = () => {
    const { user } = useAuth();
    const adminRequest = {
        approved: false,
        requested: true,
    }
    const message = {
        title: 'Join Us Now',
        info: 'This will offer opportunities to develop organizational, communication, and technical skills while gaining exposure to the fast-paced world of online retail, customer service, and operational management.'
    }
    // console.log(user);
    const handleSeller = e => {
        e.preventDefault();
        Swal.fire({
            title: "Submitted successfully!!",
            text: "Request for Admin Role",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
        });
    }
    const appliedContent = <>
        <div className='flex flex-col items-center justify-center gap-1 text-center'>
            <img className='w-44' src="https://img.freepik.com/premium-psd/verified-3d-icon_465216-432.jpg?ga=GA1.1.820294120.1714974066&semt=ais_hybrid" alt="done image" />
            <h2 className='text-2xl pb-3 font-semibold text-gray-700'>Your Request is Under Review</h2>
            <h4 className='text-sm w-[60%]'>{"Thank you for taking the time to apply to our e-commerce platform! We truly appreciate the effort and passion you've shown in your application, and we're excited about the possibility of working with someone who shares our vision. Best of luck, and we look forward to connecting with you soon!"}</h4>
        </div>
    </>;
    return (
        <div className='p-10'>
            <ScrollRestoration />
            {/* <h2 className='text-xl font-semibold text-gray-700'>Create a Seller Account</h2> */}
            <h2 className='capitalize text-2xl font-semibold text-gray-700'>Build your career with us!!</h2>
            <div className='flex items-center justify-evenly'>
                <img className='w-96' src="https://img.freepik.com/premium-psd/boy-is-working-computer-with-word-im-working-it_1201401-3416.jpg?ga=GA1.1.820294120.1714974066&semt=ais_hybrid" alt="adminImage" />
                <div className='w-[40%] space-y-3'>
                    <h2 className="text-xl font-semibold bg-gradient-to-r from-amber-600 to-violet-500 bg-clip-text text-transparent">
                        {message?.title}
                    </h2>
                    <p className='text-sm'>{message?.info}</p>
                </div>
            </div>

            {
                adminRequest?.requested ? appliedContent : <>
                    <form onSubmit={handleSeller} className="card-body w-[60%] mx-auto">
                        <h2 className='text-2xl font-semibold text-gray-600 text-center'>Request for Admin Role</h2>
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
                </>
            }
        </div>
    );
};

export default BeAdmin;