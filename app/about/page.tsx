import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import About from "@/domain/about";

export const metadata: Metadata = {
  title: "Narrative Pen | About",
  description: "Narrative Pen",
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
export default function AboutAuthor() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full">
        <About />
      </main>
    </Suspense>
  );
}
