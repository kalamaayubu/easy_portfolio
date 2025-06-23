'use client'

import { useState } from "react"
import UserFeedback from "./editing/Feedback"


const LeaveFeedbackBtn = () => {
    const [openFeedback, setOpenFeedback] = useState(false)
    const handleLeaveFeedback = () => {
        setOpenFeedback(true); // Set the state to open the feedback modal
        // Open the feedback modal
        <UserFeedback setIsOpen={setOpenFeedback} isOpen={openFeedback}/>
    }
  return (
    <button onClick={handleLeaveFeedback} className="text-black bg-white py-2 hover:bg-black hover:text-white border border-black rounded-xl px-5">Leave Feedback</button>
  )
}

export default LeaveFeedbackBtn