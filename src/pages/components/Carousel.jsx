import React, { useEffect, useState } from 'react';
import styles from './MainContent.module.css';

export default function Carousel({ images, altBase = 'carousel image', autoMs = 5000 }) {
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
