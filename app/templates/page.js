import Footer from "@/components/Footer"
import TemplateCard from "@/components/TemplateCard"

const TemplatesPage = () => {
  return (
    <div className=" m-auto">
      <h1 className="text-black text-center text-4xl md:text-5xl mb-10 max-w-[800px] m-auto">Choose the template that best suits your needs</h1>
      <div className="flex gap-3 sm:gap-5 md:gap-6 flex-wrap items-center justify-center mb-20">
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      <TemplateCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default TemplatesPage