import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdAdd } from 'react-icons/io';
import MyBrands from './MyBrands';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const ProductBrand = () => {
    const [add, setAdd] = useState(false);
    const { userDB } = useAuth();
    const axios = useAxios();
    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: async() => {
            const data = axios.get('/categories')
                .then(res => res.data)

            return data;
        }
    });

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const brand = data['brand'];
        const category = data['category'];
        const brand_logo = data['brand_logo'];

        const brandData = {
            brand, category, brand_logo, requestedAt: new Date().toISOString(), status: 'pending', requestedBy: userDB?.email
        }

        axios.post('/brands', brandData)
            .then(res => {
                // console.log('inside posting -> ', res?.data);
                if (res?.data.insertedId) {
                    Swal.fire({
                        title: 'Best of Luck!',
                        text: 'Your Brand request submitted successfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    })
                } else {
                    Swal.fire({
                        title: 'Error Occured!',
                        text: 'Your Brand request Cannot submitted',
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!!',
                    text: error.message,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
        // console.log(brand, category, brand_logo);
        setAdd(false);
        reset();
    }


    // console.log(categories);
    return (
        <div>
            <div className='py-10 grid grid-cols-4 grid-rows-2 gap-8'>
                <img src="https://img.freepik.com/free-vector/brand-creation-concept-illustration_114360-15527.jpg?uid=R113556208&ga=GA1.1.820294120.1714974066&semt=ais_hybrid" className='col-span-2 row-span-2' alt="collect products" />
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
                        <h2 className='text-xl font-semibold text-gray-700'>Be a Vendor of a Brand </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-2 gap-8'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Category</span>
                                    </div>
                                    {/* <input type="text" placeholder="Category" className="input input-bordered w-full" /> */}
                                    <select {...register('category', { required: true })} className="select select-bordered w-full">
                                        <option disabled selected>Select a Product Category</option>
                                        {
                                            categories?.map((each, idx)=><>
                                                <option key={idx}>{each?.category}</option>
                                            </>)
                                        }
                                    </select>
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Brand Name</span>
                                    </div>
                                    <input type="text" {...register('brand', { required: true })} placeholder="Brand" className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full col-span-2">
                                    <div className="label">
                                        <span className="label-text">Brand Logo Link</span>
                                    </div>
                                    <input type="text" {...register('brand_logo', { required: true })} placeholder="Logo Link" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <input className='mt-10 btn btn-warning text-white' type='submit' value={'Submit Request'} />
                        </form>
                    </div>
                </> : <button className='btn btn-warning text-white' onClick={() => setAdd(true)}>
                    <IoMdAdd className='font-bold' size={24} />
                    <h2>Add A Brand</h2>
                </button>
            }
            <MyBrands />
        </div>
    );
};

export default ProductBrand;