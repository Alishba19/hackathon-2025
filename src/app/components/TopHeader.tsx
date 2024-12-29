import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci"
import { IoCallOutline } from "react-icons/io5";

const TopHeader = () =>{
    return (
          <div className ='flex w-[400px] h-[24px] pt-1 gap-[5px] bg-[#000000] text-[#FAFAFA]'>
            <div className='flex w-[450px] h-[24px]'>
            <IoCallOutline className="w-[15px] h-[15px]"/>
              <p className='ml-1  font-poppins w-[120px] text-[9px] h-[24px] font-normal'>(225) 555-0118</p>
              <TfiEmail  className="ml-2 w-[15px] h-[15px]"/>
              <p className='text-center font-poppins w-[220px] text-[9px] h-[44px] font-normal'>michelle.rivera@example.com</p>
              <p className='text-center font-poppins  w-[332px] text-[9px] h-[44px] font-normal'>Follow Us  and get a chance to win 80% off</p>
              </div>
              <div className="flex gap-[5px]">
              <p className="flex w-[50px] text-[9px] h-[24px] mb-4 ml-[35px]">Follow Us:</p>
              <FaInstagram className="w-[13px] h-[13px]"/>
              <FaYoutube className="w-[13px] h-[13px]"/>
              <FaFacebookF className="w-[13px] h-[13px]"/>
              <CiTwitter className="w-[13px] h-[13px]"/>
            </div>
            </div>
    )
}
export default TopHeader 