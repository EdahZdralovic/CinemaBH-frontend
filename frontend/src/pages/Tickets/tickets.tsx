import { Check } from "lucide-react";

export default function Tickets() {
    return (
        <section className="realtive pt-10 text-[#1D2939] container-md ">
            <div className="grid grid-cols-1 items-center justify-center">
                <h4 className=" text-[32px] font-bold text-center tracking-[-0.25%] leading-[40px] ">Pricing</h4>
                <div className="text-center">
                    <p><br />Welcome to our cinema ticket pricing options! We offer three tiers to suit everyone’s<br />
                        preferences.
                        Explore our pricing options below and treat yourself to a cinematic<br /> adventure like never before!
                    </p>
                </div>

            </div>
            <div className="flex flex-wrap gap-2 mb-20">
                <div className="text-center border rounded-xl border-[#E4E7EC] w-3/12 h-2/3 md:mb-12 md:ml-14 pb-8">
                    <h6 className="pt-4 font-bold text-[20px]">Regular Seats</h6>
                    <h4 className="pt-4 font-bold text-[32px]">7KM</h4>
                    <p className="pt-4 font-light text-[16px]">*per ticket</p>
                    <span className="flex  pt-4 font-light text-[16px] text-left pl-8 gap-3">
                        <Check className="text-[#B22222] text-left " />Comfortable seating <br /></span>
                    <span className="flex  pt-4 font-light text-[16px] text-left pl-8 gap-3">
                        <Check className="text-[#B22222] text-left " />Affordable pricing <br /></span>
                    <span className="flex  pt-4 font-light text-[16px] text-left pl-8 gap-3">
                        <Check className="text-[#B22222] text-left " />Wide selection <br /></span>
                    <span className="flex  pt-4 font-light text-[16px] text-left pl-8 gap-3">
                        <Check className="text-[#B22222] text-left " />Suitable for everyone <br /></span>
                    <button className= "mt-16 p-3 border rounded-xl border-[#B22222] text-[#B22222] ">
                     Explore Movies
                    </button>

                </div>
                <div className="text-center border rounded- border-[#E4E7EC] w-3/12 h-2/3 md:m-12 ">

                </div>
                <div className="">

                </div>

            </div>


        </section>
    );
}
