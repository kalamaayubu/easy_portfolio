'use client'

import { MoreVertical, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import UserFeedback from "./Feedback"

const ControlBtn = ({ templateId }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [openFeedback, setOpenFeedback] = useState(false)

    // Function to handle leaving feedback
    const handleLeaveFeedback = () => {
        setIsOpen(false); // Close the dropdown after clicking
        setOpenFeedback(true); // Open the feedback modal
    }

    // If feedback modal is open, return it
    if (openFeedback) {
        return (
            <UserFeedback setIsOpen={setOpenFeedback} isOpen={openFeedback} templateId={templateId}/>
        )
    }

    // Function to handle publishing portfolio
  return (
    <>
      <div className="fixed size-10 sm:size-11 lg:size-12 bg-blue-700 top-24 z-40 left-2 shadow-lg shadow-gray-900 bg-opacity-80 backdrop:blur-3xl lg:left-4 rounded-full flex items-center justify-center text-white hover:bg-opacity-100">
        <MoreVertical onClick={() => setIsOpen(prev => !prev)}  className="scale-50 active:scale-75 hover:cursor-pointer w-full h-full transition-all duration-300"/>
      </div>

      {/* small screen dropdown */}
      {isOpen && (
        <div className={`z-50 fixed inset-0 bg-black bg-opacity-85 backdrop:blur-3xl`}>
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 p-2 bg-white/10 rounded-full cursor-pointer">
            <X onClick={() => setIsOpen(false)} className="text-white w-6 h-6" />
            </div>
            <div className={` ${isOpen ? "h-fit" : "h-0"} transition-all duration-300 w-full fixed bottom-0 p-6 rounded-t-3xl bg-white flex flex-col`}>
            <div className="flex flex-col gap-2 text-center">
                <div className="h-[7px] w-16 rounded-full bg-black m-auto -translate-y-4"/>
                <h3 className="text-2xl font-bold mb-4">Are you looking to?</h3>
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 max-w-[600px] m-auto w-full">
                <button  className="py-3">Publish portfolio</button>
                <button onClick={handleLeaveFeedback} className="py-3">Leave a feedback</button>
                <button className="py-3"><Link href={`/templates`}>Choose another template</Link></button>
                </div>
            </div>
            </div>
        </div>
       )}
    </>
  )
}

export default ControlBtn