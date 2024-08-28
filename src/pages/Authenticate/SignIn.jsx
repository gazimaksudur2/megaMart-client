import React from 'react';
import TitleBanner from '../../shared/TitleBanner';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const SignIn = () => {
    const handleSignIn = e => {
        e.preventDefault();
        console.log(e.target);
    }
    return (
        <div>
            <TitleBanner title={'LogIn'} route={'Home / SignIn'} />
            <div className='w-full flex items-center justify-center  my-12'>
                <div className="bg-base-100 w-full max-w-lg shrink-0 shadow-xl rounded" >
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email *</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password *</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control mt-6 space-y-6">
                            <button className="btn btn-warning text-white rounded-none uppercase ">Signin</button>
                            <div className='w-full flex justify-between items-center gap-3'>
                                <Link to={'/authenticate/signup'} className="btn bg-[#181818] hover:bg-white text-white hover:text-black rounded-none uppercase flex-1">Create An Account</Link>
                                <a className="btn text-black bg-base-100 hover:bg-[#181818] hover:text-white rounded-none uppercase flex-1">Forget password</a>
                            </div>
                        </div>
                        <div className="divider px-[5%]">or Sign In With</div>
                        <div className='w-full flex items-center justify-evenly'>
                            <FcGoogle size={50} className="border-4 bg-base-300 p-2 rounded-badge cursor-pointer hover:scale-105 active:scale-100" />
                            <FaFacebookSquare size={50} className="border-4 bg-base-300 p-2 rounded-badge cursor-pointer hover:scale-105 active:scale-100 text-blue-600" />
                            <BsTwitterX size={50} className="border-4 bg-base-300 p-2 rounded-badge cursor-pointer hover:scale-105 active:scale-100" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;