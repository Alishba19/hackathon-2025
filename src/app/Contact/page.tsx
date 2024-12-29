import React from "react";
import Image from "next/image";
import pic1 from "../Contact/pic1.png";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GiLobArrow } from "react-icons/gi";
import pic2 from "../Contact/pic2.png";
import pic3 from "../Contact/pic3.png";
import pic4 from "../Contact/pic4.png";

function page (){
    return(
        <>
        <div className="container bg-white mx-auto h-[900px] w-[1440px] main-color">
            {/*SECTION-1*/}
            <div className="h-auto lg:h-[900px] w-full lg:w-[1440px] bg-frame1-color flex flex-col lg:flex-row items-center lg:items-start">
             <div className='flex gap-4 mt-[80px]'>
              <h1 className="text-black mt-5 text-[25px] font-semibold px-4 ml-[5px]">Get in touch today!
              <p className="text-[10px] text-[#767474] mt-5 font-semibold scale-95">We know how large objects will act,<br/>but things on a small scale</p>
              <p className='text-[15px] mt-5 font-semibold scale-95' >Phone: +451 215 215 </p>
              <p className='text-[15px] mt-1 font-semibold scale-95'>Fax: +451 215 215</p>
              <p className='flex mt-4 gap-2'><CiTwitter/><FaFacebookF/><FaInstagram/><FaLinkedin/></p>
              </h1>      
             <div>
               <Image className="h-auto w-full lg:h-[440px] lg:w-[387px]" src={pic1} alt='Get in touch today!'/>
             </div>
            </div>
          </div>

           {/*SECTION-2*/}
           <div className='h-[200px] mt-10 w-[640px] top-[1000px]'>
           <div  className="text-center content-center">
            <h1 className='text-black  mt-5 text-[10px]'>VISIT OUR OFFICE</h1>
            <p className='text-black text-[25px] font-bold mt-15'>We help small businesses<br/>with big ideas</p>
           </div>
           <div className="flex gap-3 ml-24 mt-14">
             <Image className="h-[200px] w-[150px]" src={pic2} alt='Image'/>
             <Image className="h-[200px] w-[150px]" src={pic3} alt='Image'/>
             <Image className="h-[200px] w-[150px]" src={pic4} alt='Image'/>
           </div>
          </div>

          {/*LAST SECTION*/}
          <div className='h-[200px] mt-[180px] w-[640px] top-[1000px]'>
            <div className='text-center content-center'>
            <h1 className='text-[#4a54e5] content-center'><GiLobArrow className='w-[40px] h-[40px] ml-80'/>
            <p className='text-black text-[10px] mt-5'>WE Can't WAIT TO MEET YOU</p>
            <p className='text-black text-[20px] font-bold mt-3'>Lets Talk</p>
            </h1>
            </div>
            <div className='flex ml-72'>
            <button className='h-9 w-25 border-[1px] border-black text-black mt-5 text-center content-center hover:bg-blue-500'>try it fee now</button>
            </div>
          </div>
        </div>
        </>
    )
}

export default page