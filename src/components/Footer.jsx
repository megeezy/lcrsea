import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        
        {/* Top half: split content */}
        <div className={styles.topHalf}>
          {/* Left: long disclaimer text */}
          <div className={styles.disclaimerCol}>
            <p className={styles.disclaimerText}>
              enmero (“enmero”) provides cryptographic trust, decentralized identity, zero-trust authorization, and routing infrastructure designed to enable secure interactions between autonomous systems, applications, APIs, and AI agents. enmero is a software platform and does not control, verify, or guarantee the compliance, performance, or behavior of participating autonomous agents or third-party APIs.
            </p>
            <p className={styles.disclaimerText}>
              Any security evaluations, trust scoring, firewall actions, or transaction logging performed by the platform are based on user configurations and behavioral metadata. By accessing or using the enmero trust network, you acknowledge that all services are provided to facilitate operational interoperability and security, and agree to hold enmero harmless for actions taken by connected autonomous agents.
            </p>
          </div>

          {/* Right: navigation links columns */}
          <div className={styles.linksBlock}>
            <div className={styles.linkCol}>
              <h4 className={styles.colHeader}>enmero</h4>
              <ul className={styles.linkList}>
                <li><a href="#login">Sign in</a></li>
                <li><a href="#contact">Contact us</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colHeader}>Legal</h4>
              <ul className={styles.linkList}>
                <li><a href="#privacy">Privacy policy</a></li>
                <li><a href="#cookies">Cookie policy</a></li>
                <li><a href="#security">Responsible disclosure</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <a href="https://enmero.com" target="_blank" rel="noreferrer" className={styles.bottomUrl}>
              https://enmero.com
            </a>
          </div>
          <div className={styles.bottomRight}>
            <span>© {new Date().getFullYear()} enmero. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
