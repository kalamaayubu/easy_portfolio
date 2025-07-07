'use server'

import { createClient } from "@/lib/supabase/server"

// This function fetches a template by its ID from the 'user_templates' table
export async function getTemplateToView(userName, templateId) {
    const supabase = await createClient()

    // Perform a join query to fetch template data, template_id, and username(from profiles table)
    const { data, error } = await supabase
        .from('user_templates')
        .select(`
            id, template_id, author_id, template_body,
            profiles(
                username
            )
        `)
        .eq('template_id', templateId)
        .eq('profiles.username', userName)

    if (error) {
        console.error('Error fetching template:', error)
        return { error: 'Failed to fetch template' }
    }

    // Return the fetched template data
    return { data }
}