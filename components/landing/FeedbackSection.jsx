import Image from "next/image"

const FeedbackSection = () => {
  return (
    <div className="flex flex-col gap-2 w-[85%] m-auto p-4 items-center text-center">
        <p className="section-header">LEAVE YOUR FEEDBACK</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 items-center lg:justify-between w-full">
            <div className="flex flex-col items-center gap-2 max-w-[500px] lg:hidden">
                <Image unoptimized src="/assets/feedback2.gif" alt="Feedback Illustration" width={300} height={300} className="m-auto max-w-[500px]" />
                <p className="text-sm text-gray-400 mt-2 hidden lg:flex">Every insight you share guides us toward a cleaner, more intuitive, and empowering portfolio-building experience. You could spark our next big update.</p>
            </div>
            <div>
                <h1 className="mb-6 text-[24px] lg:text-start sm:text-[28px] md:text-[32px] lg:text-[36px] max-w-[500px] lg:max-w-[540px] text-center">Your Feedback Helps us Improve.</h1>
                <div className="flex flex-col gap-4">
                    <textarea required placeholder="Leave Your Feedback here..." className="p-2 border rounded-md h-52 max-h-96 focus:border-gray-400 outline-none"></textarea>
                    <button type="submit" className="p-3 rounded-lg transition">Submit Feedback</button>
                </div>
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