import { ImageResponse } from 'next/og';

export const alt = 'Cristhian Martinez, Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'stretch',
          background: '#f2f0ea',
          color: '#1d211d',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '72px 80px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', fontSize: 24, justifyContent: 'space-between' }}>
          <span>CM/</span>
          <span>Software Engineer</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 950 }}>
          <span style={{ color: '#476856', fontSize: 24, marginBottom: 24 }}>PRODUCT / WEB / SYSTEMS</span>
          <span style={{ fontSize: 72, fontWeight: 600, letterSpacing: '-3px', lineHeight: 1.05 }}>
            Thoughtful products, built with a systems point of view.
          </span>
        </div>
        <div style={{ borderTop: '1px solid #c9ccc4', display: 'flex', fontSize: 22, paddingTop: 24 }}>
          chrxs.vercel.app
        </div>
      </div>
    ),
    size,
  );
}
