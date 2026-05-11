export type Language = 'en' | 'es'

export const translations = {
  en: {
    nav: {
      experience: 'Experience',
      membership: 'Membership',
      reserve: 'Reserve',
      requestAccess: 'Request Access',
    },
    hero: {
      eyebrow: 'Buenos Aires · Executive Ground Hospitality',
      headline1: 'Your Arrival,',
      headline2: 'Handled.',
      sub: 'Executive ground hospitality designed for premium corporate and VIP experiences.',
      cta1: 'Request Founding Access',
      cta2: 'Learn More',
      availabilityLabel: (n: number, total: number) =>
        `${n} of ${total} founding memberships available`,
    },
    experience: {
      label: '01 — The Experience',
      headline1: 'The Standard',
      headline2: 'Has Changed.',
      sub: "We don't move people.\nWe manage arrivals.",
      features: [
        {
          title: 'Executive Reception',
          desc: 'Personalized OLED sign. Arrival in the terminal, not the curb.',
        },
        {
          title: 'Concierge Protocol',
          desc: 'Real-time flight monitoring. Zero wait. Zero friction.',
        },
        {
          title: 'Premium Hospitality',
          desc: 'Champagne, mineral water, curated selection — on board from departure.',
        },
        {
          title: 'Corporate Discretion',
          desc: 'Uniformed chauffeur. Protocol-trained. Confidentiality by design.',
        },
        {
          title: 'Hotel Partner Network',
          desc: 'Seamless handoff to Four Seasons, Faena, Alvear, and selected properties.',
        },
      ],
    },
    founders: {
      label: '02 — Founders Membership',
      headline1: '30 Memberships.',
      headline2: 'No Exceptions.',
      sub: 'Exclusive founding access. First cohort only.',
      price: 'USD 1,500',
      priceNote: 'One-time. No renewals. No expiration.',
      features: [
        '10 executive airport experiences',
        'Personalized OLED reception sign',
        'Premium in-vehicle hospitality',
        '100% transferable access',
        'Priority 2-hour concierge booking',
        'Direct WhatsApp concierge line',
        'Hotel partner network access',
      ],
      cta: 'Request Founding Access',
      limited: 'Founding cohort · Limited edition',
      availabilityNote: (n: number) => `${n} memberships remaining`,
    },
    vehicle: {
      label: '03 — The Vehicle',
      headline1: 'The Cabin.',
      headline2: 'Silence. Comfort. Discretion.',
      sub: 'An executive sanctuary in motion. Every detail calibrated for the journey between airport and destination.',
      points: [
        'Premium leather executive cabin',
        'Curated ambient lighting',
        'Climate control precision',
        'Complete acoustic isolation',
        'Charging ports & connectivity',
      ],
      note: 'Toyota HiAce · Executive configuration',
    },
    corporate: {
      label: '04 — Corporate Hospitality',
      headline: "Your Company's Arrival Experience Matters.",
      sub: 'How your clients, partners, and team arrive reflects your standards. We manage that moment with precision.',
      clientsLabel: 'Trusted by',
      clients: [
        'Fortune 500 Executives',
        'International Delegations',
        'C-Suite Officers',
        'Performing Artists',
        'VIP Hotel Guests',
        'Executive Assistants',
      ],
      cta: 'Corporate Inquiry',
    },
    finalCta: {
      headline1: 'Executive Hospitality',
      headline2: 'Begins Before',
      headline3: 'The Meeting.',
      sub: 'Founding access is limited. The standard is not.',
      cta: 'Request Founding Access',
    },
    footer: {
      tagline: 'Executive ground hospitality.',
      location: 'Buenos Aires, Argentina',
      servicesLabel: 'Services',
      contactLabel: 'Contact',
      links: {
        membership: 'Founders Membership',
        reserve: 'Reserve',
        experience: 'Experience',
      },
      contact: {
        email: 'hola@executivearrival.com',
        whatsapp: 'WhatsApp Concierge',
      },
      copyright: (year: number) =>
        `© ${year} Executive Arrival. All rights reserved.`,
      sub: 'Not a transfer. An arrival.',
    },
  },

  es: {
    nav: {
      experience: 'Experiencia',
      membership: 'Membresía',
      reserve: 'Reservar',
      requestAccess: 'Solicitar Acceso',
    },
    hero: {
      eyebrow: 'Buenos Aires · Executive Ground Hospitality',
      headline1: 'Tu llegada,',
      headline2: 'en las mejores manos.',
      sub: 'Hospitalidad ejecutiva terrestre diseñada para experiencias corporativas premium y VIP.',
      cta1: 'Solicitar Acceso Founders',
      cta2: 'Conocer más',
      availabilityLabel: (n: number, total: number) =>
        `${n} de ${total} membresías founders disponibles`,
    },
    experience: {
      label: '01 — La Experiencia',
      headline1: 'El Estándar',
      headline2: 'Ha Cambiado.',
      sub: 'No movemos personas.\nGestionamos llegadas.',
      features: [
        {
          title: 'Recepción Ejecutiva',
          desc: 'Cartel OLED personalizado. Llegada en la terminal, no en la vereda.',
        },
        {
          title: 'Protocolo Concierge',
          desc: 'Monitoreo de vuelo en tiempo real. Cero espera. Cero fricción.',
        },
        {
          title: 'Hospitalidad Premium',
          desc: 'Champagne, agua mineral, selección curada — a bordo desde la llegada.',
        },
        {
          title: 'Discreción Corporativa',
          desc: 'Chofer uniformado. Capacitado en protocolo. Confidencialidad por diseño.',
        },
        {
          title: 'Red de Hoteles Partners',
          desc: 'Traspaso seamless a Four Seasons, Faena, Alvear y propiedades seleccionadas.',
        },
      ],
    },
    founders: {
      label: '02 — Membresía Founders',
      headline1: '30 Membresías.',
      headline2: 'Sin excepciones.',
      sub: 'Acceso founding exclusivo. Solo primer cohorte.',
      price: 'USD 1.500',
      priceNote: 'Pago único. Sin renovaciones. Sin vencimiento.',
      features: [
        '10 experiencias ejecutivas en aeropuerto',
        'Cartel OLED de recepción personalizado',
        'Hospitalidad premium a bordo',
        'Acceso 100% transferible',
        'Reserva concierge prioritaria en 2 horas',
        'Línea WhatsApp concierge directa',
        'Acceso a red de hoteles partners',
      ],
      cta: 'Solicitar Acceso Founders',
      limited: 'Cohorte founding · Edición limitada',
      availabilityNote: (n: number) => `${n} membresías restantes`,
    },
    vehicle: {
      label: '03 — El Vehículo',
      headline1: 'La Cabina.',
      headline2: 'Silencio. Comodidad. Discreción.',
      sub: 'Un santuario ejecutivo en movimiento. Cada detalle calibrado para el trayecto entre aeropuerto y destino.',
      points: [
        'Cabina ejecutiva en cuero premium',
        'Iluminación ambiental curada',
        'Control de clima de precisión',
        'Aislamiento acústico completo',
        'Puertos de carga y conectividad',
      ],
      note: 'Toyota HiAce · Configuración ejecutiva',
    },
    corporate: {
      label: '04 — Hospitalidad Corporativa',
      headline: 'La experiencia de llegada de tu empresa importa.',
      sub: 'Cómo llegan tus clientes, socios y equipo refleja tus estándares. Gestionamos ese momento con precisión.',
      clientsLabel: 'Para',
      clients: [
        'Ejecutivos Fortune 500',
        'Delegaciones Internacionales',
        'Directores C-Suite',
        'Artistas y Performers',
        'Huéspedes VIP de Hoteles',
        'Asistentes Ejecutivos',
      ],
      cta: 'Consulta Corporativa',
    },
    finalCta: {
      headline1: 'La Hospitalidad Ejecutiva',
      headline2: 'Comienza Antes',
      headline3: 'de la Reunión.',
      sub: 'El acceso founding es limitado. El estándar, no.',
      cta: 'Solicitar Acceso Founders',
    },
    footer: {
      tagline: 'Hospitalidad ejecutiva terrestre.',
      location: 'Buenos Aires, Argentina',
      servicesLabel: 'Servicios',
      contactLabel: 'Contacto',
      links: {
        membership: 'Membresía Founders',
        reserve: 'Reservar',
        experience: 'Experiencia',
      },
      contact: {
        email: 'hola@executivearrival.com',
        whatsapp: 'WhatsApp Concierge',
      },
      copyright: (year: number) =>
        `© ${year} Executive Arrival. Todos los derechos reservados.`,
      sub: 'No es un traslado. Es una llegada.',
    },
  },
} as const

export type Translations = typeof translations.en
