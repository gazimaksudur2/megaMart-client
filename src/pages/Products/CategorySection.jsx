import React from 'react';

const CategorySection = () => {
    const subCategories = ['desktop offer', 'star pc', 'gaming pc', 'brand pc', 'protable mini pc', 'apple mac mini', 'apple mac pro'];
    return (
        <div className='w-[97%] mx-auto py-4 space-y-2'>
            <h2 className='text-xl text-blue-900'>Desktop PC Price in Bangladesh (BD)</h2>
            <p className=''>Desktop PC Price in Bangladesh starts from BDT 25000 and depending on the configuration the price may go up to BDT 600,000 or more, At Star Tech you can get the latest configured custom Desktop PC, Gaming PC, Brand PC, All-in-One PC, Portable Mini PC etc. Browse below and Order yours now!</p>
            <div className='flex items-center justify-start gap-3 py-2'>
                {
                    subCategories.map(sub=><button className='btn btn-sm btn-outline rounded-full capitalize text-gray-600'>{sub}</button>)
                }
            </div>
        </div>
    );
};

export default CategorySection;