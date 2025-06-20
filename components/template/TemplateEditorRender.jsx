'use client'

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateSection } from "@/app/redux/slices/templateDataSlice"
import SectionRender from "../SectionRender"
import SectionEditorDrawer from "../client/editing/SectionEditorDrawer"

const TemplateEditorRender = () => {
  const dispatch = useDispatch()
  const { sections, isTemplateEditable } = useSelector(state => state.templateData);
  const [selectedSection, setSelectedSection] = useState(null);

  // Guard against mismatch: wait for sections to load
  if (!sections || sections.length === 0) {
    return <div className="text-center text-gray-500 py-10">Loading template...</div>;
  }

  // Handle section click to open the editor drawer/panel
  const handleSectionClick = (section) => {
    if (isTemplateEditable) {
      setSelectedSection(section);
    }
  };

  // Handle saving the section after editing
  const handleSave = (section_id, newProps) => {
    dispatch(updateSection({ sectionId: section_id, newProps }));
    setSelectedSection(null);
  };
  
  return (
    <div>
      { sections?.map((section) => (
        <div key={section.id} onClick={() => handleSectionClick(section)}>
            <SectionRender {...section}/>
        </div>
      ))}

      {selectedSection && (
        <SectionEditorDrawer
          section={selectedSection}
          onSave={handleSave}
          onClose={() => setSelectedSection(null)}
        />
      )}
    </div>
  )
}
export default TemplateEditorRender