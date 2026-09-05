import { useEffect, useRef, useState } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const CLINIC_EMAIL = "romanadurrani@hotmail.com";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    const emailSubject = `Appointment Request - ${name}`;

    const emailBody = `
Hello Dr. Romana,

I would like to request an appointment.

Patient/Visitor Details
-----------------------
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Thank you.
    `.trim();

    const mailtoURL =
      `mailto:${CLINIC_EMAIL}` +
      `?subject=${encodeURIComponent(emailSubject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoURL;

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

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
              Ground Floor, New Building (GH) RMI
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
      {/* GOOGLE MAP */}
<section className="px-6 pb-20 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-6xl">
    <div className="mb-8">
      <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F766E]">
        Find Us
      </span>

      <h2 className="mt-3 font-playfair text-3xl font-semibold text-[#0F3B67] sm:text-4xl">
        Visit Dr. D’s Clinic
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5B6169] sm:text-base">
        Clinic No. 60, Ground Floor, New Building (GH), RMI,
        5-B/2, Phase-V, Hayatabad, Peshawar, Khyber Pakhtunkhwa, Pakistan.
      </p>
    </div>

    <div className="overflow-hidden rounded-3xl border border-[#E6E7E9] bg-white shadow-lg">
      <div className="aspect-[16/7] w-full">
        <iframe
          title="Dr. D’s Clinic Location"
          src="https://www.google.com/maps?q=RMI%20Hayatabad%20Peshawar%20Khyber%20Pakhtunkhwa%20Pakistan&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F4FF] text-[#2563EB]">
            <MapPin size={20} />
          </div>

          <div>
            <p className="font-semibold text-[#0F3B67]">
              Clinic No. 60, RMI
            </p>

            <p className="mt-1 text-sm text-[#5B6169]">
              Ground Floor, New Building (GH) RMI, Hayatabad, Peshawar
            </p>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=RMI%20Hayatabad%20Peshawar%20Khyber%20Pakhtunkhwa%20Pakistan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F3B67] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2563EB]"
        >
          Open in Google Maps
          <ArrowRight size={17} />
        </a>
      </div>
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

           <form
  onSubmit={handleSubmit}
  className="p-8 sm:p-10 lg:p-12"
>
  <div className="grid gap-5 sm:grid-cols-2">
    {/* FULL NAME */}
    <div>
      <label
        htmlFor="name"
        className="mb-2 block text-sm font-medium text-[#0F3B67]"
      >
        Full Name
      </label>

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        required
        autoComplete="name"
        className="w-full rounded-xl border border-[#E6E7E9] px-4 py-3.5 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
      />
    </div>

    {/* EMAIL */}
    <div>
      <label
        htmlFor="email"
        className="mb-2 block text-sm font-medium text-[#0F3B67]"
      >
        Email
      </label>

      <input
        id="email"
        name="email"
        type="email"
        placeholder="your@email.com"
        required
        autoComplete="email"
        className="w-full rounded-xl border border-[#E6E7E9] px-4 py-3.5 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
      />
    </div>
  </div>

  {/* SUBJECT */}
  <div className="mt-5">
    <label
      htmlFor="subject"
      className="mb-2 block text-sm font-medium text-[#0F3B67]"
    >
      Subject
    </label>

    <input
      id="subject"
      name="subject"
      type="text"
      placeholder="Appointment enquiry"
      required
      className="w-full rounded-xl border border-[#E6E7E9] px-4 py-3.5 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
    />
  </div>

  {/* MESSAGE */}
  <div className="mt-5">
    <label
      htmlFor="message"
      className="mb-2 block text-sm font-medium text-[#0F3B67]"
    >
      Message
    </label>

    <textarea
      id="message"
      name="message"
      rows={5}
      placeholder="Tell us briefly about your enquiry..."
      required
      className="w-full resize-none rounded-xl border border-[#E6E7E9] px-4 py-3.5 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
    />
  </div>

  {/* PRIVACY NOTE */}
 <p className="mt-4 text-xs leading-5 text-[#6B7280]">
  Please avoid including sensitive medical or confidential information
  in your enquiry.
</p>

  {/* SUBMIT */}
  <button
    type="submit"
    disabled={isSubmitting}
    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0F3B67] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#2563EB] disabled:cursor-not-allowed disabled:opacity-60"
  >
    {isSubmitting ? "Opening Email..." : "Send Enquiry"}

    {!isSubmitting && <ArrowRight size={18} />}
  </button>
</form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;