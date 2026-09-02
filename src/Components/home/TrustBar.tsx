import {
  Award,
  Globe2,
  GraduationCap,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

import Container from "../common/Container";

const credentials = [
  {
    icon: GraduationCap,
    value: "CCST",
    label: "Anaesthesia & Pain Medicine",
  },
  {
    icon: Award,
    value: "FCAI",
    label: "Fellowship in Anaesthesia",
  },
  {
    icon: Stethoscope,
    value: "Pain Medicine",
    label: "Specialist Training",
  },
  {
    icon: Globe2,
    value: "UK & Ireland",
    label: "International Experience",
  },
  {
    icon: HeartPulse,
    value: "Patient First",
    label: "Personalized Care",
  },
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-slate-100 bg-white">
      <Container>
        <div className="py-7 sm:py-8">
          {/* Intro */}

          <div className="mb-6 flex items-center justify-center gap-3 lg:hidden">
            <span className="h-px w-8 bg-[#14B8A6]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Specialist care you can trust
            </p>

            <span className="h-px w-8 bg-[#14B8A6]" />
          </div>

          {/* Desktop Layout */}

          <div className="hidden items-center lg:flex">
            <div className="w-[190px] shrink-0 pr-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#14B8A6]">
                Professional
              </p>

              <p className="mt-1 font-['Playfair_Display'] text-lg font-semibold text-[#0F3B67]">
                Expertise
              </p>
            </div>

            <div className="h-12 w-px bg-slate-200" />

            <div className="grid flex-1 grid-cols-5">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;

                return (
                  <div
                    key={credential.value}
                    className={`flex items-center justify-center gap-3 px-5 ${
                      index !== 0
                        ? "border-l border-slate-100"
                        : ""
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F4FF]">
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        className="text-[#2563EB]"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-[#0F3B67]">
                        {credential.value}
                      </p>

                      <p className="mt-0.5 text-[9px] leading-4 text-slate-400">
                        {credential.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile / Tablet Grid */}

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
            {credentials.map((credential) => {
              const Icon = credential.icon;

              return (
                <div
                  key={credential.value}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-3.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8F4FF]">
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      className="text-[#2563EB]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-[#0F3B67]">
                      {credential.value}
                    </p>

                    <p className="mt-0.5 line-clamp-2 text-[9px] leading-4 text-slate-400">
                      {credential.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}