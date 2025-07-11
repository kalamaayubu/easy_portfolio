const Footer = () => {
  return (
    <div id="footer" className="w-full bg-gray-300 mt-20 p-4">
      <div className="max-w-[1200px] m-auto text-center">
        <p className="text-gray-700 text-sm">
          © {new Date().getFullYear()} Easy Portfolio. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Build with ❤️ by Easy portfolio team
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default Footer;
