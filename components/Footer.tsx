const FOOTER_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black-soft py-12">
      <div className="mx-auto flex max-w-[1160px] flex-wrap justify-between gap-6 px-6 text-sm text-gray">
        <div>
          <p className="mb-2 font-title text-xl font-bold text-white">
            William&apos;s <span className="text-burgundy-light">Barber &amp; Lounge</span>
          </p>
          <p>Av. Plínio Brasil Milano, 56 - Auxiliadora, Porto Alegre - RS</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-burgundy-light">
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-6 w-full text-center text-xs text-[#666]">
          © 2026 William&apos;s Barber &amp; Lounge. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
