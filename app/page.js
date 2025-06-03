import CreatePortfolioBtn from "@/components/CreatePortfolioBtn"
import Footer from "@/components/Footer"
import Link from "next/link"

const HomePage = () => {
  return (
    <div className="relative">
      {/* Stick blue div for hiding content scrolled up */}
    <div className="blur-div"/> 
    <section className="w-[95%] m-auto p-4 flex flex-col items-center text-center">
        <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[500px] lg:max-w-[640px] text-center">
          Build Your
          <span className="blue-gradient-text"> Portfolio </span>
           in Minutes
        </h1>
        <p className="mb-4 max-w-[650px] text-center text-xl text-gray-500">Effortlessly craft a sleek, personalized developer portfolio — no code, no clutter. Just your work, beautifully presented and live in seconds.</p>
        <div className="flex justify-between gap-6 mt-4 w-fit">
          <CreatePortfolioBtn/>
          <button className="text-black bg-white py-2 hover:bg-black hover:text-white border border-black rounded-xl px-5"><Link href={"/"}>Leave Feedback</Link></button>
        </div>
    </section>

    <section className="w-[95%] m-auto max-w-[640px] p-4 flex flex-col items-center text-center mt-20">
      <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[500px] lg:max-w-[640px] text-center">Make Something You’ll Be Proud to Share</h1>
      <p className="text-gray-500 text-xl mb-4">We've got to the end of this page, the only thing you can do now is to create your portfolio. Click the button below to start creating your portfolio.</p>
      <CreatePortfolioBtn/>
    </section>
    <Footer/>
    </div>
  )
}

export default HomePage