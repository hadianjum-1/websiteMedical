import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  Brain,
  Scale,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";

export default function LifestyleSupport() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (contentRef.current) {
            gsap.fromTo(
              contentRef.current,
              { opacity: 0, x: -50 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
            );
          }
          if (cardsRef.current) {
            const cards = Array.from(cardsRef.current.children);
            gsap.fromTo(
              cards,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
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
    <section ref={sectionRef} className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="overflow-hidden rounded-[32px] bg-white">
          <div className="grid lg:grid-cols-2">
            {/* Content */}

            <div ref={contentRef} className="p-7 sm:p-10 lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9D5FF]">
                <Sparkles
                  size={22}
                  className="text-[#7C3AED]"
                />
              </div>

              <span className="mt-7 block text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">
                Beyond pain management
              </span>

              <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-[#0F3B67] sm:text-4xl">
                Supporting the bigger picture of your wellbeing.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Pain can affect movement, confidence, mood and everyday life.
                Alongside pain management, limited slots are available for
                weight loss management and life coaching support.
              </p>

              <a
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl border border-[#0F3B67]/15 px-5 py-3.5 text-sm font-semibold text-[#0F3B67] transition-all hover:border-[#7C3AED]/30 hover:bg-[#E9D5FF]/30"
              >
                Ask about support

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Service Cards */}

            <div ref={cardsRef} className="grid gap-4 bg-gradient-to-br from-[#E8F4FF] via-[#F8FAFC] to-[#E9D5FF] p-7 sm:p-10 lg:p-14">
              <div className="rounded-3xl bg-white/90 p-6 shadow-sm backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C7F2E9]">
                    <Scale
                      size={20}
                      className="text-[#0F766E]"
                    />
                  </div>

                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                      Weight Loss Management
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Limited slots for weight management support where
                      appropriate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white/90 p-6 shadow-sm backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9D5FF]">
                    <Brain
                      size={20}
                      className="text-[#7C3AED]"
                    />
                  </div>

                  <div>
                    <h3 className="font-[#Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                      Life Coaching Support
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Additional support focused on lifestyle, confidence and
                      moving toward a healthier routine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}