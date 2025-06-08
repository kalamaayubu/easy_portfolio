"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const dontShowNavBar = pathname.includes("/template_test") || pathname.startsWith("/templates/")
  // Prevent rendering navbar on template testing page
  if (dontShowNavBar) return null;

  return (
    <section className="sticky z-50 flex items-center justify-self-center justify-between w-[88%] max-w-[650px] bg-gray-300 bg-opacity-70 backdrop-blur-md px-3 top-6 rounded-xl bottom-0 gap-10 mb-12 sm:mb-14 md:mb-16 lg:mb-18">
      <div className="items-center align-self-start flex">
        <Image
          src={"/assets/EP.png"}
          width={1000}
          height={1000}
          alt="Logo"
          className="w-10"
        />
        <span className="font-bold text-[20px] hidden sm:flex">
          Easy Portfolio
        </span>
      </div>
      <nav className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 items-center justify-center align-items-end">
        <Link
          href={"/"}
          className="active:scale-95 transition-all duration-300"
        >
          Home
        </Link>
        <Link href={"/"}>
          <button className="hover:bg-white border bg-black border-gray-900 hover:text-black rounded-xl px-5">
            Login
          </button>
        </Link>
      </nav>
    </section>
  );
};

export default NavBar;
