"use client";

import { SECTION_MAP } from "@/lib/sectionMap";

const TemplateRender = ({sections = []}) => {
  console.log(`SECTIONS: ${JSON.stringify(sections)}`)

  return (
    <div className="p-4 bg-red-700">
      {Array.isArray(sections) &&
        sections.map((section, index) => {
          const Component = SECTION_MAP?.[section.id]?.section?.variant ?? null;
          if (!Component) return null;
          return <Component key={index} {...section.props} />;
        })}
    </div>
  );
};

export default TemplateRender;
