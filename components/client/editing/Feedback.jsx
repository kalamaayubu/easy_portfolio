'use client'

import { getUser } from "@/actions/auth/getUser";
import { submitFeedback } from "@/actions/user/submitFeedback";
import { Loader2, X } from "lucide-react"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";


const UserFeedback = ({ setIsOpen, isOpen, templateId }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [feedbackText, setFeedbackText] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter()

    // Check if user is authenticated
    useEffect(() => {
        const checkAuthentication = async () => {
            const userData = await getUser()
            if (userData?.user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
                // Redirect to login if not authenticated
                router.push("/auth/authentication?redirect=/templates");
            }
        }

        checkAuthentication();
    }, [isAuthenticated])

    const handleSubmitFeedback = async () => {
        if (!feedbackText.trim()) return;

        setIsProcessing(true);
        const res = await submitFeedback(feedbackText, templateId);

        if (!res.success) {
            console.error("Error submitting feedback:", res.error); 
            setIsProcessing(false);
            return;
        }

        // Inform user of successful submission
        toast.success("Submitted successfully, we are working to improve", {
            duration: 3000,
        });

        // Clean up after submission
        setIsProcessing(false);
        setIsOpen(false);
        setFeedbackText(""); // clear textarea
    }

     // Don't render if user is not authenticated
    if (!isAuthenticated) return null

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
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                />
                <button disabled={isProcessing} onClick={handleSubmitFeedback} className={`${isProcessing ? "cursor-not-allowed" : ""}`}>
                    {isProcessing ? <span><Loader2 className="animate-spin w-5 h-5 mr-2 inline-block" /> Submitting</span> : 'Submit'}
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default UserFeedback