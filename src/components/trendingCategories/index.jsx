import React, { useEffect, useState } from 'react';
import BidsCard from '../cards/bidCards';

const TrendingCategories = () => {
  // Autoplay interval in milliseconds
  const cards = [
    { bidPrice: 0.25, desc: 'Current Bids', title: 'Monkey Banana', price: 1.65, likes: 120 },
    { bidPrice: 0.25, desc: 'Current Bids', title: 'Elephant Apple', price: 2.15, likes: 95 },
    { bidPrice: 0.25, desc: 'Current Bids', title: 'Giraffe Pear', price: 1.75, likes: 110 },
    { bidPrice: 0.25, desc: 'Current Bids', title: 'Lion Mango', price: 3.05, likes: 150 },
  ]


  return (
    <div className="w-full flex flex-col gap-16 py-16" id='trending'>
      <h1 className='text-center text-5xl font-semibold'>
        Trending <span className='bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-black'>NFTs</span>
      </h1>

      <div className='w-full grid lg:grid-cols-4 grid-cols-2 gap-5'>
        {cards.map((card, index) => (
          <BidsCard
            key={index}
            bidPrice={card.bidPrice}
            desc={card.desc}
            title={card.title}
            price={card.price}
            likes={card.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingCategories;