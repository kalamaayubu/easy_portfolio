import { createClient } from "@/lib/supabase/server";
import TemplateEditingClient from "../TemplateEditingClient";
import ControlBtn from "@/components/client/editing/ControlBtn";

export default async function TemplateEditingPage({ params }) {
  const { templateId } = params;
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("templates")
    .select("template_body, id")
    .eq("id", templateId)
    .single();

  if (error || !data) {
    return <div>Error loading template</div>;
  }

  return (
    <div className="relative">
      <ControlBtn/>
      <TemplateEditingClient initialData={{ id: data.id, sections: data.template_body.sections }} />
    </div>
  ) 
}
