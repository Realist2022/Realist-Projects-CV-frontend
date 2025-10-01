import React from "react";
import styles from './MainContent.module.css'; 


// Props passed down from home page
function MainContent({ cardData, searchTerm }) {

  // Filter the cardData based on the searchTerm
  const filteredData = cardData.filter(item =>
    // convert all incoming search terms to lowercase and check if input matches title 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    // item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle video click
  const handleVideoClick = (event) => {
    const video = event.target;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Function to handle video double-click for fullscreen
  const handleVideoDoubleClick = (event) => {
    const video = event.target;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
      video.msRequestFullscreen();
    }
  };

  return (
    <div className={styles.cardContainer}>
      {/* Map over the filteredData instead of the original data */}
      {filteredData.map((item) => (
        <div key={item.id} className={styles.cardDivs}>
          {/* MODIFICATION: Conditional Rendering
            - If item.iframe exists, it renders an <iframe> tag.
            - If item.video exists, it renders a <video> tag.
            - Otherwise, it falls back to the <img> tag.
          */}
          {item.iframe ? (
            <iframe
              src={item.iframe}
              className={styles.cardIframe}
              frameBorder="0"
              allowFullScreen
              allow="fullscreen"
              scrolling="no"
              title={item.title}
            ></iframe>
          ) : item.video ? (
            <video
              src={item.video}
              className={styles.cardImage}
              loop
              muted
              playsInline
              title={item.title}
              onClick={handleVideoClick}
              onDoubleClick={handleVideoDoubleClick}
              style={{ cursor: 'pointer' }}
              controls={false}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={item.image} className={styles.cardImage} alt={item.title} />
          )}
          
          <h1 className={styles.cardTitle}>{item.title}</h1>
          <p className={styles.cardContent}>{item.description}</p>
          
          {/* Website Link Button */}
          {item.website && (
            <a 
              href={item.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.websiteLink}
            >
              Visit Website
            </a>
          )}
        </div>
      ))}

    </div>
  );
}

export default MainContent;