import React from 'react';

const Hero = () => {
  return (
    <div className='w-full justify-between flex items-center pt-28'>
      <div className='flex w-1/2 flex-col gap-5 items-start justify-start'>
        <h1 className='text-7xl font-black leading-snug'>Buy, Sell and collect <span className='text-accent'>NFTs.</span></h1>
        <p className='text-lg italic'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam mollitia dignissimos consequuntur nesciunt, itaque enim? Lorem ipsum dolor sit amet.</p>
        <div className='flex items-center gap-5'>
          <button className='px-10 py-3 rounded-md bg-accent font-semibold hover:bg-accent/80'>Upload</button>
          <button className='px-10 py-3 rounded-md bg-secondary font-semibold hover:bg-secondary/80'>Explore</button>
        </div>
      </div>

      <div className='flex w-1/2 flex-col gap-3 items-center justify-center'>
        <img src="/hero2.webp" alt="" />
      </div>

    </div>
  );
};

export default Hero;