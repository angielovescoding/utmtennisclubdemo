import React from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="fixed top-0 left-0 z-1000 h-12 w-screen flex items center justify-center">
      <div className="absolute inset-0 bg-(--brand-color)" />
      <div className="relative w-full max-w-140 flex items-center justify-between">
        <div>
          <h1 className="text-white!">UTM Tennis Club</h1>
        </div>
        <div>{children}</div>
      </div>
    </header>
  );
}
