'use client';

import { getTemplate } from "@/actions/getTemplate";
import TemplateRender from "@/components/TemplateRender";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const TemplateDetailsPage = () => {
    const { templateId } = useParams();
    const [templateData, setTemplateData] = useState(null);

    // Fetch the template details using the templateId
    useEffect(() => {
        const fetchTemplateDetails = async () => {
            try {
                const res = await getTemplate(templateId);
                if (!res.success) {
                    console.error('Error fetching template details:', res.error);
                    return (
                        <div className="m-auto">
                            <h1 className="text-red-500 text-center text-4xl md:text-5xl mb-10 max-w-[800px] m-auto">Error fetching template details: {res.error}</h1>
                        </div>
                    );
                }
                setTemplateData(res.data);
            } catch (error) {
                console.error('Error in fetching template details:', error);
            };
        };

        fetchTemplateDetails();
    }, [templateId]);

  return (
    <div>
        <h1 className="text-black text-center text-4xl md:text-5xl mb-10 max-w-[800px] m-auto">
            {templateData ? templateData.name : 'Loading...'}
        </h1>
        <TemplateRender templateData={templateData.sections} />
    </div>
  )
}

export default TemplateDetailsPage