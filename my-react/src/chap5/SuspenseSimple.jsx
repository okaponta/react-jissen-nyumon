import { Suspense } from "react";
import ThrowPromise from "./ThrowPromise.jsx";

export default function SuspenseSimple() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ThrowPromise />
    </Suspense>
  );
}
