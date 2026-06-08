export type Language = 'en' | 'es'

export const translations = {
  en: {
    nav: {
      experiences: 'Experiences',
      reserve: 'Reserve',
      gift: 'Gift',
      bookNow: 'Reserve Now',
    },

    hero: {
      eyebrow: 'Buenos Aires · Private Concierge Experiences',
      headline1: 'Buenos Aires,',
      headline2: 'Yours to Discover.',
      sub: 'Private access. Personal attention. Exclusively yours.',
      cta1: 'Reserve Your Experience',
      cta2: 'Explore Experiences',
      typewriterPhrases: [
        'Private Concierge. Active.',
        'Helicopter. Reserved.',
        'Don Julio. Tonight.',
        'Crystal Bar. Arranged.',
        'Buenos Aires. Yours.',
      ],
      // kept for backward compat
      availabilityLabel: (n: number, total: number) =>
        `${n} of ${total} founding memberships available`,
    },

    // ── 01: Private Arrival Concierge ────────────────────────────────────────
    experience: {
      label: '01 — Private Arrival Concierge',
      manifesto: "Your Buenos Aires\nbegins the moment you land.",
      headline1: 'Your arrival,',
      headline2: 'privately hosted.',
      sub: 'From the tarmac to your suite — a private concierge meets you at arrivals, orchestrates every detail, and accompanies you in an executive cabin. Your Buenos Aires begins here.',
      features: [
        {
          title: 'Personal Concierge',
          desc: 'A dedicated host personally awaiting you at arrivals — present before the doors open, holding your name with care.',
        },
        {
          title: 'Real-Time Intelligence',
          desc: 'Flight monitoring, proactive updates, zero wait. We anticipate so you never have to.',
        },
        {
          title: 'The Arrival Ritual',
          desc: 'Champagne, mineral water, and seasonal selections — prepared in your executive cabin before you arrive.',
        },
        {
          title: 'Complete Discretion',
          desc: 'Protocol-trained, uniformed host. Confidentiality and professionalism by design.',
        },
        {
          title: 'Partner Hotel Network',
          desc: 'Direct handoff to Four Seasons, Faena, Alvear, and our network of Buenos Aires properties.',
        },
      ],
    },

    // ── Why Us ───────────────────────────────────────────────────────────────
    whyUs: {
      label: 'Why Our Guests Choose Us',
      pillars: [
        {
          number: '01',
          title: 'Private Experiences',
          desc: "We don't offer itineraries. We arrange your Buenos Aires. Each experience takes shape around your preferences, your pace, your people.",
        },
        {
          number: '02',
          title: 'Private Concierge',
          desc: 'Recommendations, reservations, logistics and personal support — at every step. Your concierge is present before, during, and after each experience.',
        },
        {
          number: '03',
          title: 'Executive Cabin',
          desc: 'Your private sanctuary throughout the city. Silence, comfort and presence — a mobile retreat designed for those who never settle.',
        },
      ],
    },

    // ── 02: Signature Experiences ────────────────────────────────────────────
    signatureExperiences: {
      label: '02 — Signature Experiences',
      headline: 'Signature\nExperiences',
      sub: 'Buenos Aires experiences for those who understand that a city reveals itself through its finest moments.',

      // Hero card — price anchor
      helicopter: {
        badge: 'Signature Experience',
        title: 'Helicopter Buenos Aires',
        price: 'USD 1,950',
        priceNote: 'per group',
        subtext: 'Up to 4 guests · Buenos Aires from above',
        desc: 'A private flight above Buenos Aires. See the city as it was meant to be seen — rivers, skyline, and landscape unfolding beneath you. Champagne service and an executive cabin await on the ground.',
        itinerary: [
          'Private executive cabin pickup — Hotel or Airport',
          'Private helicopter flight — 45 minutes',
          'Panoramic views of Río de la Plata & skyline',
          'Champagne and gourmet in-flight service',
          'Return in your private executive cabin',
        ],
        cta: 'Reserve Helicopter',
      },

      // Stack top
      fullDay: {
        badge: '',
        title: 'Buenos Aires Full Day',
        price: 'USD 1,800',
        priceNote: 'per group',
        subtext: 'Up to 4 guests · The complete Buenos Aires',
        desc: 'A Buenos Aires day reserved entirely for you. From your door to the finest table in the city, ending with cocktails at the most iconic bar.',
        features: [
          'Private executive cabin pickup',
          'Lunch at Don Julio',
          'Private city experience — Palermo & Recoleta',
          'Cocktails at Crystal Bar, Alvear Hotel',
          'Return in private executive cabin',
        ],
        cta: 'Reserve Full Day',
      },

      // Stack bottom
      byNight: {
        title: 'Buenos Aires By Night',
        price: 'USD 650',
        priceNote: 'per group',
        subtext: 'Dinner & Nightlife',
        desc: 'Buenos Aires after sunset. From the finest table in the city to its most exclusive venues — all in your private executive cabin.',
        features: [
          'Premium dinner reservation',
          'Exclusive venue access',
          'Private executive cabin all night',
          'Concierge coordination',
        ],
        cta: 'Reserve',
      },
    },

    // ── 03: Executive Cabin ──────────────────────────────────────────────────
    vehicle: {
      label: '03 — The Executive Cabin',
      eyebrow: 'The Executive Cabin',
      headline1: 'A Private',
      headline2: 'Sanctuary in Motion.',
      manifesto: 'Silence.\nPrivacy.\nPresence.',
      sub: 'Not a means of getting somewhere. A private sanctuary designed for Buenos Aires — the space between one experience and the next, where every detail is calibrated for silence, comfort, and presence.',
      points: [
        'Full acoustic isolation — complete silence',
        'Premium leather executive seating',
        'Bespoke ambient lighting system',
        'Climate precision and air purification',
        'Charging and private connectivity',
      ],
      note: 'Executive cabin · Buenos Aires · Private',
    },

    // ── 04: Gift Buenos Aires ────────────────────────────────────────────────
    giftExperience: {
      label: '04 — Gift Buenos Aires',
      headline1: 'The City,',
      headline2: 'Gift Wrapped.',
      sub: 'A gift beyond expectation. For those who already have everything — but haven\'t seen this Buenos Aires.',
      cards: [
        {
          id: 'arrival',
          title: 'Airport Arrival Experience',
          price: 'USD 250',
          desc: 'A private arrival designed around them — from the tarmac to their suite, with a personal concierge and executive cabin.',
          tag: 'Arrival Experience',
        },
        {
          id: 'signature',
          title: 'Buenos Aires Signature',
          price: 'USD 1,800',
          desc: 'The complete Buenos Aires day. Don Julio, private city experience, cocktails at Crystal Bar, Alvear.',
          tag: 'Most Gifted',
        },
        {
          id: 'helicopter',
          title: 'Helicopter Experience',
          price: 'USD 1,950',
          desc: 'A private flight above Buenos Aires. The most exclusive gift in the city — views no postcard can capture.',
          tag: 'Signature Experience',
        },
      ],
      forWhom: ['Travelers', 'Families', 'Corporate Gifts', 'Executive Gifting'],
      cta: 'Gift This Experience',
      ctaSub: 'Digital gift link or physical luxury box delivery — your choice.',
    },

    // ── 05: Social Proof ─────────────────────────────────────────────────────
    corporate: {
      label: '05 — What Our Guests Remember',
      manifesto: 'They remember\nhow they felt.',
      headline: 'Not the journey.\nThe feeling.',
      sub: 'Our guests don\'t remember a transfer. They remember being cared for. Anticipated. Welcomed. The moment that told them — this is different. That is what we deliver, every time.',
      clientsLabel: 'Those who trust us',
      clients: [
        'International Travelers',
        'Fortune 500 Executives',
        'Corporate Delegations',
        'VIP Hotel Guests',
        'Performing Artists',
        'Executive Assistants',
      ],
      cta: 'Reserve Your Experience',
    },

    // ── Final CTA ────────────────────────────────────────────────────────────
    finalCta: {
      headline1: 'Buenos Aires',
      headline2: 'Is Waiting',
      headline3: 'For You.',
      sub: 'Private concierge. Personal attention. Impeccably delivered. Your Buenos Aires awaits.',
      cta: 'Reserve Your Experience',
    },

    // ── Footer ───────────────────────────────────────────────────────────────
    footer: {
      tagline: 'Private concierge experiences.',
      location: 'Buenos Aires, Argentina',
      servicesLabel: 'Experiences',
      contactLabel: 'Contact',
      links: {
        experiences: 'Signature Experiences',
        reserve: 'Reserve',
        gift: 'Gift an Experience',
      },
      contact: {
        email: 'hola@millenniumtravel.com.ar',
        whatsapp: 'WhatsApp Concierge',
      },
      copyright: (year: number) =>
        `© ${year} BA Vita Luxury Transfer. All rights reserved.`,
      sub: 'The concierge is the service. The cabin is the experience.',
    },

    // ── Booking flow ─────────────────────────────────────────────────────────
    bookingPage: {
      eyebrow: 'Reserve',
      headline: 'Reserve Your Experience',
      steps: ['Flight', 'Guest', 'Preferences', 'Confirm'] as const,
      step1: {
        airportLabel: 'Airport',
        dateLabel: 'Arrival date',
        timeLabel: 'Arrival time',
        flightLabel: 'Flight number',
        optional: '(optional)',
        flightPlaceholder: 'e.g. AA 930 · LA 406',
        flightNote: 'Allows us to monitor your flight in real time.',
        destLabel: 'Destination',
        destPlaceholder: 'Hotel, address, or venue',
        continue: 'Continue →',
      },
      step2: {
        nameLabel: 'Guest name',
        namePlaceholder: 'Full name — your concierge will greet your guest personally',
        nameNote: 'Your concierge will use this name to receive your guest at arrivals.',
        countLabel: 'Number of guests',
        passengerUnit: 'guest(s)',
        codeLabel: 'Membership code',
        optional: '(optional)',
        codePlaceholder: 'e.g. MRD-F-007',
        codeNote: 'If the guest is not the holder, enter the code that authorizes the experience.',
        back: '← Back',
        continue: 'Continue →',
      },
      step3: {
        cateringLabel: 'Cabin preferences',
        notesLabel: 'Additional notes',
        optional: '(optional)',
        notesPlaceholder: 'Special preferences, concierge instructions, hotel coordination...',
        back: '← Back',
        review: 'Review experience →',
        catering: {
          standard: 'Standard — Champagne + mineral water',
          'no-alcohol': 'No alcohol — Premium juices + water',
          custom: 'Custom selection',
          none: 'No cabin service',
        },
      },
      step4: {
        summaryLabel: 'Experience Summary',
        keys: {
          airport: 'Airport',
          dateTime: 'Date & time',
          flight: 'Flight',
          destination: 'Destination',
          passengerSign: 'Guest',
          passengers: 'Guests',
          catering: 'Cabin service',
          remaining: 'Remaining experiences',
        },
        note: 'Your concierge will confirm via WhatsApp within 15 minutes. They will contact you 30 minutes before your flight arrives.',
        back: '← Back',
        confirm: 'Confirm Experience →',
        confirming: 'Confirming...',
      },
    },

    confirmedBooking: {
      headline: 'Experience confirmed.',
      sub: 'Your concierge has your booking. Expect a WhatsApp message within 15 minutes with every detail — so you don\'t have to think about a thing.',
      summaryLabel: 'Experience Reference',
      keys: {
        code: 'Reference',
        airport: 'Airport',
        status: 'Status',
        remaining: 'Remaining experiences',
      },
      statusValue: 'Confirmed',
      remainingValue: '9 of 10',
      ctaNew: 'Reserve another',
      ctaHome: 'Back to home',
    },

    // ── Legacy (pages preserved, not linked) ─────────────────────────────────
    founders: {
      label: '02 — Founding Membership',
      eyebrow: 'Private Club · First Edition · By Invitation',
      headline1: '30 Memberships',
      headline2: 'Limited Per Year.',
      sub: 'A private membership for those who lead. Thirty slots per year. Once full, access closes until the next edition.',
      price: 'USD 2,200',
      priceNote: 'One-time. No renewals. No expiration.',
      features: [
        '10 executive airport experiences',
        'Dedicated host awaiting every arrival',
        'Premium in-cabin hospitality',
        '100% transferable benefit',
        'Priority 2-hour concierge booking',
        'Direct WhatsApp concierge line',
        'Hotel partner network access',
        'Gift card — 1 experience to share',
      ],
      cta: 'Request Founding Access',
      limited: 'Founders Edition · Limited per year',
      availabilityNote: (n: number) => `${n} memberships remaining`,
    },

    membershipPage: {
      eyebrow: 'Founders Edition · Limited',
      label: 'Founders Membership',
      headline1: 'Executive Airport',
      headline2: 'Experience',
      cardBadge: 'BA Vita Luxury Transfer',
      cardTitle: 'Membership includes',
      cardSub: 'Executive Airport Experience · Founders Edition',
      priceNote: (n: number) => `one-time · ${n} experiences included`,
      availability: 'Availability',
      availabilityCount: (n: number, total: number) => `${n} of ${total} remaining`,
      features: [
        { title: (n: number) => `${n} executive airport experiences`, sub: 'EZE · AEP · Arrivals & departures · No expiration' },
        { title: () => 'Dedicated arrival host', sub: 'Personally present at arrivals — your passenger is expected, not searched for' },
        { title: () => 'Premium on-board hospitality', sub: 'Champagne, mineral water, curated snacks. Customizable per experience.' },
        { title: () => '100% transferable benefit, no restrictions', sub: 'Executives, partners, clients, family, artists, guests' },
        { title: () => 'Absolute reservation priority', sub: 'Guaranteed confirmation with 2-hour advance notice' },
        { title: () => 'Direct concierge attention', sub: 'Executive WhatsApp · No bots · No wait' },
        { title: () => 'Hotel partner network access', sub: 'Direct coordination with hotel reception' },
        { title: () => 'Gift card — 1 experience', sub: 'Share a single experience with anyone you choose' },
      ],
      sidebarTitle: 'Acquire your founders membership',
      sidebarDesc: 'Complete the purchase form. We accept Mercado Pago, international card (Stripe), and bank transfer.',
      ctaAcquire: 'Acquire Membership',
      ctaWhatsapp: 'Inquire via WhatsApp',
      guarantees: [
        'No contracts or automatic renewals',
        'Experiences have no expiration date',
        'Transferable to anyone, no restrictions',
        'Direct concierge support via WhatsApp',
      ],
      quote: '"The journey begins before entering the vehicle."',
    },

    checkoutPage: {
      eyebrow: 'Founders Membership',
      headline: 'Complete Acquisition',
      holderSection: 'Holder Information',
      nameLabel: 'Full name',
      namePlaceholder: 'First and last name',
      companyLabel: 'Company',
      optional: '(optional)',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      whatsappPlaceholder: '+54 9 11 xxxx xxxx',
      paymentSection: 'Payment Method',
      paymentMethods: [
        { id: 'mercadopago' as const, label: 'Mercado Pago', sub: 'Card · Installments · Argentina' },
        { id: 'stripe' as const,      label: 'Stripe',       sub: 'Visa · Mastercard · International' },
        { id: 'transfer' as const,    label: 'Wire Transfer', sub: 'USD · Bank · Manual' },
      ],
      cardNumberLabel: 'Card number',
      expiryLabel: 'Expiry',
      cvvLabel: 'CVV',
      installmentsLabel: 'Installments',
      installmentOptions: (price: number) => [
        { value: 1, label: `1 payment — USD ${price}` },
        { value: 3, label: `3 installments — USD ${Math.round(price / 3)} each` },
        { value: 6, label: `6 installments — USD ${Math.round(price / 6)} each` },
      ],
      wireTitle: 'USD Wire Transfer Details',
      wireNote: (email: string) => `Send receipt to ${email} and we will confirm your membership within 2 business hours.`,
      summaryLabel: 'Order Summary',
      summaryRows: (price: number, experiences: number) => [
        ['Founders Edition Membership', `USD ${price.toLocaleString()}`],
        ['Experiences included', String(experiences)],
        ['Transferability', 'Unlimited'],
        ['Expiration', 'None'],
      ] as [string, string][],
      total: 'Total',
      remaining: (n: number) => `${n} memberships remaining.`,
      noRestock: 'Founders memberships will not be restocked at this price.',
      submit: 'Confirm Founders Membership →',
      processing: 'Processing...',
      security: 'Secure payment · Encrypted data · No automatic renewal',
    },

    confirmedCheckout: {
      headline1: 'Welcome,',
      headline2: 'Founder Member.',
      sub: 'Your membership was processed. In the next few minutes you will receive your member code and WhatsApp concierge access.',
      summaryLabel: 'Your membership',
      keys: {
        code: 'Code',
        type: 'Type',
        experiences: 'Experiences',
        expiration: 'Expiration',
        transferable: 'Transferable',
      },
      typeValue: 'Founders Edition',
      experiencesValue: '10 available',
      expirationValue: 'No expiration',
      transferableValue: 'Yes — unlimited',
      ctaBook: 'Make your first booking →',
      ctaHome: 'Back to home',
    },

    executiveExperiences: {
      label: '05 — Executive Experiences',
      headline: 'Executive Experiences',
      sub: 'Private executive hospitality designed around arrival, discretion and premium ground experiences.',
      transfer: {
        title: 'Airport Executive Transfer',
        price: 'USD 250',
        priceNote: 'per experience',
        subtext: 'Hotel · Airport · Hotel',
        desc: 'Private executive ground hospitality designed for premium airport arrivals, hotel transfers and corporate mobility experiences.',
        features: [
          'Executive chauffeur',
          'VIP reception',
          'Premium onboard hospitality',
          'Priority coordination',
          'Executive discretion',
        ],
        cta: 'Request Executive Transfer',
      },
      membership: {
        badge: 'Limited to 30 Members',
        title: 'Founding Membership',
        price: 'USD 2,200',
        priceNote: 'one-time',
        subtext: 'Limited Founders Access',
        desc: 'A private executive hospitality membership including transferable airport experiences, concierge priority and premium arrival coordination.',
        features: [
          '10 executive airport experiences',
          'Fully transferable benefit',
          'Concierge priority booking',
          'VIP executive reception',
          'Founding member status',
          'Premium hospitality service',
        ],
        cta: 'Request Founding Access',
      },
    },
  },

  // ════════════════════════════════════════════════════════════════════════════
  // ESPAÑOL
  // ════════════════════════════════════════════════════════════════════════════

  es: {
    nav: {
      experiences: 'Experiencias',
      reserve: 'Reservar',
      gift: 'Regalar',
      bookNow: 'Reservar Ahora',
    },

    hero: {
      eyebrow: 'Buenos Aires · Experiencias Concierge Privadas',
      headline1: 'Buenos Aires,',
      headline2: 'Tuyo Por Descubrir.',
      sub: 'Acceso privado. Atención personal. Exclusivamente tuyas.',
      cta1: 'Reservar Experiencia',
      cta2: 'Ver Experiencias',
      typewriterPhrases: [
        'Concierge Privado. Activo.',
        'Helicóptero. Reservado.',
        'Don Julio. Esta Noche.',
        'Crystal Bar. Coordinado.',
        'Buenos Aires. Tuyo.',
      ],
      availabilityLabel: (n: number, total: number) =>
        `${n} de ${total} membresías founders disponibles`,
    },

    experience: {
      label: '01 — Concierge de Llegada Privada',
      manifesto: "Tu Buenos Aires\ncomienza en el momento en que aterrizás.",
      headline1: 'Tu llegada,',
      headline2: 'personalmente atendida.',
      sub: 'Desde la pista hasta tu suite — un concierge privado te recibe en llegadas, orquesta cada detalle y te acompaña en una cabina ejecutiva. Tu Buenos Aires comienza aquí.',
      features: [
        {
          title: 'Concierge Personal',
          desc: 'Un anfitrión dedicado esperándote personalmente en llegadas — presente antes de que se abran las puertas, con tu nombre en alto.',
        },
        {
          title: 'Inteligencia en Tiempo Real',
          desc: 'Monitoreo de vuelo, actualizaciones proactivas, cero espera. Anticipamos para que vos no tengas que hacerlo.',
        },
        {
          title: 'El Ritual de Llegada',
          desc: 'Champagne, agua mineral y selecciones de temporada — preparados en tu cabina ejecutiva antes de que llegues.',
        },
        {
          title: 'Discreción Total',
          desc: 'Anfitrión capacitado en protocolo, uniformado. Confidencialidad y profesionalismo por diseño.',
        },
        {
          title: 'Red de Hoteles Partners',
          desc: 'Traspaso directo a Four Seasons, Faena, Alvear y nuestra red de propiedades en Buenos Aires.',
        },
      ],
    },

    whyUs: {
      label: 'Por Qué Nos Eligen',
      pillars: [
        {
          number: '01',
          title: 'Experiencias Privadas',
          desc: 'No ofrecemos itinerarios. Organizamos tu Buenos Aires. Cada experiencia toma forma alrededor de tus preferencias, tu ritmo y tu gente.',
        },
        {
          number: '02',
          title: 'Concierge Privado',
          desc: 'Recomendaciones, reservas, logística y atención personal — en cada paso. Tu concierge está presente antes, durante y después de cada experiencia.',
        },
        {
          number: '03',
          title: 'Cabina Ejecutiva',
          desc: 'Tu santuario privado en la ciudad. Silencio, confort y presencia — un refugio móvil diseñado para quienes nunca ceden.',
        },
      ],
    },

    signatureExperiences: {
      label: '02 — Experiencias Exclusivas',
      headline: 'Experiencias\nExclusivas',
      sub: 'Experiencias en Buenos Aires para quienes entienden que una ciudad se revela a través de sus mejores momentos.',

      helicopter: {
        badge: 'Experiencia Signature',
        title: 'Helicóptero Buenos Aires',
        price: 'USD 1.950',
        priceNote: 'por grupo',
        subtext: 'Hasta 4 personas · Buenos Aires desde las alturas',
        desc: 'Un vuelo privado sobre Buenos Aires. Vé la ciudad como nunca antes — ríos, skyline y paisaje desplegándose bajo vos. Servicio de champagne y cabina ejecutiva te esperan en tierra.',
        itinerary: [
          'Cabina ejecutiva privada — Hotel o Aeropuerto',
          'Vuelo privado en helicóptero — 45 minutos',
          'Vistas panorámicas del Río de la Plata y skyline',
          'Champagne y servicio gourmet durante el vuelo',
          'Regreso en cabina ejecutiva privada',
        ],
        cta: 'Reservar Helicóptero',
      },

      fullDay: {
        badge: '',
        title: 'Buenos Aires Full Day',
        price: 'USD 1.800',
        priceNote: 'por grupo',
        subtext: 'Hasta 4 personas · El Buenos Aires completo',
        desc: 'Un día en Buenos Aires reservado enteramente para vos. Desde tu puerta hasta la mejor mesa de la ciudad, terminando con cócteles en el bar más icónico.',
        features: [
          'Cabina ejecutiva privada',
          'Almuerzo en Don Julio',
          'Experiencia privada en la ciudad — Palermo y Recoleta',
          'Cócteles en Crystal Bar, Hotel Alvear',
          'Regreso en cabina ejecutiva privada',
        ],
        cta: 'Reservar Full Day',
      },

      byNight: {
        title: 'Buenos Aires de Noche',
        price: 'USD 650',
        priceNote: 'por grupo',
        subtext: 'Cena y Vida Nocturna',
        desc: 'Buenos Aires después del atardecer. Desde la mejor mesa de la ciudad hasta sus locales más exclusivos — en tu cabina ejecutiva privada.',
        features: [
          'Reserva de cena premium',
          'Acceso a locales exclusivos',
          'Cabina ejecutiva privada toda la noche',
          'Coordinación concierge',
        ],
        cta: 'Reservar',
      },
    },

    vehicle: {
      label: '03 — La Cabina Ejecutiva',
      eyebrow: 'La Cabina Ejecutiva',
      headline1: 'Un Santuario',
      headline2: 'Privado en Movimiento.',
      manifesto: 'Silencio.\nPrivacidad.\nPresencia.',
      sub: 'No es un medio de trasladarse. Es un santuario privado diseñado para Buenos Aires — el espacio entre una experiencia y la siguiente, donde cada detalle está calibrado para el silencio, el confort y la presencia.',
      points: [
        'Aislamiento acústico total — silencio completo',
        'Asientos ejecutivos en cuero premium',
        'Sistema de iluminación ambiental a medida',
        'Precisión climática y purificación de aire',
        'Carga y conectividad privada',
      ],
      note: 'Cabina ejecutiva · Buenos Aires · Privado',
    },

    giftExperience: {
      label: '04 — Regalá Buenos Aires',
      headline1: 'La Ciudad,',
      headline2: 'Para Regalar.',
      sub: 'Un regalo más allá de lo esperado. Para quienes ya tienen todo — pero aún no conocieron este Buenos Aires.',
      cards: [
        {
          id: 'arrival',
          title: 'Experiencia de Llegada',
          price: 'USD 250',
          desc: 'Una llegada privada diseñada para ellos — desde la pista hasta su suite, con concierge personal y cabina ejecutiva.',
          tag: 'Experiencia de Llegada',
        },
        {
          id: 'signature',
          title: 'Buenos Aires Signature',
          price: 'USD 1.800',
          desc: 'El día completo de Buenos Aires. Don Julio, experiencia privada en la ciudad, cócteles en Crystal Bar, Alvear.',
          tag: 'El Más Regalado',
        },
        {
          id: 'helicopter',
          title: 'Experiencia Helicóptero',
          price: 'USD 1.950',
          desc: 'Un vuelo privado sobre Buenos Aires. El regalo más exclusivo de la ciudad — vistas que ninguna postal puede capturar.',
          tag: 'Experiencia Signature',
        },
      ],
      forWhom: ['Viajeros', 'Familias', 'Regalos Corporativos', 'Regalos Ejecutivos'],
      cta: 'Regalar Esta Experiencia',
      ctaSub: 'Link de regalo digital o caja de lujo física a domicilio — tu elección.',
    },

    corporate: {
      label: '05 — Lo Que Recuerdan Nuestros Huéspedes',
      manifesto: 'Recuerdan\ncómo se sintieron.',
      headline: 'No el recorrido.\nEl sentimiento.',
      sub: 'Nuestros huéspedes no recuerdan un traslado. Recuerdan haber sido atendidos. Anticipados. Bienvenidos. El momento que les dijo — esto es diferente. Eso es lo que entregamos, siempre.',
      clientsLabel: 'Quienes confían en nosotros',
      clients: [
        'Viajeros Internacionales',
        'Ejecutivos Fortune 500',
        'Delegaciones Corporativas',
        'Huéspedes VIP de Hoteles',
        'Artistas en Gira',
        'Asistentes Ejecutivos',
      ],
      cta: 'Reservar Experiencia',
    },

    finalCta: {
      headline1: 'Buenos Aires',
      headline2: 'Te Espera',
      headline3: 'A Vos.',
      sub: 'Concierge privado. Atención personal. Impecablemente entregado. Tu Buenos Aires te espera.',
      cta: 'Reservar Experiencia',
    },

    footer: {
      tagline: 'Experiencias concierge privadas.',
      location: 'Buenos Aires, Argentina',
      servicesLabel: 'Experiencias',
      contactLabel: 'Contacto',
      links: {
        experiences: 'Experiencias Exclusivas',
        reserve: 'Reservar',
        gift: 'Regalar una Experiencia',
      },
      contact: {
        email: 'hola@millenniumtravel.com.ar',
        whatsapp: 'WhatsApp Concierge',
      },
      copyright: (year: number) =>
        `© ${year} BA Vita Luxury Transfer. Todos los derechos reservados.`,
      sub: 'El concierge es el servicio. La cabina es la experiencia.',
    },

    bookingPage: {
      eyebrow: 'Reservar',
      headline: 'Reservar tu Experiencia',
      steps: ['Vuelo', 'Huésped', 'Preferencias', 'Confirmar'] as const,
      step1: {
        airportLabel: 'Aeropuerto',
        dateLabel: 'Fecha de llegada',
        timeLabel: 'Hora de llegada',
        flightLabel: 'Número de vuelo',
        optional: '(opcional)',
        flightPlaceholder: 'ej. AA 930 · LA 406',
        flightNote: 'Nos permite monitorear tu vuelo en tiempo real.',
        destLabel: 'Destino',
        destPlaceholder: 'Hotel, dirección o lugar',
        continue: 'Continuar →',
      },
      step2: {
        nameLabel: 'Nombre del huésped',
        namePlaceholder: 'Nombre completo — tu concierge recibirá al huésped personalmente',
        nameNote: 'Tu concierge usará este nombre para recibir al huésped en llegadas.',
        countLabel: 'Cantidad de huéspedes',
        passengerUnit: 'huésped(es)',
        codeLabel: 'Código de membresía',
        optional: '(opcional)',
        codePlaceholder: 'ej. MRD-F-007',
        codeNote: 'Si el huésped no es el titular, ingresá el código que autoriza la experiencia.',
        back: '← Volver',
        continue: 'Continuar →',
      },
      step3: {
        cateringLabel: 'Preferencias de cabina',
        notesLabel: 'Notas adicionales',
        optional: '(opcional)',
        notesPlaceholder: 'Preferencias especiales, instrucciones al concierge, coordinación con hotel...',
        back: '← Volver',
        review: 'Revisar experiencia →',
        catering: {
          standard: 'Estándar — Champagne + agua mineral',
          'no-alcohol': 'Sin alcohol — Jugos premium + agua',
          custom: 'Selección personalizada',
          none: 'Sin servicio de cabina',
        },
      },
      step4: {
        summaryLabel: 'Resumen de la Experiencia',
        keys: {
          airport: 'Aeropuerto',
          dateTime: 'Fecha y hora',
          flight: 'Vuelo',
          destination: 'Destino',
          passengerSign: 'Huésped',
          passengers: 'Huéspedes',
          catering: 'Servicio de cabina',
          remaining: 'Experiencias restantes',
        },
        note: 'Tu concierge confirmará por WhatsApp en 15 minutos. Se comunicará 30 minutos antes de que aterrice tu vuelo.',
        back: '← Volver',
        confirm: 'Confirmar Experiencia →',
        confirming: 'Confirmando...',
      },
    },

    confirmedBooking: {
      headline: 'Experiencia confirmada.',
      sub: 'Tu concierge tiene tu reserva. Esperá un mensaje por WhatsApp en 15 minutos con cada detalle — para que no tengas que pensar en nada.',
      summaryLabel: 'Referencia de Experiencia',
      keys: {
        code: 'Referencia',
        airport: 'Aeropuerto',
        status: 'Estado',
        remaining: 'Experiencias restantes',
      },
      statusValue: 'Confirmada',
      remainingValue: '9 de 10',
      ctaNew: 'Reservar otra',
      ctaHome: 'Volver al inicio',
    },

    founders: {
      label: '02 — Membresía Fundadora',
      eyebrow: 'Club Privado · Primera Edición · Solo por Invitación',
      headline1: '30 Membresías',
      headline2: 'limitadas al año.',
      sub: 'Una membresía privada para quienes lideran. Treinta lugares por año.',
      price: 'USD 2.200',
      priceNote: 'Pago único. Sin renovaciones. Sin vencimiento.',
      features: [
        '10 experiencias ejecutivas en aeropuerto',
        'Anfitrión dedicado en cada llegada',
        'Hospitalidad premium en cabina',
        'Beneficio 100% transferible',
        'Reserva concierge prioritaria en 2 horas',
        'Línea WhatsApp concierge directa',
        'Acceso a red de hoteles partners',
        'Gift card de 1 viaje para regalar',
      ],
      cta: 'Solicitar Acceso Founders',
      limited: 'Edición Founders · Limitada al año',
      availabilityNote: (n: number) => `${n} membresías restantes`,
    },

    membershipPage: {
      eyebrow: 'Founders Edition · Limitada',
      label: 'Membresía Founders',
      headline1: 'Experiencia Ejecutiva',
      headline2: 'en Aeropuerto',
      cardBadge: 'BA Vita Luxury Transfer',
      cardTitle: 'Membresía incluye',
      cardSub: 'Experiencia Ejecutiva en Aeropuerto · Edición Founders',
      priceNote: (n: number) => `pago único · ${n} experiencias incluidas`,
      availability: 'Disponibilidad',
      availabilityCount: (n: number, total: number) => `${n} de ${total} restantes`,
      features: [
        { title: (n: number) => `${n} experiencias ejecutivas en aeropuerto`, sub: 'EZE · AEP · Llegadas y salidas · Sin vencimiento' },
        { title: () => 'Anfitrión de llegada dedicado', sub: 'Presencia personal en llegadas' },
        { title: () => 'Hospitalidad premium a bordo', sub: 'Champagne, agua mineral, snacks curados.' },
        { title: () => 'Beneficio 100% transferible, sin restricciones', sub: 'Ejecutivos, socios, clientes, familia' },
        { title: () => 'Prioridad absoluta de reserva', sub: 'Confirmación garantizada con 2 horas de anticipación' },
        { title: () => 'Atención concierge directa', sub: 'WhatsApp ejecutivo · Sin bots · Sin espera' },
        { title: () => 'Acceso a red de hoteles partners', sub: 'Coordinación directa con recepción del hotel' },
        { title: () => 'Gift card de 1 viaje', sub: 'Compartí una experiencia con quien quieras' },
      ],
      sidebarTitle: 'Adquirí tu membresía founders',
      sidebarDesc: 'Completá el formulario de compra. Aceptamos Mercado Pago, tarjeta internacional (Stripe) y transferencia bancaria.',
      ctaAcquire: 'Adquirir Membresía',
      ctaWhatsapp: 'Consultar por WhatsApp',
      guarantees: [
        'Sin contratos ni renovaciones automáticas',
        'Las experiencias no tienen fecha de vencimiento',
        'Transferible a cualquier persona, sin restricciones',
        'Soporte concierge directo por WhatsApp',
      ],
      quote: '"El viaje comienza antes de subir al vehículo."',
    },

    checkoutPage: {
      eyebrow: 'Membresía Founders',
      headline: 'Completar Adquisición',
      holderSection: 'Información del Titular',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Nombre y apellido',
      companyLabel: 'Empresa',
      optional: '(opcional)',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      whatsappPlaceholder: '+54 9 11 xxxx xxxx',
      paymentSection: 'Método de Pago',
      paymentMethods: [
        { id: 'mercadopago' as const, label: 'Mercado Pago', sub: 'Tarjeta · Cuotas · Argentina' },
        { id: 'stripe' as const,      label: 'Stripe',       sub: 'Visa · Mastercard · Internacional' },
        { id: 'transfer' as const,    label: 'Transferencia', sub: 'USD · Banco · Manual' },
      ],
      cardNumberLabel: 'Número de tarjeta',
      expiryLabel: 'Vencimiento',
      cvvLabel: 'CVV',
      installmentsLabel: 'Cuotas',
      installmentOptions: (price: number) => [
        { value: 1, label: `1 pago — USD ${price}` },
        { value: 3, label: `3 cuotas — USD ${Math.round(price / 3)} c/u` },
        { value: 6, label: `6 cuotas — USD ${Math.round(price / 6)} c/u` },
      ],
      wireTitle: 'Datos para Transferencia USD',
      wireNote: (email: string) => `Enviá el comprobante a ${email} y confirmaremos tu membresía en 2 horas hábiles.`,
      summaryLabel: 'Resumen del Pedido',
      summaryRows: (price: number, experiences: number) => [
        ['Membresía Founders Edition', `USD ${price.toLocaleString()}`],
        ['Experiencias incluidas', String(experiences)],
        ['Transferibilidad', 'Ilimitada'],
        ['Vencimiento', 'Sin vencimiento'],
      ] as [string, string][],
      total: 'Total',
      remaining: (n: number) => `${n} membresías restantes.`,
      noRestock: 'Las membresías founders no se repondrán a este precio.',
      submit: 'Confirmar Membresía Founders →',
      processing: 'Procesando...',
      security: 'Pago seguro · Datos encriptados · Sin renovación automática',
    },

    confirmedCheckout: {
      headline1: 'Bienvenido,',
      headline2: 'Founder Member.',
      sub: 'Tu membresía fue procesada. En los próximos minutos recibirás tu código de miembro y acceso al WhatsApp concierge.',
      summaryLabel: 'Tu membresía',
      keys: {
        code: 'Código',
        type: 'Tipo',
        experiences: 'Experiencias',
        expiration: 'Vencimiento',
        transferable: 'Transferible',
      },
      typeValue: 'Founders Edition',
      experiencesValue: '10 disponibles',
      expirationValue: 'Sin vencimiento',
      transferableValue: 'Sí — ilimitado',
      ctaBook: 'Hacer tu primera reserva →',
      ctaHome: 'Volver al inicio',
    },

    executiveExperiences: {
      label: '05 — Experiencias Ejecutivas',
      headline: 'Experiencias Ejecutivas',
      sub: 'Hospitalidad ejecutiva privada diseñada alrededor de llegadas, discreción y experiencias premium.',
      transfer: {
        title: 'Llegada Ejecutiva al Aeropuerto',
        price: 'USD 250',
        priceNote: 'por experiencia',
        subtext: 'Hotel · Aeropuerto · Hotel',
        desc: 'Hospitalidad ejecutiva privada para llegadas premium y movilidad corporativa.',
        features: [
          'Concierge ejecutivo',
          'Recepción VIP',
          'Hospitalidad premium en cabina',
          'Coordinación prioritaria',
          'Discreción ejecutiva',
        ],
        cta: 'Solicitar Llegada Ejecutiva',
      },
      membership: {
        badge: 'Limitado a 30 Miembros',
        title: 'Membresía Founders',
        price: 'USD 2.200',
        priceNote: 'pago único',
        subtext: 'Acceso Founders Limitado',
        desc: 'Una membresía de hospitalidad ejecutiva privada con experiencias transferibles y prioridad concierge.',
        features: [
          '10 experiencias ejecutivas en aeropuerto',
          'Beneficio 100% transferible',
          'Reserva concierge prioritaria',
          'Recepción VIP ejecutiva',
          'Estatus de miembro fundador',
          'Servicio de hospitalidad premium',
        ],
        cta: 'Solicitar Acceso Founders',
      },
    },
  },
} as const

export type Translations = typeof translations.en
