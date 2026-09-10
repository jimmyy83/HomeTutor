import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import ParentTeacherSplit from './components/ParentTeacherSplit';
import Subjects from './components/Subjects';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-dark text-brand-light selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <TrustBar />
        <HowItWorks />
        <Services />
        <ParentTeacherSplit />
        <Subjects />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
