"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <div className="font-serif text-xl text-navy font-semibold">
          Foundation
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-[14px] font-medium text-navy">
          <a href="#">Our Work</a>
          <a href="#">Impact</a>
          <a href="#">Stories</a>
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-coral text-white text-[14px] font-semibold px-4 py-2 rounded-full">
          Support
        </button>

        {/* Mobile hamburger */}
        <button className="md:hidden text-navy" onClick={() => setOpen(!open)}>
          {/* simple hamburger icon */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-navy"></span>
            <span className="block w-6 h-0.5 bg-navy"></span>
            <span className="block w-6 h-0.5 bg-navy"></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-5 pb-4 space-y-4 bg-white border-t border-border">
          <a className="block text-navy text-[14px]" href="#">
            Our Work
          </a>
          <a className="block text-navy text-[14px]" href="#">
            Impact
          </a>
          <a className="block text-navy text-[14px]" href="#">
            Stories
          </a>

          <button className="w-full mt-2 bg-coral text-white text-[14px] font-semibold px-4 py-3 rounded-full">
            Support a Child
          </button>
        </div>
      )}
    </header>
  );
}
