'use server'

import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

export async function logout(){
    const supabase = await createClient()
    const cookiesToClear = await cookies()

    const { error } = await supabase.auth.signOut()

    // Clear client-side cookies
    cookiesToClear.delete('authState')
    cookiesToClear.delete('sb-access-token')
    cookiesToClear.delete('sb-refresh-token')

    return { success: true, message: 'Logged out successfully'}
}