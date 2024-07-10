import React from 'react';
import CollectionCard from '../cards/collectionCards';

const Collections = () => {
  return (
    <div className="w-full flex flex-col gap-16 py-16">
      <h1 className='text-center text-5xl font-semibold'>Top Collection over <span className='text-accent font-black'>Last 24 Hours</span></h1>
      <div className='w-full grid grid-cols-4 gap-10'>
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