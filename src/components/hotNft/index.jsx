import { Heart } from '@phosphor-icons/react/dist/ssr';
import React, { useEffect, useState } from 'react';
import BidsCard from '../cards/bidCards';
import axios from 'axios';

const HotNft = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const data = await axios.post('https://open-api.unisat.io/v3/market/brc20/auction/list', {
        "filter": {
          "nftType": "brc20",
          "nftConfirm": true,
          "isEnd": false,
          "tick": "DBIX"
        },
        "sort": {
          "unitPrice": 1
        },
        "start": 0,
        "limit": 50,
        "flash": false
      }, {
        headers: {
          Authorization: `Bearer ${process.env.UNISAT_API_KEY}`
        }
      })
      setData(data.data.data.list)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    console.log(data)
  }, [])

  return (
    <div className="w-full flex flex-col gap-16 py-16" id='bids'>
      <h1 className='text-center text-5xl font-semibold'>Hot Bids</h1>
      <div className='w-full grid lg:grid-cols-4 grid-cols-2 gap-5'>
        {data ? (
          data.map((item, index) => {
            return (
              <BidsCard amount={item.amount} inscriptionNumber={item.inscriptionNumber} price={item.price} tick={item.tick} unitPrice={item.unitPrice} key={index}/>
            )
          })
        ) : (
          ''
        )}

      </div>
    </div>
  );
};

export default HotNft;