import React from 'react';

const Slider = ({ content }) => {
    return (
        <div className='flex items-center justify-evenly'>
            <div className='w-[40%] space-y-2 flex flex-col items-start'>
                <h4 className='font-open text-[#181818] text-xl font-semibold'>{content.type}</h4>
                <h2 className='text-6xl font-bold'>{content.title}</h2>
                <h5 className='pb-4 text-[#181818cd] text-lg text-start'>{content.caption}</h5>
                <button className='btn btn-warning rounded-none text-white font-semibold text-lg font-open'>Shop Now</button>
            </div>
            <img className='' src={content.img} alt="product image" />
        </div>
    );
};

export default Slider;