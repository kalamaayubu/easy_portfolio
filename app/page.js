import LeaveFeedbackBtn from "@/components/client/LeaveFeedbackBtn"
import CreatePortfolioBtn from "@/components/CreatePortfolioBtn"
import Footer from "@/components/Footer"
import CTA from "@/components/landing/CTA"
import Featured from "@/components/landing/Featured"
import FeedbackSection from "@/components/landing/FeedbackSection"
import ProblemSolution from "@/components/landing/ProblemSolution"
import TestimonialSection from "@/components/landing/TestimonialSection"

const HomePage = () => {
  return (
    <div id="home"  className="relative">
      {/* Stick blue div for hiding content scrolled up */}
    <div className="blur-div"/> 
    <section className="relative overflow-hidden pb-16 lg:pb-12 pt-12 lg:pt-4 bg-white backdrop:blur-2xl m-auto p-4  flex flex-col items-center text-center">
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

    {/* Feedback section */}
    <FeedbackSection/>

    {/* Call to action section */}
    <section id="cta" className="m-auto flex flex-col items-center text-center">
      <div className="p-4 w-[95%]">
        <p className="section-header ">BUILD AND SHARE</p>
        <p className="text-gray-500 text-xl m-auto max-w-[640px] mb-4">We&apos;ve got to the end of this page, the only thing you can do now is to create your portfolio. Click the button below to start creating your portfolio.</p>
      </div>
      <CTA/>
    </section>
    <Footer/>
    </div>
  )
}

export default HomePage