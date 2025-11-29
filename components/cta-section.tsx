"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="cta" className="relative py-24 md:py-32 bg-[#FBF582] overflow-hidden rounded-t-[80px] border-2">
      {/* Animated decorative curved shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-full bg-sunlight/10 rounded-full blur-3xl animate-[gradientShift_20s_ease-in-out_infinite]" />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2">
        <div className="w-full h-full bg-sky/10 rounded-full blur-3xl animate-[gradientShift_25s_ease-in-out_infinite]" style={{ animationDelay: '5s' }} />
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#211217]/5 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-[#211217]/5 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-inverted leading-tight text-balance animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.1s' }}>
            The first step towards <span className="italic text-sunlight">zero-admin</span> medicine.
          </h2>

          <p className="text-xl md:text-2xl text-sand-100 leading-relaxed max-w-3xl mx-auto text-balance animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
            This is the future of clinical automation. Join us in building Heidi Health's vision of seamless, intelligent
            healthcare with Hailey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#211217] hover:bg-[#211217]/90 text-[#F9F4F1] font-semibold px-8 py-6 text-lg rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Learn more
            </Button>
          </div>

          <div className="pt-12 space-y-4 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
            <p className="text-sand-100 text-sm">Trusted by clinicians worldwide</p>
            <div className="flex justify-center gap-8 opacity-60">
              <div className="text-sand-100 text-sm transition-all duration-300 hover:opacity-100 hover:scale-105">1.5-2.5 hrs saved daily</div>
              <div className="text-sand-100 text-sm">•</div>
              <div className="text-sand-100 text-sm transition-all duration-300 hover:opacity-100 hover:scale-105">200+ specialties</div>
              <div className="text-sand-100 text-sm">•</div>
              <div className="text-sand-100 text-sm transition-all duration-300 hover:opacity-100 hover:scale-105">100% EMR compatible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
