import React from "react";

interface IconBoxProps {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  variant?: "blue" | "teal" | "purple";
  size?: "sm" | "md" | "lg";
}

export default function IconBox({
  icon: Icon,
  variant = "teal",
  size = "md",
}: IconBoxProps) {
  const colors = {
    blue: "bg-[#E8F4FF] text-[#2563EB]",
    teal: "bg-[#C7F2E9] text-[#0F766E]",
    purple: "bg-[#E9D5FF] text-[#7C3AED]",
  };

  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  };

  return (
    <div
      className={`flex ${sizes[size]} shrink-0 items-center justify-center rounded-2xl ${colors[variant]}`}
    >
      <Icon
        size={size === "lg" ? 24 : 20}
        strokeWidth={1.8}
      />
    </div>
  );
}