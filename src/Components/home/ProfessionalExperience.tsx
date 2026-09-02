import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  BookOpen,
  Globe2,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const experiences = [
  {
    icon: GraduationCap,
    title: "Specialist Training",
    text: "Structured specialist training in Anaesthesia and Pain Medicine.",
  },
  {
    icon: Globe2,
    title: "Ireland & UK",
    text: "Professional clinical experience across Ireland and the United Kingdom.",
  },
  {
    icon: Stethoscope,
    title: "Consultant Practice",
    text: "Experience working as a consultant and supporting specialist clinical teams.",
  },
  {
    icon: BookOpen,
    title: "Academic Contribution",
    text: "Published articles, editorials and book reviews with involvement in medical education.",
  },
];

export default function ProfessionalExperience() {
  const expCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = expCardsRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const cards = Array.from(target.children);
          gsap.fromTo(
            cards,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
            }
          );
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
        <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading
            eyebrow="Professional journey"
            title="International experience. Local care."
            description="Dr. Romana brings specialist training and clinical experience from Ireland and the UK to her current practice in Peshawar."
          />

          <div ref={expCardsRef} className="grid gap-4 sm:grid-cols-2">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <div
                  key={experience.title}
                  className="rounded-3xl border border-slate-100 bg-[#F8FAFC] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon
                      size={20}
                      className="text-[#2563EB]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-5 font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                    {experience.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {experience.text}
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