"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const TemplateCard = ({ templateData }) => {
  const router = useRouter();
  const { id } = templateData;

  console.log('Template data:', templateData);
  
  const handleSeeDetails = () => {
    router.push(`/templates/${id}`);
    
    // Scroll to the top of the page
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="rounded-xl group cursor-default flex flex-col max-w-96 relative transition-all duration-300 ease-in-out shadow-md border border-gray-200 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-t-xl group-hover:p-3 group-hover:pb-0 transition-all duration-500 ease-in-out">
        <Image
          src={"/assets/templatesScreenshorts/me.jpg"}
          width={1000}
          height={1000}
          alt="CardImage"
          className="object-cover group-hover:rounded-xl rounded-t-xl transition-all duration-500 w-full h-full"
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
          className="max-w-24 p-0 ml-4 hover:translate-x-1 transition-all duration-300 group/button rounded-b-xl bg-white hover:animate-pulse flex items-center justify-between"
        >
          <span className="text-sm purple-gradient-text">See details</span>
          <Image
            src="/assets/icons/ChevronRight.svg"
            width={20}
            height={20}
            alt="ChevronRight"
            className="w-4 group-hover/button:hidden"  
          />
          <Image
            src="/assets/icons/ArrowRight.svg"
            width={20}
            height={20}
            alt="ArrowRight"
            className="w-4 hidden group-hover/button:flex" 
          />
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
