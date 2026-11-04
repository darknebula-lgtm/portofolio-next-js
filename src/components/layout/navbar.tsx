"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Tentang", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-lg font-bold tracking-tight">
          VS <span className="text-green-500"></span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-neutral-900">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700 md:inline-block"
        >
          Let&apos;s Work Together
        </a>

        {/* Tombol menu mobile */}
        <button
          type="button"
          aria-label="Buka menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <ul className="space-y-1 border-t border-neutral-100 bg-white px-6 py-4 text-sm md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-neutral-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}