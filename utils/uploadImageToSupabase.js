import { createClient } from "@/lib/supabase/client";


export const uploadImageToSupabase = async (file, userId) => {
    const supabase = createClient()

    const fileExtension = file.name.split('.').pop(); // Get the file extension
    const fileName = `${Date.now()}.${fileExtension}`; // Create a unique file name
    const filePath = `images/${userId}/${fileName}`; // Define the path in Supabase storage

    console.log(`Uploading image to Supabase: ${filePath} + ${fileName} + ${fileExtension}`);

    const { error } = await supabase.storage
        .from("user-templates.images")
        .upload(filePath, file);

    if (error) throw new Error("Upload failed: " + error.message);

    const { data } = supabase.storage
        .from("user-templates.images")
        .getPublicUrl(filePath);

    return data.publicUrl
}