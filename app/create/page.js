import TemplateRender from "@/components/TemplateRender";
import { supabase } from "@/lib/supabase/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CreatePage = () => {
    const [template, setTemplate] = useState(null);
    const searchParams = useSearchParams();
    const templateId = searchParams.get('templateId');

    useEffect(() => {
        async function fetchTemplate() {
            const { data, error } = await supabase
                .from('templates')
                .select('*')
                .eq('id', templateId)
                .single();

                if (!error) setTemplate(data);

            if (error) {
                console.error('Error fetching template:', error);
            }
        }
        if (templateId) {
            fetchTemplate();
        }
    }, [templateId]);

      if (!template) return <p className="p-6">Loading template...</p>;

  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Create {template.name}</h1>
        <p className="mb-6">You are creating a new page based on the template: {template.name}</p>

        <TemplateRender sections={template.sections} />
    </div>
  )
}

export default CreatePage