import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

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
            <h2 className='p-3 font-open font-semibold bg-white rounded-lg'>Desktop</h2>
            <div className='grid grid-cols-4 gap-1'>
            {
                filteredProducts?.map((product, idx)=><>
                    <ProductCard product={product} key={idx} />
                </>)
            }
            </div>
        </div>
    );
};

export default FilteredProducts;