import Image from 'next/image'
import React from 'react'

const Featured = () => {
     const images = [
    "/assets/trials/image1.jpeg",
    "/assets/trials/image2.jpeg",
    "/assets/trials/image3.jpeg",
    "/assets/trials/image4.jpeg",
    "/assets/trials/image5.jpeg",
    "/assets/trials/image6.jpeg"
  ]

  const images2 = [
    "/assets/trials/me.png",
    "/assets/trials/landing.png",
    "/assets/trials/attendme.png",
    "/assets/trials/projects.png",
    "/assets/trials/landingmobile.png"
  ]
  const imageClass = "h-[200px] w-auto shadow-md mx-1 object-cover"


  return (
    <div id='featured'>
    <p className="section-header">FEATURED PORTFOLIOS</p>
   <section className="overflow-hidden bg-gradient-to-r from-fuchsia-500 to-orange-500 py-2 relative">
    {/* <div className="absolute top-0 bottom-0 left-0 w-1/6 lg:w-1/12 bg-gradient-to-r from-white via-white/70 to-transparent backdrop-blur-sm z-10 pointer-events-none" />
    <div className="absolute top-0 bottom-0 right-0 w-1/6 lg:w-1/12 bg-gradient-to-l from-white via-white/70 to-transparent backdrop-blur-sm z-10 pointer-events-none" />
     */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...images, ...images].map((src, i) => (
            <Image
              key={i}
              src={src}
              width={1000}
              height={1000}
              alt={`image-${i}`}
              className={imageClass}
            />
          ))}
        </div>
      </div>
      <div className="relative w-full overflow-hidden mt-2">
        <div className="flex w-max animate-marquee-reverse">
          {[...images2, ...images2].map((src, i) => (
            <Image
              key={`image2-${i}`}
              src={src}
              width={1000}
              height={1000}
              alt={`image-${i}`}
              className={imageClass}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Featured