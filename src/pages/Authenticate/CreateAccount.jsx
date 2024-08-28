import React from 'react';
import TitleBanner from '../../shared/TitleBanner';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    const handleSignUp = e => {
        e.preventDefault();
        console.log(e.target);
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
                            <input type="phone" name='phone' placeholder="E.164 standard. ex: +880 1903 219313" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password *</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password *</span>
                            </label>
                            <input type="password" name='conf_password' placeholder="password" className="input input-bordered rounded" required />
                        </div>
                        <div className='flex items-center justify-start gap-2 pt-6'>
                            <input type="checkbox" className="checkbox checkbox-sm" />
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