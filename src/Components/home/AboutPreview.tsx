import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Globe2,
} from "lucide-react";

import Container from "../common/Container";
import Badge from "../common/Badge";
import Drimage from "/src/assets/imageupdateDr.png";

export default function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const experienceCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const checkItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating experience card animation
    if (experienceCardRef.current) {
      gsap.to(experienceCardRef.current, {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (imageRef.current) {
            gsap.fromTo(
              imageRef.current,
              { opacity: 0, x: -50 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
            );
          }
          if (contentRef.current) {
            gsap.fromTo(
              contentRef.current,
              { opacity: 0, x: 50 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
            );
          }
          if (checkItemsRef.current) {
            gsap.fromTo(
              checkItemsRef.current.children,
              { opacity: 0, x: 20 },
              {
                opacity: 1,
                x: 0,
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
    <section ref={sectionRef} className="overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}

          <div ref={imageRef} className="relative mx-auto w-full max-w-[520px] lg:mx-0">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-3xl bg-[#C7F2E9]" />

            <div className="absolute -bottom-6 -right-5 h-32 w-32 rounded-full bg-[#E9D5FF]" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-[#E8F4FF]">
              <img
                src={Drimage}
                alt="Dr. Romana Durrani"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/30 bg-white/90 p-5 backdrop-blur-md">
                <p className="font-['Playfair_Display'] text-lg font-semibold text-[#0F3B67]">
                  Dr. Romana Durrani
                </p>

                <p className="mt-1 text-xs text-[#14B8A6]">
                  Consultant Pain Medicine
                </p>
              </div>
            </div>

            {/* Experience card */}

            <div ref={experienceCardRef} className="absolute -right-4 top-10 rounded-2xl bg-[#0F3B67] p-4 shadow-xl sm:-right-7">
              <div className="flex items-center gap-3">
                <Globe2 className="text-[#5eead4]" size={21} />

                <div>
                  <p className="text-xs font-semibold text-white">
                    International
                  </p>

                  <p className="mt-1 text-[10px] text-blue-200">
                    UK • Ireland • Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}

          <div ref={contentRef}>
            <Badge variant="blue">Meet Dr. Romana</Badge>

            <h2 className="mt-5 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-[#0F3B67] sm:text-4xl lg:text-[46px]">
              Specialist expertise with a patient-first approach.
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
              Dr. Romana Durrani is a consultant in pain medicine with
              specialist training and professional experience across Ireland,
              the UK and Pakistan.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Her approach combines specialist knowledge, medication and
              image-guided interventions to create care plans focused on
              improving quality of life.
            </p>

            <div ref={checkItemsRef} className="mt-7 space-y-3">
              {[
                "Specialist training in Pain Medicine",
                "International clinical experience",
                "Chronic and cancer pain management",
                "Individualized treatment planning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#14B8A6]"
                  />

                  {item}
                </div>
              ))}
            </div>

            <a
              href="#/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0F3B67] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0b3155]"
            >
              Discover Her Story

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-6">
              <GraduationCap
                size={20}
                className="text-[#2563EB]"
              />

              <p className="text-xs leading-5 text-slate-400">
                CCST • Diploma Pain Medicine • FCAI
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}