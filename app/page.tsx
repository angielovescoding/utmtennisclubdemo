import Background from "@/components/background/background";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

import FAQS from "./home/faqs";
import About from "./home/about";
import Showcase from "./home/showcase";
import Features from "./home/features";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <div className="fixed top-0 left-0 w-screen h-screen">
        <Background defaultColors />
      </div>
      <Header />

      <section
        id="hero"
        className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8"
      >
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <Image
            src="/assets/background/bg.jpg"
            fill
            priority
            alt="Background"
            className={twMerge("object-cover")}
          />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center z-10">
          <div className="relative p-6">
            <Background className="-z-1  rounded-xl" defaultColors />
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              UTM Tennis Club
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Coming Soon!
            </p>
          </div>
        </div>

        {/* Bottom Right Link */}
        <div className="absolute bottom-6 right-6 z-20">
          <a
            target="_blank"
            href="https://www.vecteezy.com/vector-art/1312279-tennis-sport-court-scene"
            className={twMerge(
              "text-sm font-medium",
              "text-zinc-700 hover:text-zinc-900",
              "dark:text-zinc-300 dark:hover:text-white",
              "bg-white/80 dark:bg-zinc-900/80",
              "backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm transition-all duration-(--duration-animate)",
            )}
          >
            Art by Vecteezy.com
          </a>
        </div>
      </section>

      <Features />
      <About />
      <FAQS />
      <Showcase />
      <Footer />
    </div>
  );
}
