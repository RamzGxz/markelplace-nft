import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@phosphor-icons/react';
import toast from 'react-hot-toast';

const ConfirmPayment = ({ setConnected, setAccounts }) => {
  const [isWallet, setWalletOpen] = useState(false);
  const [isConfirmPayment, setPaymentOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openPaymentPopup = () => {
    setWalletOpen(false);
    setPaymentOpen(true);
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <>
      <div>
        <button
          className="lg:px-10 px-8 lg:py-3 py-2 rounded-md bg-accent font-semibold hover:bg-accent/80"
          onClick={() => setWalletOpen(true)}
        >
          Buy Now
        </button>
      </div>
      {/* Validasi Wallet */}
      <AnimatePresence>
        {isWallet && (
          <div className="fixed inset-0 flex items-center justify-center h-screen bg-background bg-opacity-70 z-50 lg:px-0 px-5">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="w-full max-w-sm mx-auto p-5 bg-gradient-to-b from-background to-background via-secondary/10 rounded-md relative"
            >
              <div className="flex flex-col gap-3">
                <button
                  className="absolute top-3 right-3 hover:text-red-500 transition-colors duration-200"
                  onClick={() => setWalletOpen(false)}
                >
                  <X size={24} weight="bold" />
                </button>
                <div className="flex flex-col gap-5 w-full">
                  <h1 className="font-semibold">Select a wallet</h1>
                  <div className="max-h-96 overflow-y-auto space-y-4">
                    <button 
                      className="w-full rounded-md border border-text/15 p-3 flex items-center gap-2 hover:border-primary/15 hover:bg-primary/10 transition-colors duration-200"
                      onClick={openPaymentPopup}
                    >
                      <img src="https://next-cdn.unisat.io/_/271/logo/color.svg" alt="" width={30} height={30} />
                      Unisat wallet
                    </button>
                    <button 
                      className="w-full rounded-md border border-text/15 p-3 flex items-center gap-2 hover:border-primary/15 hover:bg-primary/10 transition-colors duration-200"
                      onClick={openPaymentPopup}
                    >
                      <img src="https://next-cdn.unisat.io/_/283/img/wallet/xverse_icon_whitecolor.svg" alt="" width={30} height={30} />
                      Xverse wallet
                    </button>
                    <button 
                      className="w-full rounded-md border border-text/15 p-3 flex items-center gap-2 hover:border-primary/15 hover:bg-primary/10 transition-colors duration-200"
                      onClick={openPaymentPopup}
                    >
                      <img src="https://next-cdn.unisat.io/_/283/img/wallet/hiro_wallet_logo_new.svg" alt="" width={30} height={30} />
                      Leather wallet
                    </button>
                    <button 
                      className="w-full rounded-md border border-text/15 p-3 flex items-center gap-2 hover:border-primary/15 hover:bg-primary/10 transition-colors duration-200"
                      onClick={openPaymentPopup}
                    >
                      <img src="https://next-cdn.unisat.io/_/283/img/wallet/okx_wallet_icon.svg" alt="" width={30} height={30} />
                      OKX wallet
                    </button>
                    <button 
                      className="w-full rounded-md border border-text/15 p-3 flex items-center gap-2 hover:border-primary/15 hover:bg-primary/10 transition-colors duration-200"
                      onClick={openPaymentPopup}
                    >
                      <img src="https://next-cdn.unisat.io/_/283/img/wallet/bitget.png" alt="" width={30} height={30} />
                      Bitget wallet
                    </button>
                    <button 
                      className="w-full rounded-md border border-text/15 p-3 flex items-center gap-2 hover:border-primary/15 hover:bg-primary/10 transition-colors duration-200"
                      onClick={openPaymentPopup}
                    >
                      <img src="https://unisat.io/img/wallet/phantom.jpg" alt="" width={30} height={30} />
                      Phantom wallet
                    </button>
                    <button 
                      className="w-full rounded-md border border-text/15 p-3 flex items-center gap-2 hover:border-primary/15 hover:bg-primary/10 transition-colors duration-200"
                      onClick={openPaymentPopup}
                    >
                      <img src="https://next-cdn.unisat.io/_/283/img/wallet/magic-eden.png" alt="" width={30} height={30} />
                      Magic Eden
                    </button>
                    <button 
                      className="w-full rounded-md border border-text/15 p-3 flex items-center gap-2 hover:border-primary/15 hover:bg-primary/10 transition-colors duration-200"
                      onClick={openPaymentPopup}
                    >
                      <img src="https://unisat.io/img/wallet/enkrypt.svg" alt="" width={30} height={30} />
                      Enkrypt
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Konfirmasi Pembayaran */}
      <AnimatePresence>
        {isConfirmPayment && (
          <div className="fixed inset-0 flex items-center justify-center h-screen bg-background bg-opacity-70 z-50 lg:px-0 px-5">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="w-full max-w-lg lg:max-w-2xl mx-auto p-8 bg-gradient-to-b from-background to-background via-secondary/10 rounded-md relative"
            >
              <div className="flex flex-col gap-3">
                <button
                  className="absolute top-3 right-3 hover:text-red-500 transition-colors duration-200"
                  onClick={() => setPaymentOpen(false)}
                >
                  <X size={24} weight="bold" />
                </button>
                <div className="text-center mb-5">
                  <h1 className="font-semibold p-5 text-white/90 text-[13.5px] lg:text-[18px]">Confirmation</h1>
                  <h1 className="font-semibold text-[13.5px] lg:text-[18px] text-[#E7EEF6]/70">Please confirm the transaction below :</h1>
                </div>
                <div className="flex flex-col text-center gap-5 w-full">
                  <div className="max-h-96 overflow-y-auto space-y">
                    <div className="w-full flex flex-col mb-10 items-center gap-2 relative">
                      <img src="https://static.unisat.io/content/23387c0f70232fef61002dc315b734307120e1d3c51a1af7eba7ddababe13d34i0" alt="NFT Product" className=" w-[150px] h-[180px] lg:w-[200px] lg:h-[220px] object-cover rounded-md" />
                      <p className="text-[14px] text-[#F7931A]/80 lg:hidden md-hidden absolute bottom-0 left-[68px] w-[150px] h-[30px] bg-secondary/80 p-2 rounded-b-md flex items-center">#1234567</p>
                      <p className="text-[16px] text-[#F7931A]/80 hidden lg:flex md:hidden absolute bottom-0 left-[200px] w-[200px] h-[35px] bg-secondary/80 p-2 rounded-b-md items-center">#1234567</p>
                    </div>

                    {/* Cards mobile */}
                    <div className="w-full mb-10 lg:hidden md:hidden max-w-[200px] mx-auto p-5 bg-gradient-to-b from-background to-background via-secondary/10 rounded-md">
                      <div className="flex flex-col gap-4">
                        <div
                          onClick={() => handleCardClick(1)}
                          className={`cursor-pointer p-2 rounded-md bg-secondary/50 flex flex-col items-center border-2 ${selectedCard === 1 ? 'border-[#F7931A]/80' : 'border-transparent'} transition-colors duration-200`}
                        >
                          <h1 className="text-[14px] font-semibold">Normal</h1>
                          <h2 className="text-[13px] text-[#D9D9D9]/50"><span className='text-[14px] font-semibold text-white'>6</span> sats/vB</h2>
                        </div>
                        <div
                          onClick={() => handleCardClick(2)}
                          className={`cursor-pointer p-2 rounded-md bg-secondary/50 flex flex-col items-center border-2 ${selectedCard === 2 ? 'border-[#F7931A]/80' : 'border-transparent'} transition-colors duration-200`}
                        >
                          <h1 className="text-[14px] font-semibold">Fast</h1>
                          <h2 className="text-[13px] text-[#D9D9D9]/50"><span className='text-[14px] font-semibold text-white'>6</span> sats/vB</h2>
                        </div>
                        <div
                          onClick={() => handleCardClick(3)}
                          className={`cursor-pointer p-2 rounded-md bg-secondary/50 flex flex-col items-center border-2 ${selectedCard === 3 ? 'border-[#F7931A]/80' : 'border-transparent'} transition-colors duration-200`}
                        >
                          <h1 className="text-[14px] font-semibold">Custom</h1>
                          <h2 className="text-[13px] text-[#D9D9D9]/50"><span className='text-[14px] font-semibold text-white'>7</span> sats/vB</h2>
                        </div>
                      </div>
                    </div>

                    {/* Cards desktop */}
                    <div className="w-full mb-10 hidden lg:flex lg:gap-[33.5px] max-w-[550px] mx-auto p-5 bg-gradient-to-b from-background to-background via-secondary/10 rounded-md">
                      <div
                        onClick={() => handleCardClick(1)}
                        className={`cursor-pointer py-2 px-10 rounded-md bg-secondary/50 flex flex-col items-center border-2 ${selectedCard === 1 ? 'border-[#F7931A]/80' : 'border-transparent'} transition-colors duration-200`}
                      >
                        <h1 className="text-[16px] font-semibold">Normal</h1>
                        <h2 className="text-[14px] text-gray-500"><span className='text-[16px] font-semibold text-white'>6</span> sats/vB</h2>
                      </div>
                      <div
                        onClick={() => handleCardClick(2)}
                        className={`cursor-pointer py-2 px-10 rounded-md bg-secondary/50 flex flex-col items-center border-2 ${selectedCard === 2 ? 'border-[#F7931A]/80' : 'border-transparent'} transition-colors duration-200`}
                      >
                        <h1 className="text-[16px] font-semibold">Fast</h1>
                        <h2 className="text-[14px] text-gray-500"><span className='text-[16px] font-semibold text-white'>6</span> sats/vB</h2>
                      </div>
                      <div
                        onClick={() => handleCardClick(3)}
                        className={`cursor-pointer py-2 px-10 rounded-md bg-secondary/50 flex flex-col items-center border-2 ${selectedCard === 3 ? 'border-[#F7931A]/80' : 'border-transparent'} transition-colors duration-200`}
                      >
                        <h1 className="text-[16px] font-semibold">Custom</h1>
                        <h2 className="text-[14px] text-gray-500"><span className='text-[16px] font-semibold text-white'>7</span> sats/vB</h2>
                      </div>
                    </div>

                    {/* Cards Total mobile */}
                    <div className="w-full mb-3 lg:hidden md:hidden max-w-[200px] mx-auto p-5 bg-gradient-to-b bg-accent/15 rounded-md">
                      <div className="text-[15px]">
                        <h1 className='text-start'>Total Value :</h1>
                        <h1 className='text-start'>31400 sats ≈$19.97</h1>
                        <h1 className='text-start'>Service Fee</h1>
                        <h1 className='text-start'>157 sats ≈$0.0999</h1>
                        <h1 className='text-start'>Service Final</h1>
                        <h1 className='text-start'>0 sats ≈0.00</h1>
                        <h1 className='text-start'>Transaction Fee Rate :</h1>
                        <h1 className='text-start'>6 sats/vB</h1>
                        <h1 className='text-start'>560 vB * 6 sats/vB</h1>
                        <h1 className='text-start'>3360 sats ≈$2.14</h1>
                        <h1 className='text-start'>Total:</h1>
                        <h1 className='text-start'>≈$34,760 sats ≈$22.11</h1>
                        <h1 className='text-start'>0.0003476 BTC</h1>
                      </div>
                    </div>

                    {/* Cards Total dekstop */}
                    <div className="w-full mb-5 hidden lg:flex max-w-[550px] mx-auto p-5 bg-gradient-to-b bg-accent/15 rounded-md">
                      <div className="w-full">
                      <div className="text-start mb-5 w-full flex">
                        <h1 className="text-[16px] text-white/70">Total Value :</h1>
                        <h2 className="text-[16px] font-semibold text-white/90 ml-auto">31400 <span className='text-[#D9D9D9]/50 ml-2'>sats</span> <span className='text-white/70 ml-[26px]'>≈$19.97</span></h2>
                      </div>
                      <div className="w-full mb-5">
                        <div className="border-[1px] border-[#D9D9D9]/70"></div>
                      </div>
                      <div className="text-start mb-2 w-full flex">
                        <h1 className="text-[16px] text-white/70">Service Fee</h1>
                        <h2 className="text-[16px] font-semibold text-white/90 ml-auto">157 <span className='text-[#D9D9D9]/50 ml-2'>sats</span> <span className='text-white/90 ml-[12px]'>≈$0.0999</span></h2>
                      </div>
                      <div className="text-start mb-5 w-full flex">
                        <h1 className="text-[16px] text-white/70">Service Fee Final</h1>
                        <h2 className="text-[16px] font-semibold text-white/90 ml-auto">0 <span className='text-[#D9D9D9]/50 ml-2'>sats</span> <span className='text-white/70 ml-[34px]'>≈$0.00</span></h2>
                      </div>
                      <div className="w-full mb-5">
                        <div className="border-[1px] border-[#D9D9D9]/70"></div>
                      </div>
                      <div className="text-start mb-2 w-full flex">
                        <h1 className="text-[16px] text-white/70">Transaction Fee Rate :</h1>
                        <h2 className="text-[16px] font-semibold text-[#D9D9D9]/50 ml-[194px]"><span className='text-[#F7931A]/80'>6</span> <span className='text-[16px] font-semibold text-[#D9D9D9]/50 ml-2'>sats/vB</span></h2>
                      </div>
                      <div className="text-start mb-5 w-full flex">
                        <h1 className="text-[16px] text-white/90">560 <span className='text-[#D9D9D9]/50'>vB</span> <span className='text-white/70'>*</span> <span className='text-[#F7931A]/80'>6</span> <span className='text-[#D9D9D9]/50'>sats/vB</span></h1>
                        <h2 className="text-[16px] font-semibold text-white/90 ml-auto">3360 <span className='text-[#D9D9D9]/50 ml-2'>sats</span> <span className='text-white/70 ml-[40px]'>≈$2.14</span></h2>
                      </div>
                      <div className="w-full mb-5">
                        <div className="border-[1px] border-[#D9D9D9]/70"></div>
                      </div>
                      <div className="text-start mb-2 w-full flex">
                        <h1 className="text-[16px] text-white/90">Total :</h1>
                        <h2 className="text-[16px] font-semibold text-white/80 ml-auto"><span className='text-[#F7931A]/80'>≈$34,760</span> <span className='text-[#D9D9D9]/50 ml-2'>sats</span> <span className='text-white/70 ml-[34px]'>≈$22.11</span></h2>
                      </div>
                      <div className="text-start w-full flex">
                        <h2 className="text-[16px] font-semibold text-[#D9D9D9]/50 ml-[283px]">0.0003476 <span className='ml-2'>BTC</span></h2>
                      </div>
                      </div>
                    </div>

                    {/* Cards saldo mobile */}
                    <div className="w-full mb-7 lg:hidden md:hidden max-w-[200px] mx-auto p-5 bg-gradient-to-b bg-accent/15 rounded-md">
                      <div className="text-[15px]">
                        <h1 className='text-start'>Available Balance :</h1>
                        <h1 className='text-start'>0 BTC</h1>
                      </div>
                    </div>
                    
                    {/* Cards saldo dekstop */}
                    <div className="w-full mb-7 hidden lg:flex max-w-[550px] mx-auto p-5 bg-gradient-to-b bg-accent/15 rounded-md">
                      <div className="w-full">
                        <div className="text-start w-full flex">
                          <h1 className="text-[16px] text-white/90">Available Balance:</h1>
                          <h2 className="text-[16px] font-semibold text-[#D9D9D9]/50 ml-[230px]">0 <span className='ml-2'>BTC</span></h2>
                        </div>
                      </div>
                    </div>

                  {/* Button Dekstop */}
                  <div className="w-full hidden md:hidden text-[16px] lg:flex gap-10 items-center justify-center">
                    <button className='px-10 py-2 rounded-md bg-accent/15 font-semibold text-white/90 hover:bg-accent/80'>
                    Cancel
                    </button>
                    <button className='px-10 py-2 rounded-md bg-accent/15 font-semibold text-white/90 hover:bg-accent/80'>
                    Confirm
                    </button>
                  </div>
                  
                  {/* Button Mobile */}
                  <div className="w-full flex md:hidden lg:hidden text-[14px] gap-3 items-center justify-center">
                    <button className='px-5 py-2 rounded-md bg-accent/15 font-semibold text-white/90 hover:bg-accent/80'>
                    Cancel
                    </button>
                    <button className='px-5 py-2 rounded-md bg-accent/15 font-semibold text-white/90 hover:bg-accent/80'>
                    Confirm
                    </button>
                  </div>



                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConfirmPayment;