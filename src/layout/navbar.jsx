import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";


export const Navbar = () => {
    return (
        <nav className='h-[100px]  w-[100%] z-30 bg-white  flex justify-center items-center gap-[400px] fixed'>
            <div className='font-bold text-4xl'>Fashe <span className='text-[#e65540]'>.</span></div>
            <div className=' gap-10 flex justify-center items-center'>
                <div className=' hover:border-b-[1px] hover:border-black '>Home</div>
                <div className='hover:border-b-[1px] hover:border-black '>Shop</div>
                <div className='hover:border-b-[1px] hover:border-black '>Blog</div>
                <div className='hover:border-b-[1px] hover:border-black '>About</div>
                <div className='hover:border-b-[1px] hover:border-black '>Contact</div>

            </div>
            <div className='flex justify-center items-center gap-10 text-2xl text-[#d0d0d0]'>
                <div><FaRegUserCircle /></div>
                <div className='bgl pl-[50px]'><RiShoppingCart2Line /></div>
            </div>
            
            
        </nav>
    );
};

