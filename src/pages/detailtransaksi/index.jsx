import React from "react";

const DetailTransaksi = () => {
  return (
    <div className="w-full flex flex-col lg:pt-28 pt-16 px-4 lg:px-0 text-white">
      <h1 className="text-2xl font-bold p-4">Transaction Detail</h1>
      <h1 className="text-2xl font-bold p-4">Bitamigos #666</h1>

      <div className="flex items-center w-full bg-[#090F20] rounded-t-lg">
        <button className="p-2 whitespace-nowrap bg-[#201C4A] text-white rounded-t-lg">
          Overview
        </button>
        <button className="p-2 whitespace-nowrap text-white">
          SQL Balance Change
        </button>
        <button className="p-2 whitespace-nowrap text-white">
          Token Balance Change
        </button>
      </div>

      <div className="bg-[#090F20] p-6 shadow-md max-w-3xl min-w-full">
        <div className="mb-4">
          <span className="font-bold">Signature </span>
          <span className="break-all ml-20">
            5uLb7kZQCXTUjZWdFYzUrPQMBREmk3uVDZCxxHWpbpRaJwUcLCXrSkqfbqxvxPb3M8FrcVHpSpS12yR1z22zhV
          </span>
        </div>
        <div className="mb-4">
          <span className="font-bold">Block </span>
          <span className="ml-28">279592591</span>
        </div>
        <div className="mb-4">
          <span className="font-bold">Timestamp </span>
          <span className="ml-16">
            about 14 hours ago | July 25, 2024 12:48:05 +UTC
          </span>
        </div>
        <div className="mb-4">
          <span className="font-bold">Result </span>
          <span className="text-green-500 ml-24">Success ✔️</span>
        </div>
        <div className="mb-4">
          <span className="font-bold">Contact Address </span>
          <span className="break-all ml-4">
            GMAo63vTVdVFjij28PnAAhBunKnsGCPeosc6eeY4EB7K
          </span>
        </div>
        <div className="mb-4">
          <span className="font-bold">Price </span>
          <span className="ml-28">0.00005 SOL ($0.008792)</span>
        </div>
      </div>
    </div>
  );
};

export default DetailTransaksi;
