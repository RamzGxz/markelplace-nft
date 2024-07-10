import { Heart } from '@phosphor-icons/react/dist/ssr';
import React from 'react';
import BidsCard from '../cards/bidCards';

const HotNft = () => {
  return (
    <div className="w-full flex flex-col gap-16 py-16">
      <h1 className='text-center text-5xl font-semibold'>Hot Bids</h1>
      <div className='w-full grid grid-cols-4 gap-5'>
        <BidsCard bidPrice={0.25} desc={'Current Bids '} title={'Monkey Banana'} price={1.65} likes={120} />
        <BidsCard bidPrice={0.40} desc={'Current Bids '} title={'Monkey flying'} price={1.8} likes={123} />
        <BidsCard bidPrice={0.49} desc={'Current Bids '} title={'Robots Flex'} price={1.8} likes={123} />
        <BidsCard bidPrice={0.49} desc={'Current Bids '} title={'Robots Flex'} price={1.8} likes={123} />
        <BidsCard bidPrice={0.49} desc={'Current Bids '} title={'Robots Flex'} price={1.8} likes={123} />
        <BidsCard bidPrice={0.49} desc={'Current Bids '} title={'Robots Flex'} price={1.8} likes={123} />
        <BidsCard bidPrice={0.49} desc={'Current Bids '} title={'Robots Flex'} price={1.8} likes={123} />
        <BidsCard bidPrice={0.49} desc={'Current Bids '} title={'Robots Flex'} price={1.8} likes={123} />
      </div>
    </div>
  );
};

export default HotNft;