import Background from "../background/background";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <Background className="border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80" />
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold tracking-tighter"><p>UTMTC</p></div>
        <nav className="flex items-center gap-3 sm:gap-6 text-sm font-medium">
          <a
            href="#features"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <p>Features</p>
          </a>
          <a
            href="#about"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <p>About</p>
          </a>
          {/* <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <p>Contact</p>
          </a> */}
        </nav>
        <div className="hidden sm:flex sm:gap-6">
          {/* <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200">
            Get Started
          </button> */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
