import React from 'react';

const Specifications = ({ product }) => {
    return (
        <div>
            <ul className='list-disc pl-5 py-1 text-sm'>
                {
                    product?.specifications.map(feature => <li>{feature}</li>)
                }
            </ul>
            <h2 className='mt-4 p-3 text-[15px]'>{product?.description}</h2>
        </div>
    );
};

export default Specifications;