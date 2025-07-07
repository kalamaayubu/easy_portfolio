import { createClient } from "@/lib/supabase/server";
import TemplateEditingClient from "../TemplateEditingClient";
import ControlBtn from "@/components/client/editing/ControlBtn";
import { getUser } from "@/actions/auth/getUser";

export default async function TemplateEditingPage({ params }) {
  const { templateId } = await params;
  const supabase = await createClient();

  // Fetch user details to get the full name
  const userDetails = await getUser();
  const userName = userDetails.user.user_metadata.full_name;

  // Sanitize the user name by removing spaces and converting to lowercase
  const sanitizedUserName = userName.replace(/\s+/g, "").toLowerCase();
  console.log("Sanitized User Name:", sanitizedUserName);

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
    .select(`
      template_body, id,
      profiles(username)
    `)
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
    <div className="relative cursor-default">
      <ControlBtn templateId={templateId} userName={sanitizedUserName}/>
      <TemplateEditingClient 
        initialData={{ 
          id: templateData.id, 
          sections: templateData.template_body.sections 
        }} 
      />
    </div>
  ) 
}
