import { getTemplateToView } from "@/actions/getTemplateToView"
import TemplateRender from "@/components/TemplateRender"

export const dynamic = 'force-dynamic'

export default async function PortfolioPage({ params }) {
   const { userName, templateId } = await params
   const { data, error } = await getTemplateToView(userName, templateId)

   if (error || !data) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-xl font-bold">Template not found</h1>
        <p>{error || "Try a different URL."}</p>
      </div>
    )
  }

    const [template] = data

    return (
        <TemplateRender templateId={templateId} data={template.template_body} />
    )
}