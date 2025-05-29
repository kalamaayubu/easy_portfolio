import Link from "next/link";
import React from "react";

const CreatePortfolioBtn = () => {
  return (
    <button className="bg-black py-2 rounded-xl px-5 hover:bg-opacity-70">
      <Link href={"/templates"}>Create portfolio</Link>
    </button>
  );
};

export default CreatePortfolioBtn;
