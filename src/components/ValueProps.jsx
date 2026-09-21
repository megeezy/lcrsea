import React from 'react';
import styles from './ValueProps.module.css';

export default function ValueProps() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <h2 className={styles.title}>
            Standardize trust & connectivity <br />
            for autonomous networks
          </h2>
          <p className={styles.subtitle}>
            enmero secures machine-to-machine interactions globally, <br />
            ensuring secure identities and continuous zero-trust authorization.
          </p>
        </div>

        {/* 3-Column Props Grid */}
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.propTitle}>Global Machine Scale</h3>
            <p className={styles.propDesc}>Inspect and route billions of requests at sub-millisecond edge latency.</p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.propTitle}>Verifiable Machine Identity</h3>
            <p className={styles.propDesc}>Verifiable decentralized identity built on secure, cryptographic key exchanges.</p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.propTitle}>Cross-Cloud Routing</h3>
            <p className={styles.propDesc}>Optimized connection mesh across AWS, GCP, Azure, and private edge nodes.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
