import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    const [shipDifferent, setShipDifferent] = useState(false);
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data);

    const handleAddress = e => {
        // console.log(e.target.checked);
        if (e.target.checked) {
            setShipDifferent(true);
        } else setShipDifferent(false);
    }

    const products = ['1', '2', '3'];

    return (
        <div className='relative'>
            <Link to={'/carts'} className='absolute -top-12 left-6 p-2 bg-orange-500 text-white inline-block rounded-full hover:bg-orange-400'>
                <IoChevronBackOutline size={30}/>
            </Link>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-base-100 p-6 rounded flex items-start justify-between'>
                <div className='w-[50%]'>
                    <h2 className='font-open text-xl font-semibold pb-2'>Billing Details</h2>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">First Name *</span>
                        </label>
                        <input {...register("first_name", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="John" className="input input-bordered rounded" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Last Name *</span>
                        </label>
                        <input {...register("last_name", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Doe" className="input input-bordered rounded" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Company Name (optional)</span>
                        </label>
                        <input {...register("company", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Ishaq Agro LTD." className="input input-bordered rounded" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country / Region *</span>
                        </label>
                        <input type="text" {...register("country", { pattern: /^[A-Za-z]+$/i })} placeholder="Bangladesh" className="input input-bordered rounded" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Street Address *</span>
                        </label>
                        <input {...register("street", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="House No. 147/A, Street No. 5" className="input input-bordered rounded" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">City *</span>
                        </label>
                        <input {...register("town", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Town / City" className="input input-bordered rounded" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">District *</span>
                        </label>
                        <input {...register("district", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="District" className="input input-bordered rounded" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Postcode / ZIP (optional)</span>
                        </label>
                        <input {...register("zip", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Postcode / ZIP" className="input input-bordered rounded" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone *</span>
                        </label>
                        <input {...register("phone", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="+880 1903 219313" className="input input-bordered rounded" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email Address *</span>
                        </label>
                        <input {...register("email", { pattern: /^[A-Za-z]+$/i })} type="email" placeholder="customer@demo.com" className="input input-bordered rounded" required />
                    </div>
                    <div className='flex items-center justify-start gap-2 pt-6'>
                        <input type="checkbox" className="checkbox checkbox-sm" onChange={handleAddress} />
                        <h4 className='text-sm font-open'>{"Ship to a different address?"}</h4>
                    </div>
                    <div className={shipDifferent ? "" : "hidden"}>
                        <h2 className='font-open text-xl font-semibold pb-2 pt-5'>Fill up your shipping Address</h2>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">First Name *</span>
                            </label>
                            <input {...register("first_name_ship", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="John" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Last Name *</span>
                            </label>
                            <input {...register("last_name_ship", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Doe" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Company Name (optional)</span>
                            </label>
                            <input {...register("company_ship", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Ishaq Agro LTD." className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country / Region *</span>
                            </label>
                            <input type="text" {...register("country_ship", { pattern: /^[A-Za-z]+$/i })} placeholder="Bangladesh" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Street Address *</span>
                            </label>
                            <input {...register("street_ship", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="House No. 147/A, Street No. 5" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">City *</span>
                            </label>
                            <input {...register("town_ship", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Town / City" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">District *</span>
                            </label>
                            <input {...register("district_ship", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="District" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Postcode / ZIP (optional)</span>
                            </label>
                            <input {...register("zip_ship", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Postcode / ZIP" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone *</span>
                            </label>
                            <input {...register("phone_ship", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="+880 1903 219313" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email Address *</span>
                            </label>
                            <input {...register("email_ship", { pattern: /^[A-Za-z]+$/i })} type="email" placeholder="customer@demo.com" className="input input-bordered rounded" required />
                        </div>
                    </div>
                    <div className="mt-4 form-control w-full">
                        <label className="label">
                            <span className="label-text">Order notes (optional)</span>
                        </label>
                        <textarea {...register("notes", { pattern: /^[A-Za-z]+$/i })} type="text" className="textarea textarea-bordered" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                    </div>

                </div>
                <div className='w-[40%]'>
                    <h2 className='text-xl font-open font-semibold mb-4'>Your Order</h2>
                    <div className="overflow-x-auto bg-base-200 p-6 rounded">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='w-2'></th>
                                    <th className='text-lg font-semibold'>Product</th>
                                    <th className='text-lg font-semibold text-right'>SubTotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products && products.map((value, idx) => <>
                                        <tr key={idx}>
                                            <td>{idx + 1}</td>
                                            <td className='flex items-center justify-start gap-4'>Cy Ganderton <p className='text-orange-700 font-light text-sm'>x 4</p></td>
                                            <td className='text-right font-medium'>$ {((idx + 1) * 40).toPrecision(4)}</td>
                                        </tr>
                                    </>)
                                }
                            </tbody>
                        </table>
                        <div className='border-y-2 px-6 py-4 w-full mt-6 flex items-center justify-between'>
                            <h3 className='text-xl font-semibold'>Subtotal</h3>
                            <h4>$ 220.00</h4>
                        </div>
                        <div className="form-control p-6">
                            <label className="label mb-3">
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
                        <div className='border-y-2 px-6 py-4 w-full mt-6 flex items-center justify-between'>
                            <h3 className='text-xl font-semibold'>Grand Total</h3>
                            <h4 className='text-xl font-semibold'>$ 220.00</h4>
                        </div>
                        <div className='p-6 space-y-3'>
                            <div>
                                <div className='flex items-center justify-start gap-2'>
                                    <input type="radio" name="my-radio" className="radio radio-xs radio-warning" />
                                    <h3 className='text-sm pb-1'>Direct Bank Transfer</h3>
                                </div>
                                <h4 className='text-xs px-5 py-1'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</h4>
                            </div>
                            <div>
                                <div className='flex items-center justify-start gap-2'>
                                    <input type="radio" name="my-radio" className="radio radio-xs radio-warning" />
                                    <h3 className='text-sm pb-1'>Check payments</h3>
                                </div>
                                <h4 className='text-xs px-5 py-1'>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</h4>
                            </div>
                            <div>
                                <div className='flex items-center justify-start gap-2'>
                                    <input type="radio" name="my-radio" className="radio radio-xs radio-warning" />
                                    <h3 className='text-sm pb-1'>Cash on delivery</h3>
                                </div>
                                <h4 className='text-xs px-5 py-1'>Pay with cash upon delivery.</h4>
                            </div>
                            <div>
                                <div className='flex items-center justify-start gap-2'>
                                    <input type="radio" name="my-radio" className="radio radio-xs radio-warning" />
                                    <h3 className='text-sm pb-1'>PayPal payment</h3>
                                </div>
                                <h4 className='text-xs px-5 py-1'>Pay via PayPal; you can pay with your credit card if you do not have a PayPal account.</h4>
                            </div>
                        </div>
                        <div className='border-t-2 px-6 pt-4 w-full mt-6'>
                            <h5 className='text-sm font-light'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className='text-orange-600 font-normal hover:underline cursor-pointer'>privacy policy</a>.</h5>
                        </div>
                    </div>
                    <Link to={'/checkout/pay'}>
                        <input className='btn my-6 bg-orange-600 hover:bg-orange-500 text-white w-full rounded-none capitalize' type="submit" value={"place order & pay"} />
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default PlaceOrder;