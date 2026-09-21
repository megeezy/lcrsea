import React, { useState, useEffect } from 'react';
import styles from './StatsTestimonial.module.css';
import { Search, Cpu, Target, Zap, Shield, Database, PieChart, ChevronDown, Sparkles, Send } from 'lucide-react';
import scenicBg from '../../assets/scenic_landscape_bg.png';

export default function StatsTestimonial() {
  const [activeTab, setActiveTab] = useState('AIS');
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const dialogTexts = {
    AIS: "Establish verifiable cryptographic identities for applications, services, websites, and autonomous systems. AIS enables trusted interactions through decentralized identity, credential verification, and secure authentication.",
    ADS: "Discover trusted systems and services across organizations through a secure, verified directory. ADS enables applications, APIs, and AI systems to locate capabilities, endpoints, and resources without relying on fragmented discovery mechanisms.",
    AZT: "Enforce continuous verification and least-privilege access across every interaction. AZT ensures that systems, applications, and autonomous services only access the resources explicitly permitted by policy.",
    ATL: "Maintain a tamper-resistant record of identities, permissions, transactions, and security events. ATL provides auditability, compliance support, forensic visibility, and operational transparency across distributed environments."
  };

  useEffect(() => {
    setTypedText('');
    setIsTyping(true);

    const fullText = dialogTexts[activeTab] || '';
    let currentIdx = 0;
    
    const interval = setInterval(() => {
      if (currentIdx < fullText.length) {
        setTypedText(fullText.substring(0, currentIdx + 1));
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 15);

    return () => {
      clearInterval(interval);
    };
  }, [activeTab]);

  const renderHighlightedText = (text) => {
    if (!text) return null;
    const highlights = {
      "Agent Discovery Service (ADS)": styles.highlightBlue,
      "Agent Identity Service (AIS)": styles.highlightBlue,
      "Agent Delivery Network (ADN)": styles.highlightBlue,
      "Agent Firewall (AFW)": styles.highlightBlue,
      "Agent Zero Trust (AZT)": styles.highlightBlue,
      "Agent Reputation Manager (ARM)": styles.highlightBlue,
      "Agent Trust Ledger (ATL)": styles.highlightBlue,
      "Agent Gateway (AGW)": styles.highlightBlue,
      "AI Identity & Access Management (AIAM)": styles.highlightBlue,
      "enmero Platform": styles.highlightBlue,
      "enmero": styles.highlightBlue,
      "ADS": styles.highlightPurple,
      "AIS": styles.highlightPurple,
      "ADN": styles.highlightPurple,
      "AFW": styles.highlightPurple,
      "AZT": styles.highlightPurple,
      "ARM": styles.highlightPurple,
      "ATL": styles.highlightPurple,
      "AGW": styles.highlightPurple,
      "AIAM": styles.highlightPurple,
      "decentralized identity": styles.highlightPurple,
      "intelligent routing": styles.highlightGreen,
      "prompt injection": styles.highlightPink,
      "continuous verification": styles.highlightPurple,
      "least-privilege access": styles.highlightGreen,
      "trustworthiness": styles.highlightPurple,
      "tamper-resistant record": styles.highlightPurple,
      "secure entry point": styles.highlightPurple,
      "centralized control plane": styles.highlightPurple,
      "unified trust, security, and delivery layer": styles.highlightPurple
    };

    const keys = Object.keys(highlights);
    const pattern = new RegExp(`(${keys.map(k => k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})`, 'g');
    
    const parts = text.split(pattern);
    return parts.map((part, i) => {
      if (highlights[part]) {
        return <span key={i} className={highlights[part]}>{part}</span>;
      }
      return part;
    });
  };

  const services = [
    {
      id: 'AIS',
      title: 'Agent Identity Service (AIS)',
      desc: 'Establish verifiable cryptographic identities for applications, services, websites, and autonomous systems. AIS enables trusted interactions through decentralized identity, credential verification, and secure authentication.'
    },
    {
      id: 'ADS',
      title: 'Agent Discovery Service (ADS)',
      desc: 'Discover trusted systems and services across organizations through a secure, verified directory. ADS enables applications, APIs, and AI systems to locate capabilities, endpoints, and resources without relying on fragmented discovery mechanisms.'
    },
    {
      id: 'AZT',
      title: 'Agent Zero Trust (AZT)',
      desc: 'Enforce continuous verification and least-privilege access across every interaction. AZT ensures that systems, applications, and autonomous services only access the resources explicitly permitted by policy.'
    },
    {
      id: 'ATL',
      title: 'Agent Trust Ledger (ATL)',
      desc: 'Maintain a tamper-resistant record of identities, permissions, transactions, and security events. ATL provides auditability, compliance support, forensic visibility, and operational transparency across distributed environments.'
    }
  ];

  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section className={styles.section} id="action-demo">
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          
          {/* Left Column: Landscape background + Translucent Create Insight Dialog */}
          <div className={styles.mediaContainer} style={{ backgroundImage: `url(${scenicBg})` }}>
            <div className={styles.dialog}>
              {/* Header */}
              <div className={styles.dialogHeader}>
                <div className={styles.dialogLogoSphere} />
              </div>

              {/* Chat Container */}
              <div className={styles.chatContainer}>
                {/* AI typing response */}
                <div className={`${styles.chatMessage} ${styles.aiMsg}`}>
                  <div className={styles.msgBubble}>
                    {renderHighlightedText(typedText)}
                    {isTyping && <span className={styles.cursor} />}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Title + Description + Services Accordion */}
          <div className={styles.contentColumn}>
            <div className={styles.headerRow}>
              <h2 className={styles.title}>Explore services</h2>
            </div>
            
            <p className={styles.description}>
              Deploy modular infrastructure services to manage decentralized identity, service discovery, zero-trust authorization, intent filtering, and edge routing.
            </p>
            
            <button className={styles.exploreBtn}>Explore Security & Trust Services</button>

            {/* Accordion list */}
            <div className={styles.accordionList}>
              {services.map((service) => {
                const isActive = activeTab === service.id;
                return (
                  <div key={service.id} className={styles.accordionItem}>
                    <button 
                      className={`${styles.accordionHeader} ${isActive ? styles.accordionHeaderActive : ''}`}
                      onClick={() => setActiveTab(service.id)}
                    >
                      <span>{service.title}</span>
                      <ChevronDown size={16} className={`${styles.accordionChevron} ${isActive ? styles.chevronRotate : ''}`} />
                    </button>
                    
                    <div className={`${styles.accordionBody} ${isActive ? styles.bodyOpen : ''}`}>
                      <p className={styles.bodyText}>{service.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
