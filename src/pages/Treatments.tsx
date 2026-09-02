import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  ArrowRight,
  Activity,
  Syringe,
  Zap,
  Bone,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const Treatments = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".treatments-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          ".treatments-title",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.2"
        )
        .fromTo(
          ".treatments-description",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".treatment-hero-card",
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        );

      const target = gridRef.current;
      if (target) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              gsap.fromTo(
                ".treatment-card",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }
              );
              observer.disconnect();
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(target);
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const treatments = [
    {
      icon: Syringe,
      title: "Trigger Point Injections",
      description:
        "Targeted injections for selected painful muscle areas, with Botox used where clinically appropriate.",
    },
    {
      icon: Activity,
      title: "Nerve Blocks",
      description:
        "Targeted nerve blocks designed to help identify and manage pain originating from specific nerves.",
    },
    {
      icon: Zap,
      title: "Epidural Procedures",
      description:
        "Fluoroscopy-guided and ultrasound-guided epidural procedures for selected spinal pain conditions.",
    },
    {
      icon: Bone,
      title: "Joint & Musculoskeletal Procedures",
      description:
        "Interventional approaches for selected joint, muscle and musculoskeletal pain conditions.",
    },
    {
      icon: HeartPulse,
      title: "Cancer Pain Procedures",
      description:
        "Specialist procedures including coeliac plexus block and neurolysis for selected cancer pain conditions.",
    },
    {
      icon: ShieldCheck,
      title: "Neurolysis",
      description:
        "Targeted neurolysis procedures for carefully selected patients with persistent pain.",
    },
    {
      icon: Stethoscope,
      title: "SI Joint Procedures",
      description:
        "Targeted sacroiliac joint blocks and neurolysis for selected sources of SI joint pain.",
    },
    {
      icon: Activity,
      title: "Upcoming: RF Ablation",
      description:
        "Radiofrequency ablation is an upcoming treatment option that will be introduced in the future.",
    },
  ];

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#F8FAFC] text-[#0F3B67]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#E8F4FF] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#C7F2E9] opacity-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="treatments-badge mb-6 inline-flex items-center gap-2 rounded-full bg-[#C7F2E9] px-4 py-2 text-sm font-semibold text-[#0F766E]">
                <Activity size={16} />
                Pain Management Treatments
              </div>

              <h1 className="treatments-title font-playfair text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Targeted treatment for{" "}
                <span className="text-[#2563EB]">better pain management.</span>
              </h1>

              <p className="treatments-description mt-6 max-w-2xl text-base leading-8 text-[#5B6169] sm:text-lg">
                A range of interventional and supportive approaches designed
                around your individual condition, symptoms and treatment goals.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0F3B67] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#2563EB]"
              >
                Discuss Your Treatment
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="treatment-hero-card rounded-3xl bg-[#0F3B67] p-8 text-white shadow-2xl shadow-[#0F3B67]/20">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <HeartPulse size={28} />
              </div>

              <h2 className="font-playfair text-3xl font-semibold">
                Individualized care
              </h2>

              <p className="mt-5 leading-8 text-white/70">
                Treatment recommendations depend on your symptoms, diagnosis,
                medical history and clinical assessment.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-white/50">Approach</p>
                <p className="mt-1 font-semibold">
                  Assessment → Treatment → Follow-up
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#14B8A6]">
              Treatment Options
            </span>

            <h2 className="mt-3 font-playfair text-3xl font-semibold sm:text-4xl">
              Interventional Pain Management
            </h2>

            <p className="mt-5 leading-8 text-[#5B6169]">
              Selected treatments may be recommended following a detailed
              clinical assessment.
            </p>
          </div>

          <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {treatments.map((treatment) => {
              const Icon = treatment.icon;

              return (
                <article
                  key={treatment.title}
                  className="treatment-card group rounded-3xl border border-[#E6E7E9] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F4FF] text-[#2563EB] transition group-hover:bg-[#0F3B67] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {treatment.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#5B6169]">
                    {treatment.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-[#0F3B67] to-[#2563EB] px-8 py-14 text-center text-white">
          <h2 className="font-playfair text-3xl font-semibold sm:text-4xl">
            Find an approach that's right for you.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
            Book a consultation to discuss your symptoms and available
            treatment options.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#0F3B67] transition hover:-translate-y-1"
          >
            Book an Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Treatments;