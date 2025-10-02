import React, { useState } from 'react';
import styles from './TopNav.module.css';
import logo from '../../public/images/SonnyTaparaLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'; // added faYoutube

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  // OPEN MENU FUNCTION
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  // CLOSE MENU FUNCTION
  const closeMenu = () => {
    setIsOpen(false);
  }


  return (
    <div className={styles.navbar}>

      {/* LOGO */}
      <img src={logo} className={styles.logo} alt="Company Logo" />

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
        <a href="https://1drv.ms/w/c/80bee8cbb66edcbc/EbNwh_O5UlFFtaY5HmHSqOkBd_VnLucXpqFuMjzGZxgdrg?e=AgzRAq" onClick={closeMenu}>CV</a>
        <a href="#about" onClick={closeMenu}>Links</a> 
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
        <button className={styles.contactButton}>Contact Me</button>
      </div>
    </div>
  )
}

export default TopNav;