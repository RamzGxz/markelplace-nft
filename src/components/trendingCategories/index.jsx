import React, { useEffect, useState } from 'react';
import BidsCard from '../cards/bidCards';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import axios from 'axios'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

const TrendingCategories = () => {

  const [tickOrdi, setTickOrdi] = useState([])
  const [tickMeme, setTickMeme] = useState([])

  const fetchDataOrdi = async () => {
    try {
      const data = await axios.post('https://open-api.unisat.io/v3/market/brc20/auction/list', {
        "filter": {
          "nftType": "brc20",
          "nftConfirm": true,
          "isEnd": false,
          "tick": "ordi"
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
      setTickOrdi(data.data.data.list)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchDataMeme = async () => {
    try {
      const data = await axios.post('https://open-api.unisat.io/v3/market/brc20/auction/list', {
        "filter": {
          "nftType": "brc20",
          "nftConfirm": true,
          "isEnd": false,
          "tick": "meme"
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
      setTickMeme(data.data.data.list)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchDataOrdi()
    fetchDataMeme()
  }, [])

  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }


  return (
    <div className="w-full flex flex-col gap-16 py-16" id='trending'>
      <h1 className='text-center text-5xl font-semibold'>
        Trending <span className='bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-black'>NFTs</span>
      </h1>

      <div className='flex flex-col w-full lg:gap-7 md:gap-5 gap-3'>
        <Link href={'/'} className='text-right flex text-sm text-accent hover:text-accent/90 w-full justify-end font-semibold items-center gap-2'> See all <ArrowRight weight='bold' /> </Link>
        <div className='w-full selection:bg-none'>
          <Swiper
            breakpoints={breakpoints}
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
              bulletClass: 'bg-text'
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {tickOrdi ? (
              tickOrdi.map((item, index) => (
                <SwiperSlide>
                  <BidsCard
                    key={index}
                    amount={item.amount}
                    inscriptionNumber={item.inscriptionNumber}
                    price={item.price}
                    tick={item.tick}
                    unitPrice={item.unitPrice}
                  />
                </SwiperSlide>
              ))
            ) : ''}
          </Swiper>
        </div>
        <div className='w-full selection:bg-none'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={breakpoints}
            pagination={{
              clickable: true,
              bulletClass: 'bg-text'
            }}
            autoplay={{
              delay: 2100,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {tickMeme ? (
              tickMeme.map((item, index) => (
                <SwiperSlide>
                  <BidsCard
                    key={index}
                    amount={item.amount}
                    inscriptionNumber={item.inscriptionNumber}
                    price={item.price}
                    tick={item.tick}
                    unitPrice={item.unitPrice}
                  />
                </SwiperSlide>
              ))
            ) : ''}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;
