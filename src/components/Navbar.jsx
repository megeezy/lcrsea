import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../../assets/lockersea_logo.png';

export default function Navbar({ isLoggedIn, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logoSection}>
            <img src={logo} alt="enmero logo" className={styles.logoImage} />
            <span className={styles.logoText}>enmero</span>
          </div>

          {/* Desktop Left Menu Links */}
          <div className={styles.menuDesktopLeft}>
            <a href="#products" className={styles.navLink}>Products</a>
            <div 
              className={styles.navItemContainer}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className={styles.navLink}>
                Resources <ChevronDown size={14} className={`${styles.chevron} ${showDropdown ? styles.rotate : ''}`} />
              </button>
              {showDropdown && (
                <div className={styles.dropdown}>
                  <a href="#blog" className={styles.dropdownLink}>Blog</a>
                  <a href="#docs" className={styles.dropdownLink}>Documentation</a>
                  <a href="#customers" className={styles.dropdownLink}>Customers</a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.menuDesktopRight}>
          {isLoggedIn ? (
            <a href="#" onClick={onLogout} className={styles.seeDemoButton}>Exit Console</a>
          ) : (
            <>
              <a href="#pricing" className={styles.navLink}>Pricing</a>
              <a href="#login" className={styles.navLink}>Login</a>
              <a href="#request-access" className={styles.seeDemoButton}>Request Access</a>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className={styles.menuMobile}>
          <a href="#products" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Products</a>
          <div className={styles.mobileLink} onClick={() => setShowDropdown(!showDropdown)}>
            Resources <ChevronDown size={14} />
          </div>
          {showDropdown && (
            <div className={styles.mobileSubMenu}>
              <a href="#blog" onClick={() => setIsOpen(false)}>Blog</a>
              <a href="#docs" onClick={() => setIsOpen(false)}>Documentation</a>
              <a href="#customers" onClick={() => setIsOpen(false)}>Customers</a>
            </div>
          )}
          {isLoggedIn ? (
            <a href="#" className={styles.mobileLink} onClick={(e) => { setIsOpen(false); onLogout(e); }}>Exit Console</a>
          ) : (
            <>
              <a href="#pricing" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Pricing</a>
              <a href="#login" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Login</a>
              <a href="#request-access" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Request Access</a>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
