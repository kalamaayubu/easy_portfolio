"use client";

import { SECTION_MAP } from "@/lib/sectionMap";

const TemplateRender = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => {
        const Component = SECTION_MAP?.[section.id]?.section.variant ?? null;
        if (!Component) return null;
        return <Component key={index} {...section.props} />;
      })}
    </div>
  );
};

export default TemplateRender;
