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
              <h1 className="text-[30px] sm:text-3xl md:text-4xl xl:text-5xl max-w-[500px] xl:max-w-[640px] mb-4">When Sharing Projects Feels Like a Project</h1>
              <p className="text-gray-500 text-xl mb-4 w-[95%] lg:w-full max-w-[500px] xl:max-w-[550px]">
                Building a dev portfolio sounds easy — until it's not.
                You end up knee-deep in code, layout tweaks, and deployment configs.
                You’re either stuck with clunky templates or forced to learn tools you don’t need.
                It’s just frustrating.
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
          <h1 className="text-[30px] text-center m-auto sm:text-3xl md:text-4xl lg:text-5xl lg:hidden max-w-[500px] xl:max-w-[640px] mb-4">When Sharing Projects Feels Like a Project</h1>
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
              Building a dev portfolio sounds easy — until you’re knee-deep in code, layout tweaks, and deployment configs.
              You’re either customizing clunky templates, learning tools you don’t need. It’s just frustrating.
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
          <div className="relative w-[85%] max-w-[450px] bg-white shadow-xl p-6 lg:p-4 m-auto rounded-2xl overflow-hidden group">
            <video
              src="/assets/videos/solutionVid.mp4" // ✅ your actual video path
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl w-full h-auto"
          />
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