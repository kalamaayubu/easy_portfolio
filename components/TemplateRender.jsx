import SectionRender from "./SectionRender"

const TemplateRender = ({ data }) => {
  console.log('TEMPLATE RENDER:', data)
  return (
    <div className="">
      { data?.sections?.map((section) => (
        <SectionRender key={section.id} template_metadata={data} {...section}/>
      ))}
    </div>
  )
}
export default TemplateRender