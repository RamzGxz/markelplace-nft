import { User, Wallet } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center py-5 sticky top-0 left-0  backdrop-blur-sm'>
      <div className='flex items-center gap-2'>
        <img src="/logo.png" alt="" width={35} height={35} />
        <h1 className='text-2xl font-semibold'>NFT</h1>
      </div>
      <div className='inline-flex gap-5'>
        <Link href="#" className='font-medium hover:text-primary transition-all duration-300'>Home</Link>
        <Link href="#" className='font-medium hover:text-primary transition-all duration-300'>About</Link>
        <Link href="#" className='font-medium hover:text-primary transition-all duration-300'>Explore</Link>
        <Link href="#" className='font-medium hover:text-primary transition-all duration-300'>Resource</Link>
        <Link href="#" className='font-medium hover:text-primary transition-all duration-300'>Contact</Link>
      </div>
      <div className='flex items-start gap-5'>
        <button className='hover:opacity-80'> <Wallet size={24}/> </button>
        <button className='hover:opacity-80'> <User size={24}/> </button>
      </div>
    </div>
  );
};

export default Navbar;