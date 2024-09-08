import React, { useEffect, useState } from 'react';
import FlashSaleCard from '../../../components/FlashSaleCard/FlashSaleCard';

const FlashSale = () => {
    const [flashProducts, setFlashProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setFlashProducts(data.filter(product => product?.flashSale === true));
            });
    }, []);

    // console.log(flashProducts);
    return (
        <div className='my-16 w-[80%] mx-auto'>
            <h2 className='text-xl font-semibold mb-4'>Flash Sale</h2>
            <div className='my-2 bg-white'>
                <div className='border-b-2 p-4 flex items-center justify-between'>
                    <h4 className='text-yellow-500'>On Sale Now</h4>
                    <button className='btn btn-outline btn-sm rounded-none text-yellow-500 hover:text-yellow-400 hover:bg-white hover:border-yellow-400'>Shop All Products</button>
                </div>
                <div className='grid grid-cols-6'>
                    {
                        flashProducts.map((product, idx) => <FlashSaleCard product={product} key={idx}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FlashSale;