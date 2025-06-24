import LeaveFeedbackBtn from "@/components/client/LeaveFeedbackBtn"
import CreatePortfolioBtn from "@/components/CreatePortfolioBtn"
import Footer from "@/components/Footer"
import Image from "next/image"

const HomePage = () => {
  const images = [
    "/assets/trials/image1.jpeg",
    "/assets/trials/image2.jpeg",
    "/assets/trials/image3.jpeg",
    "/assets/trials/image4.jpeg",
    "/assets/trials/image5.jpeg",
    "/assets/trials/image6.jpeg"
  ]

  return (
    <div className="relative">
      {/* Stick blue div for hiding content scrolled up */}
    <div className="blur-div"/> 
    <section className="relative overflow-hidden bg-white backdrop:blur-2xl m-auto p-4 flex flex-col items-center text-center">
      {/* <div className="absolute top-[60px] right-[100px] w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" /> */}
        <h1 className="mb-6 text-[34px] sm:text-4xl md:text-5xl lg:text-6xl max-w-[500px] lg:max-w-[640px] text-center">
          Build Your
          <span className="bg-gradient-to-tr from-fuchsia-500 from-20% to-orange-500 to-95% text-transparent bg-clip-text"> Portfolio </span>
           in Minutes
        </h1>
        <p className="mb-4 max-w-[650px] text-center text-xl text-gray-500">Effortlessly craft a sleek, personalized developer portfolio — no code, no clutter. Just your work, beautifully presented and live in seconds.</p>
        <div className="flex justify-between gap-6 mt-4 w-fit">
          <CreatePortfolioBtn/>
          <LeaveFeedbackBtn/>
        </div>
    </section>

    {/* Gallery section */}
   <section className="overflow-hidden bg-gradient-to-r from-fuchsia-500 to-orange-500 py-10">
  <div className="relative w-full overflow-hidden">
    <div className="flex w-max animate-marquee">
      {[...images, ...images].map((src, i) => (
        <Image
          key={i}
          src={src}
          width={1000}
          height={1000}
          alt={`image-${i}`}
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 rounded-xl shadow-md mx-2"
        />
      ))}
    </div>
  </div>
</section>


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