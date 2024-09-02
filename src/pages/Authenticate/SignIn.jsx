import React, { useState } from 'react';
import TitleBanner from '../../shared/TitleBanner';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaEyeSlash, FaFacebookSquare, FaRegEye } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { signIn, googleSignIn, facebookSignIn, twitterSignIn } = useAuth();
    const [viewPass, setViewPass] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        // console.log(e.target);
        const data = new FormData(e.target);
        e.target.reset();

        const mail = data.get('mail');
        const password = data.get('password');

        signIn(mail, password)
        .then(res=> console.log('Sign in successful'))
        .catch(error=> console.log('sign in failed'));

        navigate('/');
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res=> console.log('Sign in successfull through Google.'))
        .catch(error=> console.log('sign in failed through provider.'))
    }
    
    const handleFacebookSignIn = () => {
        facebookSignIn()
        .then(res=> console.log('Sign in successfull through Google.'))
        .catch(error=> console.log('sign in failed through provider.'))
    }
    const handleTwitterSignIn = () => {
        twitterSignIn()
        .then(res=> console.log('Sign in successfull through Google.'))
        .catch(error=> console.log('sign in failed through provider.' + error))
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
                            <input name='mail' type="email" placeholder="email" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password *</span>
                            </label>
                            <div className='relative'>
                                <input name='password' type={viewPass?"text":"password"} placeholder="password" className="input input-bordered rounded w-full" required />
                                <FaRegEye size={18} onClick={()=> setViewPass(!viewPass)} className={viewPass?"hidden":'opacity-75 absolute top-4 right-4'} />
                                <FaEyeSlash size={20} onClick={()=> setViewPass(!viewPass)} className={viewPass?'opacity-75 absolute top-4 right-4':"hidden"} />
                            </div>
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
                            <FcGoogle onClick={handleGoogleSignIn} size={50} className="border-4 bg-base-300 p-2 rounded-badge cursor-pointer hover:scale-105 active:scale-100" />
                            <FaFacebookSquare onClick={handleFacebookSignIn} size={50} className="border-4 bg-base-300 p-2 rounded-badge cursor-pointer hover:scale-105 active:scale-100 text-blue-600" />
                            <BsTwitterX onClick={handleTwitterSignIn} size={50} className="border-4 bg-base-300 p-2 rounded-badge cursor-pointer hover:scale-105 active:scale-100" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;