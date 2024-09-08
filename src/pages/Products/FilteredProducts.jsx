import React, { useEffect, useState } from 'react';
import CategoryProductCard from '../../components/CategoryProductCard/CategoryProductCard';

const FilteredProducts = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
        fetch('featuredProducts.json')
        .then(res=>res.json())
        .then(data=>{
            setFilteredProducts(data);
        })
    },[]);

    return (
        <div className='w-[75%] space-y-3'>
            <h2 className='p-3 font-open font-semibold bg-white rounded-lg'>All Products</h2>
            <div className='flex items-center justify-center flex-wrap gap-2'>
            {
                filteredProducts?.map((product, idx)=><>
                    <CategoryProductCard product={product} key={idx} />
                </>)
            }
            </div>
        </div>
    );
};

export default FilteredProducts;