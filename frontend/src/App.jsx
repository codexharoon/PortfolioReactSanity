import React from "react";
import { Navbar } from "./components";
import "./App.scss";
import { Header, About, Skills, Work, Testimonials } from "./container";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Work />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
