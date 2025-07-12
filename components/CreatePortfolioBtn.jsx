import Link from "next/link";
import React from "react";

const CreatePortfolioBtn = () => {
  return (
    <button className="bg-black py-2 md:py-3 rounded-xl px-5 hover:bg-opacity-70 max-w-[300px] justify-center">
      <Link className="md:hidden block" href={"/templates"}>Create Portfolio</Link>
      <Link className="md:block hidden" href={"/templates"}>Create Your Portfolio Now</Link>
    </button>
  );
};

export default CreatePortfolioBtn;
