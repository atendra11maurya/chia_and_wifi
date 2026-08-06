import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechNodes } from './components/TechNodes';
import { CareerTimeline } from './components/CareerTimeline';
import { TechnicalExpertise } from './components/TechnicalExpertise';
import { Experience } from './components/Experience';
import { SelectedProjects } from './components/SelectedProjects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'tech-nodes',
        'expertise',
        'career',
        'experience',
        'projects',
        'education',
        'certifications',
        'contact',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#EFF4FE] selection:text-[#0F62FE]">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={scrollToContact}
        activeSection={activeSection}
      />

      {/* Main Page Content */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={scrollToContact}
        />
        <About />
        <TechNodes />
        <TechnicalExpertise />
        <CareerTimeline />
        <Experience />
        <SelectedProjects />
        <Education />
        <Certifications />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
