import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full px-6 py-4">
      <div className="flex w-[98%] m-auto justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Image
            src={"/assets/EP.png"}
            width={1000}
            height={1000}
            alt="Logo"
            className="h-8 w-auto"
            priority
          />
        </div>

        <nav className="bg-gray-800">
          <Link href="/" className="text-white mr-4">
            Home
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
