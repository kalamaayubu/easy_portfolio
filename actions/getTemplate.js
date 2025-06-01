'use server';


// This action fetches a specific template by its ID from the database
import { createClient } from "@/lib/supabase/server";

export async function getTemplate(templateId) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('templates')
        .select('*')
        .eq('id', templateId)
        .single();

    if (error) {
        console.error('Error fetching template:', error);
        return { success: false, error: 'Failed to fetch template' };
    }

    return { success: true, data };
}
