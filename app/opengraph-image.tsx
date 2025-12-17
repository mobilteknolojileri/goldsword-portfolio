import { ImageResponse } from 'next/og'

export const alt = 'goldsword - Full Stack Developer'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(to bottom right, #3b82f6, #0ea5e9)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div style={{ fontWeight: 'bold' }}>goldsword</div>
                <div style={{ fontSize: 48, marginTop: 20 }}>Full Stack Developer</div>
            </div>
        ),
        {
            ...size,
        }
    )
}