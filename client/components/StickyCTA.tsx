import { useEffect, useState } from 'react';

interface StickyCTAProps {
  triggerRef: React.RefObject<HTMLElement>;
  href: string;
  children: React.ReactNode;
}

export default function StickyCTA({ triggerRef, href, children }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current) return;

      const rect = triggerRef.current.getBoundingClientRect();
      const triggerBottom = rect.bottom;

      // Show sticky CTA only after user scrolls past the trigger section
      // (when the bottom of the section is above the top of the viewport)
      const isScrolledPast = triggerBottom < 0;
      setIsVisible(isScrolledPast);
    };

    window.addEventListener('scroll', handleScroll);
    // Check on mount in case user has already scrolled past on page load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerRef]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="sticky-cta-container">
      <a
        href={href}
        className="cta-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  );
}
