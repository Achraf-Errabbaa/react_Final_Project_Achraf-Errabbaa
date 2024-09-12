import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestSquare, FaGooglePlusG, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className='h-[400px] w-[100%] bg-[#f0f0f0] flex p-10 gap-10'>
            <div className='h-[100%] w-[33%] '>
                <div className='text-xl pb-7'>GET IN TOUCH</div>
                <div>
                    Any questions? Let us know in store at 8th floor, 379 Hudson St, <br />
                    New York, NY 10018 or call us on (+1) 96 716 6879
                </div>
                <div className='flex flex-row gap-x-4 pt-7'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaPinterestSquare />
                    <FaGooglePlusG />
                    <FaInstagram />
                </div>
            </div>
            <div className='h-[100%] w-[34%] flex gap-20 '>
                <div>
                    <h1 className='font-bold pb-7'>CATEGORIES</h1>
                    <ul className='flex flex-col gap-y-3 text-gray-500'>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Dresses</a></li>
                        <li><a href="#">Sunglasses</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold pb-7'>LINKS</h1>
                    <ul className='flex flex-col gap-y-3 text-gray-500'>
                        <li><a href="#">Search</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Returns</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className=' pb-7 font-bold'>HELP</h1>
                    <ul className='flex flex-col gap-y-3 text-gray-500'>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
            </div>
            <div className='h-[100%] w-[33%]'>
                <h1 className=' pb-7 font-bold'>NEWSLETTER</h1>
                <form action="your-server-endpoint" method="POST">
                    <div className=''>
                        <input className='w-[350px]  bg-transparent border-b-[1px] border-gray-500 ' type="email" id="email" name="email" placeholder='Email Address'/>
                    </div>
                    <button className='bg-black text-white p-3 rounded-3xl w-[180px] mt-5'>SUBSCRIBE</button>
                </form>
            </div>
        </div>
    );
};
