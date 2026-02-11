import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyItenx from "@/components/WhyItenx";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="bg-[#0A0C10]">
      <Hero />
      <About />
      <Services />
      <WhyItenx />
      <CaseStudies />
      <Contact />
    </main>
  );
}
