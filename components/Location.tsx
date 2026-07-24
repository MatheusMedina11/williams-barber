export default function Location() {
  return (
    <section id="localizacao" className="bg-black py-24">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-burgundy-light">
            Onde estamos
          </p>
          <h2 className="mb-5 font-title text-3xl font-bold text-white md:text-4xl">
            Localização e horário
          </h2>

          <ul className="mb-8 grid gap-4.5">
            <li className="flex flex-col gap-1">
              <strong className="text-sm uppercase tracking-[0.08em] text-burgundy-light">
                Endereço
              </strong>
              <span className="text-cream">
                Av. Plínio Brasil Milano, 56 - Auxiliadora, Porto Alegre - RS, 90520-000
              </span>
            </li>
            <li className="flex flex-col gap-1">
              <strong className="text-sm uppercase tracking-[0.08em] text-burgundy-light">
                Telefone
              </strong>
              <span className="text-cream">(51) 98451-6678</span>
            </li>
            <li className="flex flex-col gap-1">
              <strong className="text-sm uppercase tracking-[0.08em] text-burgundy-light">
                Horário
              </strong>
              <span className="text-cream">Segunda a sábado, a partir das 09h00</span>
            </li>
            <li className="flex flex-col gap-1">
              <strong className="text-sm uppercase tracking-[0.08em] text-burgundy-light">
                Instagram
              </strong>
              <span className="text-cream">@williams.barbearia</span>
            </li>
          </ul>

          <a
            href="https://wa.me/5551984516678"
            target="_blank"
            rel="noopener"
            className="inline-block rounded bg-burgundy px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-burgundy-light"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="min-h-80 overflow-hidden rounded-lg border border-white/10">
          <iframe
            title="Mapa William's Barber & Lounge"
            src="https://maps.google.com/maps?q=Av.%20Pl%C3%ADnio%20Brasil%20Milano%2C%2056%2C%20Porto%20Alegre&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
