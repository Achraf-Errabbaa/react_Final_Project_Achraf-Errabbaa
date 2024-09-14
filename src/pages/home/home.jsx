import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { imges } from '../../constant';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate =useNavigate()
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
                <div className='reltive overflow-hidden'>

                    <div onClick={()=>{navigate('/shop')}} className='bg-gl3 bg-contain bg-center relative bg-no-repeat w-[400px] h-[500px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110'>
                        <button className="flex absolute bg-opacity-70 text-2xl top-[400px] right-[120px] items-center justify-center bg-white w-[180px] p-2 hover:text-white hover:bg-red-400">DRESSES</button>
                    </div>

                    <div onClick={()=>{navigate('/shop')}} className='bg-glasses bg-contain bg-center relative bg-no-repeat w-[400px] h-[500px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110'>
                        <button className="flex absolute bg-opacity-70 text-2xl top-[350px] right-[120px] items-center justify-center bg-white w-[180px] p-2 hover:text-white hover:bg-red-400">SUNGLASSES</button>
                    </div>
                </div>

                <div className='flex flex-col gap-16 reltive overflow-hidden'>

                    <div onClick={()=>{navigate('/shop')}} className='bg-watch  bg-cover bg-center relative  bg-no-repeat w-[400px] h-[380px]  cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110'>
                        <button className="flex absolute bg-opacity-70 text-2xl top-[250px] right-[120px] items-center justify-center bg-white w-[180px] p-2 hover:text-white hover:bg-red-400">WATCHES</button>
                    </div>

                    <div onClick={()=>{navigate('/shop')}} className='bg-gl2 bg-contain bg-center relative bg-no-repeat  w-[400px] h-[500px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110'>
                        <button className="flex absolute bg-opacity-70 text-2xl top-[400px] right-[120px] items-center justify-center bg-white w-[180px] p-2 hover:text-white hover:bg-red-400">FOOTERWEAR</button>
                    </div>
                </div>
                <div className='reltive overflow-hidden'>

                    <div  onClick={()=>{navigate('/shop')}} className='bg-guy bg-contain bg-center relative bg-no-repeat w-[400px] h-[500px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110'>
                        <button className="flex absolute bg-opacity-70 text-2xl top-[400px] right-[120px] items-center justify-center bg-white w-[180px] p-2 hover:text-white hover:bg-red-400">DRESSES</button>
                    </div>

                    <div onClick={()=>{navigate('/shop')}} className='bg-pack bg-contain bg-center relative bg-no-repeat w-[400px] h-[500px]  cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110'>
                        <button className="flex absolute bg-opacity-70 text-2xl top-[350px] right-[120px] items-center justify-center bg-white w-[180px] p-2 hover:text-white hover:bg-red-400">SUNGLASSES</button>
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

            <div className='bg-[#f2f2f2] w-full h-[490px] mt-[100px] mb-[100px] px-32 gap-12 flex'>
                <div className='relative bg-banner3 bg-contain bg-center bg-no-repeat w-full h-full max-w-[550px] transition-transform duration-300 ease-in-out transform hover:scale-110'>
                    <div className='absolute flex flex-col items-center justify-center text-white w-full h-full px-8'>
                        <div className='text-center'>
                            <h2 className='font-extrabold text-3xl mb-2'>The Beauty</h2>
                            <h1 className='font-extrabold text-4xl mb-4'>Look Book</h1>
                            <p>
                                <a onClick={()=>{navigate('/shop')}} href="#" className='text-white  hover:underline'>VIEW COLLECTION</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='bg-white relative overflow-hidden h-[412px] mt-[39px] w-[550px] px-8 flex flex-col items-center'>
                    <div className='relative overflow-hidden'>
                        <img src={imges.glasses} alt="Glasses" className='h-[250px] transition-transform duration-300 ease-in-out transform hover:scale-110' />
                    </div>
                    <div className='mb-10 text-center text-gray-500'>
                        <p className='text-lg hover:text-red-500 cursor-pointer'>Boxy2 T-Shirt with Roll Sleeve</p>
                        <p className='text-xl mt-1'>$20.00</p>
                    </div>
                    <div className='flex gap-3'>
                        <p className='border p-4'>-2083 days</p>
                        <p className='border p-4'>-23 hrs</p>
                        <p className='border p-4'>-6 min</p>
                        <p className='border p-4'>-57 secs</p>
                    </div>
                </div>
            </div>


            <div>
                <h1 className='font-bold text-3xl flex items-center justify-center'>OUR BLOG</h1>
                <div className='p-14 px-[200px] flex gap-[50px]'>

                    <div className='flex flex-col gap-3'>
                        <div className='relative overflow-hidden'>
                            <img src={imges.blog1} alt="" className='w-[400px] transition-transform duration-300 ease-in-out transform hover:scale-110' />
                        </div>
                        <h1><a href="" className='hover:text-red-500'>Black Friday Guide: Best Sales & Discount Codes</a></h1>
                        <p className='text-gray-400'>by fashe-theme Admin on Dec 28, 2017</p>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <div className='relative overflow-hidden'>
                            <img src={imges.blog2} alt="" className='w-[400px] transition-transform duration-300 ease-in-out transform hover:scale-110' />
                        </div>
                        <h1><a href="" className='hover:text-red-500'>The White Sneakers Nearly Every Fashion Girls Own</a></h1>
                        <p className='text-gray-400'>by fashe-theme Admin on Dec 28, 2017</p>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <div className='relative overflow-hidden'>
                            <img src={imges.blog3} alt="" className='w-[400px] transition-transform duration-300 ease-in-out transform hover:scale-110' />
                        </div>
                        <h1><a href="" className='hover:text-red-500'>New York SS 2018 Street Style: By Annina Mislin</a></h1>
                        <p className='text-gray-400'>by fashe-theme Admin on Dec 28, 2017</p>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center'>
    <h1 className='font-bold text-3xl mb-28'>@ FOLLOW US ON INSTAGRAM</h1>

    <div className='flex items-center space-x-8 gap-16 mb-11'>
        <div className='flex flex-col items-center text-gray-600'>
            <p className='text-2xl'>Free Delivery Worldwide</p>
            <p>Mirum est notare quam littera gothica</p>
        </div>

        <div className='w-px bg-gray-300 h-24'></div> 

        <div className='flex flex-col items-center text-gray-600'>
            <p className='text-2xl'>30 Days Return</p>
            <p>Simply return it within 30 days for an exchange.</p>
        </div>

        <div className='w-px bg-gray-300 h-24'></div> 

        <div className='flex flex-col items-center text-gray-600'>
            <p className='text-2xl'>Store Opening</p>
            <p>Shop open from Monday to Sunday</p>
        </div>
    </div>
</div>



        </>
    );
};

