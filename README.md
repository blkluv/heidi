# Heidi Health - Landing Page

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://v0-heidi-hackathon-landing-page-v1.vercel.app/)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/oImdjw2zzxh)

## Overview

This is the landing page for Heidi Health's revolutionary RPA (Robotic Process Automation) solution that bridges the gap between their AI medical scribe and Electronic Medical Record (EMR) systems. The solution addresses a critical pain point for clinicians: the tedious manual data entry between Heidi's AI-generated clinical notes and their EMR systems.

### The Problem

Clinicians waste precious time on manual data entry:
- **2-5 minutes per patient** spent copying from Heidi to EMR systems
- **Constant tab switching** breaking clinical flow and concentration
- **Higher error risk** from manual reformatting, creating security risks with PHI (Protected Health Information)

### The Solution

Heidi's RPA technology enables seamless integration with any EMR system:
- **No integrations needed** - Works without complex API integrations or lengthy setup processes
- **Runs locally** - All processing happens on the clinician's device for maximum security
- **Easy data transfer** - Effortless copying of information between Heidi and EMR with minimal clicks

### Real Impact

The solution delivers measurable results:
- **80%** time saved per patient
- **95%** accuracy of data transfer
- **70%** reduction in context switching
- **100%** EMR compatibility

### Future Vision

Building toward complete clinical automation:
- AI assistant that learns clinician patterns and workflows
- Predictive actions that anticipate needs before they arise
- "Tab. Tab. Tab." - Review, confirm, and move on

**Trusted by clinicians worldwide:**
- 2M+ consultations/week
- 200+ specialties
- 8M+ hours saved

## Deployment

Your project is live at:

**[https://v0-heidi-hackathon-landing-page-v1.vercel.app/](https://v0-heidi-hackathon-landing-page-v1.vercel.app/)**

## Tech Stack

Built with modern web technologies:

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Custom Design System** - Heidi Health brand colors and typography
  - Lora serif font for headings
  - Inter sans-serif font for body text
  - Custom color palette: bark, sunlight, forest, sky, sand

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Global styles
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero section with tagline
│   ├── problem-section.tsx # Problem statement
│   ├── solution-section.tsx# RPA solution overview
│   ├── how-it-works-section.tsx # Process explanation
│   ├── impact-section.tsx  # Impact metrics with rounded card
│   ├── future-vision-section.tsx # Future roadmap
│   └── cta-section.tsx     # Call-to-action with yellow background
└── public/
    └── heidi-*.svg         # Heidi Health logos and assets
```

## Key Features

- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Performance Optimized** - Next.js optimizations for fast loading
- **Accessible** - Semantic HTML and ARIA labels
- **Brand Consistent** - Matches Heidi Health's design language

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## License

© 2025 Heidi Health. All rights reserved.
