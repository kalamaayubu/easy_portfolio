'use client';

import { CloudLightningIcon, GraduationCap, Share2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CreatePortfolioBtn from "../CreatePortfolioBtn";

const ProblemSolution = () => {
  return (
     <section id="problem-solution"  className="flex flex-col w-[85%] m-auto">
      <p className="section-header">PROBLEM / SOLUTION</p>
      <div className="mb-8">
        <div className="flex flex-col">
          <div className="hidden gap-8 xl:gap-12 items-center w-[95%] max-w-[1200px] justify-between m-auto lg:flex">
            <div className="flex flex-col ml-8">
              <h1 className="text-[30px] sm:text-3xl md:text-4xl xl:text-5xl max-w-[500px] xl:max-w-[640px] mb-4">Why Does Sharing Your Work Feel Like Work</h1>
              <p className="text-gray-500 text-xl mb-4 w-[95%] lg:w-full max-w-[500px] xl:max-w-[550px]">
                You’ve built projects—but showcasing them? That’s a whole different story. 
                You end up debugging layouts or customizing outdated templates that break 
                more than they help instead of just showing off your work. Suddenly, 
                building your portfolio feels harder than building the actual projects.
              </p>
              <CreatePortfolioBtn/>
            </div>
            <div className="">
              <Image
              src="/assets/trials/stress.gif"
              width={1000}
              height={1000}
              alt="Problem illustration"
              className="w-[90%] max-w-[400px] m-auto h-auto rounded-xl mb-4"
            />
            </div>
          </div>
          {/* The heading for small screens */}
          <h1 className="text-[30px] text-center m-auto sm:text-3xl md:text-4xl lg:text-5xl lg:hidden max-w-[500px] xl:max-w-[640px] mb-4">Why Does Sharing Your Work Feel Like Work</h1>
          <div>
            <Image
              src="/assets/trials/stress.gif"
              width={1000}
              height={1000}
              alt="Problem illustration"
              className="w-[90%] lg:hidden max-w-[400px] m-auto h-auto rounded-xl mb-4"
            />
          </div>
          <div className="lg:hidden mb-4 w-[95%] text-center max-w-[600px] m-auto">
            <p className="text-gray-500 text-xl mb-4">
              You’ve built projects—but showcasing them? That’s a whole different story. 
              You end up debugging layouts or customizing outdated templates that break 
              more than they help instead of just showing off your work. Suddenly, 
              building your portfolio feels harder than building the actual projects.
            </p>
            <button className="max-w-[300px] justify-center mt-4"><Link href={'/templates'}>Create Your Portfolio Now</Link></button>
          </div>
        </div>
        <div>
        </div>
      </div>

      {/* The solution section */}
      <div className="flex flex-col m-auto gap-6 lg:flex-row lg:w-full lg:justify-between lg:m-auto lg:gap-8 xl:gap-12 mt-10 lg:mt-14">
          <h1 className="text-[30px] lg:hidden text-center m-auto sm:text-3xl md:text-4xl xl:text-5xl max-w-[500px] xl:max-w-[640px] mb-4">Showcase Your Work, Without the Struggle</h1>
          {/* Video presentation */}
            <div className="relative w-[85%] border-[10px] bg-gray-900 border-black max-w-[450px] rounded-3xl m-auto overflow-hidden rounded-b-none border-b-0">
              <video
                src="/assets/videos/solutionVid.mp4" // ✅ your actual video path
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto mt-10"
              />
              <div className="absolute flex items-center justify-center w-24 lg:w-28 rounded-full h-3 bg-black top-3 left-1/2 -translate-x-1/2">
                <div className="m-auto w-14 h-1 flex items-center justify-center rounded-full bg-gray-800">
                  <div className="w-6 m-auto h-[2px] bg-gray-700 rounded-full">
                  </div>
                </div>
              </div>
            </div>

          <div className="flex flex-col">
              <h1 className="text-[30px] hidden lg:flex sm:text-3xl md:text-4xl xl:text-5xl max-w-[500px] xl:max-w-[640px] mb-4">Showcase Your Work, Without the Struggle</h1>
            <p className="text-gray-500 text-xl m-auto lg:m-0 text-center lg:text-start max-w-[500px] xl:max-w-[550px] px-2">
              <span className="font-bold">Easyportfolioo</span> removes all that friction. It’s a platform designed specifically for individuals who just want to:
            </p>
            <div className="flex flex-col m-auto lg:m-0 lg:mt-6 gap-2 mt-6">
              <div className="flex gap-4 rounded-md border p-4 px-8 lg:w-3/4"><Share2Icon className="text-purple-500"/> <p>Share their work</p></div>
              <div className="flex gap-4 rounded-md border p-4 px-8 lg:w-3/4"><GraduationCap className="text-purple-500"/> <p>In a professional way</p></div>
              <div className="flex gap-4 rounded-md border p-4 px-8 lg:w-3/4 mb-4"><CloudLightningIcon className="text-purple-500"/> <p>And get it live, fast</p></div>
              <CreatePortfolioBtn/>
            </div>
          </div>
      </div>
    </section>
  )
}

export default ProblemSolution