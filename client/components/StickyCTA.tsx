import { useEffect, useRef, useState } from 'react';

interface StickyCTAProps {
  triggerRef: React.RefObject<HTMLElement>;
  href: string;
  children: React.ReactNode;
}

export default function StickyCTA({ triggerRef, href, children }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Show sticky CTA when the trigger section is NOT visible (user has scrolled past it)
        if (entries.length > 0) {
          const isIntersecting = entries[0].isIntersecting;
          setIsVisible(!isIntersecting);
        }
      },
      {
        threshold: 0,
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
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
