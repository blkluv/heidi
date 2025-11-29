import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ImpactSection } from "@/components/impact-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FutureVisionSection } from "@/components/future-vision-section"
import { ContactSection } from "@/components/contact-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ImpactSection />
      {/* <TestimonialsSection /> */}
      <FutureVisionSection />
      {/* <ContactSection /> */}
      <CTASection />
    </main>
  )
}
