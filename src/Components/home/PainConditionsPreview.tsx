import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Activity,
  Bone,
  Brain,
  HeartPulse,
  Move,
  Waves,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import IconBox from "../common/IconBox";

const conditions = [
  {
    icon: Activity,
    title: "Chronic Pain",
    description:
      "Personalized management for persistent pain affecting your daily life and wellbeing.",
    variant: "teal" as const,
  },
  {
    icon: HeartPulse,
    title: "Cancer Pain",
    description:
      "Specialist approaches to help manage pain associated with cancer and its treatment.",
    variant: "blue" as const,
  },
  {
    icon: Bone,
    title: "Back & Spine Pain",
    description:
      "Assessment and targeted treatment for back, spinal and related pain conditions.",
    variant: "purple" as const,
  },
  {
    icon: Waves,
    title: "Nerve Pain",
    description:
      "Specialist care for pain involving nerves and peripheral nerve pathways.",
    variant: "teal" as const,
  },
  {
    icon: Move,
    title: "Musculoskeletal Pain",
    description:
      "Targeted care for muscle, joint and soft-tissue related pain.",
    variant: "blue" as const,
  },
  {
    icon: Brain,
    title: "Complex Pain",
    description:
      "A comprehensive approach for complex pain requiring specialist assessment.",
    variant: "purple" as const,
  },
];

export default function PainConditionsPreview() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = cardsRef.current;
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
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we treat"
            title="Pain should not define your life."
            description="Every person's pain is different. We focus on understanding your condition and creating a treatment approach tailored to your individual needs."
          />

          <a
            href="/conditions"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#0F3B67]"
          >
            View all conditions
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div ref={cardsRef} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition) => (
            <a
              key={condition.title}
              href="/conditions"
              className="group rounded-3xl border border-slate-100 bg-[#F8FAFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/20 hover:bg-white hover:shadow-[0_15px_40px_rgba(15,59,103,0.08)]"
            >
              <IconBox
                icon={condition.icon}
                variant={condition.variant}
              />

              <h3 className="mt-6 font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                {condition.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {condition.description}
              </p>

              <div className="mt-5 text-xs font-semibold text-[#14B8A6]">
                Learn more →
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}