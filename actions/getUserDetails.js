'use server'

import { cookies } from "next/headers"

export async function getUserDetails() {
    const cookie = await cookies()

    // Get the auth cookie that stores user information
    const authCookie = cookie.get('authState')?.value
    if (!authCookie) return null

    // Convert the JSON(authCookie) into an object
    try {
        const parsedCookie = JSON.parse(authCookie)
        return parsedCookie;
    } catch (error) {
        console.log('Error parsing auth cookie', error)
        return null;
    }
}