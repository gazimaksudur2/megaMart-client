import React, { useState } from 'react';
import Categories from './Categories';
import CategoryProducts from './CategoryProducts';
import CategorySection from './CategorySection';
import ProductFilters from './ProductFilters';
import FilteredProducts from './FilteredProducts';

const Products = () => {
    const [series, setSeries] = useState([]);

    const handlePush = category => {
        setSeries([...series, category]);
    }

    const handlePop = category => {
        const newSeries = [];
        for (const val of series) {
            if (val !== category) {
                newSeries.push(val);
                // console.log(val);
            } else {
                newSeries.push(val);
                break;
            }
        }
        setSeries(newSeries);
    }
    return (
        <div className='w-[90%] mx-auto my-16'>
            <Categories setSeries={setSeries}/>
            {
                series?.length > 0 && <div className='bg-white rounded-lg mt-16'>
                    <CategoryProducts series={series} handlePop={handlePop} />
                    <CategorySection handlePush={handlePush} />
                </div>
            }
            <div className='mt-6 flex items-start justify-center gap-4'>
                <ProductFilters />
                <FilteredProducts />
            </div>
        </div>
    );
};

export default Products;