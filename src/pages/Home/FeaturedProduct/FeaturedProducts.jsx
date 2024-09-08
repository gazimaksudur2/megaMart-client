import React, { useEffect, useState } from 'react';
import FeaturedSection from './FeaturedSection';
import ProductCard from '../../../components/ProductCard/ProductCard';

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
        <div className='mb-20 flex flex-col items-center justify-center'>
            <FeaturedSection/>
            {/* <h2 className='text-center'>Total featured prodcuts {featuredProducts?.length}</h2> */}
            <div className='w-[85%] mx-auto flex flex-wrap justify-items-center place-content-center gap-[5px] '>
                {
                    featuredProducts.map((product, idx) =><ProductCard key={idx} product={product}/>)
                }
            </div>
            <button className='mt-5 btn btn-warning rounded-none text-white font-semibold text-lg font-open'>Load More</button>
        </div>
    );
};

export default FeaturedProducts;