import React from "react";
import Image from "next/image";
import shopping from "../About/shopping.png";
import number from "../About/number.png";
import Videocard from "../About/Video card.png";
import pic1 from "../About/pic1.png";
import pic2 from "../About/pic2.png";
import pic3 from "../About/pic3.png";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import desktop from "../About/desktop.png";
import pic4 from "../About/pic4.png";

function page (){
    return(
        <>
        <div className="container bg-[#fafafa] h-[2500px] w-full">
            {/*SECTION-1*/}
            <div className="h-auto lg:h-[900px] w-full lg:w-[1440px] bg-framel-color flex flex-col lg:flex-row items-center lg:items-start bg-slate-100">
            <div className="flex gap-10 mt-[80px]">
               <h1 className="text-[0.875rem] font-semibold uppercase text-black">ABOUT COMPANY
               <h2 className="text-black ml-[5px] mt-5 text-3x1 font-semibold">About us</h2>
               <p className="text-[8px] text-[#8c8787] mt-5 font-semibold">We know how large objects will act,<br/>but things on a small scale</p>
               <button className='h-9 w-28 border-[1px] border-black mt-4 text-[10px] text-center content-center hover:bg-blue-500'>Get Quote Now</button>
               </h1>   
               <div>
                 <Image className="h-auto w-full lg:h-[1000px] lg:w-[853px]" src={shopping} alt='Get in touch today!'/>
               </div>
              </div>  
            </div>

            {/*SECTION-2*/}
            <div className="w-[540px] h-[236px]">
            <div className='flex gap-[100px]'>
              <h1 className='text-[#f32c2c] text-[5px] ml-10 font-semibold mt-10'>Problems trying<p className='text-black text-[10px]'>Met minim Mollie non desert Alamo est<br/> sit cliquey dolor do met sent.</p></h1>
              <h1 className='text-black text-[7px] font-semibold mt-10' >Problems trying to resolve the conflict between the two major<br/>realms of Classical physics: Newtonian mechanics </h1>
              </div>
              <div className="h-[50px] mt-10 w-[640px]">
              <Image src={number} alt='next' />
              </div>
            </div>

            {/*SECTION-3*/}
            <div>
          <Image className="h-[200px] w-[400px] ml-32 justify-center" src={Videocard} alt="image"/>
          </div>

          {/*SECTION-4*/}
          <div className="h-[400px] w-[700px] top-[1000px]">
             <div className="text-center">
              <h1 className="text-black text-[20px] font-semibold">Meet Our Team</h1>
              <p className="text-black text-[10px] mt-4">Problems trying to resolve the conflict between<br/>the two major realms of Classical physics: Newtonian mechanics</p>
             </div>
              <div className="flex gap-6 ml-24 mt-14">
             <Image className="h-[150px] w-[150px] rounded-[10px]" src={pic1} alt="millennial design"/>
             <Image className="h-[150px] w-[150px] rounded-[10px]" src={pic2} alt="millennial design"/>
             <Image className="h-[150px] w-[150px] rounded-[10px]" src={pic3} alt="millennial design"/>
              </div>
              <div className="flex gap-[90px] mt-3 ml-32">
                <p className="text-black">Username
                <p className="text-black">Profession </p><p className="flex"><CiTwitter /><FaFacebookF/><FaInstagram/></p></p>
                <p className="text-black">Username
                <p className="text-black ">Profession</p><p className="flex"><CiTwitter /><FaFacebookF/><FaInstagram/></p></p>
                <p className="text-black">Username
                <p className="text-black">Profession</p><p className="flex"><CiTwitter /><FaFacebookF/><FaInstagram/></p></p>
              </div>
          </div>

          {/*SECTION-5*/}
          <div className="h-[200px] w-[640px] top-[1000px] bg-slate-300">
             <div className="text-center content-center">
               <h1 className="text-black mt-5 font-bold text-[20px]">Big Companies Are Here</h1>
               <p className=" text-black mt-3 text-[8px]">Problems trying to resolve the conflict between<br/>the two major realms of Classical physics: Newtonian mechanics</p>
             </div>
             <div className="h-[50px] w-[600px]">
              <Image src={desktop} alt='next'/>
             </div>
           </div>

           {/*SECTION*/}
           <div>
          <Image className="h-[300px] w-[800px]" src={pic4} alt="image"/>
          </div>

        </div>
        </>
    )
}

export default page