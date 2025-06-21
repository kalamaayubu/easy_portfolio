'use client'

import { X } from "lucide-react"
import { useState } from "react"


const UserFeedback = ({ setIsOpen, isOpen }) => {

  return (
    <div className={`z-50 fixed inset-0 bg-black bg-opacity-85 backdrop:blur-3xl`}>
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 p-2 bg-white/10 rounded-full cursor-pointer">
        <X onClick={() => setIsOpen(false)} className="text-white w-6 h-6" />
        </div>
        <div className={` ${isOpen ? "h-fit" : "h-0"} transition-all duration-300 w-full fixed bottom-0 p-6 rounded-t-3xl bg-white flex flex-col`}>
        <div className="flex flex-col gap-2 text-center">
            <div className="h-[7px] w-16 rounded-full bg-black m-auto -translate-y-4"/>
            <h3 className="text-2xl font-bold mb-4">Drop your feedback below</h3>
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 max-w-[600px] m-auto w-full">
                <textarea 
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your feedback here..."
                    rows="5"
                />
                <button className="">Submit</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default UserFeedback