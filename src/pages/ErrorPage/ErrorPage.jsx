import React from 'react';
import { BiHome } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-[50%] flex flex-col items-center justify-center space-y-8'>
                <img className="max-w-xs object-cover" src="https://furns-react.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ferror.0672af5af2ef9ab963f625fb9f516af2.png&w=384&q=75" alt="" />
                <div className='text-center space-y-3'>
                    <h2 className='text-3xl font-semibold font-fira'>Page Not Found</h2>
                    <h4 className='font-light font-open'>Unfortunately the page you were looking for could not be found. It may be temporarily unavailable, moved or no longer exist. Check the Url you entered for any mistakes and try again.</h4>
                </div>
                <Link to={'/'}>
                    <BiHome size={40} className='cursor-pointer' />
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;