import React from 'react';
import CollectionCard from '../cards/collectionCards';

const Collections = () => {
  return (
    <div className="w-full flex flex-col gap-16 py-16" id='explore'>
      <h1 className='text-center text-5xl font-semibold'>Top Collection over <span className='bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-black'>Last 24 Hours</span></h1>
      <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-10 gap-5'>
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
        <CollectionCard image={''} sales={1200.54} title={'robertMonkeys'} />
      </div>
    </div>
  );
};

export default Collections;