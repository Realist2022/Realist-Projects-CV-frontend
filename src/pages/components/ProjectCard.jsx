import React from "react";
import styles from "./MainContent.module.css";
import SnakeGame from "./SnakeGame";
import Carousel from "./Carousel";

export default function ProjectCard({ item, selectedFilter, onTagClick }) {
  const media = (() => {
    if (item.component === "snake") {
      return (
        <div className={styles.cardComponentWrapper}>
          <SnakeGame />
        </div>
      );
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
    if (item.iframe) {
      return (
        <iframe
          className={styles.cardIframe}
          src={item.iframe}
          title={item.title}
          allowFullScreen
        />
      );
    }
    return null;
  })();

  return (
    <div className={styles.cardDivs}>
      {media}
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
          {item.links?.map((link, idx) => (
            <a
              key={idx}
              className={styles.linkItem}
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
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
