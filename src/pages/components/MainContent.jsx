import React, { useEffect, useState } from "react";
import styles from './MainContent.module.css'; 
import SnakeGame from './SnakeGame';

// Minimal carousel for a card's image array
function Carousel({ images, altBase = 'carousel image', autoMs = 5000 }) {
  const [idx, setIdx] = useState(0);
  const total = images?.length ?? 0;

  useEffect(() => {
    if (total <= 1) return;
    const t = setInterval(() => setIdx(i => (i + 1) % total), autoMs);
    return () => clearInterval(t);
  }, [total, autoMs]);

  if (!total) return null;
  const goPrev = (e) => { e.stopPropagation(); setIdx(i => (i - 1 + total) % total); };
  const goNext = (e) => { e.stopPropagation(); setIdx(i => (i + 1) % total); };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        <img
          className={styles.carouselImg}
          src={images[idx]}
          alt={`${altBase} ${idx + 1} of ${total}`}
          loading="lazy"
        />
      </div>
      {total > 1 && (
        <div className={styles.carouselNav} aria-hidden="false">
          <button className={styles.carouselArrow} onClick={goPrev} aria-label="Previous image">‹</button>
          <button className={styles.carouselArrow} onClick={goNext} aria-label="Next image">›</button>
        </div>
      )}
    </div>
  );
}

function MainContent({ cardData, searchTerm }) {
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0, visible: false });
  const [globalGlow, setGlobalGlow] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    let frame;
    const handleMove = (event) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setGlobalGlow({ x: event.clientX, y: event.clientY, visible: true });
      });
    };
    const handleLeave = () => {
      setGlobalGlow((prev) => ({ ...prev, visible: false }));
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const handleGlowMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setCursorGlow({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      visible: true,
    });
  };

  const handleGlowLeave = () => {
    setCursorGlow((prev) => ({ ...prev, visible: false }));
  };

  // FILTER DATA BASED ON SEARCH TERM
  const filteredData = cardData.filter(item =>
    // convert all incoming search terms to lowercase and check if input matches title 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  // HANDLE VIDEO CLICK TO PLAY/PAUSE
  const handleVideoClick = (event) => {
    const video = event.target;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // HANDLE DOUBLE CLICK FOR FULLSCREEN
  const handleVideoDoubleClick = (event) => {
    const video = event.target;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { 
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { 
      video.msRequestFullscreen();
    }
  };

  return (
    <>
      <span
        className={styles.globalCursorGlow}
        style={{
          opacity: globalGlow.visible ? 1 : 0,
          left: `${globalGlow.x}px`,
          top: `${globalGlow.y}px`,
        }}
      />
      <div
        id="mainContent"
        className={styles.cardContainer}
        onMouseMove={handleGlowMove}
        onMouseLeave={handleGlowLeave}
      >
        <span
          className={styles.cursorGlow}
          style={{
            opacity: cursorGlow.visible ? 1 : 0,
            left: `${cursorGlow.x}px`,
            top: `${cursorGlow.y}px`,
          }}
        />
        {/* Map over the filteredData instead of the original data */}
        {filteredData.map((item) => {
          const links = item.links ?? (item.website ? [{ label: "Visit website", url: item.website }] : []);
          const media = (() => {
            // 1) Custom component (snake etc.)
            if (item.component === 'snake') {
              return (
                <div className={styles.cardComponentWrapper}>
                  <SnakeGame />
                </div>
              );
            }
            // 2) Carousel if images array provided
            if (item.carouselImages && item.carouselImages.length) {
              return <Carousel images={item.carouselImages} altBase={item.title} />;
            }
            // 3) Video
            if (item.video) {
              return (
                <video
                  className={styles.cardImage}
                  src={item.video}
                  poster={item.poster /* shows first if provided */}
                  controls
                  playsInline
                  preload="metadata"
                />
              );
            }
            // 4) Single image
            if (item.image) {
              return <img className={styles.cardImage} src={item.image} alt={item.title} loading="lazy" />;
            }
            // 5) Iframe
            if (item.iframe) {
              return <iframe className={styles.cardIframe} src={item.iframe} title={item.title} allowFullScreen />;
            }
            return null;
          })();

          return (
            <div key={item.id} className={styles.cardDivs}>
              {media}
              <h1 className={styles.cardTitle}>{item.title}</h1>
              <p className={styles.cardContent}>{item.description}</p>
              
              {/* Website Link Buttons */}
              {links.map((link, index) => (
                <a
                  key={`${item.id}-link-${index}`}
                  href={link.url}
                  className={styles.websiteLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          );
        })}

      </div>
    </>
  );
}

export default MainContent;