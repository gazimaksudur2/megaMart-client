import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MaterialCarousel from './MaterialCarousel';
import { Radio, Spin } from 'antd';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import DeepInfo from './DeepInfo';
import useProducts from '../../hooks/useProducts';

const ProductPage = () => {
    const { products, isFetching } = useProducts();
    const { id } = useParams();
    const [value, setValue] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const product = products.find(product=> product?._id === id);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    if(!product){
        return <Spin size='large'/>
    }
    // console.log(product);

    return (
        <div className='w-[80%] mx-auto my-10 grid grid-cols-2 gap-10'>
            <MaterialCarousel images={[product?.main_image,...product?.images]} />
            <div className='flex flex-col items-start justify-start space-y-4 bg-white p-6 rounded-lg'>
                <h2 className='text-blue-700 text-2xl font-open'>{product?.product_name}</h2>
                <div className='flex items-center justify-start gap-3'>
                    {
                        product?.offer > 0 ? <h4 className='text-slate-500 font-normal bg-base-300 rounded-full px-3 py-2'>Price: <span className='font-semibold text-slate-700'>$ {(product?.price) - (product?.price * product?.offer / 100)}</span> <span className='line-through'>$ {product?.price}</span></h4> : <h4 className='text-slate-500 font-normal bg-base-300 rounded-full px-3 py-2'>Price: <span className='font-semibold text-slate-700'>$ {(product?.price)}</span></h4>
                    }
                    <h4 className='text-slate-500 font-normal bg-base-300 rounded-full px-3 py-2'>Status: <span className='font-semibold text-slate-700'>{product?.stock > 0 ? "in Stock" : "Out of Stock"}</span></h4>
                    <h4 className='text-slate-500 font-normal bg-base-300 rounded-full px-3 py-2'>Brand: <span className='font-semibold text-slate-700'>{product?.brand}</span></h4>
                </div>
                <div>
                    <h2 className='font-semibold text-slate-600'>Key Features</h2>
                    <ul className='list-disc pl-5 py-1 text-sm'>
                        {
                            product?.features.map(feature => <li>{feature}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h2 className='font-semibold text-slate-600'>Available Color Family</h2>
                    <Radio.Group onChange={onChange} value={value} className='py-2'>
                        {
                            product?.colorFamily.map((color, idx) => <Radio value={idx + 1}>{color}</Radio>)
                        }
                    </Radio.Group>
                </div>
                <div className='py-1 flex items-center justify-start gap-8'>
                    <h2 className='font-semibold text-slate-600'>Quantity</h2>
                    <div className='text-sm text-gray-500 whitespace-nowrap flex items-center justify-center gap-2'>
                        <button className='btn btn-xs' onClick={() => (quantity > 1) && setQuantity(quantity - 1)}><FiMinus /></button>
                        <p>{quantity}</p>
                        <button className='btn btn-xs' onClick={() => { product?.stock >= (quantity + 1) && setQuantity(quantity + 1) }}><GoPlus /></button>
                    </div>
                </div>
                <div className='flex items-center justify-start gap-3'>
                    <button className='btn btn-warning px-16 rounded-none text-white font-semibold font-open'>Buy Now</button>
                    <button className='btn btn-accent px-16 rounded-none text-white font-semibold font-open'>Add to Cart</button>
                </div>
            </div>
            <div className='col-span-2'>
                <DeepInfo product={product} />
            </div>
        </div>
    );
};

export default ProductPage;