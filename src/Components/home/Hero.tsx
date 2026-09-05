import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";
import Badge from "../common/Badge";
import Drimage from '/src/assets/imageupdateDr.png'

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const credentialRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();

    // -----------------------------------------
    // Badge
    // -----------------------------------------
    if (badgeRef.current) {
      tl.fromTo(
        badgeRef.current,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        0
      );
    }

    // -----------------------------------------
    // Heading
    // -----------------------------------------
    if (headingRef.current) {
      tl.fromTo(
        headingRef.current.querySelectorAll("span"),
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.1
      );
    }

    // -----------------------------------------
    // Description
    // -----------------------------------------
    if (descRef.current) {
      tl.fromTo(
        descRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        0.4
      );
    }

    // -----------------------------------------
    // CTA BUTTONS
    // -----------------------------------------
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll("a");

      tl.fromTo(
        buttons,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        0.6
      );
    }

    // -----------------------------------------
    // Trust points
    // -----------------------------------------
    if (trustRef.current) {
      tl.fromTo(
        trustRef.current.children,
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        },
        0.8
      );
    }

    // -----------------------------------------
    // Credentials
    // -----------------------------------------
    if (credentialRef.current) {
      tl.fromTo(
        credentialRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        1
      );
    }

    // -----------------------------------------
    // Main image
    // -----------------------------------------
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.9,
          x: 40,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        0.3
      );
    }

    // -----------------------------------------
    // Left floating card
    // -----------------------------------------
    if (leftCardRef.current) {
      tl.fromTo(
        leftCardRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        0.8
      );
    }

    // -----------------------------------------
    // Right floating card
    // -----------------------------------------
    if (rightCardRef.current) {
      tl.fromTo(
        rightCardRef.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        0.9
      );
    }

    // -----------------------------------------
    // Floating animations
    // Start AFTER entrance animation
    // -----------------------------------------

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.8,
      });
    }

    if (leftCardRef.current) {
      gsap.to(leftCardRef.current, {
        y: 15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
    }

    if (rightCardRef.current) {
      gsap.to(rightCardRef.current, {
        y: -15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.2,
      });
    }
  });

  return () => ctx.revert();
}, []);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* =========================================================
          BACKGROUND DECORATION
          ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E8F4FF] blur-3xl" />

        {/* Mint glow */}

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#C7F2E9]/70 blur-3xl" />

        {/* Purple glow */}

        <div className="absolute right-[35%] top-[25%] h-48 w-48 rounded-full bg-[#E9D5FF]/40 blur-3xl" />

        {/* Decorative circles */}

        <div className="absolute right-[8%] top-[18%] hidden h-32 w-32 rounded-full border border-[#14B8A6]/10 lg:block" />

        <div className="absolute right-[11%] top-[21%] hidden h-20 w-20 rounded-full border border-[#2563EB]/10 lg:block" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0F3B67 1px, transparent 1px), linear-gradient(90deg, #0F3B67 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================================================
          HERO CONTENT
          ========================================================= */}

      <Container className="relative">
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-20 xl:py-24">
          
          {/* =====================================================
              LEFT CONTENT
              ===================================================== */}

          <div className="relative z-10 max-w-2xl">
            
            {/* Badge */}

            <div ref={badgeRef} className="mb-6">
              <Badge variant="teal">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
                Specialist Pain Medicine
              </Badge>
            </div>

            {/* Heading */}

            <h1 ref={headingRef} className="font-['Playfair_Display'] text-[42px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#0F3B67] sm:text-5xl md:text-[58px] lg:text-[60px] xl:text-[68px]">
              Expert Pain Care.
              <span className="mt-1 block text-[#14B8A6]">
                Reclaim Your Life.
              </span>
            </h1>

            {/* Description */}

            <p ref={descRef} className="mt-6 max-w-xl text-[15px] leading-7 text-slate-500 sm:text-base sm:leading-8">
              Personalized care for chronic and cancer pain, combining
              specialist expertise, medication and image-guided
              interventions to help you move forward with confidence.
            </p>

            {/* =================================================
                CTA BUTTONS
                ================================================= */}

            <div ref={buttonsRef} className="mt-8 flex flex-col gap-3 sm:flex-row">
              
              {/* Primary CTA */}

              <a
                href="#/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F3B67] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(15,59,103,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b3155] hover:shadow-[0_14px_30px_rgba(15,59,103,0.2)]"
              >
                <CalendarDays size={17} />

                Book a Consultation

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* Secondary CTA */}

              <a
                href="#/treatments"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0F3B67] transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/40 hover:bg-[#E8F4FF]"
              >
                Explore Treatments

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* =================================================
                TRUST POINTS
                ================================================= */}

            <div ref={trustRef} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                <CheckCircle2
                  size={16}
                  className="text-[#14B8A6]"
                />
                Internationally Trained
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                <CheckCircle2
                  size={16}
                  className="text-[#14B8A6]"
                />
                Specialist Pain Care
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                <CheckCircle2
                  size={16}
                  className="text-[#14B8A6]"
                />
                Patient-Centered Approach
              </div>
            </div>

            {/* =================================================
                SMALL CREDENTIAL AREA
                ================================================= */}

            <div ref={credentialRef} className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-6">
              
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F4FF]">
                <ShieldCheck
                  size={22}
                  className="text-[#2563EB]"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-[#0F3B67]">
                  Consultant Pain Medicine
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  CCST • Diploma Pain Medicine • FCAI
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
              ===================================================== */}

          <div ref={imageRef} className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
            
            {/* Large background shape */}

            <div className="absolute right-0 top-8 h-[85%] w-[85%] rounded-[40px] bg-gradient-to-br from-[#E8F4FF] via-white to-[#C7F2E9] rotate-3" />

            {/* Main image container */}

            <div className="relative mx-auto aspect-[4/5] max-w-[470px] overflow-hidden rounded-[32px] border border-white bg-white shadow-[0_25px_80px_rgba(15,59,103,0.14)]">
              
              {/* =================================================
                  REPLACE THIS IMAGE
                  ================================================= */}

              <img
                src={Drimage}
                alt="Dr. Romana Durrani - Consultant Pain Medicine"
                className="h-full w-full object-cover object-center"
              />

              {/* Image overlay */}

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0F3B67]/50 to-transparent" />

              {/* Image label */}

              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-md">
                  <p className="font-['Playfair_Display'] text-lg font-semibold text-[#0F3B67]">
                    Dr. Romana Durrani
                  </p>

                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#14B8A6]">
                    Consultant Pain Medicine
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING SPECIALIST CARD
                ================================================= */}

            <div ref={leftCardRef} className="absolute -left-2 top-12 hidden w-[190px] rounded-2xl border border-white bg-white/95 p-4 shadow-[0_15px_40px_rgba(15,59,103,0.12)] backdrop-blur-md sm:block lg:-left-8 lg:top-16">
              
              <div className="flex items-start gap-3">
                
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C7F2E9]">
                  <Sparkles
                    size={18}
                    className="text-[#0F766E]"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold leading-5 text-[#0F3B67]">
                    Specialist
                    <br />
                    Pain Management
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-slate-400">
                    Personalized treatment plans
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING EXPERIENCE CARD
                ================================================= */}

            <div ref={rightCardRef} className="absolute -bottom-5 -right-2 hidden w-[205px] rounded-2xl border border-white bg-[#0F3B67] p-4 shadow-[0_15px_40px_rgba(15,59,103,0.2)] sm:block lg:-right-7">
              
              <div className="flex items-center gap-3">
                
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14B8A6]">
                  <ShieldCheck
                    size={19}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    International
                    <br />
                    Experience
                  </p>

                  <p className="mt-1 text-[9px] text-blue-200">
                    Ireland • UK • Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative dot */}

            <div className="absolute -bottom-8 left-12 h-16 w-16 rounded-full border border-[#14B8A6]/20 sm:left-20" />

          </div>
        </div>
      </Container>

      {/* =========================================================
          BOTTOM SCROLL INDICATOR
          ========================================================= */}

      <div className="hidden border-t border-slate-100 bg-white/50 lg:block">
        <Container>
          <div className="flex h-14 items-center justify-between">
            
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Chronic & Cancer Pain Management
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#14B8A6]" />

              <span className="text-[10px] font-medium text-slate-400">
                Explore below
              </span>

              <span className="animate-bounce text-[#14B8A6]">
                ↓
              </span>
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Hayatabad • Peshawar
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}