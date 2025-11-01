import React from "react";

import { Check } from "lucide-react";

export interface TicketsCardProps{
    title: string;
    price: number;
    disclaimer: string
    options: string[];
    isMainCard: boolean;
}

export function TicketsCard( { title, price, disclaimer,  options, isMainCard} : TicketsCardProps ) {
    return (
        <div
            className={
                isMainCard ? "relative text-center border shadow rounded-3xl border-[#98A2B3] md:mt-0 md:w-[29%] max-w-[408px] w-10/12 mb-8 md:mb-14 pb-8 pt-12 md:min-h-[536px]"
                    : "relative text-center border rounded-3xl border-[#E4E7EC] md:w-[29%] max-w-[408px] w-10/12 md:mt-10 mb-8 md:mb-24 pb-8 md:min-h-[520px]"
            }>

                <h6 className="pt-8 font-bold text-[20px]">{title}</h6>
                <h4 className="pt-6 font-bold text-[32px]">{price} KM</h4>
                <p className="pt-6 font-light text-[16px]">{disclaimer}</p>
                {options.map((option) => (
                <span className="flex  pt-8 text-[16px] text-left pl-6 gap-3">
                        <Check className="text-[#B22222] text-left "/>{option} <br/></span>))}
                <button
                    className="mt-[68px] p-3 border rounded-xl border-[#B22222] text-[#B22222] hover:bg-[#B22222] hover:text-white">
                    Explore Movies
                </button>
            </div>
    );
}



