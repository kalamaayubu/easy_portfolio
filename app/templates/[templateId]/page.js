import TemplateRender from "@/components/TemplateRender";
import { createClient } from "@/lib/supabase/server";

// A server component that fetches template data and pass the sections to template render component
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

    // console.log("TEMPLATE SECTIONS DATA FROM DATABASE:", data.template_body.sections)
    return <TemplateRender sections={data.template_body.sections}/> 
}