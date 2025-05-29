import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

const TemplateCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 rounded-xl relative w-56 h-60 group hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-lg">
      <div className="h-60 w-56 relative overflow-hidden rounded-xl">
        <Image
          src={"/assets/chooseCloudMessaging.png"}
          width={1000}
          height={1000}
          alt="CardImage"
          className="rounded-xl object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 ease-in-out w-full h-full"
        />
      </div>
      <button className="absolute z-50 top-24 left-10 bg-red-50 bg-opacity-100 text-black gap-2 opacity-0 flex group-hover:opacity-100 group/button">
        <span>See details</span>
        <ChevronRight className="w-4 group-hover/button:hidden" />
        <ArrowRight className="w-4 hidden group-hover/button:flex" />
      </button>
    </div>
  );
};

export default TemplateCard;
