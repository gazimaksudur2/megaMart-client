import React, { useEffect, useState } from 'react';
import TitleBanner from '../../shared/TitleBanner';
import { Link, ScrollRestoration, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaEyeSlash, FaFacebookSquare, FaRegEye } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';

const SignIn = () => {
    const { signIn, googleSignIn, facebookSignIn, twitterSignIn, userDB, token } = useAuth();
    const [viewPass, setViewPass] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const axios = useAxios();

    const handleSignIn = e => {
        navigate('/loader');
        e.preventDefault();
        // console.log(e.target);
        const data = new FormData(e.target);

        const mail = data.get('mail');
        const password = data.get('password');

        e.target.reset();
        signIn(mail, password)
            .then(res => {
                // axios.patch(`/user?id=${userDB?._id}`)
                // console.log(res);
                Swal.fire({
                    title: `Hello ${res?.user?.displayName}!`,
                    text: "User Logged in Successfully!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                });
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
                // console.log(error);
            });
    }

    const setUserForProviders = (data, provider) => {
        axios.get(`/findUser?email=${data?.user?.email}`)
            .then(res => {
                console.log(res.data);
                if (res.data?.found) {
                    Swal.fire({
                        title: `Hello ${data?.user?.displayName}!`,
                        text: "User Logged in Successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    navigate('/');
                } else {
                    axios.post('/users', {
                        first_name: data.user?.displayName.split(' ')[0],
                        last_name: (data.user?.displayName.split(' ')?.length > 1 ? data.user?.displayName.split(' ')[1] : ''),
                        username: data?.user?.displayName,
                        photoURL: data?.user?.photoURL,
                        email: data?.user?.email,
                        provider,
                        createdAt: new Date().toUTCString(),
                        role: 'customer',
                        sellerRequest: { underReview: false, accepted: false, rejected: false },
                        adminRequest: { underReview: false, accepted: false, rejected: false },
                        shippingAddress: [],
                        billingAddress: [],
                    })
                        .then(res => {
                            // console.log(res.data);
                            if (res?.data?.insertedId) {
                                Swal.fire({
                                    title: `Hello ${data?.user?.displayName}!`,
                                    text: "User Created & Logged in Successfully!",
                                    icon: "success",
                                    showConfirmButton: false,
                                    timer: 2000,
                                });
                            }
                            navigate('/');
                        })
                        .catch(error => console.log(error.message))
                }
            })
            .catch(error => console.log(error.message))
    }

    const handleGoogleSignIn = () => {
        navigate('/loader');
        googleSignIn()
            .then(res => {
                // console.log('Sign in successful through Google.');
                setUserForProviders(res, 'google');
            })
            .catch(error => setError(error.message));
    }

    const handleFacebookSignIn = () => {
        navigate('/loader');
        facebookSignIn()
            .then(res => {
                // console.log('Sign in successful through Facebook.');
                setUserForProviders(res, 'facebook');
            })
            .catch(error => setError(error.message));
    }
    const handleTwitterSignIn = () => {
        navigate('/loader');
        twitterSignIn()
            .then(res => {
                // console.log('Sign in successful through Twitter.');
                setUserForProviders(res, 'twitter');
            })
            .catch(error => setError(error.message));
    }

    return (
        <div>
            <ScrollRestoration />
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
                                <input name='password' type={viewPass ? "text" : "password"} placeholder="password" className="input input-bordered rounded w-full" required />
                                <FaRegEye size={18} onClick={() => setViewPass(!viewPass)} className={viewPass ? "hidden" : 'opacity-75 absolute top-4 right-4'} />
                                <FaEyeSlash size={20} onClick={() => setViewPass(!viewPass)} className={viewPass ? 'opacity-75 absolute top-4 right-4' : "hidden"} />
                            </div>
                        </div>
                        {
                            error && <p className='text-xs text-red-500'>** {error} **</p>
                        }
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