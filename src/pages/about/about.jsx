import React from 'react';
import { imges } from '../../constant';

export const About = () => {
    return (
        <div className=''>
            <div className='bg-blog bg-cover bg-center relative  pt-[255px] h-[300px]  w-[100%]'>
                <h1 className=' flex  absolute  text-3xl top-[190px] right-[720px] font-extrabold text-white'>About</h1>
            </div>
            <div className="flex items-center space-x-1 p-[90px]">
                <div className=' w-1/3'>
                    <img src={imges.item1} alt="" className='h-[400px]' />
                </div>
                <div className='flex-1 text-gray-400'>
                    <h2 className='text-2xl font-semibold text-black mb-4'>Our story</h2>
                    <div>
                        <p className='text-base leading-relaxed'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                    </div>
                    <div className=" border-l border-gray-300  mt-10">
                    <div className='ml-10' >
                        <p className="">Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                        <p className="">- Steve Jobs</p>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

