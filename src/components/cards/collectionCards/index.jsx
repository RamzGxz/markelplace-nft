import React from 'react';

const CollectionCard = ({image, title, sales}) => {
  return (
    <div className='w-full p-5 bg-secondary/15 rounded-md flex gap-3 items-center cursor-pointer hover:bg-secondary/30 transition-all duration-300'>
      <div className='lg:w-12 w-28 h-full bg-gradient-to-r from-secondary to-accent rounded-lg'></div>
      <div className='flex flex-col gap-1 items-start justify-between'>
        <p className='font-medium'>{title}</p>
        <p className='text-xs font-light text-text/90'>{sales} ETH</p>
      </div>
    </div>
  );
};

export default CollectionCard;