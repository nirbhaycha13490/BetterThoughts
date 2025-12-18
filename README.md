# BrighterThoughts - Mental Health Awareness Website

A comprehensive mental health awareness website built with Next.js 14 and shadcn/ui, designed for the Business Professionals of America (BPA) Website Design Team competition.

## Features

- **Mental Health Information**: Comprehensive information about common mental health disorders (anxiety, depression, PTSD, bipolar disorder, OCD)
- **Resources & Helplines**: National and local mental health resources, crisis support, and helplines
- **Appointment Scheduler**: Online counseling appointment booking system with calendar and form
- **Community Forums**: Interactive support community with categories and discussion threads
- **Blog**: Informational blog posts about mental health and wellness
- **Testimonials**: Success stories from individuals who've overcome mental health challenges
- **Responsive Design**: Fully responsive design that works on all devices
- **Accessibility**: WCAG compliant with skip links, ARIA labels, and keyboard navigation

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nirb
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
nirb/
├── app/                    # Next.js app router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── disorders/          # Mental health disorders pages
│   ├── resources/          # Resources and helplines
│   ├── appointments/       # Appointment scheduler
│   ├── community/          # Community forums
│   ├── blog/               # Blog posts
│   ├── testimonials/       # Success stories
│   └── about/              # About page
├── components/
│   ├── ui/                 # shadcn components
│   ├── layout/             # Header, Footer
│   ├── features/           # Feature components
│   └── accessibility/      # Accessibility components
├── lib/
│   └── data/               # Mock data files
├── types/                  # TypeScript type definitions
└── public/                 # Static assets
```

## Key Pages

- **Home** (`/`): Hero section, feature cards, statistics, and CTAs
- **Disorders** (`/disorders`): Overview and individual disorder pages
- **Resources** (`/resources`): Searchable helplines and resources
- **Appointments** (`/appointments`): Booking form with calendar
- **Community** (`/community`): Forum categories and threads
- **Blog** (`/blog`): Blog listing and individual posts
- **Testimonials** (`/testimonials`): Success stories with filtering

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Skip to main content link
- Keyboard navigation support
- Focus indicators
- Alt text for images
- WCAG AA color contrast compliance
- Screen reader friendly

## Design System

- **Primary Color**: Calming teal/blue (mental health appropriate)
- **Typography**: Inter font family
- **Components**: shadcn/ui component library
- **Layout**: Card-based, consistent spacing

## Competition Requirements Met

✅ Information about mental health disorders
✅ Local and national helplines
✅ Online counseling appointment scheduler
✅ Interactive support community (forums)
✅ Informational blog posts
✅ Testimonials section
✅ Responsive design
✅ Accessibility features (ADA compliance)
✅ Modern, clean design
✅ Cross-browser compatibility
✅ Standards-based code

## Notes

- This website uses mock data for demonstration purposes
- All features are fully functional with realistic UI
- The appointment scheduler submits mock data
- Forum interactions use mock data
- All content is educational and should not replace professional medical advice

## License

This project was created for the BPA Website Design Team competition.

## Disclaimer

This website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a mental health emergency, please call 988 or your local emergency services immediately.
