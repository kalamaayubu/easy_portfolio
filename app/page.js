import LeaveFeedbackBtn from "@/components/client/LeaveFeedbackBtn"
import CreatePortfolioBtn from "@/components/CreatePortfolioBtn"
import Footer from "@/components/Footer"
import Featured from "@/components/landing/Featured"
import ProblemSolution from "@/components/landing/ProblemSolution"
import TestimonialSection from "@/components/landing/TestimonialSection"

const HomePage = () => {
  return (
    <div className="relative">
      {/* Stick blue div for hiding content scrolled up */}
    <div className="blur-div"/> 
    <section className="relative overflow-hidden bg-white backdrop:blur-2xl m-auto p-4 flex flex-col items-center text-center">
      {/* <div className="absolute top-[60px] right-[100px] w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" /> */}
        <h1 className="mb-6 text-[36px] sm:text-[40px] md:text-5xl lg:text-6xl max-w-[500px] lg:max-w-[640px] text-center">
          Build Your
          <span className="purple-gradient-text"> Portfolio </span>
           in Minutes
        </h1>
        <p className="mb-4 max-w-[650px] text-center text-xl text-gray-500">Effortlessly craft a sleek, personalized developer portfolio — no code, no clutter. Just your work, beautifully presented and live in seconds.</p>
        <div className="flex justify-between gap-6 mt-4 w-fit">
          <CreatePortfolioBtn/>
          <LeaveFeedbackBtn/>
        </div>
    </section>

    {/* Gallery section */}
    <Featured/>

    {/* Problem / Solution section */}
   <ProblemSolution/>

    {/* Testimonials section */}
    <TestimonialSection/>

    <section className="w-[95%] m-auto max-w-[640px] p-4 flex flex-col items-center text-center mt-20">
      <h1 className="mb-6 text-[30px] sm:text-3xl md:text-4xl lg:text-5xl max-w-[500px] lg:max-w-[640px] text-center">Make Something You’ll Be Proud to Share</h1>
      <p className="text-gray-500 text-xl mb-4">We&apos;ve got to the end of this page, the only thing you can do now is to create your portfolio. Click the button below to start creating your portfolio.</p>
      <CreatePortfolioBtn/>
    </section>
    <Footer/>
    </div>
  )
}

export default HomePage