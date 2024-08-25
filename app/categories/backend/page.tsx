import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Backend from "@/domain/categories/components/Backend";

export const metadata: Metadata = {
  title: "Grace Olafare  | Categories | Clean and Wholesome",
  description: "Clean n Wholesome",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
};
export default function CleanandWholesome() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full">
        <Backend />
      </main>
    </Suspense>
  );
}
