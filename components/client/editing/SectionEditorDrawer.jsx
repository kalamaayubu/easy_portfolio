'use client'

import { useEffect, useRef, useState } from "react";
import RenderFields from "./RenderFields";
import TemplateControls from "./TemplateControls";

const SectionEditorDrawer = ({ section, onClose, onSave }) => {
  const [formData, setFormData] = useState({});
  const scrollRef = useRef(null);

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
    <div ref={scrollRef} className="fixed top-0 right-0 w-[350px] max-w-full h-screen bg-white shadow-lg z-[999] px-6 py-4 pb-10 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Edit Section: {section?.id}</h2>
        <button onClick={onClose} className="p-0 bg-white text-gray-500 hover:text-black">✕</button>
      </div>

      <button
        onClick={handleSubmit}
        className="px-4 py-2 mb-4 w-full"
      >
        Save Changes
      </button>

      {/* Render section controls(Add/remove) */}
      <TemplateControls 
        section={section} 
        formData={formData} 
        setFormData={setFormData}
        scrollRef={scrollRef} // Pass scrollRef 
      />

      {/* Render dynamic editable fields */}
      <RenderFields data={formData} onChange={setFormData} />
    </div>
  );
};

export default SectionEditorDrawer;
