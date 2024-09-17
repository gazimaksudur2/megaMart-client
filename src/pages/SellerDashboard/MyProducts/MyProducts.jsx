import React, { useEffect, useState } from 'react';
import MyActiveProductsTable from './MyActiveProductsTable';
import { IoMdAdd } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import RequestedProductsTable from './RequestedProductsTable';
import useBrands from '../../../hooks/useBrands';
import useCategories from '../../../hooks/useCategories';
import { RxCross2 } from 'react-icons/rx';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const MyProducts = () => {
    const axios = useAxios();
    const {userDB} = useAuth();
    const [add, setAdd] = useState(false);
    const { brands } = useBrands(true);
    const [availableBrands, setAvailableBrands] = useState([]);
    const { categories } = useCategories();
    const [colorFamily, setColorFamily] = useState([]);
    const [imgLinks, setImgLinks] = useState([]);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        setAvailableBrands(brands?.filter(brand => brand?.category === watch('category')))
    }, [watch('category')]);

    const onSubmit = (data) => {
        const productInfo = {
            product_name: data?.product_name,
            category: data?.category,
            brand: data?.brand,
            colorFamily,
            offer: data?.offer,
            price: data?.price,
            stock: data?.stock,
            main_image: data?.main_image,
            images: imgLinks,
            features: data?.features.split('\n'),
            specifications: data.specifications.split('\n'),
            description: data?.description,
            requestedAt: new Date().toLocaleString(),
            supplier: userDB?.email,
            reviews: [],
            questions: [],
            sold: 0,
        }
        axios.post('/products', productInfo, { withCredentials: true })
            .then(res => {
                if(res?.data?.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Product Request Submitted Successfully..!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                      })
                }else{
                    Swal.fire({
                        title: 'Error Occured!',
                        text: 'Unfortunately!! your request is not submitted!!',
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 2000
                      })
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Your Product Request submission failed..!',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 2000,
                    footer: error.message
                  })
            })
        setAdd(false);
        reset();
    }

    const handleColor = (color, action) => {
        if (action === 'add' && !(colorFamily?.find(col => col === color)) && color !== '') {
            setColorFamily([...colorFamily, color]);
        } else if (action === 'remove') {
            setColorFamily(colorFamily.filter(col => col !== color));
        }
        setValue('colorFamily', '');
    }

    const handleImage = (imgs, action) => {
        if (action === 'add' && !(imgLinks?.find(img => img === imgs)) && imgs !== '') {
            setImgLinks([...imgLinks, imgs]);
        } else if (action === 'remove') {
            setImgLinks(imgLinks.filter(img => img !== imgs));
        }
        setValue('imgLinks', '');
    }
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
                            <div className='grid grid-cols-2 gap-8'>
                                <label className="col-span-2 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Name</span>
                                    </div>
                                    <input type="text" {...register('product_name', { required: true })} placeholder="Type Product Name" className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Category</span>
                                    </div>
                                    <select {...register('category', { required: true })} className="select select-bordered w-full" >
                                        <option disabled selected>Select Product Category</option>
                                        {
                                            categories?.map((category, idx) => <option key={idx} >{category?.category}</option>)
                                        }
                                    </select>
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Brand</span>
                                    </div>
                                    <select {...register('brand', { required: true })} className="select select-bordered w-full" >
                                        <option disabled>
                                            {
                                                availableBrands?.length === 0 ? 'Register a Brand at first' : 'Select From Your Brands'
                                            }
                                        </option>
                                        {
                                            availableBrands?.map((brand, idx) => <option key={idx} name={`${idx}`} >{brand?.brand}</option>)
                                        }
                                    </select>
                                </label>
                                <div className='col-span-2 flex items-end gap-4'>
                                    <div className="from-control">
                                        <div className="label">
                                            <span className="label-text">Color Family</span>
                                        </div>
                                        <div className='flex flex-row-reverse items-center justify-start gap-4'>
                                            {
                                                !!(colorFamily?.length) && <>
                                                    <ol className='flex items-center justify-start gap-3'>
                                                        {
                                                            colorFamily?.map((color, idx) => <li key={idx} className='relative bg-white p-2 rounded border-[1px]'>
                                                                <h2>{color}</h2>
                                                                <RxCross2 onClick={() => handleColor(color, 'remove')} className='absolute -top-1 -right-1 bg-amber-300 rounded text-white cursor-pointer' size={12} />
                                                            </li>)
                                                        }
                                                    </ol>
                                                </>
                                            }
                                            <div className='flex items-center'>
                                                <input {...register('colorFamily')} type="text" placeholder="Type here" className="h-12 px-3 border-[1px] rounded-md border-gray-300 w-44 rounded-r-none border-r-0 outline-none" />
                                                <div onClick={() => handleColor(watch('colorFamily'), 'add')} className='w-16 bg-amber-300 text-white h-12 border-[1px] rounded-md rounded-l-none border-gray-300 cursor-pointer flex items-center justify-center'>
                                                    <IoMdAdd size={25} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2 grid grid-cols-3 gap-8'>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Product Offer in %</span>
                                        </div>
                                        <input {...register('offer', { required: true })} type="number" placeholder='10' className="input input-bordered w-full" />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Product Price in $</span>
                                        </div>
                                        <input {...register('price', { required: true })} type="number" placeholder='119' className="input input-bordered w-full" />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Stock Quantity in pcs.</span>
                                        </div>
                                        <input {...register('stock', { required: true })} type="number" placeholder='330' className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <label className="col-span-2 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Main Image Link</span>
                                    </div>
                                    <input {...register('main_image', { required: true })} type="text" placeholder="Paste Product Main Image link" className="input input-bordered w-full" />
                                </label>
                                <div className='col-span-2 flex items-end gap-4'>
                                    <div className="from-control w-full">
                                        <div className="label">
                                            <span className="label-text">Product Image Links</span>
                                        </div>
                                        <div className='flex flex-col items-center justify-start gap-4'>
                                            {
                                                !!(imgLinks?.length) && <>
                                                    <ol className='w-full flex flex-col items-start justify-start gap-3'>
                                                        {
                                                            imgLinks?.map((imgs, idx) => <li key={idx} className='w-full relative bg-white p-2 rounded border-[1px]'>
                                                                <h2>{imgs}</h2>
                                                                <RxCross2 onClick={() => handleImage(imgs, 'remove')} className='absolute -top-1 -right-1 bg-amber-300 rounded text-white cursor-pointer' size={12} />
                                                            </li>)
                                                        }
                                                    </ol>
                                                </>
                                            }
                                            <div className='flex items-center w-full'>
                                                <input {...register('imgLinks')} type="text" placeholder="Type here" className="h-12 px-3 border-[1px] rounded-md border-gray-300 w-full rounded-r-none border-r-0 outline-none" />
                                                <div onClick={() => handleImage(watch('imgLinks'), 'add')} className='w-20 bg-amber-300 text-white h-12 border-[1px] rounded-md rounded-l-none border-gray-300 cursor-pointer flex items-center justify-center'>
                                                    <IoMdAdd size={25} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label className="col-span-2 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Features</span>
                                    </div>
                                    <textarea {...register('features', { required: true })} className="textarea textarea-bordered" placeholder="Type Product Features Here"></textarea>
                                </label>
                                <label className="col-span-2 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Specifications</span>
                                    </div>
                                    <textarea {...register('specifications', { required: true })} className="textarea textarea-bordered" placeholder="Type Product Specifications Here"></textarea>
                                </label>
                                <label className="col-span-2 form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Product Description</span>
                                    </div>
                                    <textarea {...register('description', { required: true })} className="textarea textarea-bordered" placeholder="Type Product Descriptions Here"></textarea>
                                </label>
                            </div>
                            <input className='mt-10 btn btn-warning text-white' type='submit' value={'Submit Request'} />
                        </form>
                    </div>
                </> : <button className='btn btn-warning text-white' onClick={() => setAdd(true)}>
                    <IoMdAdd className='font-bold' size={24} />
                    <h2>Add A Product</h2>
                </button>
            }
            <RequestedProductsTable />
            <MyActiveProductsTable />
        </div>
    );
};

export default MyProducts;