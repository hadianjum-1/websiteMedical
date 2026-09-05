import {
  Award,
  BookOpen,
  CheckCircle2,
  Globe2,
  GraduationCap,
  HeartPulse,
  Stethoscope,
  ArrowRight
} from "lucide-react";

import Container from "./../Components/common/Container";
import Badge from "./../Components/common/Badge";
import drimage from "/src/assets/imageupdateDr.png";


export default function About() {
  return (
    <main className="bg-[#F8FAFC]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#E8F4FF] blur-3xl" />

        <Container>
          <div className="grid min-h-[520px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">

            {/* Content */}

            <div className="relative">
              <Badge variant="teal">
                About Dr. Romana Durrani
              </Badge>

              <h1 className="mt-6 font-['Playfair_Display'] text-4xl font-semibold leading-tight tracking-tight text-[#0F3B67] sm:text-5xl lg:text-6xl">
                Specialist expertise.
                <span className="block text-[#14B8A6]">
                  Compassionate care.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                Dr. Romana Durrani is a Consultant in Pain Medicine with
                specialist training and clinical experience across Ireland,
                the United Kingdom and Pakistan.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-xl bg-[#E8F4FF] px-4 py-3">
                  <p className="text-xs font-semibold text-[#0F3B67]">
                    CCST
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Specialist Training
                  </p>
                </div>

                <div className="rounded-xl bg-[#C7F2E9] px-4 py-3">
                  <p className="text-xs font-semibold text-[#0F3B67]">
                    FCAI
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Fellowship in Anaesthesia
                  </p>
                </div>

                <div className="rounded-xl bg-[#E9D5FF] px-4 py-3">
                  <p className="text-xs font-semibold text-[#0F3B67]">
                    Pain Medicine
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Specialist Care
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}

            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-3xl bg-[#C7F2E9]" />

              <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full bg-[#E9D5FF]" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-[#E8F4FF] shadow-[0_25px_70px_rgba(15,59,103,0.12)]">
                <img
                  src={drimage}
                  alt="Dr. Romana Durrani"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/30 bg-white/90 p-5 backdrop-blur-md">
                  <p className="font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                    Dr. Romana Durrani
                  </p>

                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-[#14B8A6]">
                    Consultant Pain Medicine
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">
              Her journey
            </span>

            <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold text-[#0F3B67] sm:text-4xl">
              A career built around specialist care
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              Dr. Romana Durrani graduated from Army Medical College before
              completing her house job and gaining experience with the United
              Nations. She later returned to clinical practice and pursued
              specialist training in Anaesthesia.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              Her professional journey then took her to Ireland and the UK,
              where she completed structured specialist training and developed
              expertise in Anaesthesia and Pain Medicine.
            </p>

          </div>
        </Container>
      </section>

      {/* =========================================================
          QUALIFICATIONS
      ========================================================= */}

      <section className="bg-white py-20 sm:py-24">
        <Container>

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              Qualifications
            </span>

            <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold text-[#0F3B67] sm:text-4xl">
              Specialist education & training
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: GraduationCap,
                title: "MBBS",
                text: "Medical degree from Army Medical College.",
              },
              {
                icon: Award,
                title: "FCAI",
                text: "Fellowship in Anaesthesia.",
              },
              {
                icon: Stethoscope,
                title: "CCST",
                text: "Certificate of Specialist Training.",
              },
              {
                icon: HeartPulse,
                title: "Pain Medicine",
                text: "Specialist training and diploma in Pain Medicine.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-100 bg-[#F8FAFC] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F4FF]">
                    <Icon
                      size={21}
                      className="text-[#2563EB]"
                    />
                  </div>

                  <h3 className="mt-6 font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>

          {/* Full qualifications */}

          <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-slate-100 bg-[#F8FAFC] p-7 sm:p-9">

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "CCST – Certificate of Specialist Training",
                "Diploma in Pain Medicine",
                "EDAIC – Anaesthesia & ICU",
                "FCAI – Fellowship in Anaesthesia",
                "MCAI – Primary",
                "DA – Diploma in Anaesthesia",
                "DHP&M – Diploma in Health Planning & Management",
                "MBBS",
              ].map((qualification) => (
                <div
                  key={qualification}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#14B8A6]"
                  />

                  <span className="text-sm text-slate-600">
                    {qualification}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </Container>
      </section>

      {/* =========================================================
          INTERNATIONAL EXPERIENCE
      ========================================================= */}

      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <Container>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Timeline */}

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">
                Professional journey
              </span>

              <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold text-[#0F3B67] sm:text-4xl">
                International experience brought home.
              </h2>

              <div className="mt-10 space-y-7">

                {[
                  {
                    title: "Army Medical College",
                    text: "Graduated in medicine before beginning clinical training.",
                  },
                  {
                    title: "Ireland",
                    text: "Completed structured specialist training in Anaesthesia with the College of Anaesthesiologists of Ireland.",
                  },
                  {
                    title: "Pain Medicine",
                    text: "Completed structured training in Pain Medicine, including specialist interventional procedures.",
                  },
                  {
                    title: "United Kingdom",
                    text: "Worked as a consultant and contributed to clinical training and professional development.",
                  },
                  {
  title: "Shaukat Khanum Memorial Cancer Hospital & Research Centre, Lahore",
  text: "Contributed to the development of the Pain Medicine department and helped the department gain recognition for fellowship training in Pain Medicine. She also contributed to national guidelines for cancer and chronic pain during COVID, published by CPSP.",
},
{
  title: "RMI, Peshawar",
  text: "Recently returned to Pakistan and joined RMI as a Pain Medicine Consultant, providing specialist pain services and anaesthesia services.",
},
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="relative flex gap-5"
                  >
                    <div className="relative flex flex-col items-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C7F2E9] text-xs font-bold text-[#0F766E]">
                        {index + 1}
                      </div>

                      {index !== 5 && (
                        <div className="mt-2 h-full w-px bg-slate-200" />
                      )}
                    </div>

                    <div className="pb-2">
                      <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#0F3B67]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Highlight card */}

            <div className="relative overflow-hidden rounded-[32px] bg-[#0F3B67] p-8 sm:p-10">

              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#14B8A6]/20 blur-3xl" />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#14B8A6]">
                  <Globe2
                    size={25}
                    className="text-white"
                  />
                </div>

                <h3 className="mt-8 font-['Playfair_Display'] text-3xl font-semibold text-white">
                  Ireland.
                  <br />
                  United Kingdom.
                  <br />
                  Pakistan.
                </h3>

                <p className="mt-6 text-sm leading-7 text-blue-100">
                  Dr. Romana's clinical journey across different healthcare
                  systems has helped shape a broad perspective on specialist
                  pain care.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">

                  {["Ireland", "UK", "Pakistan"].map((country) => (
                    <div
                      key={country}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                    >
                      <p className="text-xs font-semibold text-white">
                        {country}
                      </p>
                    </div>
                  ))}

                </div>

              </div>
            </div>

          </div>

        </Container>
      </section>
      {/* =========================================================
    SHAUKAT KHANUM EXPERIENCE
========================================================= */}

<section className="bg-white py-20 sm:py-24">
  <Container>
    <div className="mx-auto max-w-6xl">

      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

        {/* Left */}
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F4FF]">
            <HeartPulse
              size={25}
              className="text-[#2563EB]"
            />
          </div>

          <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">
            Clinical Experience
          </span>

          <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-semibold leading-tight text-[#0F3B67] sm:text-4xl">
            Shaukat Khanum Memorial Cancer Hospital & Research Centre, Lahore
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            Dr. Romana worked at Shaukat Khanum Memorial Cancer Hospital &
            Research Centre, Lahore, contributing to specialist pain medicine
            services and the development of the department.
          </p>
        </div>

        {/* Right */}
        <div className="rounded-[32px] bg-[#F8FAFC] p-7 sm:p-9">

          <div className="space-y-7">

            <div className="flex gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C7F2E9]">
                <CheckCircle2
                  size={18}
                  className="text-[#0F766E]"
                />
              </div>

              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                  Pain Medicine Development
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Contributed to the development of the department and helped
                  establish it for fellowship training in Pain Medicine.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F4FF]">
                <BookOpen
                  size={18}
                  className="text-[#2563EB]"
                />
              </div>

              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                  National Pain Guidelines
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Contributed to national guidelines for cancer and chronic
                  pain during COVID, published by the College of Physicians
                  and Surgeons Pakistan (CPSP).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E9D5FF]">
                <Award
                  size={18}
                  className="text-[#7C3AED]"
                />
              </div>

              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                  Specialist Cancer Pain Care
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Experience in managing cancer-related pain as part of a
                  multidisciplinary specialist pain service.
                </p>
              </div>
            </div>

          </div>

          {/* CPSP Link */}
          <div className="mt-8 border-t border-slate-200 pt-6">
            <a
              href="https://www.cpsp.edu.pk/files/guidelines/cpsm-guidelines.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition hover:text-[#0F3B67]"
            >
              View the CPSP Guidelines
              <ArrowRight size={17} />
            </a>
          </div>

        </div>

      </div>

    </div>
  </Container>
</section>

      {/* =========================================================
          ACADEMIC CONTRIBUTION
      ========================================================= */}

      <section className="bg-white py-20 sm:py-24">
        <Container>

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9D5FF]">
                <BookOpen
                  size={24}
                  className="text-[#7C3AED]"
                />
              </div>

              <h2 className="mt-7 font-['Playfair_Display'] text-3xl font-semibold text-[#0F3B67] sm:text-4xl">
                Contributing beyond clinical practice.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Alongside clinical work, Dr. Romana has contributed to medical
                education, publications and professional guidelines.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-3xl bg-[#F8FAFC] p-6">
                <BookOpen
                  size={22}
                  className="text-[#2563EB]"
                />

                <h3 className="mt-5 font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                  National Guidelines
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Contributed to national guidelines for cancer and chronic
                  pain during COVID, published by CPSP.
                </p>
              </div>

              <div className="rounded-3xl bg-[#F8FAFC] p-6">
                <Award
                  size={22}
                  className="text-[#14B8A6]"
                />

                <h3 className="mt-5 font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                  Medical Publications
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Multiple articles, editorials and book reviews have been
                  published during her professional career.
                </p>
              </div>

              <div className="rounded-3xl bg-[#F8FAFC] p-6">
                <Stethoscope
                  size={22}
                  className="text-[#7C3AED]"
                />

                <h3 className="mt-5 font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                  Medical Education
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Experience supporting the training and development of
                  healthcare professionals.
                </p>
              </div>

              <div className="rounded-3xl bg-[#F8FAFC] p-6">
                <Globe2
                  size={22}
                  className="text-[#2563EB]"
                />

                <h3 className="mt-5 font-['Playfair_Display'] text-xl font-semibold text-[#0F3B67]">
                  Professional Leadership
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Previous responsibilities have included training
                  supervision and medical appraisal.
                </p>
              </div>

            </div>

          </div>

        </Container>
      </section>

      {/* =========================================================
          CARE PHILOSOPHY
      ========================================================= */}

      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <Container>

          <div className="mx-auto max-w-4xl rounded-[32px] bg-[#0F3B67] px-7 py-12 text-center sm:px-12 sm:py-16">

            <HeartPulse
              size={32}
              className="mx-auto text-[#5eead4]"
            />

            <blockquote className="mt-7 font-['Playfair_Display'] text-2xl font-medium leading-[1.4] text-white sm:text-3xl lg:text-4xl">
              "We can offer a combination of services tailored according to
              your needs and help in improving quality of life."
            </blockquote>

            <div className="mx-auto mt-7 h-px w-12 bg-[#14B8A6]" />

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
              Dr. Romana Durrani
            </p>

          </div>

        </Container>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="bg-white py-20 sm:py-24">
        <Container>

          <div className="rounded-[32px] bg-gradient-to-br from-[#E8F4FF] to-[#C7F2E9] p-8 sm:p-12 lg:p-14">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
                  Specialist pain care
                </span>

                <h2 className="mt-4 max-w-2xl font-['Playfair_Display'] text-3xl font-semibold text-[#0F3B67] sm:text-4xl">
                  Take the first step toward better pain management.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                  Arrange a consultation to discuss your symptoms, treatment
                  options and individual needs.
                </p>
              </div>

              <a
                href="#/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#0F3B67] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#0b3155]"
              >
                Book a Consultation →
              </a>

            </div>

          </div>

        </Container>
      </section>

    </main>
  );
}