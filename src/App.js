import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Middle from "./components/Middle/Middle";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Book from "./components/Book/Book";
import ReviewSlider from "./components/ReviewSlider/ReviewSlider";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Middle />
      <Services />
      <Book />
      <About />
      <ReviewSlider />
      <Contact />
    </>
  );
}

export default App;
