import React, { useEffect, useState } from 'react';
import CollectionCard from '../cards/collectionCards';
import axios from 'axios'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

const Collections = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const itemsPerPage = 20
  const [totalPages, setTotalPages] = useState(0)
  const [maxVisiblePages, setMaxVisiblePages] = useState(20) 

  const getDataCollections = async () => {
    try {
      const data = await axios.post('https://open-api.unisat.io/v3/market/collection/auction/collection_statistic_list', {
        "filter": {
          "timeType": "24h"
        },
        "start": 0,
        "limit": -1
      }, { headers: { Authorization: `Bearer ${process.env.UNISAT_API_KEY}` } })
      setData(data.data.data.list)
      setTotalPages(Math.ceil(data.data.data.total / itemsPerPage))
    } catch (error) {
      console.log(error)
    }
  }

  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  useEffect(() => {
    getDataCollections()
  }, [])

  const getPaginatedData = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }

  const renderPageNumbers = () => {
    const halfMaxVisible = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, page - halfMaxVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`flex items-center justify-center w-6 h-6 rounded-full text-xs ${page === i ? 'border-t border-secondary text-accent rounded-none' : 'hover:bg-secondary/30'}`}
          onClick={() => handlePageChange(i)}
          disabled={page === i}
        >
          {i}
        </button>
      );
    }
    return pages;
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setMaxVisiblePages(5); // Set maxVisiblePages to 10 for mobile
      } else if (window.innerWidth < 800) {
        setMaxVisiblePages(10); // Set maxVisiblePages to 20 for desktop
      } else {
        setMaxVisiblePages(20); // Set maxVisiblePages to 20 for desktop
      }
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div className="w-full flex flex-col gap-16 py-16" id='explore'>
      <h1 className='text-center text-5xl font-semibold'>Top Collection over <span className='bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-black'>Last 24 Hours</span></h1>
      <div className='flex flex-col gap-5'>
        <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-5'>
          {data.length === 0 ? (
            ''
          ) : (
            getPaginatedData().map((item, index) => (
              <CollectionCard icon={item.icon} name={item.name} btcValue={item.btcValue} desc={item.desc} discord={item.discord} floorPrice={item.floorPrice} listed={item.listed} total={item.total} twitter={item.twitter} key={index} supply={item.supply} />
            ))
          )}
        </div>

        <div className='flex items-center justify-between w-full border-t border-text/10 pt-3'>
          <button
            className='flex items-center gap-2 text-xs p-2 hover:bg-secondary/30 rounded-md'
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <ArrowLeft />
            Previous
          </button>
          <div className='flex items-center gap-2 max-w-full text-xs'>
            {renderPageNumbers()}
            ...
          </div>
          <button
            className='flex items-center gap-2 text-xs p-2 hover:bg-secondary/30 rounded-md'
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next
            <ArrowRight />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Collections;