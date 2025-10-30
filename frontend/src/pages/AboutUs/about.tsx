




export default function AboutUs() {
    return (
        <section className="pt-16 relative bg-gray-50 text-gray-800 pb-[452px] pb-[832px] ">
            <div className="relative max-w-[1740px] mx-auto flex flex-col md:flex-row">
                <div className="absolute left-[72px] top-1/2 -translate-y-1/2 font-urbanist font-bold text-[24px] leading-[32px] tracking-[-0.15%] text-[#1D2939]">
                    <h2>About our dream.</h2>
                    <h2>Our History.</h2>
                    <h2>Cinema.</h2>
                </div>

           <div className="absolute left-[516px] pt-[76px] md:static md:ml-[516px] md:w-3/5 px-4 py-10">
               <h1 className="font-urbanist font-bold text-[64px] leading-[76px] tracking-[-1%] text-[#1D2939] align-middle">
                   About Us
               </h1>
               <p className="font-urbanist font-normal text-[16px] tracking-[0.5%] text-[#1D2939] align-middle">
                   <br /> Welcome to Cinebh, where movie magic comes to life.<br />
                   At Cinebh, we're not just about screening films;
                   we're passionate about creating unforgettable cinematic experiences.
                   Since our establishment, we've been dedicated to providing our audience with top-quality entertainment
                   in a <br />comfortable and welcoming environment.<br />
                   Our state-of-the-art facilities boast the latest in audiovisual technology,
                   ensuring that every movie is presented with<br /> stunning clarity and immersive sound.
                   From the latest blockbusters to timeless classics,
                   our diverse selection of films<br /> caters to every taste and preference.<br /><br />

                   As a hub for community entertainment, we take pride in being more than just a cinema.<br />
                   Join us at Cinebh and discover why we're not just your average movie theater—we're your destination for cinematic <br />
                   excellence and entertainment bliss.
               </p>

           </div>
           </div>

           <div className="w-full absolute bottom-0 left-0">
               <img
                   src="/assets/images/about_us_photo_of_seats.jpg"
                   alt="Cinema background"
                   className=" w-full "
               />
           </div>
       </section>
    );
}