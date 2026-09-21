import React from 'react';
import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <a href="#announcement" className={styles.bannerLink}>
        We raised €3M to grow your revenue on autopilot. <span className={styles.underline}>Read the announcement</span>
      </a>
    </div>
  );
}
