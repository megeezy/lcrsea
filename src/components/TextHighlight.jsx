import React, { useRef, useState, useEffect } from 'react';
import styles from './TextHighlight.module.css';
import logo from '../../assets/lockersea_logo.png';

export default function TextHighlight() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasPoppedUp, setHasPoppedUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress for the highlighter effect
      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.4;
      
      const totalRange = startTrigger - endTrigger;
      const currentPos = startTrigger - rect.top;
      
      const progress = Math.max(0, Math.min(1, currentPos / totalRange));
      setScrollProgress(progress);

      // Trigger the popup animation when the top of the section enters the bottom 85% of the screen
      if (rect.top < windowHeight * 0.85) {
        setHasPoppedUp(true);
      } else if (rect.top > windowHeight * 0.95) {
        // Reset the popup if the user scrolls all the way back up to the Hero section
        setHasPoppedUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const text = "Unify your fragmented cryptographic protocols with a single trust layer for identity and verification.";
  const words = text.split(" ");
  const highlightStartIndex = 11; // Index where "identity and verification." begins

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Background Calm Waves and Floating Logo Boat */}
      <div className={styles.waveContainer}>
        {/* Wave 1 (Back Layer) */}
        <svg className={`${styles.wave} ${styles.wave1}`} viewBox="0 0 2880 200" preserveAspectRatio="none">
          <path d="M0,90 C360,120 720,60 1080,90 C1440,120 1800,70 2160,90 C2520,110 2880,70 3240,90 L3240,200 L0,200 Z" fill="rgba(59, 130, 246, 0.04)"></path>
        </svg>

        {/* Wave 2 (Middle Layer) */}
        <svg className={`${styles.wave} ${styles.wave2}`} viewBox="0 0 2880 200" preserveAspectRatio="none">
          <path d="M0,110 C300,80 600,130 900,105 C1200,80 1500,130 1800,105 C2100,80 2400,130 2700,105 C3000,80 3300,130 3600,105 L3600,200 L0,200 Z" fill="rgba(59, 130, 246, 0.08)"></path>
        </svg>

        {/* Floating Logo Boat (Automatic Right-to-Left Slide & Loop) */}
        <div className={styles.logoBoat}>
          <img src={logo} alt="enmero logo" className={styles.logoBoatImg} />
          <div className={styles.wake} />
        </div>

        {/* Wave 3 (Front Layer) */}
        <svg className={`${styles.wave} ${styles.wave3}`} viewBox="0 0 2880 200" preserveAspectRatio="none">
          <path d="M0,130 C400,110 800,150 1200,125 C1600,100 2000,150 2400,125 C2800,100 3200,150 3600,125 L3600,200 L0,200 Z" fill="rgba(59, 130, 246, 0.12)"></path>
        </svg>
      </div>

      <div className={`${styles.popupWrapper} ${hasPoppedUp ? styles.poppedUp : ''}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Standardize identity, verification, and trust enforcement across autonomous systems with a{' '}
            <span className={`${styles.highlight} ${scrollProgress > 0.55 ? styles.active : ''}`}>
              <span 
                className={styles.highlightBg} 
                style={{ width: `${scrollProgress * 100}%` }}
              />
              unified infrastructure layer.
            </span>
          </h2>
          
          <p className={styles.description}>
            Consolidate identity, zero-trust policies, and delivery routing across AI agents, APIs, and applications into a single, highly secure control plane.
          </p>        </div>
      </div>
    </section>
  );
}
