import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  ArrowRight,
  Brain,
  Bone,
  Activity,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const Conditions = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const conditionsGridRef = useRef<HTMLDivElement>(null);
  const supportSectionRef = useRef<HTMLDivElement>(null);
  const finalCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero load animation
      const heroTl = gsap.timeline();

      heroTl
        .fromTo(
          ".conditions-badge",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".conditions-title",
          { opacity: 0, y: 45 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".conditions-description",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".conditions-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );

      // Intersection Observers for below-the-fold sections
      const gridTarget = conditionsGridRef.current;
      if (gridTarget) {
        const gridObserver = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              gsap.fromTo(
                ".condition-card",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" }
              );
              gridObserver.disconnect();
            }
          },
          { threshold: 0.1 }
        );
        gridObserver.observe(gridTarget);
      }

      const supportTarget = supportSectionRef.current;
      if (supportTarget) {
        const supportObserver = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              gsap.fromTo(
                ".support-content",
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }
              );
              gsap.fromTo(
                ".support-card",
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }
              );
              supportObserver.disconnect();
            }
          },
          { threshold: 0.15 }
        );
        supportObserver.observe(supportTarget);
      }

      const ctaTarget = finalCtaRef.current;
      if (ctaTarget) {
        const ctaObserver = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              gsap.fromTo(
                ".conditions-final-cta",
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
              );
              ctaObserver.disconnect();
            }
          },
          { threshold: 0.15 }
        );
        ctaObserver.observe(ctaTarget);
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const conditions = [
    {
      icon: Activity,
      title: "Chronic Pain",
      description:
        "Support and treatment for persistent pain that affects your daily activities, mobility, sleep, and quality of life.",
      points: [
        "Long-term pain management",
        "Personalized treatment planning",
        "Interventional pain procedures",
      ],
    },
    {
      icon: HeartPulse,
      title: "Cancer Pain",
      description:
        "Specialist pain management approaches designed to help patients experiencing pain related to cancer and its treatment.",
      points: [
        "Cancer-related pain management",
        "Coeliac plexus procedures",
        "Neurolysis procedures",
      ],
    },
    {
      icon: Bone,
      title: "Back & Spine Pain",
      description:
        "Assessment and interventional treatment options for back and spinal pain, including pain associated with disc problems.",
      points: [
        "Lower back pain",
        "Disc-related pain",
        "Epidural procedures",
      ],
    },
    {
      icon: Brain,
      title: "Nerve Pain",
      description:
        "Care for pain associated with irritated, compressed, or damaged nerves using targeted pain management techniques.",
      points: [
        "Peripheral nerve pain",
        "Nerve blocks",
        "Neurolysis procedures",
      ],
    },
    {
      icon: Stethoscope,
      title: "Musculoskeletal Pain",
      description:
        "Treatment approaches for pain involving muscles, joints, ligaments, and other parts of the musculoskeletal system.",
      points: [
        "Muscle-related pain",
        "Joint pain",
        "Musculoskeletal blocks",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Pelvic & Sacroiliac Pain",
      description:
        "Specialist assessment and treatment options for selected pelvic and sacroiliac joint pain conditions.",
      points: [
        "SI joint pain",
        "Pelvic pain conditions",
        "Targeted injections and blocks",
      ],
    },
  ];

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#F8FAFC] text-[#0F3B67]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        {/* Background decorations */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#E8F4FF] blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#C7F2E9] blur-3xl opacity-60" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="conditions-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/20 bg-[#C7F2E9]/50 px-4 py-2 text-sm font-medium text-[#0F766E]">
              <Sparkles size={16} />
              Conditions We Treat
            </div>

            <h1 className="conditions-title text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Understanding Your{" "}
              <span className="text-[#2563EB]">Pain</span>
            </h1>

            <p className="conditions-description mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5B6169] sm:text-lg">
              Pain can affect every part of life. Our approach focuses on
              understanding the underlying cause of your pain and developing a
              personalized treatment plan to help you move forward.
            </p>

            <div className="conditions-cta mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#0F3B67] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#0F3B67]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2563EB]"
              >
                Book an Appointment
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/treatments"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E6E7E9] bg-white px-6 py-3.5 font-semibold text-[#0F3B67] transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6] hover:text-[#0F766E]"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="section-heading mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.18em] text-[#14B8A6]">
              Areas of Care
            </span>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Conditions We Help Manage
            </h2>

            <p className="mt-5 leading-8 text-[#5B6169]">
              Every patient's pain is different. We take time to understand
              your symptoms and consider appropriate treatment options based on
              your individual needs.
            </p>
          </div>

          <div ref={conditionsGridRef} className="conditions-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition) => {
              const Icon = condition.icon;

              return (
                <article
                  key={condition.title}
                  className="condition-card group rounded-3xl border border-[#E6E7E9] bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#14B8A6]/30 hover:shadow-xl hover:shadow-[#0F3B67]/8"
                >
                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F4FF] text-[#2563EB] transition-all duration-500 group-hover:bg-[#0F3B67] group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xl font-bold text-[#0F3B67]">
                    {condition.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#5B6169]">
                    {condition.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-[#E6E7E9] pt-6">
                    {condition.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm text-[#5B6169]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14B8A6]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PERSONALIZED CARE */}
      <section ref={supportSectionRef} className="support-section overflow-hidden bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="support-content">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#14B8A6]">
              A Personalized Approach
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Your pain deserves{" "}
              <span className="text-[#2563EB]">individual attention.</span>
            </h2>

            <p className="mt-6 leading-8 text-[#5B6169]">
              Effective pain management starts with understanding the person
              behind the pain. Your symptoms, medical history, lifestyle, and
              goals all matter when considering the right treatment approach.
            </p>

            <p className="mt-4 leading-8 text-[#5B6169]">
              Depending on your condition, treatment may involve medication,
              targeted injections, nerve blocks, epidural procedures, or other
              interventional pain management techniques.
            </p>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-[#2563EB]"
            >
              Meet Dr. Romana Durrani
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="support-card relative">
            <div className="rounded-3xl bg-[#0F3B67] p-8 text-white shadow-2xl shadow-[#0F3B67]/15 sm:p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <HeartPulse size={28} />
              </div>

              <h3 className="text-2xl font-bold">
                Focused on better quality of life
              </h3>

              <p className="mt-5 leading-8 text-white/75">
                The goal of pain management is not simply to treat a symptom.
                It is to help patients better understand and manage their pain
                while working toward improved function and quality of life.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-white/60">Approach</p>
                  <p className="mt-1 font-semibold">Personalized</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-white/60">Focus</p>
                  <p className="mt-1 font-semibold">Patient-Centred</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section ref={finalCtaRef} className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="conditions-final-cta mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F3B67] to-[#2563EB] px-7 py-12 text-center text-white shadow-2xl shadow-[#0F3B67]/15 sm:px-12 sm:py-16">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
            Take the Next Step
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">
            Don't let persistent pain control your life.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
            Schedule a consultation to discuss your symptoms and explore
            suitable pain management options.
          </p>

          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#0F3B67] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C7F2E9]"
          >
            Book an Appointment
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Conditions;