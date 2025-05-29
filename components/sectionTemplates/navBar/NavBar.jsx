"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full pt-4 pb-2 border-b border-gray-200 sticky">
        <div className="flex w-[98%] m-auto justify-between items-center">
          <div className="text-white text-lg font-bold flex items-center gap-2">
            <Image
              src={"/assets/EP.png"}
              width={1000}
              height={1000}
              alt="Logo"
              className="h-14 w-auto"
              priority
            />
            <span className="text-gray-800">Easy Portfolio</span>
          </div>
          {/* Mobile navigation menu */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md bg-gray-100 hover:bg-gray-200 active:scale-90 mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop navigation menu */}
          <nav className="gap-4 px-4 hidden md:flex">
            <Link
              href="/"
              id="home"
              className="hover:text-blue-500 active:scale-95"
            >
              Home
            </Link>
            <Link
              href="/template_test"
              id="contacts"
              className="hover:text-blue-500 active:scale-95"
            >
              Contacts
            </Link>
            <Link
              href="/template_test"
              id="technology"
              className="hover:text-blue-500 active:scale-95"
            >
              Technology
            </Link>
            <Link
              href="/template_test"
              id="services"
              className="hover:text-blue-500 active:scale-95"
            >
              Services
            </Link>
            <Link
              href="/template_test"
              id="projects"
              className="hover:text-blue-500 active:scale-95"
            >
              Projects
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile navigation bar */}
      {isOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-950 bg-opacity-90 z-30 flex items-center justify-center md:hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-md bg-gray-100 hover:bg-gray-200 active:scale-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="md:hidden bg-white z-50 flex flex-col w-3/4 m-auto top-20 bottom-0 left-0 right-0 rounded-lg">
            <Link
              href="/"
              id="home"
              className="hover:text-blue-500 active:scale-95 px-4 py-3 hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              href="/template_test"
              id="contacts"
              className="hover:text-blue-500 active:scale-95 px-4 py-3 hover:bg-gray-100"
            >
              Contacts
            </Link>
            <Link
              href="/template_test"
              id="technology"
              className="hover:text-blue-500 active:scale-95 px-4 py-3 hover:bg-gray-100"
            >
              Technology
            </Link>
            <Link
              href="/template_test"
              id="services"
              className="hover:text-blue-500 active:scale-95 px-4 py-3 hover:bg-gray-100"
            >
              Services
            </Link>
            <Link
              href="/template_test"
              id="projects"
              className="hover:text-blue-500 active:scale-95 px-4 py-3 hover:bg-gray-100"
            >
              Projects
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
