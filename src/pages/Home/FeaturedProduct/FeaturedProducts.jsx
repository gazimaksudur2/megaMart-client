import React, { useEffect, useState } from 'react';
import FeaturedSection from './FeaturedSection';

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(()=>{
        fetch('featuredProducts.json')
        .then(res=>res.json())
        .then(data=>{
            setFeaturedProducts(data);
        })
    },[]);

    return (
        <div>
            <FeaturedSection/>
            <h2 className='text-center'>Total featured prodcuts {featuredProducts?.length}</h2>
            <div className='w-[80%] mx-auto grid grid-cols-5 justify-items-center place-content-center gap-3 '>
                {
                    featuredProducts.map((product, idx) => <>
                    <div key={idx} class="w-70 h-72 bg-white flex flex-col items-center justify-start border-4 border-white hover:border-base-200 duration-150 hover:shadow-lg cursor-pointer">
                        <div className='w-full overflow-hidden'>
                            <img class="w-full h-40 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" src={product?.productImage} alt="category_products" />
                        </div>
                        <div class="w-full px-2 py-1 text-start space-y-2">
                            <span class="text-gray-700">{product?.productName}</span>
                            <div className='flex flex-col items-start gap-1'>
                                <h2 className='font-fira text-gray-800'>${((product?.actualPrice) - (product?.actualPrice * (product?.off / 100))).toFixed(0)}</h2>
                                <div className='flex items-center justify-start gap-2'>
                                    <h4 className='line-through text-slate-400 text-sm'>${product?.actualPrice}</h4>
                                    <h5 className='text-yellow-500'>-{product?.off}%</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;