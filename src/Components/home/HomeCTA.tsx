import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPin,
} from "lucide-react";

import Container from "../common/Container";

export default function HomeCTA() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contactBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating background blobs
    const blobs = ctaRef.current?.querySelectorAll("[class*='blur-3xl']");
    if (blobs && blobs.length > 0) {
      gsap.to(blobs[0], {
        x: 50,
        y: -50,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      if (blobs[1]) {
        gsap.to(blobs[1], {
          x: -50,
          y: 50,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.5,
        });
      }
    }

    const target = ctaRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.fromTo(
            target,
            { opacity: 0, scale: 0.98 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
          );
          if (contentRef.current) {
            gsap.fromTo(
              contentRef.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
            );
          }
          if (contactBoxRef.current) {
            gsap.fromTo(
              contactBoxRef.current,
              { opacity: 0, x: 50 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
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
    <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      <Container>
        <div ref={ctaRef} className="relative overflow-hidden rounded-[32px] bg-[#0F3B67] px-7 py-12 sm:px-10 lg:px-16 lg:py-16">
          {/* Decorative background */}

          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#14B8A6]/20 blur-3xl" />

          <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#7C3AED]/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div ref={contentRef} className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5eead4]">
                Take the first step
              </span>

              <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                You don't have to live with pain alone.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                Start a conversation about your symptoms and discover a care
                approach tailored to your needs.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#0F3B67] transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <CalendarDays size={17} />

                  Book a Consultation

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="mailto:romana.durrani@rmi.edu.pk"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  <Mail size={16} />
                  Email the Clinic
                </a>
              </div>
            </div>

            {/* Contact information */}

            <div ref={contactBoxRef} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md lg:w-[300px]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5eead4]">
                Visit the clinic
              </p>

              <div className="mt-5 flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#5eead4]"
                />

                <p className="text-xs leading-6 text-blue-100">
                  Clinic No. 60, Ground Floor,
                  <br />
                  New Building (GH)
                  <br />
                  5-B/2, Phase-V, Hayatabad,
                  <br />
                  Peshawar, Khyber Pakhtunkhwa
                </p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-xs text-blue-200">
                  Pain Clinic
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Monday – Friday
                </p>

                <p className="mt-1 text-xs text-blue-200">
                  2:00 PM – 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}