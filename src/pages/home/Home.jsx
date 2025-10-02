import Hero from "../components/Hero.jsx";
import TopNav from "../../common/TopNav.jsx";
import MainContent from "../components/MainContent.jsx";
import { useState } from "react";
import data from "../../data.jsx"; 
import Footer from "../../common/Footer.jsx";
import SkillsScroll from "../components/SkillsScroll.jsx";

function Home() {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("");

  // The function to update the searchTerm state
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      {/* TOPNAV */}
      <TopNav />

      {/* HERO */}
      <Hero searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      {/* SKILLS SCROLL */}
      <SkillsScroll />

      {/* MAIN CONTENT */}
      <MainContent
        cardData={data.cardData} 
        searchTerm={searchTerm} 
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;