import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";

import Container from "../common/Container";
import Badge from "../common/Badge";

export default function SuccessStoryPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating blob in visual section
    if (visualRef.current) {
      const blob = visualRef.current.querySelector("div.absolute.rounded-full");
      if (blob) {
        gsap.to(blob, {
          x: 30,
          y: 30,
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
          if (visualRef.current) {
            gsap.fromTo(
              visualRef.current,
              { opacity: 0, x: -50 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
            );
          }
          if (storyRef.current) {
            gsap.fromTo(
              storyRef.current,
              { opacity: 0, x: 50 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
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
        <div className="grid overflow-hidden rounded-[32px] bg-white shadow-[0_20px_70px_rgba(15,59,103,0.07)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Visual */}

          <div ref={visualRef} className="relative min-h-[400px] bg-gradient-to-br from-[#0F3B67] to-[#2563EB] p-7 sm:p-10 lg:min-h-full">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#14B8A6]/20 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <Badge variant="teal">Patient Story</Badge>

                <div className="mt-8 max-w-sm">
                  <p className="font-['Playfair_Display'] text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    From a wheelchair to walking home.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-blue-100">
                    A patient with severe pain and muscular spasm received
                    targeted treatment as part of a specialist pain management
                    plan.
                  </p>
                </div>
              </div>

              {/* Video placeholder */}

              <button
                type="button"
                className="mt-12 flex w-fit items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                <PlayCircle size={20} />
                Watch success story
              </button>
            </div>
          </div>

          {/* Story */}

          <div ref={storyRef} className="p-7 sm:p-10 lg:p-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">
              A real patient experience
            </span>

            <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-[#0F3B67] sm:text-4xl">
              Treatment focused on restoring movement and confidence.
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              A 44-year-old male had previously undergone lower back surgery.
              Fear avoidance led him to remain in bed, while severe pain
              developed in his upper back and around the surgical area.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              MRI findings included a lower-back disc bulge and severe
              muscular spasm. He arrived at the clinic using a wheelchair.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Back and muscular pain assessment",
                "Botox injections for muscular spasm",
                "Epidural injection under X-ray fluoroscopy",
                "Focused treatment to support mobility",
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

            <div className="mt-8 rounded-2xl bg-[#E8F4FF] p-5">
              <p className="text-sm font-medium leading-6 text-[#0F3B67]">
                According to the provided patient story, he was able to walk
                home on his feet after treatment.
              </p>
            </div>

            <a
              href="/success-stories"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0F3B67]"
            >
              Read the full story

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}