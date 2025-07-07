'use server'

import { createClient } from "@/lib/supabase/server";
import { getUser } from "../auth/getUser";

export async function publishPortfolio(templateData) {
    const supabase = await createClient();

    // Get userId from cookies
    const userData = await getUser()
    const { id } = userData?.user

    const { data, error } = await supabase
        .from("user_templates")
        .upsert(
            {
                author_id: id,
                template_id: templateData?.id,
                template_body: templateData
            },
            { onConflict: ['author_id', 'template_id'] } // Ensure it updates if the combination already exists
        )
        .select()
        .single()

    if (error) {
        console.log('Error publishing portfolio', error)
        return { success: false, error: error.message }
    }

    console.log('Portfolio published successfully:', data)
    return { success: true, data, message: "Portfolio published successfully" }
}