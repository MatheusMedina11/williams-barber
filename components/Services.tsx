const SERVICES = [
  {
    title: "Corte de Cabelo",
    description: "Corte clássico, degradê, militar, cabelos cacheados e cortes personalizados.",
  },
  {
    title: "Barba",
    description:
      "Aparar, desenhar, barbear com navalha e toalha quente, tingimento e condicionamento.",
  },
  {
    title: "Barbearia Vintage",
    description: "Ritual clássico de barbearia, com técnicas tradicionais e navalha.",
  },
  {
    title: "Tratamentos Capilares",
    description: "Progressiva, hidratação, selagem e relaxamento capilar masculino.",
  },
  {
    title: "Depilação",
    description: "Depilação com cera, nariz e orelha, com técnica e discrição.",
  },
  {
    title: "Cortes Infantis",
    description: "Atendimento especializado e paciente para os pequenos clientes.",
  },
  {
    title: "Limpeza de Pele",
    description: "Cuidado facial para complementar sua rotina de bem-estar.",
  },
  {
    title: "Pacotes para Noivos",
    description: "Preparação completa para o grande dia, com atenção a cada detalhe.",
  },
  {
    title: "Visagismo",
    description:
      "Consultoria de estilo personalizada, alinhando corte e barba ao seu rosto e presença.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-black py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-[0.15em] text-burgundy-light">
          O que oferecemos
        </p>
        <h2 className="mb-5 text-center font-title text-3xl font-bold text-white md:text-4xl">
          Nossos serviços
        </h2>
        <p className="mx-auto mb-12 max-w-[560px] text-center text-gray">
          Cuidado completo para cabelo e barba, do clássico ao contemporâneo.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-white/5 bg-black-soft p-8 transition-all hover:-translate-y-1 hover:border-burgundy"
            >
              <h3 className="mb-2.5 font-title text-lg text-white">{service.title}</h3>
              <p className="text-sm text-gray">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
