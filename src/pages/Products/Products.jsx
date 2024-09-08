import React from 'react';
import Categories from './Categories';
import CategoryProducts from './CategoryProducts';
import CategorySection from './CategorySection';
import ProductFilters from './ProductFilters';
import FilteredProducts from './FilteredProducts';

const Products = () => {
    return (
        <div className='w-[90%] mx-auto my-16'>
            <Categories />
            <div className='bg-white rounded-lg mt-16'>
                <CategoryProducts />
                <CategorySection />
            </div>
            <div className='mt-6 flex items-start justify-center gap-4'>
                <ProductFilters />
                <FilteredProducts/>
            </div>
        </div>
    );
};

export default Products;