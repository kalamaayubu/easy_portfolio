'use client'

import { useEffect } from "react"
import SectionRender from "./SectionRender"
import { useDispatch } from "react-redux"
import { setTemplateData } from "@/app/redux/slices/templateDataSlice"

const TemplateRender = ({ templateId, data }) => {
  const dispatch = useDispatch()

  // Add template data to store for state management
  useEffect(() => {
    if (data) {
      dispatch(setTemplateData({id: templateId, sections: data.sections}))
    }
  }, [data, templateId])
  
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