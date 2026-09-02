interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          {align === "center" && (
            <span className="h-px w-8 bg-[#14B8A6]" />
          )}

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">
            {eyebrow}
          </span>

          {align === "center" && (
            <span className="h-px w-8 bg-[#14B8A6]" />
          )}
        </div>
      )}

      <h2 className="font-['Playfair_Display'] text-3xl font-semibold leading-tight tracking-tight text-[#0F3B67] sm:text-4xl lg:text-[44px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}