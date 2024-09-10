import React from 'react';
import { MdQuestionMark } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Questions = ({ product }) => {
    const emptyQuestion = <div className='flex flex-col items-center justify-center gap-6'>
        <MdQuestionMark size={30} className='text-slate-600' />
        <p className='text-lg text-slate-600'>Currently!! Questions are not available or asked yet..</p>
    </div>

    return (
        <div className='my-4'>
            <div className='pb-4 border-b-2 flex items-center justify-between px-4'>
                <div >
                    <h2 className='text-lg  font-semibold'>Questions About This Product</h2>
                    <p>Have question about this product? Get specific details about this product from expert.</p>
                </div>
                <Link to={'/userActivity/askQuestion'} state={{ product: product }} className='btn btn-outline px-10 rounded text-blue-800 hover:bg-blue-900'>Ask Question</Link>
            </div>
            <div className='my-10'>
                {
                    product?.questions?.length === 0 ? emptyQuestion : <>
                        <div className='space-y-4'>
                            {
                                product?.questions.map((question, idx)=><>
                                    <div key={idx} className='border-b-2 pb-6'>
                                        <h2 className='text-blue-700 font-medium'>{question?.customer}<p className='inline text-gray-700'> on </p><span className=' text-gray-700'>{new Date(question?.postedAt).toDateString()}</span></h2>
                                        <div className='flex items-center justify-start gap-4 text-gray-900 text-lg'>
                                            <p>Q:</p>
                                            <h4>{question?.question}</h4>
                                        </div>
                                        <div className='flex items-center justify-start gap-4 text-gray-900 '>
                                            <p className='text-lg'>A:</p>
                                            <h4 className='font-light text-gray-800'>{question?.answer}</h4>
                                        </div>
                                    </div>
                                </>)
                            }
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Questions;