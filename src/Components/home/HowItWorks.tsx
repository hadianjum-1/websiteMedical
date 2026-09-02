import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  CalendarCheck,
  ClipboardList,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book a Consultation",
    description:
      "Arrange an appointment to discuss your symptoms, concerns and goals.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Understand Your Pain",
    description:
      "Your medical history and condition are carefully assessed to understand the source of your pain.",
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Create Your Plan",
    description:
      "A personalized treatment approach is discussed based on your individual needs.",
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Move Forward",
    description:
      "Treatment and follow-up focus on improving function, comfort and quality of life.",
  },
];

export default function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = stepsRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (lineRef.current) {
            gsap.fromTo(
              lineRef.current,
              { scaleX: 0 },
              { scaleX: 1, transformOrigin: "left center", duration: 1, ease: "power2.out" }
            );
          }
          const stepCards = target.querySelectorAll("div > div");
          if (stepCards.length > 0) {
            gsap.fromTo(
              stepCards,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }
            );
          }
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Your care journey"
          title="Simple, personal, focused on you."
          description="From your first consultation through treatment and follow-up, every step is designed around understanding your pain and your goals."
          align="center"
        />

        <div ref={stepsRef} className="relative mt-14">
          {/* Connecting line */}

          <div ref={lineRef} className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative text-center"
                >
                  <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white bg-[#E8F4FF] text-[#2563EB] shadow-sm">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <span className="mt-5 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#14B8A6]">
                    Step {step.number}
                  </span>

                  <h3 className="mt-2 font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}