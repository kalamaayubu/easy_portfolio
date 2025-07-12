const AboutCenter = ({ content, call_to_action }) => {
  return (
    <section id="about" className="flex flex-col bg-white pt-10 pb-20">
      <h1 className="text-center text-4xl md:text-5xl  text-gray-900">
        About <span className="text-blue-500">me</span>
      </h1>
      <div className="flex flex-col items-center justify-center mt-10 px-4">
        <p className="text-gray-600 text-lg sm:text-xl md:text-2xl text-center max-w-3xl">
          { content }
        </p>
        {call_to_action?.trim() && (
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              {call_to_action}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutCenter;
