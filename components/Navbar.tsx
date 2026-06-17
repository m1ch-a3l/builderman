"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, useReducedMotion } from "framer-motion";
import CartDrawer from "@/components/CartDrawer";

const navLinks = [
  { href: "/store", label: "Store" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const shouldReduce = useReducedMotion();
  const pathname = usePathname();
  const isDark = pathname === "/" || (pathname === "/books" && !scrolled);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      animate={
        shouldReduce
          ? {}
          : {
              backgroundColor:
                pathname === "/"
                  ? scrolled
                    ? "rgba(11,20,64,0.92)"
                    : "rgba(11,20,64,0)"
                  : scrolled
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0)",
              backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
            }
      }
      transition={{ duration: 0.3 }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`font-display font-semibold tracking-tight transition-colors ${isDark ? "text-white hover:text-teal" : "text-ink hover:text-teal"}`}
          aria-label="Rev. Acheampong E.S. Builderman — home"
        >
          <span className="hidden sm:block text-lg">Rev. Acheampong E.S. Builderman</span>
          <span className="sm:hidden text-base">Rev. Builderman</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${isDark ? "text-white/70 hover:text-teal" : "text-stone hover:text-ink"}`}
                style={{ letterSpacing: "0.08em" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart icon — always visible */}
        <div className={`flex items-center gap-1 ${isDark ? "text-white hover:text-teal" : "text-ink hover:text-teal"}`}>
          <CartDrawer />
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
            <SheetTrigger
              render={
                <button
                  aria-label="Open navigation menu"
                  className={`p-2 transition-colors ${isDark ? "text-white hover:text-teal" : "text-ink hover:text-teal"}`}
                />
              }
            >
              <Menu size={22} />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-stone/20 w-72 pt-16"
              style={{ backgroundColor: "#F8F6F1" }}
            >
              <nav>
                <ul className="flex flex-col gap-6 px-6">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="font-display text-2xl text-ink hover:text-forest transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
