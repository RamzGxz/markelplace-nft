import {Heart, ToteSimple, Plus, Minus, CaretUp, Pulse} from "@phosphor-icons/react";
import { useState } from "react";

const DetailProduk = () => {
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isDetailVisible, setIsDetailVisible] = useState(true);
  const [isActivityVisible, setIsActivityVisible] = useState(false);
  const [isMoreProdukVisible, setIsMoreProdukVisible] = useState(false);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const toogleDetail = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  const toogleActivity = () => {
    setIsActivityVisible (!isActivityVisible);
  }

  return (
    <div className="w-full flex justify-between items-center py-5 sticky top-0 left-0 mt-7 overflow-hidden">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          <div className="relative lg:w-[570px] flex justify-center">
            <div className="absolute flex items-center justify-end top-[-20px] left-0 right-0 h-[50px] bg-[#392B74] rounded-se-lg rounded-ss-lg border border-[#392B74]">
              <p className="text-[20px]">100</p>
              <Heart size={40} className="mr-2 ml-2" />
            </div>
            <img
              src="detailhero.png"
              className="mt-7 rounded-ee-lg rounded-es-lg border-2 border-[#392B74]"
              alt=""
            />
          </div>

          <div className="mt-5 mx-0 md:mx-0 flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Degen Ape #7988</h1>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-start">
              <div className="flex gap-1 items-center justify-start">
                <p>Creator</p>
                <img src="creator.png" className="w-10" alt="" />
                <p>Degenerate Ape Academy</p>
              </div>
              <div className="flex gap-2 items-center justify-start">
                <p>Owner</p>
                <img src="owner.png" className="w-10" alt="" />
                <p>bsicusdgciusgdcsdc</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={40} className="cursor-pointer" />
              <p>100</p>
            </div>
            <div className="bg-[#392B74]/15 rounded-[6px] lg:w-[640px] mt-2">
              <div className="p-3 flex flex-col items-start gap-2">
                <div className="flex justify-between w-full items-center">
                  <h1 className="text-[20px]">Price</h1>
                  <div className="flex gap-3 lg:gap-6 border border-[#392B74] rounded p-1">
                    <button onClick={decreaseQuantity} className="p-1">
                      <Minus size={20} />
                    </button>
                    <p className="text-[20px]">{quantity}</p>
                    <button onClick={increaseQuantity} className="p-1">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
                <p className="text-[32px] font-bold">
                  0.844 ETH{" "}
                  <span className="text-[16px] font-normal">$2,680.27</span>
                </p>
                <button className="flex justify-between items-center gap-6 bg-[#392B74]/60 p-2 px-10 rounded border border-[#392B74]">
                  <p className="text-[16px] font-bold">Buy Now</p>
                  <ToteSimple size={20} />
                </button>
              </div>
            </div>
            
            <div className="cursor-pointer lg:w-[640px]" onClick={toggleDescription}>
              <div className="p-3 py-2 bg-[#392B74]/60 rounded-t-[6px] flex items-center justify-between">
                <h1>Description</h1>
                <button onClick={toggleDescription} className="flex items-between">
                  <CaretUp
                    size={26}
                    className={`transition transform rotate-180 ${
                      isDescriptionVisible ? `transition transform rotate-0` : ""
                    }`}
                  />
                </button>
              </div>
              {isDescriptionVisible && (
                <div className="p-3 bg-[#392B74]/15 rounded-b-[6px]">
                  <div className="flex flex-col gap-5">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum natus nihil ea dolores? Neque praesentium dolorum similique non! Dolorum officiis eos voluptas fugiat quo harum dolor. Saepe, praesentium eligendi! Porro.</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="cursor-pointer lg:w-[640px]" onClick={toogleDetail}>
              <div className="p-3 py-2 bg-[#392B74]/60 rounded-t-[6px] flex items-center justify-between">
                <h1>Detail</h1>
                <button onClick={toogleDetail} className="flex items-between">
                  <CaretUp
                    size={26}
                    className={`transition transform rotate-180 ${
                      isDetailVisible ? `transition transform rotate-0` : ""
                    }`}
                  />
                </button>
              </div>
              {isDetailVisible && (
                <div className="p-3 bg-[#392B74]/15 rounded-b-[6px]">
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                      <p>Contact Addres</p>
                      <a href="" className="text-blue-400">
                        0xb6a37b5d14d5
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <p>Owner</p>
                      <a href="">bsicusdgciusgdcsdc</a>
                    </div>
                    <div className="flex justify-between">
                      <p>Chain</p>
                      <h1>Etherium</h1>
                    </div>
                    <div className="flex justify-between">
                      <p>Last Update</p>
                      <h1>1 mont ago</h1>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="cursor-pointer w-[19.4rem] md:w-[45rem] lg:w-[79.5rem] mt-20" onClick={toogleActivity}>
              <div className="p-3 py-2 bg-[#392B74]/60 rounded-t-[6px] flex items-center justify-between gap-[100px]">
                <div className="flex items-center">
                    <Pulse size={20}/>
                    <h1>Activity</h1>
                </div>
                <button onClick={toogleActivity} className="flex items-center">
                  <CaretUp
                    size={26}
                    className={`transition transform rotate-180 ${
                      isActivityVisible ? `transition transform rotate-0` : ""
                    }`}
                  />
                </button>
              </div>
              {isActivityVisible && (
                <div className="p-3 bg-[#392B74]/15 rounded-b-[6px] overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="">
                                <th className="px-12 lg:px-28 py-5 text-left">Type</th>
                                <th className="px-12 lg:px-28 py-5 text-left">Price</th>
                                <th className="px-12 lg:px-28 py-5 text-left">Date</th>
                                <th className="px-12 lg:px-28 py-5 text-left">Transaction</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-[#392B74]/10">
                                <td className="px-12 lg:px-28 py-5">Sale</td>
                                <td className="px-12 lg:px-28 py-5">0.844 ETH </td>
                                <td className="px-12 lg:px-28 py-5">3 years ago</td>
                                <td className="px-12 lg:px-28 py-5">53H5...d6az</td>
                            </tr>
                            <tr className="hover:bg-[#392B74]/10">
                                <td className="px-12 lg:px-28 py-5">Sale</td>
                                <td className="px-12 lg:px-28 py-5">0.844 ETH </td>
                                <td className="px-12 lg:px-28 py-5">3 years ago</td>
                                <td className="px-12 lg:px-28 py-5">53H5...d6az</td>
                            </tr>
                            <tr className="hover:bg-[#392B74]/10">
                                <td className="px-12 lg:px-28 py-5">Sale</td>
                                <td className="px-12 lg:px-28 py-5">0.844 ETH </td>
                                <td className="px-12 lg:px-28 py-5">3 years ago</td>
                                <td className="px-12 lg:px-28 py-5">53H5...d6az</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;
