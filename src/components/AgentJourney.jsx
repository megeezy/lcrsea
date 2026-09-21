import React from 'react';
import styles from './AgentJourney.module.css';
import { Play, ShieldAlert, ArrowUpRight, MessageSquare, Loader, Sparkles, Send } from 'lucide-react';

export default function AgentJourney() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        {/* Section Title */}
        <div className={styles.introBlock}>
          <h2 className={styles.introTitle}>
            How enmero Works
          </h2>
          <p className={styles.introSubtitle}>
            enmero gives every system an identity, helps it discover trusted services, verifies what it's allowed to do, and records every action for security and compliance.
          </p>
        </div>

        {/* Journey Cards Stack */}
        <div className={styles.stack}>
          
          {/* Stage 1: AIS + ADS */}
          <div className={styles.journeyRow}>
            <div className={styles.textSide}>
              <span className={styles.agentTag}>Step 1 & 3: Identity & Discovery (AIS + ADS)</span>
              <h3 className={styles.agentTitle}>Register systems & discover services</h3>
              <ul className={styles.points}>
                <li>
                  <strong>Register Your Systems (AIS)</strong>
                  <span>Assign unique cryptographic identities to connected agents, APIs, CRMs, and applications.</span>
                </li>
                <li>
                  <strong>Discover Trusted Services (ADS)</strong>
                  <span>Locate approved capability endpoints dynamically through a secure, verified directory instead of hardcoding static URLs.</span>
                </li>
                <li>
                  <strong>Secure Discoverability</strong>
                  <span>Ensure only registered, trusted, and verified services are visible and discoverable in the network.</span>
                </li>
              </ul>
            </div>
            <div className={styles.cardSide}>
              <div className={`${styles.card} ${styles.blueCard} grainy`}>
                <div className={`${styles.floatingPill} ${styles.pillVisitor}`}>
                  <div className={styles.visitorAvatar}>
                    <Sparkles size={12} className={styles.sparkleIcon} />
                  </div>
                  <span>AIS Registry:</span>
                </div>
                <div className={`${styles.floatingPill} ${styles.pillCompany}`}>Support Agent DID</div>
                <div className={`${styles.floatingPill} ${styles.pillArr}`}>Find: Order Service</div>
                <div className={`${styles.floatingPill} ${styles.pillEmployees}`}>ADS Resolve: Verified</div>
                <div className={`${styles.floatingPill} ${styles.pillProduct}`}>Identity: active</div>
                <div className={`${styles.floatingPill} ${styles.pillGoal}`}>Status: Connected</div>
              </div>
            </div>
          </div>

          {/* Stage 2: AZT */}
          <div className={`${styles.journeyRow} ${styles.reverseRow}`}>
            <div className={styles.textSide}>
              <span className={styles.agentTag}>Step 2 & 4: Policies & Verification (AZT)</span>
              <h3 className={styles.agentTitle}>Define policies & verify requests</h3>
              <ul className={styles.points}>
                <li>
                  <strong>Define Trust Policies (AZT)</strong>
                  <span>Configure fine-grained permissions (e.g. Support Agent can Read Customer Orders but is blocked from Accessing Payroll).</span>
                </li>
                <li>
                  <strong>Verify Every Request</strong>
                  <span>Check credentials, target services, and active permission scopes dynamically before any request proceeds.</span>
                </li>
                <li>
                  <strong>Fail-Secure Boundaries</strong>
                  <span>Allow approved requests immediately; block unauthorized actions at the gateway layer.</span>
                </li>
              </ul>
            </div>
            <div className={styles.cardSide}>
              <div className={`${styles.card} ${styles.greenCard} grainy`}>
                {/* Loader bar */}
                <div className={`${styles.floatingPill} ${styles.pillLoader}`}>
                  <Loader size={12} className={styles.loaderIcon} />
                  <span>Verifying system request...</span>
                </div>
                
                {/* Chat window mockup */}
                <div className={styles.chatCardMock}>
                  <div className={styles.chatMockLabel}>AZT Engine:</div>
                  <div className={styles.chatMockBubble}>
                    Support Agent &rarr; Read Order #54821 &rarr; ALLOWED
                  </div>
                  <div className={styles.chatMockBubble}>
                    Support Agent &rarr; Access Payroll &rarr; DENIED
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3: ATL */}
          <div className={styles.journeyRow}>
            <div className={styles.textSide}>
              <span className={styles.agentTag}>Step 5: Trust Ledger Audit (ATL)</span>
              <h3 className={styles.agentTitle}>Record and audit everything</h3>
              <ul className={styles.points}>
                <li>
                  <strong>Tamper-Resistant Ledger</strong>
                  <span>Maintain an append-only registry tracking identities, permissions, and interaction histories.</span>
                </li>
                <li>
                  <strong>Forensic Trail</strong>
                  <span>Log every action along with timestamp and output result (e.g., Read Order - Allowed vs. Access Payroll - Denied).</span>
                </li>
                <li>
                  <strong>Compliance Ready</strong>
                  <span>Provide security compliance officers with a cryptographically verifiable trail of system activities.</span>
                </li>
              </ul>
            </div>
            <div className={styles.cardSide}>
              <div className={`${styles.card} ${styles.orangeCard} grainy`}>
                {/* Dialogue bubbles */}
                <div className={styles.chatCardMockOnboarding}>
                  <div className={styles.onboardBubbleUser}>ATL Registry log:</div>
                  <div className={styles.onboardBubbleAgent}>
                    09:42:11 Support Agent | Read Order | ALLOWED
                  </div>
                  <div className={styles.onboardBubbleAgent}>
                    09:43:07 Support Agent | Access Payroll | DENIED
                  </div>
                </div>

                {/* Input mock bar */}
                <div className={styles.onboardInputBar}>
                  <div className={styles.onboardLogo}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3" y="5" width="4" height="2" rx="1"/>
                      <rect x="9" y="5" width="6" height="2" rx="1"/>
                      <rect x="17" y="5" width="4" height="2" rx="1"/>
                      <rect x="3" y="11" width="6" height="2" rx="1"/>
                      <rect x="11" y="11" width="4" height="2" rx="1"/>
                      <rect x="17" y="11" width="4" height="2" rx="1"/>
                    </svg>
                  </div>
                  <span className={styles.onboardPlaceholder}>ATL Hash: 0x8a92fb2c...</span>
                  <div className={styles.onboardSendBtn}>
                    <Send size={10} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
