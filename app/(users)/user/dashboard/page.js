'use client';

import Link from "next/link";
import { Construction } from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <Construction className="text-yellow-500 w-16 h-16 mb-4" />
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Dashboard Under Construction 🛠️
      </h1>
      <p className="text-gray-600 max-w-md mb-6">
        This space is being crafted just for you — your dashboard will soon become your control center for managing everything effortlessly.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline font-medium"
      >
        Return to homepage
      </Link>
    </div>
  );
};

export default UserDashboard;
