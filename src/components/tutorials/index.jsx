import React from 'react';

const Tutorials = () => {
  return (
    <div className="w-full flex flex-col gap-28 py-16" id='tutorials'>
      <h1 className='text-center text-5xl font-semibold leading-snug'>
      Create and sell your <span className='bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-black'>NFTs</span>
      </h1>
      <div className='w-full grid lg:grid-cols-4 grid-cols-2 gap-10'>
        <div className='w-full flex flex-col gap-1 items-center'>
          <div className='w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-md mb-3'></div>
          <h1 className='font-semibold lg:text-xl text-sm text-center'>1. Setup your wallet</h1>
          <p className='text-text/50 text-center lg:text-sm text-xs'>To get started, set up your digital wallet where you can store and manage your cryptocurrencies securely.</p>
        </div>
        <div className='w-full flex flex-col gap-1 items-center'>
          <div className='w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-md mb-3'></div>
          <h1 className='font-semibold lg:text-xl text-sm text-center'>2. Create your collection</h1>
          <p className='text-text/50 text-center lg:text-sm text-xs'>Create a unique collection to showcase your NFTs. This will help organize your assets and make them easier to find for potential buyers.</p>
        </div>
        <div className='w-full flex flex-col gap-1 items-center'>
          <div className='w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-md mb-3'></div>
          <h1 className='font-semibold lg:text-xl text-sm text-center'>3. Add your NFTs</h1>
          <p className='text-text/50 text-center lg:text-sm text-xs'>Upload your digital assets as NFTs. Provide detailed descriptions and metadata to make your NFTs stand out.</p>
        </div>
        <div className='w-full flex flex-col gap-1 items-center'>
          <div className='w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-md mb-3'></div>
          <h1 className='font-semibold lg:text-xl text-sm text-center'>4. List Them For Sale</h1>
          <p className='text-text/50 text-center lg:text-sm text-xs'>List your NFTs for sale on the marketplace. Set your prices and choose whether to auction your items or sell them at a fixed price.</p>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;