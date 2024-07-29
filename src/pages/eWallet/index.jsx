import { ArrowCircleDown, ArrowCircleUp, ArrowSquareLeft, ArrowSquareRight, CaretLeft, CaretRight, Copy } from "@phosphor-icons/react";
import { Clock, Funnel, ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const EWallet = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-5xl font-semibold text-center mt-9 mb-8">
        My Wallet
      </h2>
      <div className=" text-white flex flex-col gap-[2px] w-fit">
        <div className="p-4 bg-[#090F20] h-[100px]">
          <p>Wallet Balance</p>
          <span className="text-[2rem] text-[#F7931A] font-semibold">
            $43.6257,90
          </span>
        </div>
        <div className="p-4 bg-[#090F20] h-[100px]">
          <p>Wallet public key</p>
          <div className="flex items-center">
            <span className="text-lg font-semibold">
              637SDJN3892847FAJ837892...
            </span>
            <Copy size={24} weight="regular" />
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6 md:gap-8">
          <button className="p-3 border border-[#764EBE] rounded-lg flex gap-3 items-center w-full">
            <ArrowCircleDown size={24} weight="regular" />
            <span>Receive</span>
          </button>
          <button className="p-3 border border-[#764EBE] rounded-lg flex gap-3 items-center w-full">
            <ArrowCircleUp size={24} weight="regular" />
            <span>Send</span>
          </button>
          <button className="p-3 border border-[#764EBE] rounded-lg flex gap-3 items-center w-full">
            <ShoppingCart size={24} weight="regular" />
            <span>Buy</span>
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-scroll mt-12 bg-[#090F20]">
        <div className="flex items-center w-fit lg:w-full">
          <button className="p-2 w-fit whitespace-nowrap bg-[#201C4A] lg:w-full">
            Transaction
          </button>
          <button className="p-2 w-fit whitespace-nowrap lg:w-full">
            Transfer
          </button>
          <button className="p-2 w-fit whitespace-nowrap lg:w-full">
            Balance Changes
          </button>
          <button className="p-2 w-fit whitespace-nowrap lg:w-full">
            Defi Activities
          </button>
          <button className="p-2 w-fit whitespace-nowrap lg:w-full">
            NFT Activities
          </button>
          <button className="p-2 w-fit whitespace-nowrap lg:w-full">
            Portopolio
          </button>
          <button className="p-2 w-fit whitespace-nowrap lg:w-full">
            Stake Accounts
          </button>
          <button className="p-2 w-fit whitespace-nowrap lg:w-full">
            Domains
          </button>
        </div>
        <div className="flex flex-col w-full mt-2">
          <div className="flex items-center w-fit lg:w-full">
            <div className="p-2 w-fit flex items-center lg:w-full">
              <span>Signature</span>
            </div>
            <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
              <span>Time</span>
              <Clock size={24} weight="regular" color="blue"/>
              <Funnel size={24} weight="regular" />
            </div>
            <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
              <span>Result</span>
              <Funnel size={24} weight="regular" />
            </div>
            <div className="p2 w-fit flex gap-2 items-center lg:w-full">
              <span>NFT</span>
              <Funnel size={24} weight="regular" />
            </div>
            <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
              <span>Price</span>
              <Funnel size={24} weight="regular" />
            </div>
            <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
              <span>Block</span>
              <Funnel size={24} weight="regular" />
            </div>
            <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
              <span>Contact</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex items-center w-fit lg:w-full ">
              <div className="p-2 w-fit flex items-center lg:w-full ">
                <span className="text-blue-800">yeuPNDu...</span>
                <Copy size={24} weight="regular" />
              </div>
              <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
                <span className="whitespace-nowrap">about 2 hours ago</span>
              </div>
              <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
                <span className="inline-block px-2 rounded-full bg-[#764EBE]">
                  Succes
                </span>
              </div>
              <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
                <img src="/profilnft.png" width={24} height={24} />
                <span className="text-blue-800">Bitamigos</span>
                <Copy size={24} weight="regular" />
              </div>
              <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
                <span className="whitespace-nowrap">0.003 BTC</span>
              </div>
              <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
                <span>279719860</span>
              </div>
              <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
                <img src="/profilcontact.png" alt="" width={24} height={24} />
                <span className="text-blue-800">Xheos</span>
              </div>
            </div>
            <div className="flex items-center w-fit lg:w-full">
              <div className="p-2 w-fit flex items-center lg:w-full">
                <span className="text-blue-800">yeuPNDu...</span>
                <Copy size={24} weight="regular" />
              </div>
              <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
                <span className="whitespace-nowrap">about 2 hours ago</span>
              </div>
              <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
                <span className="inline-block px-2 rounded-full bg-[#764EBE]">
                  Succes
                </span>
              </div>
              <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
                <img src="/profilnft.png" width={24} height={24} />
                <span className="text-blue-800">Bitamigos</span>
                <Copy size={24} weight="regular" />
              </div>
              <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
                <span className="whitespace-nowrap">0.003 BTC</span>
              </div>
              <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
                <span>279719860</span>
              </div>
              <div className="p-2 w-fit flex gap-2 items-center lg:w-full">
                <img src="/profilcontact.png" alt="" width={24} height={24} />
                <span className="text-blue-800">Xheos</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-6">
          <div className="flex items-center w-fit lg:w-full">
            <div className="p-2 flex justify-center lg:w-full">
              <CaretLeft size={20} weight="regular" />
              <span className="text-gray-500">Page 1 of 100</span>
              <CaretRight size={20} weight="regular" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EWallet;
