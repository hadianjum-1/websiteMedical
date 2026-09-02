interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "blue" | "purple";
}

export default function Badge({
  children,
  variant = "teal",
}: BadgeProps) {
  const styles = {
    teal: "bg-[#C7F2E9] text-[#0F766E]",
    blue: "bg-[#E8F4FF] text-[#2563EB]",
    purple: "bg-[#E9D5FF] text-[#7C3AED]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
}