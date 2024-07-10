import { X } from '@phosphor-icons/react';
import { List, User, Wallet } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false)


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

  return (
    <>
      <div className='w-full flex justify-between items-center py-5 sticky top-0 left-0  backdrop-blur-sm'>
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
          <button className='hover:opacity-80'> <Wallet size={24} /> </button>
          <button className='hover:opacity-80'> <User size={24} /> </button>
          {nav ? (
            <button className='hover:opacity-80 lg:hidden' onClick={() => setNav(!nav)}> <X size={24} /> </button>
          ) : (
            <button className='hover:opacity-80 lg:hidden' onClick={() => setNav(!nav)}> <List size={24} /> </button>
          )}
        </div>
      </div>

      <div className={`w-full ${nav ? 'h-[85vh] opacity-100' : 'h-0 opacity-0'}  absolute backdrop-blur-lg bg-background p-6 top-14 left-0 transition-all duration-300`}>
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