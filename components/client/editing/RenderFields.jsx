'use client'

import _set from "lodash/set"; // Utility functions to safely set nested properties in an object
import _get from "lodash/get"; // Utility functions to safely get nested properties in an object
import cloneDeep from "lodash/cloneDeep"; // Utility to create a deep copy of the data to prevent direct mutation
import fieldLabels from "./fieldLabels";
import { getUser } from "@/actions/auth/getUser";
import { uploadImageToSupabase } from "@/utils/uploadImageToSupabase";
import { useState } from "react";
import { toast } from "sonner";
import imageCompression from "browser-image-compression"; // Library to compress images in the browser

const RenderFields = ({ data, onChange, path = "" }) => {
    const [isUploading, setIsUploading] = useState(false); // 👈 Uploading state

  const handleChange = (fieldPath, value) => {
    /* 
      Create a deep copy of the data to avoid direct mutation to ensure reactivity
      (react detects changes and re-render components) 
    */
    const updated = cloneDeep(data);
    _set(updated, fieldPath, value); // Update a deeply nested field based on a string path
    onChange(updated);
  };

  // Recursive function to render fields based on their type(string, number, boolean, array, object)
  const renderField = (key, _, currentPath) => {
    const fullPath = currentPath ? `${currentPath}.${key}` : key;
    const value = _get(data, fullPath);

    // Use fieldLabels to get a user-friendly label for the field
    const normalizedPath = fullPath.replace(/\[\d+\]/g, ""); // Remove array index from path eg [0], [1], etc.
    const label = fieldLabels[normalizedPath] || fieldLabels[key] || normalizedPath;

    // Render string or number as a text input and image as file input
    if (typeof value === "string" || typeof value === "number") {
      const isImageField =
        key.toLowerCase().includes("image") ||
        key.toLowerCase().includes("logo") ||
        key.toLowerCase().includes("avatar") ||
        /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i.test(value);

      const isLongText = 
        key.toLowerCase().includes("description") ||
        key.toLowerCase().includes("content");

      // Render text input or textarea for long text
      return (
        <div key={fullPath} className="mb-4">
          <label className="text-sm text-gray-600 block mb-1">{label}</label>
          {/* Render textarea for a long text */}
          {isLongText ? (
            <textarea
              value={value ?? ""}
              onChange={(e) => handleChange(fullPath, e.target.value)}
              className="w-full min-h-40 px-3 py-2 border rounded"
            />
          ) : isImageField ? (
            // Render file input for images
            <>
              <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  // Check if the file is an image
                  if (!file.type.startsWith("image/")) {
                    toast.error("Please select a valid image file.");
                    return;
                  }

                  // Try to compress the image before uploading
                  const compressedFile = await imageCompression(file, {
                    maxSizeMB: 0.8, // Compress to less than 800KB
                    maxWidthOrHeight: 1920, // Resize to a maximum width or height of 1920px
                    initialQuality: 0.8, // Initial quality for compression
                    useWebWorker: true, // Use web worker for compression to avoid blocking the main thread
                  });


                  // Check the image size
                  const imageSize = file.size / 1024; // Convert size to KB

                  // Check if the file size is less than 800KB
                  if (compressedFile.size > 800 * 1024) {
                    toast.error(`Your image is ${Math.round(imageSize)}KB, which is too large, try with an image of size less than 800KB.`);
                    return;
                  }

                  // Get user ID for the image path
                  const data = await getUser();
                  const userId = data?.user?.id

                  try {
                    setIsUploading(true)

                    // Upload the image to Supabase and get the public URL
                    const publicUrl = await uploadImageToSupabase(file, userId);
                    handleChange(fullPath, publicUrl);
                  } catch (error) {
                    console.error("Error uploading image:", error);
                    return;
                  } finally {
                    setIsUploading(false);
                  }
                }}
                className="w-full px-3 py-2 border rounded"
              />

              {/* 👇 Uploading Indicator */}
              {isUploading && (
                <p className="text-xs purple-gradient-text mt-2 animate-pulse">Uploading image...</p>
              )}

              {value && (
                <img
                  src={value?.trim?.() || "/assets/heroBg2.jpg"}
                  alt="preview"
                  className="mt-2 max-w-full max-h-32 rounded-md border"
                />
              )}
            </>
          ) : (
            // Render text input for regular strings or numbers
            <input
              type="text"
              value={value ?? ""}
              onChange={(e) => handleChange(fullPath, e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          )}
        </div>
      );
    }

    // Render boolean as a checkbox
    if (typeof value === "boolean") {
      return (
        <div key={fullPath} className="mb-4">
          <label className="text-sm text-gray-600 mr-2">{label}</label>
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => handleChange(fullPath, e.target.checked)}
          />
        </div>
      );
    }

    // Render arrays as a list of nested fields
    if (Array.isArray(value)) {
      return (
        <div key={fullPath} className="mb-4 border p-2 rounded bg-gray-50">
          <label className="text-sm text-gray-600 block mb-2">{label}</label>
          {value.map((_, index) => (
            <div key={`${fullPath}[${index}]`} className="pl-2 border-l mb-3">
              {Object.keys(value[index] || {}).map((k) =>
                renderField(k, null, `${fullPath}[${index}]`)
              )}
            </div>
          ))}
        </div>
      );
    }

    // Render objects as nested fields
    if (typeof value === "object" && value !== null) {
      return (
        <div key={fullPath} className="mb-4 border p-2 rounded bg-gray-50">
          <label className="text-sm text-gray-600 block mb-2">{label}</label>
          <div className="pl-2 border-l">
            {Object.keys(value).map((k) =>
              renderField(k, null, fullPath)
            )}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {Object.keys(data).map((key) => renderField(key, null, path))}
    </>
  );
};

export default RenderFields;
