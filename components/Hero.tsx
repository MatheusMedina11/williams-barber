export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center bg-black"
      style={{
        background:
          "linear-gradient(180deg, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.85) 60%, #0d0d0d 100%), radial-gradient(ellipse at top right, #4a0a12 0%, transparent 55%), #0d0d0d",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1160px] px-6 pt-32">
        <p className="mb-5 text-sm uppercase tracking-[0.2em] text-burgundy-light">
          Barbearia · Porto Alegre
        </p>

        <h1 className="mb-6 max-w-[700px] font-title text-[clamp(2.2rem,5vw,3.6rem)] font-bold text-white">
          Tradição, precisão e estilo
          <br /> em cada corte.
        </h1>

        <p className="mb-5 font-title text-lg italic text-burgundy-light">
          &quot;A barbearia dos exigentes. Aqui, o detalhe é regra.&quot;
        </p>

        <p className="mb-9 max-w-[520px] text-base text-gray">
          Na William&apos;s Barber &amp; Lounge você encontra atendimento profissional,
          ambiente exclusivo e o cuidado que sua imagem merece.
        </p>

        <div className="mb-10 flex flex-wrap gap-4">
          <a
            href="https://wa.me/5551984516678"
            target="_blank"
            rel="noopener"
            className="rounded bg-burgundy px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-burgundy-light"
          >
            Agendar pelo WhatsApp
          </a>
          <a
            href="https://cashbarber.com.br/williamsbarberelounge/inicio"
            target="_blank"
            rel="noopener"
            className="rounded border border-burgundy-light px-7 py-3.5 text-sm font-medium text-burgundy-light transition-colors hover:bg-burgundy-light hover:text-white"
          >
            Assinar Plano de Cortes
          </a>
          <a
            href="#servicos"
            className="rounded border border-cream px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-white/10"
          >
            Ver serviços
          </a>
        </div>

        <div className="flex items-center gap-2.5 text-sm text-gray">
          <span className="tracking-[2px] text-[#d4a017]">★★★★★</span>
          <strong>4,9</strong>
          <span>(174 avaliações no Google)</span>
        </div>
      </div>
    </section>
  );
}
