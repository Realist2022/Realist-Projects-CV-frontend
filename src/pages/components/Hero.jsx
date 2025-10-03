import React, { useEffect, useState, useRef } from "react";
import styles from "./Hero.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTurnDown } from '@fortawesome/free-solid-svg-icons';

// Import searchTerm and handleSearchChange as props
function Hero({ searchTerm, handleSearchChange }) {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isBadge2Hovered, setIsBadge2Hovered] = useState(false);
  const videoRef = useRef(null);
  const [showVideoControls, setShowVideoControls] = useState(false);

  // Handle scroll event and window resize
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Smooth scroll to #mainContent (fallback to cards container by class substring)
  const scrollToMainContent = () => {
    const el =
      document.getElementById("mainContent") ||
      document.querySelector('[class*="cardContainer"]');
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Function to handle form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    scrollToMainContent();
  };

  useEffect(() => {
    // Try to autoplay; if it fails (iOS/Low Power Mode), show controls
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        await v.play();
        setShowVideoControls(false);
      } catch {
        setShowVideoControls(true);
      }
    };
    // Ensure muted + inline for iOS
    v.muted = true;
    v.playsInline = true;
    tryPlay();
  }, []);

  return (
    // HERO CONTAINER
    <div className={styles.heroContainer}>
      {/* HERO BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        src="videos/Hero_video.mp4"
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        controls={showVideoControls}
        // alt is ignored on <video>, keep as comment if needed
      />

      {/* HERO CONTENT */}
      <div className={styles.heroContent}>
        <p className={styles.heroSubTitle}>
          <b>
            <i>Personal Portfolio Website</i>
          </b>
        </p>
        <h1 className={styles.heroTitle}>Sonny Tapara</h1>
        {/* SEARCH INPUT FIELD */}
        <form onSubmit={handleSearchSubmit}>
          <input
            className={styles.heroInput}
            type="text"
            placeholder="Search..."
            // Use the searchTerm prop for the value
            value={searchTerm}
            // Use the handleSearchChange prop for the onChange event
            onChange={handleSearchChange}
          />
          {/* FONT AWESOME SEARCH BUTTON ICON */}
          <button
            type="submit"
            className={styles.FontAwesomeIconButton}
            aria-label="Search"
          >
            <FontAwesomeIcon
              icon={faTurnDown}
              className={styles.FontAwesomeIcon}
            />
          </button>
          {/* SEARCH BUTTON WITH WRITING */}
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>
      </div>

      {/* FULL STACK BADGE ON RIGHT SIDE */}
      <a
        href="https://www.credential.net/c8f3f305-6593-4c34-b92b-75e416436ec3"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="images/Full_Stack_Circle_Badge.png"
          className={styles.fullStackBadge}
          alt="Full Stack Developer Badge"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transform: isMobile
              ? `rotate(${isHovered ? 0 : scrollY * 0.5}deg) scale(${
                  isHovered ? 1.05 : 1
                }) translateY(${isHovered ? "-40px" : "0px"})`
              : `translateY(${isHovered ? "-85%" : "-50%"}) rotate(${
                  isHovered ? 0 : scrollY * 0.5
                }deg) scale(${isHovered ? 1.05 : 1})`,
            transition: "transform 0.3s ease",
          }}
        />
      </a>

      {/* SECOND FULL STACK BADGE BELOW THE FIRST */}
      <a
        href="https://www.credential.net/6df45471-b9c8-44ec-adfe-e82f8b6a1929"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="images/Full_Stack_Circle_Badge2.png"
          className={styles.fullStackBadge2}
          alt="Full Stack Developer Badge 2"
          onMouseEnter={() => setIsBadge2Hovered(true)}
          onMouseLeave={() => setIsBadge2Hovered(false)}
          style={{
            transform: isMobile
              ? `rotate(${isBadge2Hovered ? 0 : scrollY * -0.3}deg) scale(${
                  isBadge2Hovered ? 1.2 : 1
                }) translateX(${isBadge2Hovered ? "-30px" : "0px"})`
              : `translateY(${isBadge2Hovered ? "-30%" : "-50%"}) rotate(${
                  isBadge2Hovered ? 0 : scrollY * -0.3
                }deg) scale(${isBadge2Hovered ? 1.2 : 1}) translateX(${
                  isBadge2Hovered ? "-50px" : "0px"
                })`,
            zIndex: isBadge2Hovered ? 8 : 6, // ensure this badge stays on top
            transition: "transform 0.3s ease, z-index 0.1s ease",
          }}
        />
      </a>
    </div>
  );
}

export default Hero;