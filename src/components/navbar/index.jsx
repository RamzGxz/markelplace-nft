import { ArrowDown, CaretDown, CaretRight, CassetteTape, X } from '@phosphor-icons/react';
import { CurrencyBtc, List, SignOut, User, Wallet } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import ModalSelectWallet from '../modal/modalWallet';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [connected, setConnected] = useState(false)
  const [accounts, setAccounts] = useState([])
  const [dropdownView, setDropdownView] = useState(false)
  const dropRef = useRef(null)


  useEffect(() => {
    if (nav) {
      window.addEventListener('wheel', (e) => {
        e.preventDefault();
      })
      return () => {
        window.removeEventListener('wheel', (e) => {
          e.preventDefault();
        })
      }
    }
  }, [nav])

  const handlerDropdown = () => {
    setDropdownView(!dropdownView)
  }

  useEffect(() => {
    if (dropdownView) {
      if (dropRef.current) {
        dropRef.current.classList.remove('hidden');
        setTimeout(() => {
          dropRef.current.classList.add('opacity-100', 'top-9');
          dropRef.current.classList.remove('opacity-0', 'top-0');
        }, 0);
      }
    } else {
      if (dropRef.current) {
        dropRef.current.classList.remove('opacity-100', 'top-9');
        dropRef.current.classList.add('opacity-0', 'top-0');
        setTimeout(() => {
          dropRef.current.classList.add('hidden');
        }, 301);
      }
    }
  }, [dropdownView, connected])

  return (
    <>
      <div className='w-full flex justify-between items-center py-5 sticky top-0 left-0  backdrop-blur-sm z-40'>
        <div className='flex items-center gap-2'>
          <img src="/logo.png" alt="" width={35} height={35} />
          <h1 className='text-2xl font-semibold'>NFT</h1>
        </div>
        <div className='lg:inline-flex hidden gap-5'>
          <Link href="/" className='font-medium hover:text-primary transition-all duration-300'>Home</Link>
          <Link href="#bids" className='font-medium hover:text-primary transition-all duration-300'>Hot Bids</Link>
          <Link href="#explore" className='font-medium hover:text-primary transition-all duration-300'>Explore</Link>
          <Link href="#trending" className='font-medium hover:text-primary transition-all duration-300'>Trending</Link>
          <Link href="#tutorials" className='font-medium hover:text-primary transition-all duration-300'>Tutorials</Link>
        </div>
        <div className='flex items-start gap-5'>
          {!connected ? (
            <ModalSelectWallet setConnected={setConnected} setAccounts={setAccounts} />
          ) : (
            <>
              <button onClick={handlerDropdown} className='p-2 px-3 text-xs flex items-center gap-1 border text-accent border-accent/30  font-semibold rounded-full relative'>
                {accounts[0].slice(0, 5) + '...' + accounts[0].slice(-5)}
                <CaretDown size={14} weight='bold' />
                <div className={`absolute bg-gradient-to-b from-background via-accent/30 to-background p-2 text-text font-normal text-xs w-48 right-0  z-50 rounded-md flex flex-col gap-1 transition-all duration-300`} ref={dropRef}>
                  <button className='w-full p-2 flex items-center justify-between rounded-md gap-2 hover:bg-secondary/50'>
                    <div className='flex items-center gap-2'>
                      <CassetteTape size={18} weight='bold' />
                      My assets
                    </div>
                    <CaretRight size={14} weight='bold' />
                  </button>
                  <button className='w-full p-2 flex items-center justify-between rounded-md gap-2 hover:bg-secondary/50'>
                    <div className='flex items-center gap-2'>
                      <User size={18} weight='bold' />
                      My accounts
                    </div>
                    <CaretRight size={14} weight='bold' />
                  </button>
                  <hr className='border-t border-text/10 mt-3' />
                  <button className='w-full p-2 flex items-center justify-between hover:rounded-md gap-2 hover:bg-secondary/50'>
                    <div className='flex items-center gap-2'>
                      <SignOut size={18} weight='bold' />
                      Disconnect wallet
                    </div>
                  </button>
                </div>
              </button>
            </>
          )}

          {nav ? (
            <button className='hover:opacity-80 lg:hidden' onClick={() => setNav(!nav)}> <X size={24} /> </button>
          ) : (
            <button className='hover:opacity-80 lg:hidden' onClick={() => setNav(!nav)}> <List size={24} /> </button>
          )}
        </div>
      </div>

      <div className={`w-full ${nav ? 'h-screen opacity-100' : 'h-0 opacity-0'}  absolute backdrop-blur-lg bg-background p-6 top-14 left-0 transition-all duration-300`}>
        <div className={`inline-flex flex-col lg:hidden gap-5 ${nav ? 'opacity-100' : 'opacity-0'}`} onClick={() => setNav(!nav)}>
          <Link href="/" className='font-medium hover:text-primary transition-all duration-300'>Home</Link>
          <Link href="#bids" className='font-medium hover:text-primary transition-all duration-300'>Hot Bids</Link>
          <Link href="#explore" className='font-medium hover:text-primary transition-all duration-300'>Explore</Link>
          <Link href="#trending" className='font-medium hover:text-primary transition-all duration-300'>Trending</Link>
          <Link href="#tutorials" className='font-medium hover:text-primary transition-all duration-300'>Tutorials</Link>
        </div>
      </div>


    </>
  );
};

export default Navbar;