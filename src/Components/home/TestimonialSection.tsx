import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Quote } from "lucide-react";

import Container from "../common/Container";

export default function TestimonialSection() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Quote icon floating animation
    const quoteIcon = testimonialRef.current?.querySelector("[class*='rounded-2xl']");
    if (quoteIcon) {
      gsap.to(quoteIcon, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    }

    const target = testimonialRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.fromTo(
            target,
            { opacity: 0, scale: 0.95, y: 40 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" }
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
        <div ref={testimonialRef} className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C7F2E9]">
            <Quote
              size={24}
              className="text-[#0F766E]"
            />
          </div>

          <blockquote className="mt-8 font-['Playfair_Display'] text-3xl font-medium leading-[1.35] text-[#0F3B67] sm:text-4xl lg:text-5xl">
            "We can offer a combination of services tailored according to
            your needs and help in improving quality of life."
          </blockquote>

          <div className="mt-8">
            <p className="text-sm font-semibold text-[#0F3B67]">
              Dr. Romana Durrani
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Consultant Pain Medicine
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}