import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: boolean;
  className?: string;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  icon = true,
  className = "",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#0F3B67] text-white hover:bg-[#0b3155] shadow-sm hover:shadow-lg",

    secondary:
      "bg-[#14B8A6] text-white hover:bg-[#0f9f91] shadow-sm hover:shadow-lg",

    outline:
      "border border-[#0F3B67]/20 bg-white text-[#0F3B67] hover:border-[#14B8A6] hover:bg-[#E8F4FF]",
  };

  return (
    <a
      href={href.startsWith("/") ? `#${href}` : href}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}

      {icon && (
        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}