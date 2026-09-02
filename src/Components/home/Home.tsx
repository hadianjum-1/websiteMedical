import Hero from "./Hero";
import TrustBar from "./TrustBar";
import PainConditionsPreview from "./PainConditionsPreview";
import AboutPreview from "./AboutPreview";
import WhyChooseUs from "./WhyChooseUs";
import TreatmentPreview from "./TreatmentPreview";
import HowItWorks from "./HowItWorks";
import SuccessStoryPreview from "./SuccessStoryPreview";
import ProfessionalExperience from "./ProfessionalExperience";
import LifestyleSupport from "./LifestyleSupport";
import TestimonialSection from "./TestimonialSection";
import HomeCTA from "./HomeCTA";

export default function Home() {
  return (
    <>
    <Hero/>
      <TrustBar />
      <PainConditionsPreview />
      <AboutPreview />
      <WhyChooseUs />
      <TreatmentPreview />
      <HowItWorks />
      <SuccessStoryPreview />
      <ProfessionalExperience />
      <LifestyleSupport />
      <TestimonialSection />
      <HomeCTA />
    </>
  );
}