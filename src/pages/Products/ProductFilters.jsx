import { Rating } from '@mui/material';
import { Radio, Slider, Space } from 'antd';
import React, { useState } from 'react';

const ProductFilters = () => {
    const [range, setRange] = useState([0, 100]);
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const [reviews, setReviews] = useState(1);
    const onChangeReviews = (e) => {
        console.log('radio checked', e.target.value);
        setReviews(e.target.value);
    };

    const [discounts, setDiscounts] = useState(1);
    const onChangeDiscounts = (e) => {
        console.log('radio checked', e.target.value);
        setDiscounts(e.target.value);
    };
    return (
        <div className='w-[22%] space-y-5'>
            <div className='bg-white rounded-lg p-5'>
                <h2 className='text-xl font-semibold pb-6'>Price range</h2>
                <div>
                    <Slider
                        range={{
                            editable: true,
                        }}
                        value={range}
                        onChange={setRange}
                    />
                    <div className='flex items-center justify-between p-2'>
                        <button className='btn btn-xs'>{range[0]}</button>
                        <button className='btn btn-xs'>{range[1]}</button>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-lg p-5'>
                <h2 className='text-xl font-semibold pb-6'>Availability</h2>
                <div>
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>In Stock</Radio>
                            <Radio value={2}>Pre Order</Radio>
                            <Radio value={3}>Up Coming</Radio>
                        </Space>
                    </Radio.Group>
                </div>
            </div>
            <div className='bg-white rounded-lg p-5'>
                <h2 className='text-xl font-semibold pb-6'>Customer Reviews</h2>
                <div>
                    <Radio.Group onChange={onChangeReviews} value={reviews}>
                        <Space direction="vertical">
                            <Radio value={1}>All</Radio>
                            <Radio value={2} >
                                <div className='flex items-center justify-center gap-2'>
                                    <Rating name='read-only' readOnly value={4} size='small' />
                                    <p>& up</p>
                                </div>
                            </Radio>
                            <Radio value={3} >
                                <div className='flex items-center justify-center gap-2'>
                                    <Rating name='read-only' readOnly value={3} size='small' />
                                    <p>& up</p>
                                </div>
                            </Radio>
                            <Radio value={4} >
                                <div className='flex items-center justify-center gap-2'>
                                    <Rating name='read-only' readOnly value={2} size='small' />
                                    <p>& up</p>
                                </div>
                            </Radio>
                            <Radio value={5} >
                                <div className='flex items-center justify-center gap-2'>
                                    <Rating name='read-only' readOnly value={1} size='small' />
                                    <p>& up</p>
                                </div>
                            </Radio>
                        </Space>
                    </Radio.Group>
                </div>
            </div>
            <div className='bg-white rounded-lg p-5'>
                <h2 className='text-xl font-semibold pb-6'>Discount</h2>
                <div>
                    <Radio.Group onChange={onChangeDiscounts} value={discounts}>
                        <Space direction="vertical">
                            <Radio value={1}>All</Radio>
                            <Radio value={2} >
                                10% off or more
                            </Radio>
                            <Radio value={3} >
                                25% off or more
                            </Radio>
                            <Radio value={4} >
                                50% off or more
                            </Radio>
                            <Radio value={5} >
                                70% off or more
                            </Radio>
                        </Space>
                    </Radio.Group>
                </div>
            </div>
        </div>
    );
};

export default ProductFilters;