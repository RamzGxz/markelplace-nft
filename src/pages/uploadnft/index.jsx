import React from "react";

const Uploadnft = () => {
  return (
    <div className="w-full flex flex-col lg:pt-10 pt-16 px-4 lg:px-0">
      <h1 className="text-2xl font-bold p-4 text-white">Starter Page</h1>
      <div className="bg-[#090F20] w-full max-w-5xl flex flex-col lg:flex-row items-start p-6 rounded-lg space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="lg:w-1/2 flex flex-col items-start space-y-4">
          <div className="text-white">
            <p>Upload your ART here, Please click "Upload Image" Button.</p>
          </div>
          <div className="bg-[#7B9098] text-[#d5eff9] rounded-lg p-4">
            <p>Supports JPG, PNG and MP4 videos. Max file size: 10MB.</p>
          </div>
          <button className="bg-purple-600 text-white py-2 px-4 rounded-[20px]">
            Upload Image
          </button>
        </div>

        <div className="lg:w-1/2 flex flex-col items-start space-y-4">
          <div className="w-full">
            <label
              className="block text-white font-bold mb-2"
              htmlFor="art-title"
            >
              Art Title
            </label>
            <input
              className="w-full p-2 bg-[#090F20] text-gray-300 rounded-lg border border-gray-600"
              type="text"
              id="art-title"
              placeholder="Title :"
            />
          </div>
          <div className="w-full">
            <label
              className="block text-white font-bold mb-2"
              htmlFor="description"
            >
              Description :
            </label>
            <input
              className="w-full p-2 bg-[#090F20] text-gray-300 rounded-lg border border-gray-600"
              type="text"
              id="description"
              placeholder="Description"
            />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-white font-bold mb-2" htmlFor="type">
                Type :
              </label>
              <input
                className="w-full p-2 bg-[#090F20] text-gray-300 rounded-lg border border-gray-600"
                type="text"
                id="type"
                placeholder="GIFs"
              />
            </div>
            <div>
              <label className="block text-white font-bold mb-2" htmlFor="rate">
                Rate :
              </label>
              <input
                className="w-full p-2 bg-[#090F20] text-gray-300 rounded-lg border border-gray-600"
                type="text"
                id="rate"
                placeholder="0.004ETH"
              />
            </div>
            <div>
              <label
                className="block text-white font-bold mb-2"
                htmlFor="starting-date"
              >
                Auction :
              </label>
              <input
                className="w-full p-2 bg-[#090F20] text-gray-300 rounded-lg border border-gray-600"
                type="text"
                id="starting-date"
                placeholder="Select date :"
              />
            </div>
            <div>
              <label
                className="block text-white font-bold mb-2"
                htmlFor="expiration-date"
              >
                Expiration date :
              </label>
              <input
                className="w-full p-2 bg-[#090F20] text-gray-300 rounded-lg border border-gray-600"
                type="text"
                id="expiration-date"
                placeholder="Select date :"
              />
            </div>
          </div>
          <button className="bg-purple-600 text-white py-2 px-4 rounded-[20px] mt-4">
            Create Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Uploadnft;
