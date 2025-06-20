"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TemplateCard = ({ templateData }) => {
  const router = useRouter();
  const { id } = templateData;
  console.log(`ID: ${id}`)
  
  const handleSeeDetails = () => {
    // Add template data to store for state management
    // This is done in the <TemplateRender /> component

    router.push(`/templates/${id}`);
    
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="rounded-xl relative w-56 h-60 group hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-lg">
      <div className="h-60 w-56 relative overflow-hidden rounded-xl">
        <Image
          src={"/assets/chooseCloudMessaging.png"}
          width={1000}
          height={1000}
          alt="CardImage"
          className="rounded-xl object-cover opacity-100 group-hover:opacity-90 transition-opacity duration-300 ease-in-out w-full h-full"
        />
      </div>
      <button className="absolute z-50 top-24 left-10 bg-white hover:bg-white text-black gap-2 opacity-0 flex group-hover:opacity-100 group/button">
        <span onClick={handleSeeDetails}>See details</span>
        <ChevronRight className="w-4 group-hover/button:hidden" />
        <ArrowRight className="w-4 hidden group-hover/button:flex" />
      </button>
    </div>
  );
};

export default TemplateCard;
