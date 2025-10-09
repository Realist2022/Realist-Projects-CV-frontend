import React, { useState, useEffect } from "react";
import styles from "./MainContent.module.css";
import Carousel from "./Carousel";

export default function ProjectCard({ item, selectedFilter, onTagClick, selectedCredentialUrl }) {
  const [activeMedia, setActiveMedia] = useState(() => {
    if (item.iframeControlledByLinks && item.links?.[item.defaultIframeIndex]) {
      const defaultLink = item.links[item.defaultIframeIndex];
      if (defaultLink.url) return { type: 'iframe', src: defaultLink.url };
      if (defaultLink.image) return { type: 'image', src: defaultLink.image };
    }
    return null;
  });

  // This useEffect hook watches for the prop from the Hero component
  useEffect(() => {
    // Only run this logic if a credential URL is passed AND this is the correct card
    if (selectedCredentialUrl && item.iframeControlledByLinks) {
      // Find the specific link object that matches the URL
      const selectedLink = item.links.find(link => (link.url || link.image) === selectedCredentialUrl);
      
      if (selectedLink) {
        // Update the card's internal state to show the correct media
        if (selectedLink.url) {
          setActiveMedia({ type: 'iframe', src: selectedLink.url });
        } else if (selectedLink.image) {
          setActiveMedia({ type: 'image', src: selectedLink.image });
        }
      }
    }
  }, [selectedCredentialUrl, item]); // Re-run when the selected URL or item changes

  const handleLinkClick = (link) => {
    if (link.url) {
      setActiveMedia({ type: 'iframe', src: link.url });
    } else if (link.image) {
      setActiveMedia({ type: 'image', src: link.image });
    }
  };

  const renderMedia = () => {
    if (item.iframeControlledByLinks && activeMedia) {
      if (activeMedia.type === 'iframe') {
        return (
          <iframe
            className={styles.cardIframe}
            src={activeMedia.src}
            title={item.title}
            allowFullScreen
          />
        );
      }
      if (activeMedia.type === 'image') {
        return (
          <img
            className={styles.cardImage}
            src={activeMedia.src}
            alt={item.title}
            loading="lazy"
          />
        );
      }
    }
    if (item.carouselImages && item.carouselImages.length) {
      return <Carousel images={item.carouselImages} altBase={item.title} />;
    }
    if (item.video) {
      return (
        <video
          className={styles.cardImage}
          src={item.video}
          poster={item.poster}
          controls
          playsInline
          preload="metadata"
        />
      );
    }
    if (item.image) {
      return (
        <img
          className={styles.cardImage}
          src={item.image}
          alt={item.title}
          loading="lazy"
        />
      );
    }
    return null;
  };

  return (
    <div className={styles.cardDivs}>
      {renderMedia()}
      <div className={styles.cardTitle}>{item.title}</div>
      <div className={styles.cardContent}>{item.description}</div>
      {item.techStack && (
        <div className={styles.techStack}>
          {item.techStack.map((tech, idx) => (
            <button
              key={idx}
              type="button"
              className={`${styles.techBadge} ${
                selectedFilter === tech ? styles.active : ""
              }`}
              onClick={() => onTagClick(tech)}
              aria-pressed={selectedFilter === tech}
              title={`Filter by ${tech}`}
            >
              {tech}
            </button>
          ))}
        </div>
      )}
      {(item.metrics || item.achievements || item.impact) && (
        <div className={styles.metrics}>
          <div className={styles.metricsTitle}>Key Results:</div>
          {item.metrics && <div>• {item.metrics}</div>}
          {item.achievements &&
            item.achievements.map((achievement, idx) => (
              <div key={idx}>• {achievement}</div>
            ))}
          {item.impact && <div>• {item.impact}</div>}
        </div>
      )}
      {(item.links?.length || item.website) && (
        <div className={styles.linksList}>
          {item.links?.map((link, idx) =>
            item.iframeControlledByLinks ? (
              <button
                key={idx}
                type="button"
                className={styles.linkItem}
                onClick={() => handleLinkClick(link)}
              >
                {link.label}
              </button>
            ) : (
              <a
                key={idx}
                className={styles.linkItem}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            )
          )}
          {!item.links?.length && item.website && (
            <a
              className={styles.linkItem}
              href={item.website}
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          )}
        </div>
      )}
    </div>
  );
}