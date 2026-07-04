export default function JupiterMascot({ className = '' }: { className?: string }) {
  return (
    <img
      src="/mascot.png"
      alt="Jupiter Prep mascot"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
