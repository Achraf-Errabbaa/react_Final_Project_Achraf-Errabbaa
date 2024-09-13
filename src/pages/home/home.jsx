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


            <div className='px-32 flex pt-10 gap-10'>
                <div className=''>
                    
                    <div className='bg-gl3 bg-contain bg-center relative bg-no-repeat w-[400px] h-[500px]'>
                        <button className="flex absolute bg-opacity-70 text-2xl top-[400px] right-[120px] items-center justify-center bg-white w-[180px] p-2">DRESSES</button>
                    </div>

                    <div className='bg-glasses bg-contain bg-center relative bg-no-repeat w-[400px] h-[500px]'>
                    <button className="flex absolute bg-opacity-70 text-2xl top-[350px] right-[120px] items-center justify-center bg-white w-[180px] p-2">SUNGLASSES</button>
                    </div>
                </div>
                
                <div className='flex flex-col gap-16'>

                <div className='bg-watch  bg-cover bg-center relative  bg-no-repeat w-[400px] h-[380px]'>
                    <button className="flex absolute bg-opacity-70 text-2xl top-[250px] right-[120px] items-center justify-center bg-white w-[180px] p-2">WATCHES</button>
                    </div>

                    <div className='bg-gl2 bg-contain bg-center relative bg-no-repeat  w-[400px] h-[500px]'>
                        <button className="flex absolute bg-opacity-70 text-2xl top-[400px] right-[120px] items-center justify-center bg-white w-[180px] p-2">FOOTERWEAR</button>
                    </div>
                </div>
                <div className=''>
                    
                    <div className='bg-guy bg-contain bg-center relative bg-no-repeat w-[400px] h-[500px]'>
                        <button className="flex absolute bg-opacity-70 text-2xl top-[400px] right-[120px] items-center justify-center bg-white w-[180px] p-2">DRESSES</button>
                    </div>

                    <div className='bg-pack bg-contain bg-center relative bg-no-repeat w-[400px] h-[500px]'>
                    <button className="flex absolute bg-opacity-70 text-2xl top-[350px] right-[120px] items-center justify-center bg-white w-[180px] p-2">SUNGLASSES</button>
                    </div>
                </div>
                
            </div>

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
        
        <SwiperSlide className='relative'>
            <div className='flex justify-center items-center gap-5 flex-wrap'>
                <div className='relative h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover' src={imges.item5} alt="Car 1" />
                    <div className='h-[20%] w-full  flex pt-5 font-thin text-lg flex-col'><div className='hover:text-red-600 hover:duration-300'>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
                <div className='relative h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover' src={imges.item6} alt="Car 2" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div className='hover:text-red-600 hover:duration-300'>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
                <div className='relative h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover' src={imges.item1} alt="Car 3" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div className='hover:text-red-600 hover:duration-300'>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
                <div className='relative h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover' src={imges.item5} alt="Car 1" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div className='hover:text-red-600 hover:duration-300'>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
            </div>
        </SwiperSlide>

       
        <SwiperSlide className='relative'>
        <div className='flex justify-center items-center gap-5 flex-wrap'>
                <div className='relative h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover' src={imges.item5} alt="Car 1" />
                    <div className='h-[20%] w-full  flex pt-5 font-thin text-lg flex-col'><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
                <div className='relative h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover' src={imges.item6} alt="Car 2" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
                <div className='relative h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover' src={imges.item1} alt="Car 3" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
                <div className='relative h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover' src={imges.item5} alt="Car 1" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='relative'>
        <div className='flex justify-center items-center gap-5 flex-wrap'>
                <div className='relative h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover' src={imges.item5} alt="Car 1" />
                    <div className='h-[20%] w-full  flex pt-5 font-thin text-lg flex-col'><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
                <div className='relative h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover' src={imges.item6} alt="Car 2" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
                <div className='relative h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover' src={imges.item1} alt="Car 3" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
                <div className='relative h-[500px] w-[300px]  flex flex-col'>
                    <img className='h-[80%] w-full object-cover' src={imges.item5} alt="Car 1" />
                    <div className='h-[20%] w-full  pt-5 font-thin text-lg flex-col flex '><div>Boxy7 T-Shert with roll sleeve</div><div>$20</div></div>
                </div>
            </div>
        </SwiperSlide>

    </Swiper>
</div>

            </>
    );
};

