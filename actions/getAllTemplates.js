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
    
    console.log(`DATA FROM DATA SOURCE: ${JSON.stringify(data)}`)
    return { success: true, data };
}