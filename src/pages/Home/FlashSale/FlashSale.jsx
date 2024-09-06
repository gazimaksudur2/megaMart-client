import React, { useEffect, useState } from 'react';

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
                        flashProducts.map((product, idx) => <>
                            <div key={idx} class="max-w-52 h-72 bg-white flex flex-col items-center justify-start border-4 border-white hover:border-base-200 duration-150 hover:shadow-lg cursor-pointer">
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
        </div>
    );
};

export default FlashSale;