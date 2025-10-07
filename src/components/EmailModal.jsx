import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './EmailModal.module.css';

function EmailModal({ isOpen, onClose, phone = '0211428396' }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const formatPhone = (p) => (p || '').replace(/(\d{3})(\d{3})(\d{3,})/, '$1 $2 $3');

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* no-op */
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // You can integrate with a real email service here
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.modalTitle}>Contact Me</h2>
        
        {/* Phone: visually appealing, compact row */}
        {phone && (
          <div
            className={styles.phoneRow}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(255, 40, 0, 0.06)',
              border: '1px solid rgba(255, 40, 0, 0.25)',
              borderRadius: 10,
              padding: '10px 12px',
              margin: '8px 0 16px 0',
            }}
          >
            <div
              className={styles.phoneIcon}
              aria-hidden="true"
              style={{
                width: 34,
                height: 34,
                minWidth: 34,
                minHeight: 34,
                borderRadius: 8,
                display: 'grid',
                placeItems: 'center',
                background: 'rgb(255, 40, 0)',
                color: '#fff',
                boxShadow: '0 2px 8px rgba(255, 40, 0, 0.25)',
              }}
              title="Phone"
            >
              <FontAwesomeIcon icon={faPhone} />
            </div>

            <a
              href={`tel:${phone}`}
              className={styles.phoneNumber}
              style={{
                color: '#222',
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '0.3px',
                flex: 1,
              }}
              title="Tap to call"
            >
              {formatPhone(phone)}
            </a>

            <button
              type="button"
              onClick={copyPhone}
              className={styles.copyBtn}
              style={{
                background: 'transparent',
                border: '1px solid rgba(0,0,0,0.15)',
                borderRadius: 8,
                padding: '6px 10px',
                fontWeight: 600,
                color: '#333',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'transform 0.1s ease',
              }}
              title="Copy number"
            >
              <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        )}

        {sent ? (
          <div className={styles.sentMessage}>Thank you! Your message has been sent.</div>
        ) : (
          <form className={styles.emailForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              className={styles.input}
            />
            <textarea
              placeholder="Your message"
              value={message}
              required
              onChange={e => setMessage(e.target.value)}
              className={styles.textarea}
              rows={5}
            />
            <button type="submit" className={styles.sendButton}>Send</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default EmailModal;
