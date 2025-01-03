import React from "react";
import { LuSendHorizontal } from "react-icons/lu";

const Footer = () => { 
  return(
    <div className="w-full h-[180px] gap-32 flex pt-[3%] bg-[#edebeb]">
        <div className="gap-2">
        <h2 className="h-[24px] w-[100px] text-[12px] mt-2 mb-2 ml-9 font-inter text-[#000000] 3% ">Company Info</h2>
        <h2 className="w-[87px] h-[24px] font-poppins ml-9 font-[500] text-[9px] text-[#000000]">About Us</h2>
        <p className="font-poppins text-[9px] font-normal ml-9 w-[50px] text-[#000000] h-[24px]">carrier</p>
        <p className="font-poppins text-[9px] font-normal ml-9  w-[97px] text-[#000000] h-[24px]">We are hiring</p>
        <p className="font-poppins text-[9px] font-normal ml-9 w-[33px] text-[#000000] h-[24px]">Blog</p>
        </div>
        <div className="gap-2">
            <h2 className="w-[45px] h-[24px] mt-2 mb-2 font-poppins text-[12px] text-[#000000] ">Legal</h2>
            <p className="w-[67x] h-[24px] font-poppins  text-[9px] font-normal text-[#000000]">About Us</p>
            <p className="w-[50px] h-[24px] font-poppins text-[9px] font-normal text-[#000000]">Carrier</p>
            <p className="w-[97px] h-[24px] font-poppins text-[9px] font-normal text-[#000000]">We are hiring</p>
            <p className="w-[33px] h-[24px] font-poppins text-[9px] font-normal text-[#000000]">Blog</p>
        </div>
        <div className="gap-2">
        <h2 className="w-[72px] h-[24px] mt-2 mb-2 font-poppins text-[12px] text-[#000000] ">Features</h2>
        <p className="w-[142px] h-[24px] font-poppins text-[9px] font-normal text-[#000000]">Business Marketing</p>
        <p className="w-[97px] h-[24px] font-poppins text-[9px] font-normal text-[#000000]">User Analytiv</p>
        <p className="w-[68px] h-[24px] font-poppins text-[9px] font-normal text-[#000000]">Live Chat</p>
        <p className="w-[134px] h-[24px] font-poppins text-[9px] font-normal text-[#000000]">Unlimited Support</p>
        </div>
        <div className="gap-2">
        <h2 className="w-[86px] h-[24px] mt-2 mb-2 font-poppins text-[12px] text-[#000000] ">Resources</h2>
        <p className="w-[102px] h-[24px] font-poppins text-[9px] font-normal text-[#000000]">IOS & Android</p>
        <p className="w-[106px] h-[24px] font-poppins text-[9px] font-normal text-[#000000]">Watch a Demo</p>
        <p className="w-[79px] h-[24px] font-poppins text-[9px] font-normal text-[#000000]">Customers</p>
        <p className="w-[25px] h-[24px] font-poppins text-[9px] font-normal text-[#000000]">API</p>
        </div>
        <div className="gap-2">
        <h2 className="w-[150px] h-[25px] mt-2 mb-2 font-poppins text-[12px] text-[#000000] ">Get In Touch</h2>
        <button className="flex bg-[#fafafa] text-[#000000] w-[100px] pt-[10px]  pb-[12px] border-[1px] rounded-[2px] h-[30px]"><input type="email" placeholder='your email' className="w-[70px] ml-2 text-[9px] bg-[#fafafa] text-[#000000]"/><LuSendHorizontal className="w-[18px] h-[18px] text-[#000000]"/></button>
        <p className="w-[100px] font-opacity h-[18px] mt-4 font-poppins text-[9px] font-normal text-[#000000] ">Lore imp sum dolor Amit</p>
        </div>
    </div>
  )
}

export default Footer