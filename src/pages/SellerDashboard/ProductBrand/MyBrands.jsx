import React from 'react';
import RequestedBrands from './RequestedBrands';
import useBrands from '../../../hooks/useBrands';

const MyBrands = () => {
    const {brands, refetch} = useBrands(true);

    const emptyBrands = <div className='mt-20 flex flex-col items-center '>
        <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?uid=R113556208&ga=GA1.1.820294120.1714974066&semt=ais_hybrid" className="mask mask-hexagon-2 w-60" alt="no brand" />
        <h2 className='text-lg font-semibold text-gray-600'>No Brand Data Found</h2>
        <p className='text-sm text-gray-500 mt-2'>There is no Brands are attached or approved for your company from platform admin.</p>
    </div>;
    return (
        <div>
            {
                brands?.length ? <RequestedBrands brands={brands} /> : emptyBrands
            }
        </div>
    );
};

export default MyBrands;