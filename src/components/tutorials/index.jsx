import React from 'react';

const Tutorials = () => {
  return (
    <div className="w-full flex flex-col gap-28 py-16" id='tutorials'>
      <h1 className='text-center text-5xl font-semibold'>
      Create and sell your <span className='bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-black'>NFTs</span>
      </h1>
      <div className='w-full grid lg:grid-cols-4 grid-cols-2 gap-10'>
        <div className='w-full flex flex-col lg:gap-4 gap-3 items-center'>
          <div className='w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-md'></div>
          <h1 className='font-semibold lg:text-xl text-lg text-center'>1. Setup your wallet</h1>
          <p className='text-text/50 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ducimus!</p>
        </div>
        <div className='w-full flex flex-col lg:gap-4 gap-3 items-center'>
          <div className='w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-md'></div>
          <h1 className='font-semibold lg:text-xl text-lg text-center'>2. Create your collection</h1>
          <p className='text-text/50 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ducimus!</p>
        </div>
        <div className='w-full flex flex-col lg:gap-4 gap-3 items-center'>
          <div className='w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-md'></div>
          <h1 className='font-semibold lg:text-xl text-lg text-center'>3. Add your NFTs</h1>
          <p className='text-text/50 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ducimus!</p>
        </div>
        <div className='w-full flex flex-col lg:gap-4 gap-3 items-center'>
          <div className='w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-md'></div>
          <h1 className='font-semibold lg:text-xl text-lg text-center'>4. List Them For Sale</h1>
          <p className='text-text/50 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ducimus!</p>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;