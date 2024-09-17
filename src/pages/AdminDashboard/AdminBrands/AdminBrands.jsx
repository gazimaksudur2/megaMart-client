import React from 'react';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { RxCrossCircled } from 'react-icons/rx';
import { MdDownloadDone } from 'react-icons/md';
import Swal from 'sweetalert2';

const AdminBrands = () => {
    const axios = useAxios();
    const { data: brands, refetch } = useQuery({
        queryKey: ['brands'],
        queryFn: () => {
            const info = axios.get(`/brands`, { withCredentials: true }).then(res => res.data)
            return info;
        },
    });

    const emptyBrands = <>
        <div className='mt-20 flex flex-col items-center '>
            <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?uid=R113556208&ga=GA1.1.820294120.1714974066&semt=ais_hybrid" className="mask mask-hexagon-2 w-60" alt="no brand" />
            <h2 className='text-lg font-semibold text-gray-600'>No Brand Data Found</h2>
            <p className='text-sm text-gray-500 mt-2'>Currently!! There is no Brands are registered or approved in Your platform.</p>
        </div>
    </>;
    
    const handleApprove = brand => {
        Swal.fire({
            title: "Are you sure?",
            text: `${brand?.brand} will be approved now`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, approve it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`/brands?id=${brand?._id}`,{status: 'approved', approvedAt: new Date().toLocaleDateString()}, {withCredentials: true})
                .then(res=>{
                    if(res.data?.modifiedCount){
                        Swal.fire({
                            title: "Approved!",
                            text: `${brand?.brand} got access to publish products`,
                            icon: "success",
                            showConfirmButton: false,
                            timer: 2000
                        });
                        refetch();
                    }else{
                        Swal.fire({
                            title: "Error!",
                            text: `Unfortunately ${brand?.brand} didn't get access!! try again later`,
                            icon: "error",
                            showConfirmButton: false,
                            timer: 2000,
                        })
                    }
                })
            } else {
                Swal.fire({
                    title: "Approval Abandoned!!",
                    text: `${brand?.brand} got rejected to publish their products`,
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        });
    }
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
            <div className=' my-16'>
                <h2 className='text-xl text-gray-600 font-semibold text-start mb-4'>Review Pending Brand Requests</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-[16px]'>
                                <th className='font-semibold'>Brand</th>
                                <th className='font-semibold'>Requested By</th>
                                <th className='font-semibold'>Requested At</th>
                                <th className='font-semibold'>Status</th>
                                <th className='font-semibold'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                brands?.filter(brand => brand?.status === 'pending')?.map((brand, idx) => <>
                                    <tr key={idx}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            className='object-cover'
                                                            src={brand?.brand_logo}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{brand?.brand}</div>
                                                    <div className="text-sm opacity-50">{brand?.category}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {
                                                brand?.requestedBy
                                            }
                                        </td>
                                        <td>
                                            {new Date(brand?.status === 'pending' ? brand?.requestedAt : brand?.approvedAt).toDateString()}
                                        </td>
                                        <td>{brand?.status}</td>
                                        <td >
                                            <div className='flex items-center justify-start gap-4'>
                                                <button onClick={() => handleApprove(brand)} class="p-1 text-gray-500 transition-colors duration-200 hover:text-amber-500 hover:bg-amber-50 rounded-full focus:outline-none flex items-center justify-center gap-2">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg> */}
                                                    <MdDownloadDone size={18} />
                                                </button>
                                                <button onClick={() => handleReject(brand)} class="text-gray-500 transition-colors duration-200 hover:text-red-500 hover:bg-red-50 p-1 rounded-full focus:outline-none flex items-center justify-center gap-2">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg> */}
                                                    <RxCrossCircled size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className=' my-16'>
                <h2 className='text-xl text-gray-600 font-semibold text-start mb-4'>All the Approved Brands </h2>
                {
                    brands?.filter(brand => brand?.status === 'approved').length === 0 ? emptyBrands : <>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className='text-[16px]'>
                                        <th className='font-semibold'>Brand</th>
                                        <th className='font-semibold'>Confirmed At</th>
                                        <th className='font-semibold'>Status</th>
                                        <th className='font-semibold'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        brands?.filter(brand => brand?.status === 'approved')?.map((brand, idx) => <>
                                            <tr key={idx}>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    className='object-cover'
                                                                    src={brand?.brand_logo}
                                                                    alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{brand?.brand}</div>
                                                            <div className="text-sm opacity-50">{brand?.category}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {brand?.approvedAt}
                                                </td>
                                                <td>{brand?.status}</td>
                                                <td >
                                                    <div className='flex items-center justify-start gap-4'>
                                                        <button class="p-1 text-gray-500 transition-colors duration-200 hover:text-amber-500 hover:bg-amber-50 rounded-full focus:outline-none flex items-center justify-center gap-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                            </svg>
                                                        </button>
                                                        <button class="text-gray-500 transition-colors duration-200 hover:text-red-500 hover:bg-red-50 p-1 rounded-full focus:outline-none flex items-center justify-center gap-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>)
                                    }


                                </tbody>
                            </table>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default AdminBrands;