'use client'

import _set from "lodash/set";

const RenderFields = ({ data, onChange, path = "" }) => {
  // Unified change handler for deeply nested updates
  const handleChange = (fieldPath, value) => {
    const updated = { ...data };
    _set(updated, fieldPath, value);
    onChange(updated);
  };

  const renderField = (key, value, currentPath) => {
    const fullPath = path ? `${path}.${key}` : key;

    if (typeof value === "string" || typeof value === "number") {
      return (
        <div key={fullPath} className="mb-4">
          <label className="text-sm text-gray-600">{fullPath}</label>
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(fullPath, e.target.value)}
            className="w-full px-3 py-2 border rounded mt-1"
          />
        </div>
      );
    }

    if (Array.isArray(value)) {
      return (
        <div key={fullPath} className="mb-4 border p-2 rounded bg-gray-50">
          <label className="text-sm text-gray-600 block mb-2">{key}</label>
          {value.map((item, index) => (
            <div key={`${fullPath}[${index}]`} className="pl-2 border-l mb-3">
              {Object.entries(item).map(([k, v]) =>
                renderField(k, v, `${fullPath}[${index}]`)
              )}
            </div>
          ))}
        </div>
      );
    }

    if (typeof value === "object" && value !== null) {
      return (
        <div key={fullPath} className="mb-4 border p-2 rounded bg-gray-50">
          <label className="text-sm text-gray-600 block mb-2">{key}</label>
          <div className="pl-2 border-l">
            {Object.entries(value).map(([k, v]) =>
              renderField(k, v, fullPath)
            )}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {Object.entries(data).map(([key, value]) => renderField(key, value, path))}
    </>
  );
};

export default RenderFields;
