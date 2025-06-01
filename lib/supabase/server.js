import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";


// Function to create and return a Supabase server-side client instance
export async function createClient() {
    const cookieStore = await cookies(); // Get cookie store from the current request

    // Return a Supabase client configured for SSR(Server-Side Rendering)
    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            // Define how supabase should handle cookies for session management
            cookies: {
                getAll: () => cookieStore.getAll(), // For reading cookies

                // For setting cookies(e.g., after login or signup)
                setAll(cookiesToSet) {
                    try{
                        cookiesToSet.forEach(({ name, value, options }) => {
                            cookieStore.set(name, value, options);
                        })
                    } catch  {
                        // Handle error if needed
                    }
                }
            },
        }
    )
}