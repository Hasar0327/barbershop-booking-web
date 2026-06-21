// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Scissors, Menu } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/barbers", label: "Barbers" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white">
          <Scissors className="h-5 w-5 text-amber-400" />
          <span className="text-lg font-bold tracking-tight">SharpCuts</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild className="bg-amber-400 text-zinc-950 hover:bg-amber-300 font-semibold">
            <Link href="/book">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-zinc-950 border-zinc-800 text-white w-64">
            <div className="flex items-center gap-2 mb-8 mt-2">
              <Scissors className="h-5 w-5 text-amber-400" />
              <span className="text-lg font-bold">SharpCuts</span>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-zinc-300 hover:text-white transition-colors text-base"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-amber-400 text-zinc-950 hover:bg-amber-300 font-semibold w-full">
                <Link href="/book" onClick={() => setOpen(false)}>Book Now</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}