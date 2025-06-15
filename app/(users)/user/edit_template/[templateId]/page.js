import { use } from "react";
import TemplateEditingClient from "../TemplateEditingClient";

export default function TemplateEditingPage({ params }) {
  const { templateId } = use(params);

  return (
    <TemplateEditingClient templateId={templateId}/>
  );
}