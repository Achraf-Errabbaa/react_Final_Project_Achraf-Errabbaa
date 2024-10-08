import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className='h-[100px]  w-[100%] z-30 bg-white  flex justify-center items-center gap-[400px] fixed'>
            <div className='font-bold text-4xl'>Fashe <span className='text-[#e65540]'>.</span></div>
            <div className=' gap-10 flex justify-center items-center cursor-pointer '>
                <div onClick={() => { navigate('/') }} className=' hover:border-b-[1px] hover:border-black focus:text-red-500 '>Home</div>
                <div onClick={() => { navigate('/shop') }} className='hover:border-b-[1px] hover:border-black focus:text-red-500 '>Shop</div>
                <div onClick={() => { navigate('/blog') }} className='hover:border-b-[1px] hover:border-black focus:text-red-500 '>Blog</div>
                <div onClick={() => { navigate('/about') }} className='hover:border-b-[1px] hover:border-black focus:text-red-500 '>About</div>
                <div onClick={() => { navigate('/contact') }} className='hover:border-b-[1px] hover:border-black focus:text-red-500 '>Contact</div>

            </div>
            <div className='flex justify-center items-center gap-10 text-2xl text-[#d0d0d0]'>
                <div><FaRegUserCircle /></div>
                <div className='bgl pl-[50px]'><RiShoppingCart2Line /></div>
            </div>


        </nav>
    );
};

