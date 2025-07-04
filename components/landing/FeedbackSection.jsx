'use client'

import { submitFeedback } from "@/actions/user/submitFeedback"
import Image from "next/image"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const FeedbackSection = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm()
    const [message, setMessage] = useState("")

    const onSubmit = async (data) => {
        try {
            await submitFeedback(data.feedback)
            setMessage("✅ Feedback submitted successfully!")
            toast.success('Feedback submitted successfully!')
            reset()
        } catch (err) {
            console.error(err)
            setMessage("❌ Failed to submit. Try again.")
            toast.error('Something went wrong while submitting feedback')
        }
    }

  return (
    <div id="feedback"  className="flex flex-col gap-2 w-[85%] m-auto p-4 items-center text-center">
        <p className="section-header">LEAVE YOUR FEEDBACK</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 items-center lg:justify-between w-full">
            <div className="flex flex-col items-center gap-2 max-w-[500px] lg:hidden">
                <Image unoptimized src="/assets/feedback2.gif" alt="Feedback Illustration" width={300} height={300} className="m-auto max-w-[500px]" />
                <p className="text-sm text-gray-400 mt-2 hidden lg:flex">Every insight you share guides us toward a cleaner, more intuitive, and empowering portfolio-building experience. You could spark our next big update.</p>
            </div>
            <div>
                <h1 className="mb-6 text-[24px] lg:text-start sm:text-[28px] md:text-[32px] lg:text-[36px] max-w-[500px] lg:max-w-[540px] text-center">Your Feedback Helps us Improve.</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <textarea {...register("feedback", { required: "Enter your feeback first"})} placeholder="Leave Your Feedback here..." className="p-2 border rounded-md h-44 max-h-96 focus:border-gray-400 outline-none"></textarea>
                    {errors.feedback && ( <span className="text-red-500 lg:text-start text-sm">{errors.feedback.message}</span>)}
                    <button disabled={isSubmitting} type="submit"  className="p-3 rounded-lg transition">
                        {isSubmitting ? "Submitting..." : "Submit Feedback"}
                    </button>
                </form>
            </div>
            <div className="lg:flex flex-col items-center gap-2 max-w-[500px] hidden">
                <Image unoptimized src="/assets/feedback2.gif" alt="Feedback Illustration" width={300} height={300} className="m-auto max-w-[500px]" />
                <p className="text-sm text-gray-400 mt-2">Every insight you share guides us toward a cleaner, more intuitive, and empowering portfolio-building experience. You could spark our next big update.</p>
            </div>
        </div>
    </div>
  )
}

export default FeedbackSection