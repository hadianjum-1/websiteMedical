import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Activity,
  Bone,
  Crosshair,
  Syringe,
  Zap,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const treatments = [
  {
    icon: Syringe,
    title: "Trigger Point Injections",
    description: "With or without Botox for selected muscular pain conditions.",
  },
  {
    icon: Crosshair,
    title: "Epidural Procedures",
    description:
      "Image-guided epidural injections for appropriate spinal pain conditions.",
  },
  {
    icon: Activity,
    title: "Peripheral Nerve Blocks",
    description:
      "Targeted nerve blocks to help manage specific sources of pain.",
  },
  {
    icon: Bone,
    title: "Joint & Musculoskeletal Blocks",
    description:
      "Targeted procedures for selected joint and musculoskeletal conditions.",
  },
  {
    icon: Zap,
    title: "Neurolysis",
    description:
      "Specialist nerve procedures for selected chronic and cancer pain.",
  },
];

export default function TreatmentPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const treatmentCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating blob inside featured card
    if (featuredRef.current) {
      const blob = featuredRef.current.querySelector("div.absolute.rounded-full");
      if (blob) {
        gsap.to(blob, {
          x: 20,
          y: -20,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }

    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (featuredRef.current) {
            gsap.fromTo(
              featuredRef.current,
              { opacity: 0, x: -50 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
            );
          }
          if (treatmentCardsRef.current) {
            const cards = Array.from(treatmentCardsRef.current.children);
            gsap.fromTo(
              cards,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
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
    <section ref={sectionRef} className="overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Treatment options"
            title="Care tailored to your condition."
            description="A range of pharmacological and interventional approaches may be considered depending on your diagnosis and individual needs."
          />

          <a
            href="#/treatments"
            className="text-sm font-semibold text-[#0F3B67]"
          >
            Explore all treatments →
          </a>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {/* Featured */}

          <div ref={featuredRef} className="relative overflow-hidden rounded-[28px] bg-[#0F3B67] p-7 sm:p-9 lg:col-span-5">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#14B8A6]/20 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6]">
                <Crosshair
                  size={22}
                  className="text-white"
                />
              </div>

              <h3 className="mt-8 font-['Playfair_Display'] text-2xl font-semibold text-white sm:text-3xl">
                Image-guided
                <br />
                pain procedures
              </h3>

              <p className="mt-5 text-sm leading-7 text-blue-100">
                Selected interventions are performed under continuous X-ray
                fluoroscopy or ultrasound guidance to help accurately target
                the treatment area.
              </p>

              <a
                href="#/treatments"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-[#0F3B67] transition-all hover:-translate-y-0.5"
              >
                View treatment details
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Treatment list */}

          <div ref={treatmentCardsRef} className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {treatments.map((treatment) => {
              const Icon = treatment.icon;

              return (
                <a
                  key={treatment.title}
                  href="#/treatments"
                  className="group rounded-3xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(15,59,103,0.07)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F4FF]">
                      <Icon
                        size={19}
                        className="text-[#2563EB]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#14B8A6]">
                      →
                    </span>
                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-[#0F3B67]">
                    {treatment.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {treatment.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}