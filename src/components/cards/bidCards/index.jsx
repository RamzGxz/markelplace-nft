import { Heart } from '@phosphor-icons/react';
import React from 'react';

const BidsCard = ({ image, title, desc, price, bidPrice, likes }) => {
  return (
    <div className='w-full p-5 rounded-md bg-primary/5 flex flex-col gap-5 group cursor-pointer'>
      <div className='w-full h-44 bg-gradient-to-r from-secondary to-accent rounded-md transform transition-transform duration-300 group-hover:scale-105 -z-0'></div>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between w-full'>
          <p className='transition-colors duration-300 group-hover:text-accent'>{title}</p>
          <p className='p-1 px-2 border border-accent rounded-md text-xs text-accent font-medium'>{price} ETH</p>
        </div>
        <p className='text-sm italic text-start'>{desc} <span className='text-accent'>{bidPrice + ' '} ETH</span></p>
      </div>
      <div className='flex justify-between items-center'>
        <button className='px-2 p-1 text-xs border border-accent text-accent rounded-md font-semibold hover:bg-accent hover:text-text transition-all duration-150 group-hover:bg-accent group-hover:text-text'>Place Bids</button>
        <div className='flex items-center gap-1'>
          <button className='transition-transform duration-300 group-hover:scale-125'><Heart size={18} /></button>
          <p className='italic text-xs'>{likes}</p>
        </div>
      </div>
    </div>
  );
};

export default BidsCard;
