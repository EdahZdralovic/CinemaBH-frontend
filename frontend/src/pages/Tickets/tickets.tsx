import React from "react"

import { Check } from "lucide-react";

export default function Tickets() {
    return (
        <section className="realtive pt-10 leading-[24px] tracking-[0.5%] text-[#1D2939] container-md ">
            <div className="grid grid-cols-1 items-center justify-center">
                <h4 className=" text-[32px] font-bold text-center tracking-[-0.25%] leading-[40px] ">Pricing</h4>
                <div className="text-center pr-6 pl-6">
                    <p><br/>Welcome to our cinema ticket pricing options! We offer three tiers to suit everyone’s<br/>
                        preferences.
                        Explore our pricing options below and treat yourself to a cinematic<br/> adventure like never
                        before!
                    </p>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center md:items-stretch items-center gap-4 md:mt-16 mt-6">
                <div className="relative text-center border rounded-3xl border-[#E4E7EC] md:w-[29%] w-10/12 md:mt-10 mb-8 md:mb-24 pb-8 md:min-h-[520px]">
                    <h6 className="pt-8 font-bold text-[20px]">Regular Seats</h6>
                    <h4 className="pt-6 font-bold text-[32px]">7KM </h4>
                    <p className="pt-6 font-light text-[16px]">*per ticket</p>
                    <span className="flex  pt-8 text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Comfortable seating <br/></span>
                    <span className="flex  pt-6 text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Affordable pricing <br/></span>
                    <span className="flex  pt-6 text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Wide selection <br/></span>
                    <span className="flex  pt-6 text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Accessible locations<br/></span>
                    <span className="flex  pt-6 text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Suitable for everyone <br/></span>
                    <button
                        className="mt-[68px] p-3 border rounded-xl border-[#B22222] text-[#B22222] hover:bg-[#B22222] hover:text-white">
                        Explore Movies
                    </button>
                </div>
                <div className="relative text-center border shadow rounded-3xl border-[#98A2B3] md:mt-0 md:w-[29%] w-10/12 mb-8 md:mb-14 pb-8 pt-12 md:min-h-[536px]">
                    <h6 className="pt-8 font-bold  text-[20px]">Love Seats</h6>
                    <h4 className="pt-6 font-bold text-[#B22222] text-[32px]">24KM</h4>
                    <p className="pt-6 font-light text-[16px]">*per ticket</p>
                    <span className="flex  pt-6 font-light text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Side-by-side design <br/></span>
                    <span className="flex  pt-6 font-light text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Comfortable padding <br/></span>
                    <span className="flex  pt-6 font-light text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Adjustable armrests <br/></span>
                    <span className="flex  pt-6 font-light text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Cup holders<br/></span>
                    <span className="flex  pt-6 font-light text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Reserved for couples<br/></span>
                    <button
                        className="mt-[68px] p-3 border rounded-xl border-[#B22222] text-[#B22222] hover:bg-[#B22222] hover:text-white">
                        Explore Movies
                    </button>
                </div>
                <div className="relative text-center border rounded-3xl border-[#E4E7EC] md:w-[29%] w-10/12 md:mt-10 mb-8 md:mb-24 pb-8 md:min-h-[520px]">
                    <h6 className="pt-8 font-bold text-[20px]">Vip Seats</h6>
                    <h4 className="pt-6 font-bold text-[32px]">10KM</h4>
                    <p className="pt-6 font-light text-[16px]">*per ticket</p>
                    <span className="flex  pt-6 text-left pl-8 gap-3">
                        <Check className="text-[#B22222] text-left "/>Enhanced comfort <br/></span>
                    <span className="flex  pt-6  text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Priority seating <br/></span>
                    <span className="flex  pt-6 text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Prime viewing <br/></span>
                    <span className="flex  pt-6 text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Personal space <br/></span>
                    <span className="flex  pt-6  text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>Luxury extras <br/></span>
                    <button
                        className="mt-[68px] p-3 border rounded-xl border-[#B22222] text-[#B22222] hover:bg-[#B22222] hover:text-white">
                        Explore Movies
                    </button>
                </div>
            </div>
        </section>
    );
}

