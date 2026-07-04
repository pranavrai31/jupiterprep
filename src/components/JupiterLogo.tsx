export function JupiterPlanet({ size = 32 }: { size?: number }) {
  // Extract just the planet from the full logo using object-position
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
      <img
        src="/logo-full.png"
        alt="Jupiter"
        style={{
          height: '100%',
          width: 'auto',
          objectFit: 'cover',
          transform: 'scale(1.1)',
        }}
      />
    </div>
  );
}

export function JupiterFullLogo({ height = 48, className = '' }: { height?: number; className?: string }) {
  return (
    <img
      src="/logo-full.png"
      alt="Jupiter Prep"
      height={height}
      style={{ height, width: 'auto', objectFit: 'contain' }}
      className={className}
    />
  );
}
