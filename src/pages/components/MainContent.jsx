import React, { useEffect, useState, useMemo } from "react";
import styles from './MainContent.module.css';
import data from '../../data.jsx';
import TechScrollBar from './TechScrollBar';
import ProjectCard from './ProjectCard';

function MainContent({ searchTerm }) {
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

  // Build tech filters
  const allTechs = useMemo(() => {
    const set = new Set();
    (data.cardData || []).forEach(card => (card.techStack || []).forEach(t => set.add(t)));
    return set;
  }, []);
  const filters = useMemo(() => Array.from(allTechs).sort((a, b) => a.localeCompare(b)), [allTechs]);

  const [selectedFilter, setSelectedFilter] = useState('');

  const filteredCards = useMemo(() => {
    return (data.cardData || []).filter(card => {
      const matchesTech = selectedFilter ? (card.techStack || []).includes(selectedFilter) : true;
      const matchesSearch = searchTerm ? (`${card.title} ${card.description}`.toLowerCase().includes(searchTerm.toLowerCase())) : true;
      return matchesTech && matchesSearch;
    });
  }, [selectedFilter, searchTerm]);

  const onTagClick = (tech) => setSelectedFilter(prev => (prev === tech ? '' : tech));

  return (
    <>
      <span
        className={styles.globalCursorGlow}
        style={{ opacity: globalGlow.visible ? 1 : 0, left: `${globalGlow.x}px`, top: `${globalGlow.y}px` }}
      />
      <div
        id="mainContent"
        className={styles.mainContentSection}
        onMouseMove={handleGlowMove}
        onMouseLeave={handleGlowLeave}
      >
        <span
          className={styles.cursorGlow}
          style={{ opacity: cursorGlow.visible ? 1 : 0, left: `${cursorGlow.x}px`, top: `${cursorGlow.y}px` }}
        />
        <h2 className={styles.mainContentTitle}>Featured Projects & Experience</h2>

        {/* Tech Scroll Bar (always stacked under title) */}
        <TechScrollBar
          filters={filters}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />

        {/* Cards grid stays the same */}
        <div className={styles.cardContainer}>
          {filteredCards.map((item) => (
            <ProjectCard
              key={item.id}
              item={item}
              selectedFilter={selectedFilter}
              onTagClick={onTagClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainContent;