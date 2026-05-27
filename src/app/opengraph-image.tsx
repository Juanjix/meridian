import { ImageResponse } from 'next/og'

export const alt = 'Millennium Travel — Hospitalidad Ejecutiva en Buenos Aires'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '72px 80px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Atmospheric radial — top right */}
        <div
          style={{
            position: 'absolute',
            top: '-160px',
            right: '-160px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,175,95,0.07) 0%, transparent 70%)',
          }}
        />

        {/* Atmospheric radial — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '-80px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,175,95,0.04) 0%, transparent 70%)',
          }}
        />

        {/* Top: Wordmark + eyebrow */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(212,175,95,0.55)',
              marginBottom: '12px',
            }}
          >
            Buenos Aires · Hospitalidad Ejecutiva
          </div>
          <div
            style={{
              fontSize: '28px',
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: '#F5F0E8',
              fontWeight: 300,
            }}
          >
            Millennium Travel
          </div>
        </div>

        {/* Center: Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 300,
              color: '#F5F0E8',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              marginBottom: '4px',
            }}
          >
            Tu llegada,
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 300,
              color: 'rgba(245,240,232,0.45)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}
          >
            comienza aquí.
          </div>

          {/* Champagne divider */}
          <div
            style={{
              width: '48px',
              height: '1px',
              background: 'rgba(212,175,95,0.50)',
              marginTop: '36px',
              marginBottom: '24px',
            }}
          />

          <div
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(245,240,232,0.50)',
              letterSpacing: '0.01em',
              lineHeight: 1.6,
              maxWidth: '520px',
            }}
          >
            Hospitalidad ejecutiva terrestre para ejecutivos, corporaciones y experiencias VIP en Buenos Aires.
          </div>
        </div>

        {/* Bottom: Tagline + availability signal */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(154,154,154,0.6)',
              fontWeight: 300,
            }}
          >
            millenniumtravel.com.ar
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'rgba(212,175,95,0.7)',
              }}
            />
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(212,175,95,0.65)',
                fontWeight: 300,
              }}
            >
              Membresía Founders · Plazas Limitadas
            </div>
          </div>
        </div>

        {/* Subtle corner accent — top right geometric */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '180px',
            height: '180px',
            borderTop: '1px solid rgba(212,175,95,0.12)',
            borderRight: '1px solid rgba(212,175,95,0.12)',
          }}
        />

        {/* Subtle corner accent — bottom left geometric */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '120px',
            height: '120px',
            borderBottom: '1px solid rgba(212,175,95,0.08)',
            borderLeft: '1px solid rgba(212,175,95,0.08)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
