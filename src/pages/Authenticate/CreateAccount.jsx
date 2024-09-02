import React, { useEffect, useState } from 'react';
import TitleBanner from '../../shared/TitleBanner';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

const CreateAccount = () => {
    const { createUser } = useAuth();
    const [error, setError] = useState(null);
    const [passStrength, setPassStrength] = useState(null);
    const [viewPass, setViewPass] = useState(false);
    const [viewConfPass, setViewConfPass] = useState(false);

    const handlePasswordStrength = e => {
        // console.log(e.target.value);
        const pass = e.target.value;

        if (!(/^(?=.*[A-Z])/.test(pass))) {
            setPassStrength('Atleast one capital letter is required');
            return;
        } else if (!(/^(?=.*[a-z])/.test(pass))) {
            setPassStrength('Atleast one small letter is required');
            return;
        } else if (!(/^(?=.*\d)/.test(pass))) {
            setPassStrength('Atleast one digit is required');
            return;
        } else if (!(/^(?=.*[@$!%*?&.])/.test(pass))) {
            setPassStrength('Atleast one special character is required');
            return;
        } else if (!(/^[A-Za-z\d@$!%*?&]{6,}/.test(pass))) {
            setPassStrength('Atleast 6 character is required');
            return;
        } else {
            setPassStrength(null);
        }
    }

    const handleSignUp = e => {
        e.preventDefault();
        // console.log(e.target);
        const data = new FormData(e.target);
        const first_name = data.get('first_name');
        const last_name = data.get('last_name');
        const mail = data.get('mail');
        const phone = data.get('phone');
        const password = data.get('password');
        const conf_password = data.get('conf_password');

        // e.target.reset();

        if (password != conf_password) {
            setError('Password confirmation mismatched!!');
            return;
        } else if (passStrength) {
            setError('Create password with the requirements');
            return;
        } else {
            console.log(passStrength);
            setError(null);
        }

        const userInfo = {
            first_name,
            last_name,
            mail,
            phone,
            password
        }

        // else if(password.length()<6){
        //     setError('Atleast 6 character is required');
        //     return;
        // }

        createUser(mail, password)
            .then(res => console.log(res.user))
            .catch(error => console.log(error))

        // console.log(userInfo);
    }
    return (
        <div>
            <TitleBanner title={'Create Account'} route={'Home / SignUp'} />
            <div className='w-full flex items-center justify-center  my-20'>
                <div className="bg-base-100 w-full max-w-lg shrink-0 shadow-xl rounded" >
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className='w-full flex justify-between'>
                            <div className="form-control w-[48%]">
                                <label className="label">
                                    <span className="label-text">First Name *</span>
                                </label>
                                <input name="first_name" placeholder="John" className="input input-bordered rounded" required />
                            </div>
                            <div className="form-control w-[48%]">
                                <label className="label">
                                    <span className="label-text">Last Name *</span>
                                </label>
                                <input name="last_name" placeholder="Doe" className="input input-bordered rounded" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email *</span>
                            </label>
                            <input type="email" name='mail' placeholder="customer@demo.com" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone *</span>
                            </label>
                            <input type="number" name='phone' placeholder="E.164 standard. ex: +880 1903 219313" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password *</span>
                            </label>
                            <div className='relative'>
                                <input onChange={handlePasswordStrength} type={viewPass ? "text" : "password"} name='password' placeholder="password" className="input input-bordered rounded w-full" required />
                                <FaRegEye size={18} onClick={() => setViewPass(!viewPass)} className={viewPass ? "hidden" : 'opacity-75 absolute top-4 right-4'} />
                                <FaEyeSlash size={20} onClick={() => setViewPass(!viewPass)} className={viewPass ? 'opacity-75 absolute top-4 right-4' : "hidden"} />
                            </div>
                        </div>
                        {
                            passStrength && <p className='text-xs text-red-500'>** {passStrength} **</p>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password *</span>
                            </label>
                            <div className='relative'>
                                <input type={viewConfPass ? "text" : "password"} name='conf_password' placeholder="password" className="input input-bordered rounded w-full" required />
                                <FaRegEye size={18} onClick={() => setViewConfPass(!viewConfPass)} className={viewConfPass ? "hidden" : 'opacity-75 absolute top-4 right-4'} />
                                <FaEyeSlash size={20} onClick={() => setViewConfPass(!viewConfPass)} className={viewConfPass ? 'opacity-75 absolute top-4 right-4' : "hidden"} />
                            </div>
                        </div>
                        {
                            error && <p className='text-xs text-red-500'>** {error} **</p>
                        }
                        <div className='flex items-center justify-start gap-2 pt-6'>
                            <input type="checkbox" className="checkbox checkbox-sm" required />
                            <h4 className='text-sm font-semibold'>{"I've read and accept the Privacy Policy"}</h4>
                        </div>
                        <p className='text-xs'>By signing up, you agree to our <a href="#" className='font-semibold hover:underline hover:text-yellow-600'>Terms of Services.</a> Learn how we collect and use your data in our <a href="#" className='font-semibold hover:underline hover:text-yellow-600'>Privacy Policy.</a></p>
                        <div className="form-control mt-6 space-y-3">
                            <button className="btn btn-warning text-white rounded-none uppercase ">Signup</button>
                            <Link to={'/authenticate'} className="btn bg-[#181818] hover:bg-white text-white hover:text-black rounded-none uppercase flex-1">Already have An Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;