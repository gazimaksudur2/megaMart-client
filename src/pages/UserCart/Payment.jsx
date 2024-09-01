import React from 'react';
import { useForm } from 'react-hook-form';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Payment = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='relative'>
            <Link to={'/checkout'} className='absolute -top-12 left-6 p-2 bg-orange-500 text-white inline-block rounded-full hover:bg-orange-400'>
                <IoChevronBackOutline size={30} />
            </Link>
            <div className='p-6 flex items-center justify-between'>
                <div className='w-[45%] flex items-center justify-center'>
                    <img className='w-96' src="https://th.bing.com/th/id/R.aa71aa3685bcde92114d52e40fcee4a1?rik=uUDuuaijbNUWaQ&pid=ImgRaw&r=0" alt="Card image" />
                </div>
                <div className='bg-base-200 p-6 rounded-md w-[40%]'>
                    <h2 className='text-2xl font-semibold font-open pb-5'>Payment Details</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 p-2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Name on Your Card</span>
                            </div>
                            <input {...register("name", { required: true, maxLength: 20 })} type="text" placeholder="A N OTHER" className="input input-bordered w-full"/>
                        </label>
                        <label className="w-full">
                            <div className="label">
                                <span className="label-text">Card Number</span>
                            </div>
                            <input  type="text" {...register("card_no",{ required: true })} placeholder="4588 7000 4568 8910" className="input input-bordered w-full"/>
                        </label>
                        <label className="w-full">
                            <div className="label">
                                <span className="label-text">Valid Through</span>
                            </div>
                            <input {...register("validity", { required: true, maxLength: 20 })} type="text" placeholder="12 / 20" className="input input-bordered w-full"/>
                        </label>
                        <label className="w-full">
                            <div className="label">
                                <span className="label-text">CVV</span>
                            </div>
                            <input {...register("cvv", { required: true, maxLength: 20 })} type="text" placeholder="20" className="input input-bordered w-full"/>
                        </label>
                        <input className='btn bg-orange-500 text-white rounded hover:bg-orange-400 w-full' type="submit" value={`Pay $${(450).toPrecision(4)}`}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;