const HeroCenter = () => {
  return (
    <section
      id="home"
      className="relative"
      style={{
        backgroundImage: "url('/assets/heroBg1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent z-0"></div>

      <div className="translate-y-32 flex flex-col items-center m-auto text-center w-full max-w-[800px] px-10 z-10">
        <h1 className="text-white text-center text-4xl sm:text-5xl md:text-6xl">
          Your hero section content goes here
        </h1>
        <p className="text-white text-lg mt-6 sm:text-xl md:text-2xl text-center max-w-3x">
          The description of the hero section can be placed here. It can include
          any information you want to highlight, such as a brief introduction or
          a any information you want to highlight, such as a brief introduction.
        </p>
        <div className="flex items-center gap-5 sm:gap-8 md:gap-11 lg:gap-14">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            First cta
          </button>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Second cta
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCenter;
