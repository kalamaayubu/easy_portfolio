export const dynamic = 'force-dynamic';

import { getAllTemplates } from "@/actions/getAllTemplates";
import Footer from "@/components/Footer"
import TemplateCard from "@/components/TemplateCard"

const TemplatesPage = async () => {
  const res = await getAllTemplates();

  if (!res.success) {
    return (
      <div className="m-auto">
        <h1 className="text-red-500 text-center text-4xl md:text-5xl mb-10 max-w-[800px] m-auto">Error fetching templates: {res.error}</h1>
      </div>
    );
  }

  if (res.success) {
    return (
      <div className="m-auto">
        <h1 className="text-black text-center text-4xl md:text-5xl mb-10 max-w-[800px] m-auto">Data fetched successfully</h1>
      </div>
    );
  }

  const templates = res.data;
  
  return (
    <div className=" m-auto">
      <h1 className="text-black text-center text-4xl md:text-5xl mb-10 max-w-[800px] m-auto">Choose a template</h1>
      <div className="flex gap-3 sm:gap-5 md:gap-6 flex-wrap items-center justify-center mb-20">
      {templates.map((templateData) => (
        <TemplateCard key={templateData.id} templateData={templateData} />
      ))}
      </div>
      <Footer/>
    </div>
  )
}

export default TemplatesPage