'use client'

import { setIsTemplateEditable, setTemplateData } from "@/app/redux/slices/templateDataSlice";
import TemplateEditorRender from "@/components/template/TemplateEditorRender";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function TemplateEditingClient({ initialData  }) {
  const dispatch = useDispatch()
  const [isReady, setIsReady] = useState(false);


  // Set isTemplateEditable to true to allow editing of the template
  useEffect(() => {
    dispatch(setIsTemplateEditable(true)); // Activate edit mode
    dispatch(setTemplateData(initialData)); // load sections only once from server
    setIsReady(true); // render only after Redux is set
  }, [dispatch, initialData]) // run when component mounts and when dispatch changes

  console.log('InitialDataFromServer:', initialData)
  if (!isReady) return <div className="text-center py-10 text-gray-500">Initializing...</div>;

  return (
    <TemplateEditorRender/>
  );
}
