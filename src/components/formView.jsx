import React, { useState } from "react";
import HeaderImage from "../assets/images/page_header.png";
import VisitorLogoImage from "../assets/images/visitor_head_logo.png";
import Stepper from "./stepper";
import BgImage from '../assets/images/form_bg.png'
import GitexLogo from '../assets/images/gitex_logo.png'
import fbLogo from '../assets/images/Facebook.png'
import twitterLogo from '../assets/images/Twitter.png'
import InstaLogo from '../assets/images/Instagram.png'
import LinkedinLogo from '../assets/images/Linkedin.png'
import YoutubeLogo from '../assets/images/Youtube.png'
import LoginButton from '../assets/images/login_button.png'
import Flag from '../assets/images/nigeria.png'
import Modal from "./Modal";
import ProductModal from "./productModal";


const workshopOptions = [
  [
    "Global Leaders Forum !NEW (3 Days)",
    "GITEX Main Stage",
    "Artificial Intelligence & Robotics (15)",
    "AI Everything (4 Days)",
    "Cybersecurity (4 Days)",
    "Future Health !NEW (2 Days)",
  ],
  [
    "Digital Cities (1 Day)",
    "Edtech (1 Day)",
    "Energy Transition (1 Day)",
    "Intelligent Connectivity (1 Day)",
    "Digital Finance (1 Day)",
    "Future Mobility (1 Day)",
  ],
];
const countries = [
  {
    code: "+234",
    name: "NG",
    flag: "https://flagcdn.com/w40/ng.png",
  },
  {
    code: "+1",
    name: "USA",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    code: "+44",
    name: "UK",
    flag: "https://flagcdn.com/w40/gb.png",
  },
];

const FormView = ({ currentStep, handleNext, handlePrevious, gitex }) => {

  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-poppins bg-cover" style={{ backgroundImage: `url('${BgImage}')` }}>
      <div className="relative">
        <img src={HeaderImage} alt="Header" className="w-full" />
        <div className="absolute top-0 left-0 flex items-center justify-center  w-full h-full">
          <img src={LoginButton} className="w-50" />
        </div>
      </div>

      <Stepper currentStep={currentStep} />

      <div className="max-w-6xl border border-green-700 bg-white rounded mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-2">
        <div className="md:col-span-2 bg-white  rounded-xl shadow w-full">
          <div className="flex justify-between items-center bg-gradient-to-r from-green-600  to-green-900 text-white px-4 py-4 rounded-t-md">
            <h2 className="font-bold font-alexandria">Registration Information 1</h2>
            <span className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs">PREMIUM TICKET - FREE INCL. 19% VAT</span>
          </div>

          <div className="flex-1 p-6 bg-white">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First name *</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last name *</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country of residence *</label>
                <select
                  name="country"
                  className="w-full px-3 py-2 border border-gray-300 text-gray-400 font-normal text-sm rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Please select</option>
                  <option value="uae">United Arab Emirates</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                <select
                  name="region"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-gray-400 font-normal text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Please select</option>
                  <option value="middle-east">Middle East</option>
                  <option value="north-america">North America</option>
                  <option value="europe">Europe</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address *</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Email address *</label>
                <input
                  type="email"
                  name="confirmEmail"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                <select
                  name="nationality"

                  className="w-full px-3 py-2 border border-gray-300 text-gray-400 font-normal text-sm rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Please select</option>
                  <option value="emirati">Emirati</option>
                  <option value="american">American</option>
                  <option value="british">British</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile number *</label>
                <div className="flex gap-1 w-full">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <img src={selected.flag} alt={selected.name} className="w-5 h-5" />
                        <span>{selected.code}</span>
                      </div>
                      <svg
                        className={`w-4 h-4 text-gray-500 transform transition-transform ${isOpen ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
                        {countries.map((country) => (
                          <div
                            key={country.code}
                            onClick={() => {
                              setSelected(country);
                              setIsOpen(false);
                            }}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                          >
                            <img src={country.flag} alt={country.name} className="w-5 h-5" />
                            <span>{country.code}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="mobileNumber"

                    className="w-full px-3 py-2 border  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company name *</label>
                <input
                  type="text"
                  name="companyName"

                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job title *</label>
                <input
                  type="text"
                  name="jobTitle"

                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company type *</label>
                <select
                  name="companyType"

                  className="w-full px-3 py-2 border border-gray-300 text-gray-400 font-normal text-sm rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Please select</option>
                  <option value="startup">Startup</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="government">Government</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Industry *</label>
                <select
                  name="industry"

                  className="w-full px-3 py-2 border text-gray-400 border-gray-300 font-normal text-sm rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option className="" value="">Please select</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div className="text-base font-medium text-gray-700 mb-3">
                  What products & services are you interested in? *
                </div>
                <div className="bg-gradient-to-l from-red-900 to-red-700 text-white px-3 py-2 text-sm font-semibold mb-4 rounded cursor-pointer" onClick={() => setShow(true)}>
                  SELECT <span className="font-bold">SOLUTIONS/PRODUCTS</span>
                </div>
              </div>
              {products?.length ?
                <div className="mb-3">
                  <div className="mb-3">Main Categories</div>
                  <div className="flex items-center flex-wrap gap-2">
                    {products?.map((item, index) =>
                      <div className="bg-[#5E3169] text-white rounded-full px-4 py-2 text-sm">{item}</div>
                    )}
                  </div>
                </div>
                :
                <></>
              }

              <div className="text-base font-medium text-black mb-2">Select Workshop<span className="text-gray-400 text-sm">(Maximum 6 can select)</span></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                {workshopOptions.map((column, columnIndex) => (
                  <div key={columnIndex}>
                    {column.map((label, index) => (
                      <label
                        key={index}
                        className="flex items-start space-x-2 text-sm text-gray-800 mb-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="w-5 h-5 accent-black border-2 border-black rounded-sm"
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>


        <div>
          <div className="bg-gray-50  rounded-xl shadow flex flex-col items-center w-full">
            <div style={{ backgroundImage: `url('${HeaderImage}')` }} className="w-full rounded-t p-2 bg-cover">
              <img src={VisitorLogoImage} alt="Badge Header" className="w-60 rounded-t" />
            </div>

            <div className="text-center ">
              <div className="text-sm text-gray-500 bg-gradient-to-r from-green-700 to-green-900 rounded-b pb-1 px-1 text-white">Registration Information 1</div>
              <div className="mt-3 space-y-3 text-sm text-gray-300">
                <p>FULL NAME</p>
                <p>JOB TITLE</p>
                <p>COMPANY NAME</p>
                <p>COUNTRY OF RESIDENCE</p>
              </div>
            </div>
            <div className="mt-6 w-full bg-white shadow-xl rounded-b-xl text-center p-4">
              <p className="text-xs text-gray-400 font-semibold">BADGE CATEGORY</p>
              <p className="font-bold text-lg">VISITOR</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-2">
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

      <Modal
        isOpen={show}
        onClose={() => {
          setShow(false);
        }}
        title="SELECT SOLUTIONS/PRODUCTS"
        onApply={() => { setShow(false); }}
      >
        <ProductModal setProducts={setProducts} products={products} />
      </Modal>
      <div className="relative mt-12">
        <img src={HeaderImage} alt="Footer" className="w-full" />
        {gitex ?
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center gap-2 w-full">
            <img src={GitexLogo} className="mt-3" />
            <div className="flex items-center gap-2">
              <img src={fbLogo} className="" />
              <img src={twitterLogo} className="" />
              <img src={InstaLogo} className="" />
              <img src={LinkedinLogo} className="" />
              <img src={YoutubeLogo} className="" />
            </div>
          </div>
          :
          <></>
        }
      </div>
    </div>
  )
};

export default FormView;
