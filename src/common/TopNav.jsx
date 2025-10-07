import React, { useState } from 'react';
import styles from './TopNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import EmailModal from '../components/EmailModal';

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const phone = '0211428396';

  // OPEN MENU FUNCTION
  const toggleMenu = () => setIsOpen(v => !v);

  // CLOSE MENU FUNCTION
  const closeMenu = () => {
    setIsOpen(false);
  };

  const openEmail = () => {
    closeMenu();
    setShowEmailModal(true);
  };

  const logoSrc = "images/SonnyTaparaLogo.png";
  const cvHref = "docs/SonnyTapara_CV.pdf"; 

  return (
    <div className={styles.navbar}>

      {/* LOGO */}
      <img src={logoSrc} className={styles.logo} alt="Personal Branding" />

      {/* HAMBURGER/XMARK MENU ICON */}
      <div className={styles["menu-icon"]} onClick={toggleMenu}> 
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>

      {/* TOP NAV CONTENT AND LOGIN */}
      <div className={`${styles.navAndContact} ${isOpen ? styles.open : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a
          href={cvHref}
          onClick={closeMenu}
          download="SonnyTapara_CV.pdf"
        >
          CV
        </a>
        <a href="#about" onClick={closeMenu}>About</a> 
        <a href="https://www.linkedin.com/in/sonny-tapara-245481170/" target="_blank" rel="noreferrer" onClick={closeMenu}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Realist2022" target="_blank" rel="noreferrer" onClick={closeMenu}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.youtube.com/@ProjectManic" target="_blank" rel="noreferrer" onClick={closeMenu}>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        
        {/* CONTACT BUTTON */}
        <button className={styles.contactButton} onClick={openEmail}>Contact Me</button>
      </div>

      {/* Email Modal */}
      <EmailModal isOpen={showEmailModal} onClose={() => setShowEmailModal(false)} phone={phone} />
    </div>
  )
}

export default TopNav;