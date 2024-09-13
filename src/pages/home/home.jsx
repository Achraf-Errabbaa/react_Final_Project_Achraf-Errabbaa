import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { imges } from '../../constant';

export const Home = () => {
    return (
        <>
        <div className='pt-[100px]'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='relative '>
                        <img className='bg-cover bg-center h-[600px]' src={imges.carousel1} alt="ccc" />
                        <div className='absolute top-[10rem] flex flex-col gap-5 left-[34rem]  text-center justify-center items-center  text-white'>
                            <h5 className='text-xl'>women collection 2018</h5>
                            <h1 className='text-7xl font-bold'>NEW ARRIVALS</h1>
                            <button className='h-[50px] w-[200px] bg-white font-thin text-black rounded-[30px]'>shop now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                    <img className='bg-cover bg-center h-[600px]' src={imges.carousel2} alt="ccc" />
                        <div className='absolute top-[10rem] flex flex-col gap-5 left-[34rem]  text-center justify-center items-center  text-white'>
                            <h5 className='text-xl'>women collection 2018</h5>
                            <h1 className='text-7xl font-bold'>NEW ARRIVALS</h1>
                            <button className='h-[50px] w-[200px] bg-white font-thin text-black rounded-[30px]'>shop now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                    <img className='bg-cover bg-center h-[600px]' src={imges.carousel1} alt="ccc" />
                        <div className='absolute top-[10rem] flex flex-col gap-5 left-[34rem]  text-center justify-center items-center  text-white'>
                            <h5 className='text-xl'>women collection 2018</h5>
                            <h1 className='text-7xl font-bold'>NEW ARRIVALS</h1>
                            <button className='h-[50px] w-[200px] bg-white font-thin text-black rounded-[30px]'>shop now</button>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


            <div className='p-52'>
                <div>
                    
                    <div className='bg-gl3 bg-contain bg-center relative bg-no-repeat w-[400px] h-[500px]'>
                        <button className='absoulote right-4 '>DRESSES</button>
                    </div>
                </div>
            </div>
            </>
    );
};

