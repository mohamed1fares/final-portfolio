import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Education from '@/react-app/components/Education';
import Skills from '@/react-app/components/Skills';
import Experience from '@/react-app/components/Experience';
import Projects from '@/react-app/components/Projects';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
