const DIFFERENTIALS = [
  {
    icon: "✂️",
    title: "Profissionais qualificados",
    description: "Equipe treinada e em constante atualização com as principais tendências.",
  },
  {
    icon: "🏆",
    title: "Avaliação 4,9 no Google",
    description: "Reconhecimento construído com base em atendimento e resultado consistentes.",
  },
  {
    icon: "📍",
    title: "Localização privilegiada",
    description: "Fácil acesso, com estacionamento disponível em frente ao estabelecimento.",
  },
  {
    icon: "📱",
    title: "Agendamento on-line",
    description: "Reserve seu horário com praticidade, direto pelo WhatsApp ou site.",
  },
  {
    icon: "🧴",
    title: "Produtos premium",
    description: "Utilizamos produtos de alta qualidade em todos os serviços.",
  },
  {
    icon: "🛋️",
    title: "Ambiente exclusivo",
    description: "Espaço pensado para seu conforto do início ao fim do atendimento.",
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="py-24"
      style={{ background: "linear-gradient(160deg, #4a0a12 0%, #0d0d0d 70%)" }}
    >
      <div className="mx-auto max-w-[1160px] px-6">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-[0.15em] text-[#d98a92]">
          Por que nos escolher
        </p>
        <h2 className="mb-12 text-center font-title text-3xl font-bold text-white md:text-4xl">
          Nossos diferenciais
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {DIFFERENTIALS.map((item) => (
            <div key={item.title} className="p-5 text-center">
              <div className="mb-4 text-3xl">{item.icon}</div>
              <h3 className="mb-2.5 font-title text-lg text-white">{item.title}</h3>
              <p className="text-sm text-gray">{item.description}</p>
            </div>
          ))}

          <div className="col-span-full mx-auto max-w-[360px] p-5 text-center">
            <div className="mb-4 font-title text-[2.6rem] leading-none text-burgundy-light">⚭</div>
            <h3 className="mb-2.5 font-title text-lg text-white">Atendimento inclusivo</h3>
            <p className="text-sm text-gray">
              Um ambiente acolhedor e respeitoso, para todos os clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
