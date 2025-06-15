'use client'

import { setIsTemplateEditable } from "@/app/redux/slices/templateDataSlice";
import TemplateRender from "@/components/TemplateRender";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TemplateEditingClient({ templateId }) {
  const dispatch = useDispatch()

  // Set isTemplateEditable to true to allow editing of the template
  useEffect(() => {
    dispatch(setIsTemplateEditable(true));
  }, [dispatch]) // run when component mounts and when dispatch changes

  // Get templateData from the store and set isTemplateEditable to true
  const template = useSelector(state => state.templateData)
  console.log('Template data:', template)
  return (
    <TemplateRender templateId={templateId} data={template}/>
  );
}
