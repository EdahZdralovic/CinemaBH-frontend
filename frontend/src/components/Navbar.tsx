


    export default function Navbar(){
        return(
            <nav className="fixed top-0 left-0 w-full h-[80px] bg-[rgba(29,41,57,1)] text-white flex items-center justify-between px-10 z-50 font-[Urbanist] border-b border-white">

               <a href="/">
                   <div className="flex items-center gap-2 pl-[92px]">
                       <img
                           src="/assets/logos/Logo.png"
                           alt="CineBH Logo"
                           width={130}
                           height={32}
                           className="object-contain"
                       />
                   </div>
                </a>

                <div className="absolute left-1/2 gap-4 transform -translate-x-1/2 hidden md:flex items-center text-sm ">
                    <a href="/showing" className=" hover:font-semibold hover:underline underline-offset-4 hover:-mx-[2px]">
                        Currently Showing
                    </a>
                    <a href="/upcoming" className="hover:text-white hover:font-semibold hover:underline underline-offset-4 hover:-mx-[2px]">
                        Upcoming Movies
                    </a>
                    <a href="/venues" className="hover:text-white hover:font-semibold hover:underline underline-offset-4 hover:-mx-[1px]">
                        Venues
                    </a>
                </div>

            </nav>
            //missing login button but coming in the future

        );

    }