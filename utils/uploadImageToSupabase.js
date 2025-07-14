import { createClient } from "@/lib/supabase/client";

/**
 * Uploads an image file to Supabase Storage with a deterministic, overwritable path.
 * 
 * @param {File} file - The image file to upload.
 * @param {string} userId - The ID of the user uploading the image.
 * @param {string} templateId - The ID of the template from which the image is being uploaded.
 * @param {string} sectionId - The section ID where the image belongs (e.g., "hero", "projects")
 * @param {string} imageKey - - The image slot name (e.g., "bg", "project-0")
 * @return {Promise<string>} - The public URL of the uploaded image.
 */

export const uploadImageToSupabase = async (file, userId, templateId, sectionId, imageKey) => {
    const supabase = createClient()

    const fileExtension = file.name.split('.').pop(); // Get the file extension
    const fileName = `${imageKey}.${fileExtension}`; // Create a unique file name
    const filePath = `images/${userId}/${templateId}/${sectionId}/${fileName}`; // Define the path in Supabase storage

    console.log(`Uploading image to Supabase: ${filePath}`);

    // Upload with upsert to overwrite any existing image in the same path
    const { error } = await supabase.storage
        .from("user-templates.images")
        .upload(filePath, file, { upsert: true});

    if (error) throw new Error("Upload failed: " + error.message);

    // Get the public URL of the uploaded image
    const { data } = supabase.storage
        .from("user-templates.images")
        .getPublicUrl(filePath);

    return `${data.publicUrl}?t=${Date.now()}`;
}