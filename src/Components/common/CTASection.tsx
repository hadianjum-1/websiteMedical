import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export default function CTASection({
  eyebrow = "Take the first step",
  title,
  description,
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0F3B67] via-[#173F75] to-[#2563EB] px-7 py-12 sm:px-10 lg:px-16 lg:py-14">

          {/* Decorative circles */}

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#14B8A6]/20 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-[#7C3AED]/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5eead4]">
                {eyebrow}
              </span>

              <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {title}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100">
                {description}
              </p>

            </div>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0F3B67] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Book a Consultation

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>
        </div>
      </Container>
    </section>
  );
}