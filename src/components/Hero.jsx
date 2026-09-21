import React, { useState, useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import { ArrowUp, CornerDownLeft, Sparkles, X } from 'lucide-react';
import videoBg from '../../assets/herosection.mp4';

// 12 Log sentences
const logItems = [
  { title: "Identity enriched", desc: "Cryptographic identity resolved and bound via enmero AIS" },
  { title: "Policy enforcement", desc: "Zero-trust constraints validated and enforced through session-level AZT rules" },
  { title: "Secure handshake", desc: "mTLS channel established with verified endpoint across distributed mesh" },
  { title: "Autonomous routing", desc: "Optimal delivery path computed and executed via enmero ADN edge network" },
  { title: "Reputation verified", desc: "Peer trust score evaluated and synchronized through ARM reputation graph" },
  { title: "Payload inspection", desc: "Semantic firewall analysis completed with no anomaly detected in AFW pipeline" },
  { title: "Edge optimization", desc: "Context cache hit served from nearest ADN node, reducing inference overhead" },
  { title: "Access authorization", desc: "Capability token validated with zero-knowledge proof verification layer" },
  { title: "Session integrity", desc: "Runtime state confirmed and cryptographically anchored in ATL audit ledger" },
  { title: "Cross-cloud delivery", desc: "Execution payload routed across heterogeneous environments with deterministic fallback" },
  { title: "Threat screening", desc: "Prompt injection surface analyzed and neutralized at ingestion layer" },
  { title: "Context hydration", desc: "Semantic memory retrieved and reconstructed from distributed edge embeddings" }
];

export default function Hero() {
  const [inputValue, setInputValue] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'agent', text: 'Hey there! I am the enmero AI Guide. Ask me anything about our trust and delivery infrastructure for autonomous systems.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInputValue('');
    setChatOpen(true);
    setIsTyping(true);

    setTimeout(() => {
      let reply = "enmero acts as a universal trust and delivery network positioned between communicating systems. We provide decentralized identity (AIS), zero-trust security (AZT), intent firewalls (AFW), and edge routing (ADN).";
      
      const lower = userMessage.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('free') || lower.includes('business')) {
        reply = "enmero offers usage-based infrastructure billing based on identity verifications, authorization events, and routing volume. We also offer enterprise subscriptions for private trust domains. Feel free to request developer access below!";
      } else if (lower.includes('how it works') || lower.includes('work') || lower.includes('flow')) {
        reply = "Every request is identified via AIS, verified via AZT, inspected via AFW, evaluated via ARM, optimized/routed via ADN, and logged via ATL before reaching its destination. It runs transparently at the network layer.";
      } else if (lower.includes('sdk') || lower.includes('setup') || lower.includes('code') || lower.includes('integrate')) {
        reply = "Integration takes minutes. Initialize our SDK with your secure AIS credentials, define Zero-Trust policies in the enmero console, and secure outgoing/incoming requests. Check out the 'Get Started' section below for code!";
      }

      setMessages(prev => [...prev, { sender: 'agent', text: reply }]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Render all 12 cards — duplicated for seamless infinite loop
  const renderCards = () => (
    <>
      {logItems.map((log, i) => (
        <div key={`a-${i}`} className={styles.card}>
          <span className={styles.cardTitle}>{log.title}</span>
          <p className={styles.cardDetail}>{log.desc}</p>
        </div>
      ))}
      {logItems.map((log, i) => (
        <div key={`b-${i}`} className={styles.card}>
          <span className={styles.cardTitle}>{log.title}</span>
          <p className={styles.cardDetail}>{log.desc}</p>
        </div>
      ))}
    </>
  );

  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        {/* Left Column: Text Content */}
        <div className={styles.leftCol}>
          <h1 className={styles.title}>
            The infrastructure behind{' '}
            <span className={styles.highlight}>
              <span className={styles.highlightBg} />
              autonomous systems
            </span>
          </h1>
          <p className={styles.subtitle}>
            A secure foundation for how intelligent software connects, verifies identity, and communicates across organizations, clouds, and environments.
          </p>
          <div className={styles.descWrapper}>
            <div className={styles.descAccent} />
            <p className={styles.desc}>
              enmero provides the identity, security, and delivery layer for the next generation of the internet.
            </p>
          </div>
          <div className={styles.ctaWrapper}>
            <a href="#request-access" className={styles.primaryBtn}>Request Access</a>
            <a href="#how-it-works" className={styles.secondaryBtn}>See How It Works</a>
          </div>
        </div>

        {/* Right Column: Video Block & Scrolling Log Ticker */}
        <div className={styles.rightCol}>
          <div className={styles.videoBlock}>
            <video autoPlay loop muted playsInline className={styles.videoBg}>
              <source src={videoBg} type="video/mp4" />
            </video>
            <div className={styles.videoOverlay} />
          </div>

          {/* Vertical Scrolling Ticker */}
          <div className={styles.tickerViewport}>
            <div className={styles.tickerTrack}>
              {renderCards()}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Interactive Chat Panel */}
      {chatOpen && (
        <div className={styles.chatPanel}>
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderLeft}>
              <Sparkles size={16} className={styles.sparkleIcon} />
              <span>enmero AI Guide</span>
            </div>
            <button className={styles.closeChatButton} onClick={() => setChatOpen(false)}>
              <X size={16} />
            </button>
          </div>
          
          <div className={styles.chatBody}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.chatMessage} ${msg.sender === 'user' ? styles.userMsg : styles.agentMsg}`}>
                <div className={styles.msgBubble}>{msg.text}</div>
              </div>
            ))}
            {isTyping && (
              <div className={`${styles.chatMessage} ${styles.agentMsg}`}>
                <div className={`${styles.msgBubble} ${styles.typingIndicator}`}>
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className={styles.chatPanelFooter}>
            <input 
              type="text" 
              placeholder="Ask a follow up..." 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)}
              className={styles.panelInput}
            />
            <button type="submit" className={styles.panelSendButton}>
              <CornerDownLeft size={14} />
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
