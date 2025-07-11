'use client'

import _set from "lodash/set"; // Utility functions to safely set nested properties in an object
import _get from "lodash/get"; // Utility functions to safely get nested properties in an object
import cloneDeep from "lodash/cloneDeep"; // Utility to create a deep copy of the data to prevent direct mutation
import fieldLabels from "./fieldLabels";

const RenderFields = ({ data, onChange, path = "" }) => {
  const handleChange = (fieldPath, value) => {
    const updated = cloneDeep(data);
    _set(updated, fieldPath, value);
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

        console.log("Image Field Check:", isImageField);

      return (
        <div key={fullPath} className="mb-4">
          <label className="text-sm text-gray-600 block mb-1">{label}</label>
          {/* Render textarea for a long text */}
          {isLongText ? (
            <textarea
              value={value ?? ""}
              onChange={(e) => handleChange(fullPath, e.target.value)}
              className="w-full h-fit px-3 py-2 border rounded"
            />
          ) : isImageField ? (
            // Render file input for images
            <>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  const reader = new FileReader();
                  reader.onload = () => {
                    if (reader.result) {
                      handleChange(fullPath, reader.result);
                    }
                  };
                  reader.readAsDataURL(file);
                }}
                className="w-full px-3 py-2 border rounded"
              />
              {value && (
                <img
                  src={value?.trim?.() || "/assets/heroBg2.jpg"}
                  alt="preview"
                  className="mt-2 max-w-full max-h-32 rounded-md border"
                />
              )}
            </>
          ) : (
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
