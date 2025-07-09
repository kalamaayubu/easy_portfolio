"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TemplateCard = ({ templateData }) => {
  const router = useRouter();
  const { id } = templateData;

  console.log('Template data:', templateData);
  
  const handleSeeDetails = () => {
    router.push(`/templates/${id}`);
    
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="rounded-xl cursor-default flex flex-col max-w-96 relative transition-all duration-300 ease-in-out shadow-md border border-gray-100 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={"/assets/templatesScreenshorts/me.jpg"}
          width={1000}
          height={1000}
          alt="CardImage"
          className="object-cover opacity-100 group-hover:opacity-90 transition-opacity duration-300 ease-in-out w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 text-sm mb-2">
        <h2 className="text-black text-[16px] font-bold mt-3 px-4">
          {templateData.template_body.name}
        </h2>
        <p className="text-gray-500 text-sm px-4 line-clamp-2">
          {templateData.description}
        </p>
        <button
          onClick={handleSeeDetails}
          className="max-w-24 p-0 ml-4 hover:translate-x-1 transition-all duration-300 group rounded-b-xl bg-white hover:animate-pulse flex items-center justify-between"
        >
          <span className="text-sm purple-gradient-text">See details</span>
          <Image
            src="/assets/icons/ChevronRight.svg"
            width={20}
            height={20}
            alt="ChevronRight"
            className="w-4 group-hover:hidden"  
          />
          <Image
            src="/assets/icons/ArrowRight.svg"
            width={20}
            height={20}
            alt="ArrowRight"
            className="w-4 hidden group-hover:flex" 
          />
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
