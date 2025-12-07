export function HowItWorksSection() {
    const steps = [
        {
            number: "01",
            title: "Buy It",
            description: "Every purchase earns you points on our live leaderboard. Compete to become the top-rated connoisseur in your city and unlock exclusive rewards.",
        },
        {
            number: "02",
            title: "ReelView It",
            description: "Every digital product in your dispensary is mapped to a What3Words 3-word address, making it easy to locate and review specific items.",
        },
        {
            number: "03",
            title: "Upvote It",
            description: "Upvote the best Reelviews to help others discover top-rated products. The more upvotes your reviews get, the higher you climb on the leaderboard!",
        },
    ]

   const techStack = [
    {
        name: "AI",
        description: "Automation",
        icon: "🤖", // Robot face emoji for AI/Automation
    },
    {
        name: "Legitscript",
        description: "Run Ads",
        icon: "✅", // Green check mark for compliance/legitimacy
    },
    {
        name: "Notifications",
        description: "Instant Alerts",
        icon: "🔔", // Bell emoji for notifications/alerts
    },
    {
        name: "Reviews",
        description: "TikTok AR",
        icon: "📱", // Mobile phone for social/video reviews
    },
    {
        name: "POS",
        description: "Blockchain",
        icon: "💳", // Credit card for POS/payments
    },
    {
        name: "Map",
        description: "Video",
        icon: "🗺️", // World map emoji
    },
    {
        name: "Analytics",
        description: "Monthly",
        icon: "📊", // Bar chart for analytics
    },
    {
        name: "Content",
        description: "AI Generator",
        icon: "✍️", // Writing hand for content creation
    },
    {
        name: "PPC",
        description: "Ad Campaigns",
        icon: "🎯", // Bullseye/target for PPC ads
    },
    {
        name: "Hosting",
        description: "Website",
        icon: "🌐", // Globe for web hosting
    },
        {
        name: "Affiliates",
        description: "Rewards",
        icon: "🤝", 
    },
        {
        name: "Challenges",
        description: "Social",
        icon: "🏆", 
    },
]

    return (
        <section id="how-it-works" className="relative pt-32 pb-36 md:pb-40 bg-gradient-to-br from-[#FCFAF8] via-[#F6ECE4] to-[#FCFAF8] overflow-hidden">
            {/* Animated gradient blobs with more color */}
            <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#FBF582]/12 rounded-full blur-3xl animate-[gradientShift_26s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#4A90E2]/10 rounded-full blur-3xl animate-[gradientShift_30s_ease-in-out_infinite]" style={{ animationDelay: '8s' }} />
            <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-[#2D8659]/8 rounded-full blur-3xl animate-[gradientShift_24s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />
            
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bark leading-tight">
                        ReelView Challenge
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Turn customers into your best marketers: Our gamified challenge rewards authentic 11-second video reviews that drive more sales than any ad.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-20 pb-28">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                            <div className="bg-card border rounded-lg p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
                                <div className="text-6xl font-bold text-primary/20 mb-4 transition-all duration-300 group-hover:text-primary/30 group-hover:scale-110 animate-[scaleIn_1s_ease-out_forwards]" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                                    {step.number}
                                </div>
                                <h3 className="font-serif text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
                                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-1 animate-[gentleFloat_4s_ease-in-out_infinite]" style={{ animationDelay: `${index * 0.5}s` }}>
                                    <svg
                                        className="w-8 h-8 text-primary/30 transition-colors duration-300 group-hover:text-primary/50"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Video Demo */}
                <div className="mb-24 animate-[fadeInUp_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
                    <div className="bg-card border rounded-xl overflow-hidden transition-all hover:shadow-lg hover:border-primary/20 hover:scale-[1.02]">
                        <div className="aspect-video relative bg-black rounded-xl overflow-hidden">
                            <iframe
                                key="loom-demo-video"
                                src="https://www.loom.com/embed/e3c40d05622b4e3e9d37e1d9eb585157"
                                frameBorder="0"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                                title="Hailey Demo Video"
                            />
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div>
                    <div className="text-center mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-sunlight/20 rounded-full text-sm font-semibold text-bark">
                            ✓ Built with the best-in-class technology
                        </span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bark leading-tight text-center pt-8">
                        Modern Marketing
                    </h2>
                    <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                        We solved 99% of dispensary marketing challenges with the latest modern technologies.
                    </p>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm">
                        Automate your marketing, reviews, hiring, and customer engagement with a one stop shop solution.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center group cursor-pointer"
                            >
                                <div className="mb-3 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                                    {tech.icon}
                                </div>
                                <h4 className="font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">{tech.name}</h4>
                                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                                    {tech.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

