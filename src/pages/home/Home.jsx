import React, { useState, useEffect } from "react";
import Hero from "../components/Hero.jsx";
import AboutSection from "../components/AboutSection.jsx";
import TopNav from "../../common/TopNav.jsx";
import MainContent from "../components/MainContent.jsx";
import data from "../../data.jsx";
import Footer from "../../common/Footer.jsx";

function Home() {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("");

  // The function to update the searchTerm state
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
      <Hero searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <MainContent cardData={data.cardData} searchTerm={searchTerm} />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
