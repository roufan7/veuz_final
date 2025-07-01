import React from "react";
import HeaderImage from "../assets/images/page_header.png";
import Stepper from "./stepper";
const SummaryView = ({ currentStep, handleNext, handlePrevious, gitex }) => {
    return (
        <div className="relative min-h-screen bg-gray-100">
            <img src={HeaderImage} className="w-full" alt="Top banner" />
            <Stepper currentStep={currentStep} />

            <div className="max-w-6xl rounded mx-auto rounded-xl shadow w-full  px-4 py-4">
                <div className="bg-gradient-to-r from-[#299D3F] to-[#123F22] p-4 rounded-xl">
                    <h2 className="text-white font-bold text-lg">Registration Summary</h2>
                </div>

                <div className="p-6 space-y-4 text-sm">
                    <div className="flex justify-between font-semibold">
                        <span>PREMIUM TICKET x 2</span>
                        <span>EUR 40.19</span>
                    </div>
                    {gitex ?
                        <div className="mt-4">
                            <div className="bg-[#E6F4EC] border border-dashed border-green-700 rounded-md px-4 py-3">
                                <p className=" font-semibold mb-2">Have a promo code?</p>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        disabled
                                        value={'GITEX15'}
                                        placeholder="Enter Promo code"
                                        className="flex-1 px-3 py-2 bg-gray-300 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
                                    />
                                    <button className="bg-gradient-to-r from-[#9F1413] to-[#000000] text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
                                        APPLY
                                    </button>
                                </div>
                                <div className="text-green-700 text-xs">Promo code "GITEX15" applied successfully! Applied to 2 lowest-priced tickets!</div>
                                <div className="text-xs bg-white rounded py-5 px-3  flex items-center justify-between mt-2">
                                    <div className="space-y-1">
                                        <div>Promo code applied:<span className="text-green-700"> GITEX15</span></div>
                                        <div>Promo code applied: <span className="text-green-700">15% (EUR 0.06 incl. VAT)</span></div>
                                        <div>Applied to: <span className="text-green-700">2 lowest-priced tickets</span></div>
                                    </div>
                                    <div className="border border-red-700 border-2 rounded-lg text-sm font-semibold px-3 py-2 text-red-700 cursor-pointer"  >
                                        Remove
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="flex justify-between font-semibold">
                            <span>Student Ticket Access On Day 3 Only</span>
                            <span>EUR 50.40 SUBJECT TO APPROVAL Incl. 19%</span>
                        </div>
                    }

                    {gitex ?
                        <div className="flex justify-between font-semibold">
                            <span>Student Ticket Access On Day 3 Only</span>
                            <span>EUR 50.40 SUBJECT TO APPROVAL Incl. 19%</span>
                        </div>
                        :
                        <div className="mt-4">
                            <div className="bg-[#E6F4EC] border border-dashed border-green-700 rounded-md px-4 py-3">
                                <p className="text-green-700 font-semibold mb-2">Have a promo code?</p>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter Promo code"
                                        className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
                                    />
                                    <button className="bg-gradient-to-r from-[#9F1413] to-[#000000] text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
                                        APPLY
                                    </button>
                                </div>
                            </div>
                        </div>
                    }


                    <div className={`${gitex ? '' : 'text-right'} font-bold text-base`}>
                        Total: <span className="text-black">EUR 300</span>
                        <span className="text-xs text-gray-500 ml-1">(Incl. 19% VAT)</span>
                    </div>

                    <div className="space-y-3 text-sm">
                        <label className="flex items-start gap-2">
                            <input type="checkbox" className="w-5 h-5 accent-black border-2 border-black rounded-sm mt-1" />
                            <span>
                                I have read and accept the{' '}
                                <a href="#" className="text-red-600 underline">
                                    terms and conditions
                                </a>
                                ,{' '}
                                <a href="#" className="text-red-600 underline">
                                    Privacy Policy
                                </a>
                                , and consent that attendees under the age of 21 will not be admitted, and admission to the exhibition is restricted to trade and business professionals only, and students above 16 and below 18 can attend only if accompanied by school or faculty member <span className="text-red-600">*</span>
                            </span>
                        </label>

                        <label className="flex items-start gap-2">
                            <input type="checkbox" className="w-5 h-5 accent-black border-2 border-black rounded-sm mt-1" />
                            <span>
                                I hereby consent the use of my data by the organiser, exhibitors and sponsors of DWTC & KAOUN International to delivering services and for marketing purposes. I am aware that I can object to the sending of newsletters at any time <span className="text-red-600">*</span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-2 mb-3">
                {currentStep > 1 ?
                    <button className="bg-gradient-to-r from-[#5C2F66] to-[#25102C] text-white font-bold py-2 px-8 rounded mt-3 cursor-pointer" onClick={handlePrevious}>
                        Previous
                    </button>
                    :
                    <></>
                }
                <button className="bg-gradient-to-r from-[#27963D] to-[#134323] text-white font-bold py-2 px-8 rounded transition-colors mt-3 cursor-pointer" onClick={handleNext}>
                    NEXT
                </button>
            </div>
            <img src={HeaderImage} className="w-full" alt="Footer banner" />
        </div>
    );
}
export default SummaryView;