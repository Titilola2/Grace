import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@/app/loading";
import ContemporaryRomance from "@/domain/categories/components/ContemporaryRomance";

export const metadata: Metadata = {
  title: "Narrative Pen | Categories | Contemporary Romance",
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
        <ContemporaryRomance />
      </main>
    </Suspense>
  );
}
