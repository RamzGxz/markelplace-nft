import { FacebookLogo, InstagramLogo, TwitchLogo, TwitterLogo } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='w-full py-16 flex lg:flex-nowrap flex-wrap justify-between lg:gap-0 gap-10 items-start'>
        <div className='flex flex-col items-start justify-normal gap-3'>
          <div className='flex items-center gap-2'>
            <img src="/logo.png" alt="" width={35} height={35} />
            <h1 className='text-2xl font-semibold'>NFT</h1>
          </div>
          <p className='text-text/50'>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Sequi, voluptates.</p>
          <div className='w-full flex items-center gap-5'>
            <FacebookLogo size={24} weight='regular' />
            <TwitchLogo size={24} weight='regular' />
            <InstagramLogo size={24} weight='regular' />
            <TwitterLogo size={24} weight='regular' />
          </div>
        </div>

        <div className='flex flex-col items-start justify-normal gap-3'>
          <h1 className='text-xl font-medium'>MarketPlace</h1>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>All NFTs</Link>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>Art</Link>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>Music</Link>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>Collectibles</Link>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>Wallet</Link>
        </div>
        <div className=' flex flex-col items-start justify-normal gap-3'>
          <h1 className='text-xl font-medium'>Company</h1>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>Explore</Link>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>About</Link>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>Contact Us</Link>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>Our Blog</Link>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>FAQ</Link>
        </div>
        <div className=' flex flex-col items-start justify-normal gap-3'>
          <h1 className='text-xl font-medium'>Account</h1>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>Authors</Link>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>Collections</Link>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>Author Profile</Link>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>Create Team</Link>
          <Link href={'#'} className='text-sm text-text/60 hover:text-text/80'>NFT Profile</Link>
        </div>
      </div>
      <div className='pb-5 text-center w-full border-t pt-5 border-text/20'>
        Copyright © 2024 by Ramzi Daffa
      </div>
    </>
  );
};

export default Footer;