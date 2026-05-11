# Meridian — Executive Ground Hospitality

Sitio web oficial de Meridian, construido con **Next.js 14 + TypeScript + Tailwind CSS**.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** strict mode
- **Tailwind CSS** con tokens de diseño Meridian (midnight / gold / ivory)
- **Framer Motion** para animaciones
- **React Hook Form + Zod** para formularios validados
- **Lucide React** para iconos

## Instalación

```bash
npm install
cp .env.local.example .env.local
# Editá .env.local con tus keys reales
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000)

## Estructura

```
src/
├── app/
│   ├── page.tsx                     # Homepage
│   ├── membership/page.tsx          # Página de membresía
│   ├── checkout/
│   │   ├── page.tsx                 # Formulario de compra
│   │   └── confirmed/page.tsx       # Confirmación de membresía
│   ├── booking/
│   │   ├── page.tsx                 # Formulario de reservas (4 pasos)
│   │   └── confirmed/page.tsx       # Confirmación de reserva
│   └── api/
│       ├── create-payment/route.ts  # Mercado Pago + Stripe + transferencia
│       └── confirm-booking/route.ts # Registro y confirmación de reservas
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ExperienceSection.tsx
│       ├── StatsSection.tsx
│       └── FoundersCTASection.tsx
├── lib/
│   ├── utils.ts          # cn(), formatters, constantes
│   └── validations.ts    # Schemas Zod
└── types/
    └── index.ts          # TypeScript types globales
```

## Paleta de colores

| Token         | Hex       | Uso                            |
|---------------|-----------|--------------------------------|
| `midnight`    | `#0A0A0A` | Fondo oscuro, botones primarios|
| `gold`        | `#B8975A` | Acento principal, iconos       |
| `gold-light`  | `#D4B07A` | Hovers, variantes de oro       |
| `ivory`       | `#F5F2ED` | Fondo principal                |
| `slate-mid`   | `#888780` | Texto secundario               |

## Integración de pagos

### Mercado Pago
```bash
npm install mercadopago
```
Descomentá el bloque en `src/app/api/create-payment/route.ts` y agregá tu `MP_ACCESS_TOKEN`.

### Stripe
```bash
npm install stripe
```
Descomentá el bloque en `src/app/api/create-payment/route.ts` y agregá tu `STRIPE_SECRET_KEY`.

### WhatsApp (confirmaciones automáticas)
```bash
npm install twilio
```
Integrá en `src/app/api/confirm-booking/route.ts` para enviar confirmaciones automáticas.

## Base de datos (recomendada: Supabase)

Supabase es la opción más rápida para este stack:
1. Creá un proyecto en [supabase.com](https://supabase.com)
2. Ejecutá el SQL de creación de tablas (ver `schema.sql` si lo generás)
3. Usá `@supabase/supabase-js` para queries desde las API routes

Tablas mínimas:
- `memberships` (code, holder_name, email, whatsapp, experiences_total, experiences_used, is_founder)
- `bookings` (confirmation_code, membership_code, airport, flight_date, passenger_name, status)

## Deploy

El deploy más simple es Vercel:
```bash
npx vercel
```
Recordá configurar las variables de entorno en el dashboard de Vercel.
