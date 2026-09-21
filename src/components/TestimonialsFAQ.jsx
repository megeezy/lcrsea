import React, { useState } from 'react';
import styles from './TestimonialsFAQ.module.css';
import { ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';

const testimonials = [
  {
    quote: "Securing machine-to-machine interactions at scale requires absolute certainty of identity and policies. enmero AIS and AZT allowed us to authenticate all autonomous partner agents with 100% cryptographic confidence.",
    author: "Arthur Zargaryan",
    title: "VP of Infrastructure at Parcel Tracker",
    avatarColor: "#e0f2fe"
  },
  {
    quote: "With enmero, we filtered unauthorized prompt execution attempts and data exfiltrations at the edge. The Agent Firewall (AFW) reduced our API threat surface to zero within days of deployment.",
    author: "Jane Doe",
    title: "VP of Engineering at Darim",
    avatarColor: "#fef3c7"
  },
  {
    quote: "enmero ADN accelerated our cross-cloud agent coordination networks. Edge semantic caching and context hydration reduced token consumption by 40% and minimized routing latencies.",
    author: "Mike Smith",
    title: "Co-founder of Aikido",
    avatarColor: "#d1fae5"
  }
];

const faqs = [
  {
    q: "What is the Agent Identity Service (AIS)?",
    a: "AIS assigns decentralized, verifiable cryptographic identities to application nodes, services, and AI agents. Utilizing secure public-key cryptography, it creates a globally trusted verification mesh across distinct corporate domains."
  },
  {
    q: "How does Agent Zero Trust (AZT) work?",
    a: "AZT governs interactions using granular capability tokens instead of static API keys. Access is continuously authorized and checked against context criteria including transaction budgets, query scopes, and active time-to-live restrictions."
  },
  {
    q: "What makes the Agent Firewall (AFW) unique?",
    a: "Traditional firewalls inspect network packets; AFW inspects natural language intent. It runs semantic parsing on LLM query payloads to block prompt injection attacks, context tampering, and unauthorized data exfiltration attempts before execution."
  },
  {
    q: "How does the Agent Delivery Network (ADN) reduce costs?",
    a: "ADN accelerates agent executions by caching semantic prompt completions and hydrating context datasets closer to agent runners. This eliminates redundant model processing, speeding up machine-to-machine loops and cutting inference costs."
  },
  {
    q: "Can enmero integrate with existing cloud frameworks?",
    a: "Yes. enmero is completely runtime-agnostic and runs across AWS, Google Cloud, Microsoft Azure, private serverless edge infrastructures, and local environments using lightweight developer SDKs or proxy integrations."
  },
  {
    q: "What purpose does the Agent Trust Ledger (ATL) serve?",
    a: "ATL is an append-only, tamper-proof record of all critical machine interactions. It secures cryptographic proofs of execution, providing enterprises with comprehensive compliance reporting, forensic auditable trails, and non-repudiation."
  }
];

export default function TestimonialsFAQ() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const toggleFaq = (index) => {
    setExpandedFaq(prev => (prev === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        
        {/* Testimonials Block */}
        <div className={styles.testimonialContainer}>
          <span className={styles.sublabel}>What our customers say about us</span>
          
          <div className={styles.carouselWrapper}>
            <div className={styles.testimonialContent}>
              <blockquote className={styles.quoteText}>
                “{testimonials[currentSlide].quote}”
              </blockquote>
              
              <div className={styles.authorSection}>
                <div className={styles.authorLeft}>
                  {/* Custom SVG Avatar */}
                  <div className={styles.avatar} style={{ backgroundColor: testimonials[currentSlide].avatarColor }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24" fill="transparent"/>
                      <path d="M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22ZM24 25C19.0294 25 15 29.0294 15 34V36H33V34C33 29.0294 28.9706 25 24 25Z" fill="#4b5563"/>
                    </svg>
                  </div>
                  <div className={styles.authorDetails}>
                    <div className={styles.authorName}>{testimonials[currentSlide].author}</div>
                    <div className={styles.authorTitle}>{testimonials[currentSlide].title}</div>
                  </div>
                </div>

                <div className={styles.carouselNav}>
                  <button className={styles.navBtn} onClick={handlePrevSlide} aria-label="Previous quote">
                    <ChevronLeft size={20} />
                  </button>
                  <button className={styles.navBtn} onClick={handleNextSlide} aria-label="Next quote">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <hr className={styles.divider} />

        {/* FAQs Block */}
        <div className={styles.faqSection}>
          <h3 className={styles.faqHeader}>Frequently Asked Questions</h3>
          
          <div className={styles.accordionList}>
            {faqs.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div key={index} className={styles.accordionItem}>
                  <button className={styles.accordionQuestion} onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    <span className={styles.iconWrapper}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div className={`${styles.accordionAnswer} ${isOpen ? styles.answerOpen : ''}`}>
                    <div className={styles.answerInner}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
