'use server';

// This action fetches all templates from the database
import { createClient } from "@/lib/supabase/server";

export async function getAllTemplates() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('templates')
        .select('*')

    if (error) {
        console.error('Error fetching templates:', error);
        return { success: false, error: 'Failed to fetch templates' };
    }
    
    return { success: true, data };
}