import TemplateRender from "@/components/TemplateRender";
import { createClient } from "@/lib/supabase/server";
import { MoreHorizontal, MoreVertical } from "lucide-react";

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

    return (
        <div className="relative">
            <div className="fixed size-10 sm:size-11 lg:size-12 bg-blue-700 top-24 z-40 left-2 shadow-lg shadow-gray-900 bg-opacity-80 backdrop:blur-3xl lg:left-4 rounded-full flex items-center justify-center text-white group hover:bg-opacity-100"><MoreVertical className="scale-50 active:scale-75 hover:cursor-pointer w-full h-full transition-all duration-300"/></div>
            <TemplateRender data={data.template_body}/> 
        </div>
    )
}