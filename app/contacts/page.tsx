import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import Contacts from "@/domain/contact";

export const metadata: Metadata = {
  title: "Grace Olafare | Contacts",
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

export default function ContactUs() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full">
        <Contacts />
      </main>
    </Suspense>
  );
}
