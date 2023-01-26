import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

import './styles.css'

export default function App() {
  return (
    <>
      <Swiper className='mySwiper'>
        <SwiperSlide>
          <img src='../assets/2023-01-26 18.40.55.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../assets/photo_2023-01-19 15.26.57.jpeg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../assets/photo_2023-01-19 15.26.57.jpeg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../assets/photo_2023-01-19 15.26.57.jpeg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../assets/photo_2023-01-19 15.26.57.jpeg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../assets/photo_2023-01-19 15.26.57.jpeg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../assets/photo_2023-01-19 15.26.57.jpeg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../assets/photo_2023-01-19 15.26.57.jpeg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../assets/photo_2023-01-19 15.26.57.jpeg' alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
