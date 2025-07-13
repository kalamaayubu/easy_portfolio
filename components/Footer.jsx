import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon, TelegramIcon, TwitterIcon, WhatsappIcon } from "react-share";

const Footer = () => {
  return (
    <>
    <div id="footer" className="w-full bg-gray-200 mt-20 p-4 pb-0 px-0 lg:pb-4">
      <div className="max-w-[1280px] m-auto flex flex-col">
        <div className="flex flex-col lg:items-start mb-20">
          <div className="flex items-end">
            <Image 
              height={200} 
              width={200} 
              src={'/assets/EP.png'} 
              className="w-28 -rotate-90"
            />
            <p className="-translate-y-6 -translate-x-6 flex">@ <Link href={'https://easyportfolioo.netlify.app'} className="hover:text-blue-600">easyportfolioo.netlify.app</Link></p>
          </div>
          <p className="translate-x-6 -translate-y-5"> #Build Your  <span className="purple-gradient-text">Portfolio</span> in Minutes</p> 
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
