'use client'

import { use } from "react";

export default function TemplateEditingPage({ params }) {
  const resolvedParams = use(params)
  return (
    <div>
      Editing template with ID: {resolvedParams.templateId}
    </div>
  );
}
