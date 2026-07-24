"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 border-b border-white/5 bg-black/90 backdrop-blur-sm transition-shadow ${
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.4)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-4">
        <a href="#hero" className="font-title text-xl font-bold text-white">
          William&apos;s <span className="text-burgundy-light">Barber &amp; Lounge</span>
        </a>

        <nav
          className={`fixed inset-x-0 top-16 flex flex-col gap-4 bg-black-soft px-6 py-5 transition-all md:static md:flex-row md:gap-8 md:bg-transparent md:p-0 md:opacity-100 md:translate-y-0 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0 md:translate-y-0 md:opacity-100"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray transition-colors hover:text-burgundy-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5551984516678"
          target="_blank"
          rel="noopener"
          className="hidden rounded bg-burgundy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-burgundy-light md:inline-block"
        >
          Agendar no WhatsApp
        </a>

        <button
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-cream" />
          <span className="h-0.5 w-6 bg-cream" />
          <span className="h-0.5 w-6 bg-cream" />
        </button>
      </div>
    </header>
  );
}
