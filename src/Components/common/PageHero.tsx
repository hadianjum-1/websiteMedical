import Container from "./Container";
import Button from "./Button";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  buttonText = "Book a Consultation",
  buttonHref = "/contact",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      
      {/* Decorative background */}

      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#E8F4FF] blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#C7F2E9] blur-3xl" />

      <Container>
        <div className="relative max-w-3xl">

          {eyebrow && (
            <span className="mb-5 inline-flex rounded-full bg-[#C7F2E9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              {eyebrow}
            </span>
          )}

          <h1 className="font-['Playfair_Display'] text-4xl font-semibold leading-[1.1] tracking-tight text-[#0F3B67] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            {description}
          </p>

          <div className="mt-8">
            <Button href={buttonHref}>
              {buttonText}
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}