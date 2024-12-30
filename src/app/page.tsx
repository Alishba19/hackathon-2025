import React from "react";
import Image from "next/image";
import col from "../app/col.png";
import kids from "../app/kids.png";
import card1 from "../app/card1.png";
import card2 from "../app/card2.png";
import card3 from "../app/card3.png";
import card4 from "../app/card4.png";
import card5 from "../app/card5.png";
import card6 from "../app/card6.png";
import card7 from "../app/card7.png";
import card8 from "../app/card8.png";
import produce from "../app/produce.png";
import man from "../app/man.png";
import pic1 from "../app/pic1.png";
import pic2 from "../app/pic2.png";
import pic3 from "../app/pic3.png";

export default function Home() {
  return (
    <>
    <div className="w-full h-[3500px] bg-[#FAFAFA]">
      {/*SECTION-1*/}
      <div className="flex">
      <Image className="h-auto w-full lg:h-[800px] lg:w-[800px]" src={col} alt='image'/>
      </div>

      {/*SECTION-2*/}
      <div className="h-[300] w-[300] bg-gray-300 ml-5 mt-5 ">
        <div className="text-center">
           <h1 className="text-black font-semibold text-[20px] mt-10 leading-loose">EDITOR’S PICK</h1>
           <p className="font-color text-[8px] text-black scale-110">Problems trying to resolve the conflict between</p>
        </div>
        <div>
         <Image className="mt-10 ml-10 h-[300px] w-[500px]" src={kids} alt="image"/>
        </div>
      </div>

      {/*SECTION-3*/}
      <div className="h-[800px] w-[550px] ml-5 mt-10">
        <div className="text-center">
        <h1 className="font-color text-[#868282] text-[10px]  scale-110">Featured Products</h1>
        <p className="text-black font-semibold text-[15px] leading-loose">BESTSELLER PRODUCTS</p>
        <p className="font-color text-[9px]  text-[#868282] scale-110">Problems trying to resolve the conflict between </p>
        </div>
        <div className="flex gap-[8px] ml-5">
          <Image className="h-[200px] w-[180px]" src={card1} alt="image"/>
          <Image className="h-[200px] w-[180px]" src={card2} alt="image"/>
          <Image className="h-[200px] w-[180px]" src={card3} alt="image"/>
          <Image className="h-[200px] w-[180px]" src={card4} alt="image"/>
        </div>
        <div className="flex gap-10 mt-5 ml-5">
          <h1 className="text-black text-[15px] font-semibold">Graphic Design<p className="text-[#afabab] text-[10px] font-semibold">English Department</p><p className="text-[#37f63a]  text-[10px] mt-3">$16.48 $6.48</p></h1>
          <h1 className="text-black text-[15px] font-semibold">Graphic Design<p className="text-[#afabab] text-[10px] font-semibold">English Department</p><p className="text-[#37f63a]  text-[10px] mt-3">$15.48 $6.48</p></h1>
          <h1 className="text-black text-[15px] font-semibold">Graphic Design<p className="text-[#afabab] text-[10px] font-semibold">English Department</p><p className="text-[#37f63a]  text-[10px] mt-3">$15.48 $6.48</p></h1>
          <h1 className="text-black text-[15px] font-semibold">Graphic Design<p className="text-[#afabab] text-[10px] font-semibold">English Department</p><p className="text-[#37f63a]  text-[10px] mt-3">$15.48 $6.48</p></h1>
        </div>
        <div className="flex gap-[8px] mt-10 ml-3">
          <Image className=" h-[200px] w-[150px]" src={card5} alt="image"/>
          <Image className="h-[200px] w-[130px]" src={card6} alt="image"/>
          <Image className="h-[200px] w-[180px]" src={card7} alt="image"/>
          <Image className="h-[200px] w-[180px]" src={card8} alt="image"/>
        </div>
        <div className="flex gap-10 mt-5 ml-5">
          <h1 className="text-black text-[15px] font-semibold">Graphic Design<p className="text-[#afabab] text-[10px] font-semibold">English Department</p><p className="font-semibold text-[#37f63a] text-[10px] mt-3">$16.48 $6.48</p></h1>
          <h1 className="text-black text-[15px] font-semibold">Graphic Design<p className="text-[#afabab] text-[10px] font-semibold">English Department</p><p className="font-semibold text-[#37f63a]  text-[10px] mt-3">$15.48 $6.48</p></h1>
          <h1 className="text-black text-[15px] font-semibold">Graphic Design<p className="text-[#afabab] text-[10px] font-semibold">English Department</p><p className="font-semibold text-[#37f63a]  text-[10px] mt-3">$15.48 $6.48</p></h1>
          <h1 className="text-black text-[15px] font-semibold">Graphic Design<p className="text-[#afabab] text-[10px] font-semibold">English Department</p><p className="font-semibold text-[#37f63a]  text-[10px] mt-3">$15.48 $6.48</p></h1>
        </div>
      </div>

      {/*SECTION-4*/}
      <div className=" h-[300px] w-[550px] bg-green-800 ml-9">
          <div className="flex ml-5">
            <h1 className="text-white mt-20 text-[8px] ml-42">SUMMER 2020
            <p className="text-white text-[30px] text-center">Vita Classic Product</p>
            <p className="text-white text-[10px]">We know how large objects will act, We know how<br/> are objects will act, We know</p>
            <p className="text-white text-[10px]">$16.48</p><p className="text-[10px] mt-3 h-9 w-20 border-[1px] font-semibold ">ADD TO CART</p>
            </h1>
          <div className="mt-8">
           <Image className="h-[200px] w-full lg:h-[600px] lg:w-[600px]" src={produce} alt='Rocket single seater'/>
          </div>
        </div>
      </div>

      {/*SECTION-5*/}
      <div className="h-[300px] w-[800px]">
          <div className="flex">
            <Image className="h-[250px] w-[250px]" src={man} alt="Asgaarf" />
            <div className="mt-40 ml-19">
            <h1 className="text-[#928e8e] text-[10px]">SUMMER 2020</h1>
            <p className="text-black text-[20px] font-bold ml-14">Part of the Neural<br/>Universe</p>
            <p className="text-[#928e8e] text-[10px] mt-4">We know how large objects will act,but things on a small scale.</p>
            <button className="h-10 w-40 border-[1px] border-black mt-7 ml-10 text-center content-center text-black text-sm font-semibold shadow-md hover:bg-green-500">BUY NOW</button>
            </div>
          </div>
        </div>

       {/*SECTION-6*/}
       <div className="h-[250px] w-[400px] ml-32">
          <div className="text-center mt-6 ml-9">
            <h1 className="font-color text-[#3381e8] text-[8px] font-semibold mt-4 tracking-wide">Practice Advice</h1>
            <p className="text-black text-[25px] font-semibold">Featured Posts</p>
            <p className="font-color text-[#515050] font-semibold text-[10px] tracking-wide">Problems trying to resolve the conflict between<br/>the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
          <div className="flex mt-5 gap-5">
          <Image className=" h-[200px] w-[200px]" src={pic1} alt="Trenton modular sofa_3"/>
          <Image className="h-[200px] w-[200px]" src={pic2} alt="Granite dining table with dining chair"/>
          <Image className="h-[200px] w-[200px]" src={pic3} alt="Outdoor bar table and stool"/>
          </div>
        </div>
    </div>
    </>
  );
}
