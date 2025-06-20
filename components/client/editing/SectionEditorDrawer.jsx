'use client'

import { useEffect, useState } from "react";

const SectionEditorDrawer = ({ section, onClose, onSave }) => {
  const [formData, setFormData] = useState({});

  // Set initial form data when section changes
  useEffect(() => {
    if (section?.props) {
      setFormData(section.props);
    }
  }, [section]);

  // Handle form input changes
  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value}));
  };

  // Handle form submission
  const handleSubmit = () => {
    onSave(section.id, formData);
  };

  return (
    <div className="fixed top-0 right-0 w-[350px] max-w-full h-screen bg-white shadow-lg z-[999] px-6 py-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Edit Section: {section?.id}</h2>
        <button onClick={onClose}>✕</button>
      </div>

      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="mb-4">
          <label className="text-sm text-gray-600">{key}</label>
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
            className="w-full px-3 py-2 border rounded mt-1"
          />
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded w-full"
      >
        Save Changes
      </button>
    </div>
  )
}

export default SectionEditorDrawer