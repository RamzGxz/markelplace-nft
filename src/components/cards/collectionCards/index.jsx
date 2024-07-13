import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import { XLogo, DiscordLogo } from '@phosphor-icons/react/dist/ssr'


const CollectionCard = ({ icon, name, btcValue, desc, floorPrice, listed, total, twitter, discord, supply }) => {

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const numberFormat = (val) => {
    const numb = new Intl.NumberFormat('en-EN', {
      currency: 'USD',
      currencyDisplay: 'narrowSymbol',

    }).format(val)
    return numb
  }

  const validateAndReplaceURL = (url) => {
    const baseUrlToCheck = 'https://next-cdn.unisat.io/collection';
    const newBaseUrl = 'https://static.unisat.io/content/';

    if (url) {
      if (url.includes(baseUrlToCheck)) {
        return url;
      } else {
        return newBaseUrl + url;
      }
    }
  }


  return (
    <div
      className='relative w-full p-4 bg-secondary/15 rounded-md flex gap-3 items-center cursor-pointer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className='w-12 h-12 rounded-lg'
        style={{
          background: `url('${validateAndReplaceURL(icon)}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className='flex flex-col gap-1 items-start justify-between'>
        <p className='font-medium lg:text-sm text-xs'>{name}</p>
        <p className='text-xs font-light text-text/90'>
          0.0{numberFormat(btcValue).replace(',000', '')} BTC
        </p>
      </div>

      {isHovering && (
        <div className={`absolute bg-secondary w-full p-2 rounded-md shadow-md text-xs top-5 -right-[20%]`} style={{ zIndex: 9999 }}>
          <div className='w-full flex flex-col gap-2'>
            <p className='text-sm font-bold'>
              {name}{' '}
            </p>
            {discord && twitter ? (
              <span className='flex gap-1'>
                <button onClick={() => window.open(discord)}>
                  <DiscordLogo size={14} weight='bold' />
                </button>
                <button onClick={() => window.open(twitter)}>
                  <XLogo size={14} weight='bold' />
                </button>
              </span>
            ) : discord ? (
              <button onClick={() => window.open(discord)}>
                <DiscordLogo size={14} weight='bold' />
              </button>
            ) : twitter ? (
              <button onClick={() => window.open(twitter)}>
                <XLogo size={14} weight='bold' />
              </button>
            ) : (
              null
            )}
            <p className='italic text-text/90'>{desc ? (desc.length > 100 ? `${desc.slice(0, 100)}...` : desc) : 'no desc...'}</p>
            <div className='flex flex-wrap gap-2'>
              <p>0.0{numberFormat(floorPrice).replace(',000', '').replace(',', '.')} BTC <span className='font-semibold'>Floor price</span></p>
              <p>{numberFormat(total)} <span className='font-semibold'>Items</span></p>
              <p>{numberFormat(listed)} <span className='font-semibold'>Listed</span></p>
              <p>{supply ? supply : 0} <span className='font-semibold'>Supply</span></p>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default CollectionCard;