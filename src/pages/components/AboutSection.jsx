import React, { useEffect, useRef, useState } from 'react';
import styles from './AboutSection.module.css';

// Small wrapper that animates its children into view from left/right
function AnimatedOnScroll({
  children,
  dir = 'left',              // 'left' | 'right' | 'none' (fade-only)
  threshold = 0.2,
  delay = 0,
  useScrollDirection = false,
  flipOnReenter = false
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [dirState, setDirState] = useState(dir);
  const lastYRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const [scrollDir, setScrollDir] = useState('down'); // 'down' | 'up'

  // Observe visibility; re-trigger on exit/entry (no unobserve)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      } else {
        setInView(false);
      }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  // Track scroll direction
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      const y = window.scrollY || 0;
      const prev = lastYRef.current;
      lastYRef.current = y;
      const dirNow = y > prev ? 'down' : y < prev ? 'up' : scrollDir;
      if (dirNow !== scrollDir) {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => setScrollDir(dirNow));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollDir]);

  // Pick direction when entering view
  useEffect(() => {
    if (!inView) return;
    if (useScrollDirection) {
      setDirState(scrollDir === 'down' ? 'left' : 'right');
    } else if (flipOnReenter) {
      setDirState(prev => (prev === 'left' ? 'right' : 'left'));
    } else {
      setDirState(dir);
    }
  }, [inView, useScrollDirection, flipOnReenter, scrollDir, dir]);

  // Fade-only when dirState is 'none'
  const offTransform =
    dirState === 'left' ? 'translateX(-40px)'
    : dirState === 'right' ? 'translateX(40px)'
    : 'none';

  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : offTransform,
    transition: `transform 600ms ease-out ${delay}ms, opacity 600ms ease-out ${delay}ms`,
    willChange: 'transform, opacity',
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        {/* Header */}
        <div className={styles.aboutHeader}>
          <div className={styles.profileSection}>
            <AnimatedOnScroll useScrollDirection>
              <img
                src="images/selfie1.jpg"
                alt="Sonny Tapara"
                className={styles.profileImage}
              />
            </AnimatedOnScroll>
            <AnimatedOnScroll useScrollDirection delay={60}>
              <div className={styles.headerText}>
                <h2 className={styles.aboutTitle}>About Sonny Tapara</h2>
                <p className={styles.aboutSubtitle}>Full-Stack Developer & Software Engineer</p>
              </div>
            </AnimatedOnScroll>
          </div>
        </div>

        {/* Bio */}
        <div className={styles.bioSection}>
          <h3 className={styles.sectionTitle}>My Story</h3>
          <div className={styles.bioContent}>
            <AnimatedOnScroll flipOnReenter>
<p>
            I'm a full-stack developer whose journey began not just with code, but with a deep curiosity
            for solving tangible problems. My background in electronics and systems engineering
            gives me a unique, diagnostic mindset that I now apply to architecting secure, scalable
            software from the ground up.
          </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll flipOnReenter delay={100}>
          <p>
            Through intensive, project-based training at **Mission Ready**, I translated this hands-on
            experience into a professional software development skill set. This foundation was invaluable
            when engineering resilient data pipelines at Foodstuffs and building fully automated systems
            with MicroPython. I thrive on turning complex challenges into clean, efficient, and user-centric applications.
          </p>
            </AnimatedOnScroll>
          </div>
        </div>

        {/* Skills */}
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Technical Expertise</h3>
          <div className={styles.skillsGrid}>
            <AnimatedOnScroll dir="none">
              <div className={styles.skillCategory}>
                <h4 className={styles.skillCategoryTitle}>Frontend</h4>
                <div className={styles.skillsList}>
                  <span className={styles.skillBadge}>React</span>
                  <span className={styles.skillBadge}>JavaScript ES6+</span>
                  <span className={styles.skillBadge}>Bootstrap</span>
                  <span className={styles.skillBadge}>HTML5</span>
                  <span className={styles.skillBadge}>CSS3</span>
                  <span className={styles.skillBadge}>Responsive Design</span>
                </div>
              </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll dir="none" delay={50}>
              <div className={styles.skillCategory}>
                <h4 className={styles.skillCategoryTitle}>Backend</h4>
                <div className={styles.skillsList}>
                  <span className={styles.skillBadge}>Node.js</span>
                  <span className={styles.skillBadge}>Express.js</span>
                  <span className={styles.skillBadge}>Python</span>
                  <span className={styles.skillBadge}>RESTful APIs</span>
                  <span className={styles.skillBadge}>MongoDB</span>
                  <span className={styles.skillBadge}>SQL Server</span>
                </div>
              </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll dir="none" delay={100}>
              <div className={styles.skillCategory}>
                <h4 className={styles.skillCategoryTitle}>Tools & Platforms</h4>
                <div className={styles.skillsList}>
                  <span className={styles.skillBadge}>Git/GitHub</span>
                  <span className={styles.skillBadge}>Azure</span>
                  <span className={styles.skillBadge}>VS Code</span>
                  <span className={styles.skillBadge}>Googl Cloud Platform</span>
                  <span className={styles.skillBadge}>JIRA</span>
                  <span className={styles.skillBadge}>DevOps</span>
                </div>
              </div>
            </AnimatedOnScroll>
          </div>
        </div>

        {/* Values */}
        <div className={styles.valuesSection}>
          <h3 className={styles.sectionTitle}>What Drives Me</h3>
          <div className={styles.valuesGrid}>
            <AnimatedOnScroll dir="none">
              <div className={styles.valueCard}>
                <h4 className={styles.valueTitle}>Innovation</h4>
                <p>I love exploring new technologies and finding creative solutions to complex problems.</p>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll dir="none" delay={50}>
              <div className={styles.valueCard}>
                <h4 className={styles.valueTitle}>Quality</h4>
                <p>Writing clean, maintainable code and following best practices is fundamental to my approach.</p>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll dir="none" delay={100}>
              <div className={styles.valueCard}>
                <h4 className={styles.valueTitle}>Collaboration</h4>
                <p>Great software is built by great teams. I thrive in collaborative environments.</p>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll dir="none" delay={150}>
              <div className={styles.valueCard}>
                <h4 className={styles.valueTitle}>Growth</h4>
                <p>Continuous learning and improvement are essential in the ever-evolving tech landscape.</p>
              </div>
            </AnimatedOnScroll>
          </div>
        </div>

        {/* Contact */}
        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>Let's Connect</h3>
          <AnimatedOnScroll useScrollDirection>
            <p className={styles.contactText}>
              I'm always interested in discussing new opportunities, collaborating on interesting projects,
              or simply connecting with fellow developers.
            </p>
          </AnimatedOnScroll>
          <AnimatedOnScroll useScrollDirection delay={80}>
            <div className={styles.contactButtons}>
              <a href="https://www.linkedin.com/in/sonny-tapara-245481170/"
                 target="_blank"
                 rel="noreferrer"
                 className={styles.contactButton}>
                LinkedIn
              </a>
              <a href="https://github.com/Realist2022"
                 target="_blank"
                 rel="noreferrer"
                 className={styles.contactButton}>
                GitHub
              </a>
              <a href="https://www.youtube.com/@ProjectManic"
                 target="_blank"
                 rel="noreferrer"
                 className={styles.contactButton}>
                YouTube
              </a>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
