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

  const templates = res.data;
  console.log(`Templates: ${templates}`)
  
  return (
    <>
      <div className="blur-div"/> 
      <div className="relative m-auto max-w-7xl w-[80%]">
        <h1 className="text-black text-center text-4xl md:text-5xl mb-10 max-w-[800px] m-auto">Choose a template</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 max-w-[12800px] md:grid-cols-2 xl:grid-cols-3 justify-items-center m-auto gap-4 xl:gap-6">
            {templates?.map((templateData) => (
              <TemplateCard key={templateData.id} templateData={templateData} />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default TemplatesPage