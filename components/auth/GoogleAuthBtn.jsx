'use client'

import { createClient } from "@/lib/supabase/client"
import Image from "next/image"

const GoogleAuthBtn = ({ fromTemplate }) => {
    const supabase = createClient()

    const redirectUrl = fromTemplate 
        ? `${location.origin}/auth/google_auth_callback?from_template=${fromTemplate}`
        : `${location.origin}/auth/google_auth_callback` 

    
    // Function to handle authentication with google
    const handleGoogleAuth =  async () => {
        const {error} = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: redirectUrl
            },
        });

        if(error) {
            console.error("Error during Google login:", error.message);
            return;
        }
    }
  return (
    <button onClick={handleGoogleAuth} className="flex gap-4 items-center mt-10 whitespace-nowrap bg-white text-black justify-center border px-2 py-2 rounded-lg cursor-pointer hover:scale-95 active:scale-100 transition-all duration-300">
        <Image 
            width={1000} 
            height={1000} 
            alt="google logo" 
            src={'/assets/googleLogo.jpeg'} 
            className="w-10"
        />
        <p>Continue with google</p>
    </button>
  )
}

export default GoogleAuthBtn