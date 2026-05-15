"use client";

import Background from "@/components/background/background";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header>
        <p className="text-white!">buttons go here</p>
      </Header>
      <Background />
      <div className="z-0 absolute w-screen top-12 min-h-[calc(100vh-48px)]">
        <div className="flex items-center justify-center">
          <style>{`
            @keyframes expandHeight {
              from { height: 200px; }
              to { height: 2000px; }
            }
            .animate-expand {
              animation: expandHeight 600s ease-out forwards;
            }
          `}</style>
          <Image
            src="/assets/background/background.jfif"
            width={200}
            height={200}
            alt="interior"
            className="animate-expand w-auto opacity-100 object-cover"
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-140 w-full p-2">
            <a href="/news">Go to news page</a>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
