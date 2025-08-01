'use client'

import { ExternalLink, Link2, Loader2, MoreVertical, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import UserFeedback from "./Feedback"
import { useSelector } from "react-redux"
import { publishPortfolio } from "@/actions/user/publishPortfolio"
import { toast } from "sonner"
import CongratsCard from "../CongratsCard"
import ShareDrawer from "@/components/ShareDrawer"

const ControlBtn = ({ templateId, userName }) => {
    const [isOpen, setIsOpen] = useState(false) // Dropdown state
    const [openFeedback, setOpenFeedback] = useState(false) // Feedback modal state
    const [isProcessing, setIsProcessing] = useState(false) // Processing state for publish action
    const [showCongrats, setShowCongrats] = useState(false); // Congrats modal state
    const [showShareDrawer, setShowShareDrawer] = useState(false) // Share drawer state
    const [origin, setOrigin] = useState('') // Store the origin URL

    // Get the current location origin on mount
    useEffect(() => {
      if (typeof window !== "undefined") {
        setOrigin(window.location.origin);
      }
    }, []);

    // Get the templateData from store
    const templateData = useSelector(state => state.templateData)
    const portfolioLink = `${origin}/${userName}/${templateId}`;
    

    // Function to handle leaving feedback
    const handleLeaveFeedback = () => {
        setIsOpen(false); // Close the dropdown after clicking
        setOpenFeedback(true); // Open the feedback modal
    }

    // If feedback modal isOpen, return it
    if (openFeedback) {
        return (
            <UserFeedback setIsOpen={setOpenFeedback} isOpen={openFeedback} templateId={templateId}/>
        )
    }

    // Function to handle publishing portfolio
    const handlePublishPortfolio = async () => {
      setIsProcessing(true)

      // Publish the portfolio using the publishPortfolio action
      const res = await publishPortfolio(templateData)
      if (!res.success) {
        toast.error('Publish failed, please try again later')
        return;
      }

      // Show success(congrats) modal
      if (res.success) {
        setIsProcessing(false)
        setIsOpen(false)
        setShowCongrats(true);
      }
    }
  return (
    <>
      {/* Congrats modal */}
      {showCongrats && (
        <CongratsCard 
          title="🎉 Portfolio Published!"
          message="Congratulations! Your portfolio is now live."
          action1={{ 
            label: "View Portfolio", 
            href: origin ? `${portfolioLink}` : '#', 
            newTab: true, 
            icon: <ExternalLink  className="w-4 h-4"/> 
          }}
          action2={{ 
            label: "Share Link", 
            href: `#`, 
            newTab: false, 
            icon: <Link2  className="w-[17px] h-[17px]"/>, 
            // Close the modal and open share drawer
            onClick: () => {
              setShowCongrats(false);
              setShowShareDrawer(true);
            }
          }}
          onClose={() => setShowCongrats(false)}
        />
      )}

      {/* Share Drawer */}
      {showShareDrawer && (
        <ShareDrawer 
          link={portfolioLink} 
          onClose={() => {
            setShowShareDrawer(false)
            setTimeout(() => {
              setShowCongrats(true);
            }, 50); // Reopen(keep open) the congrats modal since user might want to do something else after canceling share drawer
          }
        }/>
      )}

      {/* Floating MoreVertical button */}
      <div className="fixed size-10 sm:size-11 lg:size-12 animate-pulse hover:animate-none bg-black top-24 z-40 left-2 shadow-lg shadow-gray-800 bg-opacity-80 backdrop:blur-3xl lg:left-4 rounded-full flex items-center justify-center text-white hover:bg-opacity-100">
        <MoreVertical onClick={() => setIsOpen(prev => !prev)}  className="scale-90 active:scale-75 hover:cursor-pointer transition-all duration-300"/>
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
                <button disabled={isProcessing} onClick={handlePublishPortfolio}  className={`py-3 flex items-center justify-center ${isProcessing ? 'cursor-not-allowed opacity-80' : ''}`}>
                  {isProcessing ? (
                    <span className="flex items-center"><Loader2 className="text-white mr-2 w-5 animate-spin"/>Publishing portfolio</span>
                  ) : ('Publish your portfolio')}
                </button>
                <button onClick={handleLeaveFeedback} className="py-3">Leave a feedback</button>
                <button className="py-3"><Link href={`/templates`}>Choose another template</Link></button>
                <p>or do you want to go home? <Link href={'/'} className="text-blue-700 hover:underline hover:text-blue-600">Go home.</Link></p>
                </div>
            </div>
            </div>
        </div>
       )}
    </>
  )
}

export default ControlBtn