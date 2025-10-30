

export default function Footer() {
    return (
        <footer className="relative h-[212px] bottom-0 pt-14 flex flex-col gap-4 left-0 w-full bg-[linear-gradient(to_right,rgba(26,26,26,1),rgba(178,34,34,1))] ">
          <div className="font-[Urbanist] text-white items-center justify-center text-center">

              <a href="/">
                  <div className="flex items-center justify-center">
                      <img
                          src="/assets/logos/Logo-white.png"
                          alt="CineBH Logo"
                          className="h-[32px] w-[130px] object-contain"
                      />
                  </div>
              </a>

              <div className="flex items-center justify-center gap-6 pt-4 text-[12px] text-white font-[Urbanist]">
                  <a href="/aboutus" className="hover:underline font-bold">
                      ABOUT US
                  </a>
                  <div className="w-[1px] h-[16px] bg-white opacity-100 rotate-0"></div>
                  <a href="/tickets" className="hover:underline font-bold">
                      TICKETS
                  </a>
              </div>
            <div className="pt-4 ">
                <p className="text-[14px] font-normal font-weight: 400">
                    Copyright @CineBh. Built with love in Sarajevo. All rights reserved.
                </p>
            </div>
        </div>
        </footer>
    );
}
