import { Helmet, HelmetProvider } from 'react-helmet-async';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <HelmetProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <Helmet>
          <title>Hamza Nisar</title>
          <meta name="description" content="Frontend developer who builds products that drive growth. React, TypeScript, SaaS." />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hamza-portfolio-henna-five.vercel.app/" />
          <meta property="og:title" content="Hamza Nisar — Frontend Developer & Product Builder" />
          <meta property="og:description" content="Frontend developer who builds products that drive growth. React, TypeScript, SaaS." />
          <meta property="og:image" content="https://hamza-portfolio-henna-five.vercel.app/og-image.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://hamza-portfolio-henna-five.vercel.app/" />
          <meta property="twitter:title" content="Hamza Nisar — Frontend Developer & Product Builder" />
          <meta property="twitter:description" content="Frontend developer who builds products that drive growth. React, TypeScript, SaaS." />
          <meta property="twitter:image" content="https://hamza-portfolio-henna-five.vercel.app/og-image.png" />
        </Helmet>

        <CursorGlow />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;