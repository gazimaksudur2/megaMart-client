import React from 'react';

const Specifications = ({ specifications }) => {
    return (
        <div>
            <ul className='list-disc pl-5 py-1 text-sm'>
                {
                    specifications.map(feature => <li>{feature}</li>)
                }
            </ul>
        </div>
    );
};

export default Specifications;