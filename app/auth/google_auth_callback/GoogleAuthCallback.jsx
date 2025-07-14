'use client';

import { Loader2, Settings } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const GoogleAuthCallback = ({ fromTemplate }) => {
  const [redirectUrl, setRedirectUrl] = useState("");
  const router = useRouter();
  const code = useSearchParams().get("code");

  useEffect(() => {
    const handleRedirect = async () => {
      if (!code) return;

      try {
        const response = await fetch(`/api/auth/google_auth_callback?code=${code}&from_template=${fromTemplate}`);
        if (!response.ok) {
          console.error("Failed to fetch redirect URL");
          return;
        }

        const data = await response.json();
        const redirect = data.redirectUrl;
        setRedirectUrl(redirect);

        // Immediately navigate once you have a valid redirect
        router.push(redirect);
      } catch (err) {
        console.error("Error handling redirect:", err);
      }
    };

    handleRedirect();
  }, [code, router]);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl text-center space-y-4">
        <Loader2 className="m-auto animate-spin text-purple-600" size={40} />
        <h2 className="text-lg font-semibold text-gray-800">
          Loging you in...
        </h2>
        <p className="text-sm text-gray-500">
          Just a moment while we complete your authentication.
        </p>

        {redirectUrl && (
          <p className="text-sm">
            If it takes too long, click&nbsp;
            <Link href={redirectUrl} className="text-blue-600 underline">
              here
            </Link>{" "}
            to continue manually.
          </p>
        )}
      </div>
    </div>
  );
};

export default GoogleAuthCallback;
