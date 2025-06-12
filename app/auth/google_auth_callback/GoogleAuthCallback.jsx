'use client'

import { Settings } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const GoogleAuthCallback = () => {
    const [redirectUrl, setRedirectUrl] = useState(null);
    const [attempts, setAttempts] = useState(0);
    const router = useRouter()
    const code = useSearchParams().get("code");
    const path = usePathname();

    useEffect(() => {
      const handleRedirect = async () => {
        // Fetch the redirect URL from the server
        const response = await fetch(`/api/auth/google_auth_callback?code=${code}`);

        console.log("Response from server:", response)
        if (!response.ok) {
          console.error("Failed to fetch redirect URL")
          return;
        }

        const data = await response.json();
        const redirectUrl = data.redirectUrl;

        setRedirectUrl(redirectUrl)
        console.log("Redirect URL:", redirectUrl)

        while(path.startsWith("/auth")) {
          console.log("Redirecting to:", redirectUrl)
          setTimeout(() => {
            router.push(redirectUrl);
          }, 100)
        }
      };

      handleRedirect()
    }, [router, path, code])

    // Make 3 redirect attempts to the desired dashboard
    useEffect(() => {
      if (!redirectUrl || !path.startsWith("/auth/google_auth_callback")) return;

      const interval = setInterval(() => {
        setAttempts((prev) => prev + 1);
        console.log(`Redirect attempt ${attempts + 1} to ${redirectUrl}`);
        router.push(redirectUrl);

        // Stop after 3 redirect attempts
        if (attempts >= 3) {
          clearInterval(interval)
        }
      }, 500);

      return () => clearInterval(interval)
    }, [redirectUrl, path, attempts, router])
  return (
    <div className="relative">
      <div className="fixed inset-0 bg-black opacity-80 backdrop:blur-3xl flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg flex flex-col">
          <Settings className="size-16 m-auto text-gray-800" style={{ animation: "spin 2.5s linear infinite" }}/>
          <p className="text-center">
            We are redirecting you to your dashboard. 
          </p>
          <p>If this takes too long, click&nbsp; 
            <Link href={`${redirectUrl}`} className="text-blue-600 hover:underline">here</Link> to navigate manually.</p>
        </div>
      </div>
    </div>
  )
}

export default GoogleAuthCallback