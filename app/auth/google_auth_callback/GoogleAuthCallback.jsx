'use client';

import { Settings } from "lucide-react";
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
    <div className="relative">
      <div className="fixed inset-0 bg-black opacity-80 backdrop:blur-3xl flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg flex flex-col">
          <Settings
            className="size-14 m-auto text-gray-800"
            style={{ animation: "spin 2.5s linear infinite" }}
          />
          <p className="text-center">We are redirecting you to your dashboard.</p>
          {redirectUrl && (
            <p>
            If this takes too long, click&nbsp;
            <Link
              href={redirectUrl}
              className="text-blue-600 hover:underline"
            >
              here
            </Link>{" "}
            to navigate manually.
          </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoogleAuthCallback;
