import React from "react";
import { Navbar } from "./components";
import "./App.scss";
import { Header, About, Skills, Work } from "./container";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Work />
      </div>
    </>
  );
}

export default App;
