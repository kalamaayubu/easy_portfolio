import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import CTA from "@/components/landing/CTA"
import Featured from "@/components/landing/Featured"
import FeedbackSection from "@/components/landing/FeedbackSection"
import ProblemSolution from "@/components/landing/ProblemSolution"
import TestimonialSection from "@/components/landing/TestimonialSection"

const HomePage = () => {
  return (
    <div id="home"  className="relative">
      {/* Stick blur div for hiding content scrolled up */}
    <div className="blur-div"/> 
    <HeroSection/>

    {/* Gallery section */}
    <Featured/>

    {/* Problem / Solution section */}
   <ProblemSolution/>

    {/* Testimonials section */}
    <TestimonialSection/>

    {/* Feedback section */}
    <FeedbackSection/>

    {/* Call to action section */}
    <CTA/>
    <Footer/>
    </div>
  )
}

export default HomePage