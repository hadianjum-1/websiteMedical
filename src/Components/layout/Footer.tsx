import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Logo from '../../assets/logo-white.png'

const quickLinks = [
  { label: "Home", href: "#/" },
  { label: "About Dr. Romana", href: "#/about" },
  { label: "Conditions", href: "#/conditions" },
  { label: "Treatments", href: "#/treatments" },
  { label: "Success Stories", href: "#/success-stories" },
  { label: "Resources", href: "#/resources" },
  { label: "Contact", href: "#/contact" },
];

const services = [
  "Pain Consultations",
  "Interventional Pain Procedures",
  "Cancer Pain Management",
  "Chronic Pain Management",
  "Weight Management",
  "Life Coaching Support",
];

export default function Footer() {
  return (
    <footer className="bg-[#0F3B67] text-white">

      {/* =================================
          MAIN CTA
          ================================= */}

      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0b3155] via-[#173f75] to-[#7C3AED] p-7 sm:p-10 lg:p-12">

          {/* Decorative Elements */}

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#14B8A6]/20 blur-3xl" />

          <div className="absolute -bottom-24 left-1/2 h-64 w-64 rounded-full bg-[#2563EB]/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#5eead4]">
                Take the first step
              </span>

              <h2 className="font-['Playfair_Display'] text-3xl font-medium leading-tight sm:text-4xl">
                Ready to take control
                <br className="hidden sm:block" /> of your pain?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100">
                Get personalized pain management care designed around
                your condition, your needs, and your quality of life.
              </p>
            </div>

            <a
              href="#/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0F3B67] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Book a Consultation

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* =================================
          FOOTER CONTENT
          ================================= */}

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">

          {/* Brand */}

          <div>
            <a
              href="#/"
              className="inline-flex items-center gap-3"
            >
             <img src={Logo} alt="dr logo" width={'80px'} />

              <div>
                <div className="font-['Playfair_Display'] text-xl font-semibold">
                  Dr. Romana Durrani
                </div>

                <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-[#5eead4]">
                  Consultant Pain Medicine
                </div>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100">
              Expert pain care combining personalized treatment,
              medication and image-guided interventions to help
              patients reclaim their lives.
            </p>

            {/* Social Icons */}

            <div className="mt-6 flex gap-3">
              {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs text-blue-100 transition-all hover:border-[#14B8A6] hover:bg-[#14B8A6] hover:text-white"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-sm font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-blue-100 transition-colors hover:text-white"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-sm font-semibold">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-blue-100"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Information */}

          <div>
            <h3 className="text-sm font-semibold">
              Clinic Information
            </h3>

            <div className="mt-5 space-y-5">

              {/* Address */}

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#5eead4]"
                />

                <p className="text-sm leading-6 text-blue-100">
                  Clinic No. 60, Ground Floor,
                  <br />
                  New Building (GH)
                  <br />
                  5-B/2, Phase-V, Hayatabad,
                  <br />
                  Peshawar, Khyber Pakhtunkhwa,
                  Pakistan
                </p>
              </div>

              {/* Phone */}

              <a
                href="tel:+92915838666"
                className="flex gap-3 text-sm text-blue-100 transition-colors hover:text-white"
              >
                <Phone
                  size={18}
                  className="shrink-0 text-[#5eead4]"
                />

                <span>
                  +92 91 5838666
                  <br />
                  +92 91 5838333
                </span>
              </a>

              {/* Email */}

              <a
                href="mailto:romana.durrani@rmi.edu.pk"
                className="flex gap-3 text-sm text-blue-100 transition-colors hover:text-white"
              >
                <Mail
                  size={18}
                  className="shrink-0 text-[#5eead4]"
                />

                <span className="break-all">
                  romana.durrani@rmi.edu.pk
                </span>
              </a>

              {/* Hours */}

              <div className="flex gap-3">
                <Clock3
                  size={18}
                  className="mt-0.5 shrink-0 text-[#5eead4]"
                />

                <div className="text-sm text-blue-100">
                  <p>Monday – Friday</p>
                  <p className="mt-1 font-medium text-white">
                    2:00 PM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================
          BOTTOM BAR
          ================================= */}

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-blue-200 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} Dr. Romana Durrani.
            All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#/terms"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}