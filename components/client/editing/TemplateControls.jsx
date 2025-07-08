"use client"

import { addItemToSection, removeItemFromSection } from "@/utils/templateEditingControls";

const TemplateControls = ({ section, formData, setFormData, scrollRef }) => {
  if (!section?.id) return null;

  const controls = {
    navbar: {
        path: "links",
        defaultItem: { href: "#", label: "New Link" },
        label: "Navbar Link",
    },
    projects: {
        path: "items",
        defaultItem: { 
            title: "New Project",
            link: "",
            image: "/placeholder.png",
            description: ""
        }
    },
    // Other sections can be added here
  };

  const control = controls[section.id];
  if (!control) return null;
  return (
    <div className="flex justify-between items-center mb-4">
        <button
            onClick={() => {
                addItemToSection({
                    section,
                    path: control.path,
                    defaultItem: control.defaultItem,
                    onChange: setFormData,
                })  

                // Scroll to the bottom after adding a new item
                setTimeout(() => {
                    if (scrollRef?.current) {
                        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                    }
                }, 100);
            }}
            className="text-sm bg-green-600 text-white px-3 py-1 rounded"
        >
            ➕
        </button>
        <button 
            onClick={() => removeItemFromSection({
                section,
                path: control.path,
                index: (formData[control.path]?.length || 1) - 1,
                onChange: setFormData,
            })}
            className="text-sm bg-red-500 text-white px-3 py-1 rounded"
        >
            ❌
        </button>
    </div>
  )
}

export default TemplateControls