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
      manifesto: 'Arrival is part of the experience.',
      sub: "We don't move people. We manage arrivals. Executive ground hospitality for those who understand that first impressions begin before the lobby.",
      cta1: 'Request Founding Access',
      cta2: 'Executive Inquiry',
      availabilityLabel: (n: number, total: number) =>
        `${n} of ${total} founding memberships available`,
    },
    experience: {
      label: '01 — The Arrival Experience',
      manifesto: "We don't move people.\nWe manage arrivals.",
      headline1: 'Hospitality that',
      headline2: 'precedes the destination.',
      sub: 'From the terminal to the lobby, every moment is managed. Not transported — hosted. Executive presence from the first second of arrival.',
      features: [
        {
          title: 'Executive Reception',
          desc: 'Personalized OLED sign. Met inside the terminal — not at the curb.',
        },
        {
          title: 'Concierge Protocol',
          desc: 'Real-time flight monitoring. Zero wait. Zero friction. Complete discretion.',
        },
        {
          title: 'Premium Hospitality',
          desc: 'Champagne, mineral water, curated selection — prepared before boarding.',
        },
        {
          title: 'Corporate Discretion',
          desc: 'Protocol-trained chauffeur. Uniformed. Confidentiality by design.',
        },
        {
          title: 'Hotel Partner Network',
          desc: 'Seamless handoff to Four Seasons, Faena, Alvear, and selected properties.',
        },
      ],
    },
    founders: {
      label: '02 — Founding Membership',
      eyebrow: 'Private Club · First Cohort · By Invitation',
      headline1: '30 Memberships.',
      headline2: 'No Exceptions.',
      sub: 'A private membership for those who lead. Thirty founding members. This cohort does not renew.',
      price: 'USD 1,500',
      priceNote: 'One-time. No renewals. No expiration.',
      features: [
        '10 executive airport experiences',
        'Personalized OLED reception sign',
        'Premium in-cabin hospitality',
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
      label: '03 — Executive Cabin Experience',
      eyebrow: 'The Cabin',
      headline1: 'An Executive',
      headline2: 'Atmosphere in Motion.',
      manifesto: 'Silence.\nPrivacy.\nPresence.',
      sub: 'Not a vehicle. An executive cabin. Designed for the space between the terminal and the destination — where the tone of the day is set.',
      points: [
        'Full acoustic isolation — complete silence',
        'Premium leather executive seating',
        'Curated ambient lighting system',
        'Climate precision and air purification',
        'Charging and private connectivity',
      ],
      note: 'Executive cabin configuration · Buenos Aires',
    },
    corporate: {
      label: '04 — Corporate Hospitality',
      manifesto: 'Your company\'s arrival\nexperience matters.',
      headline: 'How your clients arrive\nreflects your standards.',
      sub: 'From international delegations to board-level meetings — we manage the arrival moment with precision, discretion, and executive-grade hospitality.',
      clientsLabel: 'Who we serve',
      clients: [
        'Fortune 500 Executives',
        'International Delegations',
        'C-Suite Officers',
        'Performing Artists & Creatives',
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
      eyebrow: 'Buenos Aires · Hospitalidad Ejecutiva en Tierra',
      headline1: 'Tu llegada,',
      headline2: 'comienza aquí.',
      manifesto: 'La llegada es parte de la experiencia.',
      sub: 'No movemos personas. Gestionamos llegadas. Hospitalidad ejecutiva para quienes entienden que la primera impresión empieza antes del lobby.',
      cta1: 'Solicitar Acceso Founders',
      cta2: 'Consulta Ejecutiva',
      availabilityLabel: (n: number, total: number) =>
        `${n} de ${total} membresías founders disponibles`,
    },
    experience: {
      label: '01 — La Experiencia de Llegada',
      manifesto: 'No movemos personas.\nGestionamos llegadas.',
      headline1: 'Hospitalidad que',
      headline2: 'antecede al destino.',
      sub: 'De la terminal al lobby, cada momento está gestionado. No transportado — recibido. Presencia ejecutiva desde el primer segundo de llegada.',
      features: [
        {
          title: 'Recepción Ejecutiva',
          desc: 'Cartel OLED personalizado. Recibido dentro de la terminal, no en la vereda.',
        },
        {
          title: 'Protocolo Concierge',
          desc: 'Monitoreo de vuelo en tiempo real. Cero espera. Cero fricción. Discreción total.',
        },
        {
          title: 'Hospitalidad Premium',
          desc: 'Champagne, agua mineral, selección curada — preparado antes del embarque.',
        },
        {
          title: 'Discreción Corporativa',
          desc: 'Chofer capacitado en protocolo. Uniformado. Confidencialidad por diseño.',
        },
        {
          title: 'Red de Hoteles Partners',
          desc: 'Traspaso seamless a Four Seasons, Faena, Alvear y propiedades seleccionadas.',
        },
      ],
    },
    founders: {
      label: '02 — Membresía Fundadora',
      eyebrow: 'Club Privado · Primer Cohorte · Solo por Invitación',
      headline1: '30 Membresías.',
      headline2: 'Sin excepciones.',
      sub: 'Una membresía privada para quienes lideran. Treinta miembros fundadores. Este cohorte no se renueva.',
      price: 'USD 1.500',
      priceNote: 'Pago único. Sin renovaciones. Sin vencimiento.',
      features: [
        '10 experiencias ejecutivas en aeropuerto',
        'Cartel OLED de recepción personalizado',
        'Hospitalidad premium en cabina',
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
      label: '03 — Executive Cabin Experience',
      eyebrow: 'La Cabina',
      headline1: 'Una atmósfera',
      headline2: 'ejecutiva en movimiento.',
      manifesto: 'Silencio.\nPrivacidad.\nPresencia.',
      sub: 'No es un vehículo. Es una cabina ejecutiva. Diseñada para el espacio entre la terminal y el destino, donde se define el tono del día.',
      points: [
        'Aislamiento acústico total — silencio completo',
        'Asientos ejecutivos en cuero premium',
        'Sistema de iluminación ambiental curada',
        'Precisión climática y purificación de aire',
        'Carga y conectividad privada',
      ],
      note: 'Configuración cabina ejecutiva · Buenos Aires',
    },
    corporate: {
      label: '04 — Hospitalidad Corporativa',
      manifesto: 'La experiencia de llegada\nde tu empresa importa.',
      headline: 'Cómo llegan tus clientes\nrefleja tus estándares.',
      sub: 'Desde delegaciones internacionales hasta reuniones de directorio — gestionamos el momento de llegada con precisión, discreción y hospitalidad ejecutiva.',
      clientsLabel: 'Para quienes servimos',
      clients: [
        'Ejecutivos Fortune 500',
        'Delegaciones Internacionales',
        'Directores C-Suite',
        'Artistas y Creativos VIP',
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
