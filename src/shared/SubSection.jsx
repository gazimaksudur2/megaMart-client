import React from 'react';

const SubSection = ({Heading, SubHeading}) => {
    return (
        <div className='w-[80%] mx-auto text-center space-y-2'>
            <h2 className='font-bold text-3xl'>{Heading}</h2>
            <h5 className='text-[#181818cd] lg:px-[30%]'>{SubHeading}</h5>
        </div>
    );
};

export default SubSection;