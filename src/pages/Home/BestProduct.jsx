import React from 'react';

const BestProduct = ({image, type}) => {
    return (
        <div className='border-2 hover:border-amber-700 border-slate-800 p-10 rounded-full inline-block'>
            <div className='hover:scale-125 transition'>
            <img className='w-20 h-16' src={image} alt="cagegory images" />
            <p className='text-center pt-1 font-semibold'>{type}</p>
            </div>
        </div>
    );
};

export default BestProduct;