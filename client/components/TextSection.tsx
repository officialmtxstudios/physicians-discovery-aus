interface TextSectionProps {
  children: React.ReactNode;
}

export default function TextSection({ children }: TextSectionProps) {
  return (
    <section className="text-section">
      <div className="text-content">{children}</div>
    </section>
  );
}
