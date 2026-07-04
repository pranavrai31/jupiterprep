export function JupiterPlanet({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="logoGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFD280" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#E8891A" />
          <stop offset="100%" stopColor="#C26B0A" />
        </radialGradient>
        <clipPath id="logoClip">
          <circle cx="50" cy="50" r="44" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="44" fill="url(#logoGrad)" />
      <g clipPath="url(#logoClip)">
        <ellipse cx="50" cy="34" rx="44" ry="7" fill="#FFD899" opacity="0.6" />
        <ellipse cx="50" cy="46" rx="44" ry="8" fill="#C97B1A" opacity="0.35" />
        <ellipse cx="50" cy="58" rx="44" ry="7" fill="#FFD280" opacity="0.5" />
        <ellipse cx="50" cy="70" rx="44" ry="6" fill="#B8680E" opacity="0.3" />
        <ellipse cx="62" cy="60" rx="11" ry="7" fill="#C26B0A" opacity="0.5" />
        <ellipse cx="62" cy="60" rx="6" ry="4" fill="#E8891A" opacity="0.35" />
      </g>
    </svg>
  );
}
