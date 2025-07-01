'use client';

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Link as LinkIcon, X } from "lucide-react";
import Link from "next/link";

const CongratsCard = ({ title, message, action1, action2, onClose}) => {
  useEffect(() => {
    confetti({
      particleCount: 500,
      spread: 70,
      origin: { y: 0.6 },
      gravity: 0.6,
      startVelocity: 50,
    });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-80 z-50">
      <div className="bg-white p-6 pt-4 rounded-xl shadow-xl text-center max-w-sm w-full">
        {/* Close button */}
        <button 
          onClick={onClose}
          className=" text-gray-500 p-0 m-0 bg-transparent hover:text-gray-800 transition translate-x-[164px]"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-green-600">{title}</h2>
        <p className="text-gray-500 mt-4">{message}</p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Link href={action1.href}>
            <button className="px-5 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600">
              {action1.label}
            </button>
          </Link>
        
          <Link href={action2.href}>
            <button className="hover:scale-95 text-black bg-white border rounded-xl px-5">
              <span className="flex items-center gap-2">
                <LinkIcon className="w-[14px]"/> {action2.label}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CongratsCard;
