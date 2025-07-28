'use client'

import gsap from "gsap"
import CreatePortfolioBtn from "./CreatePortfolioBtn"
import LeaveFeedbackBtn from "./client/LeaveFeedbackBtn"
import { useLayoutEffect } from "react"
import { fadeInUpNoScrollTrigger } from "@/utils/animations/gsap"


const HeroSection = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      fadeInUpNoScrollTrigger(".hero > *")
    })
  })
  return (
    <section className="hero relative overflow-hidden pb-16 lg:pb-12 pt-12 lg:pt-4 bg-white backdrop:blur-2xl m-auto p-4  flex flex-col items-center text-center">
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
  )
}

export default HeroSection