import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const MakeShip = () => {
    const { handleSubmit, register } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='flex items-start justify-start'>
            <div className='w-[30%] p-6 bg-base-200 rounded'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-3'>
                        <h2 className='capitalize mb-6 font-semibold text-xl'>Calculate Shipping</h2>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">State</span>
                            </label>
                            <input {...register("state", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="State / Country" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input {...register("town", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Town / City" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Postcode</span>
                            </label>
                            <input {...register("zip", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Postcode / ZIP" className="input input-bordered rounded" required />
                        </div>
                    </div>
                    <input type="submit" className='btn rounded bg-black text-white w-40' value={'Calculate'} />
                </form>
            </div>
            <div className='ml-[25%] bg-base-200 p-6 rounded w-[30%]'>
                <div className='space-y-8'>
                    <div className='space-y-3'>
                        <div className='border-b-2 mb-6 pb-3 flex justify-between pr-4'>
                            <h2 className='capitalize font-semibold text-lg'>Subtotal</h2>
                            <p className='text-lg font-beginner font-semibold text-yellow-600'>$180.00</p>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="font-medium">Shipping</span>
                            </label>
                            <div className='space-y-1'>
                                <div className='flex items-center justify-start gap-2'>
                                    <input type="radio" name="radio-6" className="radio radio-xs radio-warning" />
                                    <h3 className='text-sm pb-1'>Free shipping</h3>
                                </div>
                                <div className='flex items-center justify-start gap-2'>
                                    <input type="radio" name="radio-6" className="radio radio-xs radio-warning" />
                                    <h3 className='text-sm pb-1'>Flat rate: $100.00</h3>
                                </div>
                                <div className='flex items-center justify-start gap-2'>
                                    <input type="radio" name="radio-6" className="radio radio-xs radio-warning" />
                                    <h3 className='text-sm pb-1'>Local Pickup: $120.00</h3>
                                </div>
                                <div className='flex items-center justify-start gap-2'>
                                    <input type="radio" name="radio-6" className="radio radio-xs radio-warning" />
                                    <h3 className='text-sm pb-1'>DropOut Point Pickup: $60.00</h3>
                                </div>
                            </div>
                        </div>
                        <h2 className='py-2 px-3 bg-cyan-400 border-l-8 border-cyan-500 rounded text-lg text-white font-semibold font-open'>Shipping to Bangladesh</h2>
                        <div className='flex items-center justify-between pr-10'>
                            <h4 className='font-light'>Shipping Cost:</h4>
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className='border-t-2 border-slate-200 pt-3 flex justify-between pr-4'>
                        <h2 className='capitalize font-semibold text-xl'>Total</h2>
                        <p className='text-xl font-beginner font-semibold text-yellow-600'>$180.00</p>
                    </div>
                    <div className='mt-10'>
                        <Link to={'/checkout'}>
                            <button className='btn btn-warning rounded text-white w-full capitalize'>Proceed to checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeShip;