interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export default function CTAButton({ children, onClick, href }: CTAButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className="cta-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className="cta-button" onClick={onClick}>
      {children}
    </button>
  );
}
