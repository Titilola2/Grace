import HomePage from "@/domain/homepage";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full">
        <HomePage />
      </main>
    </Suspense>
  );
}
