import { Suspense } from "react";
import GoogleAuthCallback from "./GoogleAuthCallback";

export default function GoogleAuthCallbackPage () {
  return (
    <Suspense>
      <GoogleAuthCallback/>
    </Suspense>
  )
}