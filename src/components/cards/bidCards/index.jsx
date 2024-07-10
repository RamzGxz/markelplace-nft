import { Heart } from '@phosphor-icons/react';
import React, { useState } from 'react';

const BidsCard = ({ image, title, desc, price, bidPrice, likes }) => {
  const [loveClick, setLoveClick] = useState(false)

  return (
    <div className='w-full p-5 rounded-md bg-primary/5 flex flex-col gap-5 group cursor-pointer relative'>
      <div className='w-full lg:h-44 h-40 bg-gradient-to-r from-secondary to-accent rounded-md transform transition-transform duration-300 group-hover:scale-105 -z-0'></div>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between w-full'>
          <p className='transition-colors duration-300 group-hover:text-accent lg:text-sm'>{title}</p>
          <p className='lg:block hidden p-1 px-2 border border-accent rounded-md text-xs lg:text-accent text-text lg:bg-transparent bg-accent font-medium top-2 right-2'>{price} ETH </p>

          <p className='lg:hidden absolute p-1 px-2 border border-accent rounded-md text-xs lg:text-accent text-text lg:bg-transparent bg-accent font-medium top-2 right-2'>{price} ETH </p>
        </div>
        <p className='text-sm italic text-start lg:block flex flex-col'>{desc} <span className='text-accent'>{bidPrice + ' '} ETH</span></p>
      </div>
      <div className='flex justify-between items-center'>
        <button className='px-2 p-1 text-xs border border-accent text-accent rounded-md font-semibold  transition-all duration-150 group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-accent group-hover:text-text'>Place Bids</button>
        <div className='flex items-center gap-1'>
          <button onClick={() => setLoveClick(!loveClick)} className='transition-transform duration-300 group-hover:scale-125'>
            <Heart size={18} color={loveClick ? '#ef4444' : '#e7eef6'} weight={loveClick ? 'fill' : 'regular'} />
          </button>
          <p className='italic text-xs'>{likes}</p>
        </div>
      </div>
    </div>
  );
};

export default BidsCard;
