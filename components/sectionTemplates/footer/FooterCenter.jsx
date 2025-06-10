const FooterCenter = ({company_name}) => {
  return (
    <footer className="bg-white text-black py-4 border-t-2 border-blue-600 border-opacity-40">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} {company_name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterCenter;
