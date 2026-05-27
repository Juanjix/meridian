import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Millennium Travel — Tu llegada, comienza aquí. Hospitalidad ejecutiva en Buenos Aires.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const imgData = readFileSync(join(process.cwd(), 'public/vehicles/van-front.jpg'))
  const imgSrc = `data:image/jpeg;base64,${imgData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
          background: '#0A0A0A',
        }}
      >
        {/* Hero image — full bleed */}
        <img
          src={imgSrc}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Dark gradient overlay — left heavy so text is readable */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(105deg, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.75) 50%, rgba(8,8,8,0.30) 100%)',
          }}
        />

        {/* Bottom gradient — grounds the footer text */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '180px',
            background: 'linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 100%)',
          }}
        />

        {/* Champagne corner accent — top right */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            borderTop: '1px solid rgba(212,175,95,0.20)',
            borderRight: '1px solid rgba(212,175,95,0.20)',
          }}
        />

        {/* Content layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '60px 72px',
          }}
        >
          {/* Top — Wordmark */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(212,175,95,0.60)',
                marginBottom: '10px',
              }}
            >
              Buenos Aires · Hospitalidad Ejecutiva
            </div>
            <div
              style={{
                fontSize: '22px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#F5F0E8',
                fontWeight: 300,
              }}
            >
              Millennium Travel
            </div>
          </div>

          {/* Center — Main headline */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Divider */}
            <div
              style={{
                width: '40px',
                height: '1px',
                background: 'rgba(212,175,95,0.55)',
                marginBottom: '28px',
              }}
            />

            <div
              style={{
                fontSize: '80px',
                fontWeight: 300,
                color: '#F5F0E8',
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                marginBottom: '6px',
              }}
            >
              Tu llegada,
            </div>
            <div
              style={{
                fontSize: '80px',
                fontWeight: 300,
                color: 'rgba(245,240,232,0.42)',
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
              }}
            >
              comienza aquí.
            </div>
          </div>

          {/* Bottom — tagline + availability */}
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
                color: 'rgba(154,154,154,0.65)',
                fontWeight: 300,
              }}
            >
              millenniumtravel.com.ar
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: 'rgba(212,175,95,0.75)',
                }}
              />
              <div
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(212,175,95,0.70)',
                  fontWeight: 300,
                }}
              >
                Membresía Founders · Plazas Limitadas
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
