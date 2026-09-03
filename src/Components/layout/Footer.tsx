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

const socialLinks = [
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61593719115577",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z" />
      </svg>
    ),
  },

  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M6.5 8.5A2.5 2.5 0 1 0 6.5 3a2.5 2.5 0 0 0 0 5.5ZM4 10h5v11H4V10Zm7 0h4.8v1.5h.1c.7-1.2 2.2-2 4.2-2 4.5 0 5.3 3 5.3 6.8V21h-5v-4.2c0-1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3V21h-5V10Z" />
      </svg>
    ),
  },
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
            {/* Social Icons */}
<div className="mt-7 flex items-center gap-3">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Dr. Romana Durrani on ${social.name}`}
      className="
        group
        flex h-10 w-10
        items-center justify-center
        rounded-full
        border border-white/15
        bg-white/5
        text-blue-100
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#14B8A6]
        hover:bg-[#14B8A6]
        hover:text-white
        hover:shadow-lg
        hover:shadow-[#14B8A6]/20
      "
    >
      {social.icon}
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
                  New Building (GH) RMI
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