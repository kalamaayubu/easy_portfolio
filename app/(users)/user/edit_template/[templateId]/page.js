import { createClient } from "@/lib/supabase/server";
import TemplateEditingClient from "../TemplateEditingClient";
import ControlBtn from "@/components/client/editing/ControlBtn";

export default async function TemplateEditingPage({ params }) {
  const { templateId } = params;
  const supabase = await createClient();

  let templateData;

  // Check if the templateId is available in the user's templates first
  const { data: userTemplates, error: userError } = await supabase
    .from("user_templates")
    .select("template_id")
    .eq("template_id", templateId)
    .single();

  // If not in user_templates, fetch from templates table
  if (!userTemplates || userError) {
    const { data, error } = await supabase
    .from("templates")
    .select("template_body, id")
    .eq("id", templateId)
    .single();

    if (error || !data) {
      return <div>Error loading template</div>;
    }

    templateData = data;
  } else {
    // If found in user_templates, fetch full template data as well
    const { data, error } = await supabase
      .from("user_templates")
      .select("template_body, template_id")
      .eq("template_id", templateId)
      .single();

    if (error || !data) {
      return <div>Error loading user template</div>;
    }

    templateData= {
      id: data.template_id,
      template_body: data.template_body
    };
    // console.log("From user_templates table:", templateData);
  }

  return (
    <div className="relative">
      <ControlBtn templateId={templateId}/>
      <TemplateEditingClient 
        initialData={{ 
          id: templateData.id, 
          sections: templateData.template_body.sections 
        }} 
      />
    </div>
  ) 
}
