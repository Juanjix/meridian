import {
  BadgeCheck,
  UserCheck,
  CalendarCheck,
  ArrowLeftRight,
  Building2,
} from "lucide-react";

const experiences = [
  {
    icon: BadgeCheck,
    title: "Cartel luminoso OLED",
    desc: "Tu nombre en pantalla de alta resolución. El primer detalle que hace la diferencia.",
  },
  {
    icon: BadgeCheck,
    title: "Catering premium",
    desc: "Champagne, aguas minerales, snacks. Cada preferencia, anticipada.",
  },
  {
    icon: UserCheck,
    title: "Chofer ejecutivo",
    desc: "Uniforme, protocolo, silencio. La discreción como estándar absoluto.",
  },
  {
    icon: CalendarCheck,
    title: "Reserva concierge",
    desc: "Confirmación en minutos. Sin apps, sin colas, sin fricción.",
  },
  {
    icon: ArrowLeftRight,
    title: "100% transferible",
    desc: "Usá las experiencias para socios, clientes, familia o artistas invitados.",
  },
  {
    icon: Building2,
    title: "Partners hoteleros",
    desc: "Coordinación directa con recepción. Four Seasons, Faena, Alvear.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="bg-ivory py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="overline mb-4">La experiencia</div>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-midnight mb-4 leading-tight">
            Cada detalle,
            <br />
            <span className="italic">diseñado.</span>
          </h2>
          <div className="gold-rule" />
          <p className="mt-6 text-sm text-slate-mid font-light leading-relaxed">
            No gestionamos traslados. Diseñamos llegadas. Desde el cartel
            luminoso hasta el champagne a bordo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-midnight/8">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-ivory p-8 group hover:bg-ivory-100 transition-colors duration-300">
                <Icon
                  size={20}
                  className="text-gold mb-5 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
                <h3 className="text-sm font-medium text-midnight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-mid font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
