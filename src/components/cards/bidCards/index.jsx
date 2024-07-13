import { Heart } from '@phosphor-icons/react';
import React, { useState } from 'react';
import CountUp from 'react-countup';

const BidsCard = ({ tick, amount, unitPrice, inscriptionNumber, price }) => {
  const [loveClick, setLoveClick] = useState(false)
  const numberFormat = (val) => {
    const numb = new Intl.NumberFormat('en-EN', {
      currency: 'USD',
      currencyDisplay: 'narrowSymbol',
      
    }).format(val)
    return numb
  }

  return (
    <div className='w-full border border-secondary/40 p-1 rounded-md bg-primary/5 flex flex-col gap-5 group cursor-pointer relative'>
      <div className='w-full lg:h-44 h-36 bg-gradient-to-r from-background via-secondary/15 rounded-md to-background  transform transition-transform duration-300 -z-0 flex justify-center items-center flex-col gap-3'>
        <h1 className='text-4xl font-bold'>{numberFormat(amount)}</h1>
        <div className='flex flex-col gap-1'>
          <p className='text-xs'><span className='text-lg font-bold text-accent'>{unitPrice}</span>sats/{tick}</p>
          <p className='italic text-xs text-center'>$0.0287</p>
        </div>
      </div>
      <div className='absolute top-1 left-1 p-1 px-2 text-xs bg-secondary rounded-md'>{tick}</div>
      <div className='flex gap-2 px-4 flex-col'>
        <div className='flex justify-between w-full lg:flex-row flex-col gap-3'>
          <p className='transition-colors duration-300 group-hover:text-accent lg:text-sm'>#{inscriptionNumber}</p>
          <p className='p-1 px-2 border border-accent rounded-md text-xs ext-accent text-accent bg-transparent font-medium top-2 right-2'>{numberFormat(0.000 + price)} BTC</p>
        </div>
        <p className='text-sm italic text-start lg:block flex flex-col'>  <span className='text-accent'>{numberFormat((0.000 + price) * 57.626, 40)}</span></p>
      </div>
      <div className='flex justify-between items-center px-4 pb-4'>
        <button className='px-2 p-1 text-xs border border-accent text-accent rounded-md font-semibold  transition-all duration-150 group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-accent group-hover:text-text'>Buy now</button>
        <div className='flex items-center gap-1'>
          <button onClick={() => setLoveClick(!loveClick)} className='transition-transform duration-300 group-hover:scale-125'>
            <Heart size={18} color={loveClick ? '#ef4444' : '#e7eef6'} weight={loveClick ? 'fill' : 'regular'} />
          </button>
          <p className='italic text-xs'>1</p>
        </div>
      </div>
    </div>
  );
};

export default BidsCard;
