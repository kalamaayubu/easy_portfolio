'use client'

import CreatePortfolioBtn from "../CreatePortfolioBtn"
import { useLayoutEffect } from "react"
import { fadeInUp } from "@/utils/animations/gsap"
import gsap from "gsap"

const CTA = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      fadeInUp('.cta-text', '.cta-text')
      fadeInUp('.cta-content', 'cta-box' )
    })

    return () => ctx.revert()
  }, [])
  return (
    <section id="cta" className="m-auto flex flex-col items-center text-center">
      <div className="p-4 w-[95%]">
        <p className="section-header ">BUILD AND SHARE</p>
        <p className="cta-text text-gray-500 text-xl m-auto max-w-[640px] mb-4">We&apos;ve got to the end of this page, the only thing you can do now is to create your portfolio. Click the button below to start creating your portfolio.</p>
      </div>
      <div className="mt-6 w-full purple-gradient-card p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16">
        <div className="bg-white cta-box rounded-xl gap-4 lg:justify-between m-auto flex flex-col items-center text-center lg:p-8 p-8">
          <h2 className="w-full cta-content">Build Your Portfolio in Minutes</h2>
          <p className="cta-content mt-4 lg:mt-0 lg:ml-6 max-w-[500px] text-gray-500 text-[18px] lg:text-xl">
              Start building your portfolio and showcase your work to the world.
          </p>
          <div className="cta-content">
            <CreatePortfolioBtn/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA