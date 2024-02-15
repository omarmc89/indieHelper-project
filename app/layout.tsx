import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "indieHelper",
  description:
    "indieHelper is an app to help indie makers to showcase their products and get feedback from the community.",
  metadataBase: new URL("https://indiehelper.com"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100 z-1" />
        <Suspense fallback="...">
          <Navbar />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 z-5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
