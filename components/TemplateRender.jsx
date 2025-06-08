import SectionRender from "./SectionRender"

const TemplateRender = ({ sections }) => {
  console.log('SECTIONS FROM TEMPLATErENDER:', sections)
  return (
    <div className="">
      { sections?.map((section) => (
        <SectionRender key={section.id} {...section}/>
      ))}
    </div>
  )
}
export default TemplateRender