"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4 lg:px-8">
        {/* LEFT: LOGO + BRAND */}
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* LOGO */}
          <div className=" relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden transition-transform group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Tiny Blessings logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col">
            <div className="font-sans text-[16px] md:text-[18px] leading-tight text-navy font-semibold group-hover:text-coral transition-colors">
              Tiny blessings
            </div>
            <div className="text-[10px] md:text-[11px] leading-tight text-muted">
              Giving hope through education
            </div>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-navy">
          <a href="#foundation" className="hover:text-coral transition-colors">
            About
          </a>
          <a href="#impact" className="hover:text-coral transition-colors">
            Impact
          </a>
          <a href="#stories" className="hover:text-coral transition-colors">
            Stories
          </a>
          <a href="#donate" className="hover:text-coral transition-colors">
            Donate
          </a>
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <a
            href="#donate"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-coral text-white text-[15px] font-bold px-4 py-4 rounded-full shadow-md active:scale-[0.98] transition-transform"
          >
            Sponsor a Child
          </a>
          <Image
            src="/images/donate_logo.png"
            alt="Tiny Blessings logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-navy p-2 hover:bg-soft rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-navy transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-navy transition-all ${open ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-navy transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-5 py-6 space-y-6 bg-white border-t border-border animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-5">
            <a
              className="text-navy text-[16px] font-medium border-b border-soft pb-2"
              href="#foundation"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              className="text-navy text-[16px] font-medium border-b border-soft pb-2"
              href="#impact"
              onClick={() => setOpen(false)}
            >
              Impact
            </a>
            <a
              className="text-navy text-[16px] font-medium border-b border-soft pb-2"
              href="#stories"
              onClick={() => setOpen(false)}
            >
              Stories
            </a>
          </div>

          <a
            href="#donate"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-coral text-white text-[15px] font-bold px-4 py-4 rounded-full shadow-md active:scale-[0.98] transition-transform"
          >
            Sponsor a Child
          </a>
        </div>
      )}
    </header>
  );
}
