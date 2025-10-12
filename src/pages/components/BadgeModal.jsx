import React from "react";
import styles from "./BadgeModal.module.css";

function BadgeModal({ isOpen, onClose, badgeImage, badgeTitle, credentialLink }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleViewCredential = () => {
    window.open(credentialLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.modalHeader}>
          <h2>{badgeTitle}</h2>
        </div>
        <div className={styles.modalBody}>
          <img 
            src={badgeImage} 
            alt={badgeTitle}
            className={styles.badgeImage}
          />
          <div className={styles.modalActions}>
            <button 
              className={styles.credentialButton} 
              onClick={handleViewCredential}
            >
              View Official Credential
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeModal;