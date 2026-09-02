import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Video,
  Camera,
  Lightbulb,
} from "lucide-react";

const Resources = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".resources-badge",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        )
        .fromTo(
          ".resources-title",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.2"
        )
        .fromTo(
          ".resources-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );

      const target = gridRef.current;
      if (target) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              gsap.fromTo(
                ".resource-card",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
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

  const resources = [
    {
      icon: BookOpen,
      title: "Understanding Pain",
      description:
        "Educational information to help patients better understand chronic and persistent pain.",
      label: "Education",
    },
    {
      icon: FileText,
      title: "Patient Guides",
      description:
        "Simple resources to help patients prepare for consultations and understand treatment options.",
      label: "Guides",
    },
    {
      icon: Video,
      title: "Patient Videos",
      description:
        "Educational videos and future patient resources covering pain management and procedures.",
      label: "Videos",
    },
    {
      icon: Lightbulb,
      title: "Pain Management Tips",
      description:
        "Helpful information about living with persistent pain and working toward better function.",
      label: "Tips",
    },
    {
      icon: FileText,
      title: "Clinical Publications",
      description:
        "Selected academic articles, editorials, guidelines and professional contributions.",
      label: "Research",
    },
    {
      icon: Camera,
      title: "Photography & Life",
      description:
        "A personal collection reflecting an interest in landscape photography and life beyond medicine.",
      label: "Personal",
    },
  ];

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#F8FAFC] text-[#0F3B67]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#E8F4FF] blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="resources-badge mb-6 inline-flex items-center gap-2 rounded-full bg-[#E8F4FF] px-4 py-2 text-sm font-semibold text-[#2563EB]">
            <BookOpen size={16} />
            Patient Resources
          </div>

          <h1 className="resources-title font-playfair text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Knowledge can help you{" "}
            <span className="text-[#2563EB]">understand your pain.</span>
          </h1>

          <p className="resources-description mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5B6169] sm:text-lg">
            Explore educational information, patient resources and professional
            content related to pain medicine.
          </p>
        </div>
      </section>

      {/* RESOURCE CARDS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <article
                  key={resource.title}
                  className="resource-card group rounded-3xl border border-[#E6E7E9] bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#E8F4FF] p-3 text-[#2563EB] transition group-hover:bg-[#0F3B67] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-[#5B6169]">
                      {resource.label}
                    </span>
                  </div>

                  <h2 className="mt-7 font-playfair text-2xl font-semibold">
                    {resource.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#5B6169]">
                    {resource.description}
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
                    Explore Resource
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACADEMIC CTA */}
      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#0F3B67] px-8 py-14 text-center text-white sm:px-12">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#14B8A6]">
            Professional & Academic Work
          </span>

          <h2 className="mt-4 font-playfair text-3xl font-semibold sm:text-4xl">
            Explore professional contributions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">
            Learn more about academic work, publications, professional
            contributions and experience in pain medicine.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#0F3B67] transition hover:-translate-y-1"
          >
            Learn More About Dr. Durrani
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Resources;