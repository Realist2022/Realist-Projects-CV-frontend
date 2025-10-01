import React from 'react';
import Styles from './Footer.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <footer className={Styles.footer} >
        <p>© 2025 Sonny Tapara. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
        <button onClick={scrollToTop} className={Styles.scrollButton} ><FontAwesomeIcon icon={faArrowUp} /></button>
      </footer>
    </div>
  )
}

export default Footer