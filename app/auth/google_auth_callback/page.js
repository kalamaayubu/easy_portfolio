import { Suspense } from "react";
import GoogleAuthCallback from "./GoogleAuthCallback";

export default async function GoogleAuthCallbackPage ({ searchParams }) {
  const fromTemplate = await searchParams?.from_template;
  return (
    <Suspense>
      <GoogleAuthCallback fromTemplate={fromTemplate}/>
    </Suspense>
  )
}