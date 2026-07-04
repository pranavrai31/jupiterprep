import { ReactNode } from 'react';
import { CALENDLY_URL } from '../config';

type CtaButtonProps = {
  onNavigateContact: () => void;
  className?: string;
  children: ReactNode;
};

// Renders as a real link to Calendly if CALENDLY_URL is set (src/config.ts),
// otherwise falls back to navigating to the in-app Contact page.
export default function CtaButton({ onNavigateContact, className, children }: CtaButtonProps) {
  if (CALENDLY_URL) {
    return (
      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onNavigateContact} className={className}>
      {children}
    </button>
  );
}
