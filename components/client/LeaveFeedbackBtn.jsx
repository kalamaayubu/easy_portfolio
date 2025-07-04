import Link from "next/link"


const LeaveFeedbackBtn = () => {
  return (
    <Link href="#feedback" className="text-black bg-white py-2 hover:bg-black hover:text-white border border-black rounded-xl px-5">Leave Feedback</Link>
  )
}

export default LeaveFeedbackBtn