import React from 'react';

export const Contact = () => {
    return (
        <div>

            <div className='bg-blog bg-cover bg-center relative  pt-[255px] h-[300px]  w-[100%]'>
                <h1 className=' flex  absolute  text-3xl top-[190px] right-[720px] font-extrabold text-white'>CONTACT</h1>
            </div>

            <div className='px-[200px] p-12 flex gap-16'>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5901.408187417011!2d-83.714185!3d42.306179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae3e5396e7cd%3A0x54d4a122d42d8dc6!2sGoogle%20Ann%20Arbor!5e0!3m2!1sen!2sus!4v1726314535930!5m2!1sen!2sus" width="500" height="440" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=''></iframe>
                </div>

                <div className='flex flex-col '>
                    <h1 className='mb-3 text-2xl'>Send us your message</h1>
                
                <div className='gap-7 flex flex-col'>
                <input placeholder='Name' className='h-[50px] pl-5 w-[550px] border-[#e6e6e6] border-solid border-[1px]' type="text" />
                    <input placeholder='Search' className='h-[50px] pl-5 w-[550px] border-[#e6e6e6] border-solid border-[1px]' type="search" />
                    <input placeholder='Phone' className='h-[50px] pl-5 w-[550px] border-[#e6e6e6] border-solid border-[1px]' type="tel" />
                    <textarea placeholder='Message' className=' pl-5 border-[#e6e6e6] border-solid border-[1px]' cols={65} rows={7} name="" id=""></textarea>
                </div>
                <button className='text-white bg-black w-[170px] p-3 mt-3 rounded-full'>SEND</button>
                </div>
            </div>
        </div>
    );
};

