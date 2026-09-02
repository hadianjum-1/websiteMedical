import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Menu,
  X,
  Phone,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Dr. Romana", href: "/about" },
  { label: "Conditions", href: "/conditions" },
  { label: "Treatments", href: "/treatments" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];
import logo from '../../assets/logo.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Scroll shadow handler — runs independently of the GSAP context
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 50) {
        gsap.to(headerRef.current, { boxShadow: "0 4px 20px rgba(0,0,0,0.08)", duration: 0.3, overwrite: "auto" });
      } else {
        gsap.to(headerRef.current, { boxShadow: "0 0px 0px rgba(0,0,0,0)", duration: 0.3, overwrite: "auto" });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Scoped to the header element so ctx.revert() only kills these tweens
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Set initial states immediately (prevents flash-of-content before GSAP runs)
      gsap.set(logoRef.current, { opacity: 0, x: -24 });
      if (navRef.current) gsap.set(navRef.current.querySelectorAll("a"), { opacity: 0, y: -16 });
      const ctaButtons = headerRef.current?.querySelectorAll("[data-cta-button]");
      if (ctaButtons && ctaButtons.length > 0) gsap.set(ctaButtons, { opacity: 0, x: 24 });

      // Logo slides in first
      tl.to(logoRef.current, { opacity: 1, x: 0, duration: 0.55 }, 0);

      // Nav links stagger in just after logo starts
      if (navRef.current) {
        tl.to(navRef.current.querySelectorAll("a"), {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
        }, 0.1);
      }

      // CTA buttons come in last
      if (ctaButtons && ctaButtons.length > 0) {
        tl.to(ctaButtons, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
        }, 0.25);
      }
    }, headerRef); // scope = header element

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        
        {/* ================================
            LOGO
            ================================ */}

        <a
          ref={logoRef}
          href="/"
          className="group flex items-center gap-3"
          onClick={closeMobileMenu}
        >
         <img src={logo} alt="Dr romamna logo"  width={'190px'}/>
        </a>

        {/* ================================
            DESKTOP NAVIGATION
            ================================ */}

        <nav ref={navRef} className="hidden items-center gap-7 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`group relative flex items-center gap-1 py-2 text-[13px] font-medium transition-colors duration-200 ${
                index === 0
                  ? "text-[#0F3B67]"
                  : "text-slate-600 hover:text-[#0F3B67]"
              }`}
            >
              {item.label}

              {item.label === "Resources" && (
                <ChevronDown
                  size={13}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              )}

              {/* Active / Hover Line */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#14B8A6] transition-all duration-300 ${
                  index === 0
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* ================================
            DESKTOP CTA
            ================================ */}

        <div className="hidden items-center gap-3 lg:flex">
          <a
            data-cta-button
            href="tel:+92915838666"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#0F3B67] transition-all hover:border-[#14B8A6] hover:bg-[#E8F4FF]"
            aria-label="Call clinic"
          >
            <Phone size={16} />
          </a>

          <a
            data-cta-button
            href="/contact"
            className="group flex items-center gap-2 rounded-xl bg-[#0F3B67] px-5 py-3 text-[12px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b3155] hover:shadow-lg"
          >
            <CalendarDays
              size={15}
              className="transition-transform group-hover:scale-110"
            />

            Book Appointment
          </a>
        </div>

        {/* ================================
            MOBILE MENU BUTTON
            ================================ */}

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-[#0F3B67] lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* ================================
          MOBILE NAVIGATION
          ================================ */}

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-slate-100 py-4 text-sm font-medium text-slate-700 transition-colors hover:text-[#0F3B67]"
              >
                {item.label}

                <span className="text-[#14B8A6]">→</span>
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href="tel:+92915838666"
              className="flex items-center justify-center gap-2 rounded-xl border border-[#0F3B67] px-4 py-3 text-sm font-semibold text-[#0F3B67]"
            >
              <Phone size={16} />
              Call Clinic
            </a>

            <a
              href="/contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#14B8A6] px-4 py-3 text-sm font-semibold text-white"
            >
              <CalendarDays size={16} />
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}