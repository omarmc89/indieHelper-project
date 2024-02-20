import "./globals.css";
import { poppins } from "./fonts";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Suspense} from "react";
import { auth } from "@/app/auth";



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

  const session = await auth()
  return (
    <html lang="en">
      <body className={`h-full w-full p-0 m-0 ${poppins.className} relative flex flex-col items-center justify-center`}>
        {/* <div className="fixed h-full w-full top-0 overflow:hidden left-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-100 z-0">
          </div> */}
        <Suspense fallback="...">
          <Navbar session= {session}/>
        </Suspense>
        <main className="flex flex-col items-center justify-center min-h-screen w-full z-20">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}


