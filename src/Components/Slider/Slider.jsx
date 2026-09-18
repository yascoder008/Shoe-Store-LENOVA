// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import './Slider.css';
import 'swiper/css/pagination';

//Import pictures
import slide1_img from '../../assets/slide1-picture.png';
import slide2_img from '../../assets/slide2-picture.png';
import slide3_img from '../../assets/slide3-picture.png';

import Shop from "../Shop";
import {Link} from "react-router-dom";

export default () => {
  return (
    <Swiper
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{clickable:true}}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
          <div className='slide-1 flex flex-col justify-between items-center pt-20 p-7 gap-5 min-h-[40vh] md:flex-row md:justify-center md:min-h-[80vh] lg:gap-7'>
            <div className='flex flex-col items-center align-center gap-2.5 md:mt-0 lg:w-[50%] lg:gap-4 md:items-start'>
              <h1 className='font-extrabold pt-9 text-center text-2xl md:text-left md:text-4xl lg:text-6xl'>STEP INTO SOMETHING <span className='text-blue-900'>NEW</span></h1>
              <p className='text-center md:text-left md:text-xl lg:text-2xl'>Discover the latest styles designed 
                 to keep you moving in comfort and confidence. 
                 Explore our newest arrivals and find your 
                 next favorite pair.</p>
              <button className='shop-btn bg-blue-800 w-30 p-2 rounded-4xl hover:shadow-[1px_4px_18px_0px_#2b6cb0] md:w-50 md:p-4 md:text-xl md:mt-6 lg:mt-4'>
                <Link to="/shop" className='text-white'>Shop Now</Link>
              </button>
          </div>
          <img src={slide1_img}
               className='self-end w-60 md:self-auto md:m-0 md:w-90 lg:w-120'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-2 flex flex-col justify-between items-center pt-20 p-7 gap-5 min-h-[40vh] md:flex-row md:justify-center md:min-h-0 md:h-[80vh] lg:gap-7'>
            <div className='flex flex-col items-center align-center gap-2.5 lg:w-[50%] lg:gap-4 md:items-start'>
              <h1 className='font-extrabold pt-9 text-center text-2xl md:text-left md:text-4xl lg:text-6xl'>MADE FOR EVERY <span className='text-blue-900'>MOVE</span></h1>
              <p className='text-center md:text-left md:text-xl lg:text-2xl'>
                From busy mornings to late-night adventures, 
                find shoes that combine effortless style with 
                all-day comfort.</p>
              <button className='shop-btn bg-blue-800 w-30 p-2 rounded-4xl hover:shadow-[1px_4px_18px_0px_#2b6cb0] md:w-50 md:p-4 md:text-xl md:mt-6 lg:mt-4'>
                <Link to="/shop" className='text-white'>Shop Now</Link>
              </button>
          </div>
          <img src={slide2_img}
               className='self-end w-40 md:self-auto md:m-0 md:w-70 lg:w-90'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide-3 flex flex-col justify-between items-center pt-20 p-7 gap-5 min-h-[40vh] md:flex-row md:justify-center md:min-h-0 md:h-[80vh] lg:gap-7'>
            <div className='flex flex-col items-center align-center gap-2.5 lg:w-[50%] lg:gap-4 md:items-start'>
              <h1 className='font-extrabold pt-9 text-center text-2xl md:text-left md:text-4xl lg:text-6xl'>YOUR <span className='text-blue-900'>STYLE,</span> YOUR <span className='text-blue-900'>STATEMENT.</span></h1>
              <p className='text-center md:text-left md:text-xl lg:text-2xl'>
                Stand out with our exclusive collection of 
                bold silhouettes and timeless designs made to 
                elevate every step.</p>
              <button className='shop-btn bg-blue-800 w-30 p-2 rounded-4xl hover:shadow-[1px_4px_18px_0px_#2b6cb0] md:w-50 md:p-4 md:text-xl md:mt-6 lg:mt-4'>
                <Link to="/shop" className='text-white'>Shop Now</Link>
              </button>
          </div>
          <img src={slide3_img}
               className='self-end w-40 md:self-auto md:m-0 md:w-90 lg:w-100'/>
          </div>
        </SwiperSlide>
    </Swiper>
  );
};