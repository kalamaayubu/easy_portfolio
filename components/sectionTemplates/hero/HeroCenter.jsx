const HeroCenter = ({ heading, call_to_action1, call_to_action2, description, image }) => {
  console.log(`Heading: ${heading}`)
  return (
    <section
      id="home"
      className="relative"
      style={{
        backgroundImage: `url("/assets/bg.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "90vh",
      }}
    >
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-500 backdrop:blur-2xl to-transparent z-0"></div>

      <div className="translate-y-32 flex flex-col items-center m-auto text-center w-full max-w-[800px] px-10 z-10">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl">
          { heading }
        </h1>
        <p className="text-xl mt-6 sm:text-xl md:text-2xl text-center max-w-3x">
          { description }
        </p>
        <div className="flex justify-center items-center gap-5 sm:gap-8 md:gap-11 lg:gap-14">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            {call_to_action1?.label}
          </button>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-blue-700 transition duration-300">
            {call_to_action2?.label}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCenter;
