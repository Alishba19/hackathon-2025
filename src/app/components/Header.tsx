import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";


export const Header = ()=>{
    return(
<div className="w-full h-[25px] bg-[#fafafa]">
       <div className="flex pt-1 w-[250px] h-[25px] mb-3 ml-[5px] gap-72">
            <h2 className="h-[24px] w-[118px]  text-[15px] font-inter text-[#000000] 3% "><Link href='/'>Banbage</Link></h2>
            <ul className="flex w-[360px] pt-1 h-[22px] mb-3 gap-[10px] text-[#000000]">
                <li className="font-poppins text-[13px] text-center font-normal w-[48px] h-[30px]"><Link href='/'>Home</Link></li>
                <li className="font-poppins text-[13px] text-center font-normal w-[46px] h-[24px]"><Link href='/Shop'>Shop</Link></li>
                <HiChevronDown className="w-[16px] h-[16px]"/>
                <li className="font-poppins text-[13px] text-center font-normal w-[48px] h-[24px]"><Link href='/About'>About</Link></li>
                <li className="font-poppins text-[13px] text-center font-normal w-[61px] h-[24px]"><Link href='/'>Blog</Link></li>
                <li className="font-poppins text-[13px] text-center font-normal w-[61px] h-[24px]"><Link href='/Contact'>Contact</Link></li>
                <li className="font-poppins text-[13px] text-center font-normal w-[61px] h-[24px]"><Link href='/'>pages</Link></li>
           </ul>
           <div className="flex mb-3 ml-[35px] text-[13px] gap-[4px] w-[300px] h-[24px] text-[#278af3]">
            <p className="w-[79px] pt-1 mb-3 h-[45px]">Login/Register</p>
            <CiSearch className="w-[20px] h-[20px]"/>
            <CiShoppingCart className="w-[20px] h-[20px]"/>1
            <CiHeart className="w-[20px] h-[20px]"/> 1
           </div>
   </div>
   </div>
    )
} 

export default Header
