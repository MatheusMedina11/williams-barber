const PLANS = [
  {
    name: "Plano Essencial",
    price: "Corte mensal recorrente",
    highlight: false,
    items: ["Cortes de cabelo inclusos no mês", "Agendamento facilitado", "Sem taxa de fidelidade"],
  },
  {
    name: "Plano Completo",
    price: "Cabelo + barba recorrente",
    highlight: true,
    items: [
      "Cortes de cabelo e barba inclusos",
      "Prioridade no agendamento",
      "Desconto em serviços adicionais",
    ],
  },
  {
    name: "Plano Premium",
    price: "Experiência completa",
    highlight: false,
    items: [
      "Cabelo, barba e tratamentos inclusos",
      "Atendimento prioritário",
      "Benefícios exclusivos de assinante",
    ],
  },
];

export default function Plans() {
  return (
    <section id="planos" className="bg-black-soft py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-[0.15em] text-burgundy-light">
          Assine e economize
        </p>
        <h2 className="mb-5 text-center font-title text-3xl font-bold text-white md:text-4xl">
          Plano de Cortes
        </h2>
        <p className="mx-auto mb-10 max-w-[560px] text-center text-gray">
          Cuide da sua imagem o ano todo por um valor fixo mensal, com prioridade no agendamento.
        </p>

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-lg border p-9 text-center transition-all hover:-translate-y-1 hover:border-burgundy ${
                plan.highlight
                  ? "border-burgundy bg-[linear-gradient(160deg,#4a0a12_0%,#0d0d0d_75%)]"
                  : "border-white/10 bg-black"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-burgundy px-4 py-1.5 text-xs uppercase tracking-[0.08em] text-white">
                  Mais popular
                </span>
              )}
              <h3 className="mb-2 font-title text-xl text-white">{plan.name}</h3>
              <p className="mb-5 text-sm text-burgundy-light">{plan.price}</p>
              <ul className="grid gap-2.5 text-left">
                {plan.items.map((item) => (
                  <li key={item} className="relative pl-6 text-sm text-gray">
                    <span className="absolute left-0 text-burgundy-light">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://cashbarber.com.br/williamsbarberelounge/inicio"
            target="_blank"
            rel="noopener"
            className="inline-block rounded border border-burgundy-light px-7 py-3.5 text-sm font-medium text-burgundy-light transition-colors hover:bg-burgundy-light hover:text-white"
          >
            Ver planos e assinar
          </a>
        </div>
      </div>
    </section>
  );
}
