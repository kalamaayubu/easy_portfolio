import TemplateRender from "@/components/TemplateRender";
import { createClient } from "@/lib/supabase/server";

// A server component that fetches template data and pass the sections to TemplateRender component
export default async function TemplateDetailsPage({ params }) {
    const { templateId } = await params;
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("templates")
        .select("template_body")
        .eq("id", templateId)
        .single()

    if(error) {
        console.error("Error fetching template details", error.message)
        return <p>Error fetching template details... Please try again later</p>
    }

    return <TemplateRender data={data.template_body}/> 
}