import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';

const Address_Payment = ({ grandTotal, cartProducts }) => {
    const axios = useAxios();
    const { userDB } = useAuth();
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        // console.log(data, grandTotal);
        // receiver_account_name, receiver_email, sender_account_no, sender_email: userDB?.email, amount
        const paymentData = {
            receiver_account_name: "The Seller",
            receiver_email: "seller@gmail.com",
            sender_email: userDB?.email,
            sender_account_no: 'this is demo',
            amount: grandTotal,
            security: data.security,
            account_holder_name: data.name,
            account_no: data.card_no,
        }
        const orderInfo = {
            products: cartProducts,
            amount: grandTotal,
            delivery_mail: data.email,
            delivery_phone: data.phone,
            delivery_address: data.address,
            orderedAt: new Date(),
        }
        console.log(orderInfo);
        // axiosPublic.post('/orders', orderInfo)
        //     .then(res=>{
        //         console.log(res.data);
        //     })
        //     .catch(err=>{
        //         console.log(err.message);
        //     })
        axios.post('/orders', orderInfo, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    // axiosBank.post('/payment', paymentData)
                    //     .then(res => {
                    //         if (res.data.insertedId) {
                    //             Swal.fire({
                    //                 title: "Great Job",
                    //                 text: "Your order is in progress",
                    //                 icon: 'success',
                    //                 showConfirmButton: false,
                    //                 timer: 2000
                    //             })
                    //         }
                    //     })
                    //     .catch(err=>{
                    //         console.log(err.message);
                    //         Swal.fire({
                    //             title: "error in payment",
                    //             text: "Your order is in progress",
                    //             icon: 'success',
                    //             showConfirmButton: false,
                    //             timer: 2000
                    //         })
                    //     })
                }
            })
            .catch(err=>{
                console.log(err.message);
                Swal.fire({
                    title: "Error",
                    text: "Your order is in progress",
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
    }
    return (
        <div className='relative'>
            {/* <Link to={'/checkout'} className='absolute -top-12 left-6 p-2 bg-orange-500 text-white inline-block rounded-full hover:bg-orange-400'>
                <IoChevronBackOutline size={30} />
            </Link> */}
            <form onSubmit={handleSubmit(onSubmit)} className='p-6 flex items-center justify-between'>
                <div className='bg-base-200 p-6 rounded-md w-[40%]'>
                    <h2 className='text-2xl font-semibold font-open pb-5'>Delivery Address</h2>
                    <div className='space-y-4 p-2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email Address</span>
                            </div>
                            <input {...register("email", { required: true })} type="email" placeholder="demo@gmail.com" className="input input-bordered w-full" />
                        </label>
                        <label className="w-full">
                            <div className="label">
                                <span className="label-text">Phone Number</span>
                            </div>
                            <input type="text" {...register("phone", { required: true })} placeholder="8801745 688910" className="input input-bordered w-full" />
                        </label>
                        <label className="w-full">
                            <div className="label">
                                <span className="label-text">Address</span>
                            </div>
                            <textarea {...register("address", { required: true })} type="text" placeholder="Enter your delivery address" className="textarea textarea-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='bg-base-200 p-6 rounded-md w-[40%]'>
                    <h2 className='text-2xl font-semibold font-open pb-5'>Payment Details</h2>
                    <div className='space-y-4 p-2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Account Holder Name</span>
                            </div>
                            <input {...register("name", { required: true })} type="text" placeholder="A N OTHER" className="input input-bordered w-full" />
                        </label>
                        <label className="w-full">
                            <div className="label">
                                <span className="label-text">Card Number</span>
                            </div>
                            <input type="text" {...register("card_no", { required: true })} placeholder="4588 7000 4568" className="input input-bordered w-full" />
                        </label>
                        <label className="w-full">
                            <div className="label">
                                <span className="label-text">Security Key</span>
                            </div>
                            <input {...register("security", { required: true })} type="password" placeholder="******" className="input input-bordered w-full" />
                        </label>
                        <input className='btn bg-orange-500 text-white rounded hover:bg-orange-400 w-full' type="submit" value={`Pay $${grandTotal}`} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Address_Payment;