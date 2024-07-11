import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Spinner, Wallet, X } from '@phosphor-icons/react';
import { SpinnerBall } from '@phosphor-icons/react/dist/ssr';
import toast from 'react-hot-toast';

const ModalSelectWallet = ({ setConnected, setAccounts, }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [load, setLoad] = useState(false)

  const handleConnect = async () => {
    
    if (typeof window.unisat === 'undefined') {
      toast.error('Undetected extension. please add extension first and refresh the page!', { duration: 3000 })
      setTimeout(() => {
        window.open('https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo?hl=en-US&utm_source=ext_sidebar')
        setLoad(false)
      }, 3000)
    } else {
      try {
        setLoad(true)
        const accounts = await window.unisat.requestAccounts()
        toast.success(`Unisat wallet has been connected!`, { duration: 2000 })
        setConnected(true)
        setAccounts(accounts)
        setLoad(false)
        setModalOpen(false)
      } catch (error) {
        setLoad(false)
        if(error.code === 4001) {
          toast.error('Request canceled!', {duration: 2000})
        }
      }
    }

  }

  return (
    <>
      <button className='hover:opacity-80' onClick={() => setModalOpen(true)}>
        <Wallet size={24} weight='regular' />
      </button>
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center h-screen bg-background bg-opacity-70 z-50 lg:px-0 px-5">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className={`w-full max-w-sm mx-auto p-5 bg-gradient-to-b from-background to-background via-secondary/10 rounded-md relative `}
            >
              {load ? (
                <div className='flex flex-col gap-3'>
                  <div className='w-full rounded-md  flex-col flex items-center gap-2  transition-colors duration-200'>
                    <img src="https://next-cdn.unisat.io/_/271/logo/color.svg" alt="" width={30} height={30} />
                    Unisat wallet
                  </div>
                  <div className='flex items-center w-full gap-2 justify-center'>
                    <Spinner size={24} weight='bold' className='animate-spin-slow' />
                    <p className='font-mono'>Connecting...</p>
                  </div>
                  <button className='text-text/50 hover:text-text'>Cancel</button>
                </div>
              ) : (
                <>
                  <button className='absolute top-3 right-3 hover:text-red-500 transition-colors duration-200' onClick={() => setModalOpen(false)}>
                    <X size={24} weight='bold' />
                  </button>
                  <div className='flex flex-col gap-5 w-full'>
                    <h1 className='font-semibold'>Select a wallet</h1>
                    <button className='w-full rounded-md border border-text/15 p-3 flex items-center gap-2 hover:border-primary/15 hover:bg-primary/10 transition-colors duration-200' onClick={handleConnect}>
                      <img src="https://next-cdn.unisat.io/_/271/logo/color.svg" alt="" width={30} height={30} />
                      Unisat wallet
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalSelectWallet;