'use client';

import { CloudLightningIcon, GraduationCap, Share2Icon } from "lucide-react";
import Image from "next/image";

const ProblemSolution = () => {
  return (
     <section className="flex flex-col pt-32 w-[85%] m-auto">
      <p className="text-center purple-gradient-text text-sm border mb-4 border-gray-800 px-5 py-1 rounded-full w-fit m-auto">PROBLEM / SOLUTION</p>
      <div className="mb-8">
        <div className="flex flex-col">
          <div className="hidden gap-8 xl:gap-12 items-center w-[95%] max-w-[1200px] justify-between m-auto lg:flex">
            <div className="flex flex-col ml-8">
              <h1 className="text-[30px] sm:text-3xl md:text-4xl xl:text-5xl max-w-[500px] xl:max-w-[640px] mb-4">The Problem</h1>
              <p className="text-gray-500 text-xl mb-4 w-[95%] lg:w-full max-w-[500px] xl:max-w-[550px] m-auto">
                Building a dev portfolio sounds easy — until you’re knee-deep in code, layout tweaks, and deployment configs.
                You’re either customizing clunky templates which needs a resilient expert to work with, or using &quot;portfolio builders&quot; that has alot of friction such as a long process authentication and the need for a credit card or something of that kind... You get the point. It’s just frustrating.
              </p>
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
          <h1 className="text-[30px] m-auto sm:text-3xl md:text-4xl lg:text-5xl lg:hidden max-w-[500px] xl:max-w-[640px] mb-4">The Problem</h1>
          <div>
            <Image
              src="/assets/trials/stress.gif"
              width={1000}
              height={1000}
              alt="Problem illustration"
              className="w-[90%] lg:hidden max-w-[400px] m-auto h-auto rounded-xl mb-4"
            />
          </div>
          <p className="text-gray-500 lg:hidden text-xl mb-4 w-[95%] text-center max-w-[600px] m-auto">
            Building a dev portfolio sounds easy — until you’re knee-deep in code, layout tweaks, and deployment configs.
            You’re either customizing clunky templates, learning tools you don’t need. It’s just frustrating.
          </p>
        </div>
        <div>
        </div>
      </div>

      {/* The solution section */}
      <div className="flex flex-col m-auto lg:flex-row lg:w-full lg:justify-between lg:m-auto gap-4 lg:gap-8 xl:gap-12 mt-10 lg:mt-14">
          <h1 className="text-[30px] lg:hidden text-center m-auto sm:text-3xl md:text-4xl xl:text-5xl max-w-[500px] xl:max-w-[640px] mb-4">The Solution</h1>
          <div className="">
            <Image
              src="/assets/bgimg.webp"
              width={1000}
              height={1000}
              alt="Problem illustration"
              className="m-auto lg:w-[90%] w-[90%] max-w-[700px]"
            /> 
          </div>
          <div className="flex flex-col">
              <h1 className="text-[30px] hidden lg:flex sm:text-3xl md:text-4xl xl:text-5xl max-w-[500px] xl:max-w-[640px] mb-4">The Solution</h1>
            <p className="text-gray-500 text-xl m-auto text-center lg:text-start max-w-[500px] xl:max-w-[550px] px-2">
              <span className="font-bold">Easyportfolioo</span> removes all that friction. It’s a platform designed specifically for individuals who just want to:
            </p>
            <div className="flex flex-col m-auto lg:m-0 lg:mt-6 gap-2 mt-6">
              <div className="flex gap-4 rounded-md border p-4 px-8 lg:w-3/4"><Share2Icon className="text-purple-500"/> <p>Share their work</p></div>
              <div className="flex gap-4 rounded-md border p-4 px-8 lg:w-3/4"><GraduationCap className="text-purple-500"/> <p>In a professional way</p></div>
              <div className="flex gap-4 rounded-md border p-4 px-8 lg:w-3/4"><CloudLightningIcon className="text-purple-500"/> <p>And get it live, fast</p></div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default ProblemSolution