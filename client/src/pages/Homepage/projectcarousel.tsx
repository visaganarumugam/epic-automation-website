import React, { useState, useEffect, useRef } from 'react';

const images = [
  { src: '/images/products.jpg', desc: 'Product Launch Project' },
  { src: '/images/solutions.jpg', desc: 'Solutions Integration' },
  { src: '/images/design.jpg', desc: 'Design Sprint' },
  { src: '/images/kit.jpg', desc: 'Robotics Kit Build' },
  { src: '/images/bg.jpg', desc: 'Background Research' },
];

const slotStyles = [
  // left2, left1, center, right1, right2
  {
    width: 170,
    height: 110,
    opacity: 0.2,
    zIndex: 0,
    marginLeft: -60,
    marginRight: -60,
    scale: 1,
  },
  {
    width: 270,
    height: 180,
    opacity: 0.5,
    zIndex: 1,
    marginLeft: -80,
    marginRight: -80,
    scale: 1,
  },
  {
    width: 500,
    height: 320,
    opacity: 1,
    zIndex: 2,
    marginLeft: -100,
    marginRight: -100,
    scale: 1,
  },
  {
    width: 270,
    height: 180,
    opacity: 0.5,
    zIndex: 1,
    marginLeft: -80,
    marginRight: -80,
    scale: 1,
  },
  {
    width: 170,
    height: 110,
    opacity: 0.2,
    zIndex: 0,
    marginLeft: -60,
    marginRight: -60,
    scale: 1,
  },
];

const ProjectCarousel: React.FC = () => {
  const [current, setCurrent] = useState(2); // Center image
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  // Get indices for visible images (center + 2 left/right)
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      indices.push((current + i + images.length) % images.length);
    }
    return indices;
  };

  return (
    <div style={{ width: '100%', minHeight: '600px', background: '#fff', textAlign: 'center', padding: '60px 0 0 0' }}>
      <h1 style={{ fontSize: '72px', fontWeight: 800, marginBottom: '56px', letterSpacing: '-2px' }}>Image Carousel</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '370px', marginBottom: 40 }}>
        {/* Left Arrow */}
        <button onClick={prev} style={{ position: 'absolute', left: 40, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: 36, cursor: 'pointer', zIndex: 10, color: '#b0b0b0', width: 48, height: 48, borderRadius: '50%', transition: 'background 0.2s' }} aria-label="Previous">
          &#8592;
        </button>
        {/* Images */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 1100, position: 'relative', height: 340 }}>
          {getVisibleIndices().map((idx, i) => {
            const style = slotStyles[i];
            const { src, desc } = images[idx];
            return (
              <div
                key={idx}
                style={{
                  width: style.width,
                  height: style.height,
                  position: 'relative',
                  marginLeft: style.marginLeft,
                  marginRight: style.marginRight,
                  zIndex: style.zIndex,
                  transition: 'all 0.6s cubic-bezier(.4,2,.6,1)',
                  opacity: style.opacity,
                  borderRadius: 40,
                  boxShadow: style.zIndex === 2
                    ? '0 8px 32px rgba(0,0,0,0.18)'
                    : style.zIndex === 1
                    ? '0 2px 8px rgba(0,0,0,0.10)'
                    : 'none',
                  background: '#eee',
                  overflow: 'hidden',
                  filter: style.zIndex === 0 ? 'blur(0.5px)' : 'none',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <img
                  src={src}
                  alt={`carousel-img-${idx}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 40,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                  }}
                />
                {/* Description overlay */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 3,
                    width: '100%',
                    padding: style.zIndex === 2 ? '18px 28px' : '8px 16px',
                    background: style.zIndex === 2 ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.25)',
                    color: '#fff',
                    fontSize: style.zIndex === 2 ? 24 : 14,
                    fontWeight: 600,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    textAlign: 'left',
                    bottom: 0,
                  }}
                >
                  {desc}
                </div>
              </div>
            );
          })}
        </div>
        {/* Right Arrow */}
        <button onClick={next} style={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: 36, cursor: 'pointer', zIndex: 10, color: '#b0b0b0', width: 48, height: 48, borderRadius: '50%', transition: 'background 0.2s' }} aria-label="Next">
          &#8594;
        </button>
      </div>
      {/* Dots */}
      <div style={{ marginTop: 0, display: 'flex', justifyContent: 'center', gap: 18, alignItems: 'center' }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goTo(idx)}
            style={{
              display: 'inline-block',
              width: idx === current ? 18 : 12,
              height: idx === current ? 18 : 12,
              borderRadius: '50%',
              background: idx === current ? '#7b5cff' : '#e0e0e0',
              cursor: 'pointer',
              transition: 'all 0.3s',
              border: idx === current ? '3px solid #7b5cff' : '2px solid #e0e0e0',
              margin: '0 2px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
