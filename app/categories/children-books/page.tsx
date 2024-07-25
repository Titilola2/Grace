import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@/app/loading";
import ChildrenBooks from "@/domain/categories/components/ChildrenBooks";

export const metadata: Metadata = {
  title: "Narrative Pen | Categories | Children's Books",
  description: "Children Books",
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
export default function ChildrensBook() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full">
        <ChildrenBooks />
      </main>
    </Suspense>
  );
}
