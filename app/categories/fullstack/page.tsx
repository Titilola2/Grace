import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Fullstack from "@/domain/categories/components/Fullstack";

export const metadata: Metadata = {
  title: "Grace | Categories | Contemporary Romance",
  description: "Contemporary Romance",
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
export default function Contemporary() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full">
        <Fullstack />
      </main>
    </Suspense>
  );
}
