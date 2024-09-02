import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import Categories from "@/domain/categories";

export const metadata: Metadata = {
  title: "Grace Olafare | Categories",
  description: "Grace Olafare",
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
export default function Category() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full ">
        <Categories />
      </main>
    </Suspense>
  );
}
