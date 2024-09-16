import React from 'react';
import ExistingProductTable from './ExistingProductTable';
import ProductRequestTable from './ProductRequestTable';

const AdminProducts = () => {
    return (
        <div className=''>
            <div className='py-10 grid grid-cols-4 grid-rows-2 gap-8'>
                <img src="https://img.freepik.com/premium-vector/vibrant-ecommerce-header-shopping-elements-white-canvas_1278800-18776.jpg?uid=R113556208&ga=GA1.1.820294120.1714974066&semt=ais_hybrid" className='col-span-2 row-span-2' alt="collect products" />
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
            
            <ExistingProductTable/>
            <ProductRequestTable/>
        </div>
    );
};

export default AdminProducts;