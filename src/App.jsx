import React from 'react';
import Header from './components/layout/Header/Header';
import Hero from './components/sections/Hero/Hero';
import Experience from './components/sections/Experience/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/sections/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;