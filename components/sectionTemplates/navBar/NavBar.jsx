"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

const NavBar = ({ template_metadata, section_id, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isTemplateEditable } = useSelector(state => state?.templateData)

  // Optional: fallback title/logo from template_metadata
  const title = template_metadata?.name || "My Portfolio";
  const logo = template_metadata?.logo || "/assets/EP.png";

  
  return (
    <>
      <div className="w-full pt-4 pb-2 border-b border-gray-200 sticky top-0 z-40 bg-white">
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
            <span className="text-gray-800">{title}</span>
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
            {links?.map((link, index) => (
              <Link
                href={link?.href}
                id={section_id}
                key={index}
                className="hover:text-blue-500 active:scale-95"
              >
                { link?.label }
              </Link>
            ))}
          </nav>

        </div>
      </div>

      {/* Mobile navigation bar */}
      {isOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-950 backdrop:blur-lg bg-opacity-95 z-40 flex items-center justify-center md:hidden transition-all duration-300 ease-in-7">
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-4 right-4 p-2 rounded-md bg-gray-100 hover:bg-gray-200 active:scale-90"
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
          <nav className="md:hidden bg-white z-50 flex flex-col w-3/4 m-auto fixed max-h-fit top-0 bottom-0 left-0 right-0 rounded-lg">
            { links?.map((link, index) => (
              <Link 
                key={index} 
                href={link?.href} 
                id={section_id} 
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500 active:scale-95 px-4 py-3 rounded-lg hover:bg-gray-200"
              > 
                {link?.label} 
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
