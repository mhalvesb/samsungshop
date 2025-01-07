"use client"

import React, {useRef} from "react"
import MyContents from "../boxes/contents"
import { useEffect, useState } from "react";
import {ArrowL, ArrowBottomL, ArrowTopL, ArrowR, ArrowBottomR, ArrowTopR} from "./main.styled";

import "./main.styled.js";
export default function MyMain(){
    const Carrossel = useRef(null);
    const GetWidth = useRef(null);

    const smoothScroll = (element, target, duration) =>{
      const start = element.scrollLeft;
      const change = target - start;
      const startTime = performance.now();
      const animateScroll = (currentTime) =>{
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress < 0.5 ? 4 * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        console.log("animateOk")
        element.scrollLeft = start + change * ease;
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    

    const LeftButton = () =>{
      if(Carrossel.current !== null){
        const MyDiv = Carrossel.current;
      const start = MyDiv.scrollLeft;
      const change = 260;
      const startTime = performance.now();


      const animateScroll = (currentTime) =>{
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / 100, 1);
        const ease = Math.min(1, Math.max(0, progress < 0.5 
          ? 4 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2));

        MyDiv.scrollLeft = start - change * ease;
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      requestAnimationFrame(animateScroll);
      }
    };

    const RightButton = (direction) =>{
      if(Carrossel.current !== null){
        const MyDiv = Carrossel.current;
      const start = MyDiv.scrollLeft + 16;
      const change = GetWidth.current.offsetWidth;
      const startTime = performance.now();
        console.log(change);

      const animateScroll = (currentTime) =>{
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / 100, 1);
        const ease = Math.min(1, Math.max(0, progress < 0.5 
          ? 4 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2));

        MyDiv.scrollLeft = start + change * ease;
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      requestAnimationFrame(animateScroll);
    };
      }
      

    useEffect(()=>{
      if(GetWidth.current){
        console.log("Existe");
      } else{
        console.log("Sem elemento");
      }
    }, []);

    return(
        <main className="flex bg-white py-4 pb-96">
            <div>
              <div>
                <p className="text-zinc-900 font-bold text-6xl py-6 text-center pb-4 mb-6">Ofertas imperdíveis em produtos da Samsung!</p>
                <div className="relative px-[5%] h-full flex items-center justify-start ">
                    <img src="/assets/banners/galaxys24.jpg" className="w-screen h-full object-cover rounded-2xl"></img>
                    <div className="absolute flex flex-col items-center ml-10">
                        <p className="text-3xl mb-2 text-center">O poder do Galaxy S24 Ultra por apenas <br></br><strong>R$ 5.467</strong> ou por <strong>R$ 455,83</strong> em até <strong>12x s/juros</strong></p>
                        <button className="left-0 transform w-44 px-6 mt-2 py-2 bg-neutral-900 font-bold text-white rounded-lg h-10 text-xs">Comprar agora</button>
                    </div>
                    </div>
                    <div className="py-10">
                      <p className="text-center text-4xl">Novos celulares</p>
                    </div>
                <div className="w-screen flex justify-center">
                  <div className="flex items-center w-[calc(100vw-15%)] overflow-hidden relative" >
                  <ArrowL onClick={() => LeftButton("Left")}>
                      <ArrowTopL></ArrowTopL>
                      <ArrowBottomL></ArrowBottomL>
                  </ArrowL>  
                  
                    <div className="flex w-[calc(100vw-15%)] overflow-hidden" ref={Carrossel}>
                      <MyContents PhoneName={"Samsung Galaxy A5 4GB 128GB"} Price={"1.299,00"} CardPrice={"1.399.00"} PhonePhoto={"/assets/phone/A5.webp"} ref={GetWidth}/>
                      <MyContents PhoneName={"Samsung Galaxy A15 4GB 128GB"} Price={"1.499.00"} CardPrice={"1.599.00"} PhonePhoto={"/assets/phone/A15.webp"}/>
                      <MyContents PhoneName={"Samsung Galaxy A51 8GB 128GB"} Price={"1.899.00"} CardPrice={"1.999.00"} PhonePhoto={"/assets/phone/A51.webp"}/>
                      <MyContents PhoneName={"Samsung Galaxy A71 8GB 256GB"} Price={"2.299.00"} CardPrice={"2.399.00"} PhonePhoto={"/assets/phone/A71.webp"}/>
                      <MyContents PhoneName={"Samsung Galaxy S23FE 8GB 512GB"} Price={"3,299.00"} CardPrice={"3.399.00"} PhonePhoto={"/assets/phone/s23fe.webp"}/>
                      <MyContents PhoneName={"Samsung Galaxy A25 4GB 64GB"} Price={"1.799,00"} CardPrice={"1.899,00"} PhonePhoto={"/assets/phone/a25.webp"}/>
                      <MyContents PhoneName={"Samsung Galaxy A25 4GB 64GB"} Price={"1.799,00"} CardPrice={"1.899,00"} PhonePhoto={"/assets/phone/a25.webp"}/>
                      <MyContents PhoneName={"Samsung Galaxy A71 8GB 256GB"} Price={"2.299.00"} CardPrice={"2.399.00"} PhonePhoto={"/assets/phone/A71.webp"}/>
                      <MyContents PhoneName={"Samsung Galaxy S23FE 8GB 512GB"} Price={"3,299.00"} CardPrice={"3.399.00"} PhonePhoto={"/assets/phone/s23fe.webp"}/>
                      <MyContents PhoneName={"Samsung Galaxy A25 4GB 64GB"} Price={"1.799,00"} CardPrice={"1.899,00"} PhonePhoto={"/assets/phone/a25.webp"}/>
                      <MyContents PhoneName={"Samsung Galaxy A25 4GB 64GB"} Price={"1.799,00"} CardPrice={"1.899,00"} PhonePhoto={"/assets/phone/a25.webp"}/>
                    </div>

                    <ArrowR onClick={() => RightButton("Right")}>
                      <ArrowTopR></ArrowTopR>
                      <ArrowBottomR></ArrowBottomR>
                    </ArrowR>
                  </div>
                </div>
              </div>
                <div className="py-10">
                  <p className="text-center text-4xl">Ofertas imperdíveis!</p>
                </div>
                <div className="flex justify-center w-screen px-[15%]">
                  <MyContents PhoneName={"Samsung Galaxy S24 ULTRA"} Promotion={"R$ 9.999.00"} Price={"6.999.00"} CardPrice={"7.199.00"} PhonePhoto={"/assets/phone/s24ultra.webp"}/>
                  <MyContents PhoneName={"Samsung Galaxy A6 4GB 128GB"} Promotion={"R$ 1.149,00"} Price={"849.00"} CardPrice={"999.00"} PhonePhoto={"/assets/phone/a6.webp"}/>
                  <MyContents PhoneName={"Samsung Galaxy A14 8GB 128GB"} Promotion={"R$ 1.599.00"} Price={"1.199.00"} CardPrice={"1.299.00"} PhonePhoto={"/assets/phone/A14.webp"}/>
                </div>

                <div className="px-[5%] py-10 relative flex justify-end ">
                <div className="absolute right-48 top-56 text-center">
                    <p className="text-5xl font-medium">Compre o galaxy Z Fold3</p>
                    <p className="text-3xl py-8">Por apenas <strong>R$ 6.849,00</strong> ou por <strong>R$ 684,90</strong><br></br> em até <strong>10x s/juros</strong></p>
                    <button className="left-0 transform w-44 px-6 mt-2 py-2 bg-neutral-900 font-bold text-white rounded-lg h-10 text-xs">Comprar agora</button>
                  </div>
                  <img src="/assets/banners/galaxyzfold.jpg" className="w-full h-full object-cover rounded-2xl" alt="zfold"></img>
                </div>
                <div className="py-10">
                <p className="text-center text-4xl">
                  Confira também Galaxy Watch
                </p>
                </div>

                <div className="flex justify-center w-screen px-[15%]">
                  <MyContents PhoneName={"Galaxy Watch 6"} Price={"1.079,00"} CardPrice={"1.079,00"} PhonePhoto={"/assets/gwatch/g1.webp"}/>
                  <MyContents PhoneName={"Galaxy Watch 6 Classic"} Price={"1.289,00"} CardPrice={"1.379,00"} PhonePhoto={"/assets/gwatch/g2.webp"}/>
                  <MyContents PhoneName={"Galaxy Watch FE Azul"} Price={"1.999,00"} CardPrice={"2.999,00"} PhonePhoto={"/assets/gwatch/g3.webp"}/>
                  <MyContents PhoneName={"Galaxy Watch FE Rose"} Price={"2.189,00"} CardPrice={"2.199,00"} PhonePhoto={"/assets/gwatch/g4.webp"}/>
                  <MyContents PhoneName={"Galaxy Watch Aço"} Price={"1.599,00"} CardPrice={"2.229,00"} PhonePhoto={"/assets/gwatch/g5.webp"}/>
                </div>
              </div>
            
          

        </main>
    )
}