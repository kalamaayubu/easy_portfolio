import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function GET (req) {
    const supabase = await createClient()
    const url = new URL(req.url);
    const code = url.searchParams.get("code")
    console.log("OAuth code received:", code);

    if (!code) {
        console.error("Missing OAuth code in URL.");
        return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    // Exchange the OAuth code for a session
    const {data, error:exchangeError} = await supabase.auth.exchangeCodeForSession(code)
    console.log("Session data:", data);
    if (exchangeError || !data) {
        console.error("Error exchanging code for session:", exchangeError?.message);
        return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    // Destructure tokens from the session object in the data
    const { access_token, refresh_token } = data.session

    const cookieStore = await cookies()
    
    // Set auth cookies(refresh and access tokens)
    cookieStore.set('sb-access-token', access_token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 5, // Five hours
        sameSite: 'strict'
    });

    // The refresh token
    cookieStore.set('sb-refresh-token', refresh_token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    // Get the authenticated user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
        console.error("Error fetching authenticated user:", userError?.message || "No user returned");
        return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    console.log('USER DATA:', user)

    // Feth the user role from the profiles table
    const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select("role")
        .eq("id", user.id)
        .maybeSingle()

        console.log("Profile data:", profile);

    if (profileError || !profile?.role) {
        console.error("Error fetching user role from profiles table:", profileError?.message);
        return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    if (!profile?.role) {
        console.error("Role not found in this profile:", profileError?.message);
        return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    // Set the authState cookie with the user role
    cookieStore.set({
        name: "authState",
        value: (JSON.stringify({
            isAuthenticated: true,
            user,
            role: profile.role
        })),
        path: "/", // Cookie is available throught the app
        httpOnly: true, // Prevent access from javascript(more secure)
        secure: process.env.NODE_ENV === "production",
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7
    });

    // Construct the redirect URL based on the user's 
    let redirectUrl = "/auth/authentication"

    switch (profile.role) {
        case "admin":
            redirectUrl = "/admin/dashboard";
            break;
        case "user":
            redirectUrl = "/user/dashboard";
            break;
    }

    // The response to be sent back to the client
    console.log("Redirecting to:", redirectUrl);
    return NextResponse.json({ redirectUrl });
}