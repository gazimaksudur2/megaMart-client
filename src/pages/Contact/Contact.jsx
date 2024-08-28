import React from 'react';
import TitleBanner from '../../shared/TitleBanner';

const Contact = () => {
    return (
        <div>
            <TitleBanner route={'home / contact'} title={'Contact'} />
            This is contact page.
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
                <div>
                    <div>
                        <h2>Contact Info</h2>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;