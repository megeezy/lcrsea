import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TextHighlight from './components/TextHighlight.jsx';
import StatsTestimonial from './components/StatsTestimonial.jsx';
import AgentJourney from './components/AgentJourney.jsx';
import DashboardSetup from './components/DashboardSetup.jsx';
import ValueProps from './components/ValueProps.jsx';
import TestimonialsFAQ from './components/TestimonialsFAQ.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(window.location.hash === '#login');

  useEffect(() => {
    const handleHashChange = () => {
      setIsLoggedIn(window.location.hash === '#login');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    }
  }, [isLoggedIn]);

  const handleLogout = (e) => {
    if (e) e.preventDefault();
    window.location.hash = '';
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn && <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      <main style={{ height: isLoggedIn ? '100vh' : 'auto', overflow: isLoggedIn ? 'hidden' : 'visible' }}>
        {isLoggedIn ? (
          <DashboardSetup fullscreen={true} onLogout={handleLogout} />
        ) : (
          <>
            <Hero />
            <TextHighlight />
            <StatsTestimonial />
            <AgentJourney />
            <ValueProps />
            <TestimonialsFAQ />
            <CTA />
          </>
        )}
      </main>
      {!isLoggedIn && <Footer />}
    </>
  );
}

export default App;

