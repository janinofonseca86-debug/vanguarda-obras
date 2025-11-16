
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResponsiveTester from './components/ResponsiveTester';

export interface TesterConfig {
  enabled: boolean;
  width: string;
}

const App: React.FC = () => {
  const [testerConfig, setTesterConfig] = useState<TesterConfig>({
    enabled: false,
    width: '100%',
  });

  const appContent = (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );

  if (!testerConfig.enabled) {
    return (
      <>
        {appContent}
        <ResponsiveTester testerConfig={testerConfig} setTesterConfig={setTesterConfig} />
      </>
    );
  }

  return (
    <div className="bg-gray-700 min-h-screen w-full flex items-center justify-center p-4 sm:p-8" aria-live="polite">
      <div
        style={{ width: testerConfig.width }}
        className="h-[calc(100vh-4rem)] sm:h-[calc(100vh-4rem)] relative mx-auto overflow-y-auto overflow-x-hidden border-8 sm:border-[12px] border-slate-800 rounded-2xl sm:rounded-[24px] shadow-2xl transition-all duration-300 ease-in-out bg-white"
        role="presentation"
        aria-label={`Simulated device view with width ${testerConfig.width}`}
      >
        {appContent}
      </div>
      <ResponsiveTester testerConfig={testerConfig} setTesterConfig={setTesterConfig} />
    </div>
  );
};

export default App;
