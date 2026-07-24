export default function About() {
  return (
    <section id="sobre" className="bg-black-soft py-24">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-burgundy-light">
            Sobre nós
          </p>
          <h2 className="mb-5 font-title text-3xl font-bold text-white md:text-4xl">
            Uma barbearia feita para valorizar sua identidade
          </h2>
          <p className="mb-4 text-gray">
            A William&apos;s Barber &amp; Lounge nasceu para oferecer muito mais que um corte de
            cabelo: entregamos uma experiência completa, com profissionais qualificados, técnicas
            tradicionais e modernas, e um ambiente pensado para o seu conforto.
          </p>
          <p className="mb-4 text-gray">
            Localizada na Av. Plínio Brasil Milano, em Porto Alegre, nossa estrutura combina o
            clima clássico das barbearias antigas com o padrão de atendimento que o público
            exigente procura.
          </p>

          <ul className="mt-6 grid gap-2.5">
            {[
              "Profissionais experientes e capacitados",
              "Ambiente climatizado e confortável",
              "Produtos de alta qualidade",
              "Agendamento on-line facilitado",
            ].map((item) => (
              <li key={item} className="relative pl-6 text-cream">
                <span className="absolute left-0 text-burgundy-light">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div
            className="rounded-lg border border-burgundy px-8 py-12 text-center"
            style={{
              background: "linear-gradient(160deg, #4a0a12, #0d0d0d)",
            }}
          >
            <strong className="block font-title text-4xl text-white">+1.500</strong>
            <span className="text-sm text-gray">seguidores no Instagram</span>
          </div>
        </div>
      </div>
    </section>
  );
}
