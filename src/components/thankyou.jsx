import React from 'react';
import BgImage from '../assets/images/thanks_bg.png'
import HeaderImage from '../assets/images/page_header.png'

const ThankYouPage = ({ setView }) => {
    return (
        <div className="min-h-screen bg-cover" style={{ backgroundImage: `url('${BgImage}')` }}>
            <img src={HeaderImage} className="w-full" alt="Top banner" />
            <div className=" flex items-center justify-center px-4 py-10 relative overflow-hidden " >
                <div className="relative z-10 max-w-xl w-full bg-white rounded-xl shadow-md my-10">
                    <div className="h-2 rounded-t-xl bg-gradient-to-r from-[#006400] to-[#00A651]" />

                    <div className="p-8 text-center">
                        <h1 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4">THANK YOU!</h1>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                            Your Registration Has Been Submitted Successfully
                            <br />
                            <br />
                            A Confirmation Email With Your Event Details Will Be Sent To You Shortly. (Please Check Your Inbox And Spam Folder)
                        </p>

                        <button className="bg-[#008000] cursor-pointer text-white px-6 py-2 rounded-md text-sm font-semibold" onClick={() => setView('LIST')}>
                            Return To Homepage
                        </button>
                    </div>
                </div>
            </div>
            <img src={HeaderImage} className="w-full" alt="Footer banner" />
        </div>
    );
};

export default ThankYouPage;
