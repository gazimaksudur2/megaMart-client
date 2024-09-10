import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
import Specifications from './Specifications';
import Questions from './Questions';
import Reviews from './Reviews';

const DeepInfo = ({product}) => {
    return (
        <div className='bg-white p-6 rounded-lg'>
            <Tabs
                defaultActiveKey="1"
                className=''
                type="card"
                size={'large'}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: id==='1'?'Specifications':(id==='2'?'Questions':'Reviews'),
                        key: id,
                        children: id==='1'?<Specifications specifications={product?.specifications}/>:(id==='2'?<Questions/>:<Reviews/>),
                    };
                })}
            />
        </div>
    );
};
export default DeepInfo;