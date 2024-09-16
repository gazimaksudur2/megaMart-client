import React, { useState } from 'react';
import MyActiveProductsTable from './MyActiveProductsTable';
import { IoMdAdd } from 'react-icons/io';
import { useForm } from 'react-hook-form';

const MyProducts = () => {
    const [add, setAdd] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        setAdd(false);
    }

    // console.log(watch("example"))
    return (
        <div>
            <div className='py-10 grid grid-cols-4 grid-rows-2 gap-8'>
                <img src="https://img.freepik.com/free-photo/business-man-is-working-online-customer-home-office-packaging-wall_1150-21865.jpg?uid=R113556208&ga=GA1.1.820294120.1714974066&semt=ais_hybrid" className='mask mask-squircle col-span-2 row-span-2' alt="collect products" />
                <div className='col-span-1 row-span-1 bg-blue-400 rounded-2xl flex flex-col items-start p-4 text-white'>
                    <h4 className='text-lg font-semibold pb-4'>Total Products</h4>
                    <h2 className='text-3xl font-bold'>{1200}</h2>
                    <p className='font-semibold'>20pcs ( last 7days )</p>
                </div>
                <div className='col-span-1 row-span-1 bg-violet-400 rounded-2xl flex flex-col items-start p-4 text-white'>
                    <h4 className='text-lg font-semibold pb-4'>Total Customers</h4>
                    <h2 className='text-3xl font-bold'>{1200}</h2>
                    <p className='font-semibold'>20pcs ( last 7days )</p>
                </div>
                <div className='col-span-1 row-span-1 bg-pink-400 rounded-2xl flex flex-col items-start p-4 text-white'>
                    <h4 className='text-lg font-semibold pb-4'>Total Sales <span className='text-[14px] font-normal'>( This month )</span></h4>
                    <h2 className='text-3xl font-bold'>{1200}</h2>
                    <p className='font-semibold'>20pcs ( last 7days )</p>
                </div>
                <div className='col-span-1 row-span-1 bg-orange-400 rounded-2xl flex flex-col items-start p-4 text-white'>
                    <h4 className='text-lg font-semibold pb-4'>Total Visits</h4>
                    <h2 className='text-3xl font-bold'>{1200}</h2>
                    <p className='font-semibold'>20pcs ( last 7days )</p>
                </div>
            </div>
            {
                add ? <>
                    <div className='my-10 bg-blue-50 p-10 rounded-lg space-y-6'>
                        <h2 className='text-xl font-semibold text-gray-700'>Make a Request to Add New Product </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-wrap items-center justify-start gap-8'>
                                <label className="basis-[300px] flex-1 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Name</span>
                                    </div>
                                    <input type="text" {...register('product_name')} placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                                <label className="basis-[300px] flex-1 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Brand</span>
                                    </div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                                <label className="basis-[300px] flex-1 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Category</span>
                                    </div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                                <label className="basis-[300px] flex-1 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Color Family</span>
                                    </div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                                <label className="basis-[300px] flex-1 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Offer in %</span>
                                    </div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                                <label className="basis-[300px] flex-1 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Price</span>
                                    </div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                                <label className="basis-[300px] flex-1 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Stock Quantity</span>
                                    </div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                                <label className="basis-[300px] flex-1 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Main Image</span>
                                    </div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                                <label className="basis-[300px] flex-1 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Features</span>
                                    </div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                                <label className="basis-[300px] flex-1 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Specifications</span>
                                    </div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                                <label className="basis-[300px] flex-1 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Description</span>
                                    </div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                                <label className="basis-[300px] flex-1 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Images</span>
                                    </div>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <input defaultValue="test" {...register("example")} />
                            <input {...register("exampleRequired", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='btn btn-warning text-white' type='submit' value={'Submit Request'} />
                        </form>
                    </div>
                </> : <button className='btn btn-warning text-white' onClick={() => setAdd(true)}>
                    <IoMdAdd className='font-bold' size={24} />
                    <h2>Add Product</h2>
                </button>
            }
            <MyActiveProductsTable />
        </div>
    );
};

export default MyProducts;