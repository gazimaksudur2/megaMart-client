import React from 'react';
import TitleBanner from '../../shared/TitleBanner';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <TitleBanner route={'home / contact'} title={'Contact'} />
            <div className='my-10 w-[80%] mx-auto'>
                <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                    {/* <iframe width="100%" height="100%" className='min-h-full' frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe> */}
                </div>
                <div className="flex justify-center items-center p-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1324.9577825380543!2d90.02668650233286!3d24.14151808482393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ff120b90dcad%3A0x5ec020373e7654a!2sGazi%20Lutfar%20Rahman%20Villa!5e0!3m2!1sen!2sbd!4v1724872284664!5m2!1sen!2sbd"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Gazi Lutfar Rahman Villa Location"
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
                <div className='my-20 grid grid-cols-6'>
                    <div className='bg-base-200 p-8 rounded col-span-2'>
                        <h2 className='text-xl mb-6 font-semibold font-open'>Contact Info</h2>
                        <div className='space-y-3'>
                            <div className='flex items-start justify-start '>
                                <h3 className='min-w-[35%] font-semibold'>Phone:</h3>
                                <div>
                                    <h4>+880 1903 219313</h4>
                                    <h4>+880 1731 013276</h4>
                                </div>
                            </div>
                            <div className='flex items-start justify-start '>
                                <h3 className='min-w-[35%] font-semibold'>Email:</h3>
                                <div>
                                    <h4>info@megamart.com</h4>
                                    <h4>services@megamart.com</h4>
                                </div>
                            </div>
                            <div className='flex items-start justify-start '>
                                <h3 className='min-w-[35%] font-semibold'>Address:</h3>
                                <div>
                                    <h4>Store No: 206, Rajbari Market-3114</h4>
                                    <h4>Sylhet Sadar, Sylhet</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'></div>
                    <div className='bg-base-200 p-8 rounded col-span-3'>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                            <h2 className='capitalize mb-6 font-semibold text-xl'>Get in touch</h2>
                            <div className='flex items-center justify-between gap-10'>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input {...register("firstName", { required: true, maxLength: 20 })} type="text" placeholder="John" className="input input-bordered rounded" required />
                                </div>
                                <div className="form-control  flex-1">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Doe" className="input input-bordered rounded" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input {...register("subject", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Write Your Subject" className="input input-bordered rounded" required />
                            </div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Message</span>
                                </div>
                                <textarea className="textarea textarea-bordered h-32 rounded" placeholder="Your Message"></textarea>
                            </label>
                            <input type="submit" className='btn btn-warning text-white w-full'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;