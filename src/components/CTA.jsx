import React, { useState } from 'react';
import styles from './CTA.module.css';
import { supabase } from '../supabaseClient';

export default function CTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }

    setLoading(true);
    setError(null);

    const isConfigured = 
      import.meta.env.VITE_SUPABASE_URL && 
      import.meta.env.VITE_SUPABASE_URL !== 'https://your-project-id.supabase.co' &&
      import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!isConfigured) {
      // Simulate local success fallback
      console.warn("Supabase credentials not configured. Simulating local waitlist signup for:", { name, email, company });
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1000);
      return;
    }

    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([{ email, name, company }]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError('This email is already registered on the waitlist.');
        } else {
          setError(supabaseError.message);
        }
      } else {
        setSuccess(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} id="request-access">
      <div className={`${styles.container} container`}>
        <h2 className={styles.title}>Secure the future of <br />autonomous digital interactions</h2>
        
        {success ? (
          <div className={styles.successBox}>
            <div className={styles.successTitle}>You're on the list!</div>
            <div className={styles.successDesc}>
              Thank you for registering, <strong>{name || email}</strong>. We've added <strong>{email}</strong> to our developer preview waitlist and will reach out soon.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputRow}>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className={styles.input}
                disabled={loading}
              />
              <input 
                type="text" 
                placeholder="Company / Project" 
                value={company} 
                onChange={(e) => setCompany(e.target.value)} 
                className={styles.input}
                disabled={loading}
              />
            </div>
            <input 
              type="email" 
              placeholder="Work Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={styles.input}
              required
              disabled={loading}
            />
            {error && <div className={styles.errorBox}>{error}</div>}
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Registering...' : 'Request Developer Access'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

