"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutBtn from "./auth/LogoutBtn";
import { useEffect, useState } from "react";
import { getUser } from "@/actions/auth/getUser";
import { Loader2 } from "lucide-react";

const NavBar = () => {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  // Check if user is authenticated and render the appropriate button
  useEffect(() => {
    const checkAuthentication = async () => {
      const user = await getUser()
      if (!user) {
        return setIsAuthenticated(false)
      }
      setIsAuthenticated(true)
    }
      
      checkAuthentication()
  }, [pathname]);

  // Pages on which to exclude the NavBar
  const usernameTemplateRegex = /^\/[^/]+\/[^/]+$/;

  const dontShowNavBar = 
  pathname.includes("/template_test") || 
  pathname.startsWith("/templates/") || 
  pathname.startsWith("/auth") ||
  pathname.startsWith("/user/edit_template") ||
  usernameTemplateRegex.test(pathname) // ✅ matches /[username]/[templateId]

  if (dontShowNavBar ) return null;

  return (
    <section className="sticky z-50 flex items-center justify-self-center justify-between w-[88%] max-w-[650px] bg-gray-200 bg-opacity-90 backdrop-blur-sm px-3 top-6 rounded-xl p-1 bottom-0 gap-10 mb-10 sm:mb-12 md:mb-14 lg:mb-16">
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
        {isAuthenticated ? (
          <LogoutBtn/>
        ) : (
          <Link href={"/auth/authentication"}>
            <button className="hover:bg-white border bg-black border-gray-900 hover:text-black rounded-xl px-5">
              {isAuthenticated == null ? (
                <Loader2 className="animate-spin text-white"/>
              ) : (
                "Login"
              )}
            </button>
          </Link>
        )}
      </nav>
    </section>
  );
};

export default NavBar;