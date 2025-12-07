import { Sparkle } from 'lucide-react'

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 md:py-32 bg-gradient-to-br from-[#FCFAF8] via-[#F6ECE4] to-[#FCFAF8] overflow-hidden">
      {/* Animated gradient blobs with morphing */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBF582]/12 blur-3xl animate-[morph_22s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4A90E2]/10 blur-3xl animate-[morph_26s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#2D8659]/8 blur-3xl animate-[morph_24s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
      
      {/* Subtle decorative stars */}
      <div className="absolute top-32 left-[8%] w-2 h-2 text-[#211217]/10 animate-[starTwinkle_5s_ease-in-out_infinite]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-[12%] w-2.5 h-2.5 text-[#211217]/12 animate-[starTwinkle_6s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      
      {/* Floating dots */}
      <div className="absolute top-1/3 right-[15%] w-1.5 h-1.5 bg-[#211217]/10 rounded-full animate-[pulse_5s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-[20%] w-2 h-2 bg-[#211217]/8 rounded-full animate-[pulse_6s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-bark/5 rounded-full">
              <Sparkle className="w-4 h-4 text-bark" />
              <p className="text-sm font-semibold text-bark">The Problem</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bark leading-tight">
              Generic Directories' <span className="italic">ROI</span> "Math" Isn't Mathing.
            </h2>
            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              For patients: You waste hours scrolling through outdated menus and fake reviews, only to find the product you wanted was sold out days ago.
            </p>
            <p className="text-base text-secondary leading-relaxed">
              For dispensaries: You pay high listing fees for anonymous clicks that never convert to loyal customers, while struggling to stand out in a sea of competitors.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-150 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sunlight/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 animate-[pulse_2.5s_ease-in-out_infinite]">
                  <svg className="w-6 h-6 text-bark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bark mb-2">Outdated & Inaccurate Menus</h3>
                  <p className="text-secondary leading-relaxed">Menus show products that sold out days ago</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-150 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sky/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 animate-[pulse_2.5s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}>
                  <svg className="w-6 h-6 text-bark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bark mb-2">No Community Connection</h3>
                  <p className="text-secondary leading-relaxed">I can't ask questions or see real experiences</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-150 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-forest/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 animate-[pulse_2.5s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
                  <svg className="w-6 h-6 text-bark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bark mb-2">Fake & Paid Reviews</h3>
                  <p className="text-secondary leading-relaxed">83% of users don't trust the ratings</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-150 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sky/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 animate-[pulse_2.5s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}>
                  <svg className="w-6 h-6 text-bark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bark mb-2">Zero Personalization</h3>
                  <p className="text-secondary leading-relaxed">It's just scrolling until I give up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
