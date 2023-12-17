import React from "react";
import { Navbar } from "./components";
import "./App.scss";
import { Header, About, Work } from "./container";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
      </div>
    </>
  );
}

export default App;
