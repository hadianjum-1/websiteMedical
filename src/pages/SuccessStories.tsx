import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  ArrowRight,
  Play,
  Quote,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";

const SuccessStories = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".story-badge",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        )
        .fromTo(
          ".story-title",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.2"
        )
        .fromTo(
          ".story-intro",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".featured-story",
          { opacity: 0, y: 40, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.2"
        );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#F8FAFC] text-[#0F3B67]"
    >
      {/* HERO */}
      <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="story-badge mb-6 inline-flex items-center gap-2 rounded-full bg-[#E8F4FF] px-4 py-2 text-sm font-semibold text-[#2563EB]">
            <HeartPulse size={16} />
            Patient Journey
          </div>

          <h1 className="story-title font-playfair text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Stories of hope,{" "}
            <span className="text-[#2563EB]">movement & recovery.</span>
          </h1>

          <p className="story-intro mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5B6169] sm:text-lg">
            Every patient journey is unique. Here is one example of how
            specialist pain management helped a patient regain mobility.
          </p>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="featured-story mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-[#0F3B67]/8">
          <div className="grid lg:grid-cols-2">
            {/* Visual */}
            <div className="relative flex min-h-[420px] items-center justify-center bg-[#0F3B67] p-8">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[#14B8A6] blur-3xl" />
                <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-[#2563EB] blur-3xl" />
              </div>

              <div className="relative text-center text-white">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                  <Play size={30} className="ml-1" />
                </div>

                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-white/50">
                  Patient Story
                </p>

                <h2 className="mt-3 font-playfair text-3xl font-semibold">
                  From wheelchair to walking home
                </h2>

                <p className="mt-4 text-sm text-white/60">
                  Video and photographs coming soon
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#14B8A6]">
                Featured Story
              </span>

              <h2 className="mt-4 font-playfair text-3xl font-semibold">
                A 44-year-old patient's journey
              </h2>

              <p className="mt-5 leading-8 text-[#5B6169]">
                Following lower-back surgery, the patient experienced severe
                upper and back surgical-site pain and significant fear of
                movement. An MRI showed a disc bulge and muscular spasm.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Presented with severe pain and limited mobility",
                  "Arrived using a wheelchair",
                  "Received Botox treatment",
                  "Received a fluoroscopy-guided epidural",
                  "Was able to walk home after treatment",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#5B6169]"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#14B8A6]"
                    />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-5">
                <Quote size={22} className="text-[#2563EB]" />

                <p className="mt-3 text-sm leading-7 text-[#5B6169]">
                  This story highlights the potential impact that an
                  individualized pain management approach can have on mobility
                  and daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-7 text-[#7B8189]">
            Patient stories are shared with appropriate permission. Individual
            treatment outcomes vary, and this story should not be considered a
            guarantee of results.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-[#2563EB]"
          >
            Discuss Your Pain
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SuccessStories;