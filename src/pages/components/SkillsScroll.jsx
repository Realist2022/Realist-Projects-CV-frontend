import React, { useRef, useEffect, useState } from "react";
import styles from "./SkillsScroll.module.css";

const SkillsScroll = () => {
    const scrollRef = useRef(null);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const skills = [
        "JavaScript", "React", "Node.js", "Python", "HTML", "CSS", 
        "MongoDB", "Express.js", "Git", "SQL", "AWS",
        "Docker", 
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!isDragging) {
                const scrollY = window.scrollY || window.pageYOffset;
                setScrollOffset(scrollY * 0.3); // Reduced scroll speed
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isDragging]);

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollOffset);
        scrollRef.current.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        scrollRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        setScrollOffset(scrollLeft - walk);
    };

    // Touch handlers for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollOffset);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        setScrollOffset(scrollLeft - walk);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className={styles.skillsContainer}>
            <div className={styles.skillsContent}>
                <div className={styles.skillsTitle}>
                    <h2>Tech Stack</h2>
                </div>
                <div 
                    ref={scrollRef}
                    className={styles.scrollContainer}
                    style={{
                        transform: `translateX(-${scrollOffset}px)`
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Duplicate skills array to create seamless infinite scroll */}
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div key={index} className={styles.skillItem}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsScroll;