interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <span
        className="inline-block text-xs font-bold text-blue-500 tracking-[0.2em] uppercase mb-3"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl mx-auto text-slate-500 text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
