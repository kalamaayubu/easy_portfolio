const FooterCenter = ({company_name}) => {
  return (
    <footer className="bg-gray-400 text-black py-4">
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
