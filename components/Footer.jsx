import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon, TelegramIcon, TwitterIcon, WhatsappIcon } from "react-share";

const Footer = () => {
  return (
    <>
    <div id="footer" className="w-full bg-gray-200 mt-20 p-4 pb-0 px-0 lg:pb-4">
      <div className="max-w-[1280px] m-auto flex flex-col">
        <div className="flex flex-col lg:items-start mb-20 ml-3">
          <div className="items-center flex">
            <Image
                src={"/assets/EP.png"}
                width={1000}
                height={1000}
                alt="Logo"
                className="w-16 -rotate-90"
            />
            <span className=" text-[18px] font-bold purple-gradient-text italic sm:flex">
                Easy Portfolio
            </span>
          </div>
          <p className="translate-x-3"> #Build Your Portfolio in Minutes</p> 
        </div>

        <div className="flex flex-col lg:flex-row border-t border-gray-500 lg:items-center justify-between ml-6">
          <p className="text-gray-700 text-sm">
            © {new Date().getFullYear()} Easy Portfolio. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 ">
            Build with ❤️ by Easy portfolio team
          </p>
          <div className="flex flex-nowrap items-end w-fit">
            <TwitterIcon className="rounded-full p-4 hover:cursor-pointer hover:scale-90 transition-all duration-300"/>
            <LinkedinIcon className="rounded-full p-4 hover:cursor-pointer hover:scale-90 transition-all duration-300"/>
            <WhatsappIcon className="rounded-full p-4 hover:cursor-pointer hover:scale-90 transition-all duration-300"/>
            <TelegramIcon className="rounded-full p-4 hover:cursor-pointer hover:scale-90 transition-all duration-300"/>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="h-1 w-full purple-gradient-card"/> */}
    </>
  );
};

export default Footer;
