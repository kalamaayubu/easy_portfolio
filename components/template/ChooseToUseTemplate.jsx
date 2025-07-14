"use client"

import { getUser } from "@/actions/auth/getUser";
import { Loader2, MoreVertical, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UserFeedback from "../client/editing/Feedback";

const ChooseToUseTemplate = ({ templateId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openFeedback, setOpenFeedback] = useState(false)

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRedirectingToLogin, setIsRedirectingToLogin] = useState(false)

  const router = useRouter()

  // Function to toggle the dropdown for choosing whether to use a template
  const handleMoreHorizontal = () => {
    setIsOpen(prev => !prev)
  }

  // Function to handle leaving feedback
  const handleLeaveFeedback = () => {
      setIsOpen(false); // Close the dropdown after clicking
      setOpenFeedback(true); // Open the feedback modal
      console.log("Feedback modal opened for template:", templateId);
      return
  }

  // Function to use the selected template
  const handleUseTemplate = async () => {
    // Check if user is authenticated
    const user = await getUser()
    console.log("User in ChooseToUseTemplate:", user)

    if (!user) {
      /* Redirect to login with a flag to show that the request for login is
        comming from the choice "Use this template" so as to redirect user to 
        the editing page instead of the normal dashboard after they are authenticated */

        setIsOpen(false) // Close the the dropdowm
        setIsLoginModalOpen(true) 
        return
    }

    // If user is already loged in, redirect them to the template editing page
    return router.push(`/user/edit_template/${templateId}`)
  }

  return (
    <>
      <div className="fixed size-10 sm:size-11 lg:size-12 animate-pulse hover:animate-none bg-black top-24 z-40 left-2 shadow-lg shadow-gray-800 bg-opacity-80 backdrop:blur-3xl lg:left-4 rounded-full flex items-center justify-center text-white hover:bg-opacity-100">
        <MoreVertical onClick={handleMoreHorizontal} className="scale-90 active:scale-75 hover:cursor-pointer transition-all duration-300"/>
      </div>

      {/* The feedback modal */}
      {openFeedback && (
        <UserFeedback 
          setIsOpen={setOpenFeedback} 
          isOpen={openFeedback} 
          templateId={templateId} 
          requireAuth={false}
        />
      )}
      
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
              <button onClick={handleUseTemplate} className="py-3">Use this template</button>
              <button onClick={handleLeaveFeedback} className="py-3">Leave a feedback</button>
              <button className="py-3"><Link href={`/templates`}>Choose another template</Link></button>
              <p className="">I just want to see my home again please... <Link href={'/'} className="text-blue-700 hover:underline hover:text-blue-600">Go home.</Link></p>
            </div>
          </div>
        </div>
      </div>
       )}

       {/* Login prompt modal */}
       {isLoginModalOpen && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-80 backdrop:blur-lg flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
            <h2 className="text-xl font-semibold">Hold on! One quick step before continuing.</h2>
            <p className="text-[15px] text-gray-600 mt-2">
              Please log in to use this template.
              <br />
              It's all free 😂.
            </p>
            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setIsLoginModalOpen(false)} className="text-gray-500">Cancel</button>
              <button onClick={() => {
                setIsRedirectingToLogin(true)
                router.push(`/auth/authentication?from_template=${templateId}`)
                return setIsRedirectingToLogin(true)
              }} 
              className={`bg-blue-600 ${isRedirectingToLogin ? 'cursor-not-allowed' : ''} flex gap-2 items-center text-white px-4 py-2 rounded-md hover:bg-blue-700`}
              disabled={isRedirectingToLogin}
              >
                {isRedirectingToLogin ? (<div className="flex gap-2 items-center"><Loader2 className="animate-spin w-5"/> Log in to continue</div>) : 'Log in to continue'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChooseToUseTemplate