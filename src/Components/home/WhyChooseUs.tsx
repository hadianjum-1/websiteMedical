import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ClipboardCheck,
  HeartHandshake,
  ScanLine,
  UserRoundCheck,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const reasons = [
  {
    number: "01",
    icon: UserRoundCheck,
    title: "Personalized Care",
    description:
      "Your pain, lifestyle and goals are considered when creating your treatment plan.",
  },
  {
    number: "02",
    icon: ScanLine,
    title: "Image-Guided Procedures",
    description:
      "Selected interventions can be performed using X-ray fluoroscopy or ultrasound guidance.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Comprehensive Assessment",
    description:
      "We look beyond symptoms to understand the factors contributing to your pain.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Quality of Life Focus",
    description:
      "The goal is not simply treating pain, but helping you return to a better quality of life.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const reasonsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating quote box
    const quoteBox = leftContentRef.current?.querySelector("div.rounded-3xl");
    if (quoteBox) {
      gsap.to(quoteBox, {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    }

    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (leftContentRef.current) {
            gsap.fromTo(
              leftContentRef.current,
              { opacity: 0, x: -40 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
            );
          }
          if (reasonsGridRef.current) {
            const cards = Array.from(reasonsGridRef.current.children);
            gsap.fromTo(
              cards,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: "power2.out",
              }
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
    <section ref={sectionRef} className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div ref={leftContentRef}>
            <SectionHeading
              eyebrow="Why choose specialist care"
              title="A thoughtful approach to every patient."
              description="Effective pain management often requires more than one solution. Care is tailored around your condition and individual needs."
            />

            <div className="mt-8 rounded-3xl bg-[#0F3B67] p-6 sm:p-8">
              <p className="font-['Playfair_Display'] text-xl leading-8 text-white">
                "The aim is to help you understand your pain and find the
                right path toward a better quality of life."
              </p>

              <div className="mt-6 h-px bg-white/10" />

              <p className="mt-4 text-xs font-medium text-blue-200">
                Dr. Romana Durrani
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2" ref={reasonsGridRef}>
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.number}
                  className="group rounded-3xl border border-slate-100 bg-[#F8FAFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(15,59,103,0.07)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F4FF]">
                      <Icon
                        size={21}
                        className="text-[#2563EB]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className="font-['Playfair_Display'] text-3xl text-slate-200">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-[#Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {reason.description}
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