import React, { useState } from "react";
import HeaderImage from "../assets/images/page_header.png";
import CardBg1 from "../assets/images/edited_card_bg_1.png";
import CardLogo from "../assets/images/card_logo.png";
import strike from '../assets/images/vector.png'


const ticketData = [
  {
    color: "bg-[#451D5D]",
    title: "VISITOR 3 DAY ACCESS TICKET",
    tag: "VIEW DETAILS →",
    bgImage: CardBg1,
    price: "USD 32.5",
    exclusive: false,
    purchaseCount: 0,
    amount: 32.5,
    is_gitex: true
  },
  {
    color: "bg-orange-600",
    title: "VISITOR 3 DAY ACCESS TICKET",
    tag: "VIEW DETAILS →",
    bgImage: CardBg1,
    price: "FREE",
    exclusive: false,
    purchaseCount: 0,
    amount: 0.0
  },
  {
    color: "bg-green-700",
    title: "VISITOR 3 DAY ACCESS TICKET",
    tag: "VIEW DETAILS →",
    bgImage: CardBg1,
    price: "FREE",
    exclusive: true,
    purchaseCount: 0,
    amount: 0.0
  },
  {
    color: "bg-[#B5040A]",
    title: "VISITOR 3 DAY ACCESS TICKET",
    tag: "VIEW DETAILS →",
    bgImage: CardBg1,
    price: "FREE",
    exclusive: false,
    purchaseCount: 0,
    amount: 0.0
  },
  {
    color: "bg-[#53BE2C]",
    title: "VISITOR 3 DAY ACCESS TICKET",
    tag: "VIEW DETAILS →",
    bgImage: CardBg1,
    price: "FREE",
    exclusive: false,
    purchaseCount: 0,
    amount: 0.0
  },
  {
    color: "bg-[#004D98]",
    title: "VISITOR 3 DAY ACCESS TICKET",
    tag: "VIEW DETAILS →",
    bgImage: CardBg1,
    price: "FREE",
    exclusive: true,
    purchaseCount: 0,
    amount: 0.0
  },
];



const ListView = ({ setView, setCurrentStep, setGitex }) => {
  const [items, setItems] = useState(ticketData);

  const handleIncrement = (index) => {
    const updatedItems = [...items];
    updatedItems[index].purchaseCount += 1;
    setItems(updatedItems);
  };

  const handleDecrement = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].purchaseCount > 0) {
      updatedItems[index].purchaseCount -= 1;
    }
    setItems(updatedItems);
  };

  const handleBuyNow = () => {
    setView("FORM");
    setCurrentStep(1)
    if (items?.[0]?.purchaseCount > 0) {

      setGitex(true)
    }
  }
  return (
    <div className="relative min-h-screen">
      <img src={HeaderImage} className="w-full" alt="Top banner" />

      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6" style={{ fontFamily: 'Poppins,sans-serif' }}>
        {items.map((item, index) => (
          <div className="relative overflow-hidden p-1 rounded-xl h-full">
            {item.exclusive && (
              <div class="absolute z-1 left-[-61px] top-[-8px] w-[170px] transform -rotate-45 bg-gradient-to-b from-green-600 via-green-700 via-green-800 to-gray-800 text-center text-white font-semibold pt-8 pb-4">
                Exclusive
              </div>
            )}
            <div className="relative rounded-xl overflow-hidden text-white h-full">
              <div className="relative h-20 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${HeaderImage}')` }}
                ></div>

                <div className={`absolute inset-0 ${item.color} opacity-80`}></div>

                <div
                  className={`relative z-10 p-4 text-white ${item.exclusive ? "ml-15" : ""
                    }`}
                >
                  <div className="text-lg font-bold">{item.title}</div>
                  <div className="text-xs font-normal text-yellow-300 mt-1">
                    {item.tag}
                  </div>
                </div>
              </div>


              <div
                className="p-4 bg-cover bg-center relative h-100 flex flex-col justify-between"
                style={{ backgroundImage: `url('${item.bgImage}')` }}
              >
                <div className="text-sm">
                  <span className="text-white">Visitor Passes provide </span>
                  <span className="text-green-400 font-semibold">3 DAYS ACCESS </span>
                  <span className="text-white">
                    to GITEX NIGERIA exhibition and all free conference
                  </span>
                </div>
                {item?.is_gitex ?
                  <div className="">
                    <img src={CardLogo} className="w-50" />
                  </div>
                  :
                  <div className="space-y-2 flex items-center flex-wrap">
                    {[
                      "Access to ConneXions & Investor Lounge",
                      "Network Events",
                      "All Conference Tracks",
                      "All Masterclasses",
                      "3 Days Access to the Show",
                      "Access to Dubai Internet City Lounge",
                    ].map((point, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-sm px-3 py-1 rounded-full"
                      >
                        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                          ✔
                        </span>
                        <span className="text-white">{point}</span>
                      </span>
                    ))}
                  </div>
                }
                <div>
                  <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-white/70 via-white/40 to-white/0"></div>
                  <div className="flex justify-between items-center px-4 py-2">
                    <div className="text-sm font-medium flex-1">
                      {item?.amount > 0 ?
                        <div className="flex items-center space-x-2 flex-wrap ">
                          <div className="font-bold text-lg">USD</div>
                          <div className="relative w-[40px] text-center">
                            <div className="font-bold text-lg text-gray-400">43</div>
                            <div className="absolute top-[5px] left-0 "><img src={strike} className="w-[40px]" /></div>
                          </div>
                          <div className="font-bold text-lg border border-gray-400 py-1 px-2 rounded-lg">{item?.amount}</div>
                          <div className="text-gray-400">INCL. 19% VAT</div>
                        </div>
                        :
                        <div className="">
                          <div className="font-bold text-lg">FREE</div>
                          <div className="text-gray-400">INCL. 19% VAT</div>
                        </div>
                      }
                    </div>
                    {item?.purchaseCount > 0 ?
                      <div className="flex items-center border border-white rounded overflow-hidden text-white text-base font-semibold">
                        <button
                          onClick={() => handleDecrement(index)}
                          className="bg-black w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition"
                        >
                          –
                        </button>
                        <div className="bg-white text-black w-12 h-8 flex items-center justify-center">
                          {item?.purchaseCount}
                        </div>
                        <button
                          onClick={() => handleIncrement(index)}
                          className="bg-black w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition"
                        >
                          +
                        </button>
                      </div>
                      :
                      <button className="bg-white text-black px-3 py-1 text-sm rounded cursor-pointer font-semibold h-8 w-[92px]" onClick={() => handleIncrement(index)}>
                        BUY NOW
                      </button>
                    }
                  </div>
                </div>
              </div>

              <div className="absolute left-[-18px] top-1/2 w-8 h-8 rounded-full bg-white"></div>
              <div className="absolute right-[-18px] top-1/2 w-8 h-8 rounded-full bg-white"></div>
            </div>
          </div>
        ))}
      </div>

      <img src={HeaderImage} classNa me="w-full" alt="Footer banner" />
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#299D3F] to-[#123F22] py-4 px-10 z-10">
        <div className="flex items-center gap-4 justify-end">
          <p className="text-white font-semibold text-sm">
            Total: <span className="text-xl font-bold">EUR 0</span> Incl. 19% VAT
          </p>
          <button
            className="bg-white text-black px-4 py-2 rounded shadow font-semibold cursor-pointer"
            onClick={() => handleBuyNow()}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListView;
