'use client'

import { useEffect, useState } from "react";
import RenderFields from "./RenderFields";

const SectionEditorDrawer = ({ section, onClose, onSave }) => {
  const [formData, setFormData] = useState({});

  // Load section props into local state
  useEffect(() => {
    if (section?.props) {
      setFormData(section.props);
    }
  }, [section]);

  const handleSubmit = () => {
    onSave(section.id, formData);
  };

  return (
    <div className="fixed top-0 right-0 w-[350px] max-w-full h-screen bg-white shadow-lg z-[999] px-6 py-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Edit Section: {section?.id}</h2>
        <button onClick={onClose} className="text-xl">✕</button>
      </div>

      {/* Render dynamic editable fields */}
      <RenderFields data={formData} onChange={setFormData} />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded w-full"
      >
        Save Changes
      </button>
    </div>
  );
};

export default SectionEditorDrawer;
