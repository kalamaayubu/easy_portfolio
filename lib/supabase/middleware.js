import { createServerClient } from "@supabase/ssr"; // Supabase helper for server-side usage
import { NextResponse } from "next/server"


// Handles session updates on the server side
export async function updateSession(request) {
    const { pathname } = request.nextUrl; // Get current request path

    // Create a default response to continue request handling
    let supabaseResponse = NextResponse.next({ request }); 

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll: () => request.cookies.getAll(), // Read cookies from the request

                // Set cookies in the response (to manage auth session)
                setAll(cookiesToSet) {
                    // 1: Update the request cookies
                    cookiesToSet.forEach(({ name, value, options }) => {
                        request.cookies.set(name, value)
                    })
                    // 2: Rebuild the response to ensure it reflects updated cookies
                    supabaseResponse = NextResponse.next({ request })

                    // 3: Apply updated cookies to the response so that client can get it
                    cookiesToSet.forEach(({ name, value, options }) => {
                        supabaseResponse.cookies.set( name, value, options )
                    });
                },
            },
        },
    );

    // Check for session cookie, if not available redirect to login
    const sessionCookie = request.cookies.get('sb-access-token')
    if (!sessionCookie) {
        if (!pathname.startsWith("/auth")) {
            return NextResponse.redirect(new URL("/auth/authentication", request.url));
        }
        return supabaseResponse;
    }

    // Get the user role from authState cookie
    const authStateCookie = request.cookies.get('authState')?.value;
    let role = undefined

    if (authStateCookie) {
        // Parse the cookie(authState cookie) and get the role
        try {
            const authState = JSON.parse(decodeURIComponent(authStateCookie))
            role = authState?.role
            if (!role) {
                return NextResponse.redirect(new URL("/auth/authentication"))
            }
        } catch (error) {
            console.error("Failed to parse authState cookie:", error);
        }
    }

    // Role-based redirection
    if (pathname.startsWith('/admin') && role !== "admin") {
        return NextResponse.redirect(new URL(`/${role}/dashboard`, request.url))
    }
    if (pathname.startsWith('/user') && role !== 'user') {
        return NextResponse.redirect(new URL (`/${role}/dashboard`, request.url))
    }

    return supabaseResponse;
}