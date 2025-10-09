import React, { useState, useEffect } from "react";
import Hero from "../components/Hero.jsx";
import AboutSection from "../components/AboutSection.jsx";
import TopNav from "../../common/TopNav.jsx";
import MainContent from "../components/MainContent.jsx";
import data from "../../data.jsx";
import Footer from "../../common/Footer.jsx";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  // State to hold the URL of the credential clicked in the Hero
  const [selectedCredentialUrl, setSelectedCredentialUrl] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Find the certificate links to pass to the Hero component
  const qualificationsData = data.cardData.find(card => card.id === 2);
  const certificateLinks = qualificationsData ? qualificationsData.links : [];

  useEffect(() => {
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;

    const prevBodyOverflowX = bodyStyle.overflowX;
    const prevBodyOverscroll = bodyStyle.overscrollBehaviorX;
    const prevBodyTouchAction = bodyStyle.touchAction;
    const prevBodyMargin = bodyStyle.margin;
    const prevHtmlOverflowX = htmlStyle.overflowX;

    bodyStyle.overscrollBehaviorX = "none";
    bodyStyle.touchAction = "pan-y";
    bodyStyle.overflowX = "hidden";
    bodyStyle.margin = "0";
    htmlStyle.overflowX = "hidden";

    return () => {
      bodyStyle.overscrollBehaviorX = prevBodyOverscroll;
      bodyStyle.touchAction = prevBodyTouchAction;
      bodyStyle.overflowX = prevBodyOverflowX;
      bodyStyle.margin = prevBodyMargin;
      htmlStyle.overflowX = prevHtmlOverflowX;
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* TOPNAV */}
      <TopNav />

      {/* HERO */}
      <Hero
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        certificateLinks={certificateLinks}
        onCredentialSelect={setSelectedCredentialUrl}
      />

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <MainContent
          cardData={data.cardData}
          searchTerm={searchTerm}
          selectedCredentialUrl={selectedCredentialUrl}
        />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;