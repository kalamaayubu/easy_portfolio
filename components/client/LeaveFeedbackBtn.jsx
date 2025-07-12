import Link from "next/link"


const LeaveFeedbackBtn = () => {
  return (
    <>
    <Link href="#feedback" className="text-black md:py-3 md:hidden bg-white py-2 hover:bg-black hover:text-white border border-black rounded-xl px-5 transition-all duration-300">Feedback</Link>
    <Link href="#feedback" className="text-black md:py-3 hidden md:block bg-white py-2 hover:bg-black hover:text-white border border-black rounded-xl px-5 transition-all duration-300">Leave Feedback</Link>
    </>
  )
}

export default LeaveFeedbackBtn