const TESTIMONIALS = [
  "Atendimento excelente com ótimos profissionais, estrutura top e bons preços.",
  "Tratamento de primeira, ótimo serviço e preço justo.",
  "Localização perfeita, e uma vaga de estacionamento na frente.",
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-black-soft py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-[0.15em] text-burgundy-light">
          Depoimentos
        </p>
        <h2 className="mb-12 text-center font-title text-3xl font-bold text-white md:text-4xl">
          O que dizem nossos clientes
        </h2>

        <div className="mb-12 flex justify-center">
          <div className="flex items-center gap-3 text-gray">
            <strong className="font-title text-3xl text-white">4,9</strong>
            <span className="tracking-[2px] text-[#d4a017]">★★★★★</span>
            <span>174 avaliações no Google</span>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((quote) => (
            <blockquote key={quote} className="rounded border-l-4 border-burgundy bg-black p-7">
              <p className="mb-4 italic text-cream">&quot;{quote}&quot;</p>
              <footer className="text-sm text-gray">— Avaliação Google</footer>
            </blockquote>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-block rounded border border-burgundy px-7 py-3.5 text-sm font-medium text-burgundy transition-colors hover:bg-burgundy hover:text-white"
          >
            Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
