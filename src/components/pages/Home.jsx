import "../../App.css";
import HeroSection from "./../HeroSection";
import React from "react";
import Card from "../Card";
import Footer from "./../Footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
