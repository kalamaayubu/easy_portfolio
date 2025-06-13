'use client'

import { logout } from "@/actions/auth/logout"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LogoutBtn = () => {
    const [isProcessing, setIsProcessing] = useState(false)
    const router = useRouter()

    const handleLogout = async () => {
        setIsProcessing(true)
        
        await logout(); // Call the logout server action

        // Redirect user to login page or home
        router.push('/')
        setIsProcessing(false)
    }
  return (
    <button onClick={handleLogout} className="hover:animate-pulse">
        {isProcessing ? <Loader2 className="animate-spin text-white"/> : "Logout"}
    </button>
  )
}

export default LogoutBtn