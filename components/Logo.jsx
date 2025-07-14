import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="items-center flex">
        <Image
            src={"/assets/EP.png"}
            width={1000}
            height={1000}
            alt="Logo"
            className="w-10 -rotate-90"
        />
        <span className=" text-[18px] font-bold purple-gradient-text italic hidden sm:flex">
            Easy Portfolio
        </span>
    </div>
  )
}

export default Logo