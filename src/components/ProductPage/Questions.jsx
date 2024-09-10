import React from 'react';
import { MdQuestionMark } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Questions = () => {
    const emptyQuestion = <div className='flex flex-col items-center justify-center gap-6'>
        <MdQuestionMark size={30} className='text-slate-600'/>
        <p className='text-lg text-slate-600'>Currently!! Questions are not available or asked yet..</p>
    </div>
    return (
        <div className='my-4'>
            <div className='pb-4 border-b-2 flex items-center justify-between px-4'>
                <div >
                    <h2 className='text-lg  font-semibold'>Questions (0)</h2>
                    <p>Have question about this product? Get specific details about this product from expert.</p>
                </div>
                <Link to={'/userActivity/askQuestion'} className='btn btn-outline px-10 rounded text-blue-800 hover:bg-blue-900'>Ask Question</Link>
            </div>
            <div className='my-10'>
                {
                    emptyQuestion
                }
            </div>
        </div>
    );
};

export default Questions;