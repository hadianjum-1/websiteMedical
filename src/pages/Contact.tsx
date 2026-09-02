import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

const Contact = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".contact-badge",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        )
        .fromTo(
          ".contact-title",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.2"
        )
        .fromTo(
          ".contact-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".contact-card",
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
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
      <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="contact-badge mb-6 inline-flex items-center gap-2 rounded-full bg-[#C7F2E9] px-4 py-2 text-sm font-semibold text-[#0F766E]">
            <CalendarDays size={16} />
            Appointments & Contact
          </div>

          <h1 className="contact-title font-playfair text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Let's talk about your{" "}
            <span className="text-[#2563EB]">pain.</span>
          </h1>

          <p className="contact-description mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5B6169] sm:text-lg">
            If you would like to arrange a consultation or learn more about
            pain management options, please get in touch.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="contact-card rounded-3xl border border-[#E6E7E9] bg-white p-7 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F4FF] text-[#2563EB]">
              <MapPin size={25} />
            </div>

            <h2 className="mt-6 text-xl font-bold">Clinic Location</h2>

            <p className="mt-4 text-sm leading-7 text-[#5B6169]">
              Clinic No. 60
              <br />
              Ground Floor, New Building (GH)
              <br />
              5-B/2, Phase-V
              <br />
              Hayatabad, Peshawar
              <br />
              Khyber Pakhtunkhwa, Pakistan
            </p>
          </div>

          <div className="contact-card rounded-3xl border border-[#E6E7E9] bg-white p-7 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C7F2E9] text-[#0F766E]">
              <Mail size={25} />
            </div>

            <h2 className="mt-6 text-xl font-bold">Email</h2>

            <p className="mt-4 text-sm leading-7 text-[#5B6169]">
              For appointment enquiries and general questions, you can contact
              the clinic by email.
            </p>

            <a
              href="mailto:romana.durrani@rmi.edu.pk"
              className="mt-5 inline-block break-all font-semibold text-[#2563EB] hover:underline"
            >
              romana.durrani@rmi.edu.pk
            </a>
          </div>

          <div className="contact-card rounded-3xl border border-[#E6E7E9] bg-white p-7 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9D5FF] text-[#7C3AED]">
              <Clock size={25} />
            </div>

            <h2 className="mt-6 text-xl font-bold">Appointments</h2>

            <p className="mt-4 text-sm leading-7 text-[#5B6169]">
              Appointment availability may vary. Please contact the clinic to
              confirm the available consultation times.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-[#2563EB]"
            >
              Request an Appointment
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-[#0F3B67]/8">
          <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <div className="bg-[#0F3B67] p-8 text-white sm:p-10 lg:p-12">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#14B8A6]">
                Get In Touch
              </span>

              <h2 className="mt-4 font-playfair text-3xl font-semibold sm:text-4xl">
                Request an appointment
              </h2>

              <p className="mt-5 leading-8 text-white/65">
                Send your details and enquiry. The clinic can then get back to
                you regarding your appointment request.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex gap-3">
                  <Mail className="mt-1 text-[#14B8A6]" size={20} />
                  <span className="text-sm text-white/70">
                    romana.durrani@rmi.edu.pk
                  </span>
                </div>

                <div className="flex gap-3">
                  <MapPin className="mt-1 text-[#14B8A6]" size={20} />
                  <span className="text-sm leading-6 text-white/70">
                    Hayatabad, Peshawar, Pakistan
                  </span>
                </div>
              </div>
            </div>

            <form className="p-8 sm:p-10 lg:p-12">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#E6E7E9] px-4 py-3.5 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-[#E6E7E9] px-4 py-3.5 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Appointment enquiry"
                  className="w-full rounded-xl border border-[#E6E7E9] px-4 py-3.5 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us briefly about your enquiry..."
                  className="w-full resize-none rounded-xl border border-[#E6E7E9] px-4 py-3.5 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0F3B67] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#2563EB]"
              >
                Send Enquiry
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;