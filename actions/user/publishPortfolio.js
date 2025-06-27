'use server'

import { createClient } from "@/lib/supabase/server";
import { getUser } from "../auth/getUser";

export async function publishPortfolio(templatedata) {
    const supabase = await createClient();

    // Get userId from cookies
    const userData = await getUser()
    const { id } = userData?.user

    const { data, error } = await supabase
        .from("user_templates")
        .insert([{ author_id: id, template_id: templatedata?.id, template_body: templatedata }])
        .select()
        .single()

    if (error) {
        console.log('Error publishing portfolio')
        return { success: false, error: error.message }
    }

    console.log('Portfolio published successfully:', data)
    return { success: true, data, message: "Portfolio published successfully" }
}